webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Dashboard/AddTerm.js":
/*!*****************************************!*\
  !*** ./components/Dashboard/AddTerm.js ***!
  \*****************************************/
/*! exports provided: default, fetchTweetsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTweetsQuery", function() { return fetchTweetsQuery; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query fetchTerms {\n    fetchTerms {\n      id\n      term\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




function AddTerm(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      console.log("clicked here");
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AfterClickTry, null);
    }
  }, "add term"));
}

function AfterClickTry() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "fuck yall"), console.log("fuck"));
}

function AfterClick() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: fetchTweetsQuery
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        data = _ref.data;
    if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "no data loaded");
    if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading");
    console.log(data);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1078505855" + " " + "dash-main-table"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1078505855"
    }, "clicky bro"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "1078505855",
      css: ".dash-main-table.jsx-1078505855{max-width:50%;margin:3em auto 3em auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRkVGVybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q2lCLEFBR21DLGNBQ1cseUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRkVGVybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBzZXRTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRUZXJtKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZCBoZXJlXCIpO1xuICAgICAgICAgIHJldHVybiA8QWZ0ZXJDbGlja1RyeSAvPjtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgYWRkIHRlcm1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBBZnRlckNsaWNrVHJ5KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PmZ1Y2sgeWFsbDwvZGl2PlxuICAgICAge2NvbnNvbGUubG9nKFwiZnVja1wiKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQWZ0ZXJDbGljaygpIHtcbiAgcmV0dXJuIChcbiAgICA8UXVlcnkgcXVlcnk9e2ZldGNoVHdlZXRzUXVlcnl9PlxuICAgICAgeyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5ubyBkYXRhIGxvYWRlZDwvZGl2PjtcbiAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj47XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2gtbWFpbi10YWJsZVwiPlxuICAgICAgICAgICAgICA8ZGl2PmNsaWNreSBicm88L2Rpdj5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgLmRhc2gtbWFpbi10YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDNlbSBhdXRvIDNlbSBhdXRvO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH19XG4gICAgPC9RdWVyeT5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoVHdlZXRzUXVlcnkgPSBncWxgXG4gIHF1ZXJ5IGZldGNoVGVybXMge1xuICAgIGZldGNoVGVybXMge1xuICAgICAgaWRcbiAgICAgIHRlcm1cbiAgICB9XG4gIH1cbmA7XG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/Dashboard/AddTerm.js */"
    })));
  });
}

var fetchTweetsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

/***/ })

})
//# sourceMappingURL=dashboard.js.f2105c4d1a7b3a7ee369.hot-update.js.map