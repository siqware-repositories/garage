<template>
    <vx-card no-shadow>
        <div class="flex btn-group">
            <vs-button v-if="selected.length===1" type="relief" color="dark" @click="$refs.showExpense.show(selected[0])" icon-pack="feather" icon="icon-eye">
                បង្ហាញ
            </vs-button>
            <vs-button type="relief" @click="$refs.addExpense.show()" icon-pack="feather" icon="icon-plus-square">
                បន្ថែម
            </vs-button>
            <vs-button v-if="selected.length===1" @click="$refs.editIncome.show(selected[0])" color="warning" type="relief" icon-pack="feather" icon="icon-edit">
                កែប្រែ
            </vs-button>
            <vs-button v-if="selected.length" @click="confirmDelete" color="danger" type="relief" icon-pack="feather" icon="icon-trash">
                លុប
            </vs-button>
        </div>
        <add-expense ref="addExpense"/>
        <edit-income @finished="selected=[]" ref="editIncome"/>
        <show-expense ref="showExpense"/>
        <vs-table multiple v-model="selected" pagination max-items="3" search :data="all_expenses">

            <template slot="thead">
                <vs-th sort-key="id">ល.រ</vs-th>
                <vs-th sort-key="note">សំគាល់</vs-th>
                <vs-th>ទឹកប្រាក់</vs-th>
                <vs-th sort-key="date">កាលបរិច្ឆេទ</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="item" :key="index" v-for="(item, index) in data">
                    <vs-td :data="item.id">
                        {{ item.id }}
                    </vs-td>
                    <vs-td :data="item.note">
                        {{ item.note }}
                    </vs-td>
                    <vs-td>
                        <money-format
                                :value="total_income(item.expense_detail)"
                                locale='en'
                                currency-code='USD'>
                        </money-format>
                    </vs-td>
                    <vs-td :data="item.date">
                        {{ item.date }}
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </vx-card>
</template>

<script>
    import MoneyFormat from 'vue-money-format'
    import EditIncome from "./editIncome";
    import AddExpense from "./addExpense";
    import ShowExpense from "./showExpense";
    export default {
        name: "Expense",
        components: {ShowExpense, AddExpense, EditIncome, 'money-format': MoneyFormat},
        data() {
            return {
                selected:[],
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
                    }
                ]
            }
        },
        computed:{
            all_expenses(){
                return this.$store.getters.all_expense;
            },
        },
        methods:{
            confirmDelete() {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `ផ្ទៀងផ្ទាត់`,
                    text: 'ចុចពាក្យ Accept ដើម្បីលុប!',
                    accept: this.destroyExpense
                });
            },
            //destroy
            async destroyExpense() {
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (data) {
                    await self.$store.dispatch('destroyExpense', data.id);
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
            //calc total income
            total_income(data){
                return data.reduce(function (total,item) {
                    return total+parseFloat(item.balance)
                },0)
            },
        }
    }
</script>

<style scoped>

</style>