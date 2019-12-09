(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addHome */ "./resources/js/src/views/addHome.vue");
/* harmony import */ var _editHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editHome */ "./resources/js/src/views/editHome.vue");
/* harmony import */ var _demo_Demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo/Demo */ "./resources/js/src/views/demo/Demo.vue");
//
//
//
//
//
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
  components: {
    Demo: _demo_Demo__WEBPACK_IMPORTED_MODULE_2__["default"],
    EditHome: _editHome__WEBPACK_IMPORTED_MODULE_1__["default"],
    AddHome: _addHome__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      is_popup: false,
      is_popup_edit: false,
      selected: [],
      'tableList': ['vs-th: Component', 'vs-tr: Component', 'vs-td: Component', 'thread: Slot', 'tbody: Slot', 'header: Slot'],
      users: [{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org"
      }, {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net"
      }, {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "website": "ramiro.info"
      }, {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "website": "kale.biz"
      }, {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "website": "demarco.info"
      }, {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "website": "ola.org"
      }, {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "website": "elvis.io"
      }, {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "website": "jacynthe.com"
      }, {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "website": "conrad.com"
      }, {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "website": "ambrose.net"
      }],
      data: 'Working on the mix',
      options: {}
    };
  },
  methods: {
    syncPopup: function syncPopup(val) {
      this.is_popup = val;
    },
    syncPopupEdit: function syncPopupEdit(val) {
      this.is_popup_edit = val;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/addHome.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/addHome.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "addHome",
  props: ['is_popup'],
  data: function data() {
    return {
      /*user data*/
      user: {
        profile: null,
        category: 'ICT',
        role: 'user',
        type: 'employee',
        name: '',
        email: '',
        telephone: '',
        password: '',
        content: 'Content'
      },
      categories: [{
        id: 1,
        category: 'ICT'
      }, {
        id: 2,
        category: 'Administrator'
      }, {
        id: 3,
        category: 'Faculty of Science and Technology'
      }],
      data: 'Working on the mix',
      options: {}
    };
  },
  computed: {
    popupSync: {
      get: function get() {
        return this.is_popup;
      },
      set: function set(val) {
        this.$emit('update-is_popup', val);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/demo/Demo.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/demo/Demo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _addDemo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addDemo */ "./resources/js/src/views/demo/addDemo.vue");
/* harmony import */ var _editDemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editDemo */ "./resources/js/src/views/demo/editDemo.vue");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Demo",
  components: {
    EditDemo: _editDemo__WEBPACK_IMPORTED_MODULE_2__["default"],
    AddDemo: _addDemo__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      selected: []
    };
  },
  computed: {
    all_about: function all_about() {
      return this.$store.getters.all_about;
    }
  },
  methods: {
    //destroy
    destroyAbout: function () {
      var _destroyAbout = _asyncToGenerator(
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
                            return self.$store.dispatch('destroyAbout', data.id);

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
                    text: 'ទិន្នន័យបានបន្ថែម',
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

      function destroyAbout() {
        return _destroyAbout.apply(this, arguments);
      }

      return destroyAbout;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/demo/addDemo.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/demo/addDemo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "addDemo",
  data: function data() {
    return {
      about: {
        title: '',
        excerpt: '',
        content: ''
      },
      options: {
        height: 300
      }
    };
  },
  methods: {
    show: function show() {
      this.$modal.show('add');
    },
    //store
    storeAbout: function storeAbout() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result && self.about.content) {
          self.$vs.loading();
          self.$store.dispatch('storeAbout', self.about).then(function (data) {
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
      this.about = {
        title: '',
        excerpt: '',
        content: ''
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/demo/editDemo.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/demo/editDemo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "editDemo",
  data: function data() {
    return {
      about: {
        title: '',
        excerpt: '',
        content: ''
      },
      options: {
        height: 300
      }
    };
  },
  methods: {
    show: function show() {
      this.$modal.show('edit');
    },
    //fetch about
    fetchAbout: function () {
      var _fetchAbout = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$store.dispatch('fetchAbout');

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchAbout() {
        return _fetchAbout.apply(this, arguments);
      }

      return fetchAbout;
    }(),
    //edit
    editAbout: function editAbout(id) {
      var self = this;
      self.$store.dispatch('editAbout', id).then(function (data) {
        self.about = data;
      });
    },
    //store
    updateAbout: function updateAbout() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result && self.about.content) {
          self.$vs.loading();
          self.$store.dispatch('updateAbout', self.about).then(function (data) {
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
              self.fetchAbout();
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/editHome.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/editHome.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "editHome",
  props: ['is_popup'],
  data: function data() {
    return {
      /*user data*/
      user: {
        profile: null,
        gender: 'ប្រុស',
        role: 'user',
        type: 'employee',
        name: '',
        email: '',
        telephone: '',
        password: ''
      }
    };
  },
  computed: {
    popupSync: {
      get: function get() {
        return this.is_popup;
      },
      set: function set(val) {
        this.$emit('update-is_popup', val);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \******************************************************************************************************************************************************************************************************/
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
      _c("demo"),
      _vm._v(" "),
      _c("tinymce", {
        attrs: { id: "d2", other_options: _vm.options },
        model: {
          value: _vm.data,
          callback: function($$v) {
            _vm.data = $$v
          },
          expression: "data"
        }
      }),
      _vm._v(" "),
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
                  _vm.is_popup = true
                }
              }
            },
            [_vm._v("បន្ថែម")]
          ),
          _vm._v(" "),
          _c(
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
                  _vm.is_popup_edit = true
                }
              }
            },
            [_vm._v("កែប្រែ")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: {
                type: "relief",
                "icon-pack": "feather",
                icon: "icon-package"
              }
            },
            [_vm._v("អាប់គ្រេដ")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: {
                color: "danger",
                type: "relief",
                "icon-pack": "feather",
                icon: "icon-trash-2"
              }
            },
            [_vm._v("លុប")]
          ),
          _vm._v(" "),
          _c("add-home", {
            attrs: { is_popup: _vm.is_popup },
            on: { "update-is_popup": _vm.syncPopup }
          }),
          _vm._v(" "),
          _c("edit-home", {
            attrs: { is_popup: _vm.is_popup_edit },
            on: { "update-is_popup": _vm.syncPopupEdit }
          })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/addHome.vue?vue&type=template&id=ad68cdf4&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/addHome.vue?vue&type=template&id=ad68cdf4&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "vs-popup",
    {
      attrs: {
        fullscreen: "",
        title: "បន្ថែមអ្នកប្រើប្រាស់",
        active: _vm.popupSync
      },
      on: {
        "update:active": function($event) {
          _vm.popupSync = $event
        }
      }
    },
    [
      _c(
        "form",
        [
          _c("div", { staticClass: "vx-row mb-2" }, [
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
                  attrs: { name: "title", "label-placeholder": "ចំណងជើង" },
                  model: {
                    value: _vm.user.title,
                    callback: function($$v) {
                      _vm.$set(_vm.user, "title", $$v)
                    },
                    expression: "user.title"
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
                        value: _vm.errors.has("title"),
                        expression: "errors.has('title')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("title")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col w-full" },
              [
                _c(
                  "vs-select",
                  {
                    staticClass: "w-full",
                    attrs: { autocomplete: "", label: "ប្រភេទ" },
                    on: { "input-change": function($event) {} },
                    model: {
                      value: _vm.user.category,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "category", $$v)
                      },
                      expression: "user.category"
                    }
                  },
                  _vm._l(_vm.categories, function(category, index) {
                    return _c("vs-select-item", {
                      key: index,
                      attrs: {
                        value: category.category,
                        text: category.category
                      }
                    })
                  }),
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col w-full" },
              [
                _c("tinymce", {
                  attrs: { id: "d1", other_options: _vm.options },
                  model: {
                    value: _vm.data,
                    callback: function($$v) {
                      _vm.data = $$v
                    },
                    expression: "data"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row mb-2" }, [
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full" },
              [
                _c(
                  "vs-select",
                  {
                    staticClass: "w-full",
                    attrs: { autocomplete: "", label: "សិទ្ធ" },
                    on: { "input-change": function($event) {} },
                    model: {
                      value: _vm.user.role,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "role", $$v)
                      },
                      expression: "user.role"
                    }
                  },
                  [
                    _c("vs-select-item", {
                      attrs: { value: "user", text: "User" }
                    }),
                    _vm._v(" "),
                    _c("vs-select-item", {
                      attrs: { value: "admin", text: "Admin" }
                    }),
                    _vm._v(" "),
                    _c("vs-select-item", {
                      attrs: { value: "super_admin", text: "Super Admin" }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full" },
              [
                _c(
                  "vs-select",
                  {
                    staticClass: "w-full",
                    attrs: { autocomplete: "", label: "ប្រភេទ" },
                    on: { "input-change": function($event) {} },
                    model: {
                      value: _vm.user.type,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "type", $$v)
                      },
                      expression: "user.type"
                    }
                  },
                  [
                    _c("vs-select-item", {
                      attrs: { value: "employee", text: "Employee" }
                    }),
                    _vm._v(" "),
                    _c("vs-select-item", {
                      attrs: { value: "owner", text: "Owner" }
                    }),
                    _vm._v(" "),
                    _c("vs-select-item", {
                      attrs: { value: "developer", text: "Developer" }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row mb-2" }, [
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full" },
              [
                _c("vs-input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|email",
                      expression: "'required|email'"
                    }
                  ],
                  staticClass: "w-full",
                  attrs: {
                    type: "email",
                    name: "email",
                    "icon-pack": "feather",
                    icon: "icon-mail",
                    "icon-no-border": "",
                    "label-placeholder": "អ៊ីម៉ែល"
                  },
                  model: {
                    value: _vm.user.email,
                    callback: function($$v) {
                      _vm.$set(_vm.user, "email", $$v)
                    },
                    expression: "user.email"
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
                        value: _vm.errors.has("email"),
                        expression: "errors.has('email')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("email")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full" },
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
                    name: "telephone",
                    "icon-pack": "feather",
                    icon: "icon-smartphone",
                    "icon-no-border": "",
                    "label-placeholder": "លេខទុរស័ព្ទ"
                  },
                  model: {
                    value: _vm.user.telephone,
                    callback: function($$v) {
                      _vm.$set(_vm.user, "telephone", $$v)
                    },
                    expression: "user.telephone"
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
                        value: _vm.errors.has("telephone"),
                        expression: "errors.has('telephone')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("telephone")))]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("vs-divider"),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "vx-col w-full" },
              [
                _c(
                  "vs-button",
                  {
                    staticClass: "mr-3 mb-2",
                    attrs: { type: "relief" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.submitForm($event)
                      }
                    }
                  },
                  [_vm._v("\n                    បង្កើត\n                ")]
                ),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    staticClass: "mb-2",
                    attrs: { color: "warning", type: "relief" },
                    on: {
                      click: [
                        function($event) {
                          $event.preventDefault()
                          return _vm.resetField($event)
                        },
                        function($event) {}
                      ]
                    }
                  },
                  [_vm._v("\n                    ចាកចេញ\n                ")]
                )
              ],
              1
            )
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/demo/Demo.vue?vue&type=template&id=fbdd20d6&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/demo/Demo.vue?vue&type=template&id=fbdd20d6&scoped=true& ***!
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
                  return _vm.$refs.addAbout.show()
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
                      _vm.$refs.editAbout.show()
                      _vm.$refs.editAbout.editAbout(_vm.selected[0].id)
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
                  on: { click: _vm.destroyAbout }
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
            data: _vm.all_about
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
                      _c("vs-td", { attrs: { data: data[indextr].title } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(data[indextr].title) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: data[indextr].excerpt } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(data[indextr].excerpt) +
                            "\n                "
                        )
                      ]),
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
              _c("vs-th", { attrs: { "sort-key": "title" } }, [
                _vm._v("ឈ្មោះ")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "excerpt" } }, [
                _vm._v("សង្ខេប")
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
      _c("add-demo", { ref: "addAbout" }),
      _vm._v(" "),
      _c("edit-demo", {
        ref: "editAbout",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/demo/addDemo.vue?vue&type=template&id=8dc8b7fc&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/demo/addDemo.vue?vue&type=template&id=8dc8b7fc&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        name: "add"
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
            _c(
              "div",
              { staticClass: "vx-col w-full mb-2" },
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
                  attrs: { "label-placeholder": "ចំណងជើង", name: "title" },
                  model: {
                    value: _vm.about.title,
                    callback: function($$v) {
                      _vm.$set(_vm.about, "title", $$v)
                    },
                    expression: "about.title"
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
                        value: _vm.errors.has("title"),
                        expression: "errors.has('title')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("title")))]
                )
              ],
              1
            ),
            _vm._v(" "),
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
                  attrs: {
                    "label-placeholder": "សង្ខេបអត្ថបទ",
                    name: "excerpt"
                  },
                  model: {
                    value: _vm.about.excerpt,
                    callback: function($$v) {
                      _vm.$set(_vm.about, "excerpt", $$v)
                    },
                    expression: "about.excerpt"
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
                        value: _vm.errors.has("excerpt"),
                        expression: "errors.has('excerpt')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("excerpt")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col w-full mt-4" },
              [
                _c("tinymce", {
                  attrs: { id: "add-about", other_options: _vm.options },
                  model: {
                    value: _vm.about.content,
                    callback: function($$v) {
                      _vm.$set(_vm.about, "content", $$v)
                    },
                    expression: "about.content"
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
                    icon: "icon-save",
                    "icon-pack": "feather",
                    type: "relief"
                  },
                  on: { click: _vm.storeAbout }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/demo/editDemo.vue?vue&type=template&id=1034669f&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/demo/editDemo.vue?vue&type=template&id=1034669f&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
        width: "1000",
        height: "auto",
        scrollable: true,
        pivotY: 0.07,
        adaptive: true,
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
            _c(
              "div",
              { staticClass: "vx-col w-full mb-2" },
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
                  attrs: { "label-placeholder": "ចំណងជើង", name: "title" },
                  model: {
                    value: _vm.about.title,
                    callback: function($$v) {
                      _vm.$set(_vm.about, "title", $$v)
                    },
                    expression: "about.title"
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
                        value: _vm.errors.has("title"),
                        expression: "errors.has('title')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("title")))]
                )
              ],
              1
            ),
            _vm._v(" "),
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
                  attrs: {
                    "label-placeholder": "សង្ខេបអត្ថបទ",
                    name: "excerpt"
                  },
                  model: {
                    value: _vm.about.excerpt,
                    callback: function($$v) {
                      _vm.$set(_vm.about, "excerpt", $$v)
                    },
                    expression: "about.excerpt"
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
                        value: _vm.errors.has("excerpt"),
                        expression: "errors.has('excerpt')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("excerpt")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col w-full mt-4" },
              [
                _c("tinymce", {
                  attrs: { id: "add-about", other_options: _vm.options },
                  model: {
                    value: _vm.about.content,
                    callback: function($$v) {
                      _vm.$set(_vm.about, "content", $$v)
                    },
                    expression: "about.content"
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
                  on: { click: _vm.updateAbout }
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/editHome.vue?vue&type=template&id=f1a7b6da&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/editHome.vue?vue&type=template&id=f1a7b6da&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "vs-popup",
    {
      attrs: { title: "បន្ថែមអ្នកប្រើប្រាស់", active: _vm.popupSync },
      on: {
        "update:active": function($event) {
          _vm.popupSync = $event
        }
      }
    },
    [
      _c(
        "form",
        [
          _c("div", { staticClass: "vx-row mb-2" }, [
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full" },
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
                    name: "name",
                    "icon-pack": "feather",
                    icon: "icon-user",
                    "icon-no-border": "",
                    "label-placeholder": "ឈ្មោះ"
                  },
                  model: {
                    value: _vm.user.name,
                    callback: function($$v) {
                      _vm.$set(_vm.user, "name", $$v)
                    },
                    expression: "user.name"
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
              { staticClass: "vx-col sm:w-1/2 w-full" },
              [
                _c(
                  "vs-select",
                  {
                    staticClass: "w-full",
                    attrs: { autocomplete: "", label: "ភេទ" },
                    on: { "input-change": function($event) {} },
                    model: {
                      value: _vm.user.gender,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "gender", $$v)
                      },
                      expression: "user.gender"
                    }
                  },
                  [
                    _c("vs-select-item", {
                      attrs: { value: "ប្រុស", text: "ប្រុស" }
                    }),
                    _vm._v(" "),
                    _c("vs-select-item", {
                      attrs: { value: "ស្រី", text: "ស្រី" }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row mb-2" }, [
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full" },
              [
                _c(
                  "vs-select",
                  {
                    staticClass: "w-full",
                    attrs: { autocomplete: "", label: "សិទ្ធ" },
                    on: { "input-change": function($event) {} },
                    model: {
                      value: _vm.user.role,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "role", $$v)
                      },
                      expression: "user.role"
                    }
                  },
                  [
                    _c("vs-select-item", {
                      attrs: { value: "user", text: "User" }
                    }),
                    _vm._v(" "),
                    _c("vs-select-item", {
                      attrs: { value: "admin", text: "Admin" }
                    }),
                    _vm._v(" "),
                    _c("vs-select-item", {
                      attrs: { value: "super_admin", text: "Super Admin" }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full" },
              [
                _c(
                  "vs-select",
                  {
                    staticClass: "w-full",
                    attrs: { autocomplete: "", label: "ប្រភេទ" },
                    on: { "input-change": function($event) {} },
                    model: {
                      value: _vm.user.type,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "type", $$v)
                      },
                      expression: "user.type"
                    }
                  },
                  [
                    _c("vs-select-item", {
                      attrs: { value: "employee", text: "Employee" }
                    }),
                    _vm._v(" "),
                    _c("vs-select-item", {
                      attrs: { value: "owner", text: "Owner" }
                    }),
                    _vm._v(" "),
                    _c("vs-select-item", {
                      attrs: { value: "developer", text: "Developer" }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row mb-2" }, [
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full" },
              [
                _c("vs-input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|email",
                      expression: "'required|email'"
                    }
                  ],
                  staticClass: "w-full",
                  attrs: {
                    type: "email",
                    name: "email",
                    "icon-pack": "feather",
                    icon: "icon-mail",
                    "icon-no-border": "",
                    "label-placeholder": "អ៊ីម៉ែល"
                  },
                  model: {
                    value: _vm.user.email,
                    callback: function($$v) {
                      _vm.$set(_vm.user, "email", $$v)
                    },
                    expression: "user.email"
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
                        value: _vm.errors.has("email"),
                        expression: "errors.has('email')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("email")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full" },
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
                    name: "telephone",
                    "icon-pack": "feather",
                    icon: "icon-smartphone",
                    "icon-no-border": "",
                    "label-placeholder": "លេខទុរស័ព្ទ"
                  },
                  model: {
                    value: _vm.user.telephone,
                    callback: function($$v) {
                      _vm.$set(_vm.user, "telephone", $$v)
                    },
                    expression: "user.telephone"
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
                        value: _vm.errors.has("telephone"),
                        expression: "errors.has('telephone')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("telephone")))]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("vs-divider"),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "vx-col w-full" },
              [
                _c(
                  "vs-button",
                  {
                    staticClass: "mr-3 mb-2",
                    attrs: { type: "relief" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.submitForm($event)
                      }
                    }
                  },
                  [_vm._v("\n                    បង្កើត\n                ")]
                ),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    staticClass: "mb-2",
                    attrs: { color: "warning", type: "relief" },
                    on: {
                      click: [
                        function($event) {
                          $event.preventDefault()
                          return _vm.resetField($event)
                        },
                        function($event) {}
                      ]
                    }
                  },
                  [_vm._v("\n                    ចាកចេញ\n                ")]
                )
              ],
              1
            )
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Home.vue":
/*!*****************************************!*\
  !*** ./resources/js/src/views/Home.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=e85b2cee& */ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=e85b2cee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/addHome.vue":
/*!********************************************!*\
  !*** ./resources/js/src/views/addHome.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addHome_vue_vue_type_template_id_ad68cdf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addHome.vue?vue&type=template&id=ad68cdf4&scoped=true& */ "./resources/js/src/views/addHome.vue?vue&type=template&id=ad68cdf4&scoped=true&");
/* harmony import */ var _addHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addHome.vue?vue&type=script&lang=js& */ "./resources/js/src/views/addHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addHome_vue_vue_type_template_id_ad68cdf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addHome_vue_vue_type_template_id_ad68cdf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ad68cdf4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/addHome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/addHome.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/addHome.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./addHome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/addHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/addHome.vue?vue&type=template&id=ad68cdf4&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/addHome.vue?vue&type=template&id=ad68cdf4&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addHome_vue_vue_type_template_id_ad68cdf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./addHome.vue?vue&type=template&id=ad68cdf4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/addHome.vue?vue&type=template&id=ad68cdf4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addHome_vue_vue_type_template_id_ad68cdf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addHome_vue_vue_type_template_id_ad68cdf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/demo/Demo.vue":
/*!**********************************************!*\
  !*** ./resources/js/src/views/demo/Demo.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Demo_vue_vue_type_template_id_fbdd20d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Demo.vue?vue&type=template&id=fbdd20d6&scoped=true& */ "./resources/js/src/views/demo/Demo.vue?vue&type=template&id=fbdd20d6&scoped=true&");
/* harmony import */ var _Demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Demo.vue?vue&type=script&lang=js& */ "./resources/js/src/views/demo/Demo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Demo_vue_vue_type_template_id_fbdd20d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Demo_vue_vue_type_template_id_fbdd20d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fbdd20d6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/demo/Demo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/demo/Demo.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/demo/Demo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Demo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/demo/Demo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/demo/Demo.vue?vue&type=template&id=fbdd20d6&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/demo/Demo.vue?vue&type=template&id=fbdd20d6&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_template_id_fbdd20d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Demo.vue?vue&type=template&id=fbdd20d6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/demo/Demo.vue?vue&type=template&id=fbdd20d6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_template_id_fbdd20d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_template_id_fbdd20d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/demo/addDemo.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/views/demo/addDemo.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addDemo_vue_vue_type_template_id_8dc8b7fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addDemo.vue?vue&type=template&id=8dc8b7fc&scoped=true& */ "./resources/js/src/views/demo/addDemo.vue?vue&type=template&id=8dc8b7fc&scoped=true&");
/* harmony import */ var _addDemo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addDemo.vue?vue&type=script&lang=js& */ "./resources/js/src/views/demo/addDemo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addDemo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addDemo_vue_vue_type_template_id_8dc8b7fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addDemo_vue_vue_type_template_id_8dc8b7fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8dc8b7fc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/demo/addDemo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/demo/addDemo.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/demo/addDemo.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addDemo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addDemo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/demo/addDemo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addDemo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/demo/addDemo.vue?vue&type=template&id=8dc8b7fc&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/demo/addDemo.vue?vue&type=template&id=8dc8b7fc&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addDemo_vue_vue_type_template_id_8dc8b7fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addDemo.vue?vue&type=template&id=8dc8b7fc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/demo/addDemo.vue?vue&type=template&id=8dc8b7fc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addDemo_vue_vue_type_template_id_8dc8b7fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addDemo_vue_vue_type_template_id_8dc8b7fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/demo/editDemo.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/demo/editDemo.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editDemo_vue_vue_type_template_id_1034669f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editDemo.vue?vue&type=template&id=1034669f&scoped=true& */ "./resources/js/src/views/demo/editDemo.vue?vue&type=template&id=1034669f&scoped=true&");
/* harmony import */ var _editDemo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editDemo.vue?vue&type=script&lang=js& */ "./resources/js/src/views/demo/editDemo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editDemo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editDemo_vue_vue_type_template_id_1034669f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editDemo_vue_vue_type_template_id_1034669f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1034669f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/demo/editDemo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/demo/editDemo.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/demo/editDemo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editDemo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editDemo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/demo/editDemo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editDemo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/demo/editDemo.vue?vue&type=template&id=1034669f&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/demo/editDemo.vue?vue&type=template&id=1034669f&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editDemo_vue_vue_type_template_id_1034669f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editDemo.vue?vue&type=template&id=1034669f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/demo/editDemo.vue?vue&type=template&id=1034669f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editDemo_vue_vue_type_template_id_1034669f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editDemo_vue_vue_type_template_id_1034669f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/editHome.vue":
/*!*********************************************!*\
  !*** ./resources/js/src/views/editHome.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editHome_vue_vue_type_template_id_f1a7b6da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editHome.vue?vue&type=template&id=f1a7b6da&scoped=true& */ "./resources/js/src/views/editHome.vue?vue&type=template&id=f1a7b6da&scoped=true&");
/* harmony import */ var _editHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editHome.vue?vue&type=script&lang=js& */ "./resources/js/src/views/editHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editHome_vue_vue_type_template_id_f1a7b6da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editHome_vue_vue_type_template_id_f1a7b6da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f1a7b6da",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/editHome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/editHome.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/editHome.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./editHome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/editHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/editHome.vue?vue&type=template&id=f1a7b6da&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/editHome.vue?vue&type=template&id=f1a7b6da&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editHome_vue_vue_type_template_id_f1a7b6da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./editHome.vue?vue&type=template&id=f1a7b6da&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/editHome.vue?vue&type=template&id=f1a7b6da&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editHome_vue_vue_type_template_id_f1a7b6da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editHome_vue_vue_type_template_id_f1a7b6da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);