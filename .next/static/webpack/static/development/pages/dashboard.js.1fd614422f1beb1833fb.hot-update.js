webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Categories/CategoryList.js":
/*!***********************************************!*\
  !*** ./components/Categories/CategoryList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _cats_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cats.css */ "./components/Categories/cats.css");
/* harmony import */ var _cats_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_cats_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Categories/CategoryList.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query AllCurrencies {\n    allCurrencies {\n      id\n      name\n      ticker\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var SidebarCategoryList = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])("store")(Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__["observer"])(function (_ref) {
  var store = _ref.store;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(store.currency),
      _useState2 = _slicedToArray(_useState, 2),
      activeCurrency = _useState2[0],
      setCurrency = _useState2[1]; // console.log(currency);
  // const clicked = () => {
  //   if (store.currency == "bitcoin") {
  //     store.currency = "ethereum";
  //   } else if (store.currency == "ethereum") {
  //     store.currency = "bitcoin";
  //   }
  // };


  var currencyClicked = function currencyClicked(e) {
    console.log(e.target.value); // if (e.target.value !== currency) {

    store.currency = e.target.value;
    setCurrency(e.target.value); // }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Query"], {
    query: allCurrencies,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, function (_ref2) {
    var loading = _ref2.loading,
        error = _ref2.error,
        data = _ref2.data;
    if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "no data loaded");
    if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Loading");
    console.log(data.allCurrencies);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CategoryList, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, data.allCurrencies.map(function (currency) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
        className: activeCurrency == currency.name ? "active-currency" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UnstyledButton, {
        value: currency.name,
        onClick: function onClick(e) {
          return currencyClicked(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, currency.name.charAt(0).toUpperCase() + currency.name.slice(1)));
    }));
  });
}));
var allCurrencies = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());
var UnstyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "CategoryList__UnstyledButton",
  componentId: "sc-1g55hdr-0"
})(["", " background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:0 !important;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_7__["transition"]); // const SidebarCategoryList = () => (
// );

/* harmony default export */ __webpack_exports__["default"] = (SidebarCategoryList);
var CategoryList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "CategoryList",
  componentId: "sc-1g55hdr-1"
})(["display:flex;flex-direction:column;"]);
var Item = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CategoryList__Item",
  componentId: "sc-1g55hdr-2"
})(["", " padding:4px 12px;font-size:15px;text-decoration:none;color:", ";::after{left:-1px;top:0;bottom:0;border-left:3px solid ", ";}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_7__["transition"], function (props) {
  return props.theme.normalText;
}, function (props) {
  return props.theme.accent;
});

/***/ })

})
//# sourceMappingURL=dashboard.js.1fd614422f1beb1833fb.hot-update.js.map