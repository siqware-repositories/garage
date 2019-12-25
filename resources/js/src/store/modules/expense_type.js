import axios from  'axios'
const state = {
    expense_type:[]
};
const getters = {
    all_expense_type:function (state) {
        return state.expense_type
    }
};
const actions = {
    async fetchExpenseType({commit}){
        if (!state.expense_type.length) {
            try {
                const res = await axios.get(route('expense_type.index'));
                commit('SET_EXPENSE_TYPE', res.data)
            } catch (e) {
                return false
            }
        }
    },
    async storeExpenseType({commit},data){
        try {
            const res = await axios.post(route('expense_type.store'),data);
            commit('STORE_EXPENSE_TYPE',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editExpenseType({commit},id){
        try {
            const res = await axios.get(route('expense_type.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyExpenseType({commit},id){
        try {
            await axios.delete(route('expense_type.destroy',id));
            commit('DESTROY_EXPENSE_TYPE',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updateExpenseType({commit},data){
        try {
            await axios.put(route('expense_type.update',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_EXPENSE_TYPE:function (state,data) {
        state.expense_type.unshift(data.type)
    },
    SET_EXPENSE_TYPE:function (state,data) {
        state.expense_type = data
    },
    DESTROY_EXPENSE_TYPE:function (state,id) {
        return state.expense_type = state.expense_type.filter(function (expense_type,index) {
            return expense_type.id !== id
        })
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}