import axios from  'axios'
const state = {
    unit:[]
};
const getters = {
    all_unit:function (state) {
        return state.unit
    }
};
const actions = {
    async fetchUnit({commit}){
        try {
            const res = await axios.get(route('unit.index'));
            commit('SET_UNIT',res.data)
        }catch (e) {
            return false
        }
    },
    async storeUnit({commit},data){
        try {
            const res = await axios.post(route('unit.store'),data);
            commit('STORE_UNIT',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editUnit({commit},id){
        try {
            const res = await axios.get(route('unit.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyUnit({commit},id){
        try {
            await axios.delete(route('unit.destroy',id));
            commit('DESTROY_UNIT',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updateUnit({commit},data){
        try {
            await axios.put(route('unit.update',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_UNIT:function (state,data) {
        state.unit.unshift(data)
    },
    SET_UNIT:function (state,data) {
        state.unit = data
    },
    DESTROY_UNIT:function (state,id) {
        return state.unit = state.unit.filter(function (unit,index) {
            return unit.id !== id
        })
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}