<template>
    <div>
        <modal width="90%" height="auto" :scrollable="true" :pivotY="0.2" :clickToClose="false" name="edit-purchase">
            <div class="flex justify-end">
                <i @click="$modal.hide('edit-purchase')" class="vs-icon vs-popup--close material-icons text-warning"
                   style="background: rgb(255, 255, 255);">close</i>
            </div>
            <vx-card no-shadow>
                <div class="vx-row my-3">
                    <div class="vx-col md:w-1/3 w-full">
                        <label>អ្នកផ្គត់ផ្គង់</label>
                        <vx-input-group>
                            <v-select :filterBy="searchSupplier" v-model="purchase.supplier" label="name" name="supplier" v-validate="'required'" :options="all_suppliers">
                                <template v-slot:option="option" class="vs-list">
                                    <vs-list-item :title="`ឈ្មោះ​ ${option.name} ក្រុមហ៊ុន ${option.company}`" :subtitle="`ទំនាក់ទំនង ${option.contact} អាស័យដ្ឋាន ${option.address}`"></vs-list-item>
                                </template>
                            </v-select>
                            <template slot="append">
                                <div class="append-text btn-addon" @click="$refs.addSupplier.show()">
                                    <vs-button class="rounded-none" type="filled" icon-pack="feather"
                                               icon="icon-plus"></vs-button>
                                </div>
                            </template>
                        </vx-input-group>
                        <span class="text-danger text-sm"
                              v-show="errors.has('supplier')">{{ errors.first('supplier') }}</span>
                    </div>
                    <div class="vx-col md:w-1/3 w-full">
                        <label>ទីតាំង</label>
                        <v-select v-model="purchase.location" name="location" v-validate="'required'" :options="['Ly Put Garage']"/>
                        <span class="text-danger text-sm"
                              v-show="errors.has('location')">{{ errors.first('location') }}</span>
                    </div>
                    <div class="vx-col md:w-1/3 w-full">
                        <label>ថ្ងៃខែឆ្នាំទិញ</label>
                        <flat-pickr name="date" v-validate="'required'" class="w-full" v-model="purchase.purchase_date" placeholder="Choose Date" />
                        <span class="text-danger text-sm"
                              v-show="errors.has('purchase_date')">{{ errors.first('purchase_date') }}</span>
                    </div>
                </div>
                <div class="vx-row my-3">
                    <div class="vx-col md:w-1/3 w-full">
                        <label>Purchase Status</label>
                        <v-select v-model="purchase.purchase_status" name="purchase_status" v-validate="'required'" :options="['received','pending']"/>
                        <span class="text-danger text-sm"
                              v-show="errors.has('status')">{{ errors.first('status') }}</span>
                    </div>
                    <div class="vx-col md:w-1/3 w-full">
                        <label>ពិពណ៌នា</label>
                        <vs-textarea class="w-full" label="ពិពណ៌នា" v-model="purchase.description" name="description"
                                     v-validate="'required'"/>
                        <span class="text-danger text-sm"
                              v-show="errors.has('description')">{{ errors.first('description') }}</span>
                    </div>
                    <div class="vx-col md:w-1/3 shadow-md">
                        <div class="vx-row">
                            <div class="vx-col md:w-1/2 w-full">
                                Amount
                                <span class="text-6xl block">${{purchase.total_balance}}</span>
                            </div>
                            <div class="vx-col md:w-1/2 w-full">
                                <bar-code :value="purchase.id" :options="{ displayValue: true }"></bar-code>
                            </div>
                        </div>
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
                    <th>តម្លៃទិញ</th>
                    <th>តម្លៃលក់</th>
                    <th>សរុប</th>
                    <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr :key="indextr" v-for="(tr, indextr) in purchase.items">
                        <td class="py-1">
                            {{indextr+1}}
                        </td>
                        <td width="400">
                            <v-select :filterBy="searchProduct" v-model="tr.id" label="name" :name="`product-${indextr}`" v-validate="'required'" :options="all_products" @input="selectProduct(tr.id,indextr)">
                                <template v-slot:option="option" class="vs-list">
                                    <vs-list-item :title="`ID: ${option.id} ឈ្មោះ​ ${option.name}`" :subtitle="`តម្លៃលក់ ${option.default_purchase} តម្លៃទិញ ${option.default_sale}`"></vs-list-item>
                                </template>
                            </v-select>
                            <span class="text-danger text-sm"
                                  v-show="errors.has(`product-${indextr}`)">{{ errors.first(`product-${indextr}`) }}</span>
                        </td>
                        <td>
                            {{ tr.description }}
                        </td>
                        <td>
                            <vs-input-number color="danger" v-model="tr.qty" min="0" :name="`qty-${indextr}`" v-validate="'required'"/>
                            <span class="text-danger text-sm"
                                  v-show="errors.has(`qty-${indextr}`)">{{ errors.first(`qty-${indextr}`) }}</span>
                        </td>
                        <td>
                            <vs-input-number color="danger" v-model="tr.purchase_price" min="0" :name="`purchase_price-${indextr}`" v-validate="'required'"/>
                            <span class="text-danger text-sm"
                                  v-show="errors.has(`purchase_price-${indextr}`)">{{ errors.first(`purchase_price-${indextr}`) }}</span>
                        </td>
                        <td>
                            <vs-input-number color="danger" v-model="tr.sale_price" min="0" :name="`sale_price-${indextr}`" v-validate="'required'"/>
                            <span class="text-danger text-sm"
                                  v-show="errors.has(`sale_price-${indextr}`)">{{ errors.first(`sale_price-${indextr}`) }}</span>
                        </td>
                        <td>
                            {{ tr.amount = tr.purchase_price*tr.qty }}
                        </td>
                        <td class="py-1">
                            <vs-button @click="removeItemLine(indextr)" icon="icon-trash-2" color="warning" icon-pack="feather" type="flat"></vs-button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <vs-button @click="addItemLine" icon="icon-plus" class="rounded-none my-3" icon-pack="feather" type="line">បន្ថែមទំនិញ</vs-button>
                <div class="vx-row">
                    <div class="vx-col md:w-1/2 w-full">
                        <vs-divider position="left">Payment</vs-divider>
                       <div class="vx-row">
                           <div class="vx-col md:w-1/2 w-full">
                               <label>ប្រាក់ទិញទំនិញ</label>
                               <vs-input-number color="warning" v-model="purchase.balance" min="0" :max="purchase.total_balance" label="ប្រាក់ទិញទំនិញ:"/>
                           </div>
                           <div class="vx-col md:w-1/2 w-full">
                               <label>ទឹកប្រាក់ជំពាក់</label>
                               <vs-input step="any" readonly type="number" class="w-full" v-model="purchase.due_balance = purchase.total_balance - purchase.balance"/>
                           </div>
                       </div>
                    </div>
                </div>
                <vs-divider/>
                <!-- Save & Reset Button -->
                <div class="flex justify-end btn-group">
                    <vs-button @click="updatePurchase()" icon="icon-edit" icon-pack="feather" type="relief">កែប្រែ</vs-button>
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
    export default {
        name: "editPurchase",
        components: {AddSupplier, AddBrand, AddCategory, AddUnit,flatPickr,'v-select': vSelect,'bar-code':VueBarcode},
        data() {
            return {
                purchase:{
                    user_id:this.$store.state.AppActiveUser.uid,
                    id:null,
                    supplier:null,
                    location:'Ly Put Garage',
                    purchase_date:null,
                    purchase_status:'pending',
                    description:'',
                    total_balance:null,
                    balance:null,
                    due_balance:0,
                    amount:0,
                    qty:0,
                    items:[{id:'',name:null,description:null,qty:1,purchase_price:1,sale_price:1,amount:1,inventory_type:''}]
                },
            }
        },
        computed:{
            all_suppliers(){
                return this.$store.getters.all_supplier
            },
            all_products(){
                return this.$store.getters.all_product
            },
            total(){
                let self = this;
                let total = 0.0;
                self.purchase.items.forEach(function (item,index) {
                    total+=parseFloat(item.amount)
                });
                self.purchase.total_balance = total;
                self.purchase.balance = total;
                return total
            },
            total_qty(){
                let self = this;
                let total = 0;
                self.purchase.items.forEach(function (item,index) {
                    total+=parseFloat(item.qty)
                });
                self.purchase.qty = total;
                return total
            }
        },
        updated(){
            let x = this.total_qty;
            let y = this.total;
        },
        methods: {
            //fetch purchase
            async fetchPurchase(){
                await this.$store.dispatch('fetchPurchase')
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
            addItemLine(){
                let self = this;
                self.purchase.items.push({id:'',name:null,description:null,qty:1,purchase_price:1,sale_price:1,amount:1,inventory_type: ''});
            },
            //remove line
            removeItemLine(index){
                let self = this;
                self.purchase.items.splice(index,1);
            },
            //select product
            selectProduct(id,index){
                let self = this;
                let selected = self.all_products.filter(function (x) {
                    return parseInt(x.id) === parseInt(id.id);
                });
                self.purchase.items[index].name = selected[0].name;
                self.purchase.items[index].description = selected[0].description;
                self.purchase.items[index].sale_price = selected[0].default_sale;
                self.purchase.items[index].inventory_type = selected[0].inventory_type;
                self.purchase.items[index].purchase_price = selected[0].default_purchase;
            },
            show(data) {
                let self = this;
                this.$modal.show('edit-purchase');
                this.purchase.id = data.id;
                this.purchase.supplier = data.supplier;
                this.purchase.location = data.location;
                this.purchase.purchase_date = data.date;
                this.purchase.purchase_status = data.purchase_status;
                this.purchase.description = data.description;
                this.purchase.balance = data.balance;
                self.purchase.items = [];
                data.purchase_detail.forEach(function (item,index) {
                    self.purchase.items.push({id:item.product,name:item.product.name,description:item.product.description,qty:item.qty,purchase_price:item.purchase,sale_price:item.sale,amount:item.amount,inventory_type:item.product.inventory_type})
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

</style>