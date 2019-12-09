<template>
    <div>
        <modal width="60%" height="auto" :scrollable="true" :pivotY="0.2" :clickToClose="false" name="add-supplier">
            <div class="flex justify-end">
                <i @click="$modal.hide('add-supplier')" class="vs-icon vs-popup--close material-icons text-warning"
                   style="background: rgb(255, 255, 255);">close</i>
            </div>
            <vx-card no-shadow>
                <div class="vx-row">
                    <div class="vx-col md:w-2/3 w-full">
                        <div class="vx-row">
                            <div class="vx-col md:w-1/2 w-full">
                                <vs-input class="w-full" label-placeholder="ឈ្មោះ" name="name" v-model="supplier.name"
                                          v-validate="'required'"/>
                                <span class="text-danger text-sm"
                                      v-show="errors.has('name')">{{ errors.first('name') }}</span>
                            </div>
                            <div class="vx-col md:w-1/2 w-full">
                                <vs-input class="w-full" label-placeholder="ឈ្មោះក្រុមហ៊ុន" name="company" v-model="supplier.company"
                                          v-validate="'required'"/>
                                <span class="text-danger text-sm"
                                      v-show="errors.has('company')">{{ errors.first('company') }}</span>
                            </div>
                        </div>
                        <div class="vx-row">
                            <div class="vx-col w-full">
                                <label>ទំនាក់ទំនង</label>
                                <vs-textarea class="w-full" label="ទំនាក់ទំនង" v-model="supplier.contact" name="contact"
                                             v-validate="'required'"/>
                                <span class="text-danger text-sm"
                                      v-show="errors.has('contact')">{{ errors.first('contact') }}</span>
                            </div>
                            <div class="vx-col w-full">
                                <label>សំគាល់</label>
                                <vs-textarea class="w-full" label="សំគាល់" v-model="supplier.note" name="note"
                                             v-validate="'required'"/>
                                <span class="text-danger text-sm"
                                      v-show="errors.has('note')">{{ errors.first('note') }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="vx-col md:w-1/3 w-full">
                        <label>អាស័យដ្ឋាន</label>
                        <vs-textarea class="w-full" label="អាស័យដ្ឋាន" v-model="supplier.address" name="address"
                                     v-validate="'required'"/>
                        <span class="text-danger text-sm"
                              v-show="errors.has('address')">{{ errors.first('address') }}</span>
                    </div>
                </div>
                <vs-divider/>
                <!-- Save & Reset Button -->
                <div class="flex justify-end btn-group">
                    <vs-button @click="storeSupplier" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
                </div>
            </vx-card>
        </modal>
        <add-unit ref="addUnit"></add-unit>
        <add-category ref="addCategory"></add-category>
        <add-brand ref="addBrand"></add-brand>
    </div>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    import AddUnit from "../product/addUnit";
    import AddCategory from "../product/addCategory";
    import AddBrand from "../product/addBrand";

    export default {
        name: "addSupplier",
        components: {AddBrand, AddCategory, AddUnit, vueDropzone: vue2Dropzone},
        data() {
            return {
                //supplier
                supplier:{
                    name:null,
                    company:null,
                    contact:null,
                    note:null,
                    address:null
                }
            }
        },
        computed:{
            all_units(){
                return this.$store.getters.all_unit
            },
            all_categories(){
                return this.$store.getters.all_category
            },
            all_brands(){
                return this.$store.getters.all_brand
            }
        },
        methods: {
            show() {
                this.$modal.show('add-supplier');
            },
            //store
            storeSupplier() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('storeSupplier', self.supplier).then(function (data) {
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
                this.product = {
                    name: '',
                    description: '',
                    unit: 'ដំុ',
                    category: 'គ្រឿងក្រោម',
                    brand: 'AKA',
                    inventory_type: 'inventory_part',
                    purchase: 1,
                    sale: 1,
                    image: 'placeholder/placeholder.png',
                };
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