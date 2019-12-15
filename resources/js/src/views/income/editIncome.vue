<template>
    <modal width="60%" height="auto" :scrollable="true" :pivotY="0.2" :clickToClose="false" name="edit-income">
        <div class="flex justify-end">
            <i @click="$modal.hide('edit-income')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
        </div>
        <vx-card no-shadow>
            <div class="vx-row">
                <div class="vx-col md:w-1/4 w-full">
                    <label>កាលបរិច្ឆេទ</label>
                    <flat-pickr v-validate="'required'" name="date" class="w-full" v-model="data.date" placeholder="ជ្រើសរើស" />
                    <span class="text-danger text-sm" v-show="errors.has('date')">{{ errors.first('date') }}</span>
                </div>
                <div class="vx-col md:w-3/4 w-full">
                    <label>សំគាល់</label>
                    <vs-textarea v-validate="'required'" name="note" class="w-full" label="សំគាល់" v-model="data.note" />
                    <span class="text-danger text-sm" v-show="errors.has('note')">{{ errors.first('note') }}</span>
                </div>
            </div>
            <div class="vx-row">
                <div class="vx-col w-full">
                    <table>
                        <thead>
                        <tr>
                            <th>ល.រ</th>
                            <th>ពិពណ៌នា</th>
                            <th>ប្រភេទ</th>
                            <th>ទឹកប្រាក់</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in data.items" :key="index">
                            <td class="pl-3">{{index+1}}</td>
                            <td class="p-1">
                                <vs-input v-validate="'required'" :name="`${index}-description`" v-model="item.description" class="w-full" />
                                <span class="text-danger text-sm" v-show="errors.has(`${index}-description`)">{{ errors.first(`${index}-description`) }}</span>
                            </td>
                            <td class="p-1" width="300">
                                <vx-input-group>
                                    <v-select v-validate="'required'" v-model="item.type" :name="`${index}-type`" class="w-full" :options="all_income_types"/>
                                    <template slot="append">
                                        <div class="append-text btn-addon">
                                            <vs-button color="dark" @click="$refs.addIncomeType.show()" radius type="line" icon-pack="feather" icon="icon-plus"></vs-button>
                                        </div>
                                    </template>
                                </vx-input-group>
                                <span class="text-danger text-sm"
                                      v-show="errors.has(`${index}-type`)">{{ errors.first(`${index}-type`) }}</span>
                            </td>
                            <td class="pl-3">
                                <vs-input-number v-validate="'required'" :min="0" :name="`${index}-balance`" color="warning" v-model="item.balance"/>
                                <span class="text-danger text-sm"
                                      v-show="errors.has(`${index}-balance`)">{{ errors.first(`${index}-balance`) }}</span>
                            </td>
                            <td>
                                <vs-button @click="removeLine(index)" size="small" radius color="danger" icon="icon-minus-square" icon-pack="feather" type="flat"/>
                            </td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td class="text-right">
                                សរុប
                            </td>
                            <td class="pl-3">
                                <money-format
                                        :value="total_income"
                                        locale='en'
                                        currency-code='USD'>
                                </money-format>
                            </td>
                            <td></td>
                        </tr>
                        </tfoot>
                    </table>
                    <add-income-type ref="addIncomeType"/>
                    <vs-button @click="addLine" type="line" icon-pack="feather" icon="icon-plus-circle">
                        បន្ថែមជួរ
                    </vs-button>
                </div>
            </div>
            <vs-divider/>
            <!-- Save & Reset Button -->
            <div class="flex justify-end btn-group">
                <vs-button @click="confirmUpdate" icon="icon-edit" icon-pack="feather" type="relief">កែប្រែ</vs-button>
            </div>
        </vx-card>
    </modal>
</template>

<script>
    import MoneyFormat from 'vue-money-format'
    import vSelect from 'vue-select'
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.min.css';
    import AddIncomeType from "./addIncomeType";
    export default {
        name: "editIncome",
        components: {
            AddIncomeType,
            'v-select': vSelect,
            flatPickr,
            'money-format': MoneyFormat
        },
        data(){
            return {
                data:{
                    date:null,
                    note:null,
                    items:[{description:'',type:null,balance:0}]
                }
            }
        },
        computed:{
          all_income_types(){
              return this.$store.getters.all_income_type
          },
            total_income(){
              return this.data.items.reduce(function (total,item) {
                  return total+parseFloat(item.balance)
              },0)
            }
        },
        methods:{
            show (data) {
                let self = this;
                self.$modal.show('edit-income');
                self.data.id = data.id;
                self.data.date = data.date;
                self.data.note = data.note;
                self.data.items = [];
                data.income_detail.forEach(function (item,index) {
                    self.data.items.push({description:item.description,type:item.type,balance:item.balance})
                })
            },
            removeLine(index){
                this.data.items.splice(index,1)
            },
            addLine(){
                this.data.items.push({description:'',type:null,balance:0})
            },
            confirmUpdate() {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'warning',
                    title: `ផ្ទៀងផ្ទាត់`,
                    text: 'ចុចពាក្យ Accept ដើម្បីកែប្រែ!',
                    accept: this.updateIncome
                });
            },
            //store
            updateIncome() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        self.$store.dispatch('updateIncome', self.data).then(function (data) {
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
                                self.$modal.hide('edit-income');
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
        }
    }
</script>

<style scoped>
    table, td, th {border: 1px solid black;}  table {border-collapse: collapse;width: 100%;}  th {text-align: left;}
</style>