import axios from  'axios'
const state = {
    product:[]
};
const getters = {
    all_product:function (state) {
        return state.product
    }
};
const actions = {
    async fetchProduct({commit}){
        if (!state.product.length) {
            try {
                const res = await axios.get(route('product.index'));
                commit('SET_PRODUCT', res.data)
            } catch (e) {
                return false
            }
        }
    },
    async storeProduct({commit}, data){
        try {
            const res = await axios.post(route('product.store'),data);
            commit('STORE_PRODUCT',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editProduct({commit},id){
        try {
            const res = await axios.get(route('product.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyProduct({commit},id){
        try {
            await axios.delete(route('product.destroy',id));
            commit('DESTROY_PRODUCT',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updateProduct({commit},data){
        try {
            const res = await axios.put(route('product.update',data.id),data);
            commit('UPDATE_PRODUCT',res.data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_PRODUCT:function (state,data) {
        state.product.unshift(data)
    },
    SET_PRODUCT:function (state,data) {
        state.product = data
    },
    DESTROY_PRODUCT:function (state,id) {
        return state.product = state.product.filter(function (product,index) {
            return product.id !== id
        })
    },
    UPDATE_PRODUCT:function (state,data) {
        let index = state.product.findIndex(function (x) {
            return parseInt(x.id) === parseInt(data.id)
        });
        state.product.splice(index,1,data)
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}