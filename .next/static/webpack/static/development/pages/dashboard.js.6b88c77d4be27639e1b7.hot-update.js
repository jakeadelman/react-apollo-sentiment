webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Dashboard/SentVis.js":
/*!*****************************************!*\
  !*** ./components/Dashboard/SentVis.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vx_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vx/shape */ "./node_modules/@vx/shape/dist/vx-shape.es.js");
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vx/group */ "./node_modules/@vx/group/dist/vx-group.es.js");
/* harmony import */ var _vx_axis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/axis */ "./node_modules/@vx/axis/dist/vx-axis.es.js");
/* harmony import */ var _vx_mock_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vx/mock-data */ "./node_modules/@vx/mock-data/dist/vx-mock-data.es.js");
/* harmony import */ var _vx_scale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vx/scale */ "./node_modules/@vx/scale/dist/vx-scale.es.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }








var parseDate = Object(d3_time_format__WEBPACK_IMPORTED_MODULE_6__["timeParse"])("%Y%m%d");
var format = Object(d3_time_format__WEBPACK_IMPORTED_MODULE_6__["timeFormat"])("%b %d");

var formatDate = function formatDate(date) {
  return format(parseDate(date));
};

var max = function max(arr, fn) {
  return Math.max.apply(Math, _toConsumableArray(arr.map(fn)));
};

var data = _vx_mock_data__WEBPACK_IMPORTED_MODULE_4__["cityTemperature"].slice(0, 4);
var keys = Object.keys(data[0]).filter(function (d) {
  return d !== "date";
}); // accessors

var y0 = function y0(d) {
  return d.date;
};

var x = function x(d) {
  return d.value;
}; // scales


var y0Scale = Object(_vx_scale__WEBPACK_IMPORTED_MODULE_5__["scaleBand"])({
  domain: data.map(y0),
  padding: 0.2
});
var y1Scale = Object(_vx_scale__WEBPACK_IMPORTED_MODULE_5__["scaleBand"])({
  domain: keys,
  padding: 0.1
});
var xScale = Object(_vx_scale__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"])({
  domain: [0, max(data, function (d) {
    return max(keys, function (key) {
      return d[key];
    });
  })]
});
var color = Object(_vx_scale__WEBPACK_IMPORTED_MODULE_5__["scaleOrdinal"])({
  domain: keys,
  range: ["#aeeef8", "#e5fd3d", "#9caff6"]
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? {
    top: 20,
    left: 50,
    right: 10,
    bottom: 0
  } : _ref$margin;
  // bounds
  var xMax = width - margin.left - margin.right;
  var yMax = height - 100; // scales

  y0Scale.rangeRound([0, yMax]);
  y1Scale.rangeRound([0, y0Scale.bandwidth()]);
  xScale.rangeRound([xMax, 0]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    class: "chart",
    width: "420",
    height: "150",
    "aria-labelledby": "title desc",
    role: "img"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    id: "title"
  }, "A bar chart showing information"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("desc", {
    id: "desc"
  }, "4 apples; 8 bananas; 15 kiwis; 16 oranges; 23 lemons"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    class: "bar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "40",
    height: "19"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: "45",
    y: "9.5",
    dy: ".35em"
  }, "4 apples")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    class: "bar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "80",
    height: "19",
    y: "20"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: "85",
    y: "28",
    dy: ".35em"
  }, "8 bananas")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    class: "bar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "150",
    height: "19",
    y: "40"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: "150",
    y: "48",
    dy: ".35em"
  }, "15 kiwis")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    class: "bar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "160",
    height: "19",
    y: "60"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: "161",
    y: "68",
    dy: ".35em"
  }, "16 oranges")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    class: "bar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "230",
    height: "19",
    y: "80"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    x: "235",
    y: "88",
    dy: ".35em"
  }, "23 lemons")));
});

/***/ })

})
//# sourceMappingURL=dashboard.js.6b88c77d4be27639e1b7.hot-update.js.map