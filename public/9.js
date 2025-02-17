(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Campaign.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Campaign.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      campaign: {},
      sheet: 0,
      total_donation: 0
    };
  },
  created: function created() {
    this.go();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    guest: "auth/guest",
    user: "auth/user"
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({
    go: function go() {
      var _this = this;

      var id = this.$route.params.id;
      var url = "/api/campaign/" + id;
      axios.get(url).then(function (response) {
        var data = response.data.data;
        _this.campaign = data.campaign;
      })["catch"](function (err) {
        var response = err.response;
        console.log(response);
      });
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])({
    addTransaction: "transaction/insert"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    setAlert: "alert/set"
  })), {}, {
    paymentHanlde: function paymentHanlde(campaign) {
      var _this2 = this;

      var timeNow = new Date();
      var data_midtrans = {
        transaction_details: {
          order_id: "order-" + timeNow.getTime(),
          gross_amount: this.total_donation
        },
        customer_details: {
          name: this.user.username,
          email: this.user.email
        }
      };
      axios.post("/api/generate", {
        data: data_midtrans
      }).then(function (response) {
        window.snap.pay(response.data.data.token);

        _this2.donate(campaign);
      })["catch"](function (err) {
        console.log("error" + err);
      });
    },
    donate: function donate(campaign) {
      var _this3 = this;

      // this.addTransaction();
      var data = {
        collected: campaign.collected + this.total_donation
      };
      var config = {
        headers: {
          Authorization: "Bearer" + this.user.token
        }
      };
      var url = "/api/campaign/update-fund/" + campaign.id;
      axios.post(url, data, config).then(function (responses) {
        _this3.campaign = responses.data.data.campaign;

        _this3.clear();

        _this3.setAlert({
          status: true,
          color: "success",
          text: "Transaksi berhasil"
        });
      })["catch"](function (err) {
        _this3.setAlert({
          status: true,
          text: "Transaksi gagal",
          color: "error"
        });
      });
    },
    countValidDonate: function countValidDonate(sheet_number, campaign) {
      var bool = sheet_number * campaign.price_per_sheet + campaign.collected + this.total_donation > campaign.required;
      return bool;
    },
    incDecSheet: function incDecSheet(sheet_number, campaign) {
      if (sheet_number > 0) this.sheet += parseInt(sheet_number);else {
        if (this.sheet + sheet_number < 0) {
          this.sheet = 0;
        } else {
          this.sheet += sheet_number;
        }
      }
      this.total_donation = campaign.price_per_sheet * this.sheet;
    },
    input: function input(val, campaign) {
      if (val > 0) {
        this.sheet = parseInt(val);
        this.total_donation = campaign.price_per_sheet * this.sheet;

        if (this.total_donation + campaign.collected > campaign.required) {
          this.total_donation = campaign.required - campaign.collected;
          this.sheet = this.total_donation / campaign.price_per_sheet;
        }
      } else {
        this.sheet = 0;
        this.total_donation = campaign.price_per_sheet * this.sheet;
      }
    },
    clear: function clear() {
      this.sheet = 0;
      this.total_donation = 0;
    } // ...mapMutations({
    //     donate: "transaction/insert",
    // }),
    // donate() {
    //     this.$store.commit("insert");
    //     // this.$store.dispatch("insert"); //jika menggunakan actions
    // },

  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Campaign.vue?vue&type=template&id=5561fd2f&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Campaign.vue?vue&type=template&id=5561fd2f& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm$campaign$price_pe;

  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("script", {
    attrs: {
      type: "application/javascript",
      src: "https://app.sandbox.midtrans.com/snap/snap.js",
      "data-client-key": "SB-Mid-client-00jE0oDfZFrSffjU",
      defer: ""
    }
  }), _vm._v(" "), _vm.campaign.id ? _c("v-card", [_c("v-img", {
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
  })], 1), _vm._v(" "), _c("v-card-text", [_c("v-simple-table", {
    attrs: {
      dense: ""
    }
  }, [_c("tbody", [_c("tr", [_c("td", [_c("v-icon", [_vm._v("mdi-home-city")]), _vm._v(" Alamat")], 1), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.campaign.address))])]), _vm._v(" "), _c("tr", [_c("td", [_c("v-icon", [_vm._v("mdi-hand-heart")]), _vm._v(" Terkumpul")], 1), _vm._v(" "), _c("td", {
    staticClass: "blue--text"
  }, [_vm._v("\r\n                                Rp\r\n                                " + _vm._s(_vm.campaign.collected.toLocaleString("id-ID")) + "\r\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", [_c("v-icon", [_vm._v("mdi-cash-multiple")]), _vm._v(" Dibutuhkan\r\n                            ")], 1), _vm._v(" "), _c("td", {
    staticClass: "orange--text"
  }, [_vm._v("\r\n                                Rp\r\n                                " + _vm._s(_vm.campaign.required.toLocaleString("id-ID")) + "\r\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", [_c("v-icon", [_vm._v("mdi-cash")]), _vm._v(" Harga per lembar")], 1), _vm._v(" "), _c("td", {
    staticClass: "red--text"
  }, [_vm._v("\r\n                                Rp\r\n                                " + _vm._s((_vm$campaign$price_pe = _vm.campaign.price_per_sheet) === null || _vm$campaign$price_pe === void 0 ? void 0 : _vm$campaign$price_pe.toLocaleString("id-ID")) + "\r\n                            ")])])])]), _vm._v("\r\n                Description: "), _c("br"), _vm._v("\r\n                " + _vm._s(_vm.campaign.description) + "\r\n            ")], 1), _vm._v(" "), _c("v-card-text", {
    staticClass: "text-center"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sheet,
      expression: "sheet"
    }],
    staticStyle: {
      "text-align": "center",
      "outline-color": "green"
    },
    attrs: {
      type: "number"
    },
    domProps: {
      value: _vm.sheet
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.sheet = $event.target.value;
      }, function ($event) {
        return _vm.input($event.target.value, _vm.campaign);
      }]
    }
  })]), _vm._v(" "), _c("v-card-text", {
    staticClass: "text-center"
  }, [_c("v-btn", {
    staticClass: "green--text",
    attrs: {
      "x-small": ""
    },
    on: {
      click: function click($event) {
        return _vm.incDecSheet(-10, _vm.campaign);
      }
    }
  }, [_vm._v("\r\n                    -10\r\n                ")]), _vm._v("\r\n                 \r\n                "), _c("v-btn", {
    staticClass: "green--text",
    attrs: {
      "x-small": ""
    },
    on: {
      click: function click($event) {
        return _vm.incDecSheet(-5, _vm.campaign);
      }
    }
  }, [_vm._v("\r\n                    -5\r\n                ")]), _vm._v("\r\n                 \r\n                "), _c("v-btn", {
    staticClass: "green--text",
    attrs: {
      "x-small": ""
    },
    on: {
      click: function click($event) {
        return _vm.incDecSheet(-1, _vm.campaign);
      }
    }
  }, [_vm._v("\r\n                    -1\r\n                ")]), _vm._v(" "), _c("v-btn", {
    staticClass: "green--text",
    attrs: {
      "x-small": "",
      disabled: _vm.countValidDonate(1, _vm.campaign)
    },
    on: {
      click: function click($event) {
        return _vm.incDecSheet(1, _vm.campaign);
      }
    }
  }, [_vm._v("\r\n                    +1\r\n                ")]), _vm._v("\r\n                 \r\n                "), _c("v-btn", {
    staticClass: "green--text",
    attrs: {
      "x-small": "",
      disabled: _vm.countValidDonate(5, _vm.campaign)
    },
    on: {
      click: function click($event) {
        return _vm.incDecSheet(5, _vm.campaign);
      }
    }
  }, [_vm._v("\r\n                    +5\r\n                ")]), _vm._v("\r\n                 \r\n                "), _c("v-btn", {
    staticClass: "green--text",
    attrs: {
      "x-small": "",
      disabled: _vm.countValidDonate(10, _vm.campaign)
    },
    on: {
      click: function click($event) {
        return _vm.incDecSheet(10, _vm.campaign);
      }
    }
  }, [_vm._v("\r\n                    +10\r\n                ")])], 1), _vm._v(" "), _c("v-card-text", {
    staticClass: "text-center"
  }, [_vm._v("\r\n                " + _vm._s(_vm.total_donation) + "\r\n            ")]), _vm._v(" "), _c("v-card-actions", [_c("v-btn", {
    attrs: {
      block: "",
      color: "primary",
      disabled: _vm.campaign.collected >= _vm.campaign.required || _vm.guest || !_vm.total_donation
    },
    on: {
      click: function click($event) {
        return _vm.paymentHanlde(_vm.campaign);
      }
    }
  }, [_vm._v("\r\n                    Donate\r\n                ")])], 1)], 1) : _vm._e()], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/Campaign.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Campaign.vue ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Campaign_vue_vue_type_template_id_5561fd2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Campaign.vue?vue&type=template&id=5561fd2f& */ "./resources/js/views/Campaign.vue?vue&type=template&id=5561fd2f&");
/* harmony import */ var _Campaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Campaign.vue?vue&type=script&lang=js& */ "./resources/js/views/Campaign.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Campaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Campaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Campaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Campaign_vue_vue_type_template_id_5561fd2f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Campaign_vue_vue_type_template_id_5561fd2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Campaign.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Campaign.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Campaign.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Campaign.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Campaign.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Campaign.vue?vue&type=template&id=5561fd2f&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Campaign.vue?vue&type=template&id=5561fd2f& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaign_vue_vue_type_template_id_5561fd2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Campaign.vue?vue&type=template&id=5561fd2f& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Campaign.vue?vue&type=template&id=5561fd2f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaign_vue_vue_type_template_id_5561fd2f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaign_vue_vue_type_template_id_5561fd2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);