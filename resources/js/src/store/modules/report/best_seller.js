
const state = {
    report_best_seller:[]
};
const getters = {
    all_report_best_seller:function (state) {
        return state.report_best_seller
    }
};
const actions = {
    async fetchReportBestSeller({commit}){
        try {
            const res = await axios.post(route('report.best_seller'));
            commit('SET_REPORT_BEST_SELLER',res.data)
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    SET_REPORT_BEST_SELLER:function (state,data) {
        state.report_best_seller = data
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}