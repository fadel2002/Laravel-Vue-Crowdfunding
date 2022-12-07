(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CampaignItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CampaignItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "campaign-item",
  props: ["campaign"],
  computed: {
    progress: function progress() {
      return (this.campaign.collected / this.campaign.required * 100).toFixed(2);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/History.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/History.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_CampaignItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CampaignItem.vue */ "./resources/js/components/CampaignItem.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      campaignHistory: {}
    };
  },
  created: function created() {
    this.go();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    guest: "auth/guest"
  })),
  methods: _objectSpread({
    go: function go() {
      var _this = this;

      var id = this.$route.params.id;
      var url = "/api/campaign/history/" + id;
      axios.get(url).then(function (response) {
        var data = response.data.data;
        _this.campaignHistory = data.campaignHistory;
        console.log(_this.campaignHistory);
      })["catch"](function (err) {
        var response = err.response;
        console.log(response);
      });
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    setAlert: "alert/set"
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CampaignItem.vue?vue&type=template&id=7c3482ae&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CampaignItem.vue?vue&type=template&id=7c3482ae& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("v-card", {
    staticStyle: {
      "text-decoration": "none",
      color: "inherit"
    },
    attrs: {
      to: "/campaign/" + _vm.campaign.id
    }
  }, [_c("v-img", {
    staticClass: "white--text",
    attrs: {
      src: _vm.campaign.image,
      height: "200px"
    }
  }, [_c("v-card-title", {
    staticClass: "fill-height align-end",
    domProps: {
      textContent: _vm._s(_vm.campaign.title)
    }
  })], 1), _vm._v(" "), _c("v-card-actions", [_c("v-progress-linear", {
    attrs: {
      color: "blue-grey",
      height: "7"
    },
    model: {
      value: _vm.progress,
      callback: function callback($$v) {
        _vm.progress = $$v;
      },
      expression: "progress"
    }
  })], 1), _vm._v(" "), _c("v-card-actions", [_c("v-icon", [_vm._v("mdi-cash")]), _vm._v(" "), _c("span", [_vm._v("\r\n                    Rp " + _vm._s(_vm.campaign.required.toLocaleString("id-ID")) + "\r\n                ")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("span", [_vm._v(" " + _vm._s(_vm.progress) + "% ")])], 1)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/History.vue?vue&type=template&id=301d0ec5&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/History.vue?vue&type=template&id=301d0ec5& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_vm.campaignHistory.id ? _c("v-card", [_c("v-img", {
    staticClass: "white--text",
    attrs: {
      src: _vm.campaignHistory.campaign.image,
      height: "200px"
    }
  }, [_c("v-card-title", {
    staticClass: "fill-height align-end",
    domProps: {
      textContent: _vm._s(_vm.campaignHistory.campaign.title)
    }
  })], 1), _vm._v(" "), _c("v-card-text", [_c("v-simple-table", {
    attrs: {
      dense: ""
    }
  }, [_c("tbody", [_c("tr", [_c("td", [_c("v-icon", [_vm._v("mdi-home-city")]), _vm._v(" Alamat")], 1), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.campaignHistory.campaign.address))])]), _vm._v(" "), _c("tr", [_c("td", [_c("v-icon", [_vm._v("mdi-hand-heart")]), _vm._v(" Terkumpul")], 1), _vm._v(" "), _c("td", {
    staticClass: "black--text"
  }, [_vm._v("\r\n                                Rp\r\n                                " + _vm._s(_vm.campaignHistory.campaign.collected.toLocaleString("id-ID")) + "\r\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", [_c("v-icon", [_vm._v("mdi-cash-multiple")]), _vm._v(" Dibutuhkan\r\n                            ")], 1), _vm._v(" "), _c("td", {
    staticClass: "black--text"
  }, [_vm._v("\r\n                                Rp\r\n                                " + _vm._s(_vm.campaignHistory.campaign.required.toLocaleString("id-ID")) + "\r\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", [_c("v-icon", [_vm._v("mdi-cash")]), _vm._v(" Harga per lembar")], 1), _vm._v(" "), _c("td", {
    staticClass: "black--text"
  }, [_vm._v("\r\n                                Rp\r\n                                " + _vm._s(_vm.campaignHistory.campaign.price_per_sheet.toLocaleString("id-ID")) + "\r\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", [_c("v-icon", [_vm._v("mdi-import")]), _vm._v(" Didonasikan sebesar\r\n                            ")], 1), _vm._v(" "), _c("td", {
    staticClass: "black--text"
  }, [_vm._v("\r\n                                Rp\r\n                                " + _vm._s(_vm.campaignHistory.donation.toLocaleString("id-ID")) + "\r\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", [_c("v-icon", [_vm._v("mdi-counter")]), _vm._v(" Banyak lembaran\r\n                            ")], 1), _vm._v(" "), _c("td", {
    staticClass: "black--text"
  }, [_vm._v("\r\n                                " + _vm._s(_vm.campaignHistory.sheets) + " Lembar\r\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", [_c("v-icon", [_vm._v("mdi-calendar-clock")]), _vm._v(" Tanggal\r\n                                donasi\r\n                            ")], 1), _vm._v(" "), _c("td", {
    staticClass: "black--text"
  }, [_vm._v("\r\n                                " + _vm._s(_vm.campaignHistory.created_at) + "\r\n                            ")])])])]), _vm._v("\r\n                Description: "), _c("br"), _vm._v("\r\n                " + _vm._s(_vm.campaignHistory.campaign.description) + "\r\n            ")], 1)], 1) : _vm._e()], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/CampaignItem.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/CampaignItem.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CampaignItem_vue_vue_type_template_id_7c3482ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CampaignItem.vue?vue&type=template&id=7c3482ae& */ "./resources/js/components/CampaignItem.vue?vue&type=template&id=7c3482ae&");
/* harmony import */ var _CampaignItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CampaignItem.vue?vue&type=script&lang=js& */ "./resources/js/components/CampaignItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CampaignItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CampaignItem_vue_vue_type_template_id_7c3482ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CampaignItem_vue_vue_type_template_id_7c3482ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CampaignItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CampaignItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/CampaignItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CampaignItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CampaignItem.vue?vue&type=template&id=7c3482ae&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/CampaignItem.vue?vue&type=template&id=7c3482ae& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignItem_vue_vue_type_template_id_7c3482ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignItem.vue?vue&type=template&id=7c3482ae& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CampaignItem.vue?vue&type=template&id=7c3482ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignItem_vue_vue_type_template_id_7c3482ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignItem_vue_vue_type_template_id_7c3482ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/History.vue":
/*!****************************************!*\
  !*** ./resources/js/views/History.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _History_vue_vue_type_template_id_301d0ec5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./History.vue?vue&type=template&id=301d0ec5& */ "./resources/js/views/History.vue?vue&type=template&id=301d0ec5&");
/* harmony import */ var _History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./History.vue?vue&type=script&lang=js& */ "./resources/js/views/History.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _History_vue_vue_type_template_id_301d0ec5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _History_vue_vue_type_template_id_301d0ec5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/History.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/History.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/History.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./History.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/History.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/History.vue?vue&type=template&id=301d0ec5&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/History.vue?vue&type=template&id=301d0ec5& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_301d0ec5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./History.vue?vue&type=template&id=301d0ec5& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/History.vue?vue&type=template&id=301d0ec5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_301d0ec5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_301d0ec5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);