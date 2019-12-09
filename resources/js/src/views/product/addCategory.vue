<template>
    <modal height="auto" :scrollable="true" :pivotY="0.2" :clickToClose="false" name="add-category">
        <div class="flex justify-end">
            <i @click="$modal.hide('add-category')" class="vs-icon vs-popup--close material-icons text-warning"
               style="background: rgb(255, 255, 255);">close</i>
        </div>
        <vx-card no-shadow>
            <div class="vx-row mb-10">
                <vs-input class="w-full" label-placeholder="ឈ្មោះ" name="category" v-model="category" @keyup.enter="storeCategory"
                          v-validate="'required'"/>
                <span class="text-danger text-sm"
                      v-show="errors.has('category')">{{ errors.first('category') }}</span>
            </div>
        </vx-card>
    </modal>
</template>

<script>
    export default {
        name: "addCategory",
        data() {
            return {
                category:'',
            }
        },
        methods: {
            show() {
                this.$modal.show('add-category');
            },
            //store
            storeCategory() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('storeCategory', {name:self.category}).then(function (data) {
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
                this.category = ''
            },
        },
    }
</script>

<style scoped>

</style>