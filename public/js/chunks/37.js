(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/Product.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/product/Product.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _addProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProduct */ "./resources/js/src/views/product/addProduct.vue");
/* harmony import */ var _editProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editProduct */ "./resources/js/src/views/product/editProduct.vue");
/* harmony import */ var _printLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./printLabel */ "./resources/js/src/views/product/printLabel.vue");
/* harmony import */ var vue_json_excel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-json-excel */ "./node_modules/vue-json-excel/JsonExcel.vue");


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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Product",
  components: {
    PrintLabel: _printLabel__WEBPACK_IMPORTED_MODULE_3__["default"],
    EditProduct: _editProduct__WEBPACK_IMPORTED_MODULE_2__["default"],
    AddProduct: _addProduct__WEBPACK_IMPORTED_MODULE_1__["default"],
    'downloadExcel': vue_json_excel__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      product_id: '',
      selected: []
    };
  },
  created: function created() {
    // Add barcode scan listener and pass the callback function
    this.$barcodeScanner.init(this.onBarcodeScanned);
  },
  destroyed: function destroyed() {
    // Remove listener when component is destroyed
    this.$barcodeScanner.destroy();
  },
  computed: {
    all_about: function all_about() {
      return this.$store.getters.all_about;
    },
    all_product: function all_product() {
      return this.$store.getters.all_product;
    },
    search_all_product: function search_all_product() {
      var self = this;
      return self.all_product.filter(function (x) {
        return self.product_id ? x.id === parseInt(self.product_id) : true;
      });
    },
    suggestion_all_product: function suggestion_all_product() {
      var self = this;
      return self.all_product.map(function (x) {
        return {
          id: String(x.id)
        };
      });
    }
  },
  methods: {
    // Create callback function to receive barcode when the scanner is already done
    onBarcodeScanned: function onBarcodeScanned(barcode) {
      var event = window.event;

      if (event.keyCode === 13) {
        event.preventDefault();
      }

      this.product_id = String(parseInt(barcode));
    },
    //destroy
    destroyProduct: function () {
      var _destroyProduct = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var self, promises;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = this;
                self.$vs.loading();
                promises = self.selected.map(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return self.$store.dispatch('destroyProduct', data.id);

                          case 2:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());
                _context2.next = 5;
                return Promise.all(promises).then(function () {
                  self.$vs.notify({
                    time: 4000,
                    title: 'ប្រតិបត្តិការជោគជ័យ',
                    text: 'ទិន្នន័យបានលុប',
                    color: 'success',
                    iconPack: 'feather',
                    icon: 'icon-check',
                    position: 'top-center'
                  });
                  self.selected = [];
                  self.$vs.loading.close();
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function destroyProduct() {
        return _destroyProduct.apply(this, arguments);
      }

      return destroyProduct;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/addProduct.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/product/addProduct.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _addUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addUnit */ "./resources/js/src/views/product/addUnit.vue");
/* harmony import */ var _addCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addCategory */ "./resources/js/src/views/product/addCategory.vue");
/* harmony import */ var _addBrand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addBrand */ "./resources/js/src/views/product/addBrand.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "addProduct",
  components: {
    AddBrand: _addBrand__WEBPACK_IMPORTED_MODULE_4__["default"],
    AddCategory: _addCategory__WEBPACK_IMPORTED_MODULE_3__["default"],
    AddUnit: _addUnit__WEBPACK_IMPORTED_MODULE_2__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a,
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  data: function data() {
    return {
      product: {
        name: '',
        description: '',
        unit: {
          name: 'ដំុ'
        },
        category: {
          name: 'RX300'
        },
        brand: {
          name: 'Toyota'
        },
        inventory_type: 'inventory_part',
        default_purchase: 1,
        default_sale: 1,
        image: 'images/placeholder/placeholder.png'
      },
      //dropzone option
      dropzoneOptions: {
        url: route('file.upload.thumb'),
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: "ដាក់រូបភាពទំនិញបើមាន",
        thumbnailWidth: 150,
        thumbnailHeight: 150
      }
    };
  },
  computed: {
    all_product: function all_product() {
      return this.$store.getters.all_product;
    },
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
      this.$modal.show('add');
    },
    //store
    storeProduct: function storeProduct() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          self.$vs.loading();
          self.$store.dispatch('storeProduct', self.product).then(function (data) {
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
        unit: {
          name: 'ដំុ'
        },
        category: {
          name: 'RX300'
        },
        brand: {
          name: 'Toyota'
        },
        inventory_type: 'inventory_part',
        default_purchase: 1,
        default_sale: 1,
        image: 'images/placeholder/placeholder.png'
      };
    },
    //image upload
    successUpload: function successUpload(file, res) {
      this.product.image = res.path;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/printLabel.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/product/printLabel.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _xkeshi_vue_barcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xkeshi/vue-barcode */ "./node_modules/@xkeshi/vue-barcode/dist/vue-barcode.esm.js");
//
//
//
//
//
//
//
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
  name: "printLabel",
  components: {
    'bar-code': _xkeshi_vue_barcode__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      data: {
        products: [{
          name: 'name',
          id: 1
        }]
      }
    };
  },
  methods: {
    show: function show(data) {
      var self = this;
      self.$refs.printLabel.open();
      self.data.products = data;
    },
    printHtml: function printHtml() {
      $("#printMe").printThis({
        pageTitle: "Print Invoice No: 1",
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
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/addProduct.vue?vue&type=style&index=0&id=33a86fb8&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/product/addProduct.vue?vue&type=style&index=0&id=33a86fb8&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*@import \"../../../../sass/vue-instant/vue-instant-input.css\";*/", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/addProduct.vue?vue&type=style&index=0&id=33a86fb8&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/product/addProduct.vue?vue&type=style&index=0&id=33a86fb8&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addProduct.vue?vue&type=style&index=0&id=33a86fb8&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/addProduct.vue?vue&type=style&index=0&id=33a86fb8&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/Product.vue?vue&type=template&id=0cc2f215&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/product/Product.vue?vue&type=template&id=0cc2f215&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        { staticClass: "flex btn-group" },
        [
          _c(
            "vs-button",
            {
              attrs: {
                type: "relief",
                "icon-pack": "feather",
                icon: "icon-plus-square"
              },
              on: {
                click: function($event) {
                  return _vm.$refs.addProduct.show()
                }
              }
            },
            [_vm._v("បន្ថែម")]
          ),
          _vm._v(" "),
          _vm.selected.length === 1
            ? _c(
                "vs-button",
                {
                  attrs: {
                    color: "warning",
                    type: "relief",
                    "icon-pack": "feather",
                    icon: "icon-edit"
                  },
                  on: {
                    click: function($event) {
                      return _vm.$refs.editProduct.show(_vm.selected[0])
                    }
                  }
                },
                [_vm._v("កែប្រែ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.selected.length
            ? _c(
                "vs-button",
                {
                  attrs: {
                    color: "success",
                    type: "relief",
                    "icon-pack": "feather",
                    icon: "icon-printer"
                  },
                  on: {
                    click: function($event) {
                      return _vm.$refs.printLabel.show(_vm.selected)
                    }
                  }
                },
                [_vm._v("Print Label")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.selected.length
            ? _c(
                "vs-button",
                {
                  attrs: {
                    color: "danger",
                    type: "relief",
                    "icon-pack": "feather",
                    icon: "icon-trash-2"
                  },
                  on: { click: _vm.destroyProduct }
                },
                [_vm._v("លុប")]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex justify-end" },
        [
          _vm.selected.length
            ? _c(
                "download-excel",
                { attrs: { data: _vm.selected } },
                [
                  _c(
                    "vs-button",
                    {
                      attrs: {
                        type: "relief",
                        "icon-pack": "feather",
                        icon: "icon-download"
                      }
                    },
                    [_vm._v("Excel Export")]
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("vue-instant", {
        staticClass: "mt-base",
        attrs: {
          id: "purchase_pen",
          "suggestion-attribute": "id",
          suggestions: _vm.suggestion_all_product,
          type: "google"
        },
        on: {
          clear: function($event) {
            _vm.product_id = ""
          }
        },
        model: {
          value: _vm.product_id,
          callback: function($$v) {
            _vm.product_id = $$v
          },
          expression: "product_id"
        }
      }),
      _vm._v(" "),
      _c(
        "vs-table",
        {
          attrs: {
            multiple: "",
            pagination: "",
            "max-items": "10",
            search: "",
            data: _vm.search_all_product
          },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var data = ref.data
                return _vm._l(data, function(tr, indextr) {
                  return _c(
                    "vs-tr",
                    { key: indextr, attrs: { data: tr } },
                    [
                      _c("vs-td", { attrs: { data: data[indextr].id } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(data[indextr].id) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: data[indextr].name } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(data[indextr].name) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        { attrs: { data: data[indextr].description } },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(data[indextr].description) +
                              "\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: data[indextr].unit } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(data[indextr].unit) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: data[indextr].category } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(data[indextr].category) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: data[indextr].brand } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(data[indextr].brand) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        { attrs: { data: data[indextr].inventory_type } },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(data[indextr].inventory_type) +
                              "\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        { attrs: { data: data[indextr].default_purchase } },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(data[indextr].default_purchase) +
                              "\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        { attrs: { data: data[indextr].default_sale } },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(data[indextr].default_sale) +
                              "\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        { attrs: { data: data[indextr].created_at } },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(data[indextr].created_at) +
                              "\n                "
                          )
                        ]
                      )
                    ],
                    1
                  )
                })
              }
            }
          ]),
          model: {
            value: _vm.selected,
            callback: function($$v) {
              _vm.selected = $$v
            },
            expression: "selected"
          }
        },
        [
          _c(
            "template",
            { slot: "thead" },
            [
              _c("vs-th", { attrs: { "sort-key": "id" } }, [_vm._v("ល.រ")]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "name" } }, [_vm._v("ឈ្មោះ")]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "description" } }, [
                _vm._v("ពិពណ៌នា")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "unit" } }, [_vm._v("Unit")]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "category" } }, [
                _vm._v("ប្រភេទ")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "brand" } }, [
                _vm._v("Brand")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "inventory_type" } }, [
                _vm._v("Inventory Type")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "purchase" } }, [
                _vm._v("តម្លៃទិញ")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "sale" } }, [
                _vm._v("តម្លៃលក់")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "created_at" } }, [
                _vm._v("កាលបរិច្ឆេទ")
              ])
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c("add-product", { ref: "addProduct" }),
      _vm._v(" "),
      _c("edit-product", {
        ref: "editProduct",
        on: {
          finished: function($event) {
            _vm.selected = []
          }
        }
      }),
      _vm._v(" "),
      _c("print-label", {
        ref: "printLabel",
        on: { finished: function($event) {} }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/addProduct.vue?vue&type=template&id=33a86fb8&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/product/addProduct.vue?vue&type=template&id=33a86fb8&scoped=true& ***!
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
    "div",
    [
      _c(
        "modal",
        {
          attrs: {
            width: "90%",
            height: "auto",
            scrollable: true,
            pivotY: 0.2,
            clickToClose: false,
            name: "add"
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
                    return _vm.$modal.hide("add")
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
                _c("div", { staticClass: "vx-col md:w-1/3 w-full" }, [
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col w-full" },
                      [
                        _c("label", [_vm._v("ឈ្មោះ")]),
                        _vm._v(" "),
                        _c("vue-instant", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          attrs: {
                            id: "styles",
                            "suggestion-attribute": "name",
                            suggestions: _vm.all_product,
                            type: "google",
                            name: "name"
                          },
                          model: {
                            value: _vm.product.name,
                            callback: function($$v) {
                              _vm.$set(_vm.product, "name", $$v)
                            },
                            expression: "product.name"
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
                      { staticClass: "vx-col w-full my-2" },
                      [
                        _c("label", [_vm._v("ពិពណ៌នា")]),
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
                          attrs: { label: "ពិពណ៌នា", name: "description" },
                          model: {
                            value: _vm.product.description,
                            callback: function($$v) {
                              _vm.$set(_vm.product, "description", $$v)
                            },
                            expression: "product.description"
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
                                value: _vm.errors.has("description"),
                                expression: "errors.has('description')"
                              }
                            ],
                            staticClass: "text-danger text-sm"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("description")))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col w-full" },
                      [
                        _c("vs-input-number", {
                          attrs: { min: "0", label: "តម្លៃទិញ:" },
                          model: {
                            value: _vm.product.default_purchase,
                            callback: function($$v) {
                              _vm.$set(_vm.product, "default_purchase", $$v)
                            },
                            expression: "product.default_purchase"
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
                        _c("vs-input-number", {
                          attrs: { min: "0", label: "តម្លៃទលក់:" },
                          model: {
                            value: _vm.product.default_sale,
                            callback: function($$v) {
                              _vm.$set(_vm.product, "default_sale", $$v)
                            },
                            expression: "product.default_sale"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-col md:w-2/3 w-full" }, [
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("label", [_vm._v("Unit")]),
                        _vm._v(" "),
                        _c(
                          "vx-input-group",
                          [
                            _c("v-select", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              attrs: {
                                name: "unit",
                                clearable: false,
                                label: "name",
                                options: _vm.all_units
                              },
                              model: {
                                value: _vm.product.unit,
                                callback: function($$v) {
                                  _vm.$set(_vm.product, "unit", $$v)
                                },
                                expression: "product.unit"
                              }
                            }),
                            _vm._v(" "),
                            _c("template", { slot: "append" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "append-text btn-addon",
                                  on: {
                                    click: function($event) {
                                      return _vm.$refs.addUnit.show()
                                    }
                                  }
                                },
                                [
                                  _c("vs-button", {
                                    staticClass: "rounded-none",
                                    attrs: {
                                      type: "filled",
                                      "icon-pack": "feather",
                                      icon: "icon-plus"
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("unit"),
                                expression: "errors.has('unit')"
                              }
                            ],
                            staticClass: "text-danger text-sm"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("unit")))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("label", [_vm._v("ប្រភេទ")]),
                        _vm._v(" "),
                        _c(
                          "vx-input-group",
                          [
                            _c("v-select", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              attrs: {
                                name: "category",
                                clearable: false,
                                label: "name",
                                options: _vm.all_categories
                              },
                              model: {
                                value: _vm.product.category,
                                callback: function($$v) {
                                  _vm.$set(_vm.product, "category", $$v)
                                },
                                expression: "product.category"
                              }
                            }),
                            _vm._v(" "),
                            _c("template", { slot: "append" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "append-text btn-addon",
                                  on: {
                                    click: function($event) {
                                      return _vm.$refs.addCategory.show()
                                    }
                                  }
                                },
                                [
                                  _c("vs-button", {
                                    staticClass: "rounded-none",
                                    attrs: {
                                      type: "filled",
                                      "icon-pack": "feather",
                                      icon: "icon-plus"
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("category"),
                                expression: "errors.has('category')"
                              }
                            ],
                            staticClass: "text-danger text-sm"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("category")))]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("label", [_vm._v("Model")]),
                        _vm._v(" "),
                        _c(
                          "vx-input-group",
                          [
                            _c("v-select", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              attrs: {
                                name: "brand",
                                clearable: false,
                                label: "name",
                                options: _vm.all_brands
                              },
                              model: {
                                value: _vm.product.brand,
                                callback: function($$v) {
                                  _vm.$set(_vm.product, "brand", $$v)
                                },
                                expression: "product.brand"
                              }
                            }),
                            _vm._v(" "),
                            _c("template", { slot: "append" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "append-text btn-addon",
                                  on: {
                                    click: function($event) {
                                      return _vm.$refs.addBrand.show()
                                    }
                                  }
                                },
                                [
                                  _c("vs-button", {
                                    staticClass: "rounded-none",
                                    attrs: {
                                      type: "filled",
                                      "icon-pack": "feather",
                                      icon: "icon-plus"
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("brand"),
                                expression: "errors.has('brand')"
                              }
                            ],
                            staticClass: "text-danger text-sm"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("brand")))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("label", [_vm._v("Inventory Type")]),
                        _vm._v(" "),
                        _c("v-select", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          attrs: {
                            name: "inventory_type",
                            options: [
                              "inventory_part",
                              "service",
                              "sale_only",
                              "purchase_only"
                            ]
                          },
                          model: {
                            value: _vm.product.inventory_type,
                            callback: function($$v) {
                              _vm.$set(_vm.product, "inventory_type", $$v)
                            },
                            expression: "product.inventory_type"
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
                                value: _vm.errors.has("inventory_type"),
                                expression: "errors.has('inventory_type')"
                              }
                            ],
                            staticClass: "text-danger text-sm"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("inventory_type")))]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 my-2" },
                      [
                        _c("vue-dropzone", {
                          ref: "image",
                          staticClass: "max-content p-1",
                          attrs: {
                            duplicateCheck: "",
                            id: "dropzone",
                            options: _vm.dropzoneOptions
                          },
                          on: { "vdropzone-success": _vm.successUpload }
                        })
                      ],
                      1
                    )
                  ])
                ])
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
                      on: { click: _vm.storeProduct }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/printLabel.vue?vue&type=template&id=d4e4f31e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/product/printLabel.vue?vue&type=template&id=d4e4f31e&scoped=true& ***!
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
    "sweet-modal",
    {
      ref: "printLabel",
      attrs: {
        title: "Print Label",
        blocking: true,
        width: !_vm.mobilecheck() ? "60%" : ""
      }
    },
    [
      _c("div", { staticClass: "px-3", attrs: { id: "printMe" } }, [
        _c(
          "div",
          { staticClass: "vx-row" },
          _vm._l(_vm.data.products, function(item, index) {
            return _c(
              "div",
              {
                key: index,
                staticClass:
                  "vx-col md:w-1/4 w-full bordered print:w-1/4 text-left"
              },
              [
                _c("div", { staticClass: "label-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(item.name) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c("bar-code", {
                  attrs: {
                    value: "000" + item.id,
                    tag: "img",
                    options: { displayValue: true, width: 1, height: 30 }
                  }
                })
              ],
              1
            )
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c(
        "vs-button",
        {
          attrs: { slot: "button" },
          on: { click: _vm.printHtml },
          slot: "button"
        },
        [_vm._v("Print")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/product/Product.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/product/Product.vue ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_0cc2f215_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=0cc2f215&scoped=true& */ "./resources/js/src/views/product/Product.vue?vue&type=template&id=0cc2f215&scoped=true&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/src/views/product/Product.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_0cc2f215_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_0cc2f215_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0cc2f215",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/product/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/product/Product.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/product/Product.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/product/Product.vue?vue&type=template&id=0cc2f215&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/product/Product.vue?vue&type=template&id=0cc2f215&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_0cc2f215_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=0cc2f215&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/Product.vue?vue&type=template&id=0cc2f215&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_0cc2f215_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_0cc2f215_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/product/addProduct.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/product/addProduct.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addProduct_vue_vue_type_template_id_33a86fb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProduct.vue?vue&type=template&id=33a86fb8&scoped=true& */ "./resources/js/src/views/product/addProduct.vue?vue&type=template&id=33a86fb8&scoped=true&");
/* harmony import */ var _addProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProduct.vue?vue&type=script&lang=js& */ "./resources/js/src/views/product/addProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _addProduct_vue_vue_type_style_index_0_id_33a86fb8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProduct.vue?vue&type=style&index=0&id=33a86fb8&scoped=true&lang=scss& */ "./resources/js/src/views/product/addProduct.vue?vue&type=style&index=0&id=33a86fb8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _addProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addProduct_vue_vue_type_template_id_33a86fb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addProduct_vue_vue_type_template_id_33a86fb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "33a86fb8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/product/addProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/product/addProduct.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/product/addProduct.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/addProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/product/addProduct.vue?vue&type=style&index=0&id=33a86fb8&scoped=true&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/product/addProduct.vue?vue&type=style&index=0&id=33a86fb8&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_style_index_0_id_33a86fb8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addProduct.vue?vue&type=style&index=0&id=33a86fb8&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/addProduct.vue?vue&type=style&index=0&id=33a86fb8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_style_index_0_id_33a86fb8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_style_index_0_id_33a86fb8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_style_index_0_id_33a86fb8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_style_index_0_id_33a86fb8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_style_index_0_id_33a86fb8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/product/addProduct.vue?vue&type=template&id=33a86fb8&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/product/addProduct.vue?vue&type=template&id=33a86fb8&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_template_id_33a86fb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addProduct.vue?vue&type=template&id=33a86fb8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/addProduct.vue?vue&type=template&id=33a86fb8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_template_id_33a86fb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addProduct_vue_vue_type_template_id_33a86fb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/product/printLabel.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/product/printLabel.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _printLabel_vue_vue_type_template_id_d4e4f31e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printLabel.vue?vue&type=template&id=d4e4f31e&scoped=true& */ "./resources/js/src/views/product/printLabel.vue?vue&type=template&id=d4e4f31e&scoped=true&");
/* harmony import */ var _printLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printLabel.vue?vue&type=script&lang=js& */ "./resources/js/src/views/product/printLabel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _printLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _printLabel_vue_vue_type_template_id_d4e4f31e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _printLabel_vue_vue_type_template_id_d4e4f31e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d4e4f31e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/product/printLabel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/product/printLabel.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/product/printLabel.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_printLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./printLabel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/printLabel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_printLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/product/printLabel.vue?vue&type=template&id=d4e4f31e&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/product/printLabel.vue?vue&type=template&id=d4e4f31e&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_printLabel_vue_vue_type_template_id_d4e4f31e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./printLabel.vue?vue&type=template&id=d4e4f31e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/printLabel.vue?vue&type=template&id=d4e4f31e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_printLabel_vue_vue_type_template_id_d4e4f31e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_printLabel_vue_vue_type_template_id_d4e4f31e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);