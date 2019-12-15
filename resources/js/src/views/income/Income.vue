<template>
    <vx-card no-shadow>
        <div class="flex btn-group">
            <vs-button v-if="selected.length===1" type="relief" color="dark" @click="$refs.showIncome.show(selected[0])" icon-pack="feather" icon="icon-eye">
                បង្ហាញ
            </vs-button>
            <vs-button type="relief" @click="$refs.addIncome.show()" icon-pack="feather" icon="icon-plus-square">
                បន្ថែម
            </vs-button>
            <vs-button v-if="selected.length===1" @click="$refs.editIncome.show(selected[0])" color="warning" type="relief" icon-pack="feather" icon="icon-edit">
                កែប្រែ
            </vs-button>
            <vs-button v-if="selected.length" @click="confirmDelete" color="danger" type="relief" icon-pack="feather" icon="icon-trash">
                លុប
            </vs-button>
        </div>
        <add-income ref="addIncome"/>
        <edit-income @finished="selected=[]" ref="editIncome"/>
        <show-income ref="showIncome"/>
        <vs-table multiple v-model="selected" pagination max-items="3" search :data="all_incomes">
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
                                :value="total_income(item.income_detail)"
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
    import AddIncome from "./addIncome";
    import EditIncome from "./editIncome";
    import ShowIncome from "./showIncome";
    export default {
        name: "Income",
        components: {ShowIncome, EditIncome, AddIncome, 'money-format': MoneyFormat},
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
            all_incomes(){
                return this.$store.getters.all_income;
            },
        },
        async created(){
            await this.fetchIncomeType();
            await this.fetchIncome();
        },
        methods:{
            confirmDelete() {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `ផ្ទៀងផ្ទាត់`,
                    text: 'ចុចពាក្យ Accept ដើម្បីលុប!',
                    accept: this.destroyIncome
                });
            },
            //destroy
            async destroyIncome() {
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (data) {
                    await self.$store.dispatch('destroyIncome', data.id);
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
            //fetch income
            async fetchIncome(){
                await this.$store.dispatch('fetchIncome')
            },
            //fetch type
            async fetchIncomeType(){
                await this.$store.dispatch('fetchIncomeType')
            }
        }
    }
</script>

<style scoped>

</style>