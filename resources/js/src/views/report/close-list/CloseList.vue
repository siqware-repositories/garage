<template>
    <vx-card
            no-shadow>
        <div class="vx-row">
            <div class="vx-col w-full">
                <vs-input
                        icon-pack="feather"
                        icon="icon-calendar"
                        placeholder="ជ្រើសរើស"
                        v-model="date_range"
                        class="is-label-placeholder w-full mb-base"
                        @click="dialog = true"/>
                <q-dialog
                        v-model="dialog"
                        persistent
                        :maximized="true"
                        transition-show="slide-up"
                        transition-hide="slide-down"
                >
                    <q-card>
                        <q-bar>
                            <q-space/>
                            <q-btn dense
                                   flat
                                   icon="close"
                                   v-close-popup>
                                <q-tooltip
                                        content-class="bg-white text-primary">
                                    Close
                                </q-tooltip>
                            </q-btn>
                        </q-bar>

                        <q-card-section
                                class="q-px-lg">
                            <date-range-picker
                                    :theme="{primary: '#28C76F',secondary: '#2D3E50',ternary: '#93A0BD',border: '#e6e6e6',light: '#ffffff',dark: '#000000',hovers: {day: '#CCC',range: '#e6e6e6'}}"
                                    @update="dateRange"/>
                        </q-card-section>
                    </q-card>
                </q-dialog>
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col md:w-1/3 w-full">
                <statistics-card-line
                        hideChart
                        icon="DollarSignIcon"
                        icon-right
                        :statistic="$formatter.format(total_purchase-total_due_balance_purchase)"
                        statisticTitle="ទិញ"/>
            </div>
            <div class="vx-col md:w-1/3 w-full">
                <statistics-card-line
                        hideChart
                        icon="DollarSignIcon"
                        icon-right
                        :statistic="$formatter.format(total_invoice-total_due_balance_invoice)"
                        statisticTitle="លក់"/>
            </div>
            <div class="vx-col md:w-1/3 w-full">
                <statistics-card-line
                        hideChart
                        icon="DollarSignIcon"
                        icon-right
                        :statistic="$formatter.format(_total_expense)"
                        statisticTitle="ចំណាយទូទៅ"/>
            </div>
        </div>
        <div class="vx-row mt-base">
            <div class="vx-col md:w-1/3 w-full">
                <statistics-card-line
                        hideChart
                        icon="DollarSignIcon"
                        icon-right
                        :statistic="$formatter.format(_total_income)"
                        statisticTitle="ចំណូលទូទៅ"/>
            </div>
            <div class="vx-col md:w-1/3 w-full">
                <statistics-card-line
                        hideChart
                        icon="DollarSignIcon"
                        icon-right
                        :statistic="$formatter.format(_total_close_payroll)"
                        statisticTitle="ចំណាយប្រាក់ខែបុគ្គលិក"/>
            </div>
            <div class="vx-col md:w-1/3 w-full">
                <statistics-card-line
                        hideChart
                        icon="DollarSignIcon"
                        icon-right
                        :statistic="$formatter.format(total_investment)"
                        statisticTitle="ប្រាក់វិនិយោគ"/>
            </div>
            <div class="vx-col md:w-1/3 w-full mt-base">
                <statistics-card-line
                        color="success"
                        hideChart
                        icon="DollarSignIcon"
                        icon-right
                        :statistic="$formatter.format((_total_income+total_investment+(total_invoice-total_due_balance_invoice))-(_total_expense+_total_close_payroll+(total_purchase-total_due_balance_purchase)))"
                        statisticTitle="សរុបបញ្ជីរួម"/>
            </div>
        </div>
    </vx-card>
</template>

<script>
    import ShowPurchase
        from "../../purchase/showPurchase";

    import StatisticsCardLine
        from '@/components/statistics-cards/StatisticsCardLine.vue'
    import MoneyFormat
        from 'vue-money-format'
    import ShowInvoice
        from "../../sale/showInvoice";

    export default {
        name: "ReportSale",
        components: {
            ShowInvoice,
            ShowPurchase,
            'money-format': MoneyFormat,
            StatisticsCardLine,
        },
        data() {
            return {
                dialog: false,
                date_range: `${this.$moment('2019/01/01').format('YYYY-MM-DD')} ~ ${this.$moment().endOf('year').format('YYYY-MM-DD')}`,
                date_picker: {
                    start: this.$moment('2019/01/01').format('YYYY-MM-DD'),
                    end: this.$moment().endOf('year').format('YYYY-MM-DD'),
                }
            }
        },
        computed: {
            //purchase
            all_investments() {
                return this.$store.getters.all_investment
            },
            //total investment
            total_investment() {
                return this.all_investments.reduce(function (total, item) {
                    return total + parseFloat(item.balance)
                }, 0)
            },
            //purchase
            all_purchases() {
                return this.$store.getters.all_purchase
            },
            all_purchase_received() {
                let self = this;
                return self.all_purchases.filter(function (x) {
                    return x.purchase_status === 'received'
                })
            },
            //filter range date
            filtered_range_date_purchase() {
                let self = this;
                return self.all_purchase_received.filter(function (x) {
                    let start = new Date(self.date_picker.start);
                    let end = new Date(self.date_picker.end);
                    let date = new Date(x.date);
                    return date >= start && date <= end;
                })
            },
            //total due balance
            total_due_balance_purchase() {
                let self = this;
                return self.filtered_range_date_purchase.reduce(function (total, item) {
                    return total + parseFloat(item.due_balance)
                }, 0)
            },
            total_purchase() {
                let self = this;
                let total = 0;
                self.filtered_range_date_purchase.forEach(function (item, index) {
                    item.purchase_detail.forEach(function (el, index) {
                        if (el.inventory_type === 'inventory_part' || el.inventory_type === 'purchase_only') {
                            total += parseFloat(el.amount)
                        }
                    })
                });
                return total;
            },
            //end purchase
            all_invoices() {
                return this.$store.getters.all_invoice
            },
            all_invoice_received() {
                let self = this;
                return self.all_invoices.filter(function (x) {
                    return x.invoice_status === 'received'
                })
            },
            //filter range date
            filtered_range_date_invoice() {
                let self = this;
                return self.all_invoice_received.filter(function (x) {
                    let start = new Date(self.date_picker.start);
                    let end = new Date(self.date_picker.end);
                    let date = new Date(x.date);
                    return date >= start && date <= end;
                })
            },
            //total due balance
            total_due_balance_invoice() {
                let self = this;
                return self.filtered_range_date_invoice.reduce(function (total, item) {
                    return total + parseFloat(item.due_balance)
                }, 0)
            },
            total_invoice() {
                let self = this;
                let total = 0;
                self.filtered_range_date_invoice.forEach(function (item, index) {
                    for (const [index, el] of item.invoice_detail.entries()) {
                        if (el.inventory_type === 'bundle') {
                            total += parseFloat(item.amount);
                            break;
                        }
                        if (el.inventory_type !== 'purchase_only') {
                            total += parseFloat(el.amount)
                        }
                    }
                });
                return total;
            },
            //expense
            all_expenses() {
                return this.$store.getters.all_expense;
            },
            //filter range date
            filtered_range_date_expense() {
                let self = this;
                return self.all_expenses.filter(function (x) {
                    let start = new Date(self.date_picker.start);
                    let end = new Date(self.date_picker.end);
                    let date = new Date(x.date);
                    return date >= start && date <= end;
                })
            },
            _total_expense() {
                self = this;
                let total = 0;
                self.filtered_range_date_expense.forEach(function (item, index) {
                    total += parseFloat(self.total_expense(item.expense_detail))
                });
                return total;
            },
            //income
            all_incomes() {
                return this.$store.getters.all_income;
            },
            //filter range date
            filtered_range_date() {
                let self = this;
                return self.all_incomes.filter(function (x) {
                    let start = new Date(self.date_picker.start);
                    let end = new Date(self.date_picker.end);
                    let date = new Date(x.date);
                    return date >= start && date <= end;
                })
            },
            _total_income() {
                self = this;
                let total = 0;
                self.filtered_range_date.forEach(function (item, index) {
                    total += parseFloat(self.total_income(item.income_detail))
                });
                return total;
            },
            //PAYROLL
            all_close_payrolls() {
                return this.$store.getters.all_report_close_payroll;
            },
            //filter range date
            filtered_range_date_close_payroll() {
                let self = this;
                return self.all_close_payrolls.filter(function (x) {
                    let start = new Date(self.date_picker.start);
                    let end = new Date(self.date_picker.end);
                    let date = new Date(x.date);
                    return date >= start && date <= end;
                })
            },
            _total_close_payroll() {
                self = this;
                return self.filtered_range_date_close_payroll.reduce(function (total, item) {
                    return total + parseFloat(item.salary)
                }, 0)
            }
        },
        methods: {
            //date range
            dateRange(value) {
                this.date_range = `${this.$moment(value.from).format('YYYY-MM-DD')} ~ ${this.$moment(value.to).format('YYYY-MM-DD')}`;
                this.dialog = false;
                this.date_picker.start = this.$moment(value.from).format('YYYY-MM-DD');
                this.date_picker.end = this.$moment(value.to).format('YYYY-MM-DD');
            },
            //calc total expense
            total_expense(data) {
                return data.reduce(function (total, item) {
                    return total + parseFloat(item.balance)
                }, 0)
            },
            //calc total income
            total_income(data) {
                return data.reduce(function (total, item) {
                    return total + parseFloat(item.balance)
                }, 0)
            },
        }
    }
</script>

<style scoped>
    table.expense, td.expense, th.expense {
        border: 1px solid black;
    }

    table.expense {
        border-collapse: collapse;
        width: 100%;
    }

    th.expense {
        text-align: left;
    }
</style>