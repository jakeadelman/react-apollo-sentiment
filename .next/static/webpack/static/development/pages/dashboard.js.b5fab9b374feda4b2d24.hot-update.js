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
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Popover */ "./components/Dashboard/Popover.js");


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query fetchTerms {\n    fetchTerms {\n      id\n      term\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function AddTerm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      setClicked(true);
    }
  }, "add term"), !!clicked ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: fetchTweetsQuery
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        data = _ref.data;
    if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "no data loaded");
    if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading");
    console.log(data);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Popover__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }) : console.log("is false"));
}

var AfterClickTry = function AfterClickTry() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "fuck yall"), console.log("fuck"));
};

function AfterClick() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: fetchTweetsQuery
  }, function (_ref2) {
    var loading = _ref2.loading,
        error = _ref2.error,
        data = _ref2.data;
    if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "no data loaded");
    if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading");
    console.log(data);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1078505855" + " " + "dash-main-table"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1078505855"
    }, "clicky bro"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "1078505855",
      css: ".dash-main-table.jsx-1078505855{max-width:50%;margin:3em auto 3em auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRkVGVybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RGlCLEFBR21DLGNBQ1cseUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRkVGVybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSBcIi4vUG9wb3ZlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRUZXJtKHByb3BzKSB7XG4gIGNvbnN0IFtjbGlja2VkLCBzZXRDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRDbGlja2VkKHRydWUpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBhZGQgdGVybVxuICAgICAgPC9idXR0b24+XG4gICAgICB7ISFjbGlja2VkID8gKFxuICAgICAgICA8UXVlcnkgcXVlcnk9e2ZldGNoVHdlZXRzUXVlcnl9PlxuICAgICAgICAgIHsoeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2Pm5vIGRhdGEgbG9hZGVkPC9kaXY+O1xuICAgICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj47XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH19XG4gICAgICAgIDwvUXVlcnk+XG4gICAgICApIDogKFxuICAgICAgICBjb25zb2xlLmxvZyhcImlzIGZhbHNlXCIpXG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBBZnRlckNsaWNrVHJ5ID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxkaXY+ZnVjayB5YWxsPC9kaXY+XG4gICAge2NvbnNvbGUubG9nKFwiZnVja1wiKX1cbiAgPC9kaXY+XG4pO1xuXG5mdW5jdGlvbiBBZnRlckNsaWNrKCkge1xuICByZXR1cm4gKFxuICAgIDxRdWVyeSBxdWVyeT17ZmV0Y2hUd2VldHNRdWVyeX0+XG4gICAgICB7KHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2Pm5vIGRhdGEgbG9hZGVkPC9kaXY+O1xuICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PjtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaC1tYWluLXRhYmxlXCI+XG4gICAgICAgICAgICAgIDxkaXY+Y2xpY2t5IGJybzwvZGl2PlxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAuZGFzaC1tYWluLXRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogM2VtIGF1dG8gM2VtIGF1dG87XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfX1cbiAgICA8L1F1ZXJ5PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hUd2VldHNRdWVyeSA9IGdxbGBcbiAgcXVlcnkgZmV0Y2hUZXJtcyB7XG4gICAgZmV0Y2hUZXJtcyB7XG4gICAgICBpZFxuICAgICAgdGVybVxuICAgIH1cbiAgfVxuYDtcbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/Dashboard/AddTerm.js */"
    })));
  });
}

var fetchTweetsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

/***/ }),

/***/ "./components/Dashboard/Popover.js":
/*!*****************************************!*\
  !*** ./components/Dashboard/Popover.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      popoverOpen: false
    };
    return _this;
  }

  _createClass(Example, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        popoverOpen: !this.state.popoverOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        id: "Popover1",
        type: "button"
      }, "Launch Popover"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
        placement: "bottom",
        isOpen: this.state.popoverOpen,
        target: "Popover1",
        toggle: this.toggle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverHeader"], null, "Popover Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverBody"], null, "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")));
    }
  }]);

  return Example;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=dashboard.js.b5fab9b374feda4b2d24.hot-update.js.map