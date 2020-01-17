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
                        @click="$modal.show('show-date-range')" />
                <modal height="auto" :scrollable="true" :pivotY="0.2" :clickToClose="false" name="show-date-range">
                    <div class="flex justify-end">
                        <i @click="$modal.hide('show-date-range')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
                    </div>
                    <vx-card no-shadow>
                        <date-range-picker
                                :theme="{primary: '#28C76F',secondary: '#2D3E50',ternary: '#93A0BD',border: '#e6e6e6',light: '#ffffff',dark: '#000000',hovers: {day: '#CCC',range: '#e6e6e6'}}"
                                @update="dateRange"/>
                    </vx-card>
                </modal>
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col md:w-1/3 w-full">
                <statistics-card-line
                        hideChart
                        icon="DollarSignIcon"
                        icon-right
                        :statistic="$formatter.format(total_purchase-total_due_balance)"
                        statisticTitle="ចំណាយ"/>
            </div>
            <div class="vx-col md:w-1/3 w-full">
                <statistics-card-line
                        hideChart
                        icon="DollarSignIcon"
                        icon-right
                        :statistic="$formatter.format(total_due_balance)"
                        statisticTitle="ជំពាក់គេ"/>
            </div>
            <div class="vx-col md:w-1/3 w-full">
                <statistics-card-line
                        hideChart
                        icon="DollarSignIcon"
                        icon-right
                        :statistic="$formatter.format(total_purchase)"
                        statisticTitle="ចំណាយសរុប"/>
            </div>
            <div class="vx-col w-full">
                <vs-collapse type="margin">
                    <vs-collapse-item>
                        <div slot="header">
                            បង្ហាញវិក័យបត្រជំពាក់
                        </div>
                        <vs-list>
                            <vs-list-item :key="index" v-for="(item,index) in due_purchase_invoice"
                                          :title="`ID: ${item.id} ពិពណ៌នា៖ ${item.description} អ្នកផ្គត់ផ្គង់៖ ${item.supplier.name} ជំពាក់៖ ${$formatter.format(item.due_balance)}`"/>
                        </vs-list>
                    </vs-collapse-item>
                </vs-collapse>
            </div>
        </div>
        <div class="flex btn-group">
            <vs-button v-if="selected.length===1" @click="$refs.showPurchase.show(selected[0])" type="relief" icon-pack="feather" icon="icon-eye">បង្ហាញ</vs-button>
        </div>
        <show-purchase ref="showPurchase"></show-purchase>
        <vs-table multiple v-model="selected" pagination max-items="10" search :data="filtered_range_date">
            <template slot="thead">
                <vs-th sort-key="id">ល.រ</vs-th>
                <vs-th sort-key="description">Description</vs-th>
                <vs-th >Supplier</vs-th>
                <vs-th sort-key="location">Location</vs-th>
                <vs-th sort-key="qty">QTY</vs-th>
                <vs-th sort-key="balance">Balance</vs-th>
                <vs-th sort-key="amount">Amount</vs-th>
                <vs-th sort-key="due_balance">Due Balance</vs-th>
                <vs-th sort-key="purchase_date">Date</vs-th>
            </template>
            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" :class="tr.due_balance>=1?'text-danger':''">
                    <vs-td :data="data[indextr].id">
                        {{ data[indextr].id }}
                    </vs-td>
                    <vs-td :data="data[indextr].description">
                        {{ data[indextr].description }}
                    </vs-td>
                    <vs-td :data="data[indextr].supplier.name">
                        {{ data[indextr].supplier.name }}
                    </vs-td>
                    <vs-td :data="data[indextr].location">
                        {{ data[indextr].location }}
                    </vs-td>
                    <vs-td :data="data[indextr].qty">
                        {{ data[indextr].qty }}
                    </vs-td>
                    <vs-td :data="data[indextr].balance">
                        {{$formatter.format(parseFloat(data[indextr].balance))}}
                    </vs-td>
                    <vs-td :data="data[indextr].amount">
                        {{$formatter.format(parseFloat(data[indextr].amount))}}
                    </vs-td>
                    <vs-td :data="data[indextr].due_balance">
                        {{$formatter.format(parseFloat(data[indextr].due_balance))}}
                    </vs-td>
                    <vs-td :data="data[indextr].date">
                        {{ data[indextr].date }}
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

    export default {
        name: "ReportPurchase",
        components: {
            ShowPurchase,
            'money-format': MoneyFormat,
            StatisticsCardLine,
        },
        data() {
            return {
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
            filtered_range_date(){
                let self = this;
                return self.all_purchase_received.filter(function (x) {
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
            total_purchase(){
                let self = this;
                let total = 0;
                self.filtered_range_date.forEach(function (item,index) {
                    item.purchase_detail.forEach(function (el,index) {
                        if (el.inventory_type ==='inventory_part' || el.inventory_type ==='purchase_only') {
                            total += parseFloat(el.amount)
                        }
                    })
                });
                return total;
            },
            due_purchase_invoice(){
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
                this.$modal.hide('show-date-range');
                this.date_picker.start = this.$moment(value.from).format('YYYY-MM-DD');
                this.date_picker.end = this.$moment(value.to).format('YYYY-MM-DD');
            }
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