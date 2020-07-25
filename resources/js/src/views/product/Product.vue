<template>
    <vx-card no-shadow>
        <div class="flex btn-group">
            <vs-button @click="$refs.addProduct.show()" type="relief" icon-pack="feather" icon="icon-plus-square">បន្ថែម</vs-button>
            <vs-button v-if="selected.length===1" @click="$refs.editProduct.show(selected[0])" color="warning" type="relief" icon-pack="feather" icon="icon-edit">កែប្រែ</vs-button>
            <vs-button v-if="selected.length" @click="$refs.printLabel.show(selected)" color="success" type="relief" icon-pack="feather" icon="icon-printer">Print Label</vs-button>
            <vs-button v-if="selected.length" @click="destroyProduct" color="danger" type="relief" icon-pack="feather" icon="icon-trash-2">លុប</vs-button>
        </div>
        <div class="flex justify-end">
            <download-excel
                    v-if="selected.length"
                    :data = "selected">
                <vs-button type="relief" icon-pack="feather" icon="icon-download">Excel Export</vs-button>
            </download-excel>
        </div>
        <vue-instant id="purchase_pen" class="mt-base" v-model="product_id"
                     suggestion-attribute="id"
                     :suggestions="suggestion_all_product"
                     type="google"
                     @clear="product_id = ''"
        ></vue-instant>
        <vs-table multiple v-model="selected" pagination max-items="10" search :data="search_all_product">
            <template slot="thead">
                <vs-th sort-key="id">ល.រ</vs-th>
                <vs-th sort-key="name">ឈ្មោះ</vs-th>
                <vs-th sort-key="description">ពិពណ៌នា</vs-th>
                <vs-th sort-key="unit">Unit</vs-th>
                <vs-th sort-key="category">ប្រភេទ</vs-th>
                <vs-th sort-key="brand">Brand</vs-th>
                <vs-th sort-key="inventory_type">Inventory Type</vs-th>
                <vs-th sort-key="purchase">តម្លៃទិញ</vs-th>
                <vs-th sort-key="sale">តម្លៃលក់</vs-th>
                <vs-th sort-key="created_at">កាលបរិច្ឆេទ</vs-th>
            </template>
            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].id">
                        {{ data[indextr].id }}
                    </vs-td>
                    <vs-td :data="data[indextr].name">
                        {{ data[indextr].name }}
                    </vs-td>
                    <vs-td :data="data[indextr].description">
                        {{ data[indextr].description }}
                    </vs-td>
                    <vs-td :data="data[indextr].unit">
                        {{ data[indextr].unit }}
                    </vs-td>
                    <vs-td :data="data[indextr].category">
                        {{ data[indextr].category }}
                    </vs-td>
                    <vs-td :data="data[indextr].brand">
                        {{ data[indextr].brand }}
                    </vs-td>
                    <vs-td :data="data[indextr].inventory_type">
                        {{ data[indextr].inventory_type }}
                    </vs-td>
                    <vs-td :data="data[indextr].default_purchase">
                        {{ data[indextr].default_purchase }}
                    </vs-td>
                    <vs-td :data="data[indextr].default_sale">
                        {{ data[indextr].default_sale }}
                    </vs-td>
                    <vs-td :data="data[indextr].created_at">
                        {{ data[indextr].created_at }}
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
        <add-product ref="addProduct"></add-product>
        <edit-product @finished="selected = []" ref="editProduct"></edit-product>
        <print-label @finished="" ref="printLabel"/>
    </vx-card>
</template>

<script>
    import AddProduct from "./addProduct";
    import EditProduct from "./editProduct";
    import PrintLabel from "./printLabel";
    import JsonExcel from 'vue-json-excel';
    export default {
        name: "Product",
        components: {PrintLabel, EditProduct, AddProduct,'downloadExcel':JsonExcel},
        data(){
            return{
                product_id:'',
                selected:[]
            }
        },
        created () {
            // Add barcode scan listener and pass the callback function
            this.$barcodeScanner.init(this.onBarcodeScanned)
        },
        destroyed () {
            // Remove listener when component is destroyed
            this.$barcodeScanner.destroy()
        },
        computed:{
            all_about(){
                return this.$store.getters.all_about
            },
            all_product(){
                return this.$store.getters.all_product
            },
            search_all_product(){
                let self =  this;
                return self.all_product.filter(function (x) {
                    return self.product_id?x.id === parseInt(self.product_id):true
                })
            },
            suggestion_all_product(){
                let self =  this;
                return self.all_product.map(function (x) {
                    return{
                        id:String(x.id)
                    }
                })
            },
        },
        methods:{
            // Create callback function to receive barcode when the scanner is already done
            onBarcodeScanned (barcode) {
                var event = window.event;
                if(event.keyCode === 13) {
                    event.preventDefault();
                }
                this.product_id = String(parseInt(barcode));
            },
            //destroy
            async destroyProduct(){
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (data) {
                    await self.$store.dispatch('destroyProduct',data.id);
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
