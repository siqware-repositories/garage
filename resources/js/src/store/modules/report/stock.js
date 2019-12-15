import axios from  'axios'
const state = {
    report_stock:[]
};
const getters = {
    all_report_stock:function (state) {
        return state.report_stock
    }
};
const actions = {
    async fetchReportStock({commit}){
        try {
            const res = await axios.post(route('report.stock'));
            commit('SET_REPORT_STOCK',res.data)
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    SET_REPORT_STOCK:function (state,data) {
        state.report_stock = data
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}