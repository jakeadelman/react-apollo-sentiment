webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Charts/helpers.js":
/*!**************************************!*\
  !*** ./components/Charts/helpers.js ***!
  \**************************************/
/*! exports provided: getNotes, getHashtags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotes", function() { return getNotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHashtags", function() { return getHashtags; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getNotes(_x) {
  return _getNotes.apply(this, arguments);
}

function _getNotes() {
  _getNotes = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(inputVal) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve) {
              var notes;

              if (inputVal != null) {
                notes = inputVal;
              } else {
                notes = "undefined";
              } // let hashtags = "";
              // if (inputHashtags != null) {
              //   for (let k = 0; k < inputHashtags.length; k++) {
              //     hashtags += inputHashtags[k] + " ";
              //     if (k == inputHashtags.length - 1) {
              //       let endArr = [];
              //       endArr.push(notes);
              //       endArr.push(hashtags);
              //       resolve(endArr);
              //     }
              //   }
              // } else {


              var endArr = [];
              endArr.push(notes); // endArr.push(hashtags);

              resolve(endArr); // }
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getNotes.apply(this, arguments);
}

function getHashtags(_x2) {
  return _getHashtags.apply(this, arguments);
}

function _getHashtags() {
  _getHashtags = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(inputHashtags) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(inputHashtags, "INP HASH");
            return _context2.abrupt("return", new Promise(function (resolve) {
              var hashtags;

              if (inputHashtags != null && inputHashtags != undefined) {
                hashtags = inputHashtags;
              } else {
                hashtags = "undefined";
              }

              var endArr = [];
              endArr.push(hashtags);
              resolve(endArr);
            }));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getHashtags.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=dashboard.js.290439bbbefa55d6f255.hot-update.js.map