webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Dashboard/DashInitialTerms.js":
/*!**************************************************!*\
  !*** ./components/Dashboard/DashInitialTerms.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashInitialTerms; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _FetchQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FetchQuery */ "./components/Dashboard/FetchQuery.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _stores_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../stores/store */ "./stores/store.js");
var _dec,
    _class,
    _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Dashboard/DashInitialTerms.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var Cookie = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");

var DashInitialTerms = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DashInitialTerms, _React$Component);

  function DashInitialTerms(props) {
    var _this;

    _classCallCheck(this, DashInitialTerms);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DashInitialTerms).call(this, props));
    _this.state = {};
    _this.onTheClick = _this.onTheClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.check = _this.check.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getStorage = _this.getStorage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DashInitialTerms, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var cook = Cookie.get("isAuth") == "true";

      if (!cook) {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
      } else if (!!cook) {
        this.setState({
          isAuth: cook
        });
      }

      setTimeout(function () {
        console.log("isAuth is ".concat(_this2.props.store.isAuth, " on initial load"));
      }, 1000);
    }
  }, {
    key: "getStorage",
    value: function getStorage() {
      window.localStorage.removeItem("store");
    }
  }, {
    key: "onTheClick",
    value: function onTheClick() {
      this.props.store.isAuth = !this.props.store.isAuth;
    }
  }, {
    key: "check",
    value: function check() {
      console.log("isAuth is ".concat(this.props.store.isAuth));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
        theme: _theme__WEBPACK_IMPORTED_MODULE_2__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.onTheClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "rehydrate"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.check,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "check"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.getStorage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "check2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FetchQuery__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })));
    } // render() {
    //   return (
    //     <ThemeProvider theme={theme}>
    //       <FetchQuery />
    //     </ThemeProvider>
    //   );
    // }

  }]);

  return DashInitialTerms;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class) || _class);


/***/ })

})
//# sourceMappingURL=dashboard.js.203a9d8911db65cb7300.hot-update.js.map