webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Charts/ReChart.js":
/*!**************************************!*\
  !*** ./components/Charts/ReChart.js ***!
  \**************************************/
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
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Charts/ReChart.js",
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
    _this.setStoreHours = _this.setStoreHours.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Example, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        currency: this.props.store.currency
      });
      this.setState({
        datLength: this.props.data.hourSentiment.num_tweets.length
      }); // for (let i = 0; i < this.props.data.hourSentiment.num_tweets.length; i++) {
      //   let newDat = {};
      //   newDat["hour"] = this.props.data.hourSentiment.time[i];
      //   newDat["sentiment"] = this.props.data.hourSentiment.sentiment[i];
      //   newDat["num"] = this.props.data.hourSentiment.num_tweets[i];
      //   this.state.data.unshift(newDat);
      //   this.state.numTweets += this.props.data.hourSentiment.num_tweets[i];
      // }

      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
    }
  }, {
    key: "setStoreHours",
    value: function setStoreHours(e) {
      // this.setState({ data: [] });
      this.props.store.hoursBack = 24 * e.target.value;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // console.log(this.props.store.currency);
      // console.log(this.state.currency);
      if (this.state.currency !== this.props.store.currency) {
        // console.log(this.props.store.currency);
        this.setState({
          currency: this.props.store.currency
        });
        this.state.data = [];
        this.state.numTweets = 0;

        for (var i = 0; i < this.props.data.hourSentiment.num_tweets.length; i++) {
          var newDat = {};
          newDat["hour"] = this.props.data.hourSentiment.time[i];
          newDat["sentiment"] = this.props.data.hourSentiment.sentiment[i];
          newDat["num"] = this.props.data.hourSentiment.num_tweets[i];
          this.state.data.unshift(newDat);
          this.state.numTweets += this.props.data.hourSentiment.num_tweets[i];
        }
      }

      if (this.state.hoursback !== this.props.store.hoursBack) {
        this.state.data = [];
        this.state.numTweets = 0;
        this.state.hoursBack = this.props.store.hoursBack;
        console.log("setting new data");
        console.log(this.props.data, this.props.store.hoursBack);

        for (var _i = 0; _i < this.props.data.hourSentiment.num_tweets.length; _i++) {
          var _newDat = {};
          _newDat["hour"] = this.props.data.hourSentiment.time[_i];
          _newDat["sentiment"] = this.props.data.hourSentiment.sentiment[_i];
          _newDat["num"] = this.props.data.hourSentiment.num_tweets[_i];
          this.state.data.unshift(_newDat);
          this.state.numTweets += this.props.data.hourSentiment.num_tweets[_i];
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
      this.setState({
        currency: this.props.store.currency
      });
      this.setState({
        datLength: this.props.data.hourSentiment.num_tweets.length
      }); // for (let i = 0; i < this.props.data.hourSentiment.num_tweets.length; i++) {
      //   let newDat = {};
      //   newDat["hour"] = this.props.data.hourSentiment.time[i];
      //   newDat["sentiment"] = this.props.data.hourSentiment.sentiment[i];
      //   newDat["num"] = this.props.data.hourSentiment.num_tweets[i];
      //   this.state.data.unshift(newDat);
      //   this.state.numTweets += this.props.data.hourSentiment.num_tweets[i];
      // }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
        theme: Object(_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
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
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabelDiv, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Twitter Sentiment - ", this.state.currency), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NumTweetDiv, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
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
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
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
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "5%",
        stopColor: "#62BFED",
        stopOpacity: 0.7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "95%",
        stopColor: "#62BFED",
        stopOpacity: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
        stroke: "#eee",
        opacity: 0,
        strokeDasharray: "3 3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
        dataKey: "hour",
        style: {
          fontSize: "13px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
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
          lineNumber: 172
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Area"], {
        type: "monotone",
        dataKey: "sentiment",
        stroke: "#62BFED",
        fillOpacity: 1,
        fill: "url(#colorPv)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
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
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          marginRight: 0,
          marginLeft: "auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
        value: 45,
        onClick: this.setStoreHours,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "max"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
        value: 30,
        onClick: this.setStoreHours,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "1 month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
        value: 7,
        onClick: this.setStoreHours,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "7 days"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
        value: 1,
        onClick: this.setStoreHours,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "24 hours")))));
    }
  }]);

  return Example;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"])) || _class) || _class);


var renderLegend = function renderLegend(props) {
  var payload = props.payload;
  console.log(payload);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledUl, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
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
        lineNumber: 218
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sv, {
      color: entry.color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginLeft: "7px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, entry.value));
  }));
};

var StyledUl = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "ReChart__StyledUl",
  componentId: "sc-1e3lvhz-0"
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
      lineNumber: 238
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "10",
    height: "10",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }));
};

var LabelDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ReChart__LabelDiv",
  componentId: "sc-1e3lvhz-1"
})(["", " margin:auto;padding-left:25px;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_3__["smallFont"]);
var NumTweetDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(LabelDiv).withConfig({
  displayName: "ReChart__NumTweetDiv",
  componentId: "sc-1e3lvhz-2"
})(["", " color:", ";font-size:11px;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_3__["wideFont"], function (props) {
  return props.theme.mutedText;
});
var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_shared_Button__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "ReChart__StyledButton",
  componentId: "sc-1e3lvhz-3"
})(["padding:3px 18px;margin:0 4px;font-size:10px;"]);

/***/ })

})
//# sourceMappingURL=dashboard.js.a77bb4b4b9f3837c173f.hot-update.js.map