import axios from  'axios'
const state = {
    income:[]
};
const getters = {
    all_income:function (state) {
        return state.income
    }
};
const actions = {
    async fetchIncome({commit}){
        if (!state.income.length) {
            try {
                const res = await axios.get(route('income.index'));
                commit('SET_INCOME', res.data)
            } catch (e) {
                return false
            }
        }
    },
    async storeIncome({commit},data){
        try {
            const res = await axios.post(route('income.store'),data);
            commit('STORE_INCOME',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editIncome({commit},id){
        try {
            const res = await axios.get(route('income.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyIncome({commit},id){
        try {
            await axios.delete(route('income.destroy',id));
            commit('DESTROY_INCOME',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updateIncome({commit},data){
        try {
            const res = await axios.put(route('income.update',data.id),data);
            commit('UPDATE_INCOME',res.data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_INCOME:function (state,data) {
        state.income.unshift(data)
    },
    SET_INCOME:function (state,data) {
        state.income = data
    },
    DESTROY_INCOME:function (state,id) {
        return state.income = state.income.filter(function (income,index) {
            return income.id !== id
        })
    },
    UPDATE_INCOME:function (state,data) {
        let index = state.income.findIndex(function (x) {
            return parseInt(x.id) === parseInt(data.id)
        });
        state.income.splice(index,1,data);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}