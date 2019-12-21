<template>
    <div>
        <modal width="60%" height="auto" :scrollable="true" :pivotY="0.2" :clickToClose="false" name="print-invoice">
            <div class="flex justify-end">
                <i @click="$modal.hide('print-invoice')" class="vs-icon vs-popup--close material-icons text-warning"
                   style="background: rgb(255, 255, 255);">close</i>
            </div>
            <vx-card no-shadow>
                <div id="printMe">
                    <img src="/images/header/invoice-header.png" width="90%" class="mb-base" alt="">
                    <table border="0">
                        <tr>
                            <td>អតិថិជន <br>Customer</td>
                            <td>Invoice Status</td>
                            <td>លក់ពី <br>Sold from</td>
                            <td>ពិពណ៌នា<br>Description</td>
                            <td>ថ្ងៃខែឆ្នាំលក់​ <br>Sold from</td>
                            <td>Barcode</td>
                        </tr>
                        <tr>
                            <td>
                                ឈ្មោះ: {{data.customer.name}}<br>
                                ទំនាក់ទំនង: {{data.customer.contact}}<br>
                            </td>
                            <td>{{data.invoice_status}}</td>
                            <td>Ly put</td>
                            <td>{{data.description}}</td>
                            <td>{{data.invoice_date}}</td>
                            <td class="p-2">
                                <bar-code :value="data.id" :options="{ displayValue: true }"></bar-code>
                            </td>
                        </tr>
                    </table>
                    <vs-divider/>
                    <table>
                        <thead>
                        <tr>
                            <th>ល.រ <br>No</th>
                            <th>ឈ្មោះ<br>Name</th>
                            <th>ពិពណ៌នា<br>Description</th>
                            <th>ចំនួន<br>Qty</th>
                            <th>តម្លៃលក់<br>Unit Price</th>
                            <th>សរុប<br>Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr :key="indextr" v-for="(tr, indextr) in data.items">
                            <td class="pl-2 print:pl-2">
                                {{indextr+1}}
                            </td>
                            <td class="pl-2 print:pl-2">
                                {{tr.name}}
                            </td>
                            <td class="pl-2 print:pl-2">
                                {{ tr.description }}
                            </td>
                            <td class="pl-2 print:pl-2">
                                {{tr.qty}}
                            </td>
                            <td class="pl-2 print:pl-2">
                                <money-format v-if="tr.inventory_type!=='bundle'" :value="parseFloat(tr.sale_price)"
                                              locale='en'
                                              currency-code='USD'>
                                </money-format>
                            </td>
                            <td class="pl-2 print:pl-2">
                                <money-format v-if="tr.inventory_type!=='bundle'" :value="parseFloat(tr.amount = tr.sale_price*tr.qty)"
                                              locale='en'
                                              currency-code='USD'>
                                </money-format>
                            </td>
                        </tr>
                        </tbody>
                        <tfoot v-if="!parseFloat(data.purchase_amount)>0">
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="md:text-right">
                                សរុប
                            </td>
                            <td class="pl-2 print:pl-2">
                                <money-format :value="total_amount"
                                              locale='en'
                                              currency-code='USD'>
                                </money-format>
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                    <vs-divider/>
                    <div class="vx-row" style="color: #246ca8">
                        <div class="vx-col md:w-1/4 print:w-1/4 w-full">
                            <label>ប្រាក់ទិញទំនិញ</label>
                            <money-format :value="parseFloat(data.balance)"
                                          locale='en'
                                          currency-code='USD'>
                            </money-format>
                        </div>
                        <div class="vx-col md:w-1/4 print:w-1/4 w-full">
                            <label>ទឹកប្រាក់ជំពាក់</label>
                            <money-format
                                    :value="parseFloat(data.due_balance)"
                                    locale='en'
                                    currency-code='USD'>
                            </money-format>
                        </div>
                        <div class="vx-col md:w-1/4 print:w-1/4 w-full">
                            អ្នកលក់/Seller <br>
                            <br>
                        </div>
                        <div class="vx-col md:w-1/4 print:w-1/4 w-full">
                            អ្នកទិញ/Buyer <br>
                            <br>
                        </div>
                    </div>
                </div>
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
    import printJS from 'print-js'
    export default {
        name: "printInvoice",
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
                data:{
                    purchase_amount:0,
                    id:null,
                    customer:{name:''},
                    balance:null,
                    due_balance:null,
                    invoice_status:null,
                    invoice_date:null,
                    description:null,
                    items:[],
                }
            }
        },
        computed:{
            total_amount(){
                return this.data.items.reduce((total, item) => total + parseFloat(item.amount),0)
            }
        },
        methods: {
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
                this.$modal.show('print-invoice');
                self.data.id = data.id;
                self.data.purchase_amount = data.purchase_amount;
                self.data.balance = data.balance;
                self.data.due_balance = data.due_balance;
                self.data.customer = data.customer;
                self.data.invoice_status = data.invoice_status;
                self.data.invoice_date = data.date;
                self.data.description = data.description;
                self.data.items = [];
                data.invoice_detail.forEach(function (item,index) {
                    self.data.items.push({name:item.purchase_detail.product.name,description: item.purchase_detail.product.description,qty:item.qty,sale_price: item.sale,amount:0,inventory_type:item.inventory_type});
                })
            },
        },
    }
</script>

<style scoped>
    table, td, th {border: 1px solid #246ca8; color: #246ca8}  table {border-collapse: collapse;width: 100%;}  th {text-align: left;}
</style>