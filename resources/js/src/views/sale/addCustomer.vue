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

                <q-card-section class="q-pt-none q-px-lg">
                    <div class="vx-row">
                        <div class="vx-col md:w-2/3 w-full">
                            <div class="vx-row">
                                <div class="vx-col w-full">
                                    <vs-input class="w-full" label-placeholder="ឈ្មោះ" name="name" v-model="data.name"
                                              v-validate="'required'"/>
                                    <span class="text-danger text-sm"
                                          v-show="errors.has('name')">{{ errors.first('name') }}</span>
                                </div>
                            </div>
                            <div class="vx-row">
                                <div class="vx-col w-full">
                                    <label>ទំនាក់ទំនង</label>
                                    <vs-textarea class="w-full" label="ទំនាក់ទំនង" v-model="data.contact" name="contact"
                                                 v-validate="'required'"/>
                                    <span class="text-danger text-sm"
                                          v-show="errors.has('contact')">{{ errors.first('contact') }}</span>
                                </div>
                                <div class="vx-col w-full">
                                    <label>សំគាល់</label>
                                    <vs-textarea class="w-full" label="សំគាល់" v-model="data.note" name="note"
                                                 v-validate="'required'"/>
                                    <span class="text-danger text-sm"
                                          v-show="errors.has('note')">{{ errors.first('note') }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="vx-col md:w-1/3 w-full">
                            <label>អាស័យដ្ឋាន</label>
                            <vs-textarea class="w-full" label="អាស័យដ្ឋាន" v-model="data.address" name="address"
                                         v-validate="'required'"/>
                            <span class="text-danger text-sm"
                                  v-show="errors.has('address')">{{ errors.first('address') }}</span>
                        </div>
                    </div>
                    <vs-divider/>
                    <!-- Save & Reset Button -->
                    <div class="flex justify-end btn-group">
                        <vs-button @click="storeCustomer" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
    export default {
        name: "addCustomer",
        data() {
            return {
                dialog:false,
                data:{
                    name:null,
                    contact:null,
                    note:null,
                    address:null
                }
            }
        },
        methods: {
            show() {
                this.dialog = true;
            },
            //store
            storeCustomer() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('storeCustomer', self.data).then(function (data) {
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
                    name:null,
                    contact:null,
                    note:null,
                    address:null
                };
            }
        },
    }
</script>

<style scoped>

</style>