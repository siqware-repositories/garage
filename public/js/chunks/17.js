(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/Employee.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/Employee.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _addEmployee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addEmployee */ "./resources/js/src/views/employee/addEmployee.vue");
/* harmony import */ var _editEmployee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editEmployee */ "./resources/js/src/views/employee/editEmployee.vue");
/* harmony import */ var _addPayRoll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addPayRoll */ "./resources/js/src/views/employee/addPayRoll.vue");
/* harmony import */ var _editPayRoll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editPayRoll */ "./resources/js/src/views/employee/editPayRoll.vue");
/* harmony import */ var vue_money_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-money-format */ "./node_modules/vue-money-format/src/main.js");
/* harmony import */ var _showPayRoll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showPayRoll */ "./resources/js/src/views/employee/showPayRoll.vue");


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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Employee",
  components: {
    ShowPayRoll: _showPayRoll__WEBPACK_IMPORTED_MODULE_6__["default"],
    EditPayRoll: _editPayRoll__WEBPACK_IMPORTED_MODULE_4__["default"],
    AddPayRoll: _addPayRoll__WEBPACK_IMPORTED_MODULE_3__["default"],
    EditEmployee: _editEmployee__WEBPACK_IMPORTED_MODULE_2__["default"],
    AddEmployee: _addEmployee__WEBPACK_IMPORTED_MODULE_1__["default"],
    'money-format': vue_money_format__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      selected: [],
      selected_payroll: []
    };
  },
  computed: {
    all_employees: function all_employees() {
      return this.$store.getters.all_employee;
    },
    all_payrolls: function all_payrolls() {
      return this.$store.getters.all_payroll;
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
              return this.fetchEmployee();

            case 2:
              _context.next = 4;
              return this.fetchUser();

            case 4:
              _context.next = 6;
              return this.fetchPayroll();

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
    confirmDelete: function confirmDelete() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB",
        text: 'ចុចពាក្យ Accept ដើម្បីលុប!',
        accept: this.destroyEmployee
      });
    },
    confirmDeletePayroll: function confirmDeletePayroll() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB",
        text: 'ចុចពាក្យ Accept ដើម្បីលុប!',
        accept: this.destroyPayroll
      });
    },
    //fetch payroll
    fetchPayroll: function () {
      var _fetchPayroll = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$store.dispatch('fetchPayroll');

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchPayroll() {
        return _fetchPayroll.apply(this, arguments);
      }

      return fetchPayroll;
    }(),
    //fetch employee
    fetchUser: function () {
      var _fetchUser = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.$store.dispatch('fetchUser');

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function fetchUser() {
        return _fetchUser.apply(this, arguments);
      }

      return fetchUser;
    }(),
    //fetch employee
    fetchEmployee: function () {
      var _fetchEmployee = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.$store.dispatch('fetchEmployee');

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function fetchEmployee() {
        return _fetchEmployee.apply(this, arguments);
      }

      return fetchEmployee;
    }(),
    calcTotalSalary: function calcTotalSalary(data) {
      return data.reduce(function (total, item) {
        return total + parseFloat(item.salary);
      }, 0);
    },
    //destroy
    destroyEmployee: function () {
      var _destroyEmployee = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var self, promises;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                self = this;
                self.$vs.loading();
                promises = self.selected.map(
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
                            return self.$store.dispatch('destroyEmployee', data.id);

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
                  self.selected = [];
                  self.$vs.loading.close();
                });

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function destroyEmployee() {
        return _destroyEmployee.apply(this, arguments);
      }

      return destroyEmployee;
    }(),
    //destroy payroll
    destroyPayroll: function () {
      var _destroyPayroll = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var self, promises;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                self = this;
                self.$vs.loading();
                promises = self.selected_payroll.map(
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(data) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return self.$store.dispatch('destroyPayroll', data.id);

                          case 2:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }());
                _context8.next = 5;
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
                  self.selected_payroll = [];
                  self.$vs.loading.close();
                });

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function destroyPayroll() {
        return _destroyPayroll.apply(this, arguments);
      }

      return destroyPayroll;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/addEmployee.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/addEmployee.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.min.css */ "./node_modules/flatpickr/dist/flatpickr.min.css");
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "addEmployee",
  components: {
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_3___default.a,
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_0___default.a,
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      data: {
        user_id: {
          id: 1,
          name: 'ជ្រើសរើស'
        },
        dob: null,
        name: null,
        contact: null,
        address: null,
        gender: 'ប្រុស',
        profile: '/images/placeholder/placeholder.png'
      },
      //dropzone option
      dropzoneOptions: {
        url: route('file.upload.thumb'),
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: "ដាក់រូបភាពបើមាន",
        thumbnailWidth: 150,
        thumbnailHeight: 150
      }
    };
  },
  computed: {
    all_users: function all_users() {
      return this.$store.getters.all_user;
    }
  },
  methods: {
    show: function show() {
      this.$modal.show('add-employee');
    },
    //store
    storeEmployee: function storeEmployee() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          self.$vs.loading();
          self.$store.dispatch('storeEmployee', self.data).then(function (data) {
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
        dob: null,
        name: null,
        contact: null,
        address: null,
        gender: 'ប្រុស',
        profile: '/images/placeholder/placeholder.png'
      };
    },
    //image upload
    successUpload: function successUpload(file, res) {
      this.data.profile = res.path;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/addPayRoll.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/addPayRoll.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.min.css */ "./node_modules/flatpickr/dist/flatpickr.min.css");
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_money_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-money-format */ "./node_modules/vue-money-format/src/main.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "addPayRoll",
  components: {
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_0___default.a,
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    'money-format': vue_money_format__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      data: {
        date: null,
        note: null,
        items: [{
          id: {
            id: 0,
            name: '',
            contact: ''
          },
          salary: 0
        }]
      }
    };
  },
  computed: {
    total_salary: function total_salary() {
      return this.data.items.reduce(function (total, item) {
        return total + parseFloat(item.salary);
      }, 0);
    }
  },
  methods: {
    confirmStore: function confirmStore() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'success',
        title: "\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB",
        text: 'ចុចពាក្យ Accept ដើម្បីរក្សាទុក!',
        accept: this.storePayroll
      });
    },
    show: function show(data) {
      var self = this;
      self.$modal.show('add-payroll');
      self.data.items = [];
      data.forEach(function (item, index) {
        self.data.items.push({
          id: item,
          salary: 0
        });
      });
    },
    //store
    storePayroll: function storePayroll() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          self.$vs.loading();
          self.$store.dispatch('storePayroll', self.data).then(function (data) {
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
              self.$modal.hide('add-payroll');
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/editEmployee.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/editEmployee.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.min.css */ "./node_modules/flatpickr/dist/flatpickr.min.css");
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "editEmployee",
  components: {
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_3___default.a,
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_0___default.a,
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      data: {
        id: null,
        user_id: {
          id: 1,
          name: 'ជ្រើសរើស'
        },
        dob: null,
        name: null,
        contact: null,
        address: null,
        gender: 'ប្រុស',
        profile: '/images/placeholder/placeholder.png'
      },
      //dropzone option
      dropzoneOptions: {
        url: route('file.upload.thumb'),
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: "ដាក់រូបភាពបើមាន",
        thumbnailWidth: 150,
        thumbnailHeight: 150
      }
    };
  },
  computed: {
    all_users: function all_users() {
      return this.$store.getters.all_user;
    }
  },
  methods: {
    //load profile
    loadProfile: function loadProfile() {
      this.$refs.profile.manuallyAddFile({
        size: 123
      }, this.data.profile);
    },
    show: function show(data) {
      this.$modal.show('edit-employee');
      this.data.id = data.id;
      this.data.user_id = data.user;
      this.data.dob = data.dob;
      this.data.name = data.name;
      this.data.contact = data.contact;
      this.data.address = data.address;
      this.data.gender = data.gender;
      this.data.profile = data.profile;
    },
    //store
    updateEmployee: function updateEmployee() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          self.$vs.loading();
          self.$store.dispatch('updateEmployee', self.data).then(function (data) {
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
      this.data.profile = res.path;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/editPayRoll.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/editPayRoll.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.min.css */ "./node_modules/flatpickr/dist/flatpickr.min.css");
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_money_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-money-format */ "./node_modules/vue-money-format/src/main.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "editPayRoll",
  components: {
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_0___default.a,
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    'money-format': vue_money_format__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      data: {
        id: null,
        date: null,
        note: null,
        items: [{
          id: {
            id: 0,
            name: '',
            contact: ''
          },
          salary: 0
        }]
      }
    };
  },
  computed: {
    total_salary: function total_salary() {
      return this.data.items.reduce(function (total, item) {
        return total + parseFloat(item.salary);
      }, 0);
    }
  },
  methods: {
    confirmUpdate: function confirmUpdate() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'success',
        title: "\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB",
        text: 'ចុចពាក្យ Accept ដើម្បីរក្សាទុក!',
        accept: this.updatePayroll
      });
    },
    show: function show(data) {
      var self = this;
      self.$modal.show('edit-payroll');
      self.data.id = data.id;
      self.data.date = data.date;
      self.data.note = data.note;
      self.data.items = [];
      data.pay_roll_detail.forEach(function (item, index) {
        self.data.items.push({
          id: item.employee,
          salary: item.salary
        });
      });
    },
    //store
    updatePayroll: function updatePayroll() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          self.$vs.loading();
          self.$store.dispatch('updatePayroll', self.data).then(function (data) {
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
    //remove line
    removeLine: function removeLine(index) {
      this.data.items.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/showPayRoll.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/showPayRoll.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatpickr/dist/flatpickr.min.css */ "./node_modules/flatpickr/dist/flatpickr.min.css");
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_money_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-money-format */ "./node_modules/vue-money-format/src/main.js");
/* harmony import */ var _xkeshi_vue_barcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @xkeshi/vue-barcode */ "./node_modules/@xkeshi/vue-barcode/dist/vue-barcode.esm.js");
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! print-js */ "./node_modules/print-js/dist/print.js");
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_6__);


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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "showPayRoll",
  components: {
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_1___default.a,
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default.a,
    'money-format': vue_money_format__WEBPACK_IMPORTED_MODULE_4__["default"],
    'bar-code': _xkeshi_vue_barcode__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      data: {
        id: null,
        date: null,
        note: null,
        items: [{
          id: {
            id: 0,
            name: '',
            contact: ''
          },
          salary: 0
        }]
      }
    };
  },
  computed: {
    total_salary: function total_salary() {
      return this.data.items.reduce(function (total, item) {
        return total + parseFloat(item.salary);
      }, 0);
    }
  },
  methods: {
    //print
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
                print_js__WEBPACK_IMPORTED_MODULE_6___default()(image, 'image');

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
    //end print
    confirmUpdate: function confirmUpdate() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'success',
        title: "\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB",
        text: 'ចុចពាក្យ Accept ដើម្បីរក្សាទុក!',
        accept: this.updatePayroll
      });
    },
    show: function show(data) {
      var self = this;
      self.$modal.show('show-payroll');
      self.data.id = data.id;
      self.data.date = data.date;
      self.data.note = data.note;
      self.data.items = [];
      data.pay_roll_detail.forEach(function (item, index) {
        self.data.items.push({
          id: item.employee,
          salary: item.salary
        });
      });
    },
    //store
    updatePayroll: function updatePayroll() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          self.$vs.loading();
          self.$store.dispatch('updatePayroll', self.data).then(function (data) {
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
    //remove line
    removeLine: function removeLine(index) {
      this.data.items.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/addPayRoll.vue?vue&type=style&index=0&id=52f4bbcb&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/addPayRoll.vue?vue&type=style&index=0&id=52f4bbcb&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] table[data-v-52f4bbcb], [dir] td[data-v-52f4bbcb], [dir] th[data-v-52f4bbcb] {\n  border: 1px solid black;\n}\ntable[data-v-52f4bbcb] {\n  border-collapse: collapse;\n  width: 100%;\n}\n[dir=ltr] th[data-v-52f4bbcb] {\n  text-align: left;\n}\n[dir=rtl] th[data-v-52f4bbcb] {\n  text-align: right;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/editPayRoll.vue?vue&type=style&index=0&id=4b225df8&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/editPayRoll.vue?vue&type=style&index=0&id=4b225df8&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] table[data-v-4b225df8], [dir] td[data-v-4b225df8], [dir] th[data-v-4b225df8] {\n  border: 1px solid black;\n}\ntable[data-v-4b225df8] {\n  border-collapse: collapse;\n  width: 100%;\n}\n[dir=ltr] th[data-v-4b225df8] {\n  text-align: left;\n}\n[dir=rtl] th[data-v-4b225df8] {\n  text-align: right;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/showPayRoll.vue?vue&type=style&index=0&id=0be6439e&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/showPayRoll.vue?vue&type=style&index=0&id=0be6439e&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] table[data-v-0be6439e], [dir] td[data-v-0be6439e], [dir] th[data-v-0be6439e] {\n  border: 1px solid black;\n}\ntable[data-v-0be6439e] {\n  border-collapse: collapse;\n  width: 100%;\n}\n[dir=ltr] th[data-v-0be6439e] {\n  text-align: left;\n}\n[dir=rtl] th[data-v-0be6439e] {\n  text-align: right;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/addPayRoll.vue?vue&type=style&index=0&id=52f4bbcb&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/addPayRoll.vue?vue&type=style&index=0&id=52f4bbcb&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addPayRoll.vue?vue&type=style&index=0&id=52f4bbcb&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/addPayRoll.vue?vue&type=style&index=0&id=52f4bbcb&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/editPayRoll.vue?vue&type=style&index=0&id=4b225df8&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/editPayRoll.vue?vue&type=style&index=0&id=4b225df8&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editPayRoll.vue?vue&type=style&index=0&id=4b225df8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/editPayRoll.vue?vue&type=style&index=0&id=4b225df8&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/showPayRoll.vue?vue&type=style&index=0&id=0be6439e&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/showPayRoll.vue?vue&type=style&index=0&id=0be6439e&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./showPayRoll.vue?vue&type=style&index=0&id=0be6439e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/showPayRoll.vue?vue&type=style&index=0&id=0be6439e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/Employee.vue?vue&type=template&id=327c0016&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/Employee.vue?vue&type=template&id=327c0016&scoped=true& ***!
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
        "vs-tabs",
        [
          _c(
            "vs-tab",
            { attrs: { label: "បុគ្គលិក" } },
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
                          return _vm.$refs.addEmployee.show()
                        }
                      }
                    },
                    [_vm._v("\n                    បន្ថែម\n                ")]
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
                              return _vm.$refs.editEmployee.show(
                                _vm.selected[0]
                              )
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    កែប្រែ\n                "
                          )
                        ]
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
                            icon: "icon-trash"
                          },
                          on: { click: _vm.confirmDelete }
                        },
                        [_vm._v("\n                    លុប\n                ")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.selected.length
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
                              return _vm.$refs.addPayRoll.show(_vm.selected)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    Payroll\n                "
                          )
                        ]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c("add-employee", { ref: "addEmployee" }),
              _vm._v(" "),
              _c("edit-employee", {
                ref: "editEmployee",
                on: {
                  finished: function($event) {
                    _vm.selected = []
                  }
                }
              }),
              _vm._v(" "),
              _c("add-pay-roll", {
                ref: "addPayRoll",
                on: {
                  finished: function($event) {
                    _vm.selected = []
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "vs-table",
                {
                  attrs: {
                    multiple: "",
                    stripe: "",
                    search: "",
                    data: _vm.all_employees
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(ref) {
                        var data = ref.data
                        return _vm._l(data, function(tr, index) {
                          return _c(
                            "vs-tr",
                            { key: index, attrs: { data: tr } },
                            [
                              _c("vs-td", { attrs: { data: tr.email } }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(tr.email) +
                                    "\n                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", { attrs: { data: tr.profile } }, [
                                _c("img", {
                                  attrs: {
                                    src: tr.profile,
                                    width: "75",
                                    alt: tr.profile
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("vs-td", { attrs: { data: tr.name } }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(tr.name) +
                                    "\n                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", { attrs: { data: tr.gender } }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(tr.gender) +
                                    "\n                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", { attrs: { data: tr.dob } }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(tr.dob) +
                                    "\n                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", { attrs: { data: tr.contact } }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(tr.contact) +
                                    "\n                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", { attrs: { data: tr.address } }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(tr.address) +
                                    "\n                        "
                                )
                              ])
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
                      _c("vs-th", [_vm._v("ID")]),
                      _vm._v(" "),
                      _c("vs-th"),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "name" } }, [
                        _vm._v("ឈ្មោះ")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "sex" } }, [
                        _vm._v("ភេទ")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "dob" } }, [
                        _vm._v("ថ្ងៃខែឆ្នាំកំណើត")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "contact" } }, [
                        _vm._v("ទំនាក់ទំនង")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "address" } }, [
                        _vm._v("អាស័យដ្ឋាន")
                      ])
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-tab",
            { attrs: { label: "បើកប្រាក់ខែ" } },
            [
              _c(
                "div",
                { staticClass: "flex btn-group" },
                [
                  _vm.selected_payroll.length === 1
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
                              return _vm.$refs.showPayroll.show(
                                _vm.selected_payroll[0]
                              )
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    បង្ហាញ\n                "
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.selected_payroll.length === 1
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
                              return _vm.$refs.editPayroll.show(
                                _vm.selected_payroll[0]
                              )
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    កែប្រែ\n                "
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.selected_payroll.length
                    ? _c(
                        "vs-button",
                        {
                          attrs: {
                            color: "danger",
                            type: "relief",
                            "icon-pack": "feather",
                            icon: "icon-trash"
                          },
                          on: { click: _vm.confirmDeletePayroll }
                        },
                        [_vm._v("\n                    លុប\n                ")]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c("show-pay-roll", {
                ref: "showPayroll",
                on: {
                  finished: function($event) {
                    _vm.selected_payroll = []
                  }
                }
              }),
              _vm._v(" "),
              _c("edit-pay-roll", {
                ref: "editPayroll",
                on: {
                  finished: function($event) {
                    _vm.selected_payroll = []
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "vs-table",
                {
                  attrs: {
                    multiple: "",
                    stripe: "",
                    search: "",
                    data: _vm.all_payrolls
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(ref) {
                        var data = ref.data
                        return _vm._l(data, function(tr, index) {
                          return _c(
                            "vs-tr",
                            { key: index, attrs: { data: tr } },
                            [
                              _c("vs-td", { attrs: { data: tr.id } }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(tr.id) +
                                    "\n                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", { attrs: { data: tr.note } }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(tr.note) +
                                    "\n                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                [
                                  _c("money-format", {
                                    attrs: {
                                      value: _vm.calcTotalSalary(
                                        tr.pay_roll_detail
                                      ),
                                      locale: "en",
                                      "currency-code": "USD"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("vs-td", { attrs: { data: tr.date } }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(tr.date) +
                                    "\n                        "
                                )
                              ])
                            ],
                            1
                          )
                        })
                      }
                    }
                  ]),
                  model: {
                    value: _vm.selected_payroll,
                    callback: function($$v) {
                      _vm.selected_payroll = $$v
                    },
                    expression: "selected_payroll"
                  }
                },
                [
                  _c(
                    "template",
                    { slot: "thead" },
                    [
                      _c("vs-th", [_vm._v("ID")]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "note" } }, [
                        _vm._v("សំគាល់")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("ទឹកប្រាក់បើកសរុប")]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "date" } }, [
                        _vm._v("ថ្ងៃខែឆ្នាំបើក")
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/addEmployee.vue?vue&type=template&id=5e8684d0&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/addEmployee.vue?vue&type=template&id=5e8684d0&scoped=true& ***!
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
            name: "add-employee"
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
                    return _vm.$modal.hide("add-employee")
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
                _c("div", { staticClass: "vx-col md:w-3/4" }, [
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full mt-1" },
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
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("label", [_vm._v("ភេទ")]),
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
                          attrs: { name: "gender", options: ["ប្រុស", "ស្រី"] },
                          model: {
                            value: _vm.data.gender,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "gender", $$v)
                            },
                            expression: "data.gender"
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
                                value: _vm.errors.has("gender"),
                                expression: "errors.has('gender')"
                              }
                            ],
                            staticClass: "text-danger text-sm"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("gender")))]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-row mt-2" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("label", [_vm._v("ថ្ងៃខែឆ្នាំកំណើត")]),
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
                          attrs: { name: "dob", placeholder: "ជ្រើសរើស" },
                          model: {
                            value: _vm.data.dob,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "dob", $$v)
                            },
                            expression: "data.dob"
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
                                value: _vm.errors.has("dob"),
                                expression: "errors.has('dob')"
                              }
                            ],
                            staticClass: "text-danger text-sm"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("dob")))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("label", [_vm._v("អ្នកប្រើប្រាស់")]),
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
                            name: "user_id",
                            label: "name",
                            options: _vm.all_users
                          },
                          model: {
                            value: _vm.data.user_id,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "user_id", $$v)
                            },
                            expression: "data.user_id"
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
                                value: _vm.errors.has("user_id"),
                                expression: "errors.has('user_id')"
                              }
                            ],
                            staticClass: "text-danger text-sm"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("user_id")))]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-row mt-2" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
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
                          attrs: { name: "contact", label: "ទំនាក់ទំនង" },
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
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("label", [_vm._v("អាស័យដ្ឋានបច្ចុប្បន្ន និងកំណើត")]),
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
                          attrs: {
                            name: "address",
                            label: "អាស័យដ្ឋានបច្ចុប្បន្ន និងកំណើត"
                          },
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
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col md:w-1/4" },
                  [
                    _c("label", [_vm._v("ប្រូហ្វាល")]),
                    _vm._v(" "),
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
                      on: { click: _vm.storeEmployee }
                    },
                    [_vm._v("រក្សាទុក\n                ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/addPayRoll.vue?vue&type=template&id=52f4bbcb&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/addPayRoll.vue?vue&type=template&id=52f4bbcb&scoped=true& ***!
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
            name: "add-payroll"
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
                    return _vm.$modal.hide("add-payroll")
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
                _c(
                  "div",
                  { staticClass: "vx-col md:w-1/4 w-full" },
                  [
                    _c("label", [_vm._v("កាលបរិច្ឋេទ")]),
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
                      attrs: { name: "dob", placeholder: "ជ្រើសរើស" },
                      model: {
                        value: _vm.data.date,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "date", $$v)
                        },
                        expression: "data.date"
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
                            value: _vm.errors.has("dob"),
                            expression: "errors.has('dob')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("dob")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col md:w-3/4 w-full" },
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
                      attrs: { name: "note", label: "សំគាល់" },
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vx-row mt-2" }, [
                _c("div", { staticClass: "vx-col w-full" }, [
                  _c("table", [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("ល.រ")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("ឈ្មោះ")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("ទំនាក់ទំនង")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("ទឹកប្រាក់")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.data.items, function(item, index) {
                        return _c("tr", { key: index }, [
                          _c("td", { staticClass: "pl-3" }, [
                            _vm._v(_vm._s(index + 1))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "pl-3" }, [
                            _vm._v(_vm._s(item.id.name))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "pl-3" }, [
                            _vm._v(_vm._s(item.id.contact))
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "pl-3" },
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
                                  min: 0,
                                  name: index + "-salary",
                                  color: "warning"
                                },
                                model: {
                                  value: item.salary,
                                  callback: function($$v) {
                                    _vm.$set(item, "salary", $$v)
                                  },
                                  expression: "item.salary"
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
                                      value: _vm.errors.has(index + "-salary"),
                                      expression:
                                        "errors.has(`${index}-salary`)"
                                    }
                                  ],
                                  staticClass: "text-danger text-sm"
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.errors.first(index + "-salary"))
                                  )
                                ]
                              )
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
                        _c("td"),
                        _vm._v(" "),
                        _c("td"),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [
                          _vm._v("សរុប")
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "pl-3" },
                          [
                            _c("money-format", {
                              attrs: {
                                value: _vm.total_salary,
                                locale: "en",
                                "currency-code": "USD"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ])
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
                      on: { click: _vm.confirmStore }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/editEmployee.vue?vue&type=template&id=38854f7f&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/editEmployee.vue?vue&type=template&id=38854f7f&scoped=true& ***!
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
            name: "edit-employee"
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
                    return _vm.$modal.hide("edit-employee")
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
                _c("div", { staticClass: "vx-col md:w-3/4" }, [
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full mt-1" },
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
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("label", [_vm._v("ភេទ")]),
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
                          attrs: { name: "gender", options: ["ប្រុស", "ស្រី"] },
                          model: {
                            value: _vm.data.gender,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "gender", $$v)
                            },
                            expression: "data.gender"
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
                                value: _vm.errors.has("gender"),
                                expression: "errors.has('gender')"
                              }
                            ],
                            staticClass: "text-danger text-sm"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("gender")))]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-row mt-2" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("label", [_vm._v("ថ្ងៃខែឆ្នាំកំណើត")]),
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
                          attrs: { name: "dob", placeholder: "ជ្រើសរើស" },
                          model: {
                            value: _vm.data.dob,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "dob", $$v)
                            },
                            expression: "data.dob"
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
                                value: _vm.errors.has("dob"),
                                expression: "errors.has('dob')"
                              }
                            ],
                            staticClass: "text-danger text-sm"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("dob")))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("label", [_vm._v("អ្នកប្រើប្រាស់")]),
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
                            name: "user_id",
                            label: "name",
                            options: _vm.all_users
                          },
                          model: {
                            value: _vm.data.user_id,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "user_id", $$v)
                            },
                            expression: "data.user_id"
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
                                value: _vm.errors.has("user_id"),
                                expression: "errors.has('user_id')"
                              }
                            ],
                            staticClass: "text-danger text-sm"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("user_id")))]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-row mt-2" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full" },
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
                          attrs: { name: "contact", label: "ទំនាក់ទំនង" },
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
                      { staticClass: "vx-col md:w-1/2 w-full" },
                      [
                        _c("label", [_vm._v("អាស័យដ្ឋានបច្ចុប្បន្ន និងកំណើត")]),
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
                          attrs: {
                            name: "address",
                            label: "អាស័យដ្ឋានបច្ចុប្បន្ន និងកំណើត"
                          },
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
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col md:w-1/4" },
                  [
                    _c("label", [_vm._v("ប្រូហ្វាល")]),
                    _vm._v(" "),
                    _c("vue-dropzone", {
                      ref: "profile",
                      staticClass: "max-content p-1",
                      attrs: {
                        duplicateCheck: "",
                        id: "profile",
                        options: _vm.dropzoneOptions
                      },
                      on: {
                        "vdropzone-mounted": _vm.loadProfile,
                        "vdropzone-success": _vm.successUpload
                      }
                    })
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
                      on: { click: _vm.updateEmployee }
                    },
                    [_vm._v("កែប្រែ\n                ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/editPayRoll.vue?vue&type=template&id=4b225df8&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/editPayRoll.vue?vue&type=template&id=4b225df8&scoped=true& ***!
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
            name: "edit-payroll"
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
                    return _vm.$modal.hide("edit-payroll")
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
                _c(
                  "div",
                  { staticClass: "vx-col md:w-1/4 w-full" },
                  [
                    _c("label", [_vm._v("កាលបរិច្ឋេទ")]),
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
                      attrs: { name: "dob", placeholder: "ជ្រើសរើស" },
                      model: {
                        value: _vm.data.date,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "date", $$v)
                        },
                        expression: "data.date"
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
                            value: _vm.errors.has("dob"),
                            expression: "errors.has('dob')"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("dob")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col md:w-3/4 w-full" },
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
                      attrs: { name: "note", label: "សំគាល់" },
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vx-row mt-2" }, [
                _c("div", { staticClass: "vx-col w-full" }, [
                  _c("table", [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("ល.រ")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("ឈ្មោះ")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("ទំនាក់ទំនង")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("ទឹកប្រាក់")]),
                        _vm._v(" "),
                        _c("th")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.data.items, function(item, index) {
                        return _c("tr", { key: index }, [
                          _c("td", { staticClass: "pl-3" }, [
                            _vm._v(_vm._s(index + 1))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "pl-3" }, [
                            _vm._v(_vm._s(item.id.name))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "pl-3" }, [
                            _vm._v(_vm._s(item.id.contact))
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "pl-3" },
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
                                  min: 0,
                                  name: index + "-salary",
                                  color: "warning"
                                },
                                model: {
                                  value: item.salary,
                                  callback: function($$v) {
                                    _vm.$set(item, "salary", $$v)
                                  },
                                  expression: "item.salary"
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
                                      value: _vm.errors.has(index + "-salary"),
                                      expression:
                                        "errors.has(`${index}-salary`)"
                                    }
                                  ],
                                  staticClass: "text-danger text-sm"
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.errors.first(index + "-salary"))
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "pl-4" },
                            [
                              _c("vs-button", {
                                attrs: {
                                  size: "small",
                                  radius: "",
                                  color: "danger",
                                  icon: "icon-minus-square",
                                  "icon-pack": "feather",
                                  type: "flat"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.removeLine(index)
                                  }
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
                        _c("td"),
                        _vm._v(" "),
                        _c("td"),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [
                          _vm._v("សរុប")
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "pl-3" },
                          [
                            _c("money-format", {
                              attrs: {
                                value: _vm.total_salary,
                                locale: "en",
                                "currency-code": "USD"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td")
                      ])
                    ])
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
                      on: { click: _vm.confirmUpdate }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/showPayRoll.vue?vue&type=template&id=0be6439e&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/showPayRoll.vue?vue&type=template&id=0be6439e&scoped=true& ***!
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
            name: "show-payroll"
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
                    return _vm.$modal.hide("show-payroll")
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
              _c("div", { attrs: { id: "printMe" } }, [
                _c("div", { staticClass: "vx-row" }, [
                  _c("div", { staticClass: "vx-col w-full" }, [
                    _c("table", [
                      _c("thead", [
                        _c("tr", [
                          _c("th", [_vm._v("ថ្ងៃបើកប្រាក់ខែ")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("សំគាល់")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Barcode")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tbody", [
                        _c("tr", [
                          _c("td", [_vm._v(_vm._s(_vm.data.date))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.data.note))]),
                          _vm._v(" "),
                          _c(
                            "td",
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
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row mt-2" }, [
                  _c("div", { staticClass: "vx-col w-full" }, [
                    _c("table", [
                      _c("thead", [
                        _c("tr", [
                          _c("th", [_vm._v("ល.រ")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("ឈ្មោះ")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("ទំនាក់ទំនង")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("ទឹកប្រាក់")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.data.items, function(item, index) {
                          return _c("tr", { key: index }, [
                            _c("td", { staticClass: "pl-3" }, [
                              _vm._v(_vm._s(index + 1))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "pl-3" }, [
                              _vm._v(_vm._s(item.id.name))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "pl-3" }, [
                              _vm._v(_vm._s(item.id.contact))
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "pl-3" },
                              [
                                _c("money-format", {
                                  attrs: {
                                    value: parseFloat(item.salary),
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
                          _c("td"),
                          _vm._v(" "),
                          _c("td"),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-right" }, [
                            _vm._v("សរុប")
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "pl-3" },
                            [
                              _c("money-format", {
                                attrs: {
                                  value: _vm.total_salary,
                                  locale: "en",
                                  "currency-code": "USD"
                                }
                              })
                            ],
                            1
                          )
                        ])
                      ])
                    ])
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

/***/ "./resources/js/src/views/employee/Employee.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/employee/Employee.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Employee_vue_vue_type_template_id_327c0016_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Employee.vue?vue&type=template&id=327c0016&scoped=true& */ "./resources/js/src/views/employee/Employee.vue?vue&type=template&id=327c0016&scoped=true&");
/* harmony import */ var _Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employee.vue?vue&type=script&lang=js& */ "./resources/js/src/views/employee/Employee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Employee_vue_vue_type_template_id_327c0016_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Employee_vue_vue_type_template_id_327c0016_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "327c0016",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/employee/Employee.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/employee/Employee.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/employee/Employee.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Employee.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/Employee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/employee/Employee.vue?vue&type=template&id=327c0016&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/employee/Employee.vue?vue&type=template&id=327c0016&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_327c0016_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Employee.vue?vue&type=template&id=327c0016&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/Employee.vue?vue&type=template&id=327c0016&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_327c0016_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_327c0016_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/employee/addEmployee.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/employee/addEmployee.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addEmployee_vue_vue_type_template_id_5e8684d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addEmployee.vue?vue&type=template&id=5e8684d0&scoped=true& */ "./resources/js/src/views/employee/addEmployee.vue?vue&type=template&id=5e8684d0&scoped=true&");
/* harmony import */ var _addEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addEmployee.vue?vue&type=script&lang=js& */ "./resources/js/src/views/employee/addEmployee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addEmployee_vue_vue_type_template_id_5e8684d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addEmployee_vue_vue_type_template_id_5e8684d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5e8684d0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/employee/addEmployee.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/employee/addEmployee.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/employee/addEmployee.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addEmployee.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/addEmployee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/employee/addEmployee.vue?vue&type=template&id=5e8684d0&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/employee/addEmployee.vue?vue&type=template&id=5e8684d0&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addEmployee_vue_vue_type_template_id_5e8684d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addEmployee.vue?vue&type=template&id=5e8684d0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/addEmployee.vue?vue&type=template&id=5e8684d0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addEmployee_vue_vue_type_template_id_5e8684d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addEmployee_vue_vue_type_template_id_5e8684d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/employee/addPayRoll.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/employee/addPayRoll.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addPayRoll_vue_vue_type_template_id_52f4bbcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPayRoll.vue?vue&type=template&id=52f4bbcb&scoped=true& */ "./resources/js/src/views/employee/addPayRoll.vue?vue&type=template&id=52f4bbcb&scoped=true&");
/* harmony import */ var _addPayRoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addPayRoll.vue?vue&type=script&lang=js& */ "./resources/js/src/views/employee/addPayRoll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _addPayRoll_vue_vue_type_style_index_0_id_52f4bbcb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addPayRoll.vue?vue&type=style&index=0&id=52f4bbcb&scoped=true&lang=css& */ "./resources/js/src/views/employee/addPayRoll.vue?vue&type=style&index=0&id=52f4bbcb&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _addPayRoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addPayRoll_vue_vue_type_template_id_52f4bbcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addPayRoll_vue_vue_type_template_id_52f4bbcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "52f4bbcb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/employee/addPayRoll.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/employee/addPayRoll.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/employee/addPayRoll.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayRoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addPayRoll.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/addPayRoll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayRoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/employee/addPayRoll.vue?vue&type=style&index=0&id=52f4bbcb&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/employee/addPayRoll.vue?vue&type=style&index=0&id=52f4bbcb&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayRoll_vue_vue_type_style_index_0_id_52f4bbcb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addPayRoll.vue?vue&type=style&index=0&id=52f4bbcb&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/addPayRoll.vue?vue&type=style&index=0&id=52f4bbcb&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayRoll_vue_vue_type_style_index_0_id_52f4bbcb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayRoll_vue_vue_type_style_index_0_id_52f4bbcb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayRoll_vue_vue_type_style_index_0_id_52f4bbcb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayRoll_vue_vue_type_style_index_0_id_52f4bbcb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayRoll_vue_vue_type_style_index_0_id_52f4bbcb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/employee/addPayRoll.vue?vue&type=template&id=52f4bbcb&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/employee/addPayRoll.vue?vue&type=template&id=52f4bbcb&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayRoll_vue_vue_type_template_id_52f4bbcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addPayRoll.vue?vue&type=template&id=52f4bbcb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/addPayRoll.vue?vue&type=template&id=52f4bbcb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayRoll_vue_vue_type_template_id_52f4bbcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addPayRoll_vue_vue_type_template_id_52f4bbcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/employee/editEmployee.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/employee/editEmployee.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editEmployee_vue_vue_type_template_id_38854f7f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editEmployee.vue?vue&type=template&id=38854f7f&scoped=true& */ "./resources/js/src/views/employee/editEmployee.vue?vue&type=template&id=38854f7f&scoped=true&");
/* harmony import */ var _editEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editEmployee.vue?vue&type=script&lang=js& */ "./resources/js/src/views/employee/editEmployee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editEmployee_vue_vue_type_template_id_38854f7f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editEmployee_vue_vue_type_template_id_38854f7f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "38854f7f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/employee/editEmployee.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/employee/editEmployee.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/employee/editEmployee.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editEmployee.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/editEmployee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/employee/editEmployee.vue?vue&type=template&id=38854f7f&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/employee/editEmployee.vue?vue&type=template&id=38854f7f&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editEmployee_vue_vue_type_template_id_38854f7f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editEmployee.vue?vue&type=template&id=38854f7f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/editEmployee.vue?vue&type=template&id=38854f7f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editEmployee_vue_vue_type_template_id_38854f7f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editEmployee_vue_vue_type_template_id_38854f7f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/employee/editPayRoll.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/employee/editPayRoll.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editPayRoll_vue_vue_type_template_id_4b225df8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editPayRoll.vue?vue&type=template&id=4b225df8&scoped=true& */ "./resources/js/src/views/employee/editPayRoll.vue?vue&type=template&id=4b225df8&scoped=true&");
/* harmony import */ var _editPayRoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editPayRoll.vue?vue&type=script&lang=js& */ "./resources/js/src/views/employee/editPayRoll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _editPayRoll_vue_vue_type_style_index_0_id_4b225df8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editPayRoll.vue?vue&type=style&index=0&id=4b225df8&scoped=true&lang=css& */ "./resources/js/src/views/employee/editPayRoll.vue?vue&type=style&index=0&id=4b225df8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _editPayRoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editPayRoll_vue_vue_type_template_id_4b225df8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editPayRoll_vue_vue_type_template_id_4b225df8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4b225df8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/employee/editPayRoll.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/employee/editPayRoll.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/employee/editPayRoll.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editPayRoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editPayRoll.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/editPayRoll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editPayRoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/employee/editPayRoll.vue?vue&type=style&index=0&id=4b225df8&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/employee/editPayRoll.vue?vue&type=style&index=0&id=4b225df8&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_editPayRoll_vue_vue_type_style_index_0_id_4b225df8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editPayRoll.vue?vue&type=style&index=0&id=4b225df8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/editPayRoll.vue?vue&type=style&index=0&id=4b225df8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_editPayRoll_vue_vue_type_style_index_0_id_4b225df8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_editPayRoll_vue_vue_type_style_index_0_id_4b225df8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_editPayRoll_vue_vue_type_style_index_0_id_4b225df8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_editPayRoll_vue_vue_type_style_index_0_id_4b225df8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_editPayRoll_vue_vue_type_style_index_0_id_4b225df8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/employee/editPayRoll.vue?vue&type=template&id=4b225df8&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/employee/editPayRoll.vue?vue&type=template&id=4b225df8&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editPayRoll_vue_vue_type_template_id_4b225df8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editPayRoll.vue?vue&type=template&id=4b225df8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/editPayRoll.vue?vue&type=template&id=4b225df8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editPayRoll_vue_vue_type_template_id_4b225df8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editPayRoll_vue_vue_type_template_id_4b225df8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/employee/showPayRoll.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/employee/showPayRoll.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showPayRoll_vue_vue_type_template_id_0be6439e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showPayRoll.vue?vue&type=template&id=0be6439e&scoped=true& */ "./resources/js/src/views/employee/showPayRoll.vue?vue&type=template&id=0be6439e&scoped=true&");
/* harmony import */ var _showPayRoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showPayRoll.vue?vue&type=script&lang=js& */ "./resources/js/src/views/employee/showPayRoll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _showPayRoll_vue_vue_type_style_index_0_id_0be6439e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showPayRoll.vue?vue&type=style&index=0&id=0be6439e&scoped=true&lang=css& */ "./resources/js/src/views/employee/showPayRoll.vue?vue&type=style&index=0&id=0be6439e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _showPayRoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _showPayRoll_vue_vue_type_template_id_0be6439e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _showPayRoll_vue_vue_type_template_id_0be6439e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0be6439e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/employee/showPayRoll.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/employee/showPayRoll.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/employee/showPayRoll.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showPayRoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./showPayRoll.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/showPayRoll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showPayRoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/employee/showPayRoll.vue?vue&type=style&index=0&id=0be6439e&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/employee/showPayRoll.vue?vue&type=style&index=0&id=0be6439e&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_showPayRoll_vue_vue_type_style_index_0_id_0be6439e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./showPayRoll.vue?vue&type=style&index=0&id=0be6439e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/showPayRoll.vue?vue&type=style&index=0&id=0be6439e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_showPayRoll_vue_vue_type_style_index_0_id_0be6439e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_showPayRoll_vue_vue_type_style_index_0_id_0be6439e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_showPayRoll_vue_vue_type_style_index_0_id_0be6439e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_showPayRoll_vue_vue_type_style_index_0_id_0be6439e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_showPayRoll_vue_vue_type_style_index_0_id_0be6439e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/employee/showPayRoll.vue?vue&type=template&id=0be6439e&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/employee/showPayRoll.vue?vue&type=template&id=0be6439e&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showPayRoll_vue_vue_type_template_id_0be6439e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./showPayRoll.vue?vue&type=template&id=0be6439e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/showPayRoll.vue?vue&type=template&id=0be6439e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showPayRoll_vue_vue_type_template_id_0be6439e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showPayRoll_vue_vue_type_template_id_0be6439e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);