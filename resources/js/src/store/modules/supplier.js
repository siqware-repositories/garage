import axios from  'axios'
const state = {
    supplier:[]
};
const getters = {
    all_supplier:function (state) {
        return state.supplier
    }
};
const actions = {
    async fetchSupplier({commit}){
        if (!state.supplier.length) {
            try {
                const res = await axios.get(route('supplier.index'));
                commit('SET_SUPPLIER', res.data)
            } catch (e) {
                return false
            }
        }
    },
    async storeSupplier({commit},data){
        try {
            const res = await axios.post(route('supplier.store'),data);
            commit('STORE_SUPPLIER',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editSupplier({commit},id){
        try {
            const res = await axios.get(route('supplier.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroySupplier({commit},id){
        try {
            await axios.delete(route('supplier.destroy',id));
            commit('DESTROY_SUPPLIER',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updateSupplier({commit},data){
        try {
            await axios.put(route('supplier.update',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_SUPPLIER:function (state,data) {
        state.supplier.unshift(data)
    },
    SET_SUPPLIER:function (state,data) {
        state.supplier = data
    },
    DESTROY_SUPPLIER:function (state,id) {
        return state.supplier = state.supplier.filter(function (supplier,index) {
            return supplier.id !== id
        })
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}