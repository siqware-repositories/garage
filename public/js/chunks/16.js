(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chartConfigs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartConfigs.js */ "./resources/js/src/components/statistics-cards/chartConfigs.js");
/* harmony import */ var _assets_utils_color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/utils/color.js */ "./resources/assets/utils/color.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    icon: {
      type: String,
      required: true
    },
    statistic: {
      type: [Number, String],
      required: true
    },
    statisticTitle: {
      type: String
    },
    chartData: {// type: Array,
      // required: true
    },
    color: {
      type: String,
      default: 'primary'
    },
    colorTo: {
      type: String
    },
    // chartType: {
    //     type: String,
    //     default: 'line-chart',
    // },
    type: {
      type: String,
      default: 'line'
    },
    iconRight: {
      type: Boolean,
      default: false
    },
    hideChart: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      chartOptions: null
    };
  },
  watch: {
    themePrimaryColor: function themePrimaryColor() {
      this.$refs.apexChart.updateOptions({
        theme: {
          monochrome: {
            color: this.getHex(this.color)
          }
        }
      });
    }
  },
  computed: {
    themePrimaryColor: function themePrimaryColor() {
      return this.$store.state.themePrimaryColor;
    }
  },
  methods: {
    getHex: function getHex(color) {
      if (_assets_utils_color_js__WEBPACK_IMPORTED_MODULE_2__["default"].isColor(color)) {
        var rgb = window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(color));
        rgb = rgb.split(",");
        return "#" + ((1 << 24) + (Number(rgb[0]) << 16) + (Number(rgb[1]) << 8) + Number(rgb[2])).toString(16).slice(1);
      }

      return color;
    },
    gradientToColor: function gradientToColor(color) {
      var gradientToColors = {
        "primary": "#A9A2F6",
        "success": "#55DD92",
        "warning": "#ffc085",
        "danger": "#F97794"
      };
      return gradientToColors[color] ? gradientToColors[color] : gradientToColors["primary"];
    }
  },
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  created: function created() {
    if (this.type == 'area') {
      // assign chart options
      this.chartOptions = Object.assign({}, _chartConfigs_js__WEBPACK_IMPORTED_MODULE_1__["default"].areaChartOptions);
      this.chartOptions['theme'] = {
        monochrome: {
          enabled: true,
          color: this.getHex(this.color),
          shadeTo: 'light',
          shadeIntensity: 0.65
        }
      };
    } else if (this.type == "line") {
      // Assign chart options
      this.chartOptions = JSON.parse(JSON.stringify(_chartConfigs_js__WEBPACK_IMPORTED_MODULE_1__["default"].lineChartOptions));
      this.chartOptions.fill.gradient.gradientToColors = [this.gradientToColor(this.colorTo || this.color)];
      this.chartOptions.colors = [this.getHex(this.color)];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/report/stock/Stock.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/report/stock/Stock.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/statistics-cards/StatisticsCardLine.vue */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue");
/* harmony import */ var vue_money_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-money-format */ "./node_modules/vue-money-format/src/main.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Stock",
  components: {
    'money-format': vue_money_format__WEBPACK_IMPORTED_MODULE_1__["default"],
    StatisticsCardLine: _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      selected: [],
      data: {
        id: '',
        searchId: null
      }
    };
  },
  computed: {
    all_report_stocks: function all_report_stocks() {
      return this.$store.getters.all_report_stock;
    },
    search_all_report_stocks: function search_all_report_stocks() {
      var self = this;
      return self.all_report_stocks.filter(function (x) {
        return self.data.searchId ? parseInt(self.data.id) === x.id : true;
      });
    },
    all_report_stocks_id: function all_report_stocks_id() {
      var self = this;
      return self.all_report_stocks.map(function (x) {
        return {
          id: String(x.id)
        };
      });
    },
    out_stock_count: function out_stock_count() {
      var count = 0;
      this.all_report_stocks.forEach(function (item, index) {
        var sum = item.purchase_detail.reduce(function (total, item) {
          return total + parseFloat(item.remain_qty);
        }, 0);

        if (sum <= 0) {
          count += 1;
        }
      });
      return count;
    },
    out_stock_product: function out_stock_product() {
      var products = [];
      this.all_report_stocks.forEach(function (item, index) {
        var sum = item.purchase_detail.reduce(function (total, item) {
          return total + parseFloat(item.remain_qty);
        }, 0);

        if (sum <= 0) {
          products.push(item);
        }
      });
      return products;
    }
  },
  methods: {
    sum_qty: function sum_qty(data) {
      return data.reduce(function (total, item) {
        return total + parseFloat(item.remain_qty);
      }, 0);
    },
    searchStock: function searchStock() {
      var self = this;
      self.data.searchId = parseInt(self.data.id);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/report/stock/Stock.vue?vue&type=style&index=1&lang=sass&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/report/stock/Stock.vue?vue&type=style&index=1&lang=sass& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../../node_modules/css-loader!../../../../../sass/vue-instant/vue-instant.css */ "./node_modules/css-loader/index.js!./resources/sass/vue-instant/vue-instant.css"), "");

// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./resources/sass/vue-instant/vue-instant.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./resources/sass/vue-instant/vue-instant.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sbx-facebook {\n  display: inline-block;\n  position: relative;\n  width: 450px;\n  height: 27px;\n  white-space: nowrap;\n  box-sizing: border-box;\n  font-size: 13px;\n}\n.sbx-facebook__wrapper {\n  width: 100%;\n  height: 100%;\n}\n.sbx-facebook__input {\n  position: absolute !important;\n  left: 0 !important;\n  top: 0 !important;\n  -webkit-transition: box-shadow .4s ease, background .4s ease;\n  transition: box-shadow .4s ease, background .4s ease;\n  border: 0;\n  border-radius: 4px;\n  box-shadow: inset 0 0 0 0px #CCCCCC;\n  background: rgba(255, 255, 255, 0);\n  padding: 0;\n  padding-right: 62px;\n  padding-left: 11px;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  white-space: normal;\n  font-size: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.sbx-facebook__input-placeholder {\n  -webkit-transition: box-shadow .4s ease, background .4s ease;\n  transition: box-shadow .4s ease, background .4s ease;\n  border: 0;\n  border-radius: 4px;\n  box-shadow: inset 0 0 0 0px #CCCCCC;\n  background: #FFFFFF;\n  padding: 0;\n  padding-right: 62px;\n  padding-left: 11px;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  white-space: normal;\n  font-size: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.sbx-facebook__input::-webkit-search-decoration,\n.sbx-facebook__input::-webkit-search-cancel-button,\n.sbx-facebook__input::-webkit-search-results-button,\n.sbx-facebook__input::-webkit-search-results-decoration {\n  display: none;\n}\n.sbx-facebook__input:hover {\n  box-shadow: inset 0 0 0 0px #b3b3b3;\n}\n.sbx-facebook__input:focus,\n.sbx-facebook__input:active {\n  outline: 0;\n  box-shadow: inset 0 0 0 0px #3E82F7;\n  background: rgba(255, 255, 255, 0)\n}\n.sbx-facebook__input::-webkit-input-placeholder {\n  color: #AAAAAA;\n}\n.sbx-facebook__input::-moz-placeholder {\n  color: #AAAAAA;\n}\n.sbx-facebook__input:-ms-input-placeholder {\n  color: #AAAAAA;\n}\n.sbx-facebook__input::placeholder {\n  color: #AAAAAA;\n}\n.sbx-facebook__submit {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: inherit;\n  margin: 0;\n  border: 0;\n  border-radius: 0 3px 3px 0;\n  background-color: #f6f7f8;\n  padding: 0;\n  width: 35px;\n  height: 100%;\n  vertical-align: middle;\n  text-align: center;\n  font-size: inherit;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.sbx-facebook__submit::before {\n  display: inline-block;\n  margin-right: -4px;\n  height: 100%;\n  vertical-align: middle;\n  content: '';\n}\n.sbx-facebook__submit:hover,\n.sbx-facebook__submit:active {\n  cursor: pointer;\n}\n.sbx-facebook__submit:focus {\n  outline: 0;\n}\n.sbx-facebook__submit svg {\n  width: 15px;\n  height: 15px;\n  vertical-align: middle;\n  fill: #3C5BA2;\n}\n.sbx-facebook__reset {\n  display: none;\n  position: absolute;\n  top: 3px;\n  right: 41px;\n  margin: 0;\n  border: 0;\n  background: none;\n  cursor: pointer;\n  padding: 0;\n  font-size: inherit;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  fill: rgba(0, 0, 0, 0.5);\n}\n.sbx-facebook__reset:focus {\n  outline: 0;\n}\n.sbx-facebook__reset svg {\n  display: block;\n  margin: 4px;\n  width: 13px;\n  height: 13px;\n}\n.sbx-facebook__input:valid~.sbx-facebook__reset {\n  display: block;\n  -webkit-animation-name: sbx-reset-in;\n  animation-name: sbx-reset-in;\n  -webkit-animation-duration: .15s;\n  animation-duration: .15s;\n}\n@-webkit-keyframes sbx-reset-in {\n0% {\n    -webkit-transform: translate3d(-20%, 0, 0);\n    transform: translate3d(-20%, 0, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n}\n}\n@keyframes sbx-reset-in {\n0% {\n    -webkit-transform: translate3d(-20%, 0, 0);\n    transform: translate3d(-20%, 0, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n}\n}\n\n\n/* amazon*/\n.sbx-amazon {\n  display: inline-block;\n  position: relative;\n  width: 600px;\n  height: 39px;\n  white-space: nowrap;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.sbx-amazon__wrapper {\n  width: 100%;\n  height: 100%;\n}\n.sbx-amazon__input {\n  display: inline-block;\n  position: absolute !important;\n  left: 0 !important;\n  top: 0 !important;\n  -webkit-transition: box-shadow .4s ease, background .4s ease;\n  transition: box-shadow .4s ease, background .4s ease;\n  border: 0;\n  border-radius: 4px;\n  box-shadow: inset 0 0 0 1px #FFFFFF;\n  background: rgba(255, 255, 255, 0);\n  padding: 0;\n  padding-right: 75px;\n  padding-left: 11px;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  white-space: normal;\n  font-size: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.sbx-amazon__input-placeholder {\n  display: inline-block;\n  -webkit-transition: box-shadow .4s ease, background .4s ease;\n  transition: box-shadow .4s ease, background .4s ease;\n  border: 0;\n  border-radius: 4px;\n  box-shadow: inset 0 0 0 1px #FFFFFF;\n  background: #FFFFFF;\n  padding: 0;\n  padding-right: 75px;\n  padding-left: 11px;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  white-space: normal;\n  font-size: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.sbx-amazon__input::-webkit-search-decoration,\n.sbx-amazon__input::-webkit-search-cancel-button,\n.sbx-amazon__input::-webkit-search-results-button,\n.sbx-amazon__input::-webkit-search-results-decoration {\n  display: none;\n}\n.sbx-amazon__input:hover {\n  box-shadow: inset 0 0 0 1px #e6e6e6;\n}\n.sbx-amazon__input:focus,\n.sbx-amazon__input:active {\n  outline: 0;\n  box-shadow: inset 0 0 0 1px #FFBF58;\n  background: rgba(255, 255, 255, 0)\n}\n.sbx-amazon__input::-webkit-input-placeholder {\n  color: #AAAAAA;\n}\n.sbx-amazon__input::-moz-placeholder {\n  color: #AAAAAA;\n}\n.sbx-amazon__input:-ms-input-placeholder {\n  color: #AAAAAA;\n}\n.sbx-amazon__input::placeholder {\n  color: #AAAAAA;\n}\n.sbx-amazon__submit {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: inherit;\n  margin: 0;\n  border: 0;\n  border-radius: 0 3px 3px 0;\n  background-color: #ffbf58;\n  padding: 0;\n  width: 47px;\n  height: 100%;\n  vertical-align: middle;\n  text-align: center;\n  font-size: inherit;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.sbx-amazon__submit::before {\n  display: inline-block;\n  margin-right: -4px;\n  height: 100%;\n  vertical-align: middle;\n  content: '';\n}\n.sbx-amazon__submit:hover,\n.sbx-amazon__submit:active {\n  cursor: pointer;\n}\n.sbx-amazon__submit:focus {\n  outline: 0;\n}\n.sbx-amazon__submit svg {\n  width: 21px;\n  height: 21px;\n  vertical-align: middle;\n  fill: #202F40;\n}\n.sbx-amazon__reset {\n  display: none;\n  position: absolute;\n  top: 9px;\n  right: 54px;\n  margin: 0;\n  border: 0;\n  background: none;\n  cursor: pointer;\n  padding: 0;\n  font-size: inherit;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  fill: rgba(0, 0, 0, 0.5);\n}\n.sbx-amazon__reset:focus {\n  outline: 0;\n}\n.sbx-amazon__reset svg {\n  display: block;\n  margin: 4px;\n  width: 13px;\n  height: 13px;\n}\n.sbx-amazon__input:valid~.sbx-amazon__reset {\n  display: block;\n  -webkit-animation-name: sbx-reset-in;\n  animation-name: sbx-reset-in;\n  -webkit-animation-duration: .15s;\n  animation-duration: .15s;\n}\n@-webkit-keyframes sbx-reset-in {\n0% {\n    -webkit-transform: translate3d(-20%, 0, 0);\n    transform: translate3d(-20%, 0, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n}\n}\n@keyframes sbx-reset-in {\n0% {\n    -webkit-transform: translate3d(-20%, 0, 0);\n    transform: translate3d(-20%, 0, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n}\n}\n\n\n/*  google */\n.sbx-google {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  height: 41px;\n  white-space: nowrap;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.sbx-google__wrapper {\n  width: 100%;\n  height: 100%;\n}\n.sbx-google__input {\n  display: inline-block;\n  position: absolute !important;\n  left: 0 !important;\n  top: 0 !important;\n  -webkit-transition: box-shadow .4s ease, background .4s ease;\n  transition: box-shadow .4s ease, background .4s ease;\n  border: 0;\n  border-radius: 4px;\n  box-shadow: inset 0 0 0 1px #CCCCCC;\n  background: rgba(255, 255, 255, 0);\n  padding: 0;\n  padding-right: 77px;\n  padding-left: 11px;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  white-space: normal;\n  font-size: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.sbx-google__input-placeholder {\n  display: inline-block;\n  -webkit-transition: box-shadow .4s ease, background .4s ease;\n  transition: box-shadow .4s ease, background .4s ease;\n  border: 0;\n  border-radius: 4px;\n  box-shadow: inset 0 0 0 1px #CCCCCC;\n  background: #FFFFFF;\n  padding: 0;\n  padding-right: 77px;\n  padding-left: 11px;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  white-space: normal;\n  font-size: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.sbx-google__input::-webkit-search-decoration,\n.sbx-google__input::-webkit-search-cancel-button,\n.sbx-google__input::-webkit-search-results-button,\n.sbx-google__input::-webkit-search-results-decoration {\n  display: none;\n}\n.sbx-google__input:hover {\n  box-shadow: inset 0 0 0 1px #b3b3b3;\n}\n.sbx-google__input:focus,\n.sbx-google__input:active {\n  outline: 0;\n  box-shadow: inset 0 0 0 1px #3E82F7;\n  background: rgba(255, 255, 255, 0)\n}\n.sbx-google__input::-webkit-input-placeholder {\n  color: #AAAAAA;\n}\n.sbx-google__input::-moz-placeholder {\n  color: #AAAAAA;\n}\n.sbx-google__input:-ms-input-placeholder {\n  color: #AAAAAA;\n}\n.sbx-google__input::placeholder {\n  color: #AAAAAA;\n}\n.sbx-google__submit {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: inherit;\n  margin: 0;\n  border: 0;\n  border-radius: 0 3px 3px 0;\n  background-color: #3e82f7;\n  padding: 0;\n  width: 49px;\n  height: 100%;\n  vertical-align: middle;\n  text-align: center;\n  font-size: inherit;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.sbx-google__submit::before {\n  display: inline-block;\n  margin-right: -4px;\n  height: 100%;\n  vertical-align: middle;\n  content: '';\n}\n.sbx-google__submit:hover,\n.sbx-google__submit:active {\n  cursor: pointer;\n}\n.sbx-google__submit:focus {\n  outline: 0;\n}\n.sbx-google__submit svg {\n  width: 21px;\n  height: 21px;\n  vertical-align: middle;\n  fill: #FFFFFF;\n}\n.sbx-google__reset {\n  display: none;\n  position: absolute;\n  top: 10px;\n  right: 56px;\n  margin: 0;\n  border: 0;\n  background: none;\n  cursor: pointer;\n  padding: 0;\n  font-size: inherit;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  fill: rgba(0, 0, 0, 0.5);\n}\n.sbx-google__reset:focus {\n  outline: 0;\n}\n.sbx-google__reset svg {\n  display: block;\n  margin: 4px;\n  width: 13px;\n  height: 13px;\n}\n.sbx-google__input:valid~.sbx-google__reset {\n  display: block;\n  -webkit-animation-name: sbx-reset-in;\n  animation-name: sbx-reset-in;\n  -webkit-animation-duration: .15s;\n  animation-duration: .15s;\n}\n@-webkit-keyframes sbx-reset-in {\n0% {\n    -webkit-transform: translate3d(-20%, 0, 0);\n    transform: translate3d(-20%, 0, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n}\n}\n@keyframes sbx-reset-in {\n0% {\n    -webkit-transform: translate3d(-20%, 0, 0);\n    transform: translate3d(-20%, 0, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n}\n}\n\n\n/* twitter */\n.sbx-twitter {\n  display: inline-block;\n  position: relative;\n  width: 200px;\n  height: 33px;\n  white-space: nowrap;\n  box-sizing: border-box;\n  font-size: 12px;\n}\n.sbx-twitter__wrapper {\n  width: 100%;\n  height: 100%;\n}\n.sbx-twitter__input {\n  display: inline-block;\n  position: absolute;\n  left: 0 !important;\n  top: 0 !important;\n  -webkit-transition: box-shadow .4s ease, background .4s ease;\n  transition: box-shadow .4s ease, background .4s ease;\n  border: 0;\n  border-radius: 17px;\n  box-shadow: inset 0 0 0 1px #E1E8ED;\n  background: rgba(255, 255, 255, 0);\n  padding: 0;\n  padding-right: 52px;\n  padding-left: 16px;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  white-space: normal;\n  font-size: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.sbx-twitter__input-placeholder {\n  display: inline-block;\n  -webkit-transition: box-shadow .4s ease, background .4s ease;\n  transition: box-shadow .4s ease, background .4s ease;\n  border: 0;\n  border-radius: 17px;\n  box-shadow: inset 0 0 0 1px #E1E8ED;\n  background: rgba(255, 255, 255, 0);\n  padding: 0;\n  padding-right: 52px;\n  padding-left: 16px;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  white-space: normal;\n  font-size: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.sbx-twitter__input::-webkit-search-decoration,\n.sbx-twitter__input::-webkit-search-cancel-button,\n.sbx-twitter__input::-webkit-search-results-button,\n.sbx-twitter__input::-webkit-search-results-decoration {\n  display: none;\n}\n.sbx-twitter__input:hover {\n  box-shadow: inset 0 0 0 1px #c1d0da;\n}\n.sbx-twitter__input:focus,\n.sbx-twitter__input:active {\n  outline: 0;\n  box-shadow: inset 0 0 0 1px #D6DEE3;\n  background: rgba(255, 255, 255, 0)\n}\n.sbx-twitter__input::-webkit-input-placeholder {\n  color: #9AAEB5;\n}\n.sbx-twitter__input::-moz-placeholder {\n  color: #9AAEB5;\n}\n.sbx-twitter__input:-ms-input-placeholder {\n  color: #9AAEB5;\n}\n.sbx-twitter__input::placeholder {\n  color: #9AAEB5;\n}\n.sbx-twitter__submit {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: inherit;\n  margin: 0;\n  border: 0;\n  border-radius: 0 16px 16px 0;\n  background-color: rgba(62, 130, 247, 0);\n  padding: 0;\n  width: 33px;\n  height: 100%;\n  vertical-align: middle;\n  text-align: center;\n  font-size: inherit;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.sbx-twitter__submit::before {\n  display: inline-block;\n  margin-right: -4px;\n  height: 100%;\n  vertical-align: middle;\n  content: '';\n}\n.sbx-twitter__submit:hover,\n.sbx-twitter__submit:active {\n  cursor: pointer;\n}\n.sbx-twitter__submit:focus {\n  outline: 0;\n}\n.sbx-twitter__submit svg {\n  width: 13px;\n  height: 13px;\n  vertical-align: middle;\n  fill: #657580;\n}\n.sbx-twitter__reset {\n  display: none;\n  position: absolute;\n  top: 7px;\n  right: 33px;\n  margin: 0;\n  border: 0;\n  background: none;\n  cursor: pointer;\n  padding: 0;\n  font-size: inherit;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  fill: rgba(0, 0, 0, 0.5);\n}\n.sbx-twitter__reset:focus {\n  outline: 0;\n}\n.sbx-twitter__reset svg {\n  display: block;\n  margin: 4px;\n  width: 11px;\n  height: 11px;\n}\n.sbx-twitter__input:valid~.sbx-twitter__reset {\n  display: block;\n  -webkit-animation-name: sbx-reset-in;\n  animation-name: sbx-reset-in;\n  -webkit-animation-duration: .15s;\n  animation-duration: .15s;\n}\n@-webkit-keyframes sbx-reset-in {\n0% {\n    -webkit-transform: translate3d(-20%, 0, 0);\n    transform: translate3d(-20%, 0, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n}\n}\n@keyframes sbx-reset-in {\n0% {\n    -webkit-transform: translate3d(-20%, 0, 0);\n    transform: translate3d(-20%, 0, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n}\n}\n\n\n/* spotify */\n.sbx-spotify {\n  display: inline-block;\n  position: relative;\n  width: 200px;\n  height: 25px;\n  white-space: nowrap;\n  box-sizing: border-box;\n  font-size: 12px;\n}\n.sbx-spotify__wrapper {\n  width: 100%;\n  height: 100%;\n}\n.sbx-spotify__input {\n  display: inline-block;\n  position: absolute;\n  left: 0 !important;\n  top: 0 !important;\n  -webkit-transition: box-shadow .4s ease, background .4s ease;\n  transition: box-shadow .4s ease, background .4s ease;\n  border: 0;\n  border-radius: 13px;\n  box-shadow: inset 0 0 0 0px #FFFFFF;\n  background: rgba(255, 255, 255, 0);\n  padding: 0;\n  padding-right: 20px;\n  padding-left: 25px;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  white-space: normal;\n  font-size: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.sbx-spotify__input-placeholder {\n  display: inline-block;\n  -webkit-transition: box-shadow .4s ease, background .4s ease;\n  transition: box-shadow .4s ease, background .4s ease;\n  border: 0;\n  border-radius: 13px;\n  box-shadow: inset 0 0 0 0px #FFFFFF;\n  background: #FFFFFF;\n  padding: 0;\n  padding-right: 20px;\n  padding-left: 25px;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  white-space: normal;\n  font-size: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.sbx-spotify__input::-webkit-search-decoration,\n.sbx-spotify__input::-webkit-search-cancel-button,\n.sbx-spotify__input::-webkit-search-results-button,\n.sbx-spotify__input::-webkit-search-results-decoration {\n  display: none;\n}\n.sbx-spotify__input:hover {\n  box-shadow: inset 0 0 0 0px #e6e6e6;\n}\n.sbx-spotify__input:focus,\n.sbx-spotify__input:active {\n  outline: 0;\n  box-shadow: inset 0 0 0 0px #FFFFFF;\n  background: rgba(255, 255, 255, 0)\n}\n.sbx-spotify__input::-webkit-input-placeholder {\n  color: #AAAAAA;\n}\n.sbx-spotify__input::-moz-placeholder {\n  color: #AAAAAA;\n}\n.sbx-spotify__input:-ms-input-placeholder {\n  color: #AAAAAA;\n}\n.sbx-spotify__input::placeholder {\n  color: #AAAAAA;\n}\n.sbx-spotify__submit {\n  position: absolute;\n  top: 0;\n  right: inherit;\n  left: 0;\n  margin: 0;\n  border: 0;\n  border-radius: 12px 0 0 12px;\n  background-color: rgba(255, 255, 255, 0);\n  padding: 0;\n  width: 25px;\n  height: 100%;\n  vertical-align: middle;\n  text-align: center;\n  font-size: inherit;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.sbx-spotify__submit::before {\n  display: inline-block;\n  margin-right: -4px;\n  height: 100%;\n  vertical-align: middle;\n  content: '';\n}\n.sbx-spotify__submit:hover,\n.sbx-spotify__submit:active {\n  cursor: pointer;\n}\n.sbx-spotify__submit:focus {\n  outline: 0;\n}\n.sbx-spotify__submit svg {\n  width: 17px;\n  height: 17px;\n  vertical-align: middle;\n  fill: #222222;\n}\n.sbx-spotify__reset {\n  display: none;\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  margin: 0;\n  border: 0;\n  background: none;\n  cursor: pointer;\n  padding: 0;\n  font-size: inherit;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  fill: rgba(0, 0, 0, 0.5);\n}\n.sbx-spotify__reset:focus {\n  outline: 0;\n}\n.sbx-spotify__reset svg {\n  display: block;\n  margin: 4px;\n  width: 13px;\n  height: 13px;\n}\n.sbx-spotify__input:valid~.sbx-spotify__reset {\n  display: block;\n  -webkit-animation-name: sbx-reset-in;\n  animation-name: sbx-reset-in;\n  -webkit-animation-duration: .15s;\n  animation-duration: .15s;\n}\n@-webkit-keyframes sbx-reset-in {\n0% {\n    -webkit-transform: translate3d(-20%, 0, 0);\n    transform: translate3d(-20%, 0, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n}\n}\n@keyframes sbx-reset-in {\n0% {\n    -webkit-transform: translate3d(-20%, 0, 0);\n    transform: translate3d(-20%, 0, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1;\n}\n}\n.vue-instant__suggestions {\n  position: absolute;\n  left: 0;\n  top: 110%;\n  margin: 0;\n  background-color: #fff;\n  border: 1px solid #D3DCE6;\n  width: 100%;\n  padding: 6px 0;\n  z-index: 10;\n  border-radius: 2px;\n  max-height: 280px;\n  box-sizing: border-box;\n  overflow: auto;\n  box-shadow: 0 0 6px 0 rgba(0, 0, 0, .04), 0 2px 4px 0 rgba(0, 0, 0, .12);\n  margin-top: 3px;\n}\n.vue-instant__suggestions li {\n  list-style: none;\n  line-height: 36px;\n  padding: 0 10px;\n  margin: 0;\n  cursor: pointer;\n  color: #475669;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.vue-instant__suggestions li.highlighted__spotify {\n  background-color: black;\n  color: #fff;\n}\n.vue-instant__suggestions li.highlighted__twitter {\n  background-color: #20a0ff;\n  color: #fff;\n}\n.vue-instant__suggestions li.highlighted__google {\n  background-color: #EEEEEE;\n  color: black;\n}\n.vue-instant__suggestions li.highlighted__facebook {\n  background-color: #3e5da0;\n  color: #fff;\n}\n.vue-instant__suggestions li.highlighted__amazon {\n  background-color: #232F3E;\n  color: #fff;\n}\n.el-input-group__append {\n  border: 0px !important;\n}\n.sbx-custom__input {\n  position: absolute;\n  left: 0 !important;\n  background: rgba(255, 255, 255, 0) !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/report/stock/Stock.vue?vue&type=style&index=0&id=436b45ec&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/report/stock/Stock.vue?vue&type=style&index=0&id=436b45ec&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] table.expense[data-v-436b45ec], [dir] td.expense[data-v-436b45ec], [dir] th.expense[data-v-436b45ec] {\n  border: 1px solid black;\n}\ntable.expense[data-v-436b45ec] {\n  border-collapse: collapse;\n  width: 100%;\n}\n[dir=ltr] th.expense[data-v-436b45ec] {\n  text-align: left;\n}\n[dir=rtl] th.expense[data-v-436b45ec] {\n  text-align: right;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/report/stock/Stock.vue?vue&type=style&index=1&lang=sass&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/report/stock/Stock.vue?vue&type=style&index=1&lang=sass& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Stock.vue?vue&type=style&index=1&lang=sass& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/report/stock/Stock.vue?vue&type=style&index=1&lang=sass&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/report/stock/Stock.vue?vue&type=style&index=0&id=436b45ec&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/report/stock/Stock.vue?vue&type=style&index=0&id=436b45ec&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Stock.vue?vue&type=style&index=0&id=436b45ec&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/report/stock/Stock.vue?vue&type=style&index=0&id=436b45ec&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: Number,
    locale: {
      type: String,
      default: 'en'
    },
    currencyCode: {
      type: String,
      default: 'USD'
    },
    supplementalPrecision: {
      type: Number,
      default: 0
    },
    subunitsValue: {
      type: Boolean,
      default: false
    },
    subunitsToUnit: {
      type: Number,
      default: 1
    },
    hideSubunits: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    /////////////////////////////////////////////////////////////////////
    // Format money based on integer or floating input
    // ===============================================
    // Possible inputs are:
    // value:                 Numerical input (required)
    // locale:                Language and country information, such as 'en' or 'en-US'
    // currencyCode:          3-character cdde from ISO 4217
    // subunitsValue:         Value is denominated in subunits, such as cents
    // subunitsToUnits:       Overrides the minor unit value from ISO 4217. The "subunitsValue"
    //                        option is redundant if you enter a value for this
    // hideSubunits:          Set this to true if you don't want to display the subunits
    // supplementalPrecision: Allows you to display partial subunits . This is ignored if
    //                        you specify "hideSubunits=true"
    /////////////////////////////////////////////////////////////////////
    formatMoney: function(value, 
                          locale, 
                          currencyCode, 
                          subunitsValue, 
                          subunitsToUnit,
                          hideSubunits, 
                          supplementalPrecision) {
      let ret = 0;
      if (Number.isFinite(value)) {
        try {
          let numFormat = new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode });
          let options = numFormat.resolvedOptions();
          let fraction_digits = options.minimumFractionDigits;
          if (subunitsToUnit > 1) {
            value = value/subunitsToUnit;
          }
          else if (subunitsValue == true) {
            value = value/10 ** options.minimumFractionDigits;
          }
          if (hideSubunits == true) {
            numFormat = new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode, minimumFractionDigits: 0 , maximumFractionDigits: 0 });
          }
          else if (supplementalPrecision > 0) {
            numFormat = new Intl.NumberFormat(locale, { style: 'currency', 
              currency: currencyCode, 
              minimumFractionDigits: options.minimumFractionDigits + supplementalPrecision , 
              maximumFractionDigits: options.maximumFractionDigits + supplementalPrecision });
          }
          ret = numFormat.format(value);
        }
        catch (err) {
          ret = err.message;
        }
      }
      else {
        ret = '#NaN!';
      }
      return ret;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=template&id=82a851d4&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=template&id=82a851d4& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "money_format" }, [
    _vm._v(
      "\n  " +
        _vm._s(
          _vm.formatMoney(
            _vm.value,
            _vm.locale,
            _vm.currencyCode,
            _vm.subunitsValue,
            _vm.subunitsToUnit,
            _vm.hideSubunits,
            _vm.supplementalPrecision
          )
        ) +
        "\n"
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("vx-card", { staticClass: "overflow-hidden" }, [
    _c("div", { attrs: { slot: "no-body" }, slot: "no-body" }, [
      _c(
        "div",
        {
          staticClass: "p-6",
          class: {
            "flex justify-between flex-row-reverse items-center": _vm.iconRight,
            "text-center": !_vm.iconRight && _vm.hideChart,
            "pb-0": !_vm.hideChart
          }
        },
        [
          _c("feather-icon", {
            staticClass: "p-3 inline-flex rounded-full",
            class: ["text-" + _vm.color, { "mb-4": !_vm.iconRight }],
            style: { background: "rgba(var(--vs-" + _vm.color + "),.15)" },
            attrs: { icon: _vm.icon }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "truncate" }, [
            _c("h2", { staticClass: "mb-1 font-bold" }, [
              _vm._v(_vm._s(_vm.statistic))
            ]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.statisticTitle))])
          ])
        ],
        1
      ),
      _vm._v(" "),
      !_vm.hideChart
        ? _c(
            "div",
            { staticClass: "line-area-chart" },
            [
              _c("vue-apex-charts", {
                ref: "apexChart",
                attrs: {
                  type: _vm.type,
                  height: "100",
                  width: "100%",
                  options: _vm.chartOptions,
                  series: _vm.chartData
                }
              })
            ],
            1
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/report/stock/Stock.vue?vue&type=template&id=436b45ec&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/report/stock/Stock.vue?vue&type=template&id=436b45ec&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c("div", { staticClass: "vx-row" }, [
        _c(
          "div",
          { staticClass: "vx-col md:w-1/3 w-full" },
          [
            _c("statistics-card-line", {
              attrs: {
                hideChart: "",
                icon: "PackageIcon",
                "icon-right": "",
                statistic: _vm.all_report_stocks.length,
                statisticTitle: "ទំនិញសរុប"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col md:w-1/3 w-full" },
          [
            _c("statistics-card-line", {
              attrs: {
                hideChart: "",
                icon: "PackageIcon",
                "icon-right": "",
                statistic: _vm.out_stock_count,
                statisticTitle: "ទំនិញដាច់ស្តុក"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col w-full" },
          [
            _c(
              "vs-collapse",
              { attrs: { type: "margin" } },
              [
                _c(
                  "vs-collapse-item",
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _vm._v(
                        "\n                        បង្ហាញទំនិញដាច់ស្តុក\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "vs-list",
                      _vm._l(_vm.out_stock_product, function(item, index) {
                        return _c("vs-list-item", {
                          key: index,
                          attrs: {
                            title: "ID: " + item.id + " ឈ្មោះ​៖ " + item.name,
                            subtitle: "Description: " + item.description
                          }
                        })
                      }),
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "vx-row" }, [
        _c(
          "div",
          { staticClass: "vx-col w-full" },
          [
            _c("vue-instant", {
              staticClass: "mb-base",
              attrs: {
                id: "styles",
                "suggestion-attribute": "id",
                suggestions: _vm.all_report_stocks_id,
                type: "google"
              },
              on: {
                "click-button": _vm.searchStock,
                clear: function($event) {
                  _vm.data.id = ""
                  _vm.data.searchId = null
                }
              },
              model: {
                value: _vm.data.id,
                callback: function($$v) {
                  _vm.$set(_vm.data, "id", $$v)
                },
                expression: "data.id"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "vs-table",
        {
          attrs: {
            pagination: "",
            "max-items": "20",
            stripe: "",
            data: _vm.search_all_report_stocks
          },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var data = ref.data
                return _vm._l(data, function(item, index) {
                  return _c(
                    "vs-tr",
                    {
                      key: index,
                      class:
                        _vm.sum_qty(item.purchase_detail) <= 0
                          ? "text-danger"
                          : "",
                      attrs: { data: item }
                    },
                    [
                      _c("vs-td", { attrs: { data: item.id } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(item.id) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: item.name } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(item.name) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.sum_qty(item.purchase_detail)) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: item.unit } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(item.unit) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: item.category } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(item.category) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: item.brand } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(item.brand) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("template", { slot: "expand" }, [
                        _c("div", { staticClass: "w-full" }, [
                          _c("table", { staticClass: "expense" }, [
                            _c("thead", [
                              _c("tr", [
                                _c("th", { staticClass: "expense" }, [
                                  _vm._v("ល.រ"),
                                  _c("br"),
                                  _vm._v(
                                    "\n                                    No\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "expense" }, [
                                  _vm._v("អ្នកផ្គត់ផ្គង់"),
                                  _c("br"),
                                  _vm._v(
                                    "\n                                    Supplier\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "expense" }, [
                                  _vm._v("ចំនួន"),
                                  _c("br"),
                                  _vm._v(
                                    "\n                                    Qty\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "expense" }, [
                                  _vm._v("តម្លៃទិញ"),
                                  _c("br"),
                                  _vm._v(
                                    "\n                                    Purchase Price\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "expense" }, [
                                  _vm._v("តម្លៃលក់"),
                                  _c("br"),
                                  _vm._v(
                                    "\n                                    Sale Price\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "expense" }, [
                                  _vm._v("កាលបរិច្ឆេទ"),
                                  _c("br"),
                                  _vm._v(
                                    "\n                                    Date\n                                "
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(item.purchase_detail, function(
                                tr,
                                indextr
                              ) {
                                return _c("tr", { key: indextr }, [
                                  _c("td", { staticClass: "expense pl-3" }, [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(indextr + 1) +
                                        "\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "expense pl-3" }, [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(tr.supplier.name) +
                                        "\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "expense pl-3" }, [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(tr.remain_qty) +
                                        "\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "expense pl-3" },
                                    [
                                      _c("money-format", {
                                        attrs: {
                                          value: parseFloat(tr.purchase),
                                          locale: "en",
                                          "currency-code": "USD"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "expense pl-3" },
                                    [
                                      _c("money-format", {
                                        attrs: {
                                          value: parseFloat(tr.sale),
                                          locale: "en",
                                          "currency-code": "USD"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "expense pl-3" }, [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(tr.date) +
                                        "\n                                "
                                    )
                                  ])
                                ])
                              }),
                              0
                            )
                          ])
                        ])
                      ])
                    ],
                    2
                  )
                })
              }
            }
          ])
        },
        [
          _c(
            "template",
            { slot: "thead" },
            [
              _c("vs-th", { attrs: { "sort-key": "id" } }, [_vm._v("ID")]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "name" } }, [_vm._v("Name")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Qty")]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "unit" } }, [_vm._v("Unit")]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "category" } }, [
                _vm._v("Category")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "brand" } }, [_vm._v("Brand")])
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-money-format/src/components/MoneyFormat.vue":
/*!**********************************************************************!*\
  !*** ./node_modules/vue-money-format/src/components/MoneyFormat.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MoneyFormat_vue_vue_type_template_id_82a851d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MoneyFormat.vue?vue&type=template&id=82a851d4& */ "./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=template&id=82a851d4&");
/* harmony import */ var _MoneyFormat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoneyFormat.vue?vue&type=script&lang=js& */ "./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MoneyFormat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MoneyFormat_vue_vue_type_template_id_82a851d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MoneyFormat_vue_vue_type_template_id_82a851d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-money-format/src/components/MoneyFormat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_MoneyFormat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib??vue-loader-options!./MoneyFormat.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_MoneyFormat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=template&id=82a851d4&":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=template&id=82a851d4& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MoneyFormat_vue_vue_type_template_id_82a851d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../vue-loader/lib??vue-loader-options!./MoneyFormat.vue?vue&type=template&id=82a851d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-money-format/src/components/MoneyFormat.vue?vue&type=template&id=82a851d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MoneyFormat_vue_vue_type_template_id_82a851d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MoneyFormat_vue_vue_type_template_id_82a851d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-money-format/src/main.js":
/*!***************************************************!*\
  !*** ./node_modules/vue-money-format/src/main.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_MoneyFormat_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MoneyFormat.vue */ "./node_modules/vue-money-format/src/components/MoneyFormat.vue");


/* harmony default export */ __webpack_exports__["default"] = (_components_MoneyFormat_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&");
/* harmony import */ var _StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatisticsCardLine.vue?vue&type=script&lang=js& */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/statistics-cards/StatisticsCardLine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticsCardLine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/statistics-cards/chartConfigs.js":
/*!**********************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/chartConfigs.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  areaChartOptions: {
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2.5
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.5,
        opacityTo: 0.2,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      type: 'numeric',
      lines: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      }
    },
    yaxis: [{
      y: 0,
      offsetX: 0,
      offsetY: 0,
      padding: {
        left: 0,
        right: 0
      }
    }],
    tooltip: {
      x: {
        show: false
      }
    }
  },
  lineChartOptions: {
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    chart: {
      type: 'line',
      dropShadow: {
        enabled: true,
        top: 5,
        left: 0,
        blur: 4,
        opacity: 0.10
      },
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      width: 5,
      curve: 'smooth'
    },
    xaxis: {
      type: 'numeric'
    },
    // colors: ['#7367F0'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        // gradientToColors: ['#A9A2F6'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      }
    },
    markers: {
      size: 0,
      hover: {
        size: 5
      }
    },
    tooltip: {
      x: {
        show: false
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/report/stock/Stock.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/report/stock/Stock.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stock_vue_vue_type_template_id_436b45ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stock.vue?vue&type=template&id=436b45ec&scoped=true& */ "./resources/js/src/views/report/stock/Stock.vue?vue&type=template&id=436b45ec&scoped=true&");
/* harmony import */ var _Stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stock.vue?vue&type=script&lang=js& */ "./resources/js/src/views/report/stock/Stock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Stock_vue_vue_type_style_index_0_id_436b45ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stock.vue?vue&type=style&index=0&id=436b45ec&scoped=true&lang=css& */ "./resources/js/src/views/report/stock/Stock.vue?vue&type=style&index=0&id=436b45ec&scoped=true&lang=css&");
/* harmony import */ var _Stock_vue_vue_type_style_index_1_lang_sass___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Stock.vue?vue&type=style&index=1&lang=sass& */ "./resources/js/src/views/report/stock/Stock.vue?vue&type=style&index=1&lang=sass&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Stock_vue_vue_type_template_id_436b45ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Stock_vue_vue_type_template_id_436b45ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "436b45ec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/report/stock/Stock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/report/stock/Stock.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/report/stock/Stock.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Stock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/report/stock/Stock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/report/stock/Stock.vue?vue&type=style&index=0&id=436b45ec&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/report/stock/Stock.vue?vue&type=style&index=0&id=436b45ec&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_style_index_0_id_436b45ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Stock.vue?vue&type=style&index=0&id=436b45ec&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/report/stock/Stock.vue?vue&type=style&index=0&id=436b45ec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_style_index_0_id_436b45ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_style_index_0_id_436b45ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_style_index_0_id_436b45ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_style_index_0_id_436b45ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_style_index_0_id_436b45ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/report/stock/Stock.vue?vue&type=style&index=1&lang=sass&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/report/stock/Stock.vue?vue&type=style&index=1&lang=sass& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_style_index_1_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Stock.vue?vue&type=style&index=1&lang=sass& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/report/stock/Stock.vue?vue&type=style&index=1&lang=sass&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_style_index_1_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_style_index_1_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_style_index_1_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_style_index_1_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_style_index_1_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/report/stock/Stock.vue?vue&type=template&id=436b45ec&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/report/stock/Stock.vue?vue&type=template&id=436b45ec&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_template_id_436b45ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Stock.vue?vue&type=template&id=436b45ec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/report/stock/Stock.vue?vue&type=template&id=436b45ec&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_template_id_436b45ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_vue_vue_type_template_id_436b45ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);