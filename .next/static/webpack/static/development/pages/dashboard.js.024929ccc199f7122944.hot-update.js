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
            className: "jsx-3677833986"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
            className: "jsx-3677833986"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thread", {
            className: "jsx-3677833986"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
            className: "jsx-3677833986" + " " + "top-row"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
            className: "jsx-3677833986" + " " + "tr-heading"
          }, "query: ", _this2.props.initialTerm), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
            className: "jsx-3677833986" + " " + "bar-heading tr-heading"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
            class: "chart",
            width: "450",
            height: "40",
            "aria-labelledby": "title desc",
            role: "img",
            className: "jsx-3677833986"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
            class: "bar",
            transform: "translate(140,4)",
            className: "jsx-3677833986"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
            width: neg,
            height: "19",
            className: "jsx-3677833986" + " " + "rect1"
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
            x: neg + 5,
            y: "9.5",
            dy: ".35em",
            className: "jsx-3677833986"
          }, parseInt(neg), "%"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
            x: "130",
            y: "9.5",
            dy: ".35em",
            className: "jsx-3677833986"
          }, "24 hour sentiment")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
            class: "bar2",
            transform: "translate(".concat(trans, ",4)"),
            className: "jsx-3677833986"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
            width: pos,
            height: "19",
            className: "jsx-3677833986" + " " + "rect2"
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
            x: "-35",
            y: "9.5",
            dy: ".35em",
            className: "jsx-3677833986"
          }, parseInt(pos), "%")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
            className: "jsx-3677833986"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-3677833986"
          }, data.fetchTweets.map(function (tweet) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
              className: "jsx-3677833986" + " " + "data-".concat(tweet.polarity)
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
              scope: "row",
              className: "jsx-3677833986"
            }, dateformat(tweet.timestamp, "shortTime")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
              className: "jsx-3677833986"
            }, tweet.text));
          })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
            styleId: "3677833986",
            css: ".dash-main-table.jsx-3677833986{max-width:50%;display:block;margin:auto;}table.jsx-3677833986{table-layout:fixed;width:100% !important;}.data-1.jsx-3677833986{word-wrap:break-word;background-color:rgba(127,209,185,0.8);}.data-0.jsx-3677833986{word-wrap:break-word;background-color:rgba(247,175,157,0.8);}td.jsx-3677833986{word-break:break-all;border:1px solid #7a918d;}th.jsx-3677833986{border:1px solid #7a918d;min-width:5em;padding:0.2em;}.tr-heading.jsx-3677833986{border:none;min-width:5em;padding:0.3em;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#5d737e;}.bar-heading.jsx-3677833986{margin-left:auto;margin-right:0;overflow:overlay;}.rect1.jsx-3677833986{fill:#f7af9d;}.rect2.jsx-3677833986{fill:#7fd1b9;}tr.jsx-3677833986{margin:4px;}tr.top-row.jsx-3677833986{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaE1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0dxQixBQUd1QyxBQUtLLEFBSUUsQUFJQSxBQUlBLEFBSUksQUFLYixBQU9LLEFBS0osQUFHQSxBQUdGLEFBSUUsV0FIZixDQWxCZ0IsQ0FZaEIsQUFHQSxDQXpDZ0IsR0FpQ0MsRUE1Qk8sRUFJb0IsQUFJQSxBQUlqQixJQUlYLENBTUEsRUExQkYsSUFpQ0ssT0FaSCxDQXBCaEIsQUEwQnFCLENBdEJyQixLQVlBLEdBaUJBLElBWkEsT0FiQSxBQUlBLGNBa0NBLDJEQW5CMkIseUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaE1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgc2V0U3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbi8vIGltcG9ydCBTZW50aW1lbnRNb2R1bGUgZnJvbSBcIi4vU2VudGltZW50TW9kdWxlXCI7XG5jb25zdCBkYXRlZm9ybWF0ID0gcmVxdWlyZShcImRhdGVmb3JtYXRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgdGVybTogdGhpcy5wcm9wcy5pbml0aWFsVGVybSB9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuaW5pdGlhbFRlcm0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuaW5pdGlhbFRlcm0pO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoeyB0ZXJtOiB0aGlzLnByb3BzLmluaXRpYWxUZXJtIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zb2xlLmxvZyhuZXh0UHJvcHMuaW5pdGlhbFRlcm0pO1xuICAgIGlmIChuZXh0UHJvcHMuaW5pdGlhbFRlcm0gIT09IHRoaXMuc3RhdGUudGVybSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRlcm06IG5leHRQcm9wcy5pbml0aWFsVGVybSB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLnRlcm0pIHtcbiAgICAgIHJldHVybiA8ZGl2PmxvYWRpbmc8L2Rpdj47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZldGNoVHdlZXRzVmFycyA9IHtcbiAgICAgICAgcXVlcnk6IHRoaXMuc3RhdGUudGVybVxuICAgICAgfTtcbiAgICAgIGNvbnNvbGUubG9nKGZldGNoVHdlZXRzVmFycyk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UXVlcnkgcXVlcnk9e2ZldGNoVHdlZXRzUXVlcnl9IHZhcmlhYmxlcz17ZmV0Y2hUd2VldHNWYXJzfT5cbiAgICAgICAgICB7KHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBubyBkYXRhIGxvYWRlZC4uIHRoZXJlIG1heSBoYXZlIGJlZW4gYW4gZXJyb3IgcGxlYXNlIHJlZnJlc2hcbiAgICAgICAgICAgICAgICAgIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZ2V0RGFpbHlUd2VldCk7XG4gICAgICAgICAgICBsZXQgcG9zID1cbiAgICAgICAgICAgICAgKGRhdGEuZ2V0RGFpbHlUd2VldC5wb3NpdGl2ZSAvIGRhdGEuZ2V0RGFpbHlUd2VldC50b3RhbCkgKiAxMDA7XG4gICAgICAgICAgICBsZXQgbmVnID1cbiAgICAgICAgICAgICAgKGRhdGEuZ2V0RGFpbHlUd2VldC5uZWdhdGl2ZSAvIGRhdGEuZ2V0RGFpbHlUd2VldC50b3RhbCkgKiAxMDA7XG4gICAgICAgICAgICBsZXQgdHJhbnMgPSAxNDAgLSBwb3M7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwb3MsIG5lZyk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaC1tYWluLXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPHRocmVhZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwidG9wLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRyLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHt0aGlzLnByb3BzLmluaXRpYWxUZXJtfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJiYXItaGVhZGluZyB0ci1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNoYXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQ1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInRpdGxlIGRlc2NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgY2xhc3M9XCJiYXJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQwLDQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD17bmVnfSBoZWlnaHQ9XCIxOVwiIGNsYXNzTmFtZT1cInJlY3QxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IHg9e25lZyArIDV9IHk9XCI5LjVcIiBkeT1cIi4zNWVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUludChuZWcpfSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IHg9XCIxMzBcIiB5PVwiOS41XCIgZHk9XCIuMzVlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyNCBob3VyIHNlbnRpbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBjbGFzcz1cImJhcjJcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt0cmFuc30sNClgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPXtwb3N9IGhlaWdodD1cIjE5XCIgY2xhc3NOYW1lPVwicmVjdDJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQgeD1cIi0zNVwiIHk9XCI5LjVcIiBkeT1cIi4zNWVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUludChwb3MpfSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RocmVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5mZXRjaFR3ZWV0cy5tYXAodHdlZXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtgZGF0YS0ke3R3ZWV0LnBvbGFyaXR5fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGVmb3JtYXQodHdlZXQudGltZXN0YW1wLCBcInNob3J0VGltZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dHdlZXQudGV4dH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgICAuZGFzaC1tYWluLXRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuZGF0YS0xIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAyMDksIDE4NSwgMC44KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLmRhdGEtMCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMTc1LCAxNTcsIDAuOCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YTkxOGQ7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YTkxOGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMmVtO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAudHItaGVhZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuM2VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZDczN2U7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5iYXItaGVhZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBvdmVybGF5O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAucmVjdDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogI2Y3YWY5ZDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLnJlY3QyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICM3ZmQxYjk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIHRyLnRvcC1yb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPC9RdWVyeT5cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFR3ZWV0c1F1ZXJ5ID0gZ3FsYFxuICBxdWVyeSBmZXRjaFR3ZWV0cygkcXVlcnk6IFN0cmluZyEpIHtcbiAgICBmZXRjaFR3ZWV0cyhxdWVyeTogJHF1ZXJ5KSB7XG4gICAgICBpZFxuICAgICAgdGltZXN0YW1wXG4gICAgICB0d2VldElkXG4gICAgICB0ZXh0XG4gICAgICBwb2xhcml0eVxuICAgIH1cblxuICAgIGdldERhaWx5VHdlZXQocXVlcnk6ICRxdWVyeSkge1xuICAgICAgZGF5XG4gICAgICBuZWdhdGl2ZVxuICAgICAgcG9zaXRpdmVcbiAgICAgIHRvdGFsXG4gICAgfVxuICB9XG5gO1xuIl19 */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/Dashboard/DashMain.js */"
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
//# sourceMappingURL=dashboard.js.024929ccc199f7122944.hot-update.js.map