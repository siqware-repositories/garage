
const state = {
    brand:[]
};
const getters = {
    all_brand:function (state) {
        return state.brand
    }
};
const actions = {
    async fetchBrand({commit}){
        if (!state.brand.length) {
            try {
                const res = await axios.get(route('brand.index'));
                commit('SET_BRAND', res.data)
            } catch (e) {
                return false
            }
        }
    },
    async storeBrand({commit},data){
        try {
            const res = await axios.post(route('brand.store'),data);
            commit('STORE_BRAND',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editBrand({commit},id){
        try {
            const res = await axios.get(route('brand.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyBrand({commit},id){
        try {
            await axios.delete(route('brand.destroy',id));
            commit('DESTROY_BRAND',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updateBrand({commit},data){
        try {
            await axios.put(route('brand.update',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_BRAND:function (state,data) {
        state.brand.unshift(data)
    },
    SET_BRAND:function (state,data) {
        state.brand = data
    },
    DESTROY_BRAND:function (state,id) {
        return state.brand = state.brand.filter(function (brand,index) {
            return brand.id !== id
        })
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}