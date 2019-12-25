import axios from  'axios'
const state = {
    expense:[]
};
const getters = {
    all_expense:function (state) {
        return state.expense
    }
};
const actions = {
    async fetchExpense({commit}){
        if (!state.expense.length) {
            try {
                const res = await axios.get(route('expense.index'));
                commit('SET_EXPENSE', res.data)
            } catch (e) {
                return false
            }
        }
    },
    async storeExpense({commit},data){
        try {
            const res = await axios.post(route('expense.store'),data);
            commit('STORE_EXPENSE',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editExpense({commit},id){
        try {
            const res = await axios.get(route('expense.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyExpense({commit},id){
        try {
            await axios.delete(route('expense.destroy',id));
            commit('DESTROY_EXPENSE',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updateExpense({commit},data){
        try {
            const res = await axios.put(route('expense.update',data.id),data);
            commit('UPDATE_EXPENSE',res.data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_EXPENSE:function (state,data) {
        state.expense.unshift(data)
    },
    SET_EXPENSE:function (state,data) {
        state.expense = data
    },
    DESTROY_EXPENSE:function (state,id) {
        return state.expense = state.expense.filter(function (expense,index) {
            return expense.id !== id
        })
    },
    UPDATE_EXPENSE:function (state,data) {
        let index = state.expense.findIndex(function (x) {
            return parseInt(x.id) === parseInt(data.id)
        });
        state.expense.splice(index,1,data);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}