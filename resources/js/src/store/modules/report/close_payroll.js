import axios from  'axios'
const state = {
    report_close_payroll:[]
};
const getters = {
    all_report_close_payroll:function (state) {
        return state.report_close_payroll
    }
};
const actions = {
    async fetchReportClosePayroll({commit}){
        try {
            const res = await axios.post(route('report.close_payroll'));
            commit('SET_REPORT_CLOSE_PAYROLL',res.data)
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    SET_REPORT_CLOSE_PAYROLL:function (state,data) {
        state.report_close_payroll = data
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}