<template>
    <modal width="60%" height="auto" :scrollable="true" :pivotY="0.2" :clickToClose="false" name="show-income">
        <div class="flex justify-end">
            <i @click="$modal.hide('show-income')" class="vs-icon vs-popup--close material-icons text-warning"
               style="background: rgb(255, 255, 255);">close</i>
        </div>
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
    </modal>
</template>

<script>
    import VueBarcode from '@xkeshi/vue-barcode';
    import MoneyFormat from 'vue-money-format'
    import printJS from 'print-js'
    export default {
        name: "showIncome",
        components: {
            'money-format': MoneyFormat,
            'bar-code': VueBarcode
        },
        data() {
            return {
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
                self.$modal.show('show-income');
                self.data.id = data.id;
                self.data.date = data.date;
                self.data.note = data.note;
                self.data.items = [];
                data.income_detail.forEach(function (item, index) {
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