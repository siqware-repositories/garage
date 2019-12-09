import axios from  'axios'
const state = {
    category:[]
};
const getters = {
    all_category:function (state) {
        return state.category
    }
};
const actions = {
    async fetchCategory({commit}){
        try {
            const res = await axios.get(route('category.index'));
            commit('SET_CATEGORY',res.data)
        }catch (e) {
            return false
        }
    },
    async storeCategory({commit},data){
        try {
            const res = await axios.post(route('category.store'),data);
            commit('STORE_CATEGORY',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editCategory({commit},id){
        try {
            const res = await axios.get(route('category.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyCategory({commit},id){
        try {
            await axios.delete(route('category.destroy',id));
            commit('DESTROY_CATEGORY',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updateCategory({commit},data){
        try {
            await axios.put(route('category.update',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_CATEGORY:function (state,data) {
        state.category.unshift(data)
    },
    SET_CATEGORY:function (state,data) {
        state.category = data
    },
    DESTROY_CATEGORY:function (state,id) {
        return state.category = state.category.filter(function (category,index) {
            return category.id !== id
        })
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}