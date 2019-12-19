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
        <div class="vx-row mb-base">
            <div class="vx-col md:w-1/3 w-full">
                <statistics-card-line
                        hideChart
                        icon="DollarSignIcon"
                        icon-right
                        :statistic="$formatter.format(_total_expense)"
                        statisticTitle="ចំណាយ"/>
            </div>
        </div>
        <div class="flex btn-group">
            <vs-button v-if="selected.length===1" @click="$refs.showExpense.show(selected[0])" type="relief" icon-pack="feather" icon="icon-eye">បង្ហាញ</vs-button>
        </div>
        <show-expense ref="showExpense"/>
        <vs-table multiple v-model="selected" pagination max-items="3" search :data="filtered_range_date">
            <template slot="thead">
                <vs-th sort-key="id">ល.រ</vs-th>
                <vs-th sort-key="note">សំគាល់</vs-th>
                <vs-th>ទឹកប្រាក់</vs-th>
                <vs-th sort-key="date">កាលបរិច្ឆេទ</vs-th>
            </template>
            <template slot-scope="{data}">
                <vs-tr :data="item" :key="index" v-for="(item, index) in data">
                    <vs-td :data="item.id">
                        {{ item.id }}
                    </vs-td>
                    <vs-td :data="item.note">
                        {{ item.note }}
                    </vs-td>
                    <vs-td>
                        <money-format
                                :value="total_expense(item.expense_detail)"
                                locale='en'
                                currency-code='USD'>
                        </money-format>
                    </vs-td>
                    <vs-td :data="item.date">
                        {{ item.date }}
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
    import ShowExpense from "../../expense/showExpense";
    export default {
        name: "ReportExpense",
        components: {
            ShowExpense,
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
            all_expenses(){
                return this.$store.getters.all_expense;
            },
            //filter range date
            filtered_range_date(){
                let self = this;
                return self.all_expenses.filter(function (x) {
                    let start = new Date(self.date_picker.start);
                    let end = new Date(self.date_picker.end);
                    let date = new Date(x.date);
                    return date>=start && date<=end;
                })
            },
            _total_expense(){
                self = this;
                let total = 0;
                self.filtered_range_date.forEach(function (item,index) {
                    total+=parseFloat(self.total_expense(item.expense_detail))
                });
                return total;
            }
        },
        methods: {
            //calc total expense
            total_expense(data){
                return data.reduce(function (total,item) {
                    return total+parseFloat(item.balance)
                },0)
            },
            //fetch expense
            async fetchExpense(){
                await this.$store.dispatch('fetchExpense')
            },
            //date range
            dateRange(value) {
                this.date_range = `${this.$moment(value.from).format('YYYY-MM-DD')} ~ ${this.$moment(value.to).format('YYYY-MM-DD')}`;
                this.$modal.hide('show-date-range');
                this.date_picker.start = this.$moment(value.from).format('YYYY-MM-DD');
                this.date_picker.end = this.$moment(value.to).format('YYYY-MM-DD');
            }
        },
        async created() {
            await this.fetchExpense();
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