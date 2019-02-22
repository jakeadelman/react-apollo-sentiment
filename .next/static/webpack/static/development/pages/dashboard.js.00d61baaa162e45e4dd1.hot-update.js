webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Charts/NewChart.js":
/*!***************************************!*\
  !*** ./components/Charts/NewChart.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vx_axis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vx/axis */ "./node_modules/@vx/axis/dist/vx-axis.es.js");
/* harmony import */ var _vx_mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vx/mock-data */ "./node_modules/@vx/mock-data/dist/vx-mock-data.es.js");
/* harmony import */ var _vx_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/scale */ "./node_modules/@vx/scale/dist/vx-scale.es.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _vx_shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vx/shape */ "./node_modules/@vx/shape/dist/vx-shape.es.js");
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vx/group */ "./node_modules/@vx/group/dist/vx-group.es.js");
/* harmony import */ var _vx_gradient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vx/gradient */ "./node_modules/@vx/gradient/dist/vx-gradient.es.js");
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
          lineNumber: 46
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
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
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
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "0%",
        stopColor: "#FFFFFF",
        stopOpacity: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
        offset: "100%",
        stopColor: "#FFFFFF",
        stopOpacity: 0.2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_6__["Group"], {
        top: margin.top,
        left: margin.left,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AreaChart, {
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // module.exports = { Chart };
// export default NewChart;




/***/ })

})
//# sourceMappingURL=dashboard.js.00d61baaa162e45e4dd1.hot-update.js.map