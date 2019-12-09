/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex);
//Module
import users from './modules/user'
import about from './modules/about'
import product from './modules/product'
import unit from './modules/unit'
import category from './modules/category'
import brand from './modules/brand'
import supplier from './modules/supplier'
import purchase from './modules/purchase'
export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
        users,
        about,
        product,
        unit,
        category,
        brand,
        supplier,
        purchase,
    }
})
