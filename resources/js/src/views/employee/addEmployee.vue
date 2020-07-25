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
                            <div class="vx-col md:w-3/4">
                                <div class="vx-row">
                                    <div class="vx-col md:w-1/2 w-full mt-1">
                                        <vs-input v-validate="'required'" label-placeholder="ឈ្មោះ" name="name"
                                                  v-model="data.name" class="w-full"/>
                                        <span class="text-danger text-sm"
                                              v-show="errors.has('name')">{{ errors.first('name') }}</span>
                                    </div>
                                    <div class="vx-col md:w-1/2 w-full">
                                        <label>ភេទ</label>
                                        <v-select v-validate="'required'" name="gender" v-model="data.gender" :options="['ប្រុស','ស្រី']"/>
                                        <span class="text-danger text-sm"
                                              v-show="errors.has('gender')">{{ errors.first('gender') }}</span>
                                    </div>
                                </div>
                                <div class="vx-row mt-2">
                                    <div class="vx-col md:w-1/2 w-full">
                                        <label>ថ្ងៃខែឆ្នាំកំណើត</label>
                                        <q-input
                                                dense
                                                v-validate="'required'"
                                                class="full-width"
                                                outlined
                                                v-model="data.dob"
                                                square
                                                name="dob"
                                        >
                                            <template
                                                    v-slot:append>
                                                <q-icon name="event"
                                                        class="cursor-pointer">
                                                    <q-popup-proxy
                                                            ref="datePurchase"
                                                            transition-show="scale"
                                                            transition-hide="scale">
                                                        <q-date v-model="data.dob"
                                                                @input="() => $refs.datePurchase.hide()"/>
                                                    </q-popup-proxy>
                                                </q-icon>
                                            </template>
                                        </q-input>
                                        <span class="text-danger text-sm"
                                              v-show="errors.has('dob')">{{ errors.first('dob') }}</span>
                                    </div>
                                    <div class="vx-col md:w-1/2 w-full">
                                        <label>អ្នកប្រើប្រាស់</label>
                                        <v-select v-validate="'required'" name="user_id" label="name" v-model="data.user_id" :options="all_users"/>
                                        <span class="text-danger text-sm"
                                              v-show="errors.has('user_id')">{{ errors.first('user_id') }}</span>
                                    </div>
                                </div>
                                <div class="vx-row mt-2">
                                    <div class="vx-col md:w-1/2 w-full">
                                        <label>ទំនាក់ទំនង</label>
                                        <vs-textarea v-validate="'required'" name="contact" label="ទំនាក់ទំនង" v-model="data.contact"/>
                                        <span class="text-danger text-sm"
                                              v-show="errors.has('contact')">{{ errors.first('contact') }}</span>
                                    </div>
                                    <div class="vx-col md:w-1/2 w-full">
                                        <label>អាស័យដ្ឋានបច្ចុប្បន្ន និងកំណើត</label>
                                        <vs-textarea v-validate="'required'" name="address" label="អាស័យដ្ឋានបច្ចុប្បន្ន និងកំណើត" v-model="data.address"/>
                                        <span class="text-danger text-sm"
                                              v-show="errors.has('address')">{{ errors.first('address') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="vx-col md:w-1/4">
                                <label>ប្រូហ្វាល</label>
                                <vue-dropzone class="max-content p-1" duplicateCheck ref="image"
                                              @vdropzone-success="successUpload" id="dropzone"
                                              :options="dropzoneOptions"></vue-dropzone>
                            </div>
                        </div>
                        <vs-divider/>
                        <!-- Save & Reset Button -->
                        <div class="flex justify-end btn-group">
                            <vs-button @click="storeEmployee" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក
                            </vs-button>
                        </div>
                    </vx-card>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
    import vSelect from 'vue-select'
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.min.css';
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    export default {
        name: "addEmployee",
        components: {vueDropzone: vue2Dropzone, 'v-select': vSelect, flatPickr},
        data() {
            return {
                dialog:false,
                data: {
                    user_id: {id:1,name:'ជ្រើសរើស'},
                    dob: null,
                    name: null,
                    contact: null,
                    address: null,
                    gender: 'ប្រុស',
                    profile: '/images/placeholder/placeholder.png'
                },
                //dropzone option
                dropzoneOptions: {
                    url: route('file.upload.thumb'),
                    maxFiles: 1,
                    addRemoveLinks: true,
                    dictDefaultMessage: "ដាក់រូបភាពបើមាន",
                    thumbnailWidth: 150,
                    thumbnailHeight: 150,
                }
            }
        },
        computed: {
            all_users(){
                return this.$store.getters.all_user;
            }
        },
        methods: {
            show() {
                this.dialog = true;
            },
            //store
            storeEmployee() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('storeEmployee', self.data).then(function (data) {
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
                this.data = {
                    dob: null,
                    name: null,
                    contact: null,
                    address: null,
                    gender: 'ប្រុស',
                    profile: '/images/placeholder/placeholder.png'
                };
            },
            //image upload
            successUpload(file, res) {
                this.data.profile = (res.path)
            }
        },
    }
</script>

<style scoped>

</style>
