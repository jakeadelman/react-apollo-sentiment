webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Helpers/Functions.js":
/*!*****************************************!*\
  !*** ./components/Helpers/Functions.js ***!
  \*****************************************/
/*! exports provided: formatDateMonthOnly, getStateDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateMonthOnly", function() { return formatDateMonthOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStateDate", function() { return getStateDate; });
function formatDateMonthOnly(date) {
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var theDate = new Date(date);
  var day = theDate.getDate();
  var monthIndex = theDate.getMonth();
  var year = theDate.getFullYear();
  return day + " " + monthNames[monthIndex] + " " + year;
}
function getStateDate(input) {
  if (input == "today") {
    var dates = {};
    dates.start = makeDate(0);
    dates.end = makeDate(24);
    return dates;
  }
}

function makeDate(hrsBack) {
  if (hrsBack == 0) {
    var dt = new Date(new Date().toUTCString());
    dt = dt.toISOString();
    return dt;
  } else {
    var _dt = new Date(new Date().toUTCString());

    _dt.setHours(_dt.getHours() - hrsBack);

    _dt = _dt.toISOString();
    return _dt;
  }
}

/***/ })

})
//# sourceMappingURL=dashboard.js.331076ecf564c67fc513.hot-update.js.map