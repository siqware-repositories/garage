<template>
    <div>
        <modal width="60%" height="auto" :scrollable="true" :pivotY="0.2" :clickToClose="false" name="show-purchase">
            <div class="flex justify-end">
                <i @click="$modal.hide('show-purchase')" class="vs-icon vs-popup--close material-icons text-warning"
                   style="background: rgb(255, 255, 255);">close</i>
            </div>
            <vx-card no-shadow>
                <div id="printMe">
                    <table class="custom">
                        <tr>
                            <td class="custom">អ្នកផ្គត់ផ្គង់</td>
                            <td class="custom">Purchase Status</td>
                            <td class="custom">ទីតាំងទិញចូល</td>
                            <td class="custom">ពិពណ៌នា</td>
                            <td class="custom">ថ្ងៃខែឆ្នាំទិញចូល</td>
                            <td class="custom">Barcode</td>
                        </tr>
                        <tr>
                            <td class="custom">
                                ឈ្មោះ: {{purchase.supplier.name}}<br>
                                ក្រុមហ៊ុន: {{purchase.supplier.company}}<br>
                                ទំនាក់ទំនង: {{purchase.supplier.contact}}<br>
                            </td>
                            <td class="custom">{{purchase.purchase_status}}</td>
                            <td class="custom">{{purchase.location}}</td>
                            <td class="custom">{{purchase.description}}</td>
                            <td class="custom">{{purchase.purchase_date}}</td>
                            <td class="p-2">
                                <bar-code :value="purchase.id" tag="img" :options="{ displayValue: true }"></bar-code>
                            </td>
                        </tr>
                    </table>
                    <vs-divider/>
                    <table class="custom">
                        <thead>
                        <tr>
                            <th class="custom">ល.រ</th>
                            <th class="custom">ឈ្មោះ</th>
                            <th class="custom">ពិពណ៌នា</th>
                            <th class="custom">ចំនួន</th>
                            <th class="custom">តម្លៃទិញ</th>
                            <th class="custom">តម្លៃលក់</th>
                            <th class="custom">សរុប</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr :key="indextr" v-for="(tr, indextr) in purchase.items">
                            <td class="pl-2 custom">
                                {{indextr+1}}
                            </td>
                            <td class="pl-2 custom">
                                {{tr.name}}
                            </td>
                            <td class="pl-2 custom">
                                {{ tr.description }}
                            </td>
                            <td class="pl-2 custom">
                                {{tr.qty}}
                            </td>
                            <td class="pl-2 custom">
                                <money-format :value="parseFloat(tr.purchase_price)"
                                              locale='en'
                                              currency-code='USD'>
                                </money-format>
                            </td>
                            <td class="pl-2 custom">
                                <money-format :value="parseFloat(tr.sale_price)"
                                              locale='en'
                                              currency-code='USD'>
                                </money-format>
                            </td>
                            <td class="pl-2 custom">
                                <money-format :value="tr.amount = tr.purchase_price*tr.qty"
                                              locale='en'
                                              currency-code='USD'>
                                </money-format>
                            </td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td class="custom"></td>
                            <td class="custom"></td>
                            <td class="custom"></td>
                            <td class="custom"></td>
                            <td class="custom"></td>
                            <td class="md:text-right">
                                សរុប
                            </td>
                            <td class="pl-2 custom">
                                {{$formatter.format(purchase.amount)}}
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                    <div class="vx-row">
                        <div class="vx-col md:w-1/2 w-full">
                            <vs-divider position="left">Payment</vs-divider>
                            <div class="vx-row">
                                <div class="vx-col md:w-1/2 print:w-1/2 w-full">
                                    <label>ប្រាក់ទិញទំនិញ</label>
                                    <div>
                                        {{$formatter.format(purchase.balance)}}
                                    </div>
                                </div>
                                <div class="vx-col md:w-1/2 print:w-1/2 w-full">
                                    <label>ទឹកប្រាក់ជំពាក់</label>
                                    <money-format
                                            :value="parseFloat(purchase.due_balance)"
                                            locale='en'
                                            currency-code='USD'>
                                    </money-format>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img :src="output" alt="">
                <!-- Save & Reset Button -->
                <div class="flex justify-end btn-group">
                    <vs-button @click="printHtml" icon="icon-printer" icon-pack="feather" type="relief">បោះពុម្ភ
                    </vs-button>
                </div>
            </vx-card>
        </modal>
        <add-supplier ref="addSupplier"></add-supplier>
        <add-unit ref="addUnit"></add-unit>
        <add-category ref="addCategory"></add-category>
        <add-brand ref="addBrand"></add-brand>
    </div>
</template>

<script>
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.min.css';
    import AddUnit from "../product/addUnit";
    import AddCategory from "../product/addCategory";
    import AddBrand from "../product/addBrand";
    import AddSupplier from "./addSupplier";
    import vSelect from 'vue-select'
    import VueBarcode from '@xkeshi/vue-barcode';
    import MoneyFormat from 'vue-money-format'
    export default {
        name: "showPurchase",
        components: {
            AddSupplier,
            AddBrand,
            AddCategory,
            AddUnit,
            flatPickr,
            'v-select': vSelect,
            'bar-code': VueBarcode,
            'money-format': MoneyFormat
        },
        data() {
            return {
                output: null,
                purchase: {
                    id: null,
                    supplier: {name: ''},
                    location: 'Ly Put Garage',
                    purchase_date: null,
                    purchase_status: 'pending',
                    description: '',
                    total_balance: null,
                    balance: null,
                    due_balance: 0,
                    amount: 0,
                    qty: 0,
                    items: [{
                        id: '',
                        name: null,
                        description: null,
                        qty: 1,
                        purchase_price: 1,
                        sale_price: 1,
                        amount: 1
                    }]
                },
            }
        },
        methods: {
            async printHtml() {
                $("#printMe").printThis({
                    pageTitle: `Print Invoice No: ${this.purchase.id}`,
                    beforePrintEvent: function () {
                        console.log('after before print printing')
                    },     // function for printEvent in iframe
                    beforePrint: function () {
                        console.log('before print printing')
                    },          // function called before iframe is filled
                    afterPrint: function () {
                        console.log('after print printing')
                    }            // function called before iframe is removed
                });
            },
            show(data) {
                let self = this;
                this.$modal.show('show-purchase');
                this.purchase.id = data.id;
                this.purchase.supplier = data.supplier;
                this.purchase.location = data.location;
                this.purchase.purchase_date = data.date;
                this.purchase.purchase_status = data.purchase_status;
                this.purchase.description = data.description;
                this.purchase.balance = data.balance;
                this.purchase.amount = data.amount;
                this.purchase.due_balance = data.due_balance;
                self.purchase.items = [];
                data.purchase_detail.forEach(function (item, index) {
                    self.purchase.items.push({
                        id: item.product,
                        name: item.product.name,
                        description: item.product.description,
                        qty: item.qty,
                        purchase_price: item.purchase,
                        sale_price: item.sale,
                        amount: item.amount
                    })
                })
            },
        },
    }
</script>

<style scoped>
</style>