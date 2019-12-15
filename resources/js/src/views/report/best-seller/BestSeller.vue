<template>
    <vx-card no-shadow>
        <vs-table pagination max-items="3" stripe search :data="new_report_best_seller">
            <template slot="thead">
                <vs-th sort-key="id">ID</vs-th>
                <vs-th sort-key="name">Name</vs-th>
                <vs-th sort-key="qty_sold">QtySold</vs-th>
                <vs-th sort-key="unit">Unit</vs-th>
                <vs-th sort-key="category">Category</vs-th>
                <vs-th sort-key="brand">Brand</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="item" :key="index" v-for="(item, index) in data">
                    <vs-td :data="item.id">
                        {{ item.id }}
                    </vs-td>
                    <vs-td :data="item.name">
                        {{ item.name }}
                    </vs-td>
                    <vs-td :data="item.qty_sold">
                        {{item.qty_sold}}
                    </vs-td>
                    <vs-td :data="item.unit">
                        {{ item.unit }}
                    </vs-td>
                    <vs-td :data="item.category">
                        {{ item.category }}
                    </vs-td>
                    <vs-td :data="item.brand">
                        {{ item.brand }}
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </vx-card>
</template>

<script>
    import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
    import MoneyFormat from 'vue-money-format'

    export default {
        name: "BestSeller",
        components: {
            'money-format': MoneyFormat,
            StatisticsCardLine
        },
        data() {
            return {
                selected: []
            }
        },
        computed: {
            all_report_best_sellers() {
                return this.$store.getters.all_report_best_seller
            },
            new_report_best_seller(){
                let self = this;
                let data = [];
                self.all_report_best_sellers.forEach(function (item,index) {
                    data.push({id:item.id,name:item.name,qty_sold:self.sum_qty_sold(item.purchase_detail_report),unit:item.unit,category:item.category,brand:item.brand})
                });
                return data.sort(function (a,b) {
                    return b.qty_sold - a.qty_sold
                })
            },
            all_report_stocks() {
                return this.$store.getters.all_report_stock
            },
        },
        methods: {
            async fetchReportBestSeller() {
                await this.$store.dispatch('fetchReportBestSeller')
            },
            async fetchReportStock() {
                await this.$store.dispatch('fetchReportStock')
            },
            sum_qty(data) {
                return data.reduce(function (total, item) {
                    return total + parseFloat(item.remain_qty)
                }, 0)
            },
            sum_qty_sold(data) {
                return data.reduce(function (total, item) {
                    return total + (parseFloat(item.qty-item.remain_qty));
                }, 0)
            }
        },
        async created() {
            await this.fetchReportStock();
            await this.fetchReportBestSeller();
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