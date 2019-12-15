<template>
    <modal height="auto" :scrollable="true" :pivotY="0.2" :clickToClose="false" name="add-expense-type">
        <div class="flex justify-end">
            <i @click="$modal.hide('add-expense-type')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
        </div>
        <vx-card no-shadow>
            <div class="vx-row">
                <div class="vx-col w-full">
                    <vs-input v-validate="'required'" @keyup.enter="storeExpenseType" name="type" v-model="data.type" class="w-full" />
                    <span class="text-danger text-sm" v-show="errors.has('type')">{{ errors.first('type') }}</span>
                </div>
            </div>
        </vx-card>
    </modal>
</template>

<script>
    export default {
        name: "addExpenseType",
        data(){
            return{
                data:{
                    type:''
                }
            }
        },
        methods:{
            show(){
                this.$modal.show('add-expense-type')
            },
            //store
            storeExpenseType() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('storeExpenseType', self.data).then(function (data) {
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
                this.data.type = ''
            },
        }
    }
</script>

<style scoped>

</style>