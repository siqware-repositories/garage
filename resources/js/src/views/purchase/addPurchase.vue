<template>
    <div>
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

                <q-card-section>
                    <vx-card
                            no-shadow>
                        <div class="vx-row my-3">
                            <div class="vx-col md:w-1/3 w-full">
                                <label>អ្នកផ្គត់ផ្គង់</label>
                                <vx-input-group>
                                    <v-select
                                            :filterBy="searchSupplier"
                                            v-model="purchase.supplier"
                                            label="name"
                                            name="supplier"
                                            v-validate="'required'"
                                            :options="all_suppliers">
                                        <template
                                                v-slot:option="option"
                                                class="vs-list">
                                            <vs-list-item
                                                    :title="`ឈ្មោះ​ ${option.name} ក្រុមហ៊ុន ${option.company}`"
                                                    :subtitle="`ទំនាក់ទំនង ${option.contact} អាស័យដ្ឋាន ${option.address}`"></vs-list-item>
                                        </template>
                                    </v-select>
                                    <template
                                            slot="append">
                                        <div class="append-text btn-addon"
                                             @click="$refs.addSupplier.show()">
                                            <vs-button
                                                    class="rounded-none"
                                                    type="filled"
                                                    icon-pack="feather"
                                                    icon="icon-plus"></vs-button>
                                        </div>
                                    </template>
                                </vx-input-group>
                                <span class="text-danger text-sm"
                                      v-show="errors.has('supplier')">{{ errors.first('supplier') }}</span>
                            </div>
                            <div class="vx-col md:w-1/3 w-full">
                                <label>ទីតាំង</label>
                                <v-select
                                        v-model="purchase.location"
                                        name="location"
                                        v-validate="'required'"
                                        :options="['Ly Put Garage']"/>
                                <span class="text-danger text-sm"
                                      v-show="errors.has('location')">{{ errors.first('location') }}</span>
                            </div>
                            <div class="vx-col md:w-1/3 w-full">
                                <label>ថ្ងៃខែឆ្នាំទិញ</label>
                                <q-input
                                        dense
                                        v-validate="'required'"
                                        class="full-width"
                                        outlined
                                        v-model="purchase.purchase_date"
                                        square
                                        name="purchase_date"
                                >
                                    <template
                                            v-slot:append>
                                        <q-icon name="event"
                                                class="cursor-pointer">
                                            <q-popup-proxy
                                                    ref="datePurchase"
                                                    transition-show="scale"
                                                    transition-hide="scale">
                                                <q-date v-model="purchase.purchase_date"
                                                        @input="() => $refs.datePurchase.hide()"/>
                                            </q-popup-proxy>
                                        </q-icon>
                                    </template>
                                </q-input>
                                <span class="text-danger text-sm"
                                      v-show="errors.has('purchase_date')">{{ errors.first('purchase_date') }}</span>
                            </div>
                        </div>
                        <div class="vx-row my-3">
                            <div class="vx-col md:w-1/3 w-full">
                                <label>Purchase
                                    Status</label>
                                <v-select
                                        v-model="purchase.purchase_status"
                                        name="purchase_status"
                                        v-validate="'required'"
                                        :options="['received','pending']"/>
                                <span class="text-danger text-sm"
                                      v-show="errors.has('status')">{{ errors.first('status') }}</span>
                            </div>
                            <div class="vx-col md:w-1/3 w-full">
                                <label>ពិពណ៌នា</label>
                                <vs-textarea
                                        class="w-full"
                                        label="ពិពណ៌នា"
                                        v-model="purchase.description"
                                        name="description"
                                        v-validate="'required'"/>
                                <span class="text-danger text-sm"
                                      v-show="errors.has('description')">{{ errors.first('description') }}</span>
                            </div>
                            <div class="vx-col md:w-1/3">
                                Amount
                                <span class="text-6xl block">${{purchase.total_balance}}</span>
                            </div>
                        </div>
                        <vs-divider
                                position="left">
                            បញ្ជីទំនិញ
                        </vs-divider>
                        <table class="vs-table vs-table--tbody-table">
                            <thead>
                            <tr>
                                <th>
                                    ល.រ
                                </th>
                                <th>
                                    ឈ្មោះ
                                </th>
                                <th>
                                    ពិពណ៌នា
                                </th>
                                <th>
                                    Inventory
                                    Type
                                </th>
                                <th>
                                    ចំនួន
                                </th>
                                <th>
                                    តម្លៃទិញ
                                </th>
                                <th>
                                    តម្លៃលក់
                                </th>
                                <th>
                                    សរុប
                                </th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr :key="index"
                                v-for="(tr, index) in purchase.items">
                                <td class="py-1">
                                    {{index+1}}
                                </td>
                                <td width="400">
                                    <q-select
                                            outlined
                                            square
                                            dense
                                            v-model="tr.id"
                                            use-input
                                            input-debounce="0"
                                            label="ជ្រើសរើសទំនិញ"
                                            :options="Object.freeze(options)"
                                            @filter="filterFn"
                                            behavior="dialog"
                                            :name="`product-${index}`"
                                            v-validate="'required'"
                                            @input="selectProduct(tr.id,index)"
                                            clearable
                                    >
                                        <template
                                                v-slot:no-option>
                                            <q-item>
                                                <q-item-section
                                                        class="text-grey">
                                                    No
                                                    results
                                                </q-item-section>
                                            </q-item>
                                        </template>
                                    </q-select>

                                    <span class="text-danger text-sm"
                                          v-show="errors.has(`product-${index}`)">{{ errors.first(`product-${index}`) }}</span>
                                </td>
                                <td>
                                    {{
                                    tr.description
                                    }}
                                </td>
                                <td>
                                    <v-select
                                            :name="`inventory_type-${index}`"
                                            v-validate="'required'"
                                            v-model="tr.inventory_type"
                                            :options="['inventory_part','service','sale_only','purchase_only']"/>
                                    <span class="text-danger text-sm"
                                          v-show="errors.has(`inventory_type-${index}`)">{{ errors.first(`inventory_type-${index}`) }}</span>
                                </td>
                                <td>
                                    <vs-input-number
                                            color="danger"
                                            v-model="tr.qty"
                                            min="0"
                                            :name="`qty-${index}`"
                                            v-validate="'required'"/>
                                    <span class="text-danger text-sm"
                                          v-show="errors.has(`qty-${index}`)">{{ errors.first(`qty-${index}`) }}</span>
                                </td>
                                <td>
                                    <vs-input-number
                                            color="danger"
                                            v-model="tr.purchase_price"
                                            min="0"
                                            :name="`purchase_price-${index}`"
                                            v-validate="'required'"/>
                                    <span class="text-danger text-sm"
                                          v-show="errors.has(`purchase_price-${index}`)">{{ errors.first(`purchase_price-${index}`) }}</span>
                                </td>
                                <td>
                                    <vs-input-number
                                            color="danger"
                                            v-model="tr.sale_price"
                                            min="0"
                                            :name="`sale_price-${index}`"
                                            v-validate="'required'"/>
                                    <span class="text-danger text-sm"
                                          v-show="errors.has(`sale_price-${index}`)">{{ errors.first(`sale_price-${index}`) }}</span>
                                </td>
                                <td>
                                    {{
                                    tr.amount
                                    =
                                    tr.purchase_price*tr.qty
                                    }}
                                </td>
                                <td class="py-1">
                                    <vs-button
                                            @click="removeItemLine(index)"
                                            icon="icon-trash-2"
                                            color="warning"
                                            icon-pack="feather"
                                            type="flat"></vs-button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <vs-button
                                @click="addItemLine"
                                icon="icon-plus"
                                class="rounded-none my-3"
                                icon-pack="feather"
                                type="line">
                            បន្ថែមទំនិញ
                        </vs-button>
                        <div class="vx-row">
                            <div class="vx-col md:w-1/2 w-full">
                                <vs-divider
                                        position="left">
                                    Payment
                                </vs-divider>
                                <div class="vx-row">
                                    <div class="vx-col md:w-1/2 w-full">
                                        <label>ប្រាក់ទិញទំនិញ</label>
                                        <vs-input-number
                                                color="warning"
                                                v-model="purchase.balance"
                                                min="0"
                                                :max="purchase.total_balance"
                                                label="ប្រាក់ទិញទំនិញ:"/>
                                    </div>
                                    <div class="vx-col md:w-1/2 w-full">
                                        <label>ទឹកប្រាក់ជំពាក់</label>
                                        <vs-input
                                                step="any"
                                                readonly
                                                type="number"
                                                class="w-full"
                                                v-model="purchase.due_balance = purchase.total_balance - purchase.balance"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <vs-divider/>
                        <!-- Save & Reset Button -->
                        <div class="flex justify-end btn-group">
                            <vs-button
                                    @click="storePurchase"
                                    icon="icon-save"
                                    icon-pack="feather"
                                    type="relief">
                                រក្សាទុក
                            </vs-button>
                        </div>
                    </vx-card>
                </q-card-section>
            </q-card>
        </q-dialog>
        <add-supplier
                ref="addSupplier"></add-supplier>
        <add-unit
                ref="addUnit"></add-unit>
        <add-category
                ref="addCategory"></add-category>
        <add-brand
                ref="addBrand"></add-brand>
    </div>
</template>

<script>
    import flatPickr
        from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.min.css';
    import AddUnit
        from "../product/addUnit";
    import AddCategory
        from "../product/addCategory";
    import AddBrand
        from "../product/addBrand";
    import AddSupplier
        from "./addSupplier";
    import vSelect
        from 'vue-select'

    const stringOptions = [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
    ]
    export default {
        name: "addPurchase",
        components: {
            AddSupplier,
            AddBrand,
            AddCategory,
            AddUnit,
            flatPickr,
            'v-select': vSelect,
        },
        data() {
            return {
                select: null,
                options: [],
                dialog: false,
                purchase: {
                    user_id: this.$store.state.AppActiveUser.uid,
                    supplier: null,
                    location: 'Ly Put Garage',
                    purchase_date: null,
                    purchase_status: 'pending',
                    description: '',
                    total_balance: null,
                    balance: null,
                    due_balance: 0,
                    amount: 0,
                    qty: 0,
                    items: []
                },
            }
        },
        computed: {
            all_suppliers() {
                return this.$store.getters.all_supplier
            },
            all_products() {
                return this.$store.getters.all_product.sort((a, b) => (a.id > b.id) ? 1 : -1)
            },
            map_all_products() {
                return this.all_products.map(function (x) {
                    return {
                        label: `ID: ${x.id} - ${x.name} (តម្លៃលក់ ${x.default_sale} តម្លៃទិញ ${x.default_purchase})`,
                        value: x.id,
                        ...x
                    }
                })
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
            filterFn(val, update) {
                if (val === '') {
                    update(() => {
                        this.options = this.map_all_products
                    })
                    return
                }

                update(() => {
                    const needle = val.toLowerCase()
                    this.options = this.map_all_products.filter(v => String(v.value).toLowerCase().indexOf(needle) > -1)
                })
            },
            // Create callback function to receive barcode when the scanner is already done
            onBarcodeScanned(barcode) {
                this.addItemLine();
                let index = this.purchase.items.length - 1;
                this.selectProduct({id: parseInt(barcode)}, index);
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
                    qty: null,
                    purchase_price: 1,
                    sale_price: 1,
                    amount: 1,
                    inventory_type: ''
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
                if (id) {
                    let selected = self.all_products.filter(function (x) {
                        return parseInt(x.id) === parseInt(id.id);
                    });
                    self.purchase.items[index].name = selected[0].name;
                    self.purchase.items[index].id = {
                        id: selected[0].id,
                        name: `ID: ${selected[0].id} - ${selected[0].name}`,
                        label: id.label,
                        value: id.value
                    };
                    self.purchase.items[index].description = selected[0].description;
                    self.purchase.items[index].inventory_type = selected[0].inventory_type;
                    /*self.purchase.items[index].sale_price = selected[0].default_sale;
                    self.purchase.items[index].purchase_price = selected[0].default_purchase;*/
                    self.purchase.items[index].sale_price = null;
                    self.purchase.items[index].purchase_price = null;
                }
            },
            show() {
                this.dialog = true;
                this.$barcodeScanner.init(this.onBarcodeScanned);
                this.purchase.items = [];
            },
            //store
            storePurchase() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('storePurchase', self.purchase).then(function (data) {
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
                                self.resetField();
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
            resetField() {
                this.purchase.items = [];
                this.purchase.supplier = null;
                this.purchase.location = 'Ly Put Garage';
                this.purchase.purchase_date = null;
                this.purchase.purchase_status = 'pending';
                this.purchase.description = '';
                this.dialog = false;
            },
            //image upload
            successUpload(file, res) {
                this.product.image = (res.path)
            }
        },
    }
</script>

<style scoped>

</style>
