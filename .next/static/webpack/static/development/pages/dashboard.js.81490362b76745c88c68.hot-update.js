webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Dashboard/AddTerm.js":
/*!*****************************************!*\
  !*** ./components/Dashboard/AddTerm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddTerm; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function AddTerm(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      return console.log("was clicked");
    }
  }, "add term"));
}

function AfterClick() {
  var _this = this;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Query, {
    query: fetchTweetsQuery,
    variables: fetchTweetsVars
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        data = _ref.data;
    if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "no data loaded");
    if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading");
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1078505855" + " " + "dash-main-table"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
      className: "jsx-1078505855"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thread", {
      className: "jsx-1078505855"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      className: "jsx-1078505855"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
      className: "jsx-1078505855"
    }, "query: ", _this.props.initialTerm))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
      className: "jsx-1078505855"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1078505855"
    }, data.fetchTweets.map(function (tweet) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        className: "jsx-1078505855"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        scope: "row",
        className: "jsx-1078505855"
      }, "text"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        className: "jsx-1078505855"
      }, tweet.text));
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "1078505855",
      css: ".dash-main-table.jsx-1078505855{max-width:50%;margin:3em auto 3em auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRkVGVybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2lCLEFBR21DLGNBQ1cseUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRkVGVybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFRlcm0ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhcIndhcyBjbGlja2VkXCIpfT5hZGQgdGVybTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBBZnRlckNsaWNrKCkge1xuICByZXR1cm4gKFxuICAgIDxRdWVyeSBxdWVyeT17ZmV0Y2hUd2VldHNRdWVyeX0gdmFyaWFibGVzPXtmZXRjaFR3ZWV0c1ZhcnN9PlxuICAgICAgeyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5ubyBkYXRhIGxvYWRlZDwvZGl2PjtcbiAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj47XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoLW1haW4tdGFibGVcIj5cbiAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDx0aHJlYWQ+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5xdWVyeToge3RoaXMucHJvcHMuaW5pdGlhbFRlcm19PC90aD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aHJlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZmV0Y2hUd2VldHMubWFwKHR3ZWV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj50ZXh0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHdlZXQudGV4dH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgLmRhc2gtbWFpbi10YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDNlbSBhdXRvIDNlbSBhdXRvO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH19XG4gICAgPC9RdWVyeT5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/Dashboard/AddTerm.js */"
    })));
  });
}

/***/ })

})
//# sourceMappingURL=dashboard.js.81490362b76745c88c68.hot-update.js.map