
const state = {
    user:[]
};
const getters = {
    all_user:function (state) {
        return state.user
    }
};
const actions = {
    async fetchUser({commit}){
        if (!state.user.length) {
            try {
                const res = await axios.get(route('auth.index'));
                commit('SET_USER', res.data)
            } catch (e) {
                return false
            }
        }
    },
    async storeUser({commit},data){
        try {
            const res = await axios.post(route('auth.store'),data);
            commit('STORE_USER',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editUser({commit},id){
        try {
            const res = await axios.get(route('auth.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyUser({commit},id){
        try {
            await axios.delete(route('auth.destroy',id));
            commit('DESTROY_USER',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updateUser({commit},data){
        try {
            await axios.put(route('auth.update',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
    async updateUserPassword({commit},data){
        try {
            await axios.post(route('auth.change.password',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_USER:function (state,data) {
        state.user.unshift(data)
    },
    SET_USER:function (state,data) {
        state.user = data
    },
    DESTROY_USER:function (state,id) {
        return state.user = state.user.filter(function (user,index) {
            return user.id !== id
        })
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}