webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var _components_Header_HomeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/HomeHeader */ "./components/Header/HomeHeader.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/theme */ "./components/theme.js");
/* harmony import */ var _components_shared_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shared/helpers */ "./components/shared/helpers.js");
/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-typist */ "./node_modules/react-typist/dist/Typist.js");
/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_typist__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_typist_loop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-typist-loop */ "./node_modules/react-typist-loop/lib/TypistLoop.js");
/* harmony import */ var react_typist_loop__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_typist_loop__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/pages/index.js";









var cursor = {
  blink: true
};
function IndexPage() {
  var signupClick = function signupClick() {
    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/register");
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_HomeHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      margin: "0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: Object(_components_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OuterWrapper, {
    style: {
      margin: "0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RowOne, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerRowContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: "200px",
      height: "auto",
      margin: "auto"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/ai2.svg",
    style: {
      margin: "auto",
      maxWidth: "200px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerRowContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TxtDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist_loop__WEBPACK_IMPORTED_MODULE_7___default.a, {
    interval: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, ["beat", "outperform", "dominate"].map(function (text) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_6___default.a, {
      key: text,
      stdTypingDelay: 35,
      cursor: cursor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_6___default.a.Backspace, {
      count: text.length,
      delay: 2200,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginLeft: "1px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "the market"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerRowContainerBlack, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TxtDivBlack, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Supercharge your crypto trading with state of the art machine learning classifiers."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TxtDivBlack2, {
    className: "hello",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SignUpButton, {
    onClick: signupClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Sign Up"))))))));
}
var OuterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__OuterWrapper",
  componentId: "teytsb-0"
})(["height:100%;margin-bottom:0;padding-bottom:0;"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__Wrapper",
  componentId: "teytsb-1"
})(["display:flex;margin:0 10vw;height:auto;@media (max-width:1024px){margin:0 5vw;}@media (max-width:768px){margin:0;}"]);
var SignUpButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "pages__SignUpButton",
  componentId: "teytsb-2"
})(["", " padding:8px 20px;border-radius:2px;"], _components_shared_helpers__WEBPACK_IMPORTED_MODULE_5__["smallFont"]);
var TxtDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__TxtDiv",
  componentId: "teytsb-3"
})(["", " max-width:230px;font-size:15px;text-align:center;margin:auto;display:flex;flex-direction:row;"], _components_shared_helpers__WEBPACK_IMPORTED_MODULE_5__["wideFont"]);
var TxtDivBlack = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__TxtDivBlack",
  componentId: "teytsb-4"
})(["", " max-width:450px;font-size:15px;color:#ffffff;text-align:center;margin:auto;margin-bottom:25px;"], _components_shared_helpers__WEBPACK_IMPORTED_MODULE_5__["wideFont"]);
var TxtDivBlack2 = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__TxtDivBlack2",
  componentId: "teytsb-5"
})(["", " max-width:550px;font-size:15px;color:#ffffff;text-align:center;margin:auto;margin-top:25px;"], _components_shared_helpers__WEBPACK_IMPORTED_MODULE_5__["wideFont"]);
var RowOne = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__RowOne",
  componentId: "teytsb-6"
})(["height:auto;width:100%;display:flex;flex-direction:column;margin-top:100px;"]);
var InnerRowContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__InnerRowContainer",
  componentId: "teytsb-7"
})(["width:100%;margin-top:20px;margin-bottom:0px;"]);
var InnerRowContainerBlack = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__InnerRowContainerBlack",
  componentId: "teytsb-8"
})(["width:100%;min-height:400px;margin-top:100px;margin-bottom:25px;background:#1b1b1b;border-radius:2px;display:flex;flex-direction:column;@media (max-width:1024px){margin-bottom:60px;}@media (max-width:768px){margin-bottom:0;}"]);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.29fa154e19d985e2c259.hot-update.js.map