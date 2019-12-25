<template>
    <div>
        <modal width="60%" height="auto" :scrollable="true" :pivotY="0.2" :clickToClose="false" name="show-purchase">
            <div class="flex justify-end">
                <i @click="$modal.hide('show-purchase')" class="vs-icon vs-popup--close material-icons text-warning"
                   style="background: rgb(255, 255, 255);">close</i>
            </div>
            <vx-card no-shadow>
                <div id="printMe">
                    <table>
                        <tr>
                            <td>អ្នកផ្គត់ផ្គង់</td>
                            <td>Purchase Status</td>
                            <td>ទីតាំងទិញចូល</td>
                            <td>ពិពណ៌នា</td>
                            <td>ថ្ងៃខែឆ្នាំទិញចូល</td>
                            <td>Barcode</td>
                        </tr>
                        <tr>
                            <td>
                                ឈ្មោះ: {{purchase.supplier.name}}<br>
                                ក្រុមហ៊ុន: {{purchase.supplier.company}}<br>
                                ទំនាក់ទំនង: {{purchase.supplier.contact}}<br>
                            </td>
                            <td>{{purchase.purchase_status}}</td>
                            <td>{{purchase.location}}</td>
                            <td>{{purchase.description}}</td>
                            <td>{{purchase.purchase_date}}</td>
                            <td class="p-2">
                                <bar-code :value="purchase.id" :options="{ displayValue: true }"></bar-code>
                            </td>
                        </tr>
                    </table>
                    <vs-divider/>
                    <table>
                        <thead>
                        <tr>
                            <th>ល.រ</th>
                            <th>ឈ្មោះ</th>
                            <th>ពិពណ៌នា</th>
                            <th>ចំនួន</th>
                            <th>តម្លៃទិញ</th>
                            <th>តម្លៃលក់</th>
                            <th>សរុប</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr :key="indextr" v-for="(tr, indextr) in purchase.items">
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
                                <money-format :value="parseFloat(tr.purchase_price)"
                                              locale='en'
                                              currency-code='USD'>
                                </money-format>
                            </td>
                            <td class="pl-2 print:pl-2">
                                <money-format :value="parseFloat(tr.sale_price)"
                                              locale='en'
                                              currency-code='USD'>
                                </money-format>
                            </td>
                            <td class="pl-2 print:pl-2">
                                <money-format :value="tr.amount = tr.purchase_price*tr.qty"
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
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="md:text-right">
                                សរុប
                            </td>
                            <td class="pl-2 print:pl-2">
                                <money-format :value="purchase.total_balance"
                                              locale='en'
                                              currency-code='USD'>
                                </money-format>
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
                                    <money-format :value="parseFloat(purchase.balance)"
                                                  locale='en'
                                                  currency-code='USD'>
                                    </money-format>
                                </div>
                                <div class="vx-col md:w-1/2 print:w-1/2 w-full">
                                    <label>ទឹកប្រាក់ជំពាក់</label>
                                    <money-format
                                            :value="parseFloat(purchase.due_balance = purchase.total_balance - purchase.balance)"
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
    import printJS from 'print-js'
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
        computed: {
            all_suppliers() {
                return this.$store.getters.all_supplier
            },
            all_products() {
                return this.$store.getters.all_product
            },
            total() {
                let self = this;
                let total = 0.0;
                self.purchase.items.forEach(function (item, index) {
                    total += parseFloat(item.amount)
                });
                self.purchase.total_balance = total;
                self.purchase.balance = total;
                return total
            },
            total_qty() {
                let self = this;
                let total = 0;
                self.purchase.items.forEach(function (item, index) {
                    total += parseFloat(item.qty)
                });
                self.purchase.qty = total;
                return total
            }
        },
        updated() {
            let x = this.total_qty;
            let y = this.total;
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
            searchSupplier(option, label, search) {
                return (
                    String(label).toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                    String(option.company).toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                    String(option.contact).toLowerCase().indexOf(search.toLowerCase()) > -1
                );
            },
            searchProduct(option, label, search) {
                return (
                    String(label).toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                    String(option.id).toLowerCase().indexOf(search.toLowerCase()) > -1
                );
            },
            //add line
            addItemLine() {
                let self = this;
                self.purchase.items.push({
                    id: '',
                    name: null,
                    description: null,
                    qty: 1,
                    purchase_price: 1,
                    sale_price: 1,
                    amount: 1
                });
            },
            //remove line
            removeItemLine(index) {
                let self = this;
                self.purchase.items.splice(index, 1);
            },
            //select product
            selectProduct(id, index) {
                let self = this;
                let selected = self.all_products.filter(function (x) {
                    return parseInt(x.id) === parseInt(id.id);
                });
                self.purchase.items[index].name = selected[0].name;
                self.purchase.items[index].description = selected[0].description;
                self.purchase.items[index].sale_price = selected[0].default_sale;
                self.purchase.items[index].purchase_price = selected[0].default_purchase;
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
            //store
            updatePurchase() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('updatePurchase', self.purchase).then(function (data) {
                            if (data) {
                                self.$vs.notify({
                                    time: 4000,
                                    title: 'ប្រតិបត្តិការជោគជ័យ',
                                    text: 'ទិន្នន័យកែប្រែ',
                                    color: 'success',
                                    iconPack: 'feather',
                                    icon: 'icon-check',
                                    position: 'top-center'
                                });
                                self.$emit('finished');
                                self.fetchPurchase();
                            } else {
                                self.$vs.notify({
                                    title: 'ប្រតិបត្តិការបរាជ័យ',
                                    text: 'ទិន្នន័យមិនកែប្រែ',
                                    color: 'danger',
                                    iconPack: 'feather',
                                    icon: 'icon-message-square',
                                    position: 'top-center'
                                });
                            }
                            self.$vs.loading.close();
                        });
                    } else {
                        self.$vs.notify({
                            title: 'ប្រតិបត្តិការបរាជ័យ',
                            text: 'សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ',
                            color: 'danger',
                            iconPack: 'feather',
                            icon: 'icon-message-square',
                            position: 'top-center'
                        })
                    }
                });
            },
            //image upload
            successUpload(file, res) {
                this.product.image = (res.path)
            }
        },
    }
</script>

<style scoped>
    table, td, th {border: 1px solid black;}  table {border-collapse: collapse;width: 100%;}  th {text-align: left;}
</style>