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
/* harmony import */ var _SentimentModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SentimentModule */ "./components/Dashboard/SentimentModule.js");


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query fetchTweets($query: String!) {\n    fetchTweets(query: $query) {\n      id\n      tweetId\n      text\n      polarity\n    }\n\n    getDailyTweet(query: $query) {\n      day\n      negative\n      positive\n      total\n    }\n  }\n"]);

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
    var _this;

    _classCallCheck(this, DashMain);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DashMain).call(this, props));
    _this.state = {
      term: _this.props.initialTerm
    };
    return _this;
  }

  _createClass(DashMain, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        term: this.props.initialTerm
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var fetchTweetsVars = {
        query: this.state.term
      };
      console.log(fetchTweetsVars);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: fetchTweetsQuery,
        variables: fetchTweetsVars
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "no data loaded");
        if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading");
        console.log(data);
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "dash-main-table"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3035299306"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
          className: "jsx-3035299306"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thread", {
          className: "jsx-3035299306"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          className: "jsx-3035299306"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          className: "jsx-3035299306"
        }, "query: ", _this2.props.initialTerm), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          className: "jsx-3035299306"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
          class: "chart",
          width: "150",
          height: "150",
          "aria-labelledby": "title desc",
          role: "img",
          className: "jsx-3035299306"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
          id: "title",
          className: "jsx-3035299306"
        }, "A bar chart showing information"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("desc", {
          id: "desc",
          className: "jsx-3035299306"
        }, "4 apples; 8 bananas; 15 kiwis; 16 oranges; 23 lemons"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
          class: "bar",
          className: "jsx-3035299306"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
          width: "40",
          height: "19",
          className: "jsx-3035299306"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
          x: "45",
          y: "9.5",
          dy: ".35em",
          className: "jsx-3035299306"
        }, "4 apples")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
          className: "jsx-3035299306"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3035299306"
        }, data.fetchTweets.map(function (tweet) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
            className: "jsx-3035299306" + " " + "data"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
            scope: "row",
            className: "jsx-3035299306"
          }, "text"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
            className: "jsx-3035299306"
          }, tweet.text));
        })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "3035299306",
          css: ".dash-main-table.jsx-3035299306{max-width:50%;display:block;margin:auto;}table.jsx-3035299306{table-layout:fixed;width:100% !important;}.data.jsx-3035299306{display:inline-table;word-wrap:break-word;}td.jsx-3035299306{word-break:break-all;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaE1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0VtQixBQUdxQyxBQUtLLEFBSUUsQUFJQSxjQVpQLEtBS1EsRUFJRCxBQUl2QixPQVpjLFlBQ2QsQ0FJQSxDQUlBIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaE1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgc2V0U3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBTZW50aW1lbnRNb2R1bGUgZnJvbSBcIi4vU2VudGltZW50TW9kdWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgdGVybTogdGhpcy5wcm9wcy5pbml0aWFsVGVybSB9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXJtOiB0aGlzLnByb3BzLmluaXRpYWxUZXJtIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGZldGNoVHdlZXRzVmFycyA9IHtcbiAgICAgIHF1ZXJ5OiB0aGlzLnN0YXRlLnRlcm1cbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKGZldGNoVHdlZXRzVmFycyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxRdWVyeSBxdWVyeT17ZmV0Y2hUd2VldHNRdWVyeX0gdmFyaWFibGVzPXtmZXRjaFR3ZWV0c1ZhcnN9PlxuICAgICAgICB7KHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+bm8gZGF0YSBsb2FkZWQ8L2Rpdj47XG4gICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj47XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoLW1haW4tdGFibGVcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICA8dGhyZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPnF1ZXJ5OiB7dGhpcy5wcm9wcy5pbml0aWFsVGVybX08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjaGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidGl0bGUgZGVzY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGUgaWQ9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEEgYmFyIGNoYXJ0IHNob3dpbmcgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRlc2MgaWQ9XCJkZXNjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNCBhcHBsZXM7IDggYmFuYW5hczsgMTUga2l3aXM7IDE2IG9yYW5nZXM7IDIzIGxlbW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rlc2M+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGNsYXNzPVwiYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjE5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PVwiNDVcIiB5PVwiOS41XCIgZHk9XCIuMzVlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCBhcHBsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8L3RocmVhZD5cbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mZXRjaFR3ZWV0cy5tYXAodHdlZXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+dGV4dDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHdlZXQudGV4dH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5kYXNoLW1haW4tdGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kYXRhIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9RdWVyeT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFR3ZWV0c1F1ZXJ5ID0gZ3FsYFxuICBxdWVyeSBmZXRjaFR3ZWV0cygkcXVlcnk6IFN0cmluZyEpIHtcbiAgICBmZXRjaFR3ZWV0cyhxdWVyeTogJHF1ZXJ5KSB7XG4gICAgICBpZFxuICAgICAgdHdlZXRJZFxuICAgICAgdGV4dFxuICAgICAgcG9sYXJpdHlcbiAgICB9XG5cbiAgICBnZXREYWlseVR3ZWV0KHF1ZXJ5OiAkcXVlcnkpIHtcbiAgICAgIGRheVxuICAgICAgbmVnYXRpdmVcbiAgICAgIHBvc2l0aXZlXG4gICAgICB0b3RhbFxuICAgIH1cbiAgfVxuYDtcblxuLy8gY29uc3QgRGFzaE1haW5XcmFwcGVyID0gd2l0aFJvdXRlcihwcm9wcyA9PiB7XG4vLyAgIGlmICghIXByb3BzLnJvdXRlci5xdWVyeSkge1xuLy8gICAgIGNvbnNvbGUubG9nKFwiUk9VVEVSIFFVRVJZIFRFUk1cIiwgcHJvcHMucm91dGVyLnF1ZXJ5KTtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPERhc2hNYWluIGluaXRpYWxUZXJtPXtwcm9wcy5yb3V0ZXIucXVlcnkudGVybX0gLz5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJJTklUSUFMIFRFUk1cIiwgcHJvcHMuaW5pdGlhbFRlcm0pO1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8RGFzaE1haW4gaW5pdGlhbFRlcm09e3Byb3BzLmluaXRpYWxUZXJtfSAvPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vICAgfVxuLy8gfSk7XG4vLyBleHBvcnQgZGVmYXVsdCBEYXNoTWFpbldyYXBwZXI7XG4vLyBjb25zdCBQYWdlID0gcHJvcHMgPT4gKFxuLy8gICA8ZGl2PlxuLy8gICAgIDxEYXNoTWFpbldyYXBwZXIgaW5pdGlhbFRlcm09e3Byb3BzLmluaXRpYWxUZXJtfSAvPlxuLy8gICA8L2Rpdj5cbi8vICk7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/Dashboard/DashMain.js */"
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
//# sourceMappingURL=dashboard.js.8e69d26f2d4fe4964f50.hot-update.js.map