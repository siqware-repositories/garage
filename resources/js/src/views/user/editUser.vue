<template>
    <div>
        <modal width="50%" height="auto" :scrollable="true" :pivotY="0.2" :clickToClose="false" name="edit-user">
            <div class="flex justify-end">
                <i @click="$modal.hide('edit-user')" class="vs-icon vs-popup--close material-icons text-warning"
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
                        </div>
                    </div>
                    <div class="vx-col md:w-1/4">
                        <label>ប្រូហ្វាល</label>
                        <vue-dropzone @vdropzone-mounted="loadProfile" class="max-content p-1" duplicateCheck ref="profile"
                                      @vdropzone-success="successUpload" id="profile"
                                      :options="dropzoneOptions"></vue-dropzone>
                    </div>
                </div>
                <vs-divider/>
                <!-- Save & Reset Button -->
                <div class="flex justify-end btn-group">
                    <vs-button @click="updateUser" icon="icon-edit" icon-pack="feather" type="relief">កែប្រែ
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
        name: "editUser",
        components: {vueDropzone: vue2Dropzone, 'v-select': vSelect, flatPickr},
        data() {
            return {
                data: {
                    id: null,
                    name: '',
                    email: '',
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
        methods: {
            //load profile
            loadProfile(){
                this.$refs.profile.manuallyAddFile({ size: 123}, this.data.profile);
            },
            show(data) {
                this.$modal.show('edit-user');
                this.data.id = data.id;
                this.data.name = data.name;
                this.data.email = data.email;
                this.data.profile = data.profile;
            },
            //store
            updateUser() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('updateUser', self.data).then(function (data) {
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
                this.data.profile = (res.path)
            }
        },
    }
</script>

<style scoped>

</style>