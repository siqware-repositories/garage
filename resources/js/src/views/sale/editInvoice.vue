<template>
    <div>
        <modal width="90%" height="auto" :scrollable="true" :pivotY="0.2" :clickToClose="false" name="edit-invoice">
            <div class="flex justify-end">
                <i @click="$modal.hide('edit-invoice');$barcodeScanner.destroy()" class="vs-icon vs-popup--close material-icons text-warning"
                   style="background: rgb(255, 255, 255);">close</i>
            </div>
            <vx-card no-shadow>
                <div class="vx-row my-3">
                    <div class="vx-col md:w-1/3 w-full">
                        <label>អតិថិជន</label>
                        <vx-input-group>
                            <v-select :filterBy="searchCustomer" v-model="invoice.customer" label="name" name="customer"
                                      v-validate="'required'" :options="all_customer">
                                <template v-slot:option="option" class="vs-list">
                                    <vs-list-item :title="`ឈ្មោះ​ ${option.name}`"
                                                  :subtitle="`ទំនាក់ទំនង ${option.contact} អាស័យដ្ឋាន ${option.address}`"></vs-list-item>
                                </template>
                            </v-select>
                            <template slot="append">
                                <div class="append-text btn-addon" @click="$refs.addCustomer.show()">
                                    <vs-button class="rounded-none" type="filled" icon-pack="feather"
                                               icon="icon-plus"></vs-button>
                                </div>
                            </template>
                        </vx-input-group>
                        <span class="text-danger text-sm"
                              v-show="errors.has('customer')">{{ errors.first('customer') }}</span>
                    </div>
                    <div class="vx-col md:w-1/3 w-full">
                        <label>ថ្ងៃខែឆ្នាំទិញ</label>
                        <flat-pickr name="invoice_date" v-validate="'required'" class="w-full"
                                    v-model="invoice.invoice_date" placeholder="Choose Date"/>
                        <span class="text-danger text-sm"
                              v-show="errors.has('invoice_date')">{{ errors.first('invoice_date') }}</span>
                    </div>
                </div>
                <div class="vx-row my-3">
                    <div class="vx-col md:w-1/3 w-full">
                        <label>Invoice Status</label>
                        <v-select v-model="invoice.invoice_status" name="invoice_status" v-validate="'required'"
                                  :options="['received','pending']"/>
                        <span class="text-danger text-sm"
                              v-show="errors.has('status')">{{ errors.first('status') }}</span>
                    </div>
                    <div class="vx-col md:w-1/3 w-full">
                        <label>ពិពណ៌នា</label>
                        <vs-textarea class="w-full" label="ពិពណ៌នា" v-model="invoice.description" name="description"
                                     v-validate="'required'"/>
                        <span class="text-danger text-sm"
                              v-show="errors.has('description')">{{ errors.first('description') }}</span>
                    </div>
                    <div class="vx-col md:w-1/3">
                        Amount
                        <span class="text-6xl block">${{invoice.total_balance}}</span>
                    </div>
                </div>
                <vs-divider position="left">បញ្ជីទំនិញ</vs-divider>
                <table class="vs-table vs-table--tbody-table">
                    <thead>
                    <tr>
                        <th>ល.រ</th>
                        <th>ឈ្មោះ</th>
                        <th>ពិពណ៌នា</th>
                        <th>ចំនួន</th>
                        <th>តម្លៃលក់</th>
                        <th>សរុប</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr :key="indextr" v-for="(tr, indextr) in invoice.items">
                        <td class="py-1">
                            {{indextr+1}}
                        </td>
                        <td width="600">
                            <v-select :filterBy="searchProduct" v-model="tr.id"
                                      :getOptionLabel="opt => opt.product.name" :name="`product-${indextr}`"
                                      v-validate="'required'" :options="all_purchase_details"
                                      @input="selectProduct(tr.id,indextr)">
                                <template v-slot:option="option" class="vs-list">
                                    <vs-list-item
                                            :title="`កូដ: ${option.product.id} - ឈ្មោះ: ${option.product.name} - តម្លៃលក់: ${option.sale}`"
                                            :subtitle="`Unit: ${option.product.unit} - Brand: ${option.product.brand} - Inventory Type: ${option.inventory_type}`"></vs-list-item>
                                    <vs-list-item
                                            :title="`អ្នកផ្គត់ផ្គង់៖ ${option.supplier.name} ក្រុមហ៊ុន៖ ${option.supplier.company}`"
                                            :subtitle="`ទំនាក់ទំនង ${option.supplier.contact}`"></vs-list-item>
                                </template>
                            </v-select>
                            <span class="text-danger text-sm"
                                  v-show="errors.has(`product-${indextr}`)">{{ errors.first(`product-${indextr}`) }}</span>
                        </td>
                        <td>
                            {{ tr.description }}
                        </td>
                        <td>
                            <vs-input-number color="danger" v-if="tr.inventory_type==='service'" v-model="tr.qty"
                                             min="0" :name="`qty-${indextr}`" v-validate="'required'"/>
                            <vs-input-number color="success" v-if="tr.inventory_type!=='service'" v-model="tr.qty"
                                             min="0" :max="tr.remain_qty" :name="`qty-${indextr}`"
                                             v-validate="'required'"/>
                            <span class="text-danger text-sm"
                                  v-show="errors.has(`qty-${indextr}`)">{{ errors.first(`qty-${indextr}`) }}</span>
                        </td>
                        <td>
                            <vs-input-number color="danger" v-model="tr.sale_price" min="0"
                                             :name="`sale_price-${indextr}`" v-validate="'required'"/>
                            <span class="text-danger text-sm"
                                  v-show="errors.has(`sale_price-${indextr}`)">{{ errors.first(`sale_price-${indextr}`) }}</span>
                        </td>
                        <td>
                            {{ tr.amount = tr.sale_price*tr.qty }}
                        </td>
                        <td class="py-1">
                            <vs-button @click="removeItemLine(indextr)" icon="icon-trash-2" color="warning"
                                       icon-pack="feather" type="flat"></vs-button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <vs-button @click="addItemLine" icon="icon-plus" class="rounded-none my-3" icon-pack="feather"
                           type="line">បន្ថែមទំនិញ
                </vs-button>
                <div class="vx-row">
                    <div class="vx-col md:w-1/2 w-full">
                        <vs-divider position="left">Payment</vs-divider>
                        <div class="vx-row">
                            <div class="vx-col md:w-1/2 w-full">
                                <label>ប្រាក់ទិញទំនិញ</label>
                                <vs-input-number color="warning" v-model="invoice.balance" min="0"
                                                 :max="invoice.total_balance" label="ប្រាក់ទិញទំនិញ:"/>
                            </div>
                            <div class="vx-col md:w-1/2 w-full">
                                <label>ទឹកប្រាក់ជំពាក់</label>
                                <vs-input step="any" readonly type="number" class="w-full"
                                          v-model="invoice.due_balance = invoice.total_balance - invoice.balance"/>
                            </div>
                        </div>
                        <vs-divider position="left">
                            <vs-checkbox v-model="invoice.is_bundle">ទំនិញដំុ?</vs-checkbox>
                        </vs-divider>
                        <div class="vx-row" v-if="invoice.is_bundle">
                            <div class="vx-col md:w-1/2 w-full">
                                <label>តម្លៃទិញ</label>
                                <vs-input-number v-model="invoice.purchase_amount" min="0" label="តម្លៃទិញ:"/>
                            </div>
                            <div class="vx-col md:w-1/2 w-full">
                                <label>តម្លៃលក់</label>
                                <vs-input-number v-model="invoice.sale_amount" min="0" label="តម្លៃលក់:"/>
                            </div>
                        </div>
                    </div>
                </div>
                <vs-divider/>
                <!-- Save & Reset Button -->
                <div class="flex justify-end btn-group">
                    <vs-button @click="updateInvoice" icon="icon-edit" icon-pack="feather" type="relief">កែប្រែ
                    </vs-button>
                </div>
            </vx-card>
        </modal>
        <add-customer ref="addCustomer"></add-customer>
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
    import vSelect from 'vue-select'
    import AddCustomer from "./addCustomer";

    export default {
        name: "editInvoice",
        components: {AddCustomer, AddBrand, AddCategory, AddUnit, flatPickr, 'v-select': vSelect,},
        data() {
            return {
                invoice: {
                    id: null,
                    is_bundle: false,
                    purchase_amount: 0,
                    sale_amount: 0,
                    customer: null,
                    user_id: this.$store.state.AppActiveUser.uid,
                    invoice_date: null,
                    invoice_status: 'pending',
                    description: '',
                    total_balance: null,
                    balance: null,
                    due_balance: 0,
                    old_due: 0,
                    amount: 0,
                    qty: 0,
                    items: [{
                        id: '',
                        name: null,
                        description: null,
                        qty: 1,
                        sale_price: 1,
                        amount: 1,
                        inventory_type: '',
                        remain_qty: ''
                    }]
                },
            }
        },
        computed: {
            all_customer() {
                return this.$store.getters.all_customer
            },
            all_purchase_details() {
                return this.$store.getters.all_purchase_detail.sort((a, b) => (a.product.id > b.product.id) ? 1 : -1)
            },
            total() {
                let self = this;
                let total = 0.0;
                self.invoice.items.forEach(function (item, index) {
                    total += parseFloat(item.amount)
                });
                if (self.invoice.is_bundle) {
                    self.invoice.total_balance = self.invoice.sale_amount;
                    self.invoice.balance = self.invoice.sale_amount - self.invoice.old_due;
                } else {
                    self.invoice.total_balance = total;
                    self.invoice.balance = total - self.invoice.old_due;
                }
                return total
            },
            total_qty() {
                let self = this;
                let total = 0;
                self.invoice.items.forEach(function (item, index) {
                    total += parseFloat(item.qty)
                });
                self.invoice.qty = total;
                return total
            }
        },
        updated() {
            let x = this.total_qty;
            let y = this.total;
        },
        methods: {
            // Create callback function to receive barcode when the scanner is already done
            onBarcodeScanned(barcode) {
                this.addItemLine();
                let index = this.invoice.items.length - 1;
                this.selectProduct({product_id: parseInt(barcode)}, index);
            },
            searchCustomer(option, label, search) {
                return (
                    String(label).toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                    String(option.note).toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                    String(option.contact).toLowerCase().indexOf(search.toLowerCase()) > -1
                );
            },
            searchProduct(option, label, search) {
                return (
                    String(label).toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                    String(option.product.id).toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                    String(option.product.unit).toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                    String(option.product.brand).toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                    String(option.supplier.name).toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                    String(option.supplier.company).toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                    String(option.supplier.contact).toLowerCase().indexOf(search.toLowerCase()) > -1
                );
            },
            //add line
            addItemLine() {
                let self = this;
                self.invoice.items.push({
                    id: '',
                    name: null,
                    description: null,
                    qty: 1,
                    sale_price: 1,
                    amount: 1,
                    inventory_type: '',
                    remain_qty: ''
                });
            },
            //remove line
            removeItemLine(index) {
                let self = this;
                self.invoice.items.splice(index, 1);
            },
            //select product
            selectProduct(id, index) {
                let self = this;
                let selected = self.all_purchase_details.filter(function (x) {
                    return parseInt(x.product_id) === parseInt(id.product_id);
                });
                self.invoice.items[index].name = selected[0].product.name;
                self.invoice.items[index].id = {id:selected[0].id,name:`${selected[0].product.name}`,product:{name:`ID: ${selected[0].product_id}-${selected[0].product.name}`},purchase:selected[0].purchase};
                self.invoice.items[index].inventory_type = selected[0].inventory_type;
                self.invoice.items[index].remain_qty = selected[0].remain_qty;
                self.invoice.items[index].description = selected[0].product.description;
                self.invoice.items[index].sale_price = selected[0].sale;
            },
            show(data) {
                let self = this;
                this.$modal.show('edit-invoice');
                // Add barcode scan listener and pass the callback function
                self.$barcodeScanner.init(self.onBarcodeScanned);
                this.invoice.items = [];
                if (data.purchase_amount > 0) {
                    self.invoice.is_bundle = true;
                    self.invoice.purchase_amount = data.purchase_amount;
                    self.invoice.sale_amount = data.amount;
                }
                self.invoice.id = data.id;
                self.invoice.customer = data.customer;
                self.invoice.invoice_date = data.date;
                self.invoice.invoice_status = data.invoice_status;
                self.invoice.description = data.description;
                self.invoice.old_due = data.due_balance;
                self.invoice.items = [];
                data.invoice_detail.sort((a,b)=>{
                    const bandA = a.purchase_detail.product_id;
                    const bandB = b.purchase_detail.product_id;
                    let comparison = 0;
                    if (bandA > bandB) {
                        comparison = 1;
                    } else if (bandA < bandB) {
                        comparison = -1;
                    }
                    return comparison;
                });
                data.invoice_detail.forEach(function (item, index) {
                    self.invoice.items.push({
                        id : {id:item.purchase_detail.id,name:`${item.purchase_detail.product.name}`,product:{name:`ID: ${item.purchase_detail.product_id}-${item.purchase_detail.product.name}`},purchase:item.purchase_detail.purchase},
                        name: item.purchase_detail.product.name,
                        description: item.purchase_detail.product.description,
                        qty: item.qty,
                        sale_price: item.sale,
                        amount: item.amount,
                        inventory_type: item.inventory_type,
                        remain_qty: item.purchase_detail.remain_qty
                    });
                });
            },
            //store
            updateInvoice() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('updateInvoice', self.invoice).then(function (data) {
                            if (data) {
                                self.$vs.notify({
                                    time: 4000,
                                    title: 'ប្រតិបត្តិការជោគជ័យ',
                                    text: 'ទិន្នន័យបានបន្ថែម',
                                    color: 'success',
                                    iconPack: 'feather',
                                    icon: 'icon-check',
                                    position: 'top-center'
                                });
                                self.$emit('finished');
                            } else {
                                self.$vs.notify({
                                    title: 'ប្រតិបត្តិការបរាជ័យ',
                                    text: 'ទិន្នន័យមិនបានបន្ថែម',
                                    color: 'danger',
                                    iconPack: 'feather',
                                    icon: 'icon-message-square',
                                    position: 'top-center'
                                });
                            }
                            self.$vs.loading.close();
                            self.$modal.hide('edit-invoice');
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
        async created() {
            let self = this;
            await self.$store.dispatch('fetchPurchaseDetail');
        }
    }
</script>

<style scoped>

</style>
