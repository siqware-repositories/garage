import axios from  'axios'
const state = {
    income_type:[]
};
const getters = {
    all_income_type:function (state) {
        return state.income_type
    }
};
const actions = {
    async fetchIncomeType({commit}){
        if (!state.income_type.length) {
            try {
                const res = await axios.get(route('income_type.index'));
                commit('SET_INCOME_TYPE', res.data)
            } catch (e) {
                return false
            }
        }
    },
    async storeIncomeType({commit},data){
        try {
            const res = await axios.post(route('income_type.store'),data);
            commit('STORE_INCOME_TYPE',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editIncomeType({commit},id){
        try {
            const res = await axios.get(route('income_type.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyIncomeType({commit},id){
        try {
            await axios.delete(route('income_type.destroy',id));
            commit('DESTROY_INCOME_TYPE',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updateIncomeType({commit},data){
        try {
            await axios.put(route('income_type.update',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_INCOME_TYPE:function (state,data) {
        state.income_type.unshift(data.type)
    },
    SET_INCOME_TYPE:function (state,data) {
        state.income_type = data
    },
    DESTROY_INCOME_TYPE:function (state,id) {
        return state.income_type = state.income_type.filter(function (income_type,index) {
            return income_type.id !== id
        })
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}