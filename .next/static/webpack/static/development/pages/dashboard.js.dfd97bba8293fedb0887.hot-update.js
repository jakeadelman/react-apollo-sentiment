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
            className: "jsx-2902739528"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
            className: "jsx-2902739528"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thread", {
            className: "jsx-2902739528"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
            className: "jsx-2902739528" + " " + "top-row"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
            className: "jsx-2902739528" + " " + "tr-heading"
          }, "query: ", _this2.props.initialTerm), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
            className: "jsx-2902739528" + " " + "bar-heading tr-heading"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
            class: "chart",
            width: "450",
            height: "40",
            "aria-labelledby": "title desc",
            role: "img",
            className: "jsx-2902739528"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
            class: "bar",
            transform: "translate(140,4)",
            className: "jsx-2902739528"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
            width: neg,
            height: "19",
            className: "jsx-2902739528" + " " + "rect1"
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
            x: neg + 5,
            y: "9.5",
            dy: ".35em",
            className: "jsx-2902739528" + " " + "texto"
          }, parseInt(neg), "%"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
            x: "130",
            y: "9.5",
            dy: ".35em",
            className: "jsx-2902739528" + " " + "texto"
          }, "24 hour sentiment")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
            class: "bar2",
            transform: "translate(".concat(trans, ",4)"),
            className: "jsx-2902739528"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
            width: pos,
            height: "19",
            className: "jsx-2902739528" + " " + "rect2"
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
            x: "-35",
            y: "9.5",
            dy: ".35em",
            className: "jsx-2902739528" + " " + "texto"
          }, parseInt(pos), "%")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
            className: "jsx-2902739528"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-2902739528"
          }, data.fetchTweets.map(function (tweet) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
              className: "jsx-2902739528" + " " + "data-".concat(tweet.polarity)
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
              scope: "row",
              className: "jsx-2902739528"
            }, dateformat(tweet.timestamp, "shortTime")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
              className: "jsx-2902739528"
            }, tweet.text));
          })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
            styleId: "2902739528",
            css: ".dash-main-table.jsx-2902739528{max-width:50%;display:block;margin:auto;}table.jsx-2902739528{table-layout:fixed;width:100% !important;}.data-1.jsx-2902739528{word-wrap:break-word;background-color:rgba(127,209,185,0.8);}.data-0.jsx-2902739528{word-wrap:break-word;background-color:rgba(247,175,157,0.8);}td.jsx-2902739528{word-break:break-all;border:1px solid #7a918d;}th.jsx-2902739528{border:1px solid #7a918d;min-width:5em;padding:0.2em;}.tr-heading.jsx-2902739528{border:none;border-radius:3px;min-width:5em;padding:0.4em;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#26c2dd;color:white;}.texto.jsx-2902739528{color:white;}.bar-heading.jsx-2902739528{margin-left:auto;margin-right:0;overflow:overlay;}.rect1.jsx-2902739528{fill:#f7af9d;}.rect2.jsx-2902739528{fill:#7fd1b9;}tr.jsx-2902739528{margin:4px;}tr.top-row.jsx-2902739528{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaE1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0hxQixBQUd1QyxBQUtLLEFBSUUsQUFJQSxBQUlBLEFBSUksQUFLYixBQVNBLEFBR0ssQUFLSixBQUdBLEFBR0YsQUFJRSxXQUhmLENBdkJvQixBQVNwQixDQVFBLEFBR0EsQ0E5Q2dCLEdBc0NDLEVBakNPLEVBSW9CLEFBSUEsQUFJakIsSUFJWCxHQXBCRixFQTBCRSxFQVlHLE9BakJILENBcEJoQixDQUlBLEdBc0JnQixFQVZoQixHQXNCQSxJQWpCQSxLQU1xQixFQW5CckIsQUFJQSxjQXVDQSw2RUF2QjJCLHlCQUNiLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL21hbngvcHJvamVjdHMvaW5zdGFnYXVnZS9mcm9udGVuZC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoTWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBzZXRTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuLy8gaW1wb3J0IFNlbnRpbWVudE1vZHVsZSBmcm9tIFwiLi9TZW50aW1lbnRNb2R1bGVcIjtcbmNvbnN0IGRhdGVmb3JtYXQgPSByZXF1aXJlKFwiZGF0ZWZvcm1hdFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyB0ZXJtOiB0aGlzLnByb3BzLmluaXRpYWxUZXJtIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5pbml0aWFsVGVybSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5pbml0aWFsVGVybSk7XG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7IHRlcm06IHRoaXMucHJvcHMuaW5pdGlhbFRlcm0gfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnNvbGUubG9nKG5leHRQcm9wcy5pbml0aWFsVGVybSk7XG4gICAgaWYgKG5leHRQcm9wcy5pbml0aWFsVGVybSAhPT0gdGhpcy5zdGF0ZS50ZXJtKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGVybTogbmV4dFByb3BzLmluaXRpYWxUZXJtIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUudGVybSkge1xuICAgICAgcmV0dXJuIDxkaXY+bG9hZGluZzwvZGl2PjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmV0Y2hUd2VldHNWYXJzID0ge1xuICAgICAgICBxdWVyeTogdGhpcy5zdGF0ZS50ZXJtXG4gICAgICB9O1xuICAgICAgY29uc29sZS5sb2coZmV0Y2hUd2VldHNWYXJzKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxRdWVyeSBxdWVyeT17ZmV0Y2hUd2VldHNRdWVyeX0gdmFyaWFibGVzPXtmZXRjaFR3ZWV0c1ZhcnN9PlxuICAgICAgICAgIHsoeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIG5vIGRhdGEgbG9hZGVkLi4gdGhlcmUgbWF5IGhhdmUgYmVlbiBhbiBlcnJvciBwbGVhc2UgcmVmcmVzaFxuICAgICAgICAgICAgICAgICAgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+O1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5nZXREYWlseVR3ZWV0KTtcbiAgICAgICAgICAgIGxldCBwb3MgPVxuICAgICAgICAgICAgICAoZGF0YS5nZXREYWlseVR3ZWV0LnBvc2l0aXZlIC8gZGF0YS5nZXREYWlseVR3ZWV0LnRvdGFsKSAqIDEwMDtcbiAgICAgICAgICAgIGxldCBuZWcgPVxuICAgICAgICAgICAgICAoZGF0YS5nZXREYWlseVR3ZWV0Lm5lZ2F0aXZlIC8gZGF0YS5nZXREYWlseVR3ZWV0LnRvdGFsKSAqIDEwMDtcbiAgICAgICAgICAgIGxldCB0cmFucyA9IDE0MCAtIHBvcztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvcywgbmVnKTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoLW1haW4tdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8dGhyZWFkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ0b3Atcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidHItaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeToge3RoaXMucHJvcHMuaW5pdGlhbFRlcm19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJhci1oZWFkaW5nIHRyLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2hhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidGl0bGUgZGVzY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBjbGFzcz1cImJhclwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDAsNClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPXtuZWd9IGhlaWdodD1cIjE5XCIgY2xhc3NOYW1lPVwicmVjdDFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD17bmVnICsgNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjkuNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR5PVwiLjM1ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUludChuZWcpfSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9XCIxMzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5PVwiOS41XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHk9XCIuMzVlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjQgaG91ciBzZW50aW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgY2xhc3M9XCJiYXIyXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7dHJhbnN9LDQpYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD17cG9zfSBoZWlnaHQ9XCIxOVwiIGNsYXNzTmFtZT1cInJlY3QyXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD1cIi0zNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk9XCI5LjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkeT1cIi4zNWVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VJbnQocG9zKX0lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aHJlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZmV0Y2hUd2VldHMubWFwKHR3ZWV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17YGRhdGEtJHt0d2VldC5wb2xhcml0eX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlZm9ybWF0KHR3ZWV0LnRpbWVzdGFtcCwgXCJzaG9ydFRpbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3R3ZWV0LnRleHR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgICAgLmRhc2gtbWFpbi10YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLmRhdGEtMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjA5LCAxODUsIDAuOCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5kYXRhLTAge1xuICAgICAgICAgICAgICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDE3NSwgMTU3LCAwLjgpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjN2E5MThkO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjN2E5MThkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjJlbTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLnRyLWhlYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZjMmRkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAudGV4dG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuYmFyLWhlYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogb3ZlcmxheTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLnJlY3QxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNmN2FmOWQ7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5yZWN0MiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjN2ZkMWI5O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICB0ci50b3Atcm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH19XG4gICAgICAgIDwvUXVlcnk+XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hUd2VldHNRdWVyeSA9IGdxbGBcbiAgcXVlcnkgZmV0Y2hUd2VldHMoJHF1ZXJ5OiBTdHJpbmchKSB7XG4gICAgZmV0Y2hUd2VldHMocXVlcnk6ICRxdWVyeSkge1xuICAgICAgaWRcbiAgICAgIHRpbWVzdGFtcFxuICAgICAgdHdlZXRJZFxuICAgICAgdGV4dFxuICAgICAgcG9sYXJpdHlcbiAgICB9XG5cbiAgICBnZXREYWlseVR3ZWV0KHF1ZXJ5OiAkcXVlcnkpIHtcbiAgICAgIGRheVxuICAgICAgbmVnYXRpdmVcbiAgICAgIHBvc2l0aXZlXG4gICAgICB0b3RhbFxuICAgIH1cbiAgfVxuYDtcbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/Dashboard/DashMain.js */"
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
//# sourceMappingURL=dashboard.js.dfd97bba8293fedb0887.hot-update.js.map