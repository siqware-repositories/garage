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
                            <div class="vx-col md:w-1/4 w-full">
                                <label>កាលបរិច្ឋេទ</label>
                                <q-input
                                        dense
                                        v-validate="'required'"
                                        class="full-width"
                                        outlined
                                        v-model="data.date"
                                        square
                                        name="date"
                                >
                                    <template
                                            v-slot:append>
                                        <q-icon name="event"
                                                class="cursor-pointer">
                                            <q-popup-proxy
                                                    ref="datePurchase"
                                                    transition-show="scale"
                                                    transition-hide="scale">
                                                <q-date v-model="data.date"
                                                        @input="() => $refs.datePurchase.hide()"/>
                                            </q-popup-proxy>
                                        </q-icon>
                                    </template>
                                </q-input>
                                <span class="text-danger text-sm"
                                      v-show="errors.has('date')">{{ errors.first('date') }}</span>
                            </div>
                            <div class="vx-col md:w-3/4 w-full">
                                <label>សំគាល់</label>
                                <vs-textarea v-validate="'required'" name="note" label="សំគាល់" v-model="data.note"/>
                                <span class="text-danger text-sm"
                                      v-show="errors.has('note')">{{ errors.first('note') }}</span>
                            </div>
                        </div>
                        <div class="vx-row mt-2">
                            <div class="vx-col w-full">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>ល.រ</th>
                                        <th>ឈ្មោះ</th>
                                        <th>ទំនាក់ទំនង</th>
                                        <th>ទឹកប្រាក់</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(item,index) in data.items" :key="index">
                                        <td class="pl-3">{{index+1}}</td>
                                        <td class="pl-3">{{item.id.name}}</td>
                                        <td class="pl-3">{{item.id.contact}}</td>
                                        <td class="pl-3">
                                            <vs-input-number v-validate="'required'" :min="0" :name="`${index}-salary`" color="warning" v-model="item.salary"/>
                                            <span class="text-danger text-sm"
                                                  v-show="errors.has(`${index}-salary`)">{{ errors.first(`${index}-salary`) }}</span>
                                        </td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td class="text-right">សរុប</td>
                                        <td class="pl-3">
                                            <money-format
                                                :value="total_salary"
                                                locale='en'
                                                currency-code='USD'>
                                            </money-format>
                                        </td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        <vs-divider/>
                        <!-- Save & Reset Button -->
                        <div class="flex justify-end btn-group">
                            <vs-button @click="confirmStore" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
                        </div>
                    </vx-card>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
    import vSelect from 'vue-select'
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.min.css';
    import MoneyFormat from 'vue-money-format'
    export default {
        name: "addPayRoll",
        components: {'v-select': vSelect, flatPickr,'money-format': MoneyFormat},
        data() {
            return {
                dialog:false,
                data: {
                    date:null,
                    note:null,
                    items:[{id:{id:0,name:'',contact:''},salary:0}],
                }
            }
        },
        computed: {
            total_salary(){
                return this.data.items.reduce(function (total,item) {
                    return total+parseFloat(item.salary);
                },0)
            }
        },
        methods: {
            confirmStore() {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'success',
                    title: `ផ្ទៀងផ្ទាត់`,
                    text: 'ចុចពាក្យ Accept ដើម្បីរក្សាទុក!',
                    accept: this.storePayroll
                });
            },
            show(data) {
                let self = this;
                self.dialog = true;
                self.data.items = [];
                data.forEach(function (item,index) {
                    self.data.items.push({id:item,salary: 0});
                })
            },
            //store
            storePayroll() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('storePayroll', self.data).then(function (data) {
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
                                self.$modal.hide('add-payroll');
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
    table, td, th {border: 1px solid black;}  table {border-collapse: collapse;width: 100%;}  th {text-align: left;}
</style>
