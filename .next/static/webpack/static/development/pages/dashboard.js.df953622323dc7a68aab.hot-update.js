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
  var data = _taggedTemplateLiteral(["\n  query fetchTweets($query: String!) {\n    fetchTweets(query: $query) {\n      id\n      tweetId\n      text\n      polarity\n    }\n  }\n"]);

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
          className: "jsx-3035299306"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
          className: "jsx-3035299306"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thread", {
          className: "jsx-3035299306"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          className: "jsx-3035299306"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
          className: "jsx-3035299306"
        }, "query: ", _this.props.initialTerm))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
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
          css: ".dash-main-table.jsx-3035299306{max-width:50%;display:block;margin:auto;}table.jsx-3035299306{table-layout:fixed;width:100% !important;}.data.jsx-3035299306{display:inline-table;word-wrap:break-word;}td.jsx-3035299306{word-break:break-all;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaE1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENtQixBQUdxQyxBQUtLLEFBSUUsQUFJQSxjQVpQLEtBS1EsRUFJRCxBQUl2QixPQVpjLFlBQ2QsQ0FJQSxDQUlBIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaE1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgc2V0U3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuaW5pdGlhbFRlcm0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGZldGNoVHdlZXRzVmFycyA9IHtcbiAgICAgIHF1ZXJ5OiB0aGlzLnByb3BzLmluaXRpYWxUZXJtXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UXVlcnkgcXVlcnk9e2ZldGNoVHdlZXRzUXVlcnl9IHZhcmlhYmxlcz17ZmV0Y2hUd2VldHNWYXJzfT5cbiAgICAgICAgeyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2Pm5vIGRhdGEgbG9hZGVkPC9kaXY+O1xuICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+O1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaC1tYWluLXRhYmxlXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgPHRocmVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5xdWVyeToge3RoaXMucHJvcHMuaW5pdGlhbFRlcm19PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDwvdGhyZWFkPlxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmZldGNoVHdlZXRzLm1hcCh0d2VldCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj50ZXh0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0d2VldC50ZXh0fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLmRhc2gtbWFpbi10YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmRhdGEge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L1F1ZXJ5PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoVHdlZXRzUXVlcnkgPSBncWxgXG4gIHF1ZXJ5IGZldGNoVHdlZXRzKCRxdWVyeTogU3RyaW5nISkge1xuICAgIGZldGNoVHdlZXRzKHF1ZXJ5OiAkcXVlcnkpIHtcbiAgICAgIGlkXG4gICAgICB0d2VldElkXG4gICAgICB0ZXh0XG4gICAgICBwb2xhcml0eVxuICAgIH1cbiAgfVxuYDtcblxuLy8gY29uc3QgRGFzaE1haW5XcmFwcGVyID0gd2l0aFJvdXRlcihwcm9wcyA9PiB7XG4vLyAgIGlmICghIXByb3BzLnJvdXRlci5xdWVyeSkge1xuLy8gICAgIGNvbnNvbGUubG9nKFwiUk9VVEVSIFFVRVJZIFRFUk1cIiwgcHJvcHMucm91dGVyLnF1ZXJ5KTtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPERhc2hNYWluIGluaXRpYWxUZXJtPXtwcm9wcy5yb3V0ZXIucXVlcnkudGVybX0gLz5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJJTklUSUFMIFRFUk1cIiwgcHJvcHMuaW5pdGlhbFRlcm0pO1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8RGFzaE1haW4gaW5pdGlhbFRlcm09e3Byb3BzLmluaXRpYWxUZXJtfSAvPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vICAgfVxuLy8gfSk7XG4vLyBleHBvcnQgZGVmYXVsdCBEYXNoTWFpbldyYXBwZXI7XG4vLyBjb25zdCBQYWdlID0gcHJvcHMgPT4gKFxuLy8gICA8ZGl2PlxuLy8gICAgIDxEYXNoTWFpbldyYXBwZXIgaW5pdGlhbFRlcm09e3Byb3BzLmluaXRpYWxUZXJtfSAvPlxuLy8gICA8L2Rpdj5cbi8vICk7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/Dashboard/DashMain.js */"
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
//# sourceMappingURL=dashboard.js.df953622323dc7a68aab.hot-update.js.map