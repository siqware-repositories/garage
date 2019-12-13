<template>
    <div>
        <modal width="60%" height="auto" :scrollable="true" :pivotY="0.2" :clickToClose="false" name="add-payroll">
            <div class="flex justify-end">
                <i @click="$modal.hide('add-payroll')" class="vs-icon vs-popup--close material-icons text-warning"
                   style="background: rgb(255, 255, 255);">close</i>
            </div>
            <vx-card no-shadow>
                <div class="vx-row">
                    <div class="vx-col md:w-1/4 w-full">
                        <label>កាលបរិច្ឋេទ</label>
                        <flat-pickr v-validate="'required'" name="dob" class="w-full" v-model="data.date" placeholder="ជ្រើសរើស"/>
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
                            <tr v-for="item,index in data.items" :key="index">
                                <td class="pl-3">{{index+1}}</td>
                                <td class="pl-3">{{item.id.name}}</td>
                                <td class="pl-3">{{item.id.contact}}</td>
                                <td class="pl-3">
                                    <vs-input-number color="warning" v-model="item.salary"/>
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
                    <vs-button @click="storeEmployee" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
                </div>
            </vx-card>
            {{data.items}}
        </modal>
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
            show(data) {
                console.log(data);
                let self = this;
                self.$modal.show('add-payroll');
                self.data.items = [];
                data.forEach(function (item,index) {
                    self.data.items.push({id:item,salary: 0});
                })
            },
            //store
            storeEmployee() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('storeEmployee', self.data).then(function (data) {
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
        },
    }
</script>

<style scoped>
    table, td, th {border: 1px solid black;}  table {border-collapse: collapse;width: 100%;}  th {text-align: left;}
</style>