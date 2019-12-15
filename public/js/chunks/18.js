(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/Purchase.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/purchase/Purchase.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_editProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product/editProduct */ "./resources/js/src/views/product/editProduct.vue");
/* harmony import */ var _addPurchase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addPurchase */ "./resources/js/src/views/purchase/addPurchase.vue");
/* harmony import */ var _addPayment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addPayment */ "./resources/js/src/views/purchase/addPayment.vue");
/* harmony import */ var _editPurchase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editPurchase */ "./resources/js/src/views/purchase/editPurchase.vue");
/* harmony import */ var _showPurchase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showPurchase */ "./resources/js/src/views/purchase/showPurchase.vue");


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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Stock",
  components: {
    ShowPurchase: _showPurchase__WEBPACK_IMPORTED_MODULE_5__["default"],
    EditPurchase: _editPurchase__WEBPACK_IMPORTED_MODULE_4__["default"],
    AddPayment: _addPayment__WEBPACK_IMPORTED_MODULE_3__["default"],
    AddPurchase: _addPurchase__WEBPACK_IMPORTED_MODULE_2__["default"],
    EditProduct: _product_editProduct__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      selected_pending: [],
      selected_received: []
    };
  },
  computed: {
    all_product: function all_product() {
      return this.$store.getters.all_product;
    },
    all_purchases: function all_purchases() {
      return this.$store.getters.all_purchase;
    },
    all_purchase_received: function all_purchase_received() {
      var self = this;
      return self.all_purchases.filter(function (x) {
        return x.purchase_status === 'received';
      });
    },
    all_purchase_pending: function all_purchase_pending() {
      var self = this;
      return self.all_purchases.filter(function (x) {
        return x.purchase_status === 'pending';
      });
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
              return this.fetchSupplier();

            case 4:
              _context.next = 6;
              return this.fetchPurchase();

            case 6:
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
    //fetch purchase
    fetchPurchase: function () {
      var _fetchPurchase = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$store.dispatch('fetchPurchase');

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchPurchase() {
        return _fetchPurchase.apply(this, arguments);
      }

      return fetchPurchase;
    }(),
    //fetch product
    fetchProduct: function () {
      var _fetchProduct = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.$store.dispatch('fetchProduct');

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function fetchProduct() {
        return _fetchProduct.apply(this, arguments);
      }

      return fetchProduct;
    }(),
    //fetch supplier
    fetchSupplier: function () {
      var _fetchSupplier = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.$store.dispatch('fetchSupplier');

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function fetchSupplier() {
        return _fetchSupplier.apply(this, arguments);
      }

      return fetchSupplier;
    }(),
    //destroy
    destroyPurchase: function () {
      var _destroyPurchase = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var self, promises;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                self = this;
                self.$vs.loading();
                promises = self.selected_pending.map(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(data) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return self.$store.dispatch('destroyPurchase', data.id);

                          case 2:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());
                _context6.next = 5;
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
                  self.selected_pending = [];
                  self.$vs.loading.close();
                });

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function destroyPurchase() {
        return _destroyPurchase.apply(this, arguments);
      }

      return destroyPurchase;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/addPayment.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/purchase/addPayment.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "addPayment",
  methods: {
    show: function show(data) {
      this.$modal.show('add-payment');
      this.data.id = data.id;
      this.data.balance = data.due_balance;
      this.data.input_balance = data.due_balance;
    },
    //update payment
    updatePurchasePayment: function updatePurchasePayment() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          self.$vs.loading();
          self.$store.dispatch('updatePurchasePayment', self.data).then(function (data) {
            if (data) {
              self.$vs.notify({
                time: 4000,
                title: 'ប្រតិបត្តិការជោគជ័យ',
                text: 'ទឹកប្រាក់បានបន្ថែម',
                color: 'success',
                iconPack: 'feather',
                icon: 'icon-check',
                position: 'top-center'
              });
              self.fetchPurchase();
              self.$emit('finished');
              self.$modal.hide('add-payment');
            } else {
              self.$vs.notify({
                title: 'ប្រតិបត្តិការបរាជ័យ',
                text: 'ទឹកប្រាក់មិនបានបន្ថែម',
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
    //fetch purchase
    fetchPurchase: function () {
      var _fetchPurchase = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$store.dispatch('fetchPurchase');

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchPurchase() {
        return _fetchPurchase.apply(this, arguments);
      }

      return fetchPurchase;
    }()
  },
  data: function data() {
    return {
      data: {
        id: null,
        balance: 0,
        input_balance: 0,
        due_balance: 0
      }
    };
  },
  computed: {
    due_balance: function due_balance() {
      return this.data.due_balance = this.data.balance - this.data.input_balance;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/addPurchase.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/purchase/addPurchase.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr/dist/flatpickr.min.css */ "./node_modules/flatpickr/dist/flatpickr.min.css");
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_addUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product/addUnit */ "./resources/js/src/views/product/addUnit.vue");
/* harmony import */ var _product_addCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product/addCategory */ "./resources/js/src/views/product/addCategory.vue");
/* harmony import */ var _product_addBrand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product/addBrand */ "./resources/js/src/views/product/addBrand.vue");
/* harmony import */ var _addSupplier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addSupplier */ "./resources/js/src/views/purchase/addSupplier.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_6__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "addPurchase",
  components: {
    AddSupplier: _addSupplier__WEBPACK_IMPORTED_MODULE_5__["default"],
    AddBrand: _product_addBrand__WEBPACK_IMPORTED_MODULE_4__["default"],
    AddCategory: _product_addCategory__WEBPACK_IMPORTED_MODULE_3__["default"],
    AddUnit: _product_addUnit__WEBPACK_IMPORTED_MODULE_2__["default"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default.a,
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_6___default.a
  },
  data: function data() {
    return {
      purchase: {
        user_id: this.$store.state.AppActiveUser.uid,
        supplier: null,
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
          amount: 1,
          inventory_type: ''
        }]
      }
    };
  },
  computed: {
    all_suppliers: function all_suppliers() {
      return this.$store.getters.all_supplier;
    },
    all_products: function all_products() {
      return this.$store.getters.all_product;
    },
    total: function total() {
      var self = this;
      var total = 0.0;
      self.purchase.items.forEach(function (item, index) {
        total += parseFloat(item.amount);
      });
      self.purchase.total_balance = total;
      self.purchase.balance = total;
      return total;
    },
    total_qty: function total_qty() {
      var self = this;
      var total = 0;
      self.purchase.items.forEach(function (item, index) {
        total += parseFloat(item.qty);
      });
      self.purchase.qty = total;
      return total;
    }
  },
  updated: function updated() {
    var x = this.total_qty;
    var y = this.total;
  },
  methods: {
    searchSupplier: function searchSupplier(option, label, search) {
      return String(label).toLowerCase().indexOf(search.toLowerCase()) > -1 || String(option.company).toLowerCase().indexOf(search.toLowerCase()) > -1 || String(option.contact).toLowerCase().indexOf(search.toLowerCase()) > -1;
    },
    searchProduct: function searchProduct(option, label, search) {
      return String(label).toLowerCase().indexOf(search.toLowerCase()) > -1 || String(option.id).toLowerCase().indexOf(search.toLowerCase()) > -1;
    },
    //add line
    addItemLine: function addItemLine() {
      var self = this;
      self.purchase.items.push({
        id: '',
        name: null,
        description: null,
        qty: 1,
        purchase_price: 1,
        sale_price: 1,
        amount: 1,
        inventory_type: ''
      });
    },
    //remove line
    removeItemLine: function removeItemLine(index) {
      var self = this;
      self.purchase.items.splice(index, 1);
    },
    //select product
    selectProduct: function selectProduct(id, index) {
      var self = this;
      var selected = self.all_products.filter(function (x) {
        return parseInt(x.id) === parseInt(id.id);
      });
      self.purchase.items[index].name = selected[0].name;
      self.purchase.items[index].description = selected[0].description;
      self.purchase.items[index].inventory_type = selected[0].inventory_type;
      self.purchase.items[index].sale_price = selected[0].default_sale;
      self.purchase.items[index].purchase_price = selected[0].default_purchase;
    },
    show: function show() {
      this.$modal.show('add');
    },
    //store
    storePurchase: function storePurchase() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          self.$vs.loading();
          self.$store.dispatch('storePurchase', self.purchase).then(function (data) {
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
      this.purchase.items = [];
    },
    //image upload
    successUpload: function successUpload(file, res) {
      this.product.image = res.path;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/editPurchase.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/purchase/editPurchase.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr/dist/flatpickr.min.css */ "./node_modules/flatpickr/dist/flatpickr.min.css");
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_addUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product/addUnit */ "./resources/js/src/views/product/addUnit.vue");
/* harmony import */ var _product_addCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product/addCategory */ "./resources/js/src/views/product/addCategory.vue");
/* harmony import */ var _product_addBrand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product/addBrand */ "./resources/js/src/views/product/addBrand.vue");
/* harmony import */ var _addSupplier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addSupplier */ "./resources/js/src/views/purchase/addSupplier.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _xkeshi_vue_barcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @xkeshi/vue-barcode */ "./node_modules/@xkeshi/vue-barcode/dist/vue-barcode.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "editPurchase",
  components: {
    AddSupplier: _addSupplier__WEBPACK_IMPORTED_MODULE_5__["default"],
    AddBrand: _product_addBrand__WEBPACK_IMPORTED_MODULE_4__["default"],
    AddCategory: _product_addCategory__WEBPACK_IMPORTED_MODULE_3__["default"],
    AddUnit: _product_addUnit__WEBPACK_IMPORTED_MODULE_2__["default"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default.a,
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_6___default.a,
    'bar-code': _xkeshi_vue_barcode__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      purchase: {
        user_id: this.$store.state.AppActiveUser.uid,
        id: null,
        supplier: null,
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
          amount: 1,
          inventory_type: ''
        }]
      }
    };
  },
  computed: {
    all_suppliers: function all_suppliers() {
      return this.$store.getters.all_supplier;
    },
    all_products: function all_products() {
      return this.$store.getters.all_product;
    },
    total: function total() {
      var self = this;
      var total = 0.0;
      self.purchase.items.forEach(function (item, index) {
        total += parseFloat(item.amount);
      });
      self.purchase.total_balance = total;
      self.purchase.balance = total;
      return total;
    },
    total_qty: function total_qty() {
      var self = this;
      var total = 0;
      self.purchase.items.forEach(function (item, index) {
        total += parseFloat(item.qty);
      });
      self.purchase.qty = total;
      return total;
    }
  },
  updated: function updated() {
    var x = this.total_qty;
    var y = this.total;
  },
  methods: {
    searchSupplier: function searchSupplier(option, label, search) {
      return String(label).toLowerCase().indexOf(search.toLowerCase()) > -1 || String(option.company).toLowerCase().indexOf(search.toLowerCase()) > -1 || String(option.contact).toLowerCase().indexOf(search.toLowerCase()) > -1;
    },
    searchProduct: function searchProduct(option, label, search) {
      return String(label).toLowerCase().indexOf(search.toLowerCase()) > -1 || String(option.id).toLowerCase().indexOf(search.toLowerCase()) > -1;
    },
    //add line
    addItemLine: function addItemLine() {
      var self = this;
      self.purchase.items.push({
        id: '',
        name: null,
        description: null,
        qty: 1,
        purchase_price: 1,
        sale_price: 1,
        amount: 1,
        inventory_type: ''
      });
    },
    //remove line
    removeItemLine: function removeItemLine(index) {
      var self = this;
      self.purchase.items.splice(index, 1);
    },
    //select product
    selectProduct: function selectProduct(id, index) {
      var self = this;
      var selected = self.all_products.filter(function (x) {
        return parseInt(x.id) === parseInt(id.id);
      });
      self.purchase.items[index].name = selected[0].name;
      self.purchase.items[index].description = selected[0].description;
      self.purchase.items[index].sale_price = selected[0].default_sale;
      self.purchase.items[index].inventory_type = selected[0].inventory_type;
      self.purchase.items[index].purchase_price = selected[0].default_purchase;
    },
    show: function show(data) {
      var self = this;
      this.$modal.show('edit-purchase');
      this.purchase.id = data.id;
      this.purchase.supplier = data.supplier;
      this.purchase.location = data.location;
      this.purchase.purchase_date = data.date;
      this.purchase.purchase_status = data.purchase_status;
      this.purchase.description = data.description;
      this.purchase.balance = data.balance;
      self.purchase.items = [];
      data.purchase_detail.forEach(function (item, index) {
        self.purchase.items.push({
          id: item.product,
          name: item.product.name,
          description: item.product.description,
          qty: item.qty,
          purchase_price: item.purchase,
          sale_price: item.sale,
          amount: item.amount,
          inventory_type: item.product.inventory_type
        });
      });
    },
    //store
    updatePurchase: function updatePurchase() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          self.$vs.loading();
          self.$store.dispatch('updatePurchase', self.purchase).then(function (data) {
            if (data) {
              self.$vs.notify({
                time: 4000,
                title: 'ប្រតិបត្តិការជោគជ័យ',
                text: 'ទិន្នន័យកែប្រែ',
                color: 'success',
                iconPack: 'feather',
                icon: 'icon-check',
                position: 'top-center'
              });
              self.$emit('finished');
            } else {
              self.$vs.notify({
                title: 'ប្រតិបត្តិការបរាជ័យ',
                text: 'ទិន្នន័យមិនកែប្រែ',
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/Purchase.vue?vue&type=template&id=2d448556&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/purchase/Purchase.vue?vue&type=template&id=2d448556&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
                  return _vm.$refs.addPurchase.show()
                }
              }
            },
            [_vm._v("បន្ថែម")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-tabs",
        [
          _c(
            "vs-tab",
            { attrs: { label: "Received" } },
            [
              _c(
                "div",
                { staticClass: "flex btn-group" },
                [
                  _vm.selected_received.length === 1 &&
                  _vm.selected_received[0].due_balance > 0
                    ? _c(
                        "vs-button",
                        {
                          attrs: {
                            color: "warning",
                            type: "relief",
                            "icon-pack": "feather",
                            icon: "icon-dollar-sign"
                          },
                          on: {
                            click: function($event) {
                              return _vm.$refs.addPayment.show(
                                _vm.selected_received[0]
                              )
                            }
                          }
                        },
                        [_vm._v("Add Payment")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.selected_received.length === 1
                    ? _c(
                        "vs-button",
                        {
                          attrs: {
                            type: "relief",
                            "icon-pack": "feather",
                            icon: "icon-eye"
                          },
                          on: {
                            click: function($event) {
                              return _vm.$refs.showPurchase.show(
                                _vm.selected_received[0]
                              )
                            }
                          }
                        },
                        [_vm._v("បង្ហាញ")]
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
                    data: _vm.all_purchase_received
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
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].id } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].id) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].description } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].description) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                {
                                  attrs: { data: data[indextr].supplier.name }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].supplier.name) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].location } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].location) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].qty } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].qty) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].balance } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].balance) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].amount } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].amount) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].due_balance } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].due_balance) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].date } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].date) +
                                      "\n                        "
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
                    value: _vm.selected_received,
                    callback: function($$v) {
                      _vm.selected_received = $$v
                    },
                    expression: "selected_received"
                  }
                },
                [
                  _c(
                    "template",
                    { slot: "thead" },
                    [
                      _c("vs-th", { attrs: { "sort-key": "id" } }, [
                        _vm._v("ល.រ")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "description" } }, [
                        _vm._v("Description")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Supplier")]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "location" } }, [
                        _vm._v("Location")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "qty" } }, [
                        _vm._v("QTY")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "balance" } }, [
                        _vm._v("Balance")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "amount" } }, [
                        _vm._v("Amount")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "due_balance" } }, [
                        _vm._v("Due Balance")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "purchase_date" } }, [
                        _vm._v("Date")
                      ])
                    ],
                    1
                  )
                ],
                2
              ),
              _vm._v(" "),
              _c("add-payment", {
                ref: "addPayment",
                on: {
                  finished: function($event) {
                    _vm.selected_received = []
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-tab",
            { attrs: { label: "Pending" } },
            [
              _c(
                "div",
                { staticClass: "flex btn-group" },
                [
                  _vm.selected_pending.length === 1 &&
                  _vm.selected_pending[0].due_balance > 0
                    ? _c(
                        "vs-button",
                        {
                          attrs: {
                            type: "relief",
                            "icon-pack": "feather",
                            icon: "icon-dollar-sign"
                          },
                          on: {
                            click: function($event) {
                              return _vm.$refs.addPaymentPending.show(
                                _vm.selected_pending[0]
                              )
                            }
                          }
                        },
                        [_vm._v("Add Payment")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.selected_pending.length === 1
                    ? _c(
                        "vs-button",
                        {
                          attrs: {
                            type: "relief",
                            "icon-pack": "feather",
                            icon: "icon-eye"
                          },
                          on: {
                            click: function($event) {
                              return _vm.$refs.showPurchase.show(
                                _vm.selected_pending[0]
                              )
                            }
                          }
                        },
                        [_vm._v("បង្ហាញ")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.selected_pending.length === 1
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
                              return _vm.$refs.editPurchase.show(
                                _vm.selected_pending[0]
                              )
                            }
                          }
                        },
                        [_vm._v("កែប្រែ")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.selected_pending.length
                    ? _c(
                        "vs-button",
                        {
                          attrs: {
                            color: "danger",
                            type: "relief",
                            "icon-pack": "feather",
                            icon: "icon-trash-2"
                          },
                          on: { click: _vm.destroyPurchase }
                        },
                        [_vm._v("លុប")]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c("add-payment", {
                ref: "addPaymentPending",
                on: {
                  finished: function($event) {
                    _vm.selected_pending = []
                  }
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
                    data: _vm.all_purchase_pending
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
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].id } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].id) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].description } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].description) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                {
                                  attrs: { data: data[indextr].supplier.name }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].supplier.name) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].location } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].location) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].qty } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].qty) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].balance } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].balance) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].amount } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].amount) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].due_balance } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].due_balance) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].date } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].date) +
                                      "\n                        "
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
                    value: _vm.selected_pending,
                    callback: function($$v) {
                      _vm.selected_pending = $$v
                    },
                    expression: "selected_pending"
                  }
                },
                [
                  _c(
                    "template",
                    { slot: "thead" },
                    [
                      _c("vs-th", { attrs: { "sort-key": "id" } }, [
                        _vm._v("ល.រ")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "description" } }, [
                        _vm._v("Description")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Supplier")]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "location" } }, [
                        _vm._v("Location")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "qty" } }, [
                        _vm._v("QTY")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "balance" } }, [
                        _vm._v("Balance")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "amount" } }, [
                        _vm._v("Amount")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "due_balance" } }, [
                        _vm._v("Due Balance")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "purchase_date" } }, [
                        _vm._v("Date")
                      ])
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("show-purchase", { ref: "showPurchase" }),
      _vm._v(" "),
      _c("add-purchase", { ref: "addPurchase" }),
      _vm._v(" "),
      _c("edit-purchase", {
        ref: "editPurchase",
        on: {
          finished: function($event) {
            _vm.selected_pending = []
          }
        }
      }),
      _vm._v(" "),
      _c("edit-product", {
        ref: "editProduct",
        on: {
          finished: function($event) {
            _vm.selected_received = []
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/addPayment.vue?vue&type=template&id=2154b54e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/purchase/addPayment.vue?vue&type=template&id=2154b54e&scoped=true& ***!
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
        height: "auto",
        scrollable: true,
        pivotY: 0.2,
        clickToClose: false,
        name: "add-payment"
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
                return _vm.$modal.hide("add-payment")
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
            _c("div", { staticClass: "vx-col md:w-1/2 w-full" }, [
              _c("h4", [_vm._v("ទឹកប្រាក់ត្រូវសង")]),
              _vm._v(" "),
              _c("span", { staticClass: "text-2xl" }, [
                _vm._v("$" + _vm._s(_vm.data.balance))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-col md:w-1/2 w-full" }, [
              _c("h4", [_vm._v("ទឹកប្រាក់នៅសល់")]),
              _vm._v(" "),
              _c("span", { staticClass: "text-2xl" }, [
                _vm._v("$" + _vm._s(_vm.due_balance))
              ])
            ])
          ]),
          _vm._v(" "),
          _c("vs-divider"),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "vx-col w-full" },
              [
                _c("vs-input-number", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  attrs: {
                    min: "0",
                    max: _vm.data.balance,
                    name: "input_balance"
                  },
                  model: {
                    value: _vm.data.input_balance,
                    callback: function($$v) {
                      _vm.$set(_vm.data, "input_balance", $$v)
                    },
                    expression: "data.input_balance"
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
                        value: _vm.errors.has("input_balance"),
                        expression: "errors.has('input_balance')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("input_balance")))]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex justify-end btn-group" },
            [
              _c(
                "vs-button",
                {
                  attrs: {
                    icon: "icon-dollar-sign",
                    "icon-pack": "feather",
                    type: "relief"
                  },
                  on: { click: _vm.updatePurchasePayment }
                },
                [_vm._v("ចំណាយ")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/addPurchase.vue?vue&type=template&id=a49ada84&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/purchase/addPurchase.vue?vue&type=template&id=a49ada84&scoped=true& ***!
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
              _c("div", { staticClass: "vx-row my-3" }, [
                _c(
                  "div",
                  { staticClass: "vx-col md:w-1/3 w-full" },
                  [
                    _c("label", [_vm._v("អ្នកផ្គត់ផ្គង់")]),
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
                            filterBy: _vm.searchSupplier,
                            label: "name",
                            name: "supplier",
                            options: _vm.all_suppliers
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "option",
                              fn: function(option) {
                                return [
                                  _c("vs-list-item", {
                                    attrs: {
                                      title:
                                        "ឈ្មោះ​ " +
                                        option.name +
                                        " ក្រុមហ៊ុន " +
                                        option.company,
                                      subtitle:
                                        "ទំនាក់ទំនង " +
                                        option.contact +
                                        " អាស័យដ្ឋាន " +
                                        option.address
                                    }
                                  })
                                ]
                              }
                            }
                          ]),
                          model: {
                            value: _vm.purchase.supplier,
                            callback: function($$v) {
                              _vm.$set(_vm.purchase, "supplier", $$v)
                            },
                            expression: "purchase.supplier"
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
                                  return _vm.$refs.addSupplier.show()
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
                            value: _vm.errors.has("supplier"),
                            expression: "errors.has('supplier')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("supplier")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col md:w-1/3 w-full" },
                  [
                    _c("label", [_vm._v("ទីតាំង")]),
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
                      attrs: { name: "location", options: ["Ly Put Garage"] },
                      model: {
                        value: _vm.purchase.location,
                        callback: function($$v) {
                          _vm.$set(_vm.purchase, "location", $$v)
                        },
                        expression: "purchase.location"
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
                            value: _vm.errors.has("location"),
                            expression: "errors.has('location')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("location")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col md:w-1/3 w-full" },
                  [
                    _c("label", [_vm._v("ថ្ងៃខែឆ្នាំទិញ")]),
                    _vm._v(" "),
                    _c("flat-pickr", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "w-full",
                      attrs: { name: "date", placeholder: "Choose Date" },
                      model: {
                        value: _vm.purchase.purchase_date,
                        callback: function($$v) {
                          _vm.$set(_vm.purchase, "purchase_date", $$v)
                        },
                        expression: "purchase.purchase_date"
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
                            value: _vm.errors.has("purchase_date"),
                            expression: "errors.has('purchase_date')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("purchase_date")))]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vx-row my-3" }, [
                _c(
                  "div",
                  { staticClass: "vx-col md:w-1/3 w-full" },
                  [
                    _c("label", [_vm._v("Purchase Status")]),
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
                        name: "purchase_status",
                        options: ["received", "pending"]
                      },
                      model: {
                        value: _vm.purchase.purchase_status,
                        callback: function($$v) {
                          _vm.$set(_vm.purchase, "purchase_status", $$v)
                        },
                        expression: "purchase.purchase_status"
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
                            value: _vm.errors.has("status"),
                            expression: "errors.has('status')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("status")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col md:w-1/3 w-full" },
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
                        value: _vm.purchase.description,
                        callback: function($$v) {
                          _vm.$set(_vm.purchase, "description", $$v)
                        },
                        expression: "purchase.description"
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
                _c("div", { staticClass: "vx-col md:w-1/3" }, [
                  _vm._v("\n                    Amount\n                    "),
                  _c("span", { staticClass: "text-6xl block" }, [
                    _vm._v("$" + _vm._s(_vm.purchase.total_balance))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("vs-divider", { attrs: { position: "left" } }, [
                _vm._v("បញ្ជីទំនិញ")
              ]),
              _vm._v(" "),
              _c("table", { staticClass: "vs-table vs-table--tbody-table" }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", [_vm._v("ល.រ")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("ឈ្មោះ")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("ពិពណ៌នា")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("ចំនួន")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("តម្លៃទិញ")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("តម្លៃលក់")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("សរុប")]),
                    _vm._v(" "),
                    _c("th")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.purchase.items, function(tr, indextr) {
                    return _c("tr", { key: indextr }, [
                      _c("td", { staticClass: "py-1" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(indextr + 1) +
                            "\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { attrs: { width: "400" } },
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
                              filterBy: _vm.searchProduct,
                              label: "name",
                              name: "product-" + indextr,
                              options: _vm.all_products
                            },
                            on: {
                              input: function($event) {
                                return _vm.selectProduct(tr.id, indextr)
                              }
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "option",
                                  fn: function(option) {
                                    return [
                                      _c("vs-list-item", {
                                        attrs: {
                                          title:
                                            "ID: " +
                                            option.id +
                                            " ឈ្មោះ​ " +
                                            option.name,
                                          subtitle:
                                            "តម្លៃលក់ " +
                                            option.default_purchase +
                                            " តម្លៃទិញ " +
                                            option.default_sale
                                        }
                                      })
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            ),
                            model: {
                              value: tr.id,
                              callback: function($$v) {
                                _vm.$set(tr, "id", $$v)
                              },
                              expression: "tr.id"
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
                                  value: _vm.errors.has("product-" + indextr),
                                  expression: "errors.has(`product-${indextr}`)"
                                }
                              ],
                              staticClass: "text-danger text-sm"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("product-" + indextr))
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                        " +
                            _vm._s(tr.description) +
                            "\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("vs-input-number", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: {
                              color: "danger",
                              min: "0",
                              name: "qty-" + indextr
                            },
                            model: {
                              value: tr.qty,
                              callback: function($$v) {
                                _vm.$set(tr, "qty", $$v)
                              },
                              expression: "tr.qty"
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
                                  value: _vm.errors.has("qty-" + indextr),
                                  expression: "errors.has(`qty-${indextr}`)"
                                }
                              ],
                              staticClass: "text-danger text-sm"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("qty-" + indextr)))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("vs-input-number", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: {
                              color: "danger",
                              min: "0",
                              name: "purchase_price-" + indextr
                            },
                            model: {
                              value: tr.purchase_price,
                              callback: function($$v) {
                                _vm.$set(tr, "purchase_price", $$v)
                              },
                              expression: "tr.purchase_price"
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
                                  value: _vm.errors.has(
                                    "purchase_price-" + indextr
                                  ),
                                  expression:
                                    "errors.has(`purchase_price-${indextr}`)"
                                }
                              ],
                              staticClass: "text-danger text-sm"
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("purchase_price-" + indextr)
                                )
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("vs-input-number", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: {
                              color: "danger",
                              min: "0",
                              name: "sale_price-" + indextr
                            },
                            model: {
                              value: tr.sale_price,
                              callback: function($$v) {
                                _vm.$set(tr, "sale_price", $$v)
                              },
                              expression: "tr.sale_price"
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
                                  value: _vm.errors.has(
                                    "sale_price-" + indextr
                                  ),
                                  expression:
                                    "errors.has(`sale_price-${indextr}`)"
                                }
                              ],
                              staticClass: "text-danger text-sm"
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("sale_price-" + indextr)
                                )
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                        " +
                            _vm._s((tr.amount = tr.purchase_price * tr.qty)) +
                            "\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "py-1" },
                        [
                          _c("vs-button", {
                            attrs: {
                              icon: "icon-trash-2",
                              color: "warning",
                              "icon-pack": "feather",
                              type: "flat"
                            },
                            on: {
                              click: function($event) {
                                return _vm.removeItemLine(indextr)
                              }
                            }
                          })
                        ],
                        1
                      )
                    ])
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "rounded-none my-3",
                  attrs: {
                    icon: "icon-plus",
                    "icon-pack": "feather",
                    type: "line"
                  },
                  on: { click: _vm.addItemLine }
                },
                [_vm._v("បន្ថែមទំនិញ")]
              ),
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
                        { staticClass: "vx-col md:w-1/2 w-full" },
                        [
                          _c("label", [_vm._v("ប្រាក់ទិញទំនិញ")]),
                          _vm._v(" "),
                          _c("vs-input-number", {
                            attrs: {
                              color: "warning",
                              min: "0",
                              max: _vm.purchase.total_balance,
                              label: "ប្រាក់ទិញទំនិញ:"
                            },
                            model: {
                              value: _vm.purchase.balance,
                              callback: function($$v) {
                                _vm.$set(_vm.purchase, "balance", $$v)
                              },
                              expression: "purchase.balance"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col md:w-1/2 w-full" },
                        [
                          _c("label", [_vm._v("ទឹកប្រាក់ជំពាក់")]),
                          _vm._v(" "),
                          _c("vs-input", {
                            staticClass: "w-full",
                            attrs: {
                              step: "any",
                              readonly: "",
                              type: "number"
                            },
                            model: {
                              value: (_vm.purchase.due_balance =
                                _vm.purchase.total_balance -
                                _vm.purchase.balance),
                              callback: function($$v) {
                                _vm.$set(
                                  (_vm.purchase.due_balance =
                                    _vm.purchase.total_balance - _vm.purchase),
                                  "balance",
                                  $$v
                                )
                              },
                              expression:
                                "purchase.due_balance = purchase.total_balance - purchase.balance"
                            }
                          })
                        ],
                        1
                      )
                    ])
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
                      on: { click: _vm.storePurchase }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/editPurchase.vue?vue&type=template&id=6d380342&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/purchase/editPurchase.vue?vue&type=template&id=6d380342&scoped=true& ***!
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
            width: "90%",
            height: "auto",
            scrollable: true,
            pivotY: 0.2,
            clickToClose: false,
            name: "edit-purchase"
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
                    return _vm.$modal.hide("edit-purchase")
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
              _c("div", { staticClass: "vx-row my-3" }, [
                _c(
                  "div",
                  { staticClass: "vx-col md:w-1/3 w-full" },
                  [
                    _c("label", [_vm._v("អ្នកផ្គត់ផ្គង់")]),
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
                            filterBy: _vm.searchSupplier,
                            label: "name",
                            name: "supplier",
                            options: _vm.all_suppliers
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "option",
                              fn: function(option) {
                                return [
                                  _c("vs-list-item", {
                                    attrs: {
                                      title:
                                        "ឈ្មោះ​ " +
                                        option.name +
                                        " ក្រុមហ៊ុន " +
                                        option.company,
                                      subtitle:
                                        "ទំនាក់ទំនង " +
                                        option.contact +
                                        " អាស័យដ្ឋាន " +
                                        option.address
                                    }
                                  })
                                ]
                              }
                            }
                          ]),
                          model: {
                            value: _vm.purchase.supplier,
                            callback: function($$v) {
                              _vm.$set(_vm.purchase, "supplier", $$v)
                            },
                            expression: "purchase.supplier"
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
                                  return _vm.$refs.addSupplier.show()
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
                            value: _vm.errors.has("supplier"),
                            expression: "errors.has('supplier')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("supplier")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col md:w-1/3 w-full" },
                  [
                    _c("label", [_vm._v("ទីតាំង")]),
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
                      attrs: { name: "location", options: ["Ly Put Garage"] },
                      model: {
                        value: _vm.purchase.location,
                        callback: function($$v) {
                          _vm.$set(_vm.purchase, "location", $$v)
                        },
                        expression: "purchase.location"
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
                            value: _vm.errors.has("location"),
                            expression: "errors.has('location')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("location")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col md:w-1/3 w-full" },
                  [
                    _c("label", [_vm._v("ថ្ងៃខែឆ្នាំទិញ")]),
                    _vm._v(" "),
                    _c("flat-pickr", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "w-full",
                      attrs: { name: "date", placeholder: "Choose Date" },
                      model: {
                        value: _vm.purchase.purchase_date,
                        callback: function($$v) {
                          _vm.$set(_vm.purchase, "purchase_date", $$v)
                        },
                        expression: "purchase.purchase_date"
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
                            value: _vm.errors.has("purchase_date"),
                            expression: "errors.has('purchase_date')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("purchase_date")))]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vx-row my-3" }, [
                _c(
                  "div",
                  { staticClass: "vx-col md:w-1/3 w-full" },
                  [
                    _c("label", [_vm._v("Purchase Status")]),
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
                        name: "purchase_status",
                        options: ["received", "pending"]
                      },
                      model: {
                        value: _vm.purchase.purchase_status,
                        callback: function($$v) {
                          _vm.$set(_vm.purchase, "purchase_status", $$v)
                        },
                        expression: "purchase.purchase_status"
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
                            value: _vm.errors.has("status"),
                            expression: "errors.has('status')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("status")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col md:w-1/3 w-full" },
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
                        value: _vm.purchase.description,
                        callback: function($$v) {
                          _vm.$set(_vm.purchase, "description", $$v)
                        },
                        expression: "purchase.description"
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
                _c("div", { staticClass: "vx-col md:w-1/3 shadow-md" }, [
                  _c("div", { staticClass: "vx-row" }, [
                    _c("div", { staticClass: "vx-col md:w-1/2 w-full" }, [
                      _vm._v(
                        "\n                            Amount\n                            "
                      ),
                      _c("span", { staticClass: "text-6xl block" }, [
                        _vm._v("$" + _vm._s(_vm.purchase.total_balance))
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("bar-code", {
                          attrs: {
                            value: _vm.purchase.id,
                            options: { displayValue: true }
                          }
                        })
                      ],
                      1
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("vs-divider", { attrs: { position: "left" } }, [
                _vm._v("បញ្ជីទំនិញ")
              ]),
              _vm._v(" "),
              _c("table", { staticClass: "vs-table vs-table--tbody-table" }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", [_vm._v("ល.រ")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("ឈ្មោះ")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("ពិពណ៌នា")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("ចំនួន")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("តម្លៃទិញ")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("តម្លៃលក់")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("សរុប")]),
                    _vm._v(" "),
                    _c("th")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.purchase.items, function(tr, indextr) {
                    return _c("tr", { key: indextr }, [
                      _c("td", { staticClass: "py-1" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(indextr + 1) +
                            "\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { attrs: { width: "400" } },
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
                              filterBy: _vm.searchProduct,
                              label: "name",
                              name: "product-" + indextr,
                              options: _vm.all_products
                            },
                            on: {
                              input: function($event) {
                                return _vm.selectProduct(tr.id, indextr)
                              }
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "option",
                                  fn: function(option) {
                                    return [
                                      _c("vs-list-item", {
                                        attrs: {
                                          title:
                                            "ID: " +
                                            option.id +
                                            " ឈ្មោះ​ " +
                                            option.name,
                                          subtitle:
                                            "តម្លៃលក់ " +
                                            option.default_purchase +
                                            " តម្លៃទិញ " +
                                            option.default_sale
                                        }
                                      })
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            ),
                            model: {
                              value: tr.id,
                              callback: function($$v) {
                                _vm.$set(tr, "id", $$v)
                              },
                              expression: "tr.id"
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
                                  value: _vm.errors.has("product-" + indextr),
                                  expression: "errors.has(`product-${indextr}`)"
                                }
                              ],
                              staticClass: "text-danger text-sm"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("product-" + indextr))
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                        " +
                            _vm._s(tr.description) +
                            "\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("vs-input-number", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: {
                              color: "danger",
                              min: "0",
                              name: "qty-" + indextr
                            },
                            model: {
                              value: tr.qty,
                              callback: function($$v) {
                                _vm.$set(tr, "qty", $$v)
                              },
                              expression: "tr.qty"
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
                                  value: _vm.errors.has("qty-" + indextr),
                                  expression: "errors.has(`qty-${indextr}`)"
                                }
                              ],
                              staticClass: "text-danger text-sm"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("qty-" + indextr)))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("vs-input-number", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: {
                              color: "danger",
                              min: "0",
                              name: "purchase_price-" + indextr
                            },
                            model: {
                              value: tr.purchase_price,
                              callback: function($$v) {
                                _vm.$set(tr, "purchase_price", $$v)
                              },
                              expression: "tr.purchase_price"
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
                                  value: _vm.errors.has(
                                    "purchase_price-" + indextr
                                  ),
                                  expression:
                                    "errors.has(`purchase_price-${indextr}`)"
                                }
                              ],
                              staticClass: "text-danger text-sm"
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("purchase_price-" + indextr)
                                )
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("vs-input-number", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: {
                              color: "danger",
                              min: "0",
                              name: "sale_price-" + indextr
                            },
                            model: {
                              value: tr.sale_price,
                              callback: function($$v) {
                                _vm.$set(tr, "sale_price", $$v)
                              },
                              expression: "tr.sale_price"
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
                                  value: _vm.errors.has(
                                    "sale_price-" + indextr
                                  ),
                                  expression:
                                    "errors.has(`sale_price-${indextr}`)"
                                }
                              ],
                              staticClass: "text-danger text-sm"
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("sale_price-" + indextr)
                                )
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                        " +
                            _vm._s((tr.amount = tr.purchase_price * tr.qty)) +
                            "\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "py-1" },
                        [
                          _c("vs-button", {
                            attrs: {
                              icon: "icon-trash-2",
                              color: "warning",
                              "icon-pack": "feather",
                              type: "flat"
                            },
                            on: {
                              click: function($event) {
                                return _vm.removeItemLine(indextr)
                              }
                            }
                          })
                        ],
                        1
                      )
                    ])
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "rounded-none my-3",
                  attrs: {
                    icon: "icon-plus",
                    "icon-pack": "feather",
                    type: "line"
                  },
                  on: { click: _vm.addItemLine }
                },
                [_vm._v("បន្ថែមទំនិញ")]
              ),
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
                        { staticClass: "vx-col md:w-1/2 w-full" },
                        [
                          _c("label", [_vm._v("ប្រាក់ទិញទំនិញ")]),
                          _vm._v(" "),
                          _c("vs-input-number", {
                            attrs: {
                              color: "warning",
                              min: "0",
                              max: _vm.purchase.total_balance,
                              label: "ប្រាក់ទិញទំនិញ:"
                            },
                            model: {
                              value: _vm.purchase.balance,
                              callback: function($$v) {
                                _vm.$set(_vm.purchase, "balance", $$v)
                              },
                              expression: "purchase.balance"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col md:w-1/2 w-full" },
                        [
                          _c("label", [_vm._v("ទឹកប្រាក់ជំពាក់")]),
                          _vm._v(" "),
                          _c("vs-input", {
                            staticClass: "w-full",
                            attrs: {
                              step: "any",
                              readonly: "",
                              type: "number"
                            },
                            model: {
                              value: (_vm.purchase.due_balance =
                                _vm.purchase.total_balance -
                                _vm.purchase.balance),
                              callback: function($$v) {
                                _vm.$set(
                                  (_vm.purchase.due_balance =
                                    _vm.purchase.total_balance - _vm.purchase),
                                  "balance",
                                  $$v
                                )
                              },
                              expression:
                                "purchase.due_balance = purchase.total_balance - purchase.balance"
                            }
                          })
                        ],
                        1
                      )
                    ])
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
                        icon: "icon-edit",
                        "icon-pack": "feather",
                        type: "relief"
                      },
                      on: {
                        click: function($event) {
                          return _vm.updatePurchase()
                        }
                      }
                    },
                    [_vm._v("កែប្រែ")]
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

/***/ "./resources/js/src/views/purchase/Purchase.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/purchase/Purchase.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Purchase_vue_vue_type_template_id_2d448556_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Purchase.vue?vue&type=template&id=2d448556&scoped=true& */ "./resources/js/src/views/purchase/Purchase.vue?vue&type=template&id=2d448556&scoped=true&");
/* harmony import */ var _Purchase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Purchase.vue?vue&type=script&lang=js& */ "./resources/js/src/views/purchase/Purchase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Purchase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Purchase_vue_vue_type_template_id_2d448556_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Purchase_vue_vue_type_template_id_2d448556_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2d448556",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/purchase/Purchase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/purchase/Purchase.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/purchase/Purchase.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Purchase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Purchase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/Purchase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Purchase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/purchase/Purchase.vue?vue&type=template&id=2d448556&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/purchase/Purchase.vue?vue&type=template&id=2d448556&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Purchase_vue_vue_type_template_id_2d448556_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Purchase.vue?vue&type=template&id=2d448556&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/Purchase.vue?vue&type=template&id=2d448556&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Purchase_vue_vue_type_template_id_2d448556_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Purchase_vue_vue_type_template_id_2d448556_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/purchase/addPayment.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/purchase/addPayment.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addPayment_vue_vue_type_template_id_2154b54e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPayment.vue?vue&type=template&id=2154b54e&scoped=true& */ "./resources/js/src/views/purchase/addPayment.vue?vue&type=template&id=2154b54e&scoped=true&");
/* harmony import */ var _addPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addPayment.vue?vue&type=script&lang=js& */ "./resources/js/src/views/purchase/addPayment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addPayment_vue_vue_type_template_id_2154b54e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addPayment_vue_vue_type_template_id_2154b54e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2154b54e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/purchase/addPayment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/purchase/addPayment.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/purchase/addPayment.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addPayment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/addPayment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/purchase/addPayment.vue?vue&type=template&id=2154b54e&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/purchase/addPayment.vue?vue&type=template&id=2154b54e&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayment_vue_vue_type_template_id_2154b54e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addPayment.vue?vue&type=template&id=2154b54e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/addPayment.vue?vue&type=template&id=2154b54e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayment_vue_vue_type_template_id_2154b54e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayment_vue_vue_type_template_id_2154b54e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/purchase/addPurchase.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/purchase/addPurchase.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addPurchase_vue_vue_type_template_id_a49ada84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPurchase.vue?vue&type=template&id=a49ada84&scoped=true& */ "./resources/js/src/views/purchase/addPurchase.vue?vue&type=template&id=a49ada84&scoped=true&");
/* harmony import */ var _addPurchase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addPurchase.vue?vue&type=script&lang=js& */ "./resources/js/src/views/purchase/addPurchase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addPurchase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addPurchase_vue_vue_type_template_id_a49ada84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addPurchase_vue_vue_type_template_id_a49ada84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a49ada84",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/purchase/addPurchase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/purchase/addPurchase.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/purchase/addPurchase.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addPurchase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addPurchase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/addPurchase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addPurchase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/purchase/addPurchase.vue?vue&type=template&id=a49ada84&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/purchase/addPurchase.vue?vue&type=template&id=a49ada84&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addPurchase_vue_vue_type_template_id_a49ada84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addPurchase.vue?vue&type=template&id=a49ada84&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/addPurchase.vue?vue&type=template&id=a49ada84&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addPurchase_vue_vue_type_template_id_a49ada84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addPurchase_vue_vue_type_template_id_a49ada84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/purchase/editPurchase.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/purchase/editPurchase.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editPurchase_vue_vue_type_template_id_6d380342_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editPurchase.vue?vue&type=template&id=6d380342&scoped=true& */ "./resources/js/src/views/purchase/editPurchase.vue?vue&type=template&id=6d380342&scoped=true&");
/* harmony import */ var _editPurchase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editPurchase.vue?vue&type=script&lang=js& */ "./resources/js/src/views/purchase/editPurchase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editPurchase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editPurchase_vue_vue_type_template_id_6d380342_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editPurchase_vue_vue_type_template_id_6d380342_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6d380342",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/purchase/editPurchase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/purchase/editPurchase.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/purchase/editPurchase.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editPurchase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editPurchase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/editPurchase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editPurchase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/purchase/editPurchase.vue?vue&type=template&id=6d380342&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/purchase/editPurchase.vue?vue&type=template&id=6d380342&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editPurchase_vue_vue_type_template_id_6d380342_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editPurchase.vue?vue&type=template&id=6d380342&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/purchase/editPurchase.vue?vue&type=template&id=6d380342&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editPurchase_vue_vue_type_template_id_6d380342_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editPurchase_vue_vue_type_template_id_6d380342_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);