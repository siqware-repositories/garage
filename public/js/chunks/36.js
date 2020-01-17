(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/Sale.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sale/Sale.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_editProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product/editProduct */ "./resources/js/src/views/product/editProduct.vue");
/* harmony import */ var _addPayment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addPayment */ "./resources/js/src/views/sale/addPayment.vue");
/* harmony import */ var _showInvoice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showInvoice */ "./resources/js/src/views/sale/showInvoice.vue");
/* harmony import */ var _addInvoice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addInvoice */ "./resources/js/src/views/sale/addInvoice.vue");
/* harmony import */ var _editInvoice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editInvoice */ "./resources/js/src/views/sale/editInvoice.vue");
/* harmony import */ var _printInvoice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./printInvoice */ "./resources/js/src/views/sale/printInvoice.vue");


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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Sale",
  components: {
    PrintInvoice: _printInvoice__WEBPACK_IMPORTED_MODULE_6__["default"],
    EditInvoice: _editInvoice__WEBPACK_IMPORTED_MODULE_5__["default"],
    AddInvoice: _addInvoice__WEBPACK_IMPORTED_MODULE_4__["default"],
    ShowInvoice: _showInvoice__WEBPACK_IMPORTED_MODULE_3__["default"],
    AddPayment: _addPayment__WEBPACK_IMPORTED_MODULE_2__["default"],
    EditProduct: _product_editProduct__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      invoice_id: '',
      selected_pending: [],
      selected_received: []
    };
  },
  computed: {
    all_invoices: function all_invoices() {
      return this.$store.getters.all_invoice;
    },
    all_product: function all_product() {
      return this.$store.getters.all_product;
    },
    all_purchases: function all_purchases() {
      return this.$store.getters.all_purchase;
    },
    all_invoice_received: function all_invoice_received() {
      var self = this;
      return self.all_invoices.filter(function (x) {
        return x.invoice_status === 'received';
      });
    },
    search_all_invoice_received: function search_all_invoice_received() {
      var self = this;
      return self.all_invoice_received.filter(function (x) {
        return self.invoice_id ? x.id === parseInt(self.invoice_id) : true;
      });
    },
    suggestion_all_invoice_received: function suggestion_all_invoice_received() {
      var self = this;
      return self.all_invoice_received.map(function (x) {
        return {
          id: String(x.id)
        };
      });
    },
    all_invoice_pending: function all_invoice_pending() {
      var self = this;
      return self.all_invoices.filter(function (x) {
        return x.invoice_status === 'pending';
      });
    },
    search_all_invoice_pending: function search_all_invoice_pending() {
      var self = this;
      return self.all_invoice_pending.filter(function (x) {
        return self.invoice_id ? x.id === parseInt(self.invoice_id) : true;
      });
    },
    suggestion_all_invoice_pending: function suggestion_all_invoice_pending() {
      var self = this;
      return self.all_invoice_pending.map(function (x) {
        return {
          id: String(x.id)
        };
      });
    },
    all_purchase_received: function all_purchase_received() {
      var self = this;
      return self.all_purchases.filter(function (x) {
        return x.purchase_status === 'received';
      });
    }
  },
  methods: {
    //destroy
    destroyInvoice: function () {
      var _destroyInvoice = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var self, promises;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = this;
                self.$vs.loading();
                promises = self.selected_pending.map(
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
                            return self.$store.dispatch('destroyInvoice', data.id);

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
                  self.selected_pending = [];
                  self.$vs.loading.close();
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function destroyInvoice() {
        return _destroyInvoice.apply(this, arguments);
      }

      return destroyInvoice;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/addCustomer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sale/addCustomer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "addCustomer",
  data: function data() {
    return {
      data: {
        name: null,
        contact: null,
        note: null,
        address: null
      }
    };
  },
  methods: {
    show: function show() {
      this.$modal.show('add-customer');
    },
    //store
    storeCustomer: function storeCustomer() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          self.$vs.loading();
          self.$store.dispatch('storeCustomer', self.data).then(function (data) {
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
      this.data = {
        name: null,
        contact: null,
        note: null,
        address: null
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/addInvoice.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sale/addInvoice.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _addCustomer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addCustomer */ "./resources/js/src/views/sale/addCustomer.vue");


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
//
//
//
//
//
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
  name: "addInvoice",
  components: {
    AddCustomer: _addCustomer__WEBPACK_IMPORTED_MODULE_7__["default"],
    AddBrand: _product_addBrand__WEBPACK_IMPORTED_MODULE_5__["default"],
    AddCategory: _product_addCategory__WEBPACK_IMPORTED_MODULE_4__["default"],
    AddUnit: _product_addUnit__WEBPACK_IMPORTED_MODULE_3__["default"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_6___default.a
  },
  data: function data() {
    return {
      invoice: {
        is_bundle: false,
        purchase_amount: 0,
        sale_amount: 0,
        customer: null,
        user_id: this.$store.state.AppActiveUser.uid,
        invoice_date: null,
        invoice_status: 'pending',
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
          sale_price: 1,
          amount: 1,
          inventory_type: '',
          remain_qty: ''
        }]
      }
    };
  },
  computed: {
    all_customer: function all_customer() {
      return this.$store.getters.all_customer;
    },
    all_purchase_details: function all_purchase_details() {
      return this.$store.getters.all_purchase_detail;
    },
    filtered_purchase_details: function filtered_purchase_details() {
      var self = this;
      return self.all_purchase_details.filter(function (x) {
        return x.inventory_type !== 'purchase_only';
      });
    },
    total: function total() {
      var self = this;
      var total = 0.0;
      self.invoice.items.forEach(function (item, index) {
        total += parseFloat(item.amount);
      });

      if (self.invoice.is_bundle) {
        self.invoice.total_balance = self.invoice.sale_amount;
        self.invoice.balance = self.invoice.sale_amount;
      } else {
        self.invoice.total_balance = total;
        self.invoice.balance = total;
      }

      return total;
    },
    total_qty: function total_qty() {
      var self = this;
      var total = 0;
      self.invoice.items.forEach(function (item, index) {
        total += parseFloat(item.qty);
      });
      self.invoice.qty = total;
      return total;
    }
  },
  updated: function updated() {
    var x = this.total_qty;
    var y = this.total;
  },
  methods: {
    searchCustomer: function searchCustomer(option, label, search) {
      return String(label).toLowerCase().indexOf(search.toLowerCase()) > -1 || String(option.note).toLowerCase().indexOf(search.toLowerCase()) > -1 || String(option.contact).toLowerCase().indexOf(search.toLowerCase()) > -1;
    },
    searchProduct: function searchProduct(option, label, search) {
      return (// String(label).toLowerCase().indexOf(search.toLowerCase()) > -1 ||
        String(option.product.id).toLowerCase().indexOf(search.toLowerCase()) > -1
        /*String(option.product.unit).toLowerCase().indexOf(search.toLowerCase()) > -1||
        String(option.product.brand).toLowerCase().indexOf(search.toLowerCase()) > -1||
        String(option.supplier.name).toLowerCase().indexOf(search.toLowerCase()) > -1||
        String(option.supplier.company).toLowerCase().indexOf(search.toLowerCase()) > -1||
        String(option.supplier.contact).toLowerCase().indexOf(search.toLowerCase()) > -1*/

      );
    },
    //add line
    addItemLine: function addItemLine() {
      var self = this;
      self.invoice.items.push({
        id: '',
        name: null,
        description: null,
        qty: 1,
        sale_price: 1,
        amount: 1,
        inventory_type: '',
        remain_qty: ''
      });
    },
    //remove line
    removeItemLine: function removeItemLine(index) {
      var self = this;
      self.invoice.items.splice(index, 1);
    },
    //select product
    selectProduct: function selectProduct(id, index) {
      var self = this;
      var selected = self.all_purchase_details.filter(function (x) {
        return parseInt(x.id) === parseInt(id.id);
      });
      self.invoice.items[index].name = selected[0].product.name;
      self.invoice.items[index].inventory_type = selected[0].inventory_type;
      self.invoice.items[index].remain_qty = selected[0].remain_qty;
      self.invoice.items[index].description = selected[0].product.description;
      self.invoice.items[index].sale_price = selected[0].sale;
    },
    show: function show() {
      this.$modal.show('add-invoice');
    },
    //store
    storeInvoice: function storeInvoice() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          self.$vs.loading();
          self.$store.dispatch('storeInvoice', self.invoice).then(function (data) {
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
      this.invoice = {
        is_bundle: false,
        purchase_amount: 0,
        sale_amount: 0,
        customer: null,
        user_id: this.$store.state.AppActiveUser.uid,
        invoice_date: null,
        invoice_status: 'pending',
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
          sale_price: 1,
          amount: 1,
          inventory_type: '',
          remain_qty: ''
        }]
      };
    },
    //image upload
    successUpload: function successUpload(file, res) {
      this.product.image = res.path;
    }
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var self;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              self = this;
              _context.next = 3;
              return self.$store.dispatch('fetchPurchaseDetail');

            case 3:
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
  }()
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/addPayment.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sale/addPayment.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
    updateInvoicePayment: function updateInvoicePayment() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          self.$vs.loading();
          self.$store.dispatch('updateInvoicePayment', self.data).then(
          /*#__PURE__*/
          function () {
            var _ref = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!data) {
                        _context.next = 8;
                        break;
                      }

                      self.$vs.notify({
                        time: 4000,
                        title: 'ប្រតិបត្តិការជោគជ័យ',
                        text: 'ទឹកប្រាក់បានបន្ថែម',
                        color: 'success',
                        iconPack: 'feather',
                        icon: 'icon-check',
                        position: 'top-center'
                      });
                      _context.next = 4;
                      return self.$store.dispatch('fetchInvoice');

                    case 4:
                      self.$emit('finished');
                      self.$modal.hide('add-payment');
                      _context.next = 9;
                      break;

                    case 8:
                      self.$vs.notify({
                        title: 'ប្រតិបត្តិការបរាជ័យ',
                        text: 'ទឹកប្រាក់មិនបានបន្ថែម',
                        color: 'danger',
                        iconPack: 'feather',
                        icon: 'icon-message-square',
                        position: 'top-center'
                      });

                    case 9:
                      self.$vs.loading.close();

                    case 10:
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
    }
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/editInvoice.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sale/editInvoice.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _addCustomer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addCustomer */ "./resources/js/src/views/sale/addCustomer.vue");


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
//
//
//
//
//
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
  name: "editInvoice",
  components: {
    AddCustomer: _addCustomer__WEBPACK_IMPORTED_MODULE_7__["default"],
    AddBrand: _product_addBrand__WEBPACK_IMPORTED_MODULE_5__["default"],
    AddCategory: _product_addCategory__WEBPACK_IMPORTED_MODULE_4__["default"],
    AddUnit: _product_addUnit__WEBPACK_IMPORTED_MODULE_3__["default"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_6___default.a
  },
  data: function data() {
    return {
      invoice: {
        id: null,
        is_bundle: false,
        purchase_amount: 0,
        sale_amount: 0,
        customer: null,
        user_id: this.$store.state.AppActiveUser.uid,
        invoice_date: null,
        invoice_status: 'pending',
        description: '',
        total_balance: null,
        balance: null,
        due_balance: 0,
        old_due: 0,
        amount: 0,
        qty: 0,
        items: [{
          id: '',
          name: null,
          description: null,
          qty: 1,
          sale_price: 1,
          amount: 1,
          inventory_type: '',
          remain_qty: ''
        }]
      }
    };
  },
  computed: {
    all_customer: function all_customer() {
      return this.$store.getters.all_customer;
    },
    all_purchase_details: function all_purchase_details() {
      return this.$store.getters.all_purchase_detail;
    },
    total: function total() {
      var self = this;
      var total = 0.0;
      self.invoice.items.forEach(function (item, index) {
        total += parseFloat(item.amount);
      });

      if (self.invoice.is_bundle) {
        self.invoice.total_balance = self.invoice.sale_amount;
        self.invoice.balance = self.invoice.sale_amount - self.invoice.old_due;
      } else {
        self.invoice.total_balance = total;
        self.invoice.balance = total - self.invoice.old_due;
      }

      return total;
    },
    total_qty: function total_qty() {
      var self = this;
      var total = 0;
      self.invoice.items.forEach(function (item, index) {
        total += parseFloat(item.qty);
      });
      self.invoice.qty = total;
      return total;
    }
  },
  updated: function updated() {
    var x = this.total_qty;
    var y = this.total;
  },
  methods: {
    searchCustomer: function searchCustomer(option, label, search) {
      return String(label).toLowerCase().indexOf(search.toLowerCase()) > -1 || String(option.note).toLowerCase().indexOf(search.toLowerCase()) > -1 || String(option.contact).toLowerCase().indexOf(search.toLowerCase()) > -1;
    },
    searchProduct: function searchProduct(option, label, search) {
      return String(label).toLowerCase().indexOf(search.toLowerCase()) > -1 || String(option.product.id).toLowerCase().indexOf(search.toLowerCase()) > -1 || String(option.product.unit).toLowerCase().indexOf(search.toLowerCase()) > -1 || String(option.product.brand).toLowerCase().indexOf(search.toLowerCase()) > -1 || String(option.supplier.name).toLowerCase().indexOf(search.toLowerCase()) > -1 || String(option.supplier.company).toLowerCase().indexOf(search.toLowerCase()) > -1 || String(option.supplier.contact).toLowerCase().indexOf(search.toLowerCase()) > -1;
    },
    //add line
    addItemLine: function addItemLine() {
      var self = this;
      self.invoice.items.push({
        id: '',
        name: null,
        description: null,
        qty: 1,
        sale_price: 1,
        amount: 1,
        inventory_type: '',
        remain_qty: ''
      });
    },
    //remove line
    removeItemLine: function removeItemLine(index) {
      var self = this;
      self.invoice.items.splice(index, 1);
    },
    //select product
    selectProduct: function selectProduct(id, index) {
      var self = this;
      var selected = self.all_purchase_details.filter(function (x) {
        return parseInt(x.id) === parseInt(id.id);
      });
      self.invoice.items[index].name = selected[0].product.name;
      self.invoice.items[index].inventory_type = selected[0].inventory_type;
      self.invoice.items[index].remain_qty = selected[0].remain_qty;
      self.invoice.items[index].description = selected[0].product.description;
      self.invoice.items[index].sale_price = selected[0].sale;
    },
    show: function show(data) {
      var self = this;
      this.$modal.show('edit-invoice');

      if (data.purchase_amount > 0) {
        self.invoice.is_bundle = true;
        self.invoice.purchase_amount = data.purchase_amount;
        self.invoice.sale_amount = data.amount;
      }

      self.invoice.id = data.id;
      self.invoice.customer = data.customer;
      self.invoice.invoice_date = data.date;
      self.invoice.invoice_status = data.invoice_status;
      self.invoice.description = data.description;
      self.invoice.old_due = data.due_balance;
      self.invoice.items = [];
      data.invoice_detail.forEach(function (item, index) {
        self.invoice.items.push({
          id: item.purchase_detail,
          name: item.purchase_detail.product.name,
          description: item.purchase_detail.product.description,
          qty: item.qty,
          sale_price: item.sale,
          amount: item.amount,
          inventory_type: item.inventory_type,
          remain_qty: item.purchase_detail.remain_qty
        });
      });
    },
    //store
    updateInvoice: function updateInvoice() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          self.$vs.loading();
          self.$store.dispatch('updateInvoice', self.invoice).then(function (data) {
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
              self.$emit('finished');
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
    //image upload
    successUpload: function successUpload(file, res) {
      this.product.image = res.path;
    }
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var self;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              self = this;
              _context.next = 3;
              return self.$store.dispatch('fetchPurchaseDetail');

            case 3:
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
  }()
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/printInvoice.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sale/printInvoice.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony import */ var _addSupplier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addSupplier */ "./resources/js/src/views/sale/addSupplier.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _xkeshi_vue_barcode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @xkeshi/vue-barcode */ "./node_modules/@xkeshi/vue-barcode/dist/vue-barcode.esm.js");
/* harmony import */ var vue_money_format__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-money-format */ "./node_modules/vue-money-format/src/main.js");
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! print-js */ "./node_modules/print-js/dist/print.js");
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_10__);


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










/* harmony default export */ __webpack_exports__["default"] = ({
  name: "printInvoice",
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
      data: {
        purchase_amount: 0,
        id: null,
        customer: {
          name: ''
        },
        balance: null,
        due_balance: null,
        invoice_status: null,
        invoice_date: null,
        description: null,
        items: []
      }
    };
  },
  computed: {
    total_amount: function total_amount() {
      return this.data.items.reduce(function (total, item) {
        return total + parseFloat(item.amount);
      }, 0);
    }
  },
  methods: {
    _print: function () {
      var _print2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var el, options;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                el = document.querySelector('#printMe');
                options = {
                  type: 'dataURL'
                };
                _context.next = 4;
                return this.$html2canvas(el, options);

              case 4:
                return _context.abrupt("return", _context.sent);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _print() {
        return _print2.apply(this, arguments);
      }

      return _print;
    }(),
    printHtml: function () {
      var _printHtml = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var image;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._print();

              case 2:
                image = _context2.sent;
                print_js__WEBPACK_IMPORTED_MODULE_10___default()(image, 'image');

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function printHtml() {
        return _printHtml.apply(this, arguments);
      }

      return printHtml;
    }(),
    show: function show(data) {
      var self = this;
      this.$modal.show('print-invoice');
      self.data.id = data.id;
      self.data.purchase_amount = data.purchase_amount;
      self.data.balance = data.balance;
      self.data.due_balance = data.due_balance;
      self.data.customer = data.customer;
      self.data.invoice_status = data.invoice_status;
      self.data.invoice_date = data.date;
      self.data.description = data.description;
      self.data.items = [];
      data.invoice_detail.forEach(function (item, index) {
        self.data.items.push({
          name: item.purchase_detail.product.name,
          description: item.purchase_detail.product.description,
          qty: item.qty,
          sale_price: item.sale,
          amount: 0,
          inventory_type: item.inventory_type
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/printInvoice.vue?vue&type=style&index=0&id=40366a24&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sale/printInvoice.vue?vue&type=style&index=0&id=40366a24&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table[data-v-40366a24], td[data-v-40366a24], th[data-v-40366a24] { color: #246ca8\n}[dir] table[data-v-40366a24], [dir] td[data-v-40366a24], [dir] th[data-v-40366a24] {\n  border: 1px solid #246ca8\n}\ntable[data-v-40366a24] {\n  border-collapse: collapse;\n  width: 100%;\n}\n[dir=ltr] th[data-v-40366a24] { text-align: left;\n}\n[dir=rtl] th[data-v-40366a24] {\n  text-align: right;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/printInvoice.vue?vue&type=style&index=0&id=40366a24&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sale/printInvoice.vue?vue&type=style&index=0&id=40366a24&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./printInvoice.vue?vue&type=style&index=0&id=40366a24&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/printInvoice.vue?vue&type=style&index=0&id=40366a24&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/Sale.vue?vue&type=template&id=7d8c0e15&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sale/Sale.vue?vue&type=template&id=7d8c0e15&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
                  return _vm.$refs.addInvoice.show()
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
                            color: "success",
                            type: "relief",
                            "icon-pack": "feather",
                            icon: "icon-printer"
                          },
                          on: {
                            click: function($event) {
                              return _vm.$refs.printInvoice.show(
                                _vm.selected_received[0]
                              )
                            }
                          }
                        },
                        [_vm._v("បោះពុម្ភ")]
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
                              return _vm.$refs.showInvoice.show(
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
              _c("vue-instant", {
                staticClass: "mt-base",
                attrs: {
                  id: "purchase_rec",
                  "suggestion-attribute": "id",
                  suggestions: _vm.suggestion_all_invoice_received,
                  type: "google"
                },
                on: {
                  clear: function($event) {
                    _vm.invoice_id = ""
                  }
                },
                model: {
                  value: _vm.invoice_id,
                  callback: function($$v) {
                    _vm.invoice_id = $$v
                  },
                  expression: "invoice_id"
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
                    data: _vm.search_all_invoice_received
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
                                  attrs: { data: data[indextr].customer.name }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].customer.name) +
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
                      _c("vs-th", [_vm._v("Customer")]),
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
                      _c("vs-th", { attrs: { "sort-key": "date" } }, [
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
                            color: "warning",
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
                            color: "success",
                            type: "relief",
                            "icon-pack": "feather",
                            icon: "icon-eye"
                          },
                          on: {
                            click: function($event) {
                              return _vm.$refs.showInvoice.show(
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
                            type: "relief",
                            "icon-pack": "feather",
                            icon: "icon-printer"
                          },
                          on: {
                            click: function($event) {
                              return _vm.$refs.printInvoice.show(
                                _vm.selected_pending[0]
                              )
                            }
                          }
                        },
                        [_vm._v("បោះពុម្ភ")]
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
                              return _vm.$refs.editInvoice.show(
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
                          on: { click: _vm.destroyInvoice }
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
              _c("vue-instant", {
                staticClass: "mt-base",
                attrs: {
                  id: "purchase_pen",
                  "suggestion-attribute": "id",
                  suggestions: _vm.suggestion_all_invoice_pending,
                  type: "google"
                },
                on: {
                  clear: function($event) {
                    _vm.invoice_id = ""
                  }
                },
                model: {
                  value: _vm.invoice_id,
                  callback: function($$v) {
                    _vm.invoice_id = $$v
                  },
                  expression: "invoice_id"
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
                    data: _vm.search_all_invoice_pending
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
                                  attrs: { data: data[indextr].customer.name }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].customer.name) +
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
                      _c("vs-th", [_vm._v("Customer")]),
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
                      _c("vs-th", { attrs: { "sort-key": "date" } }, [
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
      _c("show-invoice", { ref: "showInvoice" }),
      _vm._v(" "),
      _c("print-invoice", { ref: "printInvoice" }),
      _vm._v(" "),
      _c("add-invoice", { ref: "addInvoice" }),
      _vm._v(" "),
      _c("edit-invoice", {
        ref: "editInvoice",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/addCustomer.vue?vue&type=template&id=7aa04f61&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sale/addCustomer.vue?vue&type=template&id=7aa04f61&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
            name: "add-customer"
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
                    return _vm.$modal.hide("add-customer")
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
                            value: _vm.data.name,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "name", $$v)
                            },
                            expression: "data.name"
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
                            value: _vm.data.contact,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "contact", $$v)
                            },
                            expression: "data.contact"
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
                            value: _vm.data.note,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "note", $$v)
                            },
                            expression: "data.note"
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
                        value: _vm.data.address,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "address", $$v)
                        },
                        expression: "data.address"
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
                      on: { click: _vm.storeCustomer }
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/addInvoice.vue?vue&type=template&id=51ec9c0c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sale/addInvoice.vue?vue&type=template&id=51ec9c0c&scoped=true& ***!
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
            name: "add-invoice"
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
                    return _vm.$modal.hide("add-invoice")
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
                    _c("label", [_vm._v("អតិថិជន")]),
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
                            filterBy: _vm.searchCustomer,
                            label: "name",
                            name: "customer",
                            options: _vm.all_customer
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "option",
                              fn: function(option) {
                                return [
                                  _c("vs-list-item", {
                                    attrs: {
                                      title: "ឈ្មោះ​ " + option.name,
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
                            value: _vm.invoice.customer,
                            callback: function($$v) {
                              _vm.$set(_vm.invoice, "customer", $$v)
                            },
                            expression: "invoice.customer"
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
                                  return _vm.$refs.addCustomer.show()
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
                            value: _vm.errors.has("customer"),
                            expression: "errors.has('customer')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("customer")))]
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
                      attrs: {
                        name: "invoice_date",
                        placeholder: "Choose Date"
                      },
                      model: {
                        value: _vm.invoice.invoice_date,
                        callback: function($$v) {
                          _vm.$set(_vm.invoice, "invoice_date", $$v)
                        },
                        expression: "invoice.invoice_date"
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
                            value: _vm.errors.has("invoice_date"),
                            expression: "errors.has('invoice_date')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("invoice_date")))]
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
                    _c("label", [_vm._v("Invoice Status")]),
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
                        name: "invoice_status",
                        options: ["received", "pending"]
                      },
                      model: {
                        value: _vm.invoice.invoice_status,
                        callback: function($$v) {
                          _vm.$set(_vm.invoice, "invoice_status", $$v)
                        },
                        expression: "invoice.invoice_status"
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
                        value: _vm.invoice.description,
                        callback: function($$v) {
                          _vm.$set(_vm.invoice, "description", $$v)
                        },
                        expression: "invoice.description"
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
                    _vm._v("$" + _vm._s(_vm.invoice.total_balance))
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
                  _vm._l(_vm.invoice.items, function(tr, indextr) {
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
                        { attrs: { width: "600" } },
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
                              getOptionLabel: function(opt) {
                                return opt.product.name
                              },
                              name: "product-" + indextr,
                              options: _vm.filtered_purchase_details
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
                                            "កូដ: " +
                                            option.product.id +
                                            " - ឈ្មោះ: " +
                                            option.product.name +
                                            " - តម្លៃលក់: " +
                                            option.sale,
                                          subtitle:
                                            "Unit: " +
                                            option.product.unit +
                                            " - Brand: " +
                                            option.product.brand +
                                            " - Inventory Type: " +
                                            option.inventory_type
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("vs-list-item", {
                                        attrs: {
                                          title:
                                            "អ្នកផ្គត់ផ្គង់៖ " +
                                            option.supplier.name +
                                            " ក្រុមហ៊ុន៖ " +
                                            option.supplier.company,
                                          subtitle:
                                            "ទំនាក់ទំនង " +
                                            option.supplier.contact
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
                          tr.inventory_type === "service"
                            ? _c("vs-input-number", {
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
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          tr.inventory_type !== "service"
                            ? _c("vs-input-number", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'"
                                  }
                                ],
                                attrs: {
                                  color: "success",
                                  min: "0",
                                  max: tr.remain_qty,
                                  name: "qty-" + indextr
                                },
                                model: {
                                  value: tr.qty,
                                  callback: function($$v) {
                                    _vm.$set(tr, "qty", $$v)
                                  },
                                  expression: "tr.qty"
                                }
                              })
                            : _vm._e(),
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
                            _vm._s((tr.amount = tr.sale_price * tr.qty)) +
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
                          _c("label", [_vm._v("ប្រាក់លក់ទំនិញ")]),
                          _vm._v(" "),
                          _c("vs-input-number", {
                            attrs: {
                              color: "warning",
                              min: "0",
                              max: _vm.invoice.total_balance,
                              label: "ប្រាក់លក់ទំនិញ:"
                            },
                            model: {
                              value: _vm.invoice.balance,
                              callback: function($$v) {
                                _vm.$set(_vm.invoice, "balance", $$v)
                              },
                              expression: "invoice.balance"
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
                              value: (_vm.invoice.due_balance =
                                _vm.invoice.total_balance -
                                _vm.invoice.balance),
                              callback: function($$v) {
                                _vm.$set(
                                  (_vm.invoice.due_balance =
                                    _vm.invoice.total_balance - _vm.invoice),
                                  "balance",
                                  $$v
                                )
                              },
                              expression:
                                "invoice.due_balance = invoice.total_balance - invoice.balance"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "vs-divider",
                      { attrs: { position: "left" } },
                      [
                        _c(
                          "vs-checkbox",
                          {
                            model: {
                              value: _vm.invoice.is_bundle,
                              callback: function($$v) {
                                _vm.$set(_vm.invoice, "is_bundle", $$v)
                              },
                              expression: "invoice.is_bundle"
                            }
                          },
                          [_vm._v("ទំនិញដំុ?")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.invoice.is_bundle
                      ? _c("div", { staticClass: "vx-row" }, [
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full" },
                            [
                              _c("label", [_vm._v("តម្លៃទិញ")]),
                              _vm._v(" "),
                              _c("vs-input-number", {
                                attrs: { min: "0", label: "តម្លៃទិញ:" },
                                model: {
                                  value: _vm.invoice.purchase_amount,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.invoice,
                                      "purchase_amount",
                                      $$v
                                    )
                                  },
                                  expression: "invoice.purchase_amount"
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
                              _c("label", [_vm._v("តម្លៃលក់")]),
                              _vm._v(" "),
                              _c("vs-input-number", {
                                attrs: { min: "0", label: "តម្លៃលក់:" },
                                model: {
                                  value: _vm.invoice.sale_amount,
                                  callback: function($$v) {
                                    _vm.$set(_vm.invoice, "sale_amount", $$v)
                                  },
                                  expression: "invoice.sale_amount"
                                }
                              })
                            ],
                            1
                          )
                        ])
                      : _vm._e()
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
                      on: { click: _vm.storeInvoice }
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
      _c("add-customer", { ref: "addCustomer" }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/addPayment.vue?vue&type=template&id=a2cae75a&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sale/addPayment.vue?vue&type=template&id=a2cae75a&scoped=true& ***!
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
      _vm._v("\n    hi\n    "),
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
                  on: { click: _vm.updateInvoicePayment }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/editInvoice.vue?vue&type=template&id=10a240f6&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sale/editInvoice.vue?vue&type=template&id=10a240f6&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
            name: "edit-invoice"
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
                    return _vm.$modal.hide("edit-invoice")
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
                    _c("label", [_vm._v("អតិថិជន")]),
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
                            filterBy: _vm.searchCustomer,
                            label: "name",
                            name: "customer",
                            options: _vm.all_customer
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "option",
                              fn: function(option) {
                                return [
                                  _c("vs-list-item", {
                                    attrs: {
                                      title: "ឈ្មោះ​ " + option.name,
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
                            value: _vm.invoice.customer,
                            callback: function($$v) {
                              _vm.$set(_vm.invoice, "customer", $$v)
                            },
                            expression: "invoice.customer"
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
                                  return _vm.$refs.addCustomer.show()
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
                            value: _vm.errors.has("customer"),
                            expression: "errors.has('customer')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("customer")))]
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
                      attrs: {
                        name: "invoice_date",
                        placeholder: "Choose Date"
                      },
                      model: {
                        value: _vm.invoice.invoice_date,
                        callback: function($$v) {
                          _vm.$set(_vm.invoice, "invoice_date", $$v)
                        },
                        expression: "invoice.invoice_date"
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
                            value: _vm.errors.has("invoice_date"),
                            expression: "errors.has('invoice_date')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("invoice_date")))]
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
                    _c("label", [_vm._v("Invoice Status")]),
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
                        name: "invoice_status",
                        options: ["received", "pending"]
                      },
                      model: {
                        value: _vm.invoice.invoice_status,
                        callback: function($$v) {
                          _vm.$set(_vm.invoice, "invoice_status", $$v)
                        },
                        expression: "invoice.invoice_status"
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
                        value: _vm.invoice.description,
                        callback: function($$v) {
                          _vm.$set(_vm.invoice, "description", $$v)
                        },
                        expression: "invoice.description"
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
                    _vm._v("$" + _vm._s(_vm.invoice.total_balance))
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
                  _vm._l(_vm.invoice.items, function(tr, indextr) {
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
                        { attrs: { width: "600" } },
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
                              getOptionLabel: function(opt) {
                                return opt.product.name
                              },
                              name: "product-" + indextr,
                              options: _vm.all_purchase_details
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
                                            "កូដ: " +
                                            option.product.id +
                                            " - ឈ្មោះ: " +
                                            option.product.name +
                                            " - តម្លៃលក់: " +
                                            option.sale,
                                          subtitle:
                                            "Unit: " +
                                            option.product.unit +
                                            " - Brand: " +
                                            option.product.brand +
                                            " - Inventory Type: " +
                                            option.inventory_type
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("vs-list-item", {
                                        attrs: {
                                          title:
                                            "អ្នកផ្គត់ផ្គង់៖ " +
                                            option.supplier.name +
                                            " ក្រុមហ៊ុន៖ " +
                                            option.supplier.company,
                                          subtitle:
                                            "ទំនាក់ទំនង " +
                                            option.supplier.contact
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
                          tr.inventory_type === "service"
                            ? _c("vs-input-number", {
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
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          tr.inventory_type !== "service"
                            ? _c("vs-input-number", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'"
                                  }
                                ],
                                attrs: {
                                  color: "success",
                                  min: "0",
                                  max: tr.remain_qty,
                                  name: "qty-" + indextr
                                },
                                model: {
                                  value: tr.qty,
                                  callback: function($$v) {
                                    _vm.$set(tr, "qty", $$v)
                                  },
                                  expression: "tr.qty"
                                }
                              })
                            : _vm._e(),
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
                            _vm._s((tr.amount = tr.sale_price * tr.qty)) +
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
                              max: _vm.invoice.total_balance,
                              label: "ប្រាក់ទិញទំនិញ:"
                            },
                            model: {
                              value: _vm.invoice.balance,
                              callback: function($$v) {
                                _vm.$set(_vm.invoice, "balance", $$v)
                              },
                              expression: "invoice.balance"
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
                              value: (_vm.invoice.due_balance =
                                _vm.invoice.total_balance -
                                _vm.invoice.balance),
                              callback: function($$v) {
                                _vm.$set(
                                  (_vm.invoice.due_balance =
                                    _vm.invoice.total_balance - _vm.invoice),
                                  "balance",
                                  $$v
                                )
                              },
                              expression:
                                "invoice.due_balance = invoice.total_balance - invoice.balance"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "vs-divider",
                      { attrs: { position: "left" } },
                      [
                        _c(
                          "vs-checkbox",
                          {
                            model: {
                              value: _vm.invoice.is_bundle,
                              callback: function($$v) {
                                _vm.$set(_vm.invoice, "is_bundle", $$v)
                              },
                              expression: "invoice.is_bundle"
                            }
                          },
                          [_vm._v("ទំនិញដំុ?")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.invoice.is_bundle
                      ? _c("div", { staticClass: "vx-row" }, [
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full" },
                            [
                              _c("label", [_vm._v("តម្លៃទិញ")]),
                              _vm._v(" "),
                              _c("vs-input-number", {
                                attrs: { min: "0", label: "តម្លៃទិញ:" },
                                model: {
                                  value: _vm.invoice.purchase_amount,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.invoice,
                                      "purchase_amount",
                                      $$v
                                    )
                                  },
                                  expression: "invoice.purchase_amount"
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
                              _c("label", [_vm._v("តម្លៃលក់")]),
                              _vm._v(" "),
                              _c("vs-input-number", {
                                attrs: { min: "0", label: "តម្លៃលក់:" },
                                model: {
                                  value: _vm.invoice.sale_amount,
                                  callback: function($$v) {
                                    _vm.$set(_vm.invoice, "sale_amount", $$v)
                                  },
                                  expression: "invoice.sale_amount"
                                }
                              })
                            ],
                            1
                          )
                        ])
                      : _vm._e()
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
                      on: { click: _vm.updateInvoice }
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
      _c("add-customer", { ref: "addCustomer" }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/printInvoice.vue?vue&type=template&id=40366a24&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sale/printInvoice.vue?vue&type=template&id=40366a24&scoped=true& ***!
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
            name: "print-invoice"
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
                    return _vm.$modal.hide("print-invoice")
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
                _c("img", {
                  staticClass: "mb-base",
                  attrs: {
                    src: "/images/header/invoice-header.png",
                    width: "90%",
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("table", { attrs: { border: "0" } }, [
                  _c("tr", [
                    _c("td", [
                      _vm._v("អតិថិជន "),
                      _c("br"),
                      _vm._v("Customer")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Invoice Status")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("លក់ពី "), _c("br"), _vm._v("Sold from")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v("ពិពណ៌នា"),
                      _c("br"),
                      _vm._v("Description")
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v("ថ្ងៃខែឆ្នាំលក់​ "),
                      _c("br"),
                      _vm._v("Sold from")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Barcode")])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [
                      _vm._v(
                        "\n                            ឈ្មោះ: " +
                          _vm._s(_vm.data.customer.name)
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                            ទំនាក់ទំនង: " +
                          _vm._s(_vm.data.customer.contact)
                      ),
                      _c("br")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.data.invoice_status))]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Ly put")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.data.description))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.data.invoice_date))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "p-2" },
                      [
                        _c("bar-code", {
                          attrs: {
                            value: _vm.data.id,
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
                _c("table", [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("ល.រ "), _c("br"), _vm._v("No")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("ឈ្មោះ"), _c("br"), _vm._v("Name")]),
                      _vm._v(" "),
                      _c("th", [
                        _vm._v("ពិពណ៌នា"),
                        _c("br"),
                        _vm._v("Description")
                      ]),
                      _vm._v(" "),
                      _c("th", [_vm._v("ចំនួន"), _c("br"), _vm._v("Qty")]),
                      _vm._v(" "),
                      _c("th", [
                        _vm._v("តម្លៃលក់"),
                        _c("br"),
                        _vm._v("Unit Price")
                      ]),
                      _vm._v(" "),
                      _c("th", [_vm._v("សរុប"), _c("br"), _vm._v("Amount")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.data.items, function(tr, indextr) {
                      return _c("tr", { key: indextr }, [
                        _c("td", { staticClass: "pl-2 print:pl-2" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(indextr + 1) +
                              "\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "pl-2 print:pl-2" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(tr.name) +
                              "\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "pl-2 print:pl-2" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(tr.description) +
                              "\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "pl-2 print:pl-2" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(tr.qty) +
                              "\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "pl-2 print:pl-2" },
                          [
                            tr.inventory_type !== "bundle"
                              ? _c("money-format", {
                                  attrs: {
                                    value: parseFloat(tr.sale_price),
                                    locale: "en",
                                    "currency-code": "USD"
                                  }
                                })
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "pl-2 print:pl-2" },
                          [
                            tr.inventory_type !== "bundle"
                              ? _c("money-format", {
                                  attrs: {
                                    value: parseFloat(
                                      (tr.amount = tr.sale_price * tr.qty)
                                    ),
                                    locale: "en",
                                    "currency-code": "USD"
                                  }
                                })
                              : _vm._e()
                          ],
                          1
                        )
                      ])
                    }),
                    0
                  ),
                  _vm._v(" "),
                  !parseFloat(_vm.data.purchase_amount) > 0
                    ? _c("tfoot", [
                        _c("tr", [
                          _c("td"),
                          _vm._v(" "),
                          _c("td"),
                          _vm._v(" "),
                          _c("td"),
                          _vm._v(" "),
                          _c("td"),
                          _vm._v(" "),
                          _c("td", { staticClass: "md:text-right" }, [
                            _vm._v(
                              "\n                            សរុប\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "pl-2 print:pl-2" },
                            [
                              _c("money-format", {
                                attrs: {
                                  value: _vm.total_amount,
                                  locale: "en",
                                  "currency-code": "USD"
                                }
                              })
                            ],
                            1
                          )
                        ])
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("vs-divider"),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-row", staticStyle: { color: "#246ca8" } },
                  [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/4 print:w-1/4 w-full" },
                      [
                        _c("label", [_vm._v("ប្រាក់ទិញទំនិញ")]),
                        _vm._v(" "),
                        _c("money-format", {
                          attrs: {
                            value: parseFloat(_vm.data.balance),
                            locale: "en",
                            "currency-code": "USD"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/4 print:w-1/4 w-full" },
                      [
                        _c("label", [_vm._v("ទឹកប្រាក់ជំពាក់")]),
                        _vm._v(" "),
                        _c("money-format", {
                          attrs: {
                            value: parseFloat(_vm.data.due_balance),
                            locale: "en",
                            "currency-code": "USD"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/4 print:w-1/4 w-full" },
                      [
                        _vm._v("\n                        អ្នកលក់/Seller "),
                        _c("br"),
                        _vm._v(" "),
                        _c("br")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/4 print:w-1/4 w-full" },
                      [
                        _vm._v("\n                        អ្នកទិញ/Buyer "),
                        _c("br"),
                        _vm._v(" "),
                        _c("br")
                      ]
                    )
                  ]
                )
              ],
              1
            ),
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

/***/ "./resources/js/src/views/sale/Sale.vue":
/*!**********************************************!*\
  !*** ./resources/js/src/views/sale/Sale.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sale_vue_vue_type_template_id_7d8c0e15_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sale.vue?vue&type=template&id=7d8c0e15&scoped=true& */ "./resources/js/src/views/sale/Sale.vue?vue&type=template&id=7d8c0e15&scoped=true&");
/* harmony import */ var _Sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sale.vue?vue&type=script&lang=js& */ "./resources/js/src/views/sale/Sale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sale_vue_vue_type_template_id_7d8c0e15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sale_vue_vue_type_template_id_7d8c0e15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7d8c0e15",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/sale/Sale.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/sale/Sale.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/sale/Sale.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/Sale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/sale/Sale.vue?vue&type=template&id=7d8c0e15&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/sale/Sale.vue?vue&type=template&id=7d8c0e15&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sale_vue_vue_type_template_id_7d8c0e15_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sale.vue?vue&type=template&id=7d8c0e15&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/Sale.vue?vue&type=template&id=7d8c0e15&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sale_vue_vue_type_template_id_7d8c0e15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sale_vue_vue_type_template_id_7d8c0e15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/sale/addCustomer.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/sale/addCustomer.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addCustomer_vue_vue_type_template_id_7aa04f61_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addCustomer.vue?vue&type=template&id=7aa04f61&scoped=true& */ "./resources/js/src/views/sale/addCustomer.vue?vue&type=template&id=7aa04f61&scoped=true&");
/* harmony import */ var _addCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addCustomer.vue?vue&type=script&lang=js& */ "./resources/js/src/views/sale/addCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addCustomer_vue_vue_type_template_id_7aa04f61_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addCustomer_vue_vue_type_template_id_7aa04f61_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7aa04f61",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/sale/addCustomer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/sale/addCustomer.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/sale/addCustomer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addCustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/addCustomer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/sale/addCustomer.vue?vue&type=template&id=7aa04f61&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/sale/addCustomer.vue?vue&type=template&id=7aa04f61&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addCustomer_vue_vue_type_template_id_7aa04f61_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addCustomer.vue?vue&type=template&id=7aa04f61&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/addCustomer.vue?vue&type=template&id=7aa04f61&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addCustomer_vue_vue_type_template_id_7aa04f61_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addCustomer_vue_vue_type_template_id_7aa04f61_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/sale/addInvoice.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/sale/addInvoice.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addInvoice_vue_vue_type_template_id_51ec9c0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addInvoice.vue?vue&type=template&id=51ec9c0c&scoped=true& */ "./resources/js/src/views/sale/addInvoice.vue?vue&type=template&id=51ec9c0c&scoped=true&");
/* harmony import */ var _addInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addInvoice.vue?vue&type=script&lang=js& */ "./resources/js/src/views/sale/addInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addInvoice_vue_vue_type_template_id_51ec9c0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addInvoice_vue_vue_type_template_id_51ec9c0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "51ec9c0c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/sale/addInvoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/sale/addInvoice.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/sale/addInvoice.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addInvoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/addInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/sale/addInvoice.vue?vue&type=template&id=51ec9c0c&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/sale/addInvoice.vue?vue&type=template&id=51ec9c0c&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addInvoice_vue_vue_type_template_id_51ec9c0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addInvoice.vue?vue&type=template&id=51ec9c0c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/addInvoice.vue?vue&type=template&id=51ec9c0c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addInvoice_vue_vue_type_template_id_51ec9c0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addInvoice_vue_vue_type_template_id_51ec9c0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/sale/addPayment.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/sale/addPayment.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addPayment_vue_vue_type_template_id_a2cae75a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPayment.vue?vue&type=template&id=a2cae75a&scoped=true& */ "./resources/js/src/views/sale/addPayment.vue?vue&type=template&id=a2cae75a&scoped=true&");
/* harmony import */ var _addPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addPayment.vue?vue&type=script&lang=js& */ "./resources/js/src/views/sale/addPayment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addPayment_vue_vue_type_template_id_a2cae75a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addPayment_vue_vue_type_template_id_a2cae75a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a2cae75a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/sale/addPayment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/sale/addPayment.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/sale/addPayment.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addPayment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/addPayment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/sale/addPayment.vue?vue&type=template&id=a2cae75a&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/sale/addPayment.vue?vue&type=template&id=a2cae75a&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayment_vue_vue_type_template_id_a2cae75a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addPayment.vue?vue&type=template&id=a2cae75a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/addPayment.vue?vue&type=template&id=a2cae75a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayment_vue_vue_type_template_id_a2cae75a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayment_vue_vue_type_template_id_a2cae75a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/sale/editInvoice.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/sale/editInvoice.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editInvoice_vue_vue_type_template_id_10a240f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editInvoice.vue?vue&type=template&id=10a240f6&scoped=true& */ "./resources/js/src/views/sale/editInvoice.vue?vue&type=template&id=10a240f6&scoped=true&");
/* harmony import */ var _editInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editInvoice.vue?vue&type=script&lang=js& */ "./resources/js/src/views/sale/editInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editInvoice_vue_vue_type_template_id_10a240f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editInvoice_vue_vue_type_template_id_10a240f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "10a240f6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/sale/editInvoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/sale/editInvoice.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/sale/editInvoice.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editInvoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/editInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/sale/editInvoice.vue?vue&type=template&id=10a240f6&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/sale/editInvoice.vue?vue&type=template&id=10a240f6&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editInvoice_vue_vue_type_template_id_10a240f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editInvoice.vue?vue&type=template&id=10a240f6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/editInvoice.vue?vue&type=template&id=10a240f6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editInvoice_vue_vue_type_template_id_10a240f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editInvoice_vue_vue_type_template_id_10a240f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/sale/printInvoice.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/sale/printInvoice.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _printInvoice_vue_vue_type_template_id_40366a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printInvoice.vue?vue&type=template&id=40366a24&scoped=true& */ "./resources/js/src/views/sale/printInvoice.vue?vue&type=template&id=40366a24&scoped=true&");
/* harmony import */ var _printInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printInvoice.vue?vue&type=script&lang=js& */ "./resources/js/src/views/sale/printInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _printInvoice_vue_vue_type_style_index_0_id_40366a24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printInvoice.vue?vue&type=style&index=0&id=40366a24&scoped=true&lang=css& */ "./resources/js/src/views/sale/printInvoice.vue?vue&type=style&index=0&id=40366a24&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _printInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _printInvoice_vue_vue_type_template_id_40366a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _printInvoice_vue_vue_type_template_id_40366a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "40366a24",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/sale/printInvoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/sale/printInvoice.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/sale/printInvoice.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_printInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./printInvoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/printInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_printInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/sale/printInvoice.vue?vue&type=style&index=0&id=40366a24&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/sale/printInvoice.vue?vue&type=style&index=0&id=40366a24&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_printInvoice_vue_vue_type_style_index_0_id_40366a24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./printInvoice.vue?vue&type=style&index=0&id=40366a24&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/printInvoice.vue?vue&type=style&index=0&id=40366a24&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_printInvoice_vue_vue_type_style_index_0_id_40366a24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_printInvoice_vue_vue_type_style_index_0_id_40366a24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_printInvoice_vue_vue_type_style_index_0_id_40366a24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_printInvoice_vue_vue_type_style_index_0_id_40366a24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_printInvoice_vue_vue_type_style_index_0_id_40366a24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/sale/printInvoice.vue?vue&type=template&id=40366a24&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/sale/printInvoice.vue?vue&type=template&id=40366a24&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_printInvoice_vue_vue_type_template_id_40366a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./printInvoice.vue?vue&type=template&id=40366a24&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sale/printInvoice.vue?vue&type=template&id=40366a24&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_printInvoice_vue_vue_type_template_id_40366a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_printInvoice_vue_vue_type_template_id_40366a24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);