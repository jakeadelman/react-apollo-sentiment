webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Charts2/ChartDemo.js":
/*!*****************************************!*\
  !*** ./components/Charts2/ChartDemo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/index.js");
/* harmony import */ var react_stockcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-stockcharts */ "./node_modules/react-stockcharts/es/index.js");
/* harmony import */ var react_stockcharts_lib_series__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-stockcharts/lib/series */ "./node_modules/react-stockcharts/lib/series/index.js");
/* harmony import */ var react_stockcharts_lib_series__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_series__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_stockcharts_lib_axes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-stockcharts/lib/axes */ "./node_modules/react-stockcharts/lib/axes/index.js");
/* harmony import */ var react_stockcharts_lib_axes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_axes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_stockcharts_lib_coordinates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-stockcharts/lib/coordinates */ "./node_modules/react-stockcharts/lib/coordinates/index.js");
/* harmony import */ var react_stockcharts_lib_coordinates__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_coordinates__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers */ "./components/Charts2/helpers.js");
/* harmony import */ var react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-stockcharts/lib/annotation */ "./node_modules/react-stockcharts/lib/annotation/index.js");
/* harmony import */ var react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_stockcharts_lib_scale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-stockcharts/lib/scale */ "./node_modules/react-stockcharts/lib/scale/index.js");
/* harmony import */ var react_stockcharts_lib_scale__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_scale__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_stockcharts_lib_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-stockcharts/lib/tooltip */ "./node_modules/react-stockcharts/lib/tooltip/index.js");
/* harmony import */ var react_stockcharts_lib_tooltip__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_tooltip__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_stockcharts_lib_indicator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-stockcharts/lib/indicator */ "./node_modules/react-stockcharts/lib/indicator/index.js");
/* harmony import */ var react_stockcharts_lib_indicator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_indicator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-stockcharts/lib/helper */ "./node_modules/react-stockcharts/lib/helper/index.js");
/* harmony import */ var react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_stockcharts_lib_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-stockcharts/lib/utils */ "./node_modules/react-stockcharts/lib/utils/index.js");
/* harmony import */ var react_stockcharts_lib_utils__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_stockcharts_lib_utils__WEBPACK_IMPORTED_MODULE_14__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

















var CandleStickChartWithAnnotation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CandleStickChartWithAnnotation, _React$Component);

  function CandleStickChartWithAnnotation(props) {
    _classCallCheck(this, CandleStickChartWithAnnotation);

    return _possibleConstructorReturn(this, _getPrototypeOf(CandleStickChartWithAnnotation).call(this, props));
  }

  _createClass(CandleStickChartWithAnnotation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props);
      var yRangeNums = Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getYRangeNums"])(this.props.data);
      this.setState({
        yRangeNums: yRangeNums
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var margin = {
        left: 20,
        right: 50,
        top: 30,
        bottom: 30
      };
      var height = 400;
      var _this$props = this.props,
          type = _this$props.type,
          initialData = _this$props.data,
          width = _this$props.width,
          ratio = _this$props.ratio;
      var yAxisLabelX = width - margin.left - 40,
          yAxisLabelY = (height - margin.top - margin.bottom) / 2;
      var xScaleProvider = react_stockcharts_lib_scale__WEBPACK_IMPORTED_MODULE_10__["discontinuousTimeScaleProvider"].inputDateAccessor(function (d) {
        return d.date;
      });

      var _xScaleProvider = xScaleProvider(initialData),
          data = _xScaleProvider.data,
          xScale = _xScaleProvider.xScale,
          xAccessor = _xScaleProvider.xAccessor,
          displayXAccessor = _xScaleProvider.displayXAccessor;

      var start = xAccessor(Object(react_stockcharts_lib_utils__WEBPACK_IMPORTED_MODULE_14__["last"])(data));
      var end = xAccessor(data[Math.max(0, data.length - 150)]);
      console.log(start, "CHART START");
      console.log(end, "CHART END");
      var xExtents = [start, end];

      if (this.state == null) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");
      }

      try {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts__WEBPACK_IMPORTED_MODULE_4__["ChartCanvas"], {
          height: height,
          ratio: ratio,
          width: width,
          margin: margin,
          type: type,
          data: data,
          xScale: xScale,
          seriesName: "BTC",
          xAccessor: xAccessor,
          displayXAccessor: displayXAccessor,
          xExtents: xExtents
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts__WEBPACK_IMPORTED_MODULE_4__["Chart"], {
          id: 1,
          yExtents: [function (d) {
            return [d.high, d.low];
          }],
          padding: {
            top: 80,
            bottom: 80
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts_lib_axes__WEBPACK_IMPORTED_MODULE_6__["XAxis"], {
          axisAt: "bottom",
          orient: "bottom"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts_lib_coordinates__WEBPACK_IMPORTED_MODULE_7__["MouseCoordinateX"], {
          at: "bottom",
          orient: "bottom",
          displayFormat: Object(d3_time_format__WEBPACK_IMPORTED_MODULE_3__["timeFormat"])("%Y-%m-%d")
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts_lib_coordinates__WEBPACK_IMPORTED_MODULE_7__["MouseCoordinateY"], {
          at: "right",
          orient: "right",
          displayFormat: Object(d3_format__WEBPACK_IMPORTED_MODULE_2__["format"])(".2f")
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts_lib_axes__WEBPACK_IMPORTED_MODULE_6__["YAxis"], {
          axisAt: "right",
          orient: "right",
          ticks: 5
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts_lib_series__WEBPACK_IMPORTED_MODULE_5__["CandlestickSeries"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts_lib_tooltip__WEBPACK_IMPORTED_MODULE_11__["OHLCTooltip"], {
          origin: [-10, 0]
        }), this.props.trades.map(function (each) {
          console.log("mapping total length" + _this.props.trades.length.toString(), each);
          var datu = new Date(each.timestamp);

          if (each.side == "Buy") {
            var annotationPropsUp = {
              fontFamily: "Glyphicons Halflings",
              fontSize: 20,
              fill: "#018001",
              opacity: 0.8,
              text: "˄",
              y: function y(_ref) {
                var yScale = _ref.yScale;
                return yScale.range()[0] * Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["findYValBuy"])(_this.state.yRangeNums[0], _this.state.yRangeNums[1], each.price);
              },
              onClick: console.log.bind(console),
              tooltip: function tooltip(d) {
                return Object(d3_time_format__WEBPACK_IMPORTED_MODULE_3__["timeFormat"])("%B")(d.date);
              } // onMouseOver: console.log.bind(console),

            };
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9__["Annotate"], {
              with: react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9__["LabelAnnotation"],
              when: function when(d) {
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["timeCompare"])(d, datu, _this.props.timeframe);
              },
              usingProps: annotationPropsUp
            });
          } else if (each.side == "Sell") {
            var annotationPropsDown = {
              fontFamily: "Glyphicons Halflings",
              fontSize: 20,
              fill: "#FF0000",
              opacity: 0.8,
              text: "˅",
              y: function y(_ref2) {
                var yScale = _ref2.yScale;
                return yScale.range()[0] * Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["findYValSell"])(_this.state.yRangeNums[0], _this.state.yRangeNums[1], each.price);
              },
              onClick: console.log.bind(console),
              tooltip: function tooltip(d) {
                return Object(d3_time_format__WEBPACK_IMPORTED_MODULE_3__["timeFormat"])("%B")(d.date);
              } // onMouseOver: console.log.bind(console),

            };
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9__["Annotate"], {
              with: react_stockcharts_lib_annotation__WEBPACK_IMPORTED_MODULE_9__["LabelAnnotation"],
              when: function when(d) {
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["timeCompare"])(d, datu, _this.props.timeframe);
              },
              usingProps: annotationPropsDown
            });
          } else {
            pass;
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stockcharts_lib_coordinates__WEBPACK_IMPORTED_MODULE_7__["CrossHairCursor"], {
          strokeDasharray: "LongDashDot"
        }));
      } catch (err) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "no chart");
      }
    }
  }]);

  return CandleStickChartWithAnnotation;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

CandleStickChartWithAnnotation.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  ratio: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["svg", "hybrid"]).isRequired
};
CandleStickChartWithAnnotation.defaultProps = {
  type: "svg"
};
CandleStickChartWithAnnotation = Object(react_stockcharts_lib_helper__WEBPACK_IMPORTED_MODULE_13__["fitWidth"])(CandleStickChartWithAnnotation);
/* harmony default export */ __webpack_exports__["default"] = (CandleStickChartWithAnnotation);

/***/ })

})
//# sourceMappingURL=dashboard.js.5b88a10b0f238ea188d9.hot-update.js.map