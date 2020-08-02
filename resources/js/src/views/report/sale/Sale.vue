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
                        :statistic="$formatter.format(total_invoice-total_due_balance)"
                        statisticTitle="លក់"/>
            </div>
            <div class="vx-col md:w-1/3 w-full">
                <statistics-card-line
                        hideChart
                        icon="DollarSignIcon"
                        icon-right
                        :statistic="$formatter.format(total_due_balance)"
                        statisticTitle="គេជំពាក់"/>
            </div>
            <div class="vx-col md:w-1/3 w-full">
                <statistics-card-line
                        hideChart
                        icon="DollarSignIcon"
                        icon-right
                        :statistic="$formatter.format(total_invoice)"
                        statisticTitle="លក់សរុប"/>
            </div>
            <div class="vx-col md:w-1/3 w-full mt-base">
                <statistics-card-line
                        hideChart
                        icon="DollarSignIcon"
                        icon-right
                        :statistic="$formatter.format(total_invoice-total_invoice_with_purchase)"
                        statisticTitle="ចំណេញពីលក់+ប្រាក់គេជំពាក់"/>
            </div>
            <div class="vx-col md:w-1/3 w-full mt-base">
                <statistics-card-line
                        hideChart
                        icon="DollarSignIcon"
                        icon-right
                        :statistic="$formatter.format((total_invoice-total_invoice_with_purchase)-total_due_balance)"
                        statisticTitle="ចំណេញពីលក់-ប្រាក់គេជំពាក់"/>
            </div>
            <div class="vx-col w-full">
                <vs-collapse type="margin">
                    <vs-collapse-item>
                        <div slot="header">
                            បង្ហាញវិក័យបត្រគេជំពាក់
                        </div>
                        <vs-list>
                            <vs-list-item :key="index" v-for="(item,index) in due_sale_invoice"
                                          :title="`ID: ${item.id} ពិពណ៌នា៖ ${item.description} អតិថិជន៖ ${item.customer.name} ជំពាក់៖ ${$formatter.format(item.due_balance)}`"/>
                        </vs-list>
                    </vs-collapse-item>
                </vs-collapse>
            </div>
        </div>
        <div class="flex btn-group">
            <vs-button v-if="selected.length===1" @click="$refs.showInvoice.show(selected[0])" type="relief" icon-pack="feather" icon="icon-eye">បង្ហាញ</vs-button>
        </div>
        <show-invoice ref="showInvoice"></show-invoice>
        <vs-table multiple v-model="selected" pagination max-items="10" search :data="filtered_range_date">
            <template slot="thead">
                <vs-th sort-key="id">ល.រ</vs-th>
                <vs-th sort-key="description">Description</vs-th>
                <vs-th >Customer</vs-th>
                <vs-th sort-key="qty">QTY</vs-th>
                <vs-th sort-key="balance">Balance</vs-th>
                <vs-th sort-key="amount">Amount</vs-th>
                <vs-th sort-key="due_balance">Due Balance</vs-th>
                <vs-th sort-key="date">Date</vs-th>
            </template>
            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" :class="tr.due_balance>=1?'text-danger':''">
                    <vs-td :data="tr.id">
                        {{ tr.id }}
                    </vs-td>
                    <vs-td :data="tr.description">
                        {{ tr.description }}
                    </vs-td>
                    <vs-td :data="tr.customer.name">
                        {{ tr.customer.name }}
                    </vs-td>
                    <vs-td :data="tr.qty">
                        {{ tr.qty }}
                    </vs-td>
                    <vs-td :data="tr.balance">
                        {{$formatter.format(tr.balance)}}
                    </vs-td>
                    <vs-td :data="tr.amount">
                        {{$formatter.format(tr.amount)}}
                    </vs-td>
                    <vs-td :data="tr.due_balance">
                        {{$formatter.format(tr.due_balance)}}
                    </vs-td>
                    <vs-td :data="tr.date">
                        {{ tr.date }}
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
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
            filtered_range_date(){
                let self = this;
                return self.all_invoice_received.filter(function (x) {
                    let start = new Date(self.date_picker.start);
                    let end = new Date(self.date_picker.end);
                    let date = new Date(x.date);
                    return date>=start && date<=end;
                })
            },
            //total due balance
            total_due_balance(){
                let self = this;
                return self.filtered_range_date.reduce(function (total,item) {
                    return total+parseFloat(item.due_balance)
                },0)
            },
            total_invoice(){
                let self = this;
                let total = 0;
                self.filtered_range_date.forEach(function (item,index) {
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
            },
            //invoice
            total_invoice_with_purchase(){
                let self = this;
                let total = 0;
                self.filtered_range_date.forEach(function (item,index) {
                    for (const [index, el] of item.invoice_detail.entries()) {
                        if (el.inventory_type === 'bundle'){
                            total += parseFloat(item.purchase_amount);
                            break;
                        }
                        if (el.inventory_type !=='purchase_only' && el.inventory_type !=='service') {
                            total += parseFloat(el.purchase*el.qty)
                        }
                    }
                });
                return total;
            },
            due_sale_invoice(){
                let self = this;
                return self.filtered_range_date.filter(function (x) {
                    return parseFloat(x.due_balance)>=1
                })
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
        async created() {

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