(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/flatpickr/dist/flatpickr.min.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./node_modules/flatpickr/dist/flatpickr.min.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/postcss-loader/src/index.js):\nError: ENOENT: no such file or directory, open '/home/tunchamroeun/Documents/siqware.com/garage/node_modules/flatpickr/dist/flatpickr.min.css'");

/***/ }),

/***/ "./node_modules/flatpickr/dist/flatpickr.js":
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/flatpickr.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/tunchamroeun/Documents/siqware.com/garage/node_modules/flatpickr/dist/flatpickr.js'");

/***/ }),

/***/ "./node_modules/flatpickr/dist/flatpickr.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/flatpickr/dist/flatpickr.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--7-1!../../postcss-loader/src??ref--7-2!./flatpickr.min.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/flatpickr/dist/flatpickr.min.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/flatpickr.js")):undefined}("undefined"!=typeof self?self:this,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(e,n){e.exports=t},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=["onChange","onClose","onDestroy","onMonthChange","onOpen","onYearChange"];function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var a=function(t){return u({},t)},f=i.concat(["onValueUpdate","onDayCreate","onParseConfig","onReady","onPreCalendarPosition","onKeyDown"]),l=["locale","showMonths"],s={name:"flat-pickr",render:function(t){return t("input",{attrs:{type:"text","data-input":!0},props:{disabled:this.disabled},on:{input:this.onInput}})},props:{value:{default:null,required:!0,validator:function(t){return null===t||t instanceof Date||"string"==typeof t||t instanceof String||t instanceof Array||"number"==typeof t}},config:{type:Object,default:function(){return{wrap:!1,defaultDate:null}}},events:{type:Array,default:function(){return i}},disabled:{type:Boolean,default:!1}},data:function(){return{fp:null}},mounted:function(){var t=this;if(!this.fp){var e=a(this.config);this.events.forEach(function(n){var r,i=o.a.defaultConfig[n]||[];e[n]=(r=e[n]||[],r instanceof Array?r:[r]).concat(i,function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i;t.$emit.apply(t,[(i=n,i.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())].concat(r))})}),e.defaultDate=this.value||e.defaultDate,this.fp=new o.a(this.getElem(),e),this.fpInput().addEventListener("blur",this.onBlur),this.$watch("disabled",this.watchDisabled,{immediate:!0})}},methods:{getElem:function(){return this.config.wrap?this.$el.parentNode:this.$el},onInput:function(t){var e=this,n=t.target;this.$nextTick(function(){e.$emit("input",n.value)})},fpInput:function(){return this.fp.altInput||this.fp.input},onBlur:function(t){this.$emit("blur",t.target.value)},watchDisabled:function(t){t?this.fpInput().setAttribute("disabled",t):this.fpInput().removeAttribute("disabled")}},watch:{config:{deep:!0,handler:function(t){var e=this,n=a(t);f.forEach(function(t){delete n[t]}),this.fp.set(n),l.forEach(function(t){void 0!==n[t]&&e.fp.set(t,n[t])})}},value:function(t){t!==this.$el.value&&this.fp&&this.fp.setDate(t,!0)}},beforeDestroy:function(){this.fp&&(this.fpInput().removeEventListener("blur",this.onBlur),this.fp.destroy(),this.fp=null)}};n.d(e,"Plugin",function(){return c}),n.d(e,"Component",function(){return s});var c=function(t,e){var n="flat-pickr";"string"==typeof e&&(n=e),t.component(n,s)};s.install=c;e.default=s}]).default});

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


/***/ })

}]);