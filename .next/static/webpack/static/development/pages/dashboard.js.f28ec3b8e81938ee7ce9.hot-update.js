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
  var data = _taggedTemplateLiteral(["\n  query fetchTweets($query: String!) {\n    fetchTweets(query: $query) {\n      id\n      timestamp\n      tweetId\n      text\n      polarity\n    }\n\n    getDailyTweet(query: $query) {\n      day\n      negative\n      positive\n      total\n    }\n  }\n"]);

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




 // import SentimentModule from "./SentimentModule";

var dateformat = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");

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
    value: function componentDidMount() {// console.log(this.props.initialTerm);
      // console.log(this.props.initialTerm);
      // this.setState({ term: this.props.initialTerm });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log(nextProps.initialTerm);

      if (nextProps.initialTerm !== this.state.term) {
        this.setState({
          term: nextProps.initialTerm
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.state.term) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "loading");
      } else {
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
          if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "no data loaded.. there may have been an error please refresh the page");
          if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading");
          console.log(data.getDailyTweet);
          var pos = data.getDailyTweet.positive / data.getDailyTweet.total * 100;
          var neg = data.getDailyTweet.negative / data.getDailyTweet.total * 100;
          var trans = 140 - pos;
          console.log(pos, neg);
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "dash-main-table"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-2995059200"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
            className: "jsx-2995059200"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thread", {
            className: "jsx-2995059200"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
            className: "jsx-2995059200" + " " + "top-row"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
            className: "jsx-2995059200" + " " + "tr-heading"
          }, "query: ", _this2.props.initialTerm), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
            className: "jsx-2995059200" + " " + "bar-heading tr-heading"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
            class: "chart",
            width: "450",
            height: "40",
            "aria-labelledby": "title desc",
            role: "img",
            className: "jsx-2995059200"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
            class: "bar",
            transform: "translate(140,4)",
            className: "jsx-2995059200"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
            width: neg,
            height: "19",
            className: "jsx-2995059200" + " " + "rect1"
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
            x: neg + 5,
            y: "9.5",
            dy: ".35em",
            className: "jsx-2995059200" + " " + "texto"
          }, parseInt(neg), "%"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
            x: "130",
            y: "9.5",
            dy: ".35em",
            className: "jsx-2995059200" + " " + "texto"
          }, "24 hour sentiment")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
            class: "bar2",
            transform: "translate(".concat(trans, ",4)"),
            className: "jsx-2995059200"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
            width: pos,
            height: "19",
            className: "jsx-2995059200" + " " + "rect2"
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
            x: "-35",
            y: "9.5",
            dy: ".35em",
            className: "jsx-2995059200" + " " + "texto"
          }, parseInt(pos), "%")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
            className: "jsx-2995059200"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-2995059200"
          }, data.fetchTweets.map(function (tweet) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
              className: "jsx-2995059200" + " " + "data-".concat(tweet.polarity)
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
              scope: "row",
              className: "jsx-2995059200"
            }, dateformat(tweet.timestamp, "shortTime")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
              className: "jsx-2995059200"
            }, tweet.text));
          })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
            styleId: "2995059200",
            css: ".dash-main-table.jsx-2995059200{max-width:50%;display:block;margin:auto;}table.jsx-2995059200{table-layout:fixed;width:100% !important;}.data-1.jsx-2995059200{word-wrap:break-word;background-color:rgba(127,209,185,0.35);}.data-0.jsx-2995059200{word-wrap:break-word;background-color:rgba(247,175,157,0.35);}td.jsx-2995059200{word-break:break-all;border-radius:10px;}th.jsx-2995059200{min-width:5em;padding:0.2em;border-radius:10px;}.tr-heading.jsx-2995059200{border:none;border-radius:5px;min-width:5em;padding:0.4em;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#26c2dd;color:white;}.texto.jsx-2995059200{fill:white;}.bar-heading.jsx-2995059200{margin-left:auto;margin-right:0;overflow:overlay;}.rect1.jsx-2995059200{fill:#f7af9d;}.rect2.jsx-2995059200{fill:#7fd1b9;}tr.jsx-2995059200{margin:4px;}tr.top-row.jsx-2995059200{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaE1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0hxQixBQUd1QyxBQUtLLEFBSUUsQUFJQSxBQUlBLEFBS1AsQUFLRixBQVNELEFBR00sQUFLSixBQUdBLEFBR0YsQUFJRSxXQWpCZixBQWNBLENBdkJvQixDQWlCcEIsQUFHQSxDQS9DZ0IsQUFzQkEsR0FpQkMsRUFsQ08sRUFJcUIsQUFJQSxBQUt4QixPQWpCUCxBQXNCTyxFQUtMLEVBWUcsUUF0Q25CLEFBaUJBLENBYkEsR0F1QmdCLEdBTGhCLEVBaUJBLFNBWHFCLEdBcEJyQixBQUlBLGFBd0NBLDZFQXZCMkIseUJBQ2IsWUFDZCIsImZpbGUiOiIvVXNlcnMvbWFueC9wcm9qZWN0cy9pbnN0YWdhdWdlL2Zyb250ZW5kL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hNYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHNldFN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG4vLyBpbXBvcnQgU2VudGltZW50TW9kdWxlIGZyb20gXCIuL1NlbnRpbWVudE1vZHVsZVwiO1xuY29uc3QgZGF0ZWZvcm1hdCA9IHJlcXVpcmUoXCJkYXRlZm9ybWF0XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHRlcm06IHRoaXMucHJvcHMuaW5pdGlhbFRlcm0gfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmluaXRpYWxUZXJtKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmluaXRpYWxUZXJtKTtcbiAgICAvLyB0aGlzLnNldFN0YXRlKHsgdGVybTogdGhpcy5wcm9wcy5pbml0aWFsVGVybSB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc29sZS5sb2cobmV4dFByb3BzLmluaXRpYWxUZXJtKTtcbiAgICBpZiAobmV4dFByb3BzLmluaXRpYWxUZXJtICE9PSB0aGlzLnN0YXRlLnRlcm0pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXJtOiBuZXh0UHJvcHMuaW5pdGlhbFRlcm0gfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS50ZXJtKSB7XG4gICAgICByZXR1cm4gPGRpdj5sb2FkaW5nPC9kaXY+O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmZXRjaFR3ZWV0c1ZhcnMgPSB7XG4gICAgICAgIHF1ZXJ5OiB0aGlzLnN0YXRlLnRlcm1cbiAgICAgIH07XG4gICAgICBjb25zb2xlLmxvZyhmZXRjaFR3ZWV0c1ZhcnMpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFF1ZXJ5IHF1ZXJ5PXtmZXRjaFR3ZWV0c1F1ZXJ5fSB2YXJpYWJsZXM9e2ZldGNoVHdlZXRzVmFyc30+XG4gICAgICAgICAgeyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgbm8gZGF0YSBsb2FkZWQuLiB0aGVyZSBtYXkgaGF2ZSBiZWVuIGFuIGVycm9yIHBsZWFzZSByZWZyZXNoXG4gICAgICAgICAgICAgICAgICB0aGUgcGFnZVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj47XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmdldERhaWx5VHdlZXQpO1xuICAgICAgICAgICAgbGV0IHBvcyA9XG4gICAgICAgICAgICAgIChkYXRhLmdldERhaWx5VHdlZXQucG9zaXRpdmUgLyBkYXRhLmdldERhaWx5VHdlZXQudG90YWwpICogMTAwO1xuICAgICAgICAgICAgbGV0IG5lZyA9XG4gICAgICAgICAgICAgIChkYXRhLmdldERhaWx5VHdlZXQubmVnYXRpdmUgLyBkYXRhLmdldERhaWx5VHdlZXQudG90YWwpICogMTAwO1xuICAgICAgICAgICAgbGV0IHRyYW5zID0gMTQwIC0gcG9zO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocG9zLCBuZWcpO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2gtbWFpbi10YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDx0aHJlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInRvcC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ci1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7dGhpcy5wcm9wcy5pbml0aWFsVGVybX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYmFyLWhlYWRpbmcgdHItaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjaGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0NTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ0aXRsZSBkZXNjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGNsYXNzPVwiYmFyXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0MCw0KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9e25lZ30gaGVpZ2h0PVwiMTlcIiBjbGFzc05hbWU9XCJyZWN0MVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PXtuZWcgKyA1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5PVwiOS41XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHk9XCIuMzVlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhcnNlSW50KG5lZyl9JVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjEzMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk9XCI5LjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkeT1cIi4zNWVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyNCBob3VyIHNlbnRpbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBjbGFzcz1cImJhcjJcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt0cmFuc30sNClgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPXtwb3N9IGhlaWdodD1cIjE5XCIgY2xhc3NOYW1lPVwicmVjdDJcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PVwiLTM1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjkuNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR5PVwiLjM1ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUludChwb3MpfSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RocmVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mZXRjaFR3ZWV0cy5tYXAodHdlZXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtgZGF0YS0ke3R3ZWV0LnBvbGFyaXR5fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGVmb3JtYXQodHdlZXQudGltZXN0YW1wLCBcInNob3J0VGltZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHdlZXQudGV4dH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgICAuZGFzaC1tYWluLXRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuZGF0YS0xIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAyMDksIDE4NSwgMC4zNSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5kYXRhLTAge1xuICAgICAgICAgICAgICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDE3NSwgMTU3LCAwLjM1KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLnRyLWhlYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZjMmRkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAudGV4dG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5iYXItaGVhZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBvdmVybGF5O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAucmVjdDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogI2Y3YWY5ZDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLnJlY3QyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICM3ZmQxYjk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIHRyLnRvcC1yb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPC9RdWVyeT5cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFR3ZWV0c1F1ZXJ5ID0gZ3FsYFxuICBxdWVyeSBmZXRjaFR3ZWV0cygkcXVlcnk6IFN0cmluZyEpIHtcbiAgICBmZXRjaFR3ZWV0cyhxdWVyeTogJHF1ZXJ5KSB7XG4gICAgICBpZFxuICAgICAgdGltZXN0YW1wXG4gICAgICB0d2VldElkXG4gICAgICB0ZXh0XG4gICAgICBwb2xhcml0eVxuICAgIH1cblxuICAgIGdldERhaWx5VHdlZXQocXVlcnk6ICRxdWVyeSkge1xuICAgICAgZGF5XG4gICAgICBuZWdhdGl2ZVxuICAgICAgcG9zaXRpdmVcbiAgICAgIHRvdGFsXG4gICAgfVxuICB9XG5gO1xuIl19 */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/Dashboard/DashMain.js */"
          })));
        });
      }
    }
  }]);

  return DashMain;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


var fetchTweetsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

/***/ })

})
//# sourceMappingURL=dashboard.js.f28ec3b8e81938ee7ce9.hot-update.js.map