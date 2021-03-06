(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/addSupplier.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/purchase/addSupplier.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_addUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product/addUnit */ "./resources/js/src/views/product/addUnit.vue");
/* harmony import */ var _product_addCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product/addCategory */ "./resources/js/src/views/product/addCategory.vue");
/* harmony import */ var _product_addBrand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product/addBrand */ "./resources/js/src/views/product/addBrand.vue");
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
  name: "addSupplier",
  components: {
    AddBrand: _product_addBrand__WEBPACK_IMPORTED_MODULE_4__["default"],
    AddCategory: _product_addCategory__WEBPACK_IMPORTED_MODULE_3__["default"],
    AddUnit: _product_addUnit__WEBPACK_IMPORTED_MODULE_2__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      //supplier
      supplier: {
        name: null,
        company: null,
        contact: null,
        note: null,
        address: null
      }
    };
  },
  computed: {
    all_units: function all_units() {
      return this.$store.getters.all_unit;
    },
    all_categories: function all_categories() {
      return this.$store.getters.all_category;
    },
    all_brands: function all_brands() {
      return this.$store.getters.all_brand;
    }
  },
  methods: {
    show: function show() {
      this.$modal.show('add-supplier');
    },
    //store
    storeSupplier: function storeSupplier() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          self.$vs.loading();
          self.$store.dispatch('storeSupplier', self.supplier).then(function (data) {
            if (data) {
              self.$vs.notify({
                time: 4000,
                title: 'ប្រតិបត្តិការជោគជ័យ',
                text: 'ទិន្នន័យបានបន្ថែម',
                color: 'success',
                iconPack: 'feather',
                icon: 'icon-check',
                position: 'top-center'
              });
              self.resetField();
            } else {
              self.$vs.notify({
                title: 'ប្រតិបត្តិការបរាជ័យ',
                text: 'ទិន្នន័យមិនបានបន្ថែម',
                color: 'danger',
                iconPack: 'feather',
                icon: 'icon-message-square',
                position: 'top-center'
              });
            }

            self.$vs.loading.close();
          });
        } else {
          self.$vs.notify({
            title: 'ប្រតិបត្តិការបរាជ័យ',
            text: 'សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ',
            color: 'danger',
            iconPack: 'feather',
            icon: 'icon-message-square',
            position: 'top-center'
          });
        }
      });
    },
    resetField: function resetField() {
      this.product = {
        name: '',
        description: '',
        unit: 'ដំុ',
        category: 'គ្រឿងក្រោម',
        brand: 'AKA',
        inventory_type: 'inventory_part',
        purchase: 1,
        sale: 1,
        image: 'placeholder/placeholder.png'
      };
    },
    //image upload
    successUpload: function successUpload(file, res) {
      this.product.image = res.path;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/showPurchase.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/purchase/showPurchase.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.min.css */ "./node_modules/flatpickr/dist/flatpickr.min.css");
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _product_addUnit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product/addUnit */ "./resources/js/src/views/product/addUnit.vue");
/* harmony import */ var _product_addCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product/addCategory */ "./resources/js/src/views/product/addCategory.vue");
/* harmony import */ var _product_addBrand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product/addBrand */ "./resources/js/src/views/product/addBrand.vue");
/* harmony import */ var _addSupplier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addSupplier */ "./resources/js/src/views/purchase/addSupplier.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _xkeshi_vue_barcode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @xkeshi/vue-barcode */ "./node_modules/@xkeshi/vue-barcode/dist/vue-barcode.esm.js");
/* harmony import */ var vue_money_format__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-money-format */ "./node_modules/vue-money-format/src/main.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "showPurchase",
  components: {
    AddSupplier: _addSupplier__WEBPACK_IMPORTED_MODULE_6__["default"],
    AddBrand: _product_addBrand__WEBPACK_IMPORTED_MODULE_5__["default"],
    AddCategory: _product_addCategory__WEBPACK_IMPORTED_MODULE_4__["default"],
    AddUnit: _product_addUnit__WEBPACK_IMPORTED_MODULE_3__["default"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_7___default.a,
    'bar-code': _xkeshi_vue_barcode__WEBPACK_IMPORTED_MODULE_8__["default"],
    'money-format': vue_money_format__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      output: null,
      purchase: {
        id: null,
        supplier: {
          name: ''
        },
        location: 'Ly Put Garage',
        purchase_date: null,
        purchase_status: 'pending',
        description: '',
        total_balance: null,
        balance: null,
        due_balance: 0,
        amount: 0,
        qty: 0,
        items: [{
          id: '',
          name: null,
          description: null,
          qty: 1,
          purchase_price: 1,
          sale_price: 1,
          amount: 1
        }]
      }
    };
  },
  methods: {
    printHtml: function printHtml() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                $("#printMe").printThis({
                  pageTitle: "Print Invoice No: ".concat(_this.purchase.id),
                  beforePrintEvent: function beforePrintEvent() {
                    console.log('after before print printing');
                  },
                  // function for printEvent in iframe
                  beforePrint: function beforePrint() {
                    console.log('before print printing');
                  },
                  // function called before iframe is filled
                  afterPrint: function afterPrint() {
                    console.log('after print printing');
                  } // function called before iframe is removed

                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    show: function show(data) {
      var self = this;
      this.$modal.show('show-purchase');
      this.purchase.id = data.id;
      this.purchase.supplier = data.supplier;
      this.purchase.location = data.location;
      this.purchase.purchase_date = data.date;
      this.purchase.purchase_status = data.purchase_status;
      this.purchase.description = data.description;
      this.purchase.balance = data.balance;
      this.purchase.amount = data.amount;
      this.purchase.due_balance = data.due_balance;
      self.purchase.items = [];
      data.purchase_detail.forEach(function (item, index) {
        self.purchase.items.push({
          id: item.product,
          name: item.product.name,
          description: item.product.description,
          qty: item.qty,
          purchase_price: item.purchase,
          sale_price: item.sale,
          amount: item.amount
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/addSupplier.vue?vue&type=template&id=d98fabee&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/purchase/addSupplier.vue?vue&type=template&id=d98fabee&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "modal",
        {
          attrs: {
            width: "60%",
            height: "auto",
            scrollable: true,
            pivotY: 0.2,
            clickToClose: false,
            name: "add-supplier"
          }
        },
        [
          _c("div", { staticClass: "flex justify-end" }, [
            _c(
              "i",
              {
                staticClass:
                  "vs-icon vs-popup--close material-icons text-warning",
                staticStyle: { background: "rgb(255, 255, 255)" },
                on: {
                  click: function($event) {
                    return _vm.$modal.hide("add-supplier")
                  }
                }
              },
              [_vm._v("close")]
            )
          ]),
          _vm._v(" "),
          _c(
            "vx-card",
            { attrs: { "no-shadow": "" } },
            [
              _c("div", { staticClass: "vx-row" }, [
                _c("div", { staticClass: "vx-col md:w-2/3 w-full" }, [
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("vs-input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          staticClass: "w-full",
                          attrs: { "label-placeholder": "ឈ្មោះ", name: "name" },
                          model: {
                            value: _vm.supplier.name,
                            callback: function($$v) {
                              _vm.$set(_vm.supplier, "name", $$v)
                            },
                            expression: "supplier.name"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("name"),
                                expression: "errors.has('name')"
                              }
                            ],
                            staticClass: "text-danger text-sm"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("name")))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("vs-input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          staticClass: "w-full",
                          attrs: {
                            "label-placeholder": "ឈ្មោះក្រុមហ៊ុន",
                            name: "company"
                          },
                          model: {
                            value: _vm.supplier.company,
                            callback: function($$v) {
                              _vm.$set(_vm.supplier, "company", $$v)
                            },
                            expression: "supplier.company"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("company"),
                                expression: "errors.has('company')"
                              }
                            ],
                            staticClass: "text-danger text-sm"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("company")))]
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
                        _c("label", [_vm._v("ទំនាក់ទំនង")]),
                        _vm._v(" "),
                        _c("vs-textarea", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          staticClass: "w-full",
                          attrs: { label: "ទំនាក់ទំនង", name: "contact" },
                          model: {
                            value: _vm.supplier.contact,
                            callback: function($$v) {
                              _vm.$set(_vm.supplier, "contact", $$v)
                            },
                            expression: "supplier.contact"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("contact"),
                                expression: "errors.has('contact')"
                              }
                            ],
                            staticClass: "text-danger text-sm"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("contact")))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col w-full" },
                      [
                        _c("label", [_vm._v("សំគាល់")]),
                        _vm._v(" "),
                        _c("vs-textarea", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          staticClass: "w-full",
                          attrs: { label: "សំគាល់", name: "note" },
                          model: {
                            value: _vm.supplier.note,
                            callback: function($$v) {
                              _vm.$set(_vm.supplier, "note", $$v)
                            },
                            expression: "supplier.note"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("note"),
                                expression: "errors.has('note')"
                              }
                            ],
                            staticClass: "text-danger text-sm"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("note")))]
                        )
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col md:w-1/3 w-full" },
                  [
                    _c("label", [_vm._v("អាស័យដ្ឋាន")]),
                    _vm._v(" "),
                    _c("vs-textarea", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "w-full",
                      attrs: { label: "អាស័យដ្ឋាន", name: "address" },
                      model: {
                        value: _vm.supplier.address,
                        callback: function($$v) {
                          _vm.$set(_vm.supplier, "address", $$v)
                        },
                        expression: "supplier.address"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("address"),
                            expression: "errors.has('address')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("address")))]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("vs-divider"),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex justify-end btn-group" },
                [
                  _c(
                    "vs-button",
                    {
                      attrs: {
                        icon: "icon-save",
                        "icon-pack": "feather",
                        type: "relief"
                      },
                      on: { click: _vm.storeSupplier }
                    },
                    [_vm._v("រក្សាទុក")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("add-unit", { ref: "addUnit" }),
      _vm._v(" "),
      _c("add-category", { ref: "addCategory" }),
      _vm._v(" "),
      _c("add-brand", { ref: "addBrand" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/showPurchase.vue?vue&type=template&id=c4f0d25c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/purchase/showPurchase.vue?vue&type=template&id=c4f0d25c&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c(
        "modal",
        {
          attrs: {
            width: "60%",
            height: "auto",
            scrollable: true,
            pivotY: 0.2,
            clickToClose: false,
            name: "show-purchase"
          }
        },
        [
          _c("div", { staticClass: "flex justify-end" }, [
            _c(
              "i",
              {
                staticClass:
                  "vs-icon vs-popup--close material-icons text-warning",
                staticStyle: { background: "rgb(255, 255, 255)" },
                on: {
                  click: function($event) {
                    return _vm.$modal.hide("show-purchase")
                  }
                }
              },
              [_vm._v("close")]
            )
          ]),
          _vm._v(" "),
          _c("vx-card", { attrs: { "no-shadow": "" } }, [
            _c(
              "div",
              { attrs: { id: "printMe" } },
              [
                _c("table", { staticClass: "custom" }, [
                  _c("tr", [
                    _c("td", { staticClass: "custom" }, [
                      _vm._v("អ្នកផ្គត់ផ្គង់")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "custom" }, [
                      _vm._v("Purchase Status")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "custom" }, [
                      _vm._v("ទីតាំងទិញចូល")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "custom" }, [_vm._v("ពិពណ៌នា")]),
                    _vm._v(" "),
                    _c("td", { staticClass: "custom" }, [
                      _vm._v("ថ្ងៃខែឆ្នាំទិញចូល")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "custom" }, [_vm._v("Barcode")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "custom" }, [
                      _vm._v(
                        "\n                            ឈ្មោះ: " +
                          _vm._s(_vm.purchase.supplier.name)
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                            ក្រុមហ៊ុន: " +
                          _vm._s(_vm.purchase.supplier.company)
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                            ទំនាក់ទំនង: " +
                          _vm._s(_vm.purchase.supplier.contact)
                      ),
                      _c("br")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "custom" }, [
                      _vm._v(_vm._s(_vm.purchase.purchase_status))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "custom" }, [
                      _vm._v(_vm._s(_vm.purchase.location))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "custom" }, [
                      _vm._v(_vm._s(_vm.purchase.description))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "custom" }, [
                      _vm._v(_vm._s(_vm.purchase.purchase_date))
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "p-2" },
                      [
                        _c("bar-code", {
                          attrs: {
                            value: _vm.purchase.id,
                            tag: "img",
                            options: { displayValue: true }
                          }
                        })
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("vs-divider"),
                _vm._v(" "),
                _c("table", { staticClass: "custom" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", { staticClass: "custom" }, [_vm._v("ល.រ")]),
                      _vm._v(" "),
                      _c("th", { staticClass: "custom" }, [_vm._v("ឈ្មោះ")]),
                      _vm._v(" "),
                      _c("th", { staticClass: "custom" }, [_vm._v("ពិពណ៌នា")]),
                      _vm._v(" "),
                      _c("th", { staticClass: "custom" }, [_vm._v("ចំនួន")]),
                      _vm._v(" "),
                      _c("th", { staticClass: "custom" }, [_vm._v("តម្លៃទិញ")]),
                      _vm._v(" "),
                      _c("th", { staticClass: "custom" }, [_vm._v("តម្លៃលក់")]),
                      _vm._v(" "),
                      _c("th", { staticClass: "custom" }, [_vm._v("សរុប")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.purchase.items, function(tr, indextr) {
                      return _c("tr", { key: indextr }, [
                        _c("td", { staticClass: "pl-2 custom" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(indextr + 1) +
                              "\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "pl-2 custom" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(tr.name) +
                              "\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "pl-2 custom" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(tr.description) +
                              "\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "pl-2 custom" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(tr.qty) +
                              "\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "pl-2 custom" },
                          [
                            _c("money-format", {
                              attrs: {
                                value: parseFloat(tr.purchase_price),
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
                          { staticClass: "pl-2 custom" },
                          [
                            _c("money-format", {
                              attrs: {
                                value: parseFloat(tr.sale_price),
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
                          { staticClass: "pl-2 custom" },
                          [
                            _c("money-format", {
                              attrs: {
                                value: (tr.amount = tr.purchase_price * tr.qty),
                                locale: "en",
                                "currency-code": "USD"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("tfoot", [
                    _c("tr", [
                      _c("td", { staticClass: "custom" }),
                      _vm._v(" "),
                      _c("td", { staticClass: "custom" }),
                      _vm._v(" "),
                      _c("td", { staticClass: "custom" }),
                      _vm._v(" "),
                      _c("td", { staticClass: "custom" }),
                      _vm._v(" "),
                      _c("td", { staticClass: "custom" }),
                      _vm._v(" "),
                      _c("td", { staticClass: "md:text-right" }, [
                        _vm._v(
                          "\n                            សរុប\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "pl-2 custom" }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.$formatter.format(_vm.purchase.amount)) +
                            "\n                        "
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col md:w-1/2 w-full" },
                    [
                      _c("vs-divider", { attrs: { position: "left" } }, [
                        _vm._v("Payment")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "vx-row" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col md:w-1/2 print:w-1/2 w-full" },
                          [
                            _c("label", [_vm._v("ប្រាក់ទិញទំនិញ")]),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(
                                    _vm.$formatter.format(_vm.purchase.balance)
                                  ) +
                                  "\n                                "
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "vx-col md:w-1/2 print:w-1/2 w-full" },
                          [
                            _c("label", [_vm._v("ទឹកប្រាក់ជំពាក់")]),
                            _vm._v(" "),
                            _c("money-format", {
                              attrs: {
                                value: parseFloat(_vm.purchase.due_balance),
                                locale: "en",
                                "currency-code": "USD"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("img", { attrs: { src: _vm.output, alt: "" } }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex justify-end btn-group" },
              [
                _c(
                  "vs-button",
                  {
                    attrs: {
                      icon: "icon-printer",
                      "icon-pack": "feather",
                      type: "relief"
                    },
                    on: { click: _vm.printHtml }
                  },
                  [_vm._v("បោះពុម្ភ\n                ")]
                )
              ],
              1
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("add-supplier", { ref: "addSupplier" }),
      _vm._v(" "),
      _c("add-unit", { ref: "addUnit" }),
      _vm._v(" "),
      _c("add-category", { ref: "addCategory" }),
      _vm._v(" "),
      _c("add-brand", { ref: "addBrand" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/purchase/addSupplier.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/purchase/addSupplier.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addSupplier_vue_vue_type_template_id_d98fabee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addSupplier.vue?vue&type=template&id=d98fabee&scoped=true& */ "./resources/js/src/views/purchase/addSupplier.vue?vue&type=template&id=d98fabee&scoped=true&");
/* harmony import */ var _addSupplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addSupplier.vue?vue&type=script&lang=js& */ "./resources/js/src/views/purchase/addSupplier.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addSupplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addSupplier_vue_vue_type_template_id_d98fabee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addSupplier_vue_vue_type_template_id_d98fabee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d98fabee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/purchase/addSupplier.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/purchase/addSupplier.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/purchase/addSupplier.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addSupplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addSupplier.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/addSupplier.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addSupplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/purchase/addSupplier.vue?vue&type=template&id=d98fabee&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/purchase/addSupplier.vue?vue&type=template&id=d98fabee&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addSupplier_vue_vue_type_template_id_d98fabee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addSupplier.vue?vue&type=template&id=d98fabee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/addSupplier.vue?vue&type=template&id=d98fabee&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addSupplier_vue_vue_type_template_id_d98fabee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addSupplier_vue_vue_type_template_id_d98fabee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/purchase/showPurchase.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/purchase/showPurchase.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showPurchase_vue_vue_type_template_id_c4f0d25c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showPurchase.vue?vue&type=template&id=c4f0d25c&scoped=true& */ "./resources/js/src/views/purchase/showPurchase.vue?vue&type=template&id=c4f0d25c&scoped=true&");
/* harmony import */ var _showPurchase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showPurchase.vue?vue&type=script&lang=js& */ "./resources/js/src/views/purchase/showPurchase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _showPurchase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _showPurchase_vue_vue_type_template_id_c4f0d25c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _showPurchase_vue_vue_type_template_id_c4f0d25c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c4f0d25c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/purchase/showPurchase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/purchase/showPurchase.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/purchase/showPurchase.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showPurchase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./showPurchase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/showPurchase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showPurchase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/purchase/showPurchase.vue?vue&type=template&id=c4f0d25c&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/purchase/showPurchase.vue?vue&type=template&id=c4f0d25c&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showPurchase_vue_vue_type_template_id_c4f0d25c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./showPurchase.vue?vue&type=template&id=c4f0d25c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/showPurchase.vue?vue&type=template&id=c4f0d25c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showPurchase_vue_vue_type_template_id_c4f0d25c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showPurchase_vue_vue_type_template_id_c4f0d25c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);