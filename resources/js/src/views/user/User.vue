<template>
    <vx-card no-shadow>
        <div class="flex btn-group">
            <vs-button @click="$refs.addUser.show()" type="relief" icon-pack="feather" icon="icon-plus-square">
                បន្ថែម
            </vs-button>
            <vs-button v-if="selected.length===1" @click="$refs.editUser.show(selected[0])" color="warning" type="relief" icon-pack="feather" icon="icon-edit">
                កែប្រែ
            </vs-button>
            <vs-button v-if="selected.length===1" @click="$refs.changePassword.show(selected[0])" color="dark" type="relief" icon-pack="feather" icon="icon-edit">
                ប្តូរលេខសម្ងាត់
            </vs-button>
            <vs-button v-if="selected.length" @click="destroyUser" color="danger" type="relief" icon-pack="feather" icon="icon-trash">
                លុប
            </vs-button>
        </div>
        <add-user ref="addUser"/>
        <edit-user @finished="selected=[]" ref="editUser"/>
        <change-password @finished="selected=[]" ref="changePassword"/>
        <vs-table multiple v-model="selected" stripe search :data="all_users">
            <template slot="thead">
                <vs-th sort-key="id">ID</vs-th>
                <vs-th></vs-th>
                <vs-th sort-key="name">ឈ្មោះ</vs-th>
                <vs-th sort-key="email">អ៊ីម៉ែល</vs-th>
            </template>
            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="index" v-for="(tr, index) in data">
                    <vs-td :data="tr.id">
                        {{ tr.id }}
                    </vs-td>
                    <vs-td :data="tr.profile">
                        <img :src="tr.profile" width="75" :alt="tr.profile">
                    </vs-td>
                    <vs-td :data="tr.name">
                        {{ tr.name }}
                    </vs-td>
                    <vs-td :data="tr.email">
                        {{ tr.email }}
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </vx-card>
</template>

<script>
    import AddUser from "./addUser";
    import EditUser from "./editUser";
    import ChangePassword from "./changePassword";
    export default {
        name: "User",
        components: {ChangePassword, EditUser, AddUser},
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
            all_users(){
                return this.$store.getters.all_user;
            }
        },
        async created() {
            await this.fetchUser();
        },
        methods: {
            //fetch employee
            async fetchUser(){
                await this.$store.dispatch('fetchUser');
            },
            //destroy
            async destroyUser() {
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (data) {
                    await self.$store.dispatch('destroyUser', data.id);
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