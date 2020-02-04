const state = {
    excel_import:[]
};
const getters = {};
const actions = {
    async storeExcelImport({commit},data){
        try {
            const res = await axios.post(route('import.product'),data);
            commit('STORE_EXCEL_IMPORT',res.data);
            return true
        }catch (e) {
            return false
        }
    }
};
const mutations = {
    STORE_EXCEL_IMPORT:function (state,data) {
        state.excel_import.unshift(data)
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}