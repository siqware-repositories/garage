<template>
    <q-dialog
            v-model="dialog"
            persistent
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
                    <vs-input class="w-full" label-placeholder="ឈ្មោះ" name="unit" v-model="unit" @keyup.enter="storeUnit"
                              v-validate="'required'"/>
                    <span class="text-danger text-sm"
                          v-show="errors.has('unit')">{{ errors.first('unit') }}</span>
                </div>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script>
    export default {
        name: "addUnit",
        data() {
            return {
                dialog:false,
                unit:'',
            }
        },
        methods: {
            show() {
                this.dialog = true
            },
            //store
            storeUnit() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('storeUnit', {name:self.unit}).then(function (data) {
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
                this.unit = ''
            },
        },
    }
</script>

<style scoped>

</style>