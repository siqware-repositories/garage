(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Product",
  components: {
    EditProduct: _editProduct__WEBPACK_IMPORTED_MODULE_2__["default"],
    AddProduct: _addProduct__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      selected: []
    };
  },
  computed: {
    all_about: function all_about() {
      return this.$store.getters.all_about;
    },
    all_product: function all_product() {
      return this.$store.getters.all_product;
    }
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.fetchProduct();

            case 2:
              _context.next = 4;
              return this.fetchUnit();

            case 4:
              _context.next = 6;
              return this.fetchCategory();

            case 6:
              _context.next = 8;
              return this.fetchBrand();

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    //fetch product
    fetchUnit: function () {
      var _fetchUnit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$store.dispatch('fetchUnit');

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchUnit() {
        return _fetchUnit.apply(this, arguments);
      }

      return fetchUnit;
    }(),
    //fetch brand
    fetchBrand: function () {
      var _fetchBrand = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.$store.dispatch('fetchBrand');

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function fetchBrand() {
        return _fetchBrand.apply(this, arguments);
      }

      return fetchBrand;
    }(),
    //fetch category
    fetchCategory: function () {
      var _fetchCategory = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.$store.dispatch('fetchCategory');

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function fetchCategory() {
        return _fetchCategory.apply(this, arguments);
      }

      return fetchCategory;
    }(),
    //fetch product
    fetchProduct: function () {
      var _fetchProduct = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.$store.dispatch('fetchProduct');

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function fetchProduct() {
        return _fetchProduct.apply(this, arguments);
      }

      return fetchProduct;
    }(),
    //destroy
    destroyProduct: function () {
      var _destroyProduct = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var self, promises;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                self = this;
                self.$vs.loading();
                promises = self.selected.map(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(data) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            _context6.next = 2;
                            return self.$store.dispatch('destroyProduct', data.id);

                          case 2:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());
                _context7.next = 5;
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
                return _context7.stop();
            }
          }
        }, _callee7, this);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      product: {
        name: '',
        description: '',
        unit: 'ដំុ',
        category: 'គ្រឿងក្រោម',
        brand: 'AKA',
        inventory_type: 'inventory_part',
        default_purchase: 1,
        default_sale: 1,
        image: 'images/placeholder/placeholder.png'
      },
      inventory_type: [{
        name: 'inventory_part'
      }, {
        name: 'service'
      }, {
        name: 'sale_only'
      }, {
        name: 'purchase_only'
      }],
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
                      _vm.$refs.editProduct.show()
                      _vm.$refs.editProduct.editProduct(_vm.selected[0])
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
        "vs-table",
        {
          attrs: {
            multiple: "",
            pagination: "",
            "max-items": "10",
            search: "",
            data: _vm.all_product
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
                            _c(
                              "vs-select",
                              {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'"
                                  }
                                ],
                                staticClass: "w-full",
                                attrs: { name: "unit" },
                                model: {
                                  value: _vm.product.unit,
                                  callback: function($$v) {
                                    _vm.$set(_vm.product, "unit", $$v)
                                  },
                                  expression: "product.unit"
                                }
                              },
                              _vm._l(_vm.all_units, function(item, index) {
                                return _c("vs-select-item", {
                                  key: index,
                                  attrs: { value: item.name, text: item.name }
                                })
                              }),
                              1
                            ),
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
                            _c(
                              "vs-select",
                              {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'"
                                  }
                                ],
                                staticClass: "w-full",
                                attrs: { name: "category" },
                                model: {
                                  value: _vm.product.category,
                                  callback: function($$v) {
                                    _vm.$set(_vm.product, "category", $$v)
                                  },
                                  expression: "product.category"
                                }
                              },
                              _vm._l(_vm.all_categories, function(item, index) {
                                return _c("vs-select-item", {
                                  key: index,
                                  attrs: { value: item.name, text: item.name }
                                })
                              }),
                              1
                            ),
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
                            _c(
                              "vs-select",
                              {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'"
                                  }
                                ],
                                staticClass: "w-full",
                                attrs: { name: "brand" },
                                model: {
                                  value: _vm.product.brand,
                                  callback: function($$v) {
                                    _vm.$set(_vm.product, "brand", $$v)
                                  },
                                  expression: "product.brand"
                                }
                              },
                              _vm._l(_vm.all_brands, function(item, index) {
                                return _c("vs-select-item", {
                                  key: index,
                                  attrs: { value: item.name, text: item.name }
                                })
                              }),
                              1
                            ),
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
                        _c(
                          "vs-select",
                          {
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
                              label: "Inventory Type",
                              name: "inventory_type"
                            },
                            model: {
                              value: _vm.product.inventory_type,
                              callback: function($$v) {
                                _vm.$set(_vm.product, "inventory_type", $$v)
                              },
                              expression: "product.inventory_type"
                            }
                          },
                          _vm._l(_vm.inventory_type, function(item, index) {
                            return _c("vs-select-item", {
                              key: index,
                              attrs: { value: item.name, text: item.name }
                            })
                          }),
                          1
                        ),
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

/***/ "./resources/js/src/views/product/Product.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/product/Product.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_0cc2f215_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=0cc2f215&scoped=true& */ "./resources/js/src/views/product/Product.vue?vue&type=template&id=0cc2f215&scoped=true&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/src/views/product/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





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
/*! exports provided: default */
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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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



/***/ })

}]);