<template>
    <vx-card no-shadow>
        <div class="vx-row">
            <div class="vx-col w-full">
                <vs-input
                        icon-pack="feather"
                        icon="icon-calendar"
                        placeholder="ជ្រើសរើស"
                        v-model="date_range"
                        class="is-label-placeholder w-full mb-base"
                        @click="dialog = true" />
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

                        <q-card-section class="q-px-lg">
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
                        :statistic="$formatter.format((total_invoice-total_due_balance_invoice)-(total_purchase-total_due_balance_purchase))"
                        statisticTitle="ចំណេញ/ខាត"/>
            </div>
        </div>
    </vx-card>
</template>

<script>
    import ShowPurchase from "../../purchase/showPurchase";
    import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
    import MoneyFormat from 'vue-money-format'
    import ShowInvoice from "../../sale/showInvoice";
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
                dialog:false,
                date_range:`${this.$moment().startOf('month').format('YYYY-MM-DD')} ~ ${this.$moment().endOf('month').format('YYYY-MM-DD')}`,
                date_picker:{
                  start:this.$moment().startOf('month').format('YYYY-MM-DD'),
                  end:this.$moment().endOf('month').format('YYYY-MM-DD'),
                },
                selected: [],
                users: [
                    {
                        "id": 1,
                        "name": "Leanne Graham",
                        "username": "Bret",
                        "email": "Sincere@april.biz",
                        "website": "hildegard.org",
                    },
                    {
                        "id": 2,
                        "name": "Ervin Howell",
                        "username": "Antonette",
                        "email": "Shanna@melissa.tv",
                        "website": "anastasia.net",
                    }
                ]
            }
        },
        computed: {
            //purchase
            all_purchases(){
                return this.$store.getters.all_purchase
            },
            all_purchase_received(){
                let self =  this;
                return self.all_purchases.filter(function (x) {
                    return x.purchase_status === 'received'
                })
            },
            //filter range date
            filtered_range_date_purchase(){
                let self = this;
                return self.all_purchase_received.filter(function (x) {
                    let start = new Date(self.date_picker.start);
                    let end = new Date(self.date_picker.end);
                    let date = new Date(x.date);
                    return date>=start && date<=end;
                })
            },
            //total due balance
            total_due_balance_purchase(){
                let self = this;
                return self.filtered_range_date_purchase.reduce(function (total,item) {
                    return total+parseFloat(item.due_balance)
                },0)
            },
            total_purchase(){
                let self = this;
                let total = 0;
                self.filtered_range_date_purchase.forEach(function (item,index) {
                    item.purchase_detail.forEach(function (el,index) {
                        if (el.inventory_type ==='inventory_part' || el.inventory_type ==='purchase_only') {
                            total += parseFloat(el.amount)
                        }
                    })
                });
                return total;
            },
            //end purchase
            all_invoices(){
                return this.$store.getters.all_invoice
            },
            all_invoice_received(){
                let self =  this;
                return self.all_invoices.filter(function (x) {
                    return x.invoice_status === 'received'
                })
            },
            //filter range date
            filtered_range_date_invoice(){
                let self = this;
                return self.all_invoice_received.filter(function (x) {
                    let start = new Date(self.date_picker.start);
                    let end = new Date(self.date_picker.end);
                    let date = new Date(x.date);
                    return date>=start && date<=end;
                })
            },
            //total due balance
            total_due_balance_invoice(){
                let self = this;
                return self.filtered_range_date_invoice.reduce(function (total,item) {
                    return total+parseFloat(item.due_balance)
                },0)
            },
            total_invoice(){
                let self = this;
                let total = 0;
                self.filtered_range_date_invoice.forEach(function (item,index) {
                    for (const [index, el] of item.invoice_detail.entries()) {
                        if (el.inventory_type === 'bundle'){
                            total += parseFloat(item.amount);
                            break;
                        }
                        if (el.inventory_type !=='purchase_only' && el.inventory_type !=='service') {
                            total += parseFloat(el.amount)
                        }
                    }
                });
                return total;
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
        },
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