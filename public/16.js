(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChangePassword.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChangePassword.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _stores_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/auth */ "./resources/js/stores/auth.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "register",
  data: function data() {
    return {
      valid: true,
      showPassword: false,
      password: "",
      passwordRules: [function (v) {
        return !!v || "Password is required";
      }, function (v) {
        return v && v.length >= 6 || "Password min 6 characters";
      }],
      passwordConf: ""
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    user: "auth/user"
  })),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    setAlert: "alert/set"
  })), {}, {
    submit: function submit() {
      var _this = this;

      if (this.$refs.form.validate()) {
        var formData = {
          email: this.user.user.email,
          password: this.password,
          password_confirmation: this.passwordConf
        };
        axios.post("/api/auth/update-password", formData).then(function (response) {
          _this.setAlert({
            status: true,
            color: "success",
            text: "Password updated"
          });

          _this.close();
        })["catch"](function (err) {
          var responses = err.response;

          _this.setAlert({
            status: true,
            color: "error",
            text: "Update Password failed"
          });
        });
      }
    },
    close: function close() {
      this.$emit("closed", false);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChangePassword.vue?vue&type=template&id=2a1fc016&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ChangePassword.vue?vue&type=template&id=2a1fc016& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("v-card", [_c("v-toolbar", {
    attrs: {
      dark: "",
      color: "success"
    }
  }, [_c("v-btn", {
    attrs: {
      icon: "",
      dark: ""
    },
    nativeOn: {
      click: function click($event) {
        return _vm.close.apply(null, arguments);
      }
    }
  }, [_c("v-icon", [_vm._v("mdi-close")])], 1), _vm._v(" "), _c("v-toolbar-title", [_vm._v("Change Password")])], 1), _vm._v(" "), _c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("v-form", {
    ref: "form",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.valid,
      callback: function callback($$v) {
        _vm.valid = $$v;
      },
      expression: "valid"
    }
  }, [_c("v-text-field", {
    attrs: {
      "append-icon": _vm.showPassword ? "mdi-eye" : "mdi-eye-off",
      rules: _vm.passwordRules,
      type: _vm.showPassword ? "text" : "password",
      label: "Password",
      hint: "At least 6 characters",
      counter: ""
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.showPassword = !_vm.showPassword;
      }
    },
    model: {
      value: _vm.password,
      callback: function callback($$v) {
        _vm.password = $$v;
      },
      expression: "password"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      "append-icon": "mdi-eye-off",
      rules: _vm.passwordRules,
      type: "password",
      label: "Password Confirmation",
      hint: "At least 6 characters",
      counter: ""
    },
    model: {
      value: _vm.passwordConf,
      callback: function callback($$v) {
        _vm.passwordConf = $$v;
      },
      expression: "passwordConf"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "text-xs-center"
  }, [_c("v-btn", {
    attrs: {
      color: "success lighten-1",
      disabled: !_vm.valid
    },
    on: {
      click: _vm.submit
    }
  }, [_vm._v("Update\r\n                        "), _c("v-icon", {
    attrs: {
      right: "",
      dark: ""
    }
  }, [_vm._v("mdi-lock-open")])], 1)], 1)], 1)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/ChangePassword.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/ChangePassword.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChangePassword_vue_vue_type_template_id_2a1fc016___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=template&id=2a1fc016& */ "./resources/js/components/ChangePassword.vue?vue&type=template&id=2a1fc016&");
/* harmony import */ var _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=script&lang=js& */ "./resources/js/components/ChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChangePassword_vue_vue_type_template_id_2a1fc016___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChangePassword_vue_vue_type_template_id_2a1fc016___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ChangePassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ChangePassword.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/ChangePassword.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ChangePassword.vue?vue&type=template&id=2a1fc016&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ChangePassword.vue?vue&type=template&id=2a1fc016& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_2a1fc016___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=template&id=2a1fc016& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ChangePassword.vue?vue&type=template&id=2a1fc016&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_2a1fc016___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_2a1fc016___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);