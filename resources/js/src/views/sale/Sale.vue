<template>
    <vx-card no-shadow>
        <div class="flex btn-group">
            <vs-button @click="$refs.addInvoice.show()" type="relief" icon-pack="feather" icon="icon-plus-square">បន្ថែម</vs-button>
        </div>
        <vs-tabs>
            <vs-tab label="Received">
                <div class="flex btn-group">
                    <vs-button v-if="selected_received.length===1&&selected_received[0].due_balance>0" @click="$refs.addPayment.show(selected_received[0])" color="warning" type="relief" icon-pack="feather" icon="icon-dollar-sign">Add Payment</vs-button>
                    <vs-button color="success" v-if="selected_received.length===1" @click="$refs.printInvoice.show(selected_received[0])" type="relief" icon-pack="feather" icon="icon-printer">បោះពុម្ភ</vs-button>
                    <vs-button v-if="selected_received.length===1" @click="$refs.showInvoice.show(selected_received[0])" type="relief" icon-pack="feather" icon="icon-eye">បង្ហាញ</vs-button>
                </div>
                <vue-instant id="purchase_rec" class="mt-base" v-model="invoice_id"
                             suggestion-attribute="id"
                             :suggestions="suggestion_all_invoice_received"
                             type="google"
                             @clear="invoice_id = ''"
                ></vue-instant>
                <vs-table multiple v-model="selected_received" pagination max-items="10" search :data="search_all_invoice_received">
                    <template slot="thead">
                        <vs-th sort-key="id">ល.រ</vs-th>
                        <vs-th sort-key="description">Description</vs-th>
                        <vs-th >Customer</vs-th>
                        <vs-th sort-key="qty">QTY</vs-th>
                        <vs-th sort-key="balance">Balance</vs-th>
                        <vs-th sort-key="amount">Amount</vs-th>
                        <vs-th sort-key="due_balance">Due Balance</vs-th>
                        <vs-th sort-key="date">Date</vs-th>
                    </template>
                    <template slot-scope="{data}">
                        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                            <vs-td :data="data[indextr].id">
                                {{ data[indextr].id }}
                            </vs-td>
                            <vs-td :data="data[indextr].description">
                                {{ data[indextr].description }}
                            </vs-td>
                            <vs-td :data="data[indextr].customer.name">
                                {{ data[indextr].customer.name }}
                            </vs-td>
                            <vs-td :data="data[indextr].qty">
                                {{ data[indextr].qty }}
                            </vs-td>
                            <vs-td :data="data[indextr].balance">
                                {{ data[indextr].balance }}
                            </vs-td>
                            <vs-td :data="data[indextr].amount">
                                {{ data[indextr].amount }}
                            </vs-td>
                            <vs-td :data="data[indextr].due_balance">
                                {{ data[indextr].due_balance }}
                            </vs-td>
                            <vs-td :data="data[indextr].date">
                                {{ data[indextr].date }}
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
                <add-payment @finished="selected_received = []" ref="addPayment"></add-payment>
            </vs-tab>
            <vs-tab label="Pending">
                <div class="flex btn-group">
                    <vs-button color="warning" v-if="selected_pending.length===1&&selected_pending[0].due_balance>0" @click="$refs.addPaymentPending.show(selected_pending[0])" type="relief" icon-pack="feather" icon="icon-dollar-sign">Add Payment</vs-button>
                    <vs-button color="success" v-if="selected_pending.length===1" @click="$refs.showInvoice.show(selected_pending[0])" type="relief" icon-pack="feather" icon="icon-eye">បង្ហាញ</vs-button>
                    <vs-button v-if="selected_pending.length===1" @click="$refs.printInvoice.show(selected_pending[0])" type="relief" icon-pack="feather" icon="icon-printer">បោះពុម្ភ</vs-button>
                    <vs-button v-if="selected_pending.length===1" @click="$refs.editInvoice.show(selected_pending[0])" color="warning" type="relief" icon-pack="feather" icon="icon-edit">កែប្រែ</vs-button>
                    <vs-button v-if="selected_pending.length" @click="destroyInvoice" color="danger" type="relief" icon-pack="feather" icon="icon-trash-2">លុប</vs-button>
                </div>
                <add-payment @finished="selected_pending = []" ref="addPaymentPending"></add-payment>
                <vue-instant id="purchase_pen" class="mt-base" v-model="invoice_id"
                             suggestion-attribute="id"
                             :suggestions="suggestion_all_invoice_pending"
                             type="google"
                             @clear="invoice_id = ''"
                ></vue-instant>
                <vs-table multiple v-model="selected_pending" pagination max-items="10" search :data="search_all_invoice_pending">
                    <template slot="thead">
                        <vs-th sort-key="id">ល.រ</vs-th>
                        <vs-th sort-key="description">Description</vs-th>
                        <vs-th >Customer</vs-th>
                        <vs-th sort-key="qty">QTY</vs-th>
                        <vs-th sort-key="balance">Balance</vs-th>
                        <vs-th sort-key="amount">Amount</vs-th>
                        <vs-th sort-key="due_balance">Due Balance</vs-th>
                        <vs-th sort-key="date">Date</vs-th>
                    </template>
                    <template slot-scope="{data}">
                        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                            <vs-td :data="data[indextr].id">
                                {{ data[indextr].id }}
                            </vs-td>
                            <vs-td :data="data[indextr].description">
                                {{ data[indextr].description }}
                            </vs-td>
                            <vs-td :data="data[indextr].customer.name">
                                {{ data[indextr].customer.name }}
                            </vs-td>
                            <vs-td :data="data[indextr].qty">
                                {{ data[indextr].qty }}
                            </vs-td>
                            <vs-td :data="data[indextr].balance">
                                {{ data[indextr].balance }}
                            </vs-td>
                            <vs-td :data="data[indextr].amount">
                                {{ data[indextr].amount }}
                            </vs-td>
                            <vs-td :data="data[indextr].due_balance">
                                {{ data[indextr].due_balance }}
                            </vs-td>
                            <vs-td :data="data[indextr].date">
                                {{ data[indextr].date }}
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </vs-tab>
        </vs-tabs>
        <show-invoice ref="showInvoice"></show-invoice>
        <print-invoice ref="printInvoice"></print-invoice>
        <add-invoice ref="addInvoice"></add-invoice>
        <edit-invoice @finished="selected_pending=[]" ref="editInvoice"></edit-invoice>
<!--        <edit-product @finished="selected_received = []" ref="editProduct"></edit-product>-->
    </vx-card>
</template>

<script>
    import EditProduct from "../product/editProduct";
    import AddPayment from "./addPayment";
    import ShowInvoice from "./showInvoice";
    import AddInvoice from "./addInvoice";
    import EditInvoice from "./editInvoice";
    import PrintInvoice from "./printInvoice";
    export default {
        name: "Sale",
        components: {PrintInvoice, EditInvoice, AddInvoice, ShowInvoice, AddPayment, EditProduct},
        data(){
            return{
                invoice_id:'',
                selected_pending:[],
                selected_received:[]
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
            all_invoices(){
                return this.$store.getters.all_invoice
            },
            all_product(){
                return this.$store.getters.all_product
            },
            all_purchases(){
                return this.$store.getters.all_purchase
            },
            all_invoice_received(){
                let self =  this;
                return self.all_invoices.filter(function (x) {
                    return x.invoice_status === 'received'
                })
            },
            search_all_invoice_received(){
                let self =  this;
                return self.all_invoice_received.filter(function (x) {
                    return self.invoice_id?x.id === parseInt(self.invoice_id):true
                })
            },
            suggestion_all_invoice_received(){
                let self =  this;
                return self.all_invoice_received.map(function (x) {
                    return{
                        id:String(x.id)
                    }
                })
            },
            all_invoice_pending(){
                let self =  this;
                return self.all_invoices.filter(function (x) {
                    return x.invoice_status === 'pending'
                })
            },
            search_all_invoice_pending(){
                let self =  this;
                return self.all_invoice_pending.filter(function (x) {
                    return self.invoice_id?x.id === parseInt(self.invoice_id):true
                })
            },
            suggestion_all_invoice_pending(){
                let self =  this;
                return self.all_invoice_pending.map(function (x) {
                    return{
                        id:String(x.id)
                    }
                })
            },
            all_purchase_received(){
                let self =  this;
                return self.all_purchases.filter(function (x) {
                    return x.purchase_status === 'received'
                })
            },
        },
        methods:{
            // Create callback function to receive barcode when the scanner is already done
            onBarcodeScanned(barcode) {
                let event = window.event;
                if(event.keyCode === 13) {
                    event.preventDefault();
                }
                this.invoice_id = String(parseInt(barcode))
            },
            //destroy
            async destroyInvoice(){
                let self = this;
                self.$vs.loading();
                const promises = self.selected_pending.map(async function (data) {
                    await self.$store.dispatch('destroyInvoice',data.id);
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
                    self.selected_pending = [];
                    self.$vs.loading.close();
                })
            }
        }
    }
</script>

<style scoped>

</style>
