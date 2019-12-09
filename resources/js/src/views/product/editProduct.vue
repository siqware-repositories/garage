<template>
    <modal width="90%" height="auto" :scrollable="true" :pivotY="0.2" :clickToClose="false" name="edit">
        <div class="flex justify-end">
            <i @click="$modal.hide('edit')" class="vs-icon vs-popup--close material-icons text-warning"
               style="background: rgb(255, 255, 255);">close</i>
        </div>
        <vx-card no-shadow>
            <div class="vx-row">
                <div class="vx-col md:w-1/3 w-full">
                    <div class="vx-row">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" label-placeholder="ឈ្មោះ" name="name" v-model="product.name"
                                      v-validate="'required'"/>
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
                                <vs-select
                                        class="w-full"
                                        v-model="product.unit"
                                        name="unit" v-validate="'required'"
                                >
                                    <vs-select-item :key="index" :value="item.name" :text="item.name"
                                                    v-for="item,index in units"/>
                                </vs-select>
                                <template slot="append">
                                    <div class="append-text btn-addon">
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
                                <vs-select
                                        class="w-full"
                                        v-model="product.category"
                                        name="category" v-validate="'required'"
                                >
                                    <vs-select-item :key="index" :value="item.name" :text="item.name"
                                                    v-for="item,index in categories"/>
                                </vs-select>
                                <template slot="append">
                                    <div class="append-text btn-addon">
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
                                <vs-select
                                        class="w-full"
                                        v-model="product.brand"
                                        name="brand" v-validate="'required'"
                                >
                                    <vs-select-item :key="index" :value="item.name" :text="item.name"
                                                    v-for="item,index in brands"/>
                                </vs-select>
                                <template slot="append">
                                    <div class="append-text btn-addon">
                                        <vs-button class="rounded-none" type="filled" icon-pack="feather"
                                                   icon="icon-plus"></vs-button>
                                    </div>
                                </template>
                            </vx-input-group>
                            <span class="text-danger text-sm"
                                  v-show="errors.has('brand')">{{ errors.first('brand') }}</span>
                        </div>
                        <div class="vx-col md:w-1/2 w-full">
                            <vs-select
                                    label="Inventory Type"
                                    class="w-full"
                                    v-model="product.inventory_type"
                                    name="inventory_type" v-validate="'required'"
                            >
                                <vs-select-item :key="index" :value="item.name" :text="item.name"
                                                v-for="item,index in inventory_type"/>
                            </vs-select>
                            <span class="text-danger text-sm"
                                  v-show="errors.has('inventory_type')">{{ errors.first('inventory_type') }}</span>
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col md:w-1/2 my-2">
                            <vue-dropzone class="max-content p-1" duplicateCheck ref="image"
                                          @vdropzone-success="successUpload" id="dropzone"
                                          :options="dropzoneOptions"
                                          @vdropzone-mounted="editThumb"
                            ></vue-dropzone>
                        </div>
                    </div>
                </div>
            </div>
            <vs-divider/>
            <!-- Save & Reset Button -->
            <div class="flex justify-end btn-group">
                <vs-button @click="updateProduct" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
            </div>
        </vx-card>
    </modal>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'

    export default {
        name: "editProduct",
        components: {vueDropzone: vue2Dropzone},
        data() {
            return {
                product: {
                    name: '',
                    description: '',
                    unit: 'ដំុ',
                    category: 'គ្រឿងក្រោម',
                    brand: 'AKA',
                    inventory_type: 'inventory_part',
                    default_purchase: 1,
                    default_sale: 1,
                    image: 'images/placeholder/placeholder.png',
                },
                units: [{name: 'គីឡូ'}, {name: 'លីត្រ'}, {name: 'ដំុ'}],
                categories: [{name: 'គ្រឿងក្រោម'}, {name: 'ដែក'}, {name: 'ដំុ'}],
                brands: [{name: 'AKA'}, {name: 'Snip'}],
                inventory_type: [{name: 'inventory_part'}, {name: 'service'}, {name: 'sale_only'}, {name: 'purchase_only'}],
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
        methods: {
            show() {
                this.$modal.show('edit');
            },
            //edit thumb
            editThumb(){
                this.$refs.image.manuallyAddFile({size:123}, this.product.image);
            },
            //edit product
            editProduct(data){
                this.product = data;
                console.log(data)
            },
            //store
            updateProduct() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('updateProduct', self.product).then(function (data) {
                            if (data) {
                                self.$vs.notify({
                                    time: 4000,
                                    title: 'ប្រតិបត្តិការជោគជ័យ',
                                    text: 'ទិន្នន័យបានកែប្រែ',
                                    color: 'success',
                                    iconPack: 'feather',
                                    icon: 'icon-check',
                                    position: 'top-center'
                                });
                            } else {
                                self.$vs.notify({
                                    title: 'ប្រតិបត្តិការបរាជ័យ',
                                    text: 'ទិន្នន័យមិនបានកែប្រែ',
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