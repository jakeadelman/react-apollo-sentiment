webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Dashboard/DashInitialTerms.js":
/*!**************************************************!*\
  !*** ./components/Dashboard/DashInitialTerms.js ***!
  \**************************************************/
/*! exports provided: fetchTweetsQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTweetsQuery", function() { return fetchTweetsQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DashMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DashMain */ "./components/Dashboard/DashMain.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../App */ "./components/App.js");
/* harmony import */ var _Header2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Header2 */ "./components/Header2.js");
/* harmony import */ var _AddTerm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddTerm */ "./components/Dashboard/AddTerm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _Charts_AreaChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Charts/AreaChart */ "./components/Charts/AreaChart.js");
/* harmony import */ var _Charts_AxisChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Charts/AxisChart */ "./components/Charts/AxisChart.js");
/* harmony import */ var _Charts_NewChart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Charts/NewChart */ "./components/Charts/NewChart.js");
/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Window */ "./components/Dashboard/Window.js");
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-window-size */ "./node_modules/react-window-size/index.js");
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_window_size__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Charts_BtcChart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Charts/BtcChart */ "./components/Charts/BtcChart.js");
/* harmony import */ var _Charts_Currency__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Charts/Currency */ "./components/Charts/Currency.js");
/* harmony import */ var _Charts_ReChart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Charts/ReChart */ "./components/Charts/ReChart.js");
/* harmony import */ var _Categories_Menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Categories/Menu */ "./components/Categories/Menu.js");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_20__);
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Dashboard/DashInitialTerms.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query fetchTerms {\n    fetchTerms {\n      id\n      term\n    }\n  }\n"]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




















 // import theme from "../theme";



var Cookie = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");

var DashInitialTerms =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DashInitialTerms, _React$Component);

  function DashInitialTerms(props) {
    var _this;

    _classCallCheck(this, DashInitialTerms);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DashInitialTerms).call(this, props));
    _this.state = {
      allTerms: [],
      width: 0,
      height: 0
    };
    _this.toggleTerm = _this.toggleTerm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.mapTerms = _this.mapTerms.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this))); // this.push = this.push.bind(this);

    return _this;
  }

  _createClass(DashInitialTerms, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var cook = Cookie.get("isAuth") == "true";

      if (!cook) {
        next_router__WEBPACK_IMPORTED_MODULE_20___default.a.push("/");
      } else if (!!cook) {
        this.setState({
          isAuth: cook
        });
      }

      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }
  }, {
    key: "updateWindowDimensions",
    value: function updateWindowDimensions() {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
      console.log(this.state.width);
    }
  }, {
    key: "toggleTerm",
    value: function toggleTerm(term) {
      this.setState({
        term: term
      });
      console.log(this.state);
    }
  }, {
    key: "mapTerms",
    value: function mapTerms(allterms) {
      var _this2 = this;

      allterms.map(function (term) {
        _this2.state.allTerms.push(term.term);
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      // console.log(e.target.value);
      this.setState({
        term: e.target.value
      });
      console.log(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      var marg = {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: fetchTweetsQuery,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        // if (error) return <div>no data loaded</div>;
        // if (loading) return <div>Loading</div>;
        console.log(data); // if (!this.state.allTerms[0]) {
        //   this.toggleTerm(data.fetchTerms[0].term);
        //   this.mapTerms(data.fetchTerms);
        //   return <div>loading</div>;
        // }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_8__["ThemeProvider"], {
          theme: _theme__WEBPACK_IMPORTED_MODULE_9__["default"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            background: "white",
            border: "1px solid #ebedf0",
            padding: "5px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_17__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Categories_Menu__WEBPACK_IMPORTED_MODULE_18__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        })));
      });
    }
  }]);

  return DashInitialTerms;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Menu = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].nav.withConfig({
  displayName: "DashInitialTerms__Menu",
  componentId: "tore73-0"
})(["border:1px solid ", ";@media (max-width:768px){display:flex;}"], function (props) {
  return props.theme.border;
});
var fetchTweetsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (DashInitialTerms);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "DashInitialTerms__Wrapper",
  componentId: "tore73-1"
})(["display:flex;align-items:flex-align;"]);
var SampleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].header.withConfig({
  displayName: "DashInitialTerms__SampleWrapper",
  componentId: "tore73-2"
})(["position:sticky;z-index:10;top:0;display:flex;align-items:stretch;margin-bottom:24px;box-shadow:0 4px 12px ", ";border-bottom:1px solid ", ";height:48px;padding:0 10vw;background-color:", ";user-select:none;@media (max-width:425px){margin-bottom:16px;height:40px;}@media (max-width:768px){padding:0;}"], function (props) {
  return props.theme.shadow;
}, function (props) {
  return props.theme.border;
}, function (props) {
  return props.theme.foreground;
});

/***/ })

})
//# sourceMappingURL=dashboard.js.1e8a509d23a399966b80.hot-update.js.map