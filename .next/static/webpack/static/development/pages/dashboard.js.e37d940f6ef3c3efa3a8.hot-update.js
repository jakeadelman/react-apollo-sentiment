webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Dashboard/DashMain.js":
/*!******************************************!*\
  !*** ./components/Dashboard/DashMain.js ***!
  \******************************************/
/*! exports provided: default, fetchTweetsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTweetsQuery", function() { return fetchTweetsQuery; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query fetchTweets($query: String!) {\n    fetchTweets(query: $query) {\n      id\n      tweetId\n      text\n      score\n      comparative\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var DashMain =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DashMain, _React$Component);

  function DashMain(props) {
    _classCallCheck(this, DashMain);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashMain).call(this, props));
  }

  _createClass(DashMain, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props.initialTerm);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var fetchTweetsVars = {
        query: this.props.initialTerm
      };
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: fetchTweetsQuery,
        variables: fetchTweetsVars
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "no data loaded");
        if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading");
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-4227460866" + " " + "dash-main-table"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
          className: "jsx-4227460866"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thread", {
          className: "jsx-4227460866"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          className: "jsx-4227460866"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          className: "jsx-4227460866"
        }, "query: ", _this.props.initialTerm))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
          className: "jsx-4227460866"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-4227460866"
        }, data.fetchTweets.map(function (tweet) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
            className: "jsx-4227460866"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
            scope: "row",
            className: "jsx-4227460866"
          }, "text"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
            className: "jsx-4227460866"
          }, tweet.text));
        })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "4227460866",
          css: ".dash-main-table.jsx-4227460866{max-width:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaE1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNtQixBQUdxQyxjQUNoQiIsImZpbGUiOiIvVXNlcnMvbWFueC9wcm9qZWN0cy9pbnN0YWdhdWdlL2Zyb250ZW5kL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hNYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHNldFN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmluaXRpYWxUZXJtKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBmZXRjaFR3ZWV0c1ZhcnMgPSB7XG4gICAgICBxdWVyeTogdGhpcy5wcm9wcy5pbml0aWFsVGVybVxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxRdWVyeSBxdWVyeT17ZmV0Y2hUd2VldHNRdWVyeX0gdmFyaWFibGVzPXtmZXRjaFR3ZWV0c1ZhcnN9PlxuICAgICAgICB7KHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+bm8gZGF0YSBsb2FkZWQ8L2Rpdj47XG4gICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj47XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoLW1haW4tdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICA8dGhyZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPnF1ZXJ5OiB7dGhpcy5wcm9wcy5pbml0aWFsVGVybX08L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC90aHJlYWQ+XG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAge2RhdGEuZmV0Y2hUd2VldHMubWFwKHR3ZWV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+dGV4dDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHdlZXQudGV4dH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5kYXNoLW1haW4tdGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvUXVlcnk+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hUd2VldHNRdWVyeSA9IGdxbGBcbiAgcXVlcnkgZmV0Y2hUd2VldHMoJHF1ZXJ5OiBTdHJpbmchKSB7XG4gICAgZmV0Y2hUd2VldHMocXVlcnk6ICRxdWVyeSkge1xuICAgICAgaWRcbiAgICAgIHR3ZWV0SWRcbiAgICAgIHRleHRcbiAgICAgIHNjb3JlXG4gICAgICBjb21wYXJhdGl2ZVxuICAgIH1cbiAgfVxuYDtcblxuLy8gY29uc3QgRGFzaE1haW5XcmFwcGVyID0gd2l0aFJvdXRlcihwcm9wcyA9PiB7XG4vLyAgIGlmICghIXByb3BzLnJvdXRlci5xdWVyeSkge1xuLy8gICAgIGNvbnNvbGUubG9nKFwiUk9VVEVSIFFVRVJZIFRFUk1cIiwgcHJvcHMucm91dGVyLnF1ZXJ5KTtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPERhc2hNYWluIGluaXRpYWxUZXJtPXtwcm9wcy5yb3V0ZXIucXVlcnkudGVybX0gLz5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJJTklUSUFMIFRFUk1cIiwgcHJvcHMuaW5pdGlhbFRlcm0pO1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8RGFzaE1haW4gaW5pdGlhbFRlcm09e3Byb3BzLmluaXRpYWxUZXJtfSAvPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vICAgfVxuLy8gfSk7XG4vLyBleHBvcnQgZGVmYXVsdCBEYXNoTWFpbldyYXBwZXI7XG4vLyBjb25zdCBQYWdlID0gcHJvcHMgPT4gKFxuLy8gICA8ZGl2PlxuLy8gICAgIDxEYXNoTWFpbldyYXBwZXIgaW5pdGlhbFRlcm09e3Byb3BzLmluaXRpYWxUZXJtfSAvPlxuLy8gICA8L2Rpdj5cbi8vICk7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/Dashboard/DashMain.js */"
        })));
      });
    }
  }]);

  return DashMain;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


var fetchTweetsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject()); // const DashMainWrapper = withRouter(props => {
//   if (!!props.router.query) {
//     console.log("ROUTER QUERY TERM", props.router.query);
//     return (
//       <div>
//         <DashMain initialTerm={props.router.query.term} />
//       </div>
//     );
//   } else {
//     console.log("INITIAL TERM", props.initialTerm);
//     return (
//       <div>
//         <DashMain initialTerm={props.initialTerm} />
//       </div>
//     );
//   }
// });
// export default DashMainWrapper;
// const Page = props => (
//   <div>
//     <DashMainWrapper initialTerm={props.initialTerm} />
//   </div>
// );
// export default Page;

/***/ })

})
//# sourceMappingURL=dashboard.js.e37d940f6ef3c3efa3a8.hot-update.js.map