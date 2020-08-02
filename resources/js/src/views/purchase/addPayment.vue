<template>
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
                        <div class="vx-col md:w-1/2 w-full">
                            <h4>ទឹកប្រាក់ត្រូវសង</h4>
                            <span class="text-2xl">${{data.balance}}</span>
                        </div>
                        <div class="vx-col md:w-1/2 w-full">
                            <h4>ទឹកប្រាក់នៅសល់</h4>
                            <span class="text-2xl">${{due_balance}}</span>
                        </div>
                    </div>
                    <vs-divider></vs-divider>
                    <div class="vx-row">
                        <div class="vx-col w-full">
                            <vs-input-number v-model="data.input_balance" min="0" :max="data.balance" name="input_balance" v-validate="'required'"/>
                            <span class="text-danger text-sm"
                                  v-show="errors.has('input_balance')">{{ errors.first('input_balance') }}</span>
                        </div>
                    </div>
                    <!-- Save & Reset Button -->
                    <div class="flex justify-end btn-group">
                        <vs-button @click="updatePurchasePayment" icon="icon-dollar-sign" icon-pack="feather" type="relief">ចំណាយ</vs-button>
                    </div>
                </vx-card>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script>
    export default {
        name: "addPayment",
        methods:{
            show(data){
                this.dialog = true;
                this.data.id = data.id;
                this.data.balance = data.due_balance;
                this.data.input_balance = data.due_balance;
            },
            //update payment
            updatePurchasePayment() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('updatePurchasePayment', self.data).then(function (data) {
                            if (data) {
                                self.$vs.notify({
                                    time: 4000,
                                    title: 'ប្រតិបត្តិការជោគជ័យ',
                                    text: 'ទឹកប្រាក់បានបន្ថែម',
                                    color: 'success',
                                    iconPack: 'feather',
                                    icon: 'icon-check',
                                    position: 'top-center'
                                });
                                self.$emit('finished');
                                self.dialog = false
                            } else {
                                self.$vs.notify({
                                    title: 'ប្រតិបត្តិការបរាជ័យ',
                                    text: 'ទឹកប្រាក់មិនបានបន្ថែម',
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
        data(){
            return{
                dialog:false,
                data:{
                    id:null,
                    balance:0,
                    input_balance:0,
                    due_balance:0,
                },
            }
        },
        computed:{
            due_balance(){
                return this.data.due_balance = this.data.balance - this.data.input_balance;
            }
        },
    }
</script>

<style scoped>

</style>
