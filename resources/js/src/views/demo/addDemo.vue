<template>
    <modal width="90%" height="auto" :scrollable="true" :pivotY="0.2" :clickToClose="false" name="add">
        <div class="flex justify-end">
            <i @click="$modal.hide('add')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
        </div>
        <vx-card no-shadow>
            <div class="vx-row">
                <div class="vx-col w-full mb-2">
                    <vs-input class="w-full" label-placeholder="ចំណងជើង" name="title" v-model="about.title"
                              v-validate="'required'"/>
                    <span class="text-danger text-sm"
                          v-show="errors.has('title')">{{ errors.first('title') }}</span>
                </div>
                <div class="vx-col w-full">
                    <vs-input class="w-full" label-placeholder="សង្ខេបអត្ថបទ" name="excerpt" v-model="about.excerpt"
                              v-validate="'required'"/>
                    <span class="text-danger text-sm"
                          v-show="errors.has('excerpt')">{{ errors.first('excerpt') }}</span>
                </div>
                <div class="vx-col w-full mt-4">
                    <tinymce id="add-about" v-model="about.content" :other_options="options"></tinymce>
                </div>
            </div>
            <vs-divider/>
            <!-- Save & Reset Button -->
            <div class="flex justify-end btn-group">
                <vs-button @click="storeAbout" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
            </div>
        </vx-card>
    </modal>
</template>

<script>
    export default {
        name: "addDemo",
        data(){
            return{
                about:{
                    title:'',
                    excerpt:'',
                    content:''
                },
                options: {
                    height:300,
                }
            }
        },
        methods:{
            show () {
                this.$modal.show('add');
            },
            //store
            storeAbout(){
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result && self.about.content) {
                        self.$vs.loading();
                        self.$store.dispatch('storeAbout',self.about).then(function (data) {
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
                    }else {
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
            resetField(){
                this.about = {
                    title:'',
                    excerpt:'',
                    content:''
                }
            }
        },
    }
</script>

<style scoped>

</style>