module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header/Header */ "./components/Header/Header.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/App.js";




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, children);
});

/***/ }),

/***/ "./components/Charts/AreaChart.js":
/*!****************************************!*\
  !*** ./components/Charts/AreaChart.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vx_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vx/shape */ "@vx/shape");
/* harmony import */ var _vx_shape__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vx_shape__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vx_mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vx/mock-data */ "@vx/mock-data");
/* harmony import */ var _vx_mock_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vx_mock_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vx_curve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/curve */ "@vx/curve");
/* harmony import */ var _vx_curve__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vx_curve__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vx_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vx/grid */ "@vx/grid");
/* harmony import */ var _vx_grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vx_grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vx_scale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vx/scale */ "@vx/scale");
/* harmony import */ var _vx_scale__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vx_scale__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _vx_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vx/tooltip */ "@vx/tooltip");
/* harmony import */ var _vx_tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vx_tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _vx_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vx/event */ "@vx/event");
/* harmony import */ var _vx_event__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_vx_event__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-array */ "d3-array");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(d3_array__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-time-format */ "d3-time-format");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(d3_time_format__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Charts/AreaChart.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }











var stock = _vx_mock_data__WEBPACK_IMPORTED_MODULE_2__["appleStock"].slice(800); // util

var formatDate = Object(d3_time_format__WEBPACK_IMPORTED_MODULE_9__["timeFormat"])("%b %d, '%y");

var min = function min(arr, fn) {
  return Math.min.apply(Math, _toConsumableArray(arr.map(fn)));
};

var max = function max(arr, fn) {
  return Math.max.apply(Math, _toConsumableArray(arr.map(fn)));
};

var extent = function extent(arr, fn) {
  return [min(arr, fn), max(arr, fn)];
}; // accessors


var xStock = function xStock(d) {
  return new Date(d.date);
};

var yStock = function yStock(d) {
  return d.close;
};

var bisectDate = Object(d3_array__WEBPACK_IMPORTED_MODULE_8__["bisector"])(function (d) {
  return new Date(d.date);
}).left;

var Area =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Area, _React$Component);

  function Area(props) {
    var _this;

    _classCallCheck(this, Area);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Area).call(this, props));
    _this.handleTooltip = _this.handleTooltip.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Area, [{
    key: "handleTooltip",
    value: function handleTooltip(_ref) {
      var event = _ref.event,
          data = _ref.data,
          xStock = _ref.xStock,
          xScale = _ref.xScale,
          yScale = _ref.yScale;
      var showTooltip = this.props.showTooltip;

      var _localPoint = Object(_vx_event__WEBPACK_IMPORTED_MODULE_7__["localPoint"])(event),
          x = _localPoint.x;

      var x0 = xScale.invert(x);
      var index = bisectDate(data, x0, 1);
      var d0 = data[index - 1];
      var d1 = data[index];
      var d = d0;

      if (d1 && d1.date) {
        d = x0 - xStock(d0.date) > xStock(d1.date) - x0 ? d1 : d0;
      }

      showTooltip({
        tooltipData: d,
        tooltipLeft: x,
        tooltipTop: yScale(d.close)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height,
          margin = _this$props.margin,
          hideTooltip = _this$props.hideTooltip,
          tooltipData = _this$props.tooltipData,
          tooltipTop = _this$props.tooltipTop,
          tooltipLeft = _this$props.tooltipLeft,
          events = _this$props.events;
      if (width < 10) return null; // bounds

      var xMax = width - margin.left - margin.right;
      var yMax = height - margin.top - margin.bottom; // const xMax = 200;
      // const yMax = 200;
      // scales

      var xScale = Object(_vx_scale__WEBPACK_IMPORTED_MODULE_5__["scaleTime"])({
        range: [0, xMax],
        domain: extent(stock, xStock)
      });
      var yScale = Object(_vx_scale__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"])({
        range: [yMax, 0],
        domain: [0, max(stock, yStock) + yMax / 3],
        nice: true
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        ref: function ref(s) {
          return _this2.svg = s;
        },
        width: width,
        height: height,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        x: 0,
        y: 0,
        width: width,
        height: height,
        fill: "#32deaa",
        rx: 14,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
        id: "gradient",
        x1: "0%",
        y1: "0%",
        x2: "0%",
        y2: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "0%",
        stopColor: "#FFFFFF",
        stopOpacity: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "100%",
        stopColor: "#FFFFFF",
        stopOpacity: 0.2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_grid__WEBPACK_IMPORTED_MODULE_4__["GridRows"], {
        lineStyle: {
          pointerEvents: "none"
        },
        scale: yScale,
        width: xMax,
        strokeDasharray: "2,2",
        stroke: "rgba(255,255,255,0.3)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_grid__WEBPACK_IMPORTED_MODULE_4__["GridColumns"], {
        lineStyle: {
          pointerEvents: "none"
        },
        scale: xScale,
        height: yMax,
        strokeDasharray: "2,2",
        stroke: "rgba(255,255,255,0.3)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_1__["AreaClosed"], {
        data: stock,
        x: function x(d) {
          return xScale(xStock(d));
        },
        y: function y(d) {
          return yScale(yStock(d));
        },
        yScale: yScale,
        strokeWidth: 1,
        stroke: "url(#gradient)",
        fill: "url(#gradient)",
        curve: _vx_curve__WEBPACK_IMPORTED_MODULE_3__["curveMonotoneX"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        x: 0,
        y: 0,
        width: width,
        height: height,
        fill: "transparent",
        rx: 14,
        data: stock,
        onTouchStart: function onTouchStart(event) {
          return _this2.handleTooltip({
            event: event,
            xStock: xStock,
            xScale: xScale,
            yScale: yScale,
            data: stock
          });
        },
        onTouchMove: function onTouchMove(event) {
          return _this2.handleTooltip({
            event: event,
            xStock: xStock,
            xScale: xScale,
            yScale: yScale,
            data: stock
          });
        },
        onMouseMove: function onMouseMove(event) {
          return _this2.handleTooltip({
            event: event,
            xStock: xStock,
            xScale: xScale,
            yScale: yScale,
            data: stock
          });
        },
        onMouseLeave: function onMouseLeave(event) {
          return hideTooltip();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), tooltipData && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        from: {
          x: tooltipLeft,
          y: 0
        },
        to: {
          x: tooltipLeft,
          y: yMax
        },
        stroke: "rgba(92, 119, 235, 1.000)",
        strokeWidth: 2,
        style: {
          pointerEvents: "none"
        },
        strokeDasharray: "2,2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
        cx: tooltipLeft,
        cy: tooltipTop + 1,
        r: 4,
        fill: "black",
        fillOpacity: 0.1,
        stroke: "black",
        strokeOpacity: 0.1,
        strokeWidth: 2,
        style: {
          pointerEvents: "none"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
        cx: tooltipLeft,
        cy: tooltipTop,
        r: 4,
        fill: "rgba(92, 119, 235, 1.000)",
        stroke: "white",
        strokeWidth: 2,
        style: {
          pointerEvents: "none"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }))), tooltipData && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_tooltip__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
        top: tooltipTop - 12,
        left: tooltipLeft + 12,
        style: {
          backgroundColor: "rgba(92, 119, 235, 1.000)",
          color: "white"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "$".concat(yStock(tooltipData))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_tooltip__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
        top: yMax - 14,
        left: tooltipLeft,
        style: {
          transform: "translateX(-50%)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, formatDate(xStock(tooltipData)))));
    }
  }]);

  return Area;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_vx_tooltip__WEBPACK_IMPORTED_MODULE_6__["withTooltip"])(Area));

/***/ }),

/***/ "./components/Charts/AxisChart.js":
/*!****************************************!*\
  !*** ./components/Charts/AxisChart.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vx_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vx/grid */ "@vx/grid");
/* harmony import */ var _vx_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vx_grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vx/group */ "@vx/group");
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vx_group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vx_curve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/curve */ "@vx/curve");
/* harmony import */ var _vx_curve__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vx_curve__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vx_gradient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vx/gradient */ "@vx/gradient");
/* harmony import */ var _vx_gradient__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vx_gradient__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vx_mock_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vx/mock-data */ "@vx/mock-data");
/* harmony import */ var _vx_mock_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vx_mock_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _vx_axis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vx/axis */ "@vx/axis");
/* harmony import */ var _vx_axis__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vx_axis__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _vx_shape__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vx/shape */ "@vx/shape");
/* harmony import */ var _vx_shape__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_vx_shape__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _vx_scale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vx/scale */ "@vx/scale");
/* harmony import */ var _vx_scale__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_vx_scale__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-array */ "d3-array");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(d3_array__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Charts/AxisChart.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }











var data = Object(_vx_mock_data__WEBPACK_IMPORTED_MODULE_5__["genDateValue"])(20); // accessors

var _x = function x(d) {
  return d.date;
};

var _y = function y(d) {
  return d.value;
}; // responsive utils for axis ticks


function numTicksForHeight(height) {
  if (height <= 300) return 3;
  if (300 < height && height <= 600) return 5;
  return 10;
}

function numTicksForWidth(width) {
  if (width <= 300) return 2;
  if (300 < width && width <= 400) return 5;
  return 10;
}

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      margin = _ref.margin;
  // bounds
  var xMax = width - margin.left - margin.right;
  var yMax = height - margin.top - margin.bottom; // scales

  var xScale = Object(_vx_scale__WEBPACK_IMPORTED_MODULE_8__["scaleTime"])({
    range: [0, xMax],
    domain: Object(d3_array__WEBPACK_IMPORTED_MODULE_9__["extent"])(data, _x)
  });
  var yScale = Object(_vx_scale__WEBPACK_IMPORTED_MODULE_8__["scaleLinear"])({
    range: [yMax, 0],
    domain: [0, Math.max.apply(Math, _toConsumableArray(data.map(_y)))],
    nice: true
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: width,
    height: height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_gradient__WEBPACK_IMPORTED_MODULE_4__["GradientOrangeRed"], {
    id: "linear",
    vertical: false,
    fromOpacity: 0.8,
    toOpacity: 0.3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: 0,
    y: 0,
    width: width,
    height: height,
    fill: "#f4419f",
    rx: 14,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    top: margin.top,
    left: margin.left,
    xScale: xScale,
    yScale: yScale,
    stroke: "rgba(142, 32, 95, 0.9)",
    width: xMax,
    height: yMax,
    numTicksRows: numTicksForHeight(height),
    numTicksColumns: numTicksForWidth(width),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_2__["Group"], {
    top: margin.top,
    left: margin.left,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_7__["Area"], {
    data: data,
    x: function x(d) {
      return xScale(_x(d));
    },
    y0: function y0(d) {
      return yScale.range()[0];
    },
    y1: function y1(d) {
      return yScale(_y(d));
    },
    strokeWidth: 2,
    stroke: "transparent",
    fill: "url(#linear)",
    curve: _vx_curve__WEBPACK_IMPORTED_MODULE_3__["curveBasis"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_7__["LinePath"], {
    data: data,
    x: function x(d) {
      return xScale(_x(d));
    },
    y: function y(d) {
      return yScale(_y(d));
    },
    stroke: "url('#linear')",
    strokeWidth: 2,
    curve: _vx_curve__WEBPACK_IMPORTED_MODULE_3__["curveBasis"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_2__["Group"], {
    left: margin.left,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_axis__WEBPACK_IMPORTED_MODULE_6__["AxisLeft"], {
    top: margin.top,
    left: 0,
    scale: yScale,
    hideZero: true,
    numTicks: numTicksForHeight(height),
    label: "Axis Left Label",
    labelProps: {
      fill: "#8e205f",
      textAnchor: "middle",
      fontSize: 12,
      fontFamily: "Arial"
    },
    stroke: "#1b1a1e",
    tickStroke: "#8e205f",
    tickLabelProps: function tickLabelProps(value, index) {
      return {
        fill: "#8e205f",
        textAnchor: "end",
        fontSize: 10,
        fontFamily: "Arial",
        dx: "-0.25em",
        dy: "0.25em"
      };
    },
    tickComponent: function tickComponent(_ref2) {
      var formattedValue = _ref2.formattedValue,
          tickProps = _objectWithoutProperties(_ref2, ["formattedValue"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", _extends({}, tickProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), formattedValue);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_axis__WEBPACK_IMPORTED_MODULE_6__["AxisRight"], {
    top: margin.top,
    left: xMax,
    scale: yScale,
    hideZero: true,
    numTicks: numTicksForHeight(height),
    label: "Axis Right Label",
    labelProps: {
      fill: "#8e205f",
      textAnchor: "middle",
      fontSize: 12,
      fontFamily: "Arial"
    },
    stroke: "#1b1a1e",
    tickStroke: "#8e205f",
    tickLabelProps: function tickLabelProps(value, index) {
      return {
        fill: "#8e205f",
        textAnchor: "start",
        fontSize: 10,
        fontFamily: "Arial",
        dx: "0.25em",
        dy: "0.25em"
      };
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_axis__WEBPACK_IMPORTED_MODULE_6__["AxisBottom"], {
    top: height - margin.bottom,
    left: 0,
    scale: xScale,
    numTicks: numTicksForWidth(width),
    label: "Time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, function (axis) {
    var tickLabelSize = 10;
    var tickRotate = 45;
    var tickColor = "#8e205f";
    var axisCenter = (axis.axisToPoint.x - axis.axisFromPoint.x) / 2;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      className: "my-custom-bottom-axis",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, axis.ticks.map(function (tick, i) {
      var tickX = tick.to.x;
      var tickY = tick.to.y + tickLabelSize + axis.tickLength;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_2__["Group"], {
        key: "vx-tick-".concat(tick.value, "-").concat(i),
        className: "vx-axis-tick",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_7__["Line"], {
        from: tick.from,
        to: tick.to,
        stroke: tickColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
        transform: "translate(".concat(tickX, ", ").concat(tickY, ") rotate(").concat(tickRotate, ")"),
        fontSize: tickLabelSize,
        textAnchor: "middle",
        fill: tickColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, tick.formattedValue));
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
      textAnchor: "middle",
      transform: "translate(".concat(axisCenter, ", 50)"),
      fontSize: "8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, axis.label));
  })));
});

/***/ }),

/***/ "./components/Charts/BtcChart.js":
/*!***************************************!*\
  !*** ./components/Charts/BtcChart.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vx_shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vx/shape */ "@vx/shape");
/* harmony import */ var _vx_shape__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vx_shape__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vx_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/tooltip */ "@vx/tooltip");
/* harmony import */ var _vx_tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vx_tooltip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vx_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vx/event */ "@vx/event");
/* harmony import */ var _vx_event__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vx_event__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vx_scale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vx/scale */ "@vx/scale");
/* harmony import */ var _vx_scale__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vx_scale__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-array */ "d3-array");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(d3_array__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-time-format */ "d3-time-format");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(d3_time_format__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Charts/BtcChart.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var formatDate = Object(d3_time_format__WEBPACK_IMPORTED_MODULE_7__["timeFormat"])("%b %d, '%y");

var xSelector = function xSelector(d) {
  return new Date(d.date);
};

var ySelector = function ySelector(d) {
  return d.price;
};

var bisectDate = Object(d3_array__WEBPACK_IMPORTED_MODULE_6__["bisector"])(xSelector).left;

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      data: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTooltip", function (_ref) {
      var event = _ref.event,
          data = _ref.data,
          xSelector = _ref.xSelector,
          xScale = _ref.xScale,
          yScale = _ref.yScale;
      var showTooltip = _this.props.showTooltip;

      var _localPoint = Object(_vx_event__WEBPACK_IMPORTED_MODULE_4__["localPoint"])(event),
          x = _localPoint.x;

      var x0 = xScale.invert(x);
      var index = bisectDate(data, x0, 1);
      var d0 = data[index - 1];
      var d1 = data[index];
      var d = d0;

      if (d1 && d1.date) {
        d = x0 - xSelector(d0) > xSelector(d1) - x0 ? d1 : d0;
      }

      showTooltip({
        tooltipData: d,
        tooltipLeft: xScale(xSelector(d)),
        tooltipTop: yScale(ySelector(d))
      });
    });

    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("https://api.coindesk.com/v1/bpi/historical/close.json");

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                data = _context.sent;
                this.setState({
                  data: Object.keys(data.bpi).map(function (date) {
                    return {
                      date: date,
                      price: data.bpi[date]
                    };
                  })
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var width = window.innerWidth;
      var height = window.innerHeight;
      var data = this.state.data;
      var _this$props = this.props,
          showTooltip = _this$props.showTooltip,
          hideTooltip = _this$props.hideTooltip,
          tooltipData = _this$props.tooltipData,
          tooltipTop = _this$props.tooltipTop,
          tooltipLeft = _this$props.tooltipLeft;
      if (!data) return null;
      var padding = 100;
      var xMax = width - padding;
      var yMax = height - padding;
      var xScale = Object(_vx_scale__WEBPACK_IMPORTED_MODULE_5__["scaleTime"])({
        range: [padding, xMax],
        domain: Object(d3_array__WEBPACK_IMPORTED_MODULE_6__["extent"])(data, xSelector)
      });
      var dataMax = Object(d3_array__WEBPACK_IMPORTED_MODULE_6__["max"])(data, ySelector);
      var yScale = Object(_vx_scale__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"])({
        range: [yMax, padding],
        domain: [0, dataMax + dataMax / 3]
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        width: width,
        height: height,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
        x: 0,
        y: 0,
        width: width,
        height: height,
        fill: "#32deaa",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_2__["LinePath"], {
        data: data,
        xScale: xScale,
        yScale: yScale,
        x: xSelector,
        y: ySelector,
        strokeWidth: 5,
        stroke: "#FFF",
        strokeLinecap: "round",
        fill: "transparent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
        x: 0,
        y: 0,
        width: width,
        height: height,
        fill: "transparent",
        data: data,
        onMouseMove: function onMouseMove(data) {
          return function (event) {
            return _this2.handleTooltip({
              event: event,
              data: data,
              xSelector: xSelector,
              xScale: xScale,
              yScale: yScale
            });
          };
        },
        onMouseLeave: function onMouseLeave(data) {
          return function (event) {
            return hideTooltip();
          };
        },
        onTouchEnd: function onTouchEnd(data) {
          return function (event) {
            return hideTooltip();
          };
        },
        onTouchMove: function onTouchMove(data) {
          return function (event) {
            return _this2.handleTooltip({
              event: event,
              data: data,
              xSelector: xSelector,
              xScale: xScale,
              yScale: yScale
            });
          };
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), tooltipData && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_2__["Line"], {
        from: {
          x: tooltipLeft,
          y: 0
        },
        to: {
          x: tooltipLeft,
          y: yMax
        },
        stroke: "#5C77EB",
        strokeWidth: 4,
        style: {
          pointerEvents: "none"
        },
        strokeDasharray: "4,6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
        cx: tooltipLeft,
        cy: tooltipTop,
        r: 4,
        fill: "#5C77EB",
        stroke: "white",
        strokeWidth: 2,
        style: {
          pointerEvents: "none"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }))), tooltipData && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_tooltip__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
        top: tooltipTop - 12,
        left: tooltipLeft + 12,
        style: {
          backgroundColor: "#5C77EB",
          color: "#FFF"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "$".concat(ySelector(tooltipData))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_tooltip__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
        top: yMax - 30,
        left: tooltipLeft,
        style: {
          transform: "translateX(-50%)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, formatDate(xSelector(tooltipData)))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_vx_tooltip__WEBPACK_IMPORTED_MODULE_3__["withTooltip"])(App));

/***/ }),

/***/ "./components/Charts/Currency.js":
/*!***************************************!*\
  !*** ./components/Charts/Currency.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "underscore");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-format */ "d3-format");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_format__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pondjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pondjs */ "pondjs");
/* harmony import */ var pondjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pondjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-timeseries-charts */ "react-timeseries-charts");
/* harmony import */ var react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Charts/Currency.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 *  Copyright (c) 2015, The Regents of the University of California,
 *  through Lawrence Berkeley National Laboratory (subject to receipt
 *  of any required approvals from the U.S. Dept. of Energy).
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree.
 */

/* eslint max-len:0 */


 // Pond

 // Imports from the charts library
// import ChartContainer from "../../../../../components/ChartContainer";
// import ChartRow from "../../../../../components/ChartRow";
// import Charts from "../../../../../components/Charts";
// import YAxis from "../../../../../components/YAxis";
// import LineChart from "../../../../../components/LineChart";
// import Baseline from "../../../../../components/Baseline";
// import Legend from "../../../../../components/Legend";
// import Resizable from "../../../../../components/Resizable";
// import styler from "../../../../../js/styler";

 // import currency_docs from "./currency_docs.md";
// import currency_thumbnail from "./currency_thumbnail.png";
// Data

var aud = __webpack_require__(/*! ./aud.json */ "./components/Charts/aud.json");

var euro = __webpack_require__(/*! ./euro.json */ "./components/Charts/euro.json");

function buildPoints() {
  var audPoints = aud.widget[0].data.reverse();
  var euroPoints = euro.widget[0].data.reverse();
  var points = [];

  for (var i = 0; i < audPoints.length; i++) {
    points.push([audPoints[i][0], audPoints[i][1], euroPoints[i][1]]);
  }

  return points;
}

var currencySeries = new pondjs__WEBPACK_IMPORTED_MODULE_3__["TimeSeries"]({
  name: "Currency",
  columns: ["time", "aud", "euro"],
  points: buildPoints()
});
var style = Object(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4__["styler"])([{
  key: "aud",
  color: "steelblue",
  width: 2
}, {
  key: "euro",
  color: "#F68B24",
  width: 2
}]);

var CrossHairs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CrossHairs, _React$Component);

  function CrossHairs() {
    _classCallCheck(this, CrossHairs);

    return _possibleConstructorReturn(this, _getPrototypeOf(CrossHairs).apply(this, arguments));
  }

  _createClass(CrossHairs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y;
      var style = {
        pointerEvents: "none",
        stroke: "#ccc"
      };

      if (!underscore__WEBPACK_IMPORTED_MODULE_1___default.a.isNull(x) && !underscore__WEBPACK_IMPORTED_MODULE_1___default.a.isNull(y)) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
          style: style,
          x1: 0,
          y1: y,
          x2: this.props.width,
          y2: y,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
          style: style,
          x1: x,
          y1: 0,
          x2: x,
          y2: this.props.height,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        });
      }
    }
  }]);

  return CrossHairs;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Currency =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Currency, _React$Component2);

  function Currency() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Currency);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Currency)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      tracker: null,
      timerange: currencySeries.range(),
      x: null,
      y: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTrackerChanged", function (tracker) {
      if (!tracker) {
        _this.setState({
          tracker: tracker,
          x: null,
          y: null
        });
      } else {
        _this.setState({
          tracker: tracker
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTimeRangeChange", function (timerange) {
      _this.setState({
        timerange: timerange
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouseMove", function (x, y) {
      _this.setState({
        x: x,
        y: y
      });
    });

    return _this;
  }

  _createClass(Currency, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var f = Object(d3_format__WEBPACK_IMPORTED_MODULE_2__["format"])("$,.2f");
      var range = this.state.timerange;
      var euroValue, audValue;

      if (this.state.tracker) {
        var index = currencySeries.bisect(this.state.tracker);
        var trackerEvent = currencySeries.at(index);
        audValue = "".concat(f(trackerEvent.get("aud")));
        euroValue = "".concat(f(trackerEvent.get("euro")));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4__["Resizable"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4__["ChartContainer"], {
        timeRange: range,
        timeAxisStyle: {
          ticks: {
            stroke: "#AAA",
            opacity: 0.25,
            "stroke-dasharray": "1,1" // Note: this isn't in camel case because this is
            // passed into d3's style

          },
          values: {
            fill: "#AAA",
            "font-size": 12
          }
        },
        showGrid: true,
        paddingRight: 100,
        maxTime: currencySeries.range().end(),
        minTime: currencySeries.range().begin(),
        timeAxisAngledLabels: true,
        timeAxisHeight: 65,
        onTrackerChanged: this.handleTrackerChanged,
        onBackgroundClick: function onBackgroundClick() {
          return _this2.setState({
            selection: null
          });
        },
        enablePanZoom: true,
        onTimeRangeChanged: this.handleTimeRangeChange,
        onMouseMove: function onMouseMove(x, y) {
          return _this2.handleMouseMove(x, y);
        },
        minDuration: 1000 * 60 * 60 * 24 * 30,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4__["ChartRow"], {
        height: "400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4__["YAxis"], {
        id: "y",
        label: "Price ($)",
        min: 0.5,
        max: 1.5,
        style: {
          ticks: {
            stroke: "#AAA",
            opacity: 0.25,
            "stroke-dasharray": "1,1" // Note: this isn't in camel case because this is
            // passed into d3's style

          }
        },
        showGrid: true,
        hideAxisLine: true,
        width: "60",
        type: "linear",
        format: "$,.2f",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4__["Charts"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4__["LineChart"], {
        axis: "y",
        breakLine: false,
        series: currencySeries,
        columns: ["aud", "euro"],
        style: style,
        interpolation: "curveBasis",
        highlight: this.state.highlight,
        onHighlightChange: function onHighlightChange(highlight) {
          return _this2.setState({
            highlight: highlight
          });
        },
        selection: this.state.selection,
        onSelectionChange: function onSelectionChange(selection) {
          return _this2.setState({
            selection: selection
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CrossHairs, {
        x: this.state.x,
        y: this.state.y,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4__["Baseline"], {
        axis: "y",
        value: 1.0,
        label: "USD Baseline",
        position: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_timeseries_charts__WEBPACK_IMPORTED_MODULE_4__["Legend"], {
        type: "line",
        align: "right",
        style: style,
        highlight: this.state.highlight,
        onHighlightChange: function onHighlightChange(highlight) {
          return _this2.setState({
            highlight: highlight
          });
        },
        selection: this.state.selection,
        onSelectionChange: function onSelectionChange(selection) {
          return _this2.setState({
            selection: selection
          });
        },
        categories: [{
          key: "aud",
          label: "AUD",
          value: audValue
        }, {
          key: "euro",
          label: "Euro",
          value: euroValue
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      })))));
    }
  }]);

  return Currency;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // Export example
// export default { currency, currency_docs, currency_thumbnail };


/* harmony default export */ __webpack_exports__["default"] = (Currency);

/***/ }),

/***/ "./components/Charts/NewChart.js":
/*!***************************************!*\
  !*** ./components/Charts/NewChart.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vx_axis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vx/axis */ "@vx/axis");
/* harmony import */ var _vx_axis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vx_axis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vx_mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vx/mock-data */ "@vx/mock-data");
/* harmony import */ var _vx_mock_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vx_mock_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vx_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/scale */ "@vx/scale");
/* harmony import */ var _vx_scale__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vx_scale__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-array */ "d3-array");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vx_shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vx/shape */ "@vx/shape");
/* harmony import */ var _vx_shape__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vx_shape__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vx/group */ "@vx/group");
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vx_group__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Charts/NewChart.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var xStock = function xStock(d) {
  return new Date(d.date);
};

var yStock = function yStock(d) {
  return d.close;
};

var bisectDate = Object(d3_array__WEBPACK_IMPORTED_MODULE_4__["bisector"])(function (d) {
  return new Date(d.date);
}).left;

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var stock = _vx_mock_data__WEBPACK_IMPORTED_MODULE_2__["appleStock"];
      var width = 750;
      var height = 300;
      var margin = {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20
      };
      var xMax = width - margin.left - margin.right;
      var yMax = height - margin.top - margin.bottom;

      var x = function x(d) {
        return new Date(d.date);
      };

      var y = function y(d) {
        return d.close;
      }; // console.log(data);


      var xScale = Object(_vx_scale__WEBPACK_IMPORTED_MODULE_3__["scaleTime"])({
        range: [0, xMax],
        domain: Object(d3_array__WEBPACK_IMPORTED_MODULE_4__["extent"])(stock, xStock)
      });
      var yScale = Object(_vx_scale__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"])({
        range: [yMax, 0],
        domain: [0, Object(d3_array__WEBPACK_IMPORTED_MODULE_4__["max"])(stock, yStock) + yMax / 3],
        nice: true
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        width: width,
        height: height,
        style: {
          borderRadius: "2px",
          border: "1px solid #818e99"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        x: 0,
        y: 0,
        width: width,
        height: height,
        fill: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_6__["Group"], {
        top: margin.top,
        left: margin.left,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_5__["LinePath"], {
        data: stock,
        x: function x(d) {
          return xScale(xStock(d));
        },
        y: function y(d) {
          return yScale(yStock(d));
        },
        yScale: yScale,
        strokeWidth: 1,
        stroke: "#818e99",
        fill: "none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // module.exports = { Chart };
// export default NewChart;




/***/ }),

/***/ "./components/Charts/ReChart.js":
/*!**************************************!*\
  !*** ./components/Charts/ReChart.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Charts/ReChart.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var data = [{
  name: "Page A",
  uv: 4000,
  pv: 2400,
  amt: 2400
}, {
  name: "Page B",
  uv: 3000,
  pv: 1398,
  amt: 2210
}, {
  name: "Page C",
  uv: 2000,
  pv: 9800,
  amt: 2290
}, {
  name: "Page D",
  uv: 2780,
  pv: 3908,
  amt: 2000
}, {
  name: "Page E",
  uv: 1890,
  pv: 4800,
  amt: 2181
}, {
  name: "Page F",
  uv: 2390,
  pv: 3800,
  amt: 2500
}, {
  name: "Page G",
  uv: 3490,
  pv: 4300,
  amt: 2100
}];

var Example =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Example, _PureComponent);

  function Example() {
    _classCallCheck(this, Example);

    return _possibleConstructorReturn(this, _getPrototypeOf(Example).apply(this, arguments));
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["LineChart"], {
        width: 500,
        height: 300,
        data: data,
        margin: {
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
        strokeDasharray: "3 3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
        dataKey: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Legend"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        type: "monotone",
        dataKey: "pv",
        stroke: "#8884d8",
        activeDot: {
          r: 8
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        type: "monotone",
        dataKey: "uv",
        stroke: "#82ca9d",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }));
    }
  }]);

  return Example;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(Example, "jsfiddleUrl", "https://jsfiddle.net/alidingling/xqjtetw0/");



/***/ }),

/***/ "./components/Charts/aud.json":
/*!************************************!*\
  !*** ./components/Charts/aud.json ***!
  \************************************/
/*! exports provided: ui, widget, default */
/***/ (function(module) {

module.exports = {"ui":{"min_period":0,"period":"weekly","max_period":4},"widget":[{"period":"weekly","type":"bid","data":[[1416787200000,1.16638571428571],[1416182400000,1.15077142857143],[1415577600000,1.15062857142857],[1414972800000,1.15255714285714],[1414368000000,1.13415714285714],[1413763200000,1.13885714285714],[1413158400000,1.14381428571429],[1412553600000,1.1432],[1411948800000,1.14467142857143],[1411344000000,1.13002857142857],[1410739200000,1.11098571428571],[1410134400000,1.08744285714286],[1409529600000,1.0705],[1408924800000,1.07195714285714],[1408320000000,1.07384285714286],[1407715200000,1.07587142857143],[1407110400000,1.07501428571429],[1406505600000,1.06901428571429],[1405900800000,1.06304285714286],[1405296000000,1.066],[1404691200000,1.06535714285714],[1404086400000,1.06268571428571],[1403481600000,1.06282857142857],[1402876800000,1.0653],[1402272000000,1.06624285714286],[1401667200000,1.07568571428571],[1401062400000,1.07907142857143],[1400457600000,1.07781428571429],[1399852800000,1.06755714285714],[1399248000000,1.07187142857143],[1398643200000,1.07821428571429],[1398038400000,1.07427142857143],[1397433600000,1.0675],[1396828800000,1.06934285714286],[1396224000000,1.08055714285714],[1395619200000,1.08874285714286],[1395014400000,1.10245714285714],[1394409600000,1.10738571428571],[1393804800000,1.11157142857143],[1393200000000,1.11427142857143],[1392595200000,1.10945714285714],[1391990400000,1.11148571428571],[1391385600000,1.12594285714286],[1390780800000,1.1431],[1390176000000,1.13918571428571],[1389571200000,1.12227142857143],[1388966400000,1.11877142857143],[1388361600000,1.12157142857143],[1387756800000,1.12224285714286],[1387152000000,1.12155714285714],[1386547200000,1.10501428571429],[1385942400000,1.10035714285714],[1385337600000,1.09494285714286],[1384732800000,1.07335714285714],[1384128000000,1.06975714285714],[1383523200000,1.05657142857143],[1382918400000,1.05145714285714],[1382313600000,1.03711428571429],[1381708800000,1.04624285714286],[1381104000000,1.05857142857143],[1380499200000,1.06628571428571],[1379894400000,1.06671428571429],[1379289600000,1.06694285714286],[1378684800000,1.08097142857143],[1378080000000,1.10175714285714],[1377475200000,1.11534285714286],[1376870400000,1.102],[1376265600000,1.09155714285714],[1375660800000,1.1082],[1375056000000,1.1042],[1374451200000,1.08355714285714],[1373846400000,1.092],[1373241600000,1.09595714285714],[1372636800000,1.09472857142857],[1372032000000,1.08274285714286],[1371427200000,1.06377142857143],[1370822400000,1.05198571428571],[1370217600000,1.04407142857143],[1369612800000,1.0386],[1369008000000,1.02781428571429],[1368403200000,1.01177142857143],[1367798400000,0.982585714285714],[1367193600000,0.970128571428571],[1366588800000,0.972828571428571],[1365984000000,0.964914285714286],[1365379200000,0.9544],[1364774400000,0.958957142857143],[1364169600000,0.9576],[1363564800000,0.961085714285714],[1362960000000,0.969028571428571],[1362355200000,0.9775],[1361750400000,0.9755],[1361145600000,0.970285714285714],[1360540800000,0.969214285714286],[1359936000000,0.965171428571429],[1359331200000,0.959457142857143],[1358726400000,0.952442857142857],[1358121600000,0.948871428571429],[1357516800000,0.950571428571429],[1356912000000,0.958371428571429],[1356307200000,0.9634],[1355702400000,0.952528571428571],[1355097600000,0.950257142857143],[1354492800000,0.956057142857143],[1353888000000,0.956942857142857],[1353283200000,0.962314285714286],[1352678400000,0.963228571428571],[1352073600000,0.962157142857143],[1351468800000,0.9646],[1350864000000,0.967542857142857],[1350259200000,0.9703],[1349654400000,0.978171428571429],[1349049600000,0.973071428571429],[1348444800000,0.960385714285714],[1347840000000,0.954628571428571],[1347235200000,0.956571428571429],[1346630400000,0.972371428571429],[1346025600000,0.9655],[1345420800000,0.957314285714286],[1344816000000,0.952428571428571],[1344211200000,0.946285714285714],[1343606400000,0.951857142857143],[1343001600000,0.965885714285714],[1342396800000,0.9689],[1341792000000,0.980314285714286],[1341187200000,0.975257142857143],[1340582400000,0.9907],[1339977600000,0.988771428571429],[1339372800000,1.00214285714286],[1338768000000,1.01861428571429],[1338163200000,1.02421428571429],[1337558400000,1.01987142857143],[1336953600000,1.00617142857143],[1336348800000,0.989228571428571],[1335744000000,0.967928571428571],[1335139200000,0.964214285714286],[1334534400000,0.964742857142857],[1333929600000,0.967528571428572],[1333324800000,0.967371428571428],[1332720000000,0.959114285714286],[1332115200000,0.952485714285714],[1331510400000,0.948971428571429],[1330905600000,0.940614285714286],[1330300800000,0.9303],[1329696000000,0.933928571428572],[1329091200000,0.933314285714286],[1328486400000,0.930114285714286],[1327881600000,0.936542857142857],[1327276800000,0.947],[1326672000000,0.962514285714286],[1326067200000,0.972185714285714],[1325462400000,0.973828571428571],[1324857600000,0.984414285714286],[1324252800000,0.993671428571429],[1323648000000,0.9958],[1323043200000,0.977614285714286],[1322438400000,0.995171428571428],[1321833600000,1.01908571428571],[1321228800000,0.986828571428571],[1320624000000,0.972771428571429],[1320019200000,0.957242857142857],[1319414400000,0.951328571428572],[1318809600000,0.972585714285714],[1318204800000,0.9942],[1317600000000,1.03562857142857],[1316995200000,1.02152857142857],[1316390400000,0.9925],[1315785600000,0.966914285714286],[1315180800000,0.9462],[1314576000000,0.938371428571429],[1313971200000,0.9547],[1313366400000,0.958471428571428],[1312761600000,0.969471428571429],[1312156800000,0.930971428571429],[1311552000000,0.913385714285714],[1310947200000,0.931757142857143],[1310342400000,0.935642857142857],[1309737600000,0.931085714285714],[1309132800000,0.943071428571429],[1308528000000,0.946871428571429],[1307923200000,0.943928571428571],[1307318400000,0.938685714285714],[1306713600000,0.9352],[1306108800000,0.942771428571429],[1305504000000,0.9417],[1304899200000,0.934242857142857],[1304294400000,0.924371428571429],[1303689600000,0.922957142857143],[1303084800000,0.940414285714286],[1302480000000,0.9498],[1301875200000,0.9585],[1301270400000,0.969928571428571],[1300665600000,0.988285714285714],[1300060800000,1.00318571428571],[1299456000000,0.989842857142857],[1298851200000,0.984785714285714],[1298246400000,0.990328571428571],[1297641600000,0.9945],[1297036800000,0.990957142857143],[1296432000000,0.993614285714286],[1295827200000,1.00655714285714],[1295222400000,1.0071],[1294617600000,1.00784285714286],[1294012800000,0.994],[1293408000000,0.9876],[1292803200000,1.00217142857143],[1292198400000,1.01008571428571],[1291593600000,1.01307142857143],[1290988800000,1.03017142857143],[1290384000000,1.02151428571429],[1289779200000,1.01587142857143],[1289174400000,0.996842857142857],[1288569600000,0.999214285714286],[1287964800000,1.01811428571429],[1287360000000,1.01632857142857],[1286755200000,1.01141428571429],[1286150400000,1.02455714285714],[1285545600000,1.03472857142857],[1284940800000,1.05202857142857],[1284336000000,1.06885714285714],[1283731200000,1.08701428571429],[1283126400000,1.10588571428571],[1282521600000,1.1229],[1281916800000,1.11598571428571],[1281312000000,1.10472857142857],[1280707200000,1.09494285714286],[1280102400000,1.11142857142857],[1279497600000,1.13347142857143],[1278892800000,1.14084285714286],[1278288000000,1.16442857142857],[1277683200000,1.1709],[1277078400000,1.14484285714286],[1276473600000,1.15948571428571],[1275868800000,1.20101428571429],[1275264000000,1.19275714285714],[1274659200000,1.19771428571429],[1274054400000,1.17274285714286],[1273449600000,1.11818571428571],[1272844800000,1.10265714285714],[1272240000000,1.07997142857143],[1271635200000,1.0799],[1271030400000,1.07492857142857],[1270425600000,1.07977142857143],[1269820800000,1.09145714285714],[1269216000000,1.09741428571429],[1268611200000,1.08957142857143],[1268006400000,1.09504285714286],[1267401600000,1.10872857142857],[1266796800000,1.1177],[1266192000000,1.11705714285714],[1265587200000,1.13924285714286],[1264982400000,1.13805714285714],[1264377600000,1.11465714285714],[1263772800000,1.09368571428571],[1263168000000,1.0796],[1262563200000,1.09504285714286],[1261958400000,1.11975714285714],[1261353600000,1.13178571428571],[1260748800000,1.11021428571429],[1260144000000,1.09558571428571]],"display":"absolute","quoteCurrency":"AUD","baseCurrency":"USD"},{},{},{},{}]};

/***/ }),

/***/ "./components/Charts/euro.json":
/*!*************************************!*\
  !*** ./components/Charts/euro.json ***!
  \*************************************/
/*! exports provided: ui, widget, default */
/***/ (function(module) {

module.exports = {"ui":{"min_period":0,"period":"weekly","max_period":4},"widget":[{"period":"weekly","type":"bid","data":[[1416787200000,0.8034],[1416182400000,0.800128571428571],[1415577600000,0.802128571428572],[1414972800000,0.801071428571429],[1414368000000,0.790814285714286],[1413763200000,0.786685714285714],[1413158400000,0.786085714285714],[1412553600000,0.791914285714286],[1411948800000,0.791828571428571],[1411344000000,0.781842857142857],[1410739200000,0.774342857142857],[1410134400000,0.773142857142857],[1409529600000,0.764971428571428],[1408924800000,0.758242857142857],[1408320000000,0.751028571428571],[1407715200000,0.747114285714286],[1407110400000,0.7463],[1406505600000,0.745271428571429],[1405900800000,0.741785714285714],[1405296000000,0.737228571428571],[1404691200000,0.734828571428571],[1404086400000,0.732957142857143],[1403481600000,0.734371428571428],[1402876800000,0.736614285714286],[1402272000000,0.736757142857143],[1401667200000,0.7339],[1401062400000,0.7338],[1400457600000,0.731114285714286],[1399852800000,0.728585714285714],[1399248000000,0.721242857142857],[1398643200000,0.721857142857143],[1398038400000,0.723557142857143],[1397433600000,0.722928571428571],[1396828800000,0.724328571428572],[1396224000000,0.7272],[1395619200000,0.725528571428572],[1395014400000,0.721314285714286],[1394409600000,0.720057142857143],[1393804800000,0.724828571428571],[1393200000000,0.727714285714286],[1392595200000,0.728614285714286],[1391990400000,0.732457142857143],[1391385600000,0.738371428571429],[1390780800000,0.734371428571428],[1390176000000,0.735542857142857],[1389571200000,0.733871428571429],[1388966400000,0.734442857142857],[1388361600000,0.7288],[1387756800000,0.729714285714286],[1387152000000,0.728914285714286],[1386547200000,0.727542857142857],[1385942400000,0.734485714285714],[1385337600000,0.736814285714286],[1384732800000,0.740428571428571],[1384128000000,0.744442857142857],[1383523200000,0.742828571428571],[1382918400000,0.730585714285714],[1382313600000,0.7273],[1381708800000,0.735742857142857],[1381104000000,0.737914285714286],[1380499200000,0.737728571428572],[1379894400000,0.740185714285714],[1379289600000,0.744942857142857],[1378684800000,0.7542],[1378080000000,0.758542857142857],[1377475200000,0.7508],[1376870400000,0.748357142857143],[1376265600000,0.751385714285714],[1375660800000,0.750957142857143],[1375056000000,0.7538],[1374451200000,0.7567],[1373846400000,0.763],[1373241600000,0.773128571428571],[1372636800000,0.771428571428571],[1372032000000,0.765257142857143],[1371427200000,0.752671428571429],[1370822400000,0.752242857142857],[1370217600000,0.7627],[1369612800000,0.772014285714286],[1369008000000,0.775657142857143],[1368403200000,0.774085714285714],[1367798400000,0.764471428571428],[1367193600000,0.762914285714286],[1366588800000,0.767314285714286],[1365984000000,0.764157142857143],[1365379200000,0.765571428571429],[1364774400000,0.776871428571429],[1364169600000,0.777128571428572],[1363564800000,0.771771428571429],[1362960000000,0.768142857142857],[1362355200000,0.767485714285714],[1361750400000,0.763028571428571],[1361145600000,0.752128571428571],[1360540800000,0.746757142857143],[1359936000000,0.740214285714286],[1359331200000,0.738842857142857],[1358726400000,0.748757142857143],[1358121600000,0.749771428571429],[1357516800000,0.760428571428571],[1356912000000,0.7601],[1356307200000,0.757085714285714],[1355702400000,0.757671428571429],[1355097600000,0.767771428571429],[1354492800000,0.768414285714286],[1353888000000,0.771057142857143],[1353283200000,0.778957142857143],[1352678400000,0.785557142857143],[1352073600000,0.782542857142857],[1351468800000,0.773914285714286],[1350864000000,0.769971428571429],[1350259200000,0.767642857142857],[1349654400000,0.772328571428571],[1349049600000,0.772914285714286],[1348444800000,0.774571428571429],[1347840000000,0.766442857142857],[1347235200000,0.7744],[1346630400000,0.791485714285714],[1346025600000,0.797614285714286],[1345420800000,0.803171428571429],[1344816000000,0.811642857142857],[1344211200000,0.809471428571429],[1343606400000,0.813528571428571],[1343001600000,0.8206],[1342396800000,0.8167],[1341792000000,0.815814285714286],[1341187200000,0.799471428571428],[1340582400000,0.7975],[1339977600000,0.791971428571429],[1339372800000,0.795385714285714],[1338768000000,0.800542857142857],[1338163200000,0.802214285714286],[1337558400000,0.790128571428571],[1336953600000,0.781871428571429],[1336348800000,0.770071428571429],[1335744000000,0.758442857142857],[1335139200000,0.757071428571429],[1334534400000,0.761742857142857],[1333929600000,0.762842857142857],[1333324800000,0.757071428571429],[1332720000000,0.750914285714286],[1332115200000,0.756428571428572],[1331510400000,0.762771428571429],[1330905600000,0.758785714285714],[1330300800000,0.7483],[1329696000000,0.752628571428571],[1329091200000,0.7604],[1328486400000,0.757771428571429],[1327881600000,0.760028571428571],[1327276800000,0.766],[1326672000000,0.781028571428571],[1326067200000,0.784971428571429],[1325462400000,0.775442857142857],[1324857600000,0.768757142857143],[1324252800000,0.766142857142857],[1323648000000,0.761457142857143],[1323043200000,0.746671428571429],[1322438400000,0.7479],[1321833600000,0.745871428571429],[1321228800000,0.736428571428571],[1320624000000,0.728914285714286],[1320019200000,0.7217],[1319414400000,0.714571428571429],[1318809600000,0.724028571428571],[1318204800000,0.731371428571429],[1317600000000,0.749357142857143],[1316995200000,0.7397],[1316390400000,0.734314285714286],[1315785600000,0.728928571428571],[1315180800000,0.714685714285714],[1314576000000,0.695357142857143],[1313971200000,0.693357142857143],[1313366400000,0.696114285714286],[1312761600000,0.701242857142857],[1312156800000,0.700428571428572],[1311552000000,0.694942857142857],[1310947200000,0.702842857142857],[1310342400000,0.707514285714286],[1309737600000,0.6943],[1309132800000,0.695785714285714],[1308528000000,0.699985714285714],[1307923200000,0.698757142857143],[1307318400000,0.686814285714286],[1306713600000,0.693314285714286],[1306108800000,0.706685714285714],[1305504000000,0.704357142857143],[1304899200000,0.700428571428571],[1304294400000,0.680485714285714],[1303689600000,0.680328571428571],[1303084800000,0.691885714285714],[1302480000000,0.691628571428571],[1301875200000,0.699114285714286],[1301270400000,0.707614285714286],[1300665600000,0.706271428571429],[1300060800000,0.714157142857143],[1299456000000,0.718671428571429],[1298851200000,0.721628571428571],[1298246400000,0.728757142857143],[1297641600000,0.737014285714286],[1297036800000,0.735128571428572],[1296432000000,0.730914285714286],[1295827200000,0.732414285714286],[1295222400000,0.743742857142857],[1294617600000,0.7632],[1294012800000,0.758542857142857],[1293408000000,0.7561],[1292803200000,0.7612],[1292198400000,0.753528571428571],[1291593600000,0.752328571428571],[1290988800000,0.757557142857143],[1290384000000,0.743642857142857],[1289779200000,0.733957142857143],[1289174400000,0.723614285714286],[1288569600000,0.7124],[1287964800000,0.718671428571429],[1287360000000,0.718014285714286],[1286755200000,0.715842857142857],[1286150400000,0.721857142857143],[1285545600000,0.735142857142857],[1284940800000,0.753571428571428],[1284336000000,0.772385714285714],[1283731200000,0.783342857142857],[1283126400000,0.782114285714286],[1282521600000,0.787257142857143],[1281916800000,0.781257142857143],[1281312000000,0.768614285714286],[1280707200000,0.758628571428571],[1280102400000,0.769028571428571],[1279497600000,0.775271428571429],[1278892800000,0.784],[1278288000000,0.792928571428571],[1277683200000,0.808014285714286],[1277078400000,0.810457142857143],[1276473600000,0.813757142857143],[1275868800000,0.831885714285714],[1275264000000,0.8204],[1274659200000,0.809771428571429],[1274054400000,0.8061],[1273449600000,0.791257142857143],[1272844800000,0.771728571428572],[1272240000000,0.752314285714286],[1271635200000,0.745671428571429],[1271030400000,0.7373],[1270425600000,0.744585714285714],[1269820800000,0.741471428571429],[1269216000000,0.744342857142857],[1268611200000,0.731342857142857],[1268006400000,0.731685714285714],[1267401600000,0.734685714285714],[1266796800000,0.736128571428572],[1266192000000,0.7341],[1265587200000,0.730442857142857],[1264982400000,0.722657142857143],[1264377600000,0.712328571428571],[1263772800000,0.702485714285714],[1263168000000,0.6914],[1262563200000,0.696014285714286],[1261958400000,0.695971428571428],[1261353600000,0.697342857142857],[1260748800000,0.689671428571429],[1260144000000,0.677771428571429]],"display":"absolute","quoteCurrency":"EUR","baseCurrency":"USD"},{},{},{},{}]};

/***/ }),

/***/ "./components/Dashboard/AddTerm.js":
/*!*****************************************!*\
  !*** ./components/Dashboard/AddTerm.js ***!
  \*****************************************/
/*! exports provided: default, addSt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSt", function() { return addSt; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Dashboard/AddTerm.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation AddSearchTerm($searchterm: String!) {\n    addSearchTerm(searchterm: $searchterm)\n  }\n"]);

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



 // import Popover from "./Popover";



function AddTerm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      popover = _useState4[0],
      setPopover = _useState4[1];

  function toggle() {
    if (!popover) {
      setPopover(true);
    } else {
      setPopover(false);
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "Popover1",
    onClick: function onClick() {
      setClicked(true);
      toggle();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "add term"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
    placement: "bottom",
    isOpen: popover,
    target: "Popover1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["PopoverHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Add Term"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["PopoverBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PopBody, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))));
}

var PopBody = function PopBody() {
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      newTerm = _useState6[0],
      setNewTerm = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      clicked = _useState8[0],
      setClicked = _useState8[1];

  console.log(newTerm);

  function handleClick() {
    console.log("was clicked");
    setClicked(true); // return <AddTodo term={newTerm} />;
  }

  if (!!clicked) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
      mutation: addSt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, function (addSearchTerm, _ref) {
      var data = _ref.data;
      setClicked(false);
      addSearchTerm({
        variables: {
          searchterm: newTerm
        }
      });
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddTodo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }));
};

var addSt = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var AddTodo = function AddTodo() {
  var input;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: addSt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, function (addSearchTerm, _ref2) {
    var data = _ref2.data;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: function onSubmit(e) {
        e.preventDefault();
        addSearchTerm({
          variables: {
            searchterm: input.value
          }
        });
        input.value = "";
        location.reload(true);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      ref: function ref(node) {
        input = node;
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-button",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "Add")));
  });
};

/***/ }),

/***/ "./components/Dashboard/DashInitialTerms.js":
/*!**************************************************!*\
  !*** ./components/Dashboard/DashInitialTerms.js ***!
  \**************************************************/
/*! exports provided: fetchTweetsQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTweetsQuery", function() { return fetchTweetsQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DashMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DashMain */ "./components/Dashboard/DashMain.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../App */ "./components/App.js");
/* harmony import */ var _Header2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Header2 */ "./components/Header2.js");
/* harmony import */ var _AddTerm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddTerm */ "./components/Dashboard/AddTerm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
/* harmony import */ var _Charts_AreaChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Charts/AreaChart */ "./components/Charts/AreaChart.js");
/* harmony import */ var _Charts_AxisChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Charts/AxisChart */ "./components/Charts/AxisChart.js");
/* harmony import */ var _Charts_NewChart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Charts/NewChart */ "./components/Charts/NewChart.js");
/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Window */ "./components/Dashboard/Window.js");
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-window-size */ "react-window-size");
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_window_size__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Charts_BtcChart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Charts/BtcChart */ "./components/Charts/BtcChart.js");
/* harmony import */ var _Charts_Currency__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Charts/Currency */ "./components/Charts/Currency.js");
/* harmony import */ var _Charts_ReChart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Charts/ReChart */ "./components/Charts/ReChart.js");
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


















 // import SentimentModule from "./SentimentModule";

var DashInitialTerms =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DashInitialTerms, _React$Component);

  function DashInitialTerms(props) {
    var _this;

    _classCallCheck(this, DashInitialTerms);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DashInitialTerms).call(this, props));
    _this.state = {
      allTerms: []
    };
    _this.toggleTerm = _this.toggleTerm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.mapTerms = _this.mapTerms.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DashInitialTerms, [{
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
      var _this3 = this;

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
          lineNumber: 57
        },
        __self: this
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, "no data loaded");
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, "Loading");

        if (!_this3.state.allTerms[0]) {
          _this3.toggleTerm(data.fetchTerms[0].term);

          _this3.mapTerms(data.fetchTerms);

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          }, "loading");
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dash-main-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "pagination-list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, _this3.state.allTerms.map(function (term) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            className: "pagination-list-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            value: term,
            onClick: _this3.handleClick,
            className: "pagination-button",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          }, term));
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "pagination-list-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "pagination-button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddTerm__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Window__WEBPACK_IMPORTED_MODULE_13__["default"], {
          margin: marg,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_NewChart__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_Currency__WEBPACK_IMPORTED_MODULE_16__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_17__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }));
      });
    }
  }]);

  return DashInitialTerms;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // .outer-sent {
//   display: inline-block;
//   float: left;
// }


var fetchTweetsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (DashInitialTerms); // export default () => (
//   <App>
//     <Header />
//     <DashInitialTerms />
//   </App>
// );

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Dashboard/DashMain.js";

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

var dateformat = __webpack_require__(/*! dateformat */ "dateformat");

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
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, "loading");
      } else {
        var fetchTweetsVars = {
          query: this.state.term
        };
        console.log(fetchTweetsVars);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
          query: fetchTweetsQuery,
          variables: fetchTweetsVars,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, function (_ref) {
          var loading = _ref.loading,
              error = _ref.error,
              data = _ref.data;
          if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          }, "no data loaded.. there may have been an error please refresh the page");
          if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, "Loading");
          console.log(data.getDailyTweet);
          var pos = data.getDailyTweet.positive / data.getDailyTweet.total * 100;
          var neg = data.getDailyTweet.negative / data.getDailyTweet.total * 100;
          var trans = 140 - pos;
          console.log(pos, neg);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "dash-main-table",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thread", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
            className: "top-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
            className: "tr-heading",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, "query: ", _this2.props.initialTerm), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
            className: "bar-heading tr-heading",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
            class: "chart",
            width: "450",
            height: "40",
            "aria-labelledby": "title desc",
            role: "img",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
            class: "bar",
            transform: "translate(140,4)",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
            width: neg,
            height: "19",
            className: "rect1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
            x: neg + 5,
            y: "9.5",
            dy: ".35em",
            className: "texto",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          }, parseInt(neg), "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
            x: "130",
            y: "9.5",
            dy: ".35em",
            className: "texto",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }, "24 hour sentiment")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
            class: "bar2",
            transform: "translate(".concat(trans, ",4)"),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
            width: pos,
            height: "19",
            className: "rect2",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
            x: "-35",
            y: "9.5",
            dy: ".35em",
            className: "texto",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }, parseInt(pos), "%")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            },
            __self: this
          }, data.fetchTweets.map(function (tweet) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
              className: "data",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
              scope: "row",
              className: "hdata-".concat(tweet.polarity),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              },
              __self: this
            }, dateformat(tweet.timestamp, "shortTime")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
              className: "tdata-".concat(tweet.polarity),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              },
              __self: this
            }, tweet.text));
          }))))));
        });
      }
    }
  }]);

  return DashMain;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


var fetchTweetsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

/***/ }),

/***/ "./components/Dashboard/Window.js":
/*!****************************************!*\
  !*** ./components/Dashboard/Window.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-window-size */ "react-window-size");
/* harmony import */ var react_window_size__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_window_size__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Charts_AreaChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Charts/AreaChart */ "./components/Charts/AreaChart.js");
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Dashboard/Window.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ScreenSize =
/*#__PURE__*/
function (_Component) {
  _inherits(ScreenSize, _Component);

  function ScreenSize() {
    _classCallCheck(this, ScreenSize);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScreenSize).apply(this, arguments));
  }

  _createClass(ScreenSize, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, "Screen width is: ", this.props.windowWidth, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }), "Screen height is: ", this.props.windowHeight, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_AreaChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
        margin: this.props.margin,
        width: this.props.windowWidth * 0.8,
        height: 300,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }));
    }
  }]);

  return ScreenSize;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (react_window_size__WEBPACK_IMPORTED_MODULE_1___default()(ScreenSize));

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Header/Header.js";


 // import Head from "Header/Head";




var Header = function Header(_ref) {
  var pathname = _ref.router.pathname;
  return (// <header className="the-header">
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: _theme__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      className: pathname === "/" ? "is-active" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      className: pathname === "/about" ? "is-active" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      className: pathname === "/login" ? "is-active" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/register",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      className: pathname === "/register" ? "is-active" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Register"))))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Header));
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Header__StyledLink",
  componentId: "sc-19c2vr5-0"
})(["margin:10px;color:", ";position:relative;cursor:pointer;::after{content:\"\";position:absolute;left:0;right:0;bottom:0;opacity:0;border-bottom:1px solid ", ";}:hover{opacity:1;color:", ";}&.active::after{left:0;right:0;bottom:0;border-bottom:3px solid ", ";}"], function (props) {
  return props.theme.mutedText;
}, function (props) {
  return props.theme.accent;
}, function (props) {
  return props.theme.accent;
}, function (props) {
  return props.theme.accent;
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.header.withConfig({
  displayName: "Header__Wrapper",
  componentId: "sc-19c2vr5-1"
})(["position:sticky;z-index:10;top:0;display:flex;align-items:stretch;margin-bottom:24px;box-shadow:0 4px 12px ", ";border-bottom:1px solid ", ";height:48px;padding:0 10vw;background-color:", ";user-select:none;@media (max-width:425px){margin-bottom:16px;height:40px;}@media (max-width:768px){padding:0;}"], function (props) {
  return props.theme.shadow;
}, function (props) {
  return props.theme.border;
}, function (props) {
  return props.theme.foreground;
});

/***/ }),

/***/ "./components/Header2.js":
/*!*******************************!*\
  !*** ./components/Header2.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Header2.js";




var Header = function Header(_ref) {
  var pathname = _ref.router.pathname;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    prefetch: true,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: pathname === "/" ? "is-active" : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    prefetch: true,
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: pathname === "/about" ? "is-active" : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    prefetch: true,
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: pathname === "/login" ? "is-active" : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Login")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Header));

/***/ }),

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/LoginForm.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        mutation login($email: String!, $password: String!) {\n          login(email: $email, password: $password)\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





 // import styled, { ThemeProvider } from "styled-components";
// import theme from "./theme";

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
    _this.state = {
      wrongCredentials: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(_default, [{
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event, client) {
        var form, formData, email, password, res, r, isTrue;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                form = event.target;
                formData = new window.FormData(form);
                email = formData.get("email");
                password = formData.get("password");
                form.reset();
                res = client.mutate({
                  mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject()),
                  variables: {
                    email: email,
                    password: password
                  }
                });
                _context.next = 9;
                return res;

              case 9:
                r = _context.sent;
                console.log(r);
                r = r.data.login;
                console.log(r);
                isTrue = r == "true";
                console.log(_typeof(r));

                if (!(isTrue == true)) {
                  _context.next = 20;
                  break;
                }

                console.log(r);
                next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/dashboard");
                _context.next = 22;
                break;

              case 20:
                this.setState({
                  wrongCredentials: true
                });
                return _context.abrupt("return");

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x, _x2) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["ApolloConsumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, function (client) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
          onSubmit: function onSubmit(event) {
            return _this2.handleSubmit(event, client);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, "Login"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          placeholder: "email",
          name: "email",
          type: "text",
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          placeholder: "password",
          name: "password",
          type: "text",
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, "Submit"), _this2.state.wrongCredentials == true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "login-alert",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
          color: "secondary",
          isOpen: _this2.state.wrongCredentials == true ? true : false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, "Wrong login credentials")) : null);
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./components/theme.js":
/*!*****************************!*\
  !*** ./components/theme.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var constants = {
  error: "#f5222d",
  vote: "#b6b6b6",
  upvote: "#f9920b",
  downvote: "#2e70ff"
};

var dark = _objectSpread({}, constants, {
  normalText: "#ffffff",
  mutedText: "#b0b8bf",
  border: "#333333",
  accent: "#33a0ff",
  pageBackground: "#1b1b1b",
  voteButtonHover: "#383838",
  foreground: "#262626",
  activeBackground: "#333333",
  inputBackground: "#333333",
  shadow: "rgba(0, 0, 0, 0.4)"
});

var light = _objectSpread({}, constants, {
  normalText: "#454f5b",
  mutedText: "#818e99",
  border: "#ebedf0",
  accent: "#1890ff",
  pageBackground: "#f4f6f8",
  voteButtonHover: "#f2f2f2",
  foreground: "#ffffff",
  activeBackground: "#fafafa",
  inputBackground: "#fcfcfc",
  shadow: "rgba(0, 0, 0, 0.05)"
});

var theme = function theme(isDark) {
  return isDark ? dark : light;
};

/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Dashboard_DashInitialTerms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Dashboard/DashInitialTerms */ "./components/Dashboard/DashInitialTerms.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/theme */ "./components/theme.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles.css */ "./styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/pages/dashboard.js";








/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
    theme: _components_theme__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dashboard_DashInitialTerms__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }))));
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "dashboard__Wrapper",
  componentId: "dqnkpe-0"
})(["display:flex;align-items:flex-start;margin:0 10vw;@media (max-width:1024px){margin:0 5vw;}@media (max-width:768px){display:block;margin:0;}"]);

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/dashboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/dashboard.js */"./pages/dashboard.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@vx/axis":
/*!***************************!*\
  !*** external "@vx/axis" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@vx/axis");

/***/ }),

/***/ "@vx/curve":
/*!****************************!*\
  !*** external "@vx/curve" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@vx/curve");

/***/ }),

/***/ "@vx/event":
/*!****************************!*\
  !*** external "@vx/event" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@vx/event");

/***/ }),

/***/ "@vx/gradient":
/*!*******************************!*\
  !*** external "@vx/gradient" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@vx/gradient");

/***/ }),

/***/ "@vx/grid":
/*!***************************!*\
  !*** external "@vx/grid" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@vx/grid");

/***/ }),

/***/ "@vx/group":
/*!****************************!*\
  !*** external "@vx/group" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@vx/group");

/***/ }),

/***/ "@vx/mock-data":
/*!********************************!*\
  !*** external "@vx/mock-data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@vx/mock-data");

/***/ }),

/***/ "@vx/scale":
/*!****************************!*\
  !*** external "@vx/scale" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@vx/scale");

/***/ }),

/***/ "@vx/shape":
/*!****************************!*\
  !*** external "@vx/shape" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@vx/shape");

/***/ }),

/***/ "@vx/tooltip":
/*!******************************!*\
  !*** external "@vx/tooltip" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@vx/tooltip");

/***/ }),

/***/ "d3-array":
/*!***************************!*\
  !*** external "d3-array" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-array");

/***/ }),

/***/ "d3-format":
/*!****************************!*\
  !*** external "d3-format" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-format");

/***/ }),

/***/ "d3-time-format":
/*!*********************************!*\
  !*** external "d3-time-format" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-time-format");

/***/ }),

/***/ "dateformat":
/*!*****************************!*\
  !*** external "dateformat" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dateformat");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "pondjs":
/*!*************************!*\
  !*** external "pondjs" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pondjs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-timeseries-charts":
/*!******************************************!*\
  !*** external "react-timeseries-charts" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-timeseries-charts");

/***/ }),

/***/ "react-window-size":
/*!************************************!*\
  !*** external "react-window-size" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-window-size");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "underscore":
/*!*****************************!*\
  !*** external "underscore" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ })

/******/ });
//# sourceMappingURL=dashboard.js.map