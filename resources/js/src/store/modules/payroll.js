import axios from  'axios'
const state = {
    payroll:[]
};
const getters = {
    all_payroll:function (state) {
        return state.payroll
    }
};
const actions = {
    async fetchPayroll({commit}){
        if (!state.payroll.length) {
            try {
                const res = await axios.get(route('payroll.index'));
                commit('SET_PAYROLL', res.data)
            } catch (e) {
                return false
            }
        }
    },
    async storePayroll({commit},data){
        try {
            const res = await axios.post(route('payroll.store'),data);
            commit('STORE_PAYROLL',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editPayroll({commit},id){
        try {
            const res = await axios.get(route('payroll.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyPayroll({commit},id){
        try {
            await axios.delete(route('payroll.destroy',id));
            commit('DESTROY_PAYROLL',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updatePayroll({commit},data){
        try {
            const res = await axios.put(route('payroll.update',data.id),data);
            commit('UPDATE_PAYROLL',res.data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_PAYROLL:function (state,data) {
        state.payroll.unshift(data)
    },
    SET_PAYROLL:function (state,data) {
        state.payroll = data
    },
    DESTROY_PAYROLL:function (state,id) {
        return state.payroll = state.payroll.filter(function (payroll,index) {
            return payroll.id !== id
        })
    },
    UPDATE_PAYROLL:function (state,data) {
        let index = state.payroll.findIndex(function (x) {
            return parseInt(x.id) === parseInt(data.id)
        });
        state.payroll.splice(index,1,data);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}