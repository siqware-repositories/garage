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
        <div class="vx-row mb-base">
            <div class="vx-col md:w-1/3 w-full">
                <statistics-card-line
                        hideChart
                        icon="DollarSignIcon"
                        icon-right
                        :statistic="$formatter.format(_total_income)"
                        statisticTitle="ចំណូល"/>
            </div>
        </div>
    </vx-card>
</template>

<script>

    import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
    export default {
        name: "CloseIncome",
        components: {
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
                selected: []
            }
        },
        computed: {
            all_incomes(){
                return this.$store.getters.all_income;
            },
            //filter range date
            filtered_range_date(){
                let self = this;
                return self.all_incomes.filter(function (x) {
                    let start = new Date(self.date_picker.start);
                    let end = new Date(self.date_picker.end);
                    let date = new Date(x.date);
                    return date>=start && date<=end;
                })
            },
            _total_income(){
                self = this;
                let total = 0;
                self.filtered_range_date.forEach(function (item,index) {
                    total+=parseFloat(self.total_income(item.income_detail))
                });
                return total;
            }
        },
        methods: {
            //calc total income
            total_income(data){
                return data.reduce(function (total,item) {
                    return total+parseFloat(item.balance)
                },0)
            },
            //date range
            dateRange(value) {
                this.date_range = `${this.$moment(value.from).format('YYYY-MM-DD')} ~ ${this.$moment(value.to).format('YYYY-MM-DD')}`;
                this.dialog = false;
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