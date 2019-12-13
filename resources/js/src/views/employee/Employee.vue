<template>
    <vx-card no-shadow>
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
    </vx-card>
</template>

<script>
    import AddEmployee from "./addEmployee";
    import EditEmployee from "./editEmployee";
    import AddPayRoll from "./addPayRoll";
    export default {
        name: "Employee",
        components: {AddPayRoll, EditEmployee, AddEmployee},
        data() {
            return {
                selected: [],
                users: [
                    {
                        "id": 1,
                        "name": "Leanne Graham",
                        "username": "Bret",
                        "email": "Sincere@april.biz",
                        "website": "hildegard.org",
                    },
                    {
                        "id": 2,
                        "name": "Ervin Howell",
                        "username": "Antonette",
                        "email": "Shanna@melissa.tv",
                        "website": "anastasia.net",
                    },
                    {
                        "id": 3,
                        "name": "Clementine Bauch",
                        "username": "Samantha",
                        "email": "Nathan@yesenia.net",
                        "website": "ramiro.info",
                    },
                    {
                        "id": 4,
                        "name": "Patricia Lebsack",
                        "username": "Karianne",
                        "email": "Julianne.OConner@kory.org",
                        "website": "kale.biz",
                    }
                ]
            }
        },
        computed: {
            all_employees(){
                return this.$store.getters.all_employee;
            }
        },
        async created() {
            await this.fetchEmployee();
            await this.fetchUser();
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
            //fetch employee
            async fetchUser(){
                await this.$store.dispatch('fetchUser');
            },
            //fetch employee
            async fetchEmployee(){
                await this.$store.dispatch('fetchEmployee');
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
            }
        }
    }
</script>

<style scoped>

</style>