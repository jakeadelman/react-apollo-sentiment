webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Charts/GoogleReChart.js":
/*!********************************************!*\
  !*** ./components/Charts/GoogleReChart.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _Scatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Scatter */ "./components/Charts/Scatter.js");
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/Button */ "./components/shared/Button.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Charts/GoogleReChart.js",
    _dec,
    _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








 // import "./recharts.css";

var Example = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["observer"])(_class =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Example, _PureComponent);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this, props));
    _this.state = {
      width: 0,
      height: 0,
      data: [],
      numTweets: 0
    };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Example, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // console.log(this.props);
      this.setState({
        currency: this.props.store.currency
      });

      for (var i = 0; i < this.props.data.fetchGoogleTrend.length; i++) {
        var newDat = {};
        newDat["time"] = this.props.data.fetchGoogleTrend[i].formattedTime;
        newDat["value"] = this.props.data.fetchGoogleTrend[i].value[0];
        this.state.data.push(newDat);
      } // console.log(this.state.data);


      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.state.currency !== this.props.store.currency) {
        this.setState({
          currency: this.props.store.currency
        });
        this.state.data = [];

        for (var i = 0; i < this.props.data.fetchGoogleTrend.length; i++) {
          var newDat = {};
          newDat["time"] = this.props.data.fetchGoogleTrend[i].formattedTime;
          newDat["value"] = this.props.data.fetchGoogleTrend[i].value[0];
          this.state.data.push(newDat);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }
  }, {
    key: "updateWindowDimensions",
    value: function updateWindowDimensions() {
      if (window.innerWidth < 768) {
        this.setState({
          width: window.innerWidth,
          height: window.innerHeight,
          chartWidth: window.innerWidth * 0.85
        });
      } else if (window.innerWidth < 1024) {
        this.setState({
          width: window.innerWidth,
          height: window.innerHeight,
          chartWidth: window.innerWidth * 0.85 - 179
        });
      } else if (window.innerWidth >= 1024) {
        this.setState({
          width: window.innerWidth,
          height: window.innerHeight,
          chartWidth: window.innerWidth * 0.8 - 179
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
        theme: Object(_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex",
          width: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabelDiv, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Google Search Traffic - ", this.state.currency), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NumTweetDiv, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "based on ", this.state.numTweets, " tweets in the past 7 hours")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["AreaChart"], {
        width: this.state.chartWidth,
        height: 200,
        data: this.state.data,
        margin: {
          top: 20,
          right: 35,
          left: 5,
          bottom: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
        id: "colorPv",
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "5%",
        stopColor: "#62BFED",
        stopOpacity: 0.7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "95%",
        stopColor: "#62BFED",
        stopOpacity: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
        stroke: "#eee",
        opacity: 0,
        strokeDasharray: "3 3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
        dataKey: "time",
        style: {
          fontSize: "13px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
        style: {
          fontSize: "13px"
        },
        type: "number",
        domain: [0, 1],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Area"], {
        type: "monotone",
        dataKey: "value",
        stroke: "#62BFED",
        fillOpacity: 1,
        fill: "url(#colorPv)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex",
          paddingRight: "40px",
          paddingLeft: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          marginRight: 0,
          marginLeft: "auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "max"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "1 month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "7 days"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "24 hours")))));
    }
  }]);

  return Example;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"])) || _class) || _class);

/* <Legend content={renderLegend} /> */

var renderLegend = function renderLegend(props) {
  var payload = props.payload;
  console.log(payload);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledUl, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, payload.map(function (entry, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: "item-".concat(index),
      style: {
        display: "flex",
        margin: "auto"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sv, {
      color: entry.color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginLeft: "7px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, entry.value));
  }));
};

var StyledUl = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "GoogleReChart__StyledUl",
  componentId: "rifyl9-0"
})(["display:flex;font-size:16px;text-decoration:none;margin-left:60px;list-style:none;text-align:center;color:", ";"], function (props) {
  return props.theme.normalText;
});

var Sv = function Sv(_ref) {
  var color = _ref.color;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "10",
    height: "10",
    style: {
      marginTop: "8px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "10",
    height: "10",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }));
};

var LabelDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "GoogleReChart__LabelDiv",
  componentId: "rifyl9-1"
})(["", " margin:auto;padding-left:25px;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_3__["smallFont"]);
var NumTweetDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(LabelDiv).withConfig({
  displayName: "GoogleReChart__NumTweetDiv",
  componentId: "rifyl9-2"
})(["", " color:", ";font-size:11px;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_3__["wideFont"], function (props) {
  return props.theme.mutedText;
});
var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_shared_Button__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "GoogleReChart__StyledButton",
  componentId: "rifyl9-3"
})(["padding:3px 18px;margin:0 4px;font-size:10px;"]);

/***/ })

})
//# sourceMappingURL=dashboard.js.ad933980442648fdbceb.hot-update.js.map