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
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "dash-main-table"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-1709606672"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
          className: "jsx-1709606672"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thread", {
          className: "jsx-1709606672"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          className: "jsx-1709606672"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          className: "jsx-1709606672"
        }, "query: ", _this.props.initialTerm))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
          className: "jsx-1709606672"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-1709606672"
        }, data.fetchTweets.map(function (tweet) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
            className: "jsx-1709606672"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
            scope: "row",
            className: "jsx-1709606672"
          }, "text"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
            className: "jsx-1709606672"
          }, tweet.text));
        })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "1709606672",
          css: ".dash-main-table.jsx-1709606672{max-width:50%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaE1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNtQixBQUdxQyxjQUNRLDhFQUN4QiIsImZpbGUiOiIvVXNlcnMvbWFueC9wcm9qZWN0cy9pbnN0YWdhdWdlL2Zyb250ZW5kL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hNYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHNldFN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmluaXRpYWxUZXJtKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBmZXRjaFR3ZWV0c1ZhcnMgPSB7XG4gICAgICBxdWVyeTogdGhpcy5wcm9wcy5pbml0aWFsVGVybVxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxRdWVyeSBxdWVyeT17ZmV0Y2hUd2VldHNRdWVyeX0gdmFyaWFibGVzPXtmZXRjaFR3ZWV0c1ZhcnN9PlxuICAgICAgICB7KHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+bm8gZGF0YSBsb2FkZWQ8L2Rpdj47XG4gICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj47XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoLW1haW4tdGFibGVcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICA8dGhyZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPnF1ZXJ5OiB7dGhpcy5wcm9wcy5pbml0aWFsVGVybX08L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC90aHJlYWQ+XG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAge2RhdGEuZmV0Y2hUd2VldHMubWFwKHR3ZWV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+dGV4dDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHdlZXQudGV4dH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5kYXNoLW1haW4tdGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9RdWVyeT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFR3ZWV0c1F1ZXJ5ID0gZ3FsYFxuICBxdWVyeSBmZXRjaFR3ZWV0cygkcXVlcnk6IFN0cmluZyEpIHtcbiAgICBmZXRjaFR3ZWV0cyhxdWVyeTogJHF1ZXJ5KSB7XG4gICAgICBpZFxuICAgICAgdHdlZXRJZFxuICAgICAgdGV4dFxuICAgICAgc2NvcmVcbiAgICAgIGNvbXBhcmF0aXZlXG4gICAgfVxuICB9XG5gO1xuXG4vLyBjb25zdCBEYXNoTWFpbldyYXBwZXIgPSB3aXRoUm91dGVyKHByb3BzID0+IHtcbi8vICAgaWYgKCEhcHJvcHMucm91dGVyLnF1ZXJ5KSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJST1VURVIgUVVFUlkgVEVSTVwiLCBwcm9wcy5yb3V0ZXIucXVlcnkpO1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8RGFzaE1haW4gaW5pdGlhbFRlcm09e3Byb3BzLnJvdXRlci5xdWVyeS50ZXJtfSAvPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLmxvZyhcIklOSVRJQUwgVEVSTVwiLCBwcm9wcy5pbml0aWFsVGVybSk7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxEYXNoTWFpbiBpbml0aWFsVGVybT17cHJvcHMuaW5pdGlhbFRlcm19IC8+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9KTtcbi8vIGV4cG9ydCBkZWZhdWx0IERhc2hNYWluV3JhcHBlcjtcbi8vIGNvbnN0IFBhZ2UgPSBwcm9wcyA9PiAoXG4vLyAgIDxkaXY+XG4vLyAgICAgPERhc2hNYWluV3JhcHBlciBpbml0aWFsVGVybT17cHJvcHMuaW5pdGlhbFRlcm19IC8+XG4vLyAgIDwvZGl2PlxuLy8gKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/Dashboard/DashMain.js */"
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
//# sourceMappingURL=dashboard.js.9438bc73901cb221e414.hot-update.js.map