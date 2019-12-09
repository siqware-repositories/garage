<template>
    <vx-card no-shadow>
        <div class="flex btn-group">
            <vs-button @click="$refs.addAbout.show()" type="relief" icon-pack="feather" icon="icon-plus-square">បន្ថែម</vs-button>
            <vs-button v-if="selected.length===1" @click="$refs.editAbout.show();$refs.editAbout.editAbout(selected[0].id)" color="warning" type="relief" icon-pack="feather" icon="icon-edit">កែប្រែ</vs-button>
            <vs-button v-if="selected.length" @click="destroyAbout" color="danger" type="relief" icon-pack="feather" icon="icon-trash-2">លុប</vs-button>
        </div>
        <vs-table multiple v-model="selected" pagination max-items="10" search :data="all_about">
            <template slot="thead">
                <vs-th sort-key="id">ល.រ</vs-th>
                <vs-th sort-key="title">ឈ្មោះ</vs-th>
                <vs-th sort-key="excerpt">សង្ខេប</vs-th>
                <vs-th sort-key="created_at">កាលបរិច្ឆេទ</vs-th>
            </template>
            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].id">
                        {{ data[indextr].id }}
                    </vs-td>
                    <vs-td :data="data[indextr].title">
                        {{ data[indextr].title }}
                    </vs-td>
                    <vs-td :data="data[indextr].excerpt">
                        {{ data[indextr].excerpt }}
                    </vs-td>
                    <vs-td :data="data[indextr].created_at">
                        {{ data[indextr].created_at }}
                    </vs-td>

                </vs-tr>
            </template>
        </vs-table>
        <add-demo ref="addAbout"></add-demo>
        <edit-demo @finished="selected = []" ref="editAbout"></edit-demo>
    </vx-card>
</template>

<script>
    import AddDemo from "./addDemo";
    import EditDemo from "./editDemo";
    export default {
        name: "Demo",
        components: {EditDemo, AddDemo},
        data(){
            return{
                selected:[]
            }
        },
        computed:{
            all_about(){
                return this.$store.getters.all_about
            }
        },
        methods:{
            //destroy
            async destroyAbout(){
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (data) {
                    await self.$store.dispatch('destroyAbout',data.id);
                });
                await Promise.all(promises).then(function () {
                    self.$vs.notify({
                        time: 4000,
                        title: 'ប្រតិបត្តិការជោគជ័យ',
                        text: 'ទិន្នន័យបានបន្ថែម',
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