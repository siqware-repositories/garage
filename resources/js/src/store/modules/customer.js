import axios from  'axios'
const state = {
    customer:[]
};
const getters = {
    all_customer:function (state) {
        return state.customer
    }
};
const actions = {
    async fetchCustomer({commit}){
        if (!state.customer.length) {
            try {
                const res = await axios.get(route('customer.index'));
                commit('SET_CUSTOMER', res.data)
            } catch (e) {
                return false
            }
        }
    },
    async storeCustomer({commit},data){
        try {
            const res = await axios.post(route('customer.store'),data);
            commit('STORE_CUSTOMER',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editCustomer({commit},id){
        try {
            const res = await axios.get(route('customer.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyCustomer({commit},id){
        try {
            await axios.delete(route('customer.destroy',id));
            commit('DESTROY_CUSTOMER',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updateCustomer({commit},data){
        try {
            await axios.put(route('customer.update',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_CUSTOMER:function (state,data) {
        state.customer.unshift(data)
    },
    SET_CUSTOMER:function (state,data) {
        state.customer = data
    },
    DESTROY_CUSTOMER:function (state,id) {
        return state.customer = state.customer.filter(function (customer,index) {
            return customer.id !== id
        })
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}