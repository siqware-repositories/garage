import axios from  'axios'
const state = {
    purchase:[]
};
const getters = {
    all_purchase:function (state) {
        return state.purchase
    }
};
const actions = {
    async fetchPurchase({commit}){
        try {
            const res = await axios.get(route('purchase.index'));
            commit('SET_PURCHASE',res.data)
        }catch (e) {
            return false
        }
    },
    async storePurchase({commit},data){
        try {
            const res = await axios.post(route('purchase.store'),data);
            commit('STORE_PURCHASE',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async updatePurchasePayment({},data){
        try {
            await axios.post(route('purchase.payment',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
    async editPurchase({commit},id){
        try {
            const res = await axios.get(route('purchase.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyPurchase({commit},id){
        try {
            await axios.delete(route('purchase.destroy',id));
            commit('DESTROY_PURCHASE',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updatePurchase({commit},data){
        try {
            const res = await axios.put(route('purchase.update',data.id),data);
            commit('UPDATE_PURCHASE',res.data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_PURCHASE:function (state,data) {
        state.purchase.unshift(data)
    },
    SET_PURCHASE:function (state,data) {
        state.purchase = data
    },
    DESTROY_PURCHASE:function (state,id) {
        return state.purchase = state.purchase.filter(function (purchase,index) {
            return purchase.id !== id
        })
    },
    UPDATE_PURCHASE:function (state,data) {
        let index = state.purchase.findIndex(function (x) {
            return parseInt(x.id) === parseInt(data.id)
        });
        state.purchase.splice(index,1,data);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}