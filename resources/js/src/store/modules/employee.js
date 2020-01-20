
const state = {
    employee:[]
};
const getters = {
    all_employee:function (state) {
        return state.employee
    }
};
const actions = {
    async fetchEmployee({commit}){
        if (!state.employee.length) {
            try {
                const res = await axios.get(route('employee.index'));
                commit('SET_EMPLOYEE', res.data)
            } catch (e) {
                return false
            }
        }
    },
    async storeEmployee({commit},data){
        try {
            const res = await axios.post(route('employee.store'),data);
            commit('STORE_EMPLOYEE',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editEmployee({commit},id){
        try {
            const res = await axios.get(route('employee.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyEmployee({commit},id){
        try {
            await axios.delete(route('employee.destroy',id));
            commit('DESTROY_EMPLOYEE',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updateEmployee({commit},data){
        try {
            const res = await axios.put(route('employee.update',data.id),data);
            commit('UPDATE_EMPLOYEE',res.data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_EMPLOYEE:function (state,data) {
        state.employee.unshift(data)
    },
    SET_EMPLOYEE:function (state,data) {
        state.employee = data
    },
    DESTROY_EMPLOYEE:function (state,id) {
        return state.employee = state.employee.filter(function (employee,index) {
            return employee.id !== id
        })
    },
    UPDATE_EMPLOYEE:function (state,data) {
        let index = state.employee.findIndex(function (x) {
            return parseInt(x.id) === parseInt(data.id)
        });
        state.employee.splice(index,1,data);
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}