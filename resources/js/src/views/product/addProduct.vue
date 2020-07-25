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
                    <q-space />
                    <q-btn dense flat icon="close" v-close-popup>
                        <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                    </q-btn>
                </q-bar>

                <q-card-section>
                    <vx-card no-shadow>
                        <div class="vx-row">
                            <div class="vx-col md:w-1/3 w-full">
                                <div class="vx-row">
                                    <div class="vx-col w-full">
                                        <label>ឈ្មោះ</label>
                                        <vue-instant id="styles" v-model="product.name"
                                                     suggestion-attribute="name"
                                                     :suggestions="all_product"
                                                     type="google"
                                                     v-validate="'required'"
                                                     name="name"></vue-instant>
                                        <span class="text-danger text-sm"
                                              v-show="errors.has('name')">{{ errors.first('name') }}</span>
                                    </div>
                                    <div class="vx-col w-full my-2">
                                        <label>ពិពណ៌នា</label>
                                        <vs-textarea class="w-full" label="ពិពណ៌នា" v-model="product.description" name="description"
                                                     v-validate="'required'"/>
                                        <span class="text-danger text-sm"
                                              v-show="errors.has('description')">{{ errors.first('description') }}</span>
                                    </div>
                                    <div class="vx-col w-full">
                                        <vs-input-number v-model="product.default_purchase" min="0" label="តម្លៃទិញ:"/>
                                    </div>
                                    <div class="vx-col w-full">
                                        <vs-input-number v-model="product.default_sale" min="0" label="តម្លៃទលក់:"/>
                                    </div>
                                </div>
                            </div>
                            <div class="vx-col md:w-2/3 w-full">
                                <div class="vx-row">
                                    <div class="vx-col md:w-1/2 w-full">
                                        <label>Unit</label>
                                        <vx-input-group>
                                            <v-select name="unit" v-validate="'required'" :clearable="false" label="name" v-model="product.unit" :options="all_units"/>
                                            <template slot="append">
                                                <div class="append-text btn-addon" @click="$refs.addUnit.show()">
                                                    <vs-button class="rounded-none" type="filled" icon-pack="feather"
                                                               icon="icon-plus"></vs-button>
                                                </div>
                                            </template>
                                        </vx-input-group>
                                        <span class="text-danger text-sm"
                                              v-show="errors.has('unit')">{{ errors.first('unit') }}</span>
                                    </div>
                                    <div class="vx-col md:w-1/2 w-full">
                                        <label>ប្រភេទ</label>
                                        <vx-input-group>
                                            <v-select name="category" v-validate="'required'" :clearable="false" label="name" v-model="product.category" :options="all_categories"/>
                                            <template slot="append">
                                                <div class="append-text btn-addon" @click="$refs.addCategory.show()">
                                                    <vs-button class="rounded-none" type="filled" icon-pack="feather"
                                                               icon="icon-plus"></vs-button>
                                                </div>
                                            </template>
                                        </vx-input-group>
                                        <span class="text-danger text-sm"
                                              v-show="errors.has('category')">{{ errors.first('category') }}</span>
                                    </div>
                                </div>
                                <div class="vx-row">
                                    <div class="vx-col md:w-1/2 w-full">
                                        <label>Model</label>
                                        <vx-input-group>
                                            <v-select name="brand" v-validate="'required'" :clearable="false" label="name" v-model="product.brand" :options="all_brands"/>
                                            <template slot="append">
                                                <div class="append-text btn-addon" @click="$refs.addBrand.show()">
                                                    <vs-button class="rounded-none" type="filled" icon-pack="feather"
                                                               icon="icon-plus"></vs-button>
                                                </div>
                                            </template>
                                        </vx-input-group>
                                        <span class="text-danger text-sm"
                                              v-show="errors.has('brand')">{{ errors.first('brand') }}</span>
                                    </div>
                                    <div class="vx-col md:w-1/2 w-full">
                                        <label>Inventory Type</label>
                                        <v-select name="inventory_type" v-validate="'required'" v-model="product.inventory_type" :options="['inventory_part','service','sale_only','purchase_only']"/>
                                        <span class="text-danger text-sm"
                                              v-show="errors.has('inventory_type')">{{ errors.first('inventory_type') }}</span>
                                    </div>
                                </div>
                                <div class="vx-row">
                                    <div class="vx-col md:w-1/2 my-2">
                                        <vue-dropzone class="max-content p-1" duplicateCheck ref="image"
                                                      @vdropzone-success="successUpload" id="dropzone"
                                                      :options="dropzoneOptions"></vue-dropzone>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <vs-divider/>
                        <!-- Save & Reset Button -->
                        <div class="flex justify-end btn-group">
                            <vs-button @click="storeProduct" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
                        </div>
                    </vx-card>
                </q-card-section>
            </q-card>
        </q-dialog>
        <!--<modal width="90%" height="auto" :scrollable="true" :pivotY="0.2" :clickToClose="false" name="add">
            <div class="flex justify-end">
                <i @click="$modal.hide('add')" class="vs-icon vs-popup&#45;&#45;close material-icons text-warning"
                   style="background: rgb(255, 255, 255);">close</i>
            </div>
            <vx-card no-shadow>
                <div class="vx-row">
                    <div class="vx-col md:w-1/3 w-full">
                        <div class="vx-row">
                            <div class="vx-col w-full">
                                <label>ឈ្មោះ</label>
                                <vue-instant id="styles" v-model="product.name"
                                             suggestion-attribute="name"
                                             :suggestions="all_product"
                                             type="google"
                                             v-validate="'required'"
                                             name="name"></vue-instant>
                                <span class="text-danger text-sm"
                                      v-show="errors.has('name')">{{ errors.first('name') }}</span>
                            </div>
                            <div class="vx-col w-full my-2">
                                <label>ពិពណ៌នា</label>
                                <vs-textarea class="w-full" label="ពិពណ៌នា" v-model="product.description" name="description"
                                             v-validate="'required'"/>
                                <span class="text-danger text-sm"
                                      v-show="errors.has('description')">{{ errors.first('description') }}</span>
                            </div>
                            <div class="vx-col w-full">
                                <vs-input-number v-model="product.default_purchase" min="0" label="តម្លៃទិញ:"/>
                            </div>
                            <div class="vx-col w-full">
                                <vs-input-number v-model="product.default_sale" min="0" label="តម្លៃទលក់:"/>
                            </div>
                        </div>
                    </div>
                    <div class="vx-col md:w-2/3 w-full">
                        <div class="vx-row">
                            <div class="vx-col md:w-1/2 w-full">
                                <label>Unit</label>
                                <vx-input-group>
                                    <v-select name="unit" v-validate="'required'" :clearable="false" label="name" v-model="product.unit" :options="all_units"/>
                                    <template slot="append">
                                        <div class="append-text btn-addon" @click="$refs.addUnit.show()">
                                            <vs-button class="rounded-none" type="filled" icon-pack="feather"
                                                       icon="icon-plus"></vs-button>
                                        </div>
                                    </template>
                                </vx-input-group>
                                <span class="text-danger text-sm"
                                      v-show="errors.has('unit')">{{ errors.first('unit') }}</span>
                            </div>
                            <div class="vx-col md:w-1/2 w-full">
                                <label>ប្រភេទ</label>
                                <vx-input-group>
                                    <v-select name="category" v-validate="'required'" :clearable="false" label="name" v-model="product.category" :options="all_categories"/>
                                    <template slot="append">
                                        <div class="append-text btn-addon" @click="$refs.addCategory.show()">
                                            <vs-button class="rounded-none" type="filled" icon-pack="feather"
                                                       icon="icon-plus"></vs-button>
                                        </div>
                                    </template>
                                </vx-input-group>
                                <span class="text-danger text-sm"
                                      v-show="errors.has('category')">{{ errors.first('category') }}</span>
                            </div>
                        </div>
                        <div class="vx-row">
                            <div class="vx-col md:w-1/2 w-full">
                                <label>Model</label>
                                <vx-input-group>
                                    <v-select name="brand" v-validate="'required'" :clearable="false" label="name" v-model="product.brand" :options="all_brands"/>
                                    <template slot="append">
                                        <div class="append-text btn-addon" @click="$refs.addBrand.show()">
                                            <vs-button class="rounded-none" type="filled" icon-pack="feather"
                                                       icon="icon-plus"></vs-button>
                                        </div>
                                    </template>
                                </vx-input-group>
                                <span class="text-danger text-sm"
                                      v-show="errors.has('brand')">{{ errors.first('brand') }}</span>
                            </div>
                            <div class="vx-col md:w-1/2 w-full">
                                <label>Inventory Type</label>
                                <v-select name="inventory_type" v-validate="'required'" v-model="product.inventory_type" :options="['inventory_part','service','sale_only','purchase_only']"/>
                                <span class="text-danger text-sm"
                                      v-show="errors.has('inventory_type')">{{ errors.first('inventory_type') }}</span>
                            </div>
                        </div>
                        <div class="vx-row">
                            <div class="vx-col md:w-1/2 my-2">
                                <vue-dropzone class="max-content p-1" duplicateCheck ref="image"
                                              @vdropzone-success="successUpload" id="dropzone"
                                              :options="dropzoneOptions"></vue-dropzone>
                            </div>
                        </div>
                    </div>
                </div>
                <vs-divider/>
                &lt;!&ndash; Save & Reset Button &ndash;&gt;
                <div class="flex justify-end btn-group">
                    <vs-button @click="storeProduct" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
                </div>
            </vx-card>
        </modal>-->
        <add-unit ref="addUnit"></add-unit>
        <add-category ref="addCategory"></add-category>
        <add-brand ref="addBrand"></add-brand>
    </div>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    import AddUnit from "./addUnit";
    import AddCategory from "./addCategory";
    import AddBrand from "./addBrand";
    import vSelect from 'vue-select'
    export default {
        name: "addProduct",
        components: {AddBrand, AddCategory, AddUnit, vueDropzone: vue2Dropzone,'v-select': vSelect},
        data() {
            return {
                dialog:false,
                product: {
                    name: '',
                    description: '',
                    unit: {name:'ដំុ'},
                    category: {name:'RX300'},
                    brand: {name:'Toyota'},
                    inventory_type: 'inventory_part',
                    default_purchase: 1,
                    default_sale: 1,
                    image: 'images/placeholder/placeholder.png',
                },
                //dropzone option
                dropzoneOptions: {
                    url: route('file.upload.thumb'),
                    maxFiles: 1,
                    addRemoveLinks: true,
                    dictDefaultMessage: "ដាក់រូបភាពទំនិញបើមាន",
                    thumbnailWidth: 150,
                    thumbnailHeight: 150,
                }
            }
        },
        computed:{
            all_product(){
                return this.$store.getters.all_product
            },
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
                this.dialog = true;
            },
            //store
            storeProduct() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('storeProduct', self.product).then(function (data) {
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
                    unit: {name:'ដំុ'},
                    category: {name:'RX300'},
                    brand: {name:'Toyota'},
                    inventory_type: 'inventory_part',
                    default_purchase: 1,
                    default_sale: 1,
                    image: 'images/placeholder/placeholder.png',
                };
            },
            //image upload
            successUpload(file, res) {
                this.product.image = (res.path)
            }
        },
    }
</script>

<style scoped lang="scss">
    /*@import "../../../../sass/vue-instant/vue-instant-input.css";*/
</style>
