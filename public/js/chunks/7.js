(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/editProduct.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/product/editProduct.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _addUnit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addUnit */ "./resources/js/src/views/product/addUnit.vue");
/* harmony import */ var _addCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addCategory */ "./resources/js/src/views/product/addCategory.vue");
/* harmony import */ var _addBrand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addBrand */ "./resources/js/src/views/product/addBrand.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "editProduct",
  components: {
    AddBrand: _addBrand__WEBPACK_IMPORTED_MODULE_5__["default"],
    AddCategory: _addCategory__WEBPACK_IMPORTED_MODULE_4__["default"],
    AddUnit: _addUnit__WEBPACK_IMPORTED_MODULE_3__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a,
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
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
      units: [{
        name: 'គីឡូ'
      }, {
        name: 'លីត្រ'
      }, {
        name: 'ដំុ'
      }],
      categories: [{
        name: 'គ្រឿងក្រោម'
      }, {
        name: 'ដែក'
      }, {
        name: 'ដំុ'
      }],
      brands: [{
        name: 'AKA'
      }, {
        name: 'Snip'
      }],
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
    show: function show(data) {
      this.$modal.show('edit');
      this.product.id = data.id;
      this.product.name = data.name;
      this.product.description = data.description;
      this.product.unit = {
        name: data.unit
      };
      this.product.category = {
        name: data.category
      };
      this.product.brand = {
        name: data.brand
      };
      this.product.inventory_type = data.inventory_type;
      this.product.default_purchase = data.default_purchase;
      this.product.default_sale = data.default_sale;
      this.product.image = data.image;
    },
    //edit thumb
    editThumb: function editThumb() {
      this.$refs.image.manuallyAddFile({
        size: 123
      }, this.product.image);
    },
    //store
    updateProduct: function updateProduct() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          self.$vs.loading();
          self.$store.dispatch('updateProduct', self.product).then(function (data) {
            if (data) {
              self.$vs.notify({
                time: 4000,
                title: 'ប្រតិបត្តិការជោគជ័យ',
                text: 'ទិន្នន័យបានកែប្រែ',
                color: 'success',
                iconPack: 'feather',
                icon: 'icon-check',
                position: 'top-center'
              });
              self.$emit('finished');
            } else {
              self.$vs.notify({
                title: 'ប្រតិបត្តិការបរាជ័យ',
                text: 'ទិន្នន័យមិនបានកែប្រែ',
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
    //image upload
    successUpload: function successUpload(file, res) {
      this.product.image = res.path;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/editProduct.vue?vue&type=template&id=d6831a6a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/product/editProduct.vue?vue&type=template&id=d6831a6a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "modal",
    {
      attrs: {
        width: "90%",
        height: "auto",
        scrollable: true,
        pivotY: 0.2,
        clickToClose: false,
        name: "edit"
      }
    },
    [
      _c("div", { staticClass: "flex justify-end" }, [
        _c(
          "i",
          {
            staticClass: "vs-icon vs-popup--close material-icons text-warning",
            staticStyle: { background: "rgb(255, 255, 255)" },
            on: {
              click: function($event) {
                return _vm.$modal.hide("edit")
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
                      on: {
                        "vdropzone-success": _vm.successUpload,
                        "vdropzone-mounted": _vm.editThumb
                      }
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
                  on: { click: _vm.updateProduct }
                },
                [_vm._v("រក្សាទុក")]
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

/***/ "./resources/js/src/views/product/editProduct.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/product/editProduct.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editProduct_vue_vue_type_template_id_d6831a6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editProduct.vue?vue&type=template&id=d6831a6a&scoped=true& */ "./resources/js/src/views/product/editProduct.vue?vue&type=template&id=d6831a6a&scoped=true&");
/* harmony import */ var _editProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editProduct.vue?vue&type=script&lang=js& */ "./resources/js/src/views/product/editProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editProduct_vue_vue_type_template_id_d6831a6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editProduct_vue_vue_type_template_id_d6831a6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d6831a6a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/product/editProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/product/editProduct.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/product/editProduct.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/editProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/product/editProduct.vue?vue&type=template&id=d6831a6a&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/product/editProduct.vue?vue&type=template&id=d6831a6a&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editProduct_vue_vue_type_template_id_d6831a6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editProduct.vue?vue&type=template&id=d6831a6a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/editProduct.vue?vue&type=template&id=d6831a6a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editProduct_vue_vue_type_template_id_d6831a6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editProduct_vue_vue_type_template_id_d6831a6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);