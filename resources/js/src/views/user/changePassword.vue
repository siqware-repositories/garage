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
                            <div class="vx-col w-full mt-2">
                                <vs-input type="password" ref="password" v-validate="'required|min:6|max:10'" label-placeholder="ពាក្យសម្ងាត់" name="password" v-model="data.password" class="w-full" />
                                <span class="text-danger text-sm" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                            </div>
                            <div class="vx-col w-full mt-2">
                                <vs-input type="password" v-validate="'required|min:6|max:10|confirmed:password'" label-placeholder="ផ្ទៀងផ្ទាត់ ពាក្យសម្ងាត់" name="confirm_password" v-model="data.confirm_password" class="w-full"/>
                                <span class="text-danger text-sm" v-show="errors.has('confirm_password')">{{ errors.first('confirm_password') }}</span>
                            </div>
                        </div>
                        <vs-divider/>
                        <!-- Save & Reset Button -->
                        <div class="flex justify-end btn-group">
                            <vs-button @click="updateUserPassword" icon="icon-edit" icon-pack="feather" type="relief">ប្តូរ
                            </vs-button>
                        </div>
                    </vx-card>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
    export default {
        name: "changePassword",
        data() {
            return {
                dialog:false,
                data: {
                    id:null,
                    password: '',
                    confirm_password: '',
                },
            }
        },
        methods: {
            show(data) {
                this.dialog = true;
                this.data.id = data.id;
            },
            //store
            updateUserPassword() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('updateUserPassword', self.data).then(function (data) {
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
        },
    }
</script>

<style scoped>

</style>
