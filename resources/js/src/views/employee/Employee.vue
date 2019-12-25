<template>
    <vx-card no-shadow>
        <vs-tabs>
            <vs-tab label="បុគ្គលិក">
                <div class="flex btn-group">
                    <vs-button @click="$refs.addEmployee.show()" type="relief" icon-pack="feather" icon="icon-plus-square">
                        បន្ថែម
                    </vs-button>
                    <vs-button v-if="selected.length===1" @click="$refs.editEmployee.show(selected[0])" color="warning" type="relief" icon-pack="feather" icon="icon-edit">
                        កែប្រែ
                    </vs-button>
                    <vs-button v-if="selected.length" @click="confirmDelete" color="danger" type="relief" icon-pack="feather" icon="icon-trash">
                        លុប
                    </vs-button>
                    <vs-button v-if="selected.length" @click="$refs.addPayRoll.show(selected)" type="relief" icon-pack="feather" icon="icon-dollar-sign">
                        Payroll
                    </vs-button>
                </div>
                <add-employee ref="addEmployee"/>
                <edit-employee @finished="selected=[]" ref="editEmployee"/>
                <add-pay-roll @finished="selected=[]" ref="addPayRoll"/>
                <vs-table multiple v-model="selected" stripe search :data="all_employees">
                    <template slot="thead">
                        <vs-th>ID</vs-th>
                        <vs-th></vs-th>
                        <vs-th sort-key="name">ឈ្មោះ</vs-th>
                        <vs-th sort-key="sex">ភេទ</vs-th>
                        <vs-th sort-key="dob">ថ្ងៃខែឆ្នាំកំណើត</vs-th>
                        <vs-th sort-key="contact">ទំនាក់ទំនង</vs-th>
                        <vs-th sort-key="address">អាស័យដ្ឋាន</vs-th>
                    </template>
                    <template slot-scope="{data}">
                        <vs-tr :data="tr" :key="index" v-for="(tr, index) in data">
                            <vs-td :data="tr.email">
                                {{ tr.email }}
                            </vs-td>
                            <vs-td :data="tr.profile">
                                <img :src="tr.profile" width="75" :alt="tr.profile">
                            </vs-td>
                            <vs-td :data="tr.name">
                                {{ tr.name }}
                            </vs-td>
                            <vs-td :data="tr.gender">
                                {{ tr.gender }}
                            </vs-td>
                            <vs-td :data="tr.dob">
                                {{ tr.dob }}
                            </vs-td>
                            <vs-td :data="tr.contact">
                                {{ tr.contact }}
                            </vs-td>
                            <vs-td :data="tr.address">
                                {{ tr.address }}
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </vs-tab>
            <vs-tab label="បើកប្រាក់ខែ">
                <div class="flex btn-group">
                    <vs-button v-if="selected_payroll.length===1" @click="$refs.showPayroll.show(selected_payroll[0])" type="relief" icon-pack="feather" icon="icon-eye">
                        បង្ហាញ
                    </vs-button>
                    <vs-button v-if="selected_payroll.length===1" @click="$refs.editPayroll.show(selected_payroll[0])" color="warning" type="relief" icon-pack="feather" icon="icon-edit">
                        កែប្រែ
                    </vs-button>
                    <vs-button v-if="selected_payroll.length" @click="confirmDeletePayroll" color="danger" type="relief" icon-pack="feather" icon="icon-trash">
                        លុប
                    </vs-button>
                </div>
                <show-pay-roll @finished="selected_payroll=[]" ref="showPayroll"/>
                <edit-pay-roll @finished="selected_payroll=[]" ref="editPayroll"/>
                <vs-table multiple v-model="selected_payroll" stripe search :data="all_payrolls">
                    <template slot="thead">
                        <vs-th>ID</vs-th>
                        <vs-th sort-key="note">សំគាល់</vs-th>
                        <vs-th>ទឹកប្រាក់បើកសរុប</vs-th>
                        <vs-th sort-key="date">ថ្ងៃខែឆ្នាំបើក</vs-th>
                    </template>
                    <template slot-scope="{data}">
                        <vs-tr :data="tr" :key="index" v-for="(tr, index) in data">
                            <vs-td :data="tr.id">
                                {{ tr.id }}
                            </vs-td>
                            <vs-td :data="tr.note">
                                {{ tr.note }}
                            </vs-td>
                            <vs-td>
                                <money-format
                                        :value="calcTotalSalary(tr.pay_roll_detail)"
                                        locale='en'
                                        currency-code='USD'>
                                </money-format>
                            </vs-td>
                            <vs-td :data="tr.date">
                                {{ tr.date }}
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </vs-tab>
        </vs-tabs>
    </vx-card>
</template>

<script>
    import AddEmployee from "./addEmployee";
    import EditEmployee from "./editEmployee";
    import AddPayRoll from "./addPayRoll";
    import EditPayRoll from "./editPayRoll";
    import MoneyFormat from 'vue-money-format'
    import ShowPayRoll from "./showPayRoll";
    export default {
        name: "Employee",
        components: {ShowPayRoll, EditPayRoll, AddPayRoll, EditEmployee, AddEmployee,'money-format': MoneyFormat},
        data() {
            return {
                selected: [],
                selected_payroll: [],
            }
        },
        computed: {
            all_employees(){
                return this.$store.getters.all_employee;
            },
            all_payrolls(){
                return this.$store.getters.all_payroll;
            }
        },
        methods: {
            confirmDelete() {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `ផ្ទៀងផ្ទាត់`,
                    text: 'ចុចពាក្យ Accept ដើម្បីលុប!',
                    accept: this.destroyEmployee
                });
            },
            confirmDeletePayroll() {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `ផ្ទៀងផ្ទាត់`,
                    text: 'ចុចពាក្យ Accept ដើម្បីលុប!',
                    accept: this.destroyPayroll
                });
            },
            calcTotalSalary(data){
                return data.reduce(function (total,item) {
                    return total+parseFloat(item.salary)
                },0)
            },
            //destroy
            async destroyEmployee() {
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (data) {
                    await self.$store.dispatch('destroyEmployee', data.id);
                });
                await Promise.all(promises).then(function () {
                    self.$vs.notify({
                        time: 4000,
                        title: 'ប្រតិបត្តិការជោគជ័យ',
                        text: 'ទិន្នន័យបានលុប',
                        color: 'success',
                        iconPack: 'feather',
                        icon: 'icon-check',
                        position: 'top-center'
                    });
                    self.selected = [];
                    self.$vs.loading.close();
                })
            },
            //destroy payroll
            async destroyPayroll() {
                let self = this;
                self.$vs.loading();
                const promises = self.selected_payroll.map(async function (data) {
                    await self.$store.dispatch('destroyPayroll', data.id);
                });
                await Promise.all(promises).then(function () {
                    self.$vs.notify({
                        time: 4000,
                        title: 'ប្រតិបត្តិការជោគជ័យ',
                        text: 'ទិន្នន័យបានលុប',
                        color: 'success',
                        iconPack: 'feather',
                        icon: 'icon-check',
                        position: 'top-center'
                    });
                    self.selected_payroll = [];
                    self.$vs.loading.close();
                })
            }
        }
    }
</script>

<style scoped>

</style>