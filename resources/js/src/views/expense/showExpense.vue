<template>
    <q-dialog
        v-model="dialog"
        persistent
        :maximized="true"
        transition-show="slide-up"
        transition-hide="slide-down"
    >
        <q-card>
            <q-bar>
                <q-space />
                <q-btn dense flat icon="close" v-close-popup>
                    <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
            </q-bar>

            <q-card-section>
                <vx-card no-shadow>
                    <div id="printMe">
                        <div class="vx-row">
                            <div class="vx-col w-full">
                                <table>
                                    <thead>
                                    <tr class="font-bold text-dark">
                                        <th>កាលបរិច្ឆេទ <br>
                                            Date
                                        </th>
                                        <th>សំគាល់<br>
                                            Note</th>
                                        <th>កូដ<br>
                                            Barcode</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{{data.date}}</td>
                                        <td>{{data.note}}</td>
                                        <td>
                                            <bar-code :value="data.id" :options="{ displayValue: true }"></bar-code>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="vx-row mt-3">
                            <div class="vx-col w-full">
                                <table>
                                    <thead>
                                    <tr class="font-bold text-dark">
                                        <th>ល.រ<br>
                                            No</th>
                                        <th>ពិពណ៌នា<br>
                                            Description</th>
                                        <th>ប្រភេទ<br>
                                            Type</th>
                                        <th>ទឹកប្រាក់<br>
                                            Balance</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(item,index) in data.items" :key="index">
                                        <td class="pl-3">{{index+1}}</td>
                                        <td class="pl-3">
                                            {{item.description}}
                                        </td>
                                        <td class="pl-3">
                                            {{item.type}}
                                        </td>
                                        <td class="pl-3">
                                            <money-format
                                                :value="parseFloat(item.balance)"
                                                locale='en'
                                                currency-code='USD'>
                                            </money-format>
                                        </td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td class="text-right">
                                            សរុប
                                        </td>
                                        <td class="pl-3">
                                            <money-format
                                                :value="total_income"
                                                locale='en'
                                                currency-code='USD'>
                                            </money-format>
                                        </td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                    <vs-divider/>
                    <!-- Save & Reset Button -->
                    <div class="flex justify-end btn-group">
                        <vs-button @click="printHtml" icon="icon-printer" icon-pack="feather" type="relief">បោះពុម្ភ</vs-button>
                    </div>
                </vx-card>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script>
    import VueBarcode from '@xkeshi/vue-barcode';
    import MoneyFormat from 'vue-money-format'
    import printJS from 'print-js'
    export default {
        name: "showExpense",
        components: {
            'money-format': MoneyFormat,
            'bar-code': VueBarcode
        },
        data() {
            return {
                dialog:false,
                data: {
                    date: null,
                    note: null,
                    items: [{description: '', type: null, balance: 0}]
                }
            }
        },
        computed: {
            all_income_types() {
                return this.$store.getters.all_income_type
            },
            total_income() {
                return this.data.items.reduce(function (total, item) {
                    return total + parseFloat(item.balance)
                }, 0)
            }
        },
        methods: {
            //print
            async _print() {
                const el = document.querySelector('#printMe');
                const options = {
                    type: 'dataURL'
                };
                return await this.$html2canvas(el, options);
            },
            async printHtml() {
                let image = await this._print();
                printJS(image, 'image')
            },
            show(data) {
                let self = this;
                self.dialog = true;
                self.data.id = data.id;
                self.data.date = data.date;
                self.data.note = data.note;
                self.data.items = [];
                data.expense_detail.forEach(function (item, index) {
                    self.data.items.push({description: item.description, type: item.type, balance: item.balance})
                })
            }
        }
    }
</script>

<style scoped>
    table, td, th {
        border: 1px solid black;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    th {
        text-align: left;
    }
</style>
