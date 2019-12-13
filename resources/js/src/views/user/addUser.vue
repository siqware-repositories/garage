<template>
    <div>
        <modal width="50%" height="auto" :scrollable="true" :pivotY="0.2" :clickToClose="false" name="add-user">
            <div class="flex justify-end">
                <i @click="$modal.hide('add-user')" class="vs-icon vs-popup--close material-icons text-warning"
                   style="background: rgb(255, 255, 255);">close</i>
            </div>
            <vx-card no-shadow>
                <div class="vx-row">
                    <div class="vx-col md:w-3/4">
                        <div class="vx-row">
                            <div class="vx-col w-full">
                                <vs-input v-validate="'required'" label-placeholder="ឈ្មោះ" name="name"
                                          v-model="data.name" class="w-full"/>
                                <span class="text-danger text-sm"
                                      v-show="errors.has('name')">{{ errors.first('name') }}</span>
                            </div>
                            <div class="vx-col w-full mt-2">
                                <vs-input v-validate="'required|email'" label-placeholder="អ៊ីម៉ែល" name="email"
                                          v-model="data.email" class="w-full"/>
                                <span class="text-danger text-sm"
                                      v-show="errors.has('email')">{{ errors.first('email') }}</span>
                            </div>
                            <div class="vx-col w-full mt-2">
                                <vs-input type="password" ref="password" v-validate="'min:6|max:10'" label-placeholder="ពាក្យសម្ងាត់" name="password" v-model="data.password" class="w-full" />
                                <span class="text-danger text-sm" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                            </div>
                            <div class="vx-col w-full mt-2">
                                <vs-input type="password" v-validate="'min:6|max:10|confirmed:password'" label-placeholder="ផ្ទៀងផ្ទាត់ ពាក្យសម្ងាត់" name="confirm_password" v-model="data.confirm_password" class="w-full"/>
                                <span class="text-danger text-sm" v-show="errors.has('confirm_password')">{{ errors.first('confirm_password') }}</span>
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
                    <vs-button @click="storeUser" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក
                    </vs-button>
                </div>
            </vx-card>
        </modal>
    </div>
</template>

<script>
    import vSelect from 'vue-select'
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.min.css';
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    export default {
        name: "addUser",
        components: {vueDropzone: vue2Dropzone, 'v-select': vSelect, flatPickr},
        data() {
            return {
                data: {
                    name: '',
                    email: '',
                    password: '',
                    confirm_password: '',
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
        computed: {},
        methods: {
            show() {
                this.$modal.show('add-user');
            },
            //store
            storeUser() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('storeUser', self.data).then(function (data) {
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
                    name: '',
                    email: '',
                    password: '',
                    confirm_password: '',
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