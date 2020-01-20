
const state = {
    report_close_service:[]
};
const getters = {
    all_report_close_service:function (state) {
        return state.report_close_service
    }
};
const actions = {
    async fetchReportCloseService({commit}){
        try {
            const res = await axios.post(route('report.close_service'));
            commit('SET_REPORT_CLOSE_SERVICE',res.data)
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    SET_REPORT_CLOSE_SERVICE:function (state,data) {
        state.report_close_service = data
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}