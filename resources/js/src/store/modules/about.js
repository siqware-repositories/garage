import axios from  'axios'
const state = {
    about:[]
};
const getters = {
    all_about:function (state) {
        return state.about
    }
};
const actions = {
    async fetchAbout({commit}){
        if (!state.about.length) {
            try {
                const res = await axios.get(route('about.index'));
                commit('SET_ABOUT', res.data)
            } catch (e) {
                return false
            }
        }
    },
    async storeAbout({commit},data){
        try {
            const res = await axios.post(route('about.store'),data);
            commit('STORE_ABOUT',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editAbout({commit},id){
        try {
            const res = await axios.get(route('about.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyAbout({commit},id){
        try {
            await axios.delete(route('about.destroy',id));
            commit('DESTROY_ABOUT',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updateAbout({commit},data){
        try {
            await axios.put(route('about.update',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_ABOUT:function (state,data) {
        state.about.unshift(data)
    },
    SET_ABOUT:function (state,data) {
        state.about = data
    },
    DESTROY_ABOUT:function (state,id) {
        return state.about = state.about.filter(function (about,index) {
            return about.id !== id
        })
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}