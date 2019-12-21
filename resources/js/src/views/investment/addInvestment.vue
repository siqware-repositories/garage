<template>
    <modal height="auto" :scrollable="true" :pivotY="0.2" :clickToClose="false" name="add-investment">
        <div class="flex justify-end">
            <i @click="$modal.hide('add-investment')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
        </div>
        <vx-card no-shadow>
            <div class="vx-row">
                <div class="vx-col w-full">
                    <label>ពិពណ៌នា</label>
                    <vs-textarea v-validate="'required'" label="ពិពណ៌នា" name="description" v-model="data.description" />
                    <span class="text-danger text-sm"
                          v-show="errors.has('description')">{{ errors.first('description') }}</span>
                </div>
                <div class="vx-col w-full">
                    <label>កាលបរិច្ឆេទ</label>
                    <flat-pickr class="w-full" v-model="data.date" placeholder="ជ្រើសរើស" v-validate="'required'" name="date"/>
                    <span class="text-danger text-sm"
                          v-show="errors.has('date')">{{ errors.first('date') }}</span>
                </div>
                <div class="vx-col w-full mt-2">
                    <label>ប្រាក់វិនិយោគ</label>
                    <vs-input-number v-validate="'required'" name="balance" v-model="data.balance" label="ប្រាក់វិនិយោគ:"/>
                    <span class="text-danger text-sm"
                          v-show="errors.has('balance')">{{ errors.first('balance') }}</span>
                </div>
            </div>
            <vs-divider/>
            <!-- Save & Reset Button -->
            <div class="flex justify-end btn-group">
                <vs-button @click="storeInvestment" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
            </div>
        </vx-card>
    </modal>
</template>

<script>
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.min.css';
    export default {
        name: "addInvestment",
        components: {
            flatPickr
        },
        data(){
            return{
                data:{
                    description:'',
                    balance:0,
                    date:null
                }
            }
        },
        methods:{
            show(){
                this.$modal.show('add-investment')
            },
            //store
            storeInvestment(){
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('storeInvestment',self.data).then(function (data) {
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
        },
    }
</script>

<style scoped>

</style>