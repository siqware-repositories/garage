import axios from  'axios'
const state = {
    investment:[]
};
const getters = {
    all_investment:function (state) {
        return state.investment
    }
};
const actions = {
    async fetchInvestment({commit}){
        try {
            const res = await axios.get(route('investment.index'));
            commit('SET_INVESTMENT',res.data)
        }catch (e) {
            return false
        }
    },
    async storeInvestment({commit},data){
        try {
            const res = await axios.post(route('investment.store'),data);
            commit('STORE_INVESTMENT',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editInvestment({commit},id){
        try {
            const res = await axios.get(route('investment.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyInvestment({commit},id){
        try {
            await axios.delete(route('investment.destroy',id));
            commit('DESTROY_INVESTMENT',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updateInvestment({commit},data){
        try {
            const res = await axios.put(route('investment.update',data.id),data);
            commit('UPDATE_INVESTMENT',res.data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_INVESTMENT:function (state,data) {
        state.investment.unshift(data)
    },
    SET_INVESTMENT:function (state,data) {
        state.investment = data
    },
    DESTROY_INVESTMENT:function (state,id) {
        return state.investment = state.investment.filter(function (investment,index) {
            return investment.id !== id
        })
    },
    UPDATE_INVESTMENT:function (state,data) {
        let index = state.investment.findIndex(function (x) {
            return parseInt(x.id) === parseInt(data.id)
        });
        state.investment.splice(index,1,data);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}