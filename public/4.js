(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CampaignHistoryItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CampaignHistoryItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "campaign-history-item",
  props: ["campaign_history"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CampaignHistoryItem.vue?vue&type=template&id=3837fe08&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CampaignHistoryItem.vue?vue&type=template&id=3837fe08& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
      to: "/history/" + _vm.campaign_history.id
    }
  }, [_c("v-img", {
    staticClass: "white--text",
    attrs: {
      src: _vm.campaign_history.campaign.image,
      height: "200px"
    }
  }, [_c("v-card-title", {
    staticClass: "fill-height align-end",
    domProps: {
      textContent: _vm._s(_vm.campaign_history.campaign.title)
    }
  })], 1), _vm._v(" "), _c("v-card-actions", [_c("v-icon", [_vm._v("mdi-cash")]), _vm._v(" "), _c("span", [_vm._v("\r\n                    Rp " + _vm._s(_vm.campaign_history.donation.toLocaleString("id-ID")) + "\r\n                ")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("span", [_vm._v(" " + _vm._s(_vm.campaign_history.created_at) + " ")])], 1)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/CampaignHistoryItem.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/CampaignHistoryItem.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CampaignHistoryItem_vue_vue_type_template_id_3837fe08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CampaignHistoryItem.vue?vue&type=template&id=3837fe08& */ "./resources/js/components/CampaignHistoryItem.vue?vue&type=template&id=3837fe08&");
/* harmony import */ var _CampaignHistoryItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CampaignHistoryItem.vue?vue&type=script&lang=js& */ "./resources/js/components/CampaignHistoryItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CampaignHistoryItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CampaignHistoryItem_vue_vue_type_template_id_3837fe08___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CampaignHistoryItem_vue_vue_type_template_id_3837fe08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CampaignHistoryItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CampaignHistoryItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/CampaignHistoryItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignHistoryItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignHistoryItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CampaignHistoryItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignHistoryItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CampaignHistoryItem.vue?vue&type=template&id=3837fe08&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/CampaignHistoryItem.vue?vue&type=template&id=3837fe08& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignHistoryItem_vue_vue_type_template_id_3837fe08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignHistoryItem.vue?vue&type=template&id=3837fe08& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CampaignHistoryItem.vue?vue&type=template&id=3837fe08&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignHistoryItem_vue_vue_type_template_id_3837fe08___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignHistoryItem_vue_vue_type_template_id_3837fe08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);