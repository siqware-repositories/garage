import axios from  'axios'
const state = {
    invoice:[],
    purchase_details:[]
};
const getters = {
    all_invoice:function (state) {
        return state.invoice
    },
    all_purchase_detail:function (state) {
        return state.purchase_details
    }
};
const actions = {
    async fetchPurchaseDetail({commit}){
        try {
            const res = await axios.get(route('purchase-detail.index'));
            commit('SET_PURCHASE_DETAIL',res.data)
        }catch (e) {
            return false
        }
    },
    async fetchInvoice({commit}){
        try {
            const res = await axios.get(route('invoice.index'));
            commit('SET_INVOICE',res.data)
        }catch (e) {
            return false
        }
    },
    async storeInvoice({commit},data){
        try {
            await axios.post(route('invoice.store'),data);
            return true
        }catch (e) {
            return false
        }
    },
    async updateInvoicePayment({},data){
        try {
            await axios.post(route('invoice.payment',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
    async editInvoice({commit},id){
        try {
            const res = await axios.get(route('invoice.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyInvoice({commit},id){
        try {
            await axios.delete(route('invoice.destroy',id));
            commit('DESTROY_INVOICE',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updateInvoice({commit},data){
        try {
            await axios.put(route('invoice.update',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_INVOICE:function (state,data) {
        state.invoice.unshift(data)
    },
    SET_INVOICE:function (state,data) {
        state.invoice = data
    },
    SET_PURCHASE_DETAIL:function (state,data) {
        state.purchase_details = data
    },
    DESTROY_INVOICE:function (state,id) {
        return state.invoice = state.invoice.filter(function (invoice,index) {
            return invoice.id !== id
        })
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}