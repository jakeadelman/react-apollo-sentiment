webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Dashboard/FetchQuery.js":
/*!********************************************!*\
  !*** ./components/Dashboard/FetchQuery.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Charts/ReChart */ "./components/Charts/ReChart.js");
/* harmony import */ var _Categories_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Categories/Menu */ "./components/Categories/Menu.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _stores_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../stores/store */ "./stores/store.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Dashboard/FetchQuery.js";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query fetchFourHourSent($term: String!) {\n    fetchFourHourSent(term: $term) {\n      id\n      term\n      sentiment\n      hour\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







 // import { observer } from "mobx-react-lite";

 // import { storesContext } from "../../stores/UserStore";

var FetchQuery = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["inject"])("store")(Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["observer"])(function (_ref) {
  var store = _ref.store;

  if (store) {
    var theStore = store;
    console.log(theStore.isAuth);
  }

  var clicked = function clicked() {
    store.isAuth = !store.isAuth;
    console.log(store.isAuth);
  };

  var fetchFourHourSentVariables = {
    term: "bitcoin"
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: fetchFourHourSentQuery,
    variables: fetchFourHourSentVariables,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, function (_ref2) {
    var loading = _ref2.loading,
        error = _ref2.error,
        data = _ref2.data;
    if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "no data loaded");
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Loading");
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: clicked,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "click in query"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChartWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Categories_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }));
  });
}));
/* harmony default export */ __webpack_exports__["default"] = (FetchQuery);
var fetchFourHourSentQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "FetchQuery__ChartWrapper",
  componentId: "sc-1g6l220-0"
})(["background:white;border:1px solid #ebedf0;padding:5px;width:100%;@media (max-width:768px){margin:0 5vw;}"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "FetchQuery__Wrapper",
  componentId: "sc-1g6l220-1"
})(["display:flex;align-items:flex-align;"]);

/***/ })

})
//# sourceMappingURL=dashboard.js.6b0aec5004be40030b5a.hot-update.js.map