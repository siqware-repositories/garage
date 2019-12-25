<template>
    <vx-card no-shadow>
        <div class="vx-row">
            <div class="vx-col md:w-1/3 w-full">
                <statistics-card-line
                        hideChart
                        icon="PackageIcon"
                        icon-right
                        :statistic="all_report_stocks.length"
                        statisticTitle="ទំនិញសរុប"/>
            </div>
            <div class="vx-col md:w-1/3 w-full">
                <statistics-card-line
                        hideChart
                        icon="PackageIcon"
                        icon-right
                        :statistic="out_stock_count"
                        statisticTitle="ទំនិញដាច់ស្តុក"/>
            </div>
            <div class="vx-col w-full">
                <vs-collapse type="margin">
                    <vs-collapse-item>
                        <div slot="header">
                            បង្ហាញទំនិញដាច់ស្តុក
                        </div>
                        <vs-list>
                            <vs-list-item :key="index" v-for="(item,index) in out_stock_product"
                                          :title="`ID: ${item.id} ឈ្មោះ​៖ ${item.name}`"
                                          :subtitle="`Description: ${item.description}`"/>
                        </vs-list>
                    </vs-collapse-item>
                </vs-collapse>
            </div>
        </div>
        <vs-table pagination max-items="3" stripe search :data="all_report_stocks">
            <template slot="thead">
                <vs-th sort-key="id">ID</vs-th>
                <vs-th sort-key="name">Name</vs-th>
                <vs-th>Qty</vs-th>
                <vs-th sort-key="unit">Unit</vs-th>
                <vs-th sort-key="category">Category</vs-th>
                <vs-th sort-key="brand">Brand</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="item" :key="index" v-for="(item, index) in data"
                       :class="sum_qty(item.purchase_detail)<=0?'text-danger':''">
                    <vs-td :data="item.id">
                        {{ item.id }}
                    </vs-td>
                    <vs-td :data="item.name">
                        {{ item.name }}
                    </vs-td>
                    <vs-td>
                        {{sum_qty(item.purchase_detail)}}
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
                    <template slot="expand">
                        <div class="w-full">
                            <table class="expense">
                                <thead>
                                <tr>
                                    <th class="expense">ល.រ<br>
                                        No
                                    </th>
                                    <th class="expense">អ្នកផ្គត់ផ្គង់<br>
                                        Supplier
                                    </th>
                                    <th class="expense">ចំនួន<br>
                                        Qty
                                    </th>
                                    <th class="expense">តម្លៃទិញ<br>
                                        Purchase Price
                                    </th>
                                    <th class="expense">តម្លៃលក់<br>
                                        Sale Price
                                    </th>
                                    <th class="expense">កាលបរិច្ឆេទ<br>
                                        Date
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(tr,indextr) in item.purchase_detail" :key="indextr">
                                    <td class="expense pl-3">
                                        {{indextr+1}}
                                    </td>
                                    <td class="expense pl-3">
                                        {{tr.supplier.name}}
                                    </td>
                                    <td class="expense pl-3">
                                        {{tr.remain_qty}}
                                    </td>
                                    <td class="expense pl-3">
                                        <money-format
                                                :value="parseFloat(tr.purchase)"
                                                locale='en'
                                                currency-code='USD'>
                                        </money-format>
                                    </td>
                                    <td class="expense pl-3">
                                        <money-format
                                                :value="parseFloat(tr.sale)"
                                                locale='en'
                                                currency-code='USD'>
                                        </money-format>
                                    </td>
                                    <td class="expense pl-3">
                                        {{tr.date}}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </template>
                </vs-tr>
            </template>
        </vs-table>
    </vx-card>
</template>

<script>
    import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
    import MoneyFormat from 'vue-money-format'

    export default {
        name: "Stock",
        components: {
            'money-format': MoneyFormat,
            StatisticsCardLine
        },
        data() {
            return {
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
            all_report_stocks() {
                return this.$store.getters.all_report_stock
            },
            out_stock_count() {
                let count = 0;
                this.all_report_stocks.forEach(function (item, index) {
                    let sum = item.purchase_detail.reduce(function (total, item) {
                        return total + parseFloat(item.remain_qty)
                    }, 0);
                    if (sum <= 0) {
                        count += 1
                    }
                });
                return count;
            },
            out_stock_product() {
                let products = [];
                this.all_report_stocks.forEach(function (item, index) {
                    let sum = item.purchase_detail.reduce(function (total, item) {
                        return total + parseFloat(item.remain_qty)
                    }, 0);
                    if (sum <= 0) {
                        products.push(item)
                    }
                });
                return products;
            }
        },
        methods: {
            sum_qty(data) {
                return data.reduce(function (total, item) {
                    return total + parseFloat(item.remain_qty)
                }, 0)
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