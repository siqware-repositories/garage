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
import invoice from './modules/invoice'
import customer from './modules/customer'
import employee from './modules/employee'
import payroll from './modules/payroll'
import income_type from './modules/income_type'
import expense_type from './modules/expense_type'
import income from './modules/income'
import expense from './modules/expense'
/*stock*/
import report_stock from './modules/report/stock'
import report_best_seller from './modules/report/best_seller'
import report_close_service from './modules/report/close_service'
import report_close_payroll from './modules/report/close_payroll'
import investment from './modules/investment'
import excel_import from './modules/excel-import'
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
        invoice,
        customer,
        employee,
        payroll,
        income_type,
        expense_type,
        income,
        expense,
        investment,
        /*stock*/
        report_stock,
        report_best_seller,
        report_close_service,
        report_close_payroll,
        /*excel import*/
        excel_import
    }
})
