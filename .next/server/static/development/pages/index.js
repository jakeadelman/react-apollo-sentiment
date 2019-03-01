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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/App.js";



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, children);
});

/***/ }),

/***/ "./components/Header/HomeHeader.js":
/*!*****************************************!*\
  !*** ./components/Header/HomeHeader.js ***!
  \*****************************************/
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
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Logo */ "./components/Header/Logo.js");
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Header/HomeHeader.js";









var Cookie = __webpack_require__(/*! js-cookie */ "js-cookie");

var Header2 = function Header2(_ref) {
  var pathname = _ref.router.pathname;
  var cook = Cookie.get("isAuth");

  if (!cook) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: Object(_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      className: pathname === "/login" ? "is-active" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/register",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      className: pathname === "/register" ? "is-active" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "register"))));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: Object(_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/dashboard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      className: pathname === "/register" ? "is-active" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "dashboard"))));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Header2));
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "HomeHeader__StyledLink",
  componentId: "tls1pp-0"
})(["", ";", ";", ";margin:0;color:", ";position:relative;cursor:pointer;::after{", ";content:\"\";position:absolute;left:0;right:0;bottom:0;opacity:0;border-bottom:1px solid ", ";}:hover{opacity:1;color:", ";}:hover::after{opacity:1;border-bottom:1px solid ", ";}&.active::after{left:0;right:0;bottom:0;border-bottom:3px solid ", ";}font-weight:700;letter-spacing:0.05em;font-size:12px;text-transform:uppercase;"], _shared_helpers__WEBPACK_IMPORTED_MODULE_5__["headerItem"], _shared_helpers__WEBPACK_IMPORTED_MODULE_5__["wideFont"], _shared_helpers__WEBPACK_IMPORTED_MODULE_5__["link"], function (props) {
  return props.theme.mutedText;
}, Object(_shared_helpers__WEBPACK_IMPORTED_MODULE_5__["transition"])("opacity", "border-bottom-width"), function (props) {
  return props.theme.accent;
}, function (props) {
  return props.theme.accent;
}, function (props) {
  return props.theme.accent;
}, function (props) {
  return props.theme.accent;
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.header.withConfig({
  displayName: "HomeHeader__Wrapper",
  componentId: "tls1pp-1"
})(["position:sticky;z-index:10;top:0;display:flex;align-items:stretch;margin-bottom:0px;box-shadow:0 4px 12px ", ";border-bottom:1px solid ", ";height:48px;padding:0 10vw;background-color:", ";user-select:none;@media (max-width:425px){margin-bottom:0px;height:40px;}@media (max-width:768px){padding:0;margin-bottom:0px;}"], function (props) {
  return props.theme.shadow;
}, function (props) {
  return props.theme.border;
}, function (props) {
  return props.theme.foreground;
});

/***/ }),

/***/ "./components/Header/Logo.js":
/*!***********************************!*\
  !*** ./components/Header/Logo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/helpers */ "./components/shared/helpers.js");
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Header/Logo.js";





var HeaderLogo = function HeaderLogo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "tradrr");
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderLogo);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Logo",
  componentId: "sc-195qc4m-0"
})(["", " margin-right:auto;font-size:24px;font-weight:500;color:", ";text-decoration:none;@media (max-width:425px){padding:0 8px 0 16px;font-size:19px;}"], _shared_helpers__WEBPACK_IMPORTED_MODULE_3__["headerItem"], function (props) {
  return props.theme.normalText;
}); // display: flex;
// align-items: center;
// flex-shrink: 0;
// padding: 0 16px;
// @media (max-width: 425px) {
//   padding: 0 8px;
// }

/***/ }),

/***/ "./components/HomepageSvg.js":
/*!***********************************!*\
  !*** ./components/HomepageSvg.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomepageSvg; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/HomepageSvg.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Box = react_pose__WEBPACK_IMPORTED_MODULE_1___default.a.div({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
});

var HomepageSvg =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HomepageSvg, _React$Component);

  function HomepageSvg(props) {
    var _this;

    _classCallCheck(this, HomepageSvg);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HomepageSvg).call(this, props));
    _this.state = {
      visible: true
    };
    return _this;
  }

  _createClass(HomepageSvg, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        _this2.setState({
          visible: !_this2.state.visible
        });
      }, 4000);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box, {
        pose: this.state.visible ? "visible" : "hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        style: {
          height: "100%",
          width: "100%"
        },
        viewBox: "0 0 600 600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M394.668,0H32.001c-17.673,0-32,14.327-32,32v256c0,17.673,14.327,32,32,32h138.667v-21.333H32.001 c-5.891,0-10.667-4.776-10.667-10.667V32c0-5.891,4.776-10.667,10.667-10.667h362.667c5.891,0,10.667,4.776,10.667,10.667v192 h21.333V32C426.668,14.327,412.341,0,394.668,0z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        x: "128.001",
        y: "309.333",
        width: "21.333",
        height: "64",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M74.668,256c-5.891,0-10.667-4.776-10.667-10.667V224H42.668v21.333c0,17.673,14.327,32,32,32h21.333V256H74.668z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        x: "42.668",
        y: "181.333",
        width: "21.333",
        height: "21.333",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M389.836,225.941c-21.736-21.74-51.219-33.953-81.961-33.952c-64.006,0.003-115.891,51.892-115.889,115.898 c0.003,64.006,51.892,115.891,115.898,115.889c30.732-0.001,60.204-12.208,81.937-33.937 C435.084,344.584,435.091,271.205,389.836,225.941z M307.82,402.453c-52.224-0.018-94.546-42.368-94.528-94.592 c0.018-52.224,42.368-94.546,94.592-94.528c25.101-0.068,49.184,9.92,66.869,27.733c17.718,17.738,27.667,41.787,27.659,66.859 C402.394,360.149,360.044,402.471,307.82,402.453z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M508.876,464l-66.955-66.933c-2-2-4.713-3.125-7.541-3.125c-2.829,0.001-5.541,1.125-7.541,3.125l-29.76,29.76 c-4.164,4.165-4.164,10.917,0,15.083l66.955,66.965c2,2.001,4.713,3.125,7.541,3.125v0c2.833-0.009,5.547-1.145,7.541-3.157 l29.76-29.76C513.04,474.917,513.04,468.165,508.876,464z M471.574,486.251l-51.872-51.883l14.677-14.677l51.872,51.883 L471.574,486.251z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        x: "390.231",
        y: "374.581",
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -166.0486 400.894)",
        width: "21.333",
        height: "52.608",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M309.334,234.667V256c29.441,0.035,53.298,23.893,53.333,53.333h21.333C383.954,268.116,350.552,234.714,309.334,234.667z ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        x: "106.668",
        y: "362.667",
        width: "85.333",
        height: "21.333",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M160.001,42.667c-17.673,0-32,14.327-32,32c0,17.673,14.327,32,32,32s32-14.327,32-32 C192.001,56.994,177.674,42.667,160.001,42.667z M160.001,85.333c-5.891,0-10.667-4.776-10.667-10.667 c0-5.891,4.776-10.667,10.667-10.667s10.667,4.776,10.667,10.667C170.668,80.558,165.892,85.333,160.001,85.333z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M234.668,117.333c-17.673,0-32,14.327-32,32c0,17.673,14.327,32,32,32c17.673,0,32-14.327,32-32 C266.668,131.66,252.341,117.333,234.668,117.333z M234.668,160c-5.891,0-10.667-4.776-10.667-10.667 c0-5.891,4.776-10.667,10.667-10.667c5.891,0,10.667,4.776,10.667,10.667C245.334,155.224,240.559,160,234.668,160z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        x: "84.956",
        y: "101.336",
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -43.269 119.5445)",
        width: "75.424",
        height: "21.333",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        x: "186.623",
        y: "74.317",
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -21.4319 172.3178)",
        width: "21.333",
        height: "75.424",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M309.334,42.667c-17.673,0-32,14.327-32,32c0,17.673,14.327,32,32,32c17.673,0,32-14.327,32-32 C341.335,56.994,327.008,42.667,309.334,42.667z M309.334,85.333c-5.891,0-10.667-4.776-10.667-10.667 c0-5.891,4.776-10.667,10.667-10.667c5.891,0,10.667,4.776,10.667,10.667C320.001,80.558,315.225,85.333,309.334,85.333z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        x: "234.285",
        y: "101.373",
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 0.4421 225.1463)",
        width: "75.424",
        height: "21.333",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      })))));
    }
  }]);

  return HomepageSvg;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/shared/helpers.js":
/*!**************************************!*\
  !*** ./components/shared/helpers.js ***!
  \**************************************/
/*! exports provided: smallFont, wideFont, fade, transition, headerItem, link, overflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallFont", function() { return smallFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wideFont", function() { return wideFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerItem", function() { return headerItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "link", function() { return link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overflow", function() { return overflow; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var smallFont = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:12px;font-weight:600;text-transform:uppercase;"]);
var wideFont = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["", ";font-weight:700;letter-spacing:0.05em;"], smallFont);
var fadeKeyframes = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{opacity:0;}to{opacity:1;}"]);
var fade = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["animation:", " 0.25s;"], fadeKeyframes);
var transition = function transition(props) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["transition:all ", " ease;"], props.slow ? "0.3s" : "0.15s");
};
var headerItem = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["display:flex;align-items:center;flex-shrink:0;padding:0 16px;@media (max-width:425px){padding:0 8px;}"]);
var link = function link(props) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["", ";text-underline-position:under;text-decoration:none;color:", ";:hover{", ";color:", ";}"], transition, function (props) {
    return props.theme.normalText;
  }, props.underline && "text-decoration: underline", function (props) {
    return props.theme.accent;
  });
};
var overflow = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var _components_Header_HomeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/HomeHeader */ "./components/Header/HomeHeader.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/theme */ "./components/theme.js");
/* harmony import */ var _components_HomepageSvg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HomepageSvg */ "./components/HomepageSvg.js");
/* harmony import */ var _components_shared_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shared/helpers */ "./components/shared/helpers.js");
/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-typist */ "react-typist");
/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_typist__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_typist_loop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-typist-loop */ "react-typist-loop");
/* harmony import */ var react_typist_loop__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_typist_loop__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/pages/index.js";






 // import Typing from "react-typing-animation";



var cursor = {
  blink: true
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_HomeHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      margin: "0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: Object(_components_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OuterWrapper, {
    style: {
      margin: "0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RowOne, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerRowContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
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
      lineNumber: 23
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
      lineNumber: 24
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerRowContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TxtDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist_loop__WEBPACK_IMPORTED_MODULE_8___default.a, {
    interval: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, ["beat", "outperform", "dominate"].map(function (text) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_7___default.a, {
      key: text,
      stdTypingDelay: 35,
      cursor: cursor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_7___default.a.Backspace, {
      count: text.length,
      delay: 2200,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginLeft: "1px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "the market"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerRowContainerBlack, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TxtDivBlack, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Supercharge your crypto trading with state of the art machine learning classifiers."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TxtDivBlack2, {
    className: "hello",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SignUpButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Sign Up"))))))));
});
var OuterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__OuterWrapper",
  componentId: "teytsb-0"
})(["background-color:", ";height:100%;margin-bottom:0;padding-bottom:0;"], function (props) {
  return props.theme.foreground;
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__Wrapper",
  componentId: "teytsb-1"
})(["display:flex;margin:0 10vw;height:auto;background-color:", ";@media (max-width:1024px){margin:0 5vw;}@media (max-width:768px){margin:0;}"], function (props) {
  return props.theme.foreground;
});
var SignUpButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: "pages__SignUpButton",
  componentId: "teytsb-2"
})(["", " padding:8px 20px;border-radius:2px;"], _components_shared_helpers__WEBPACK_IMPORTED_MODULE_6__["smallFont"]);
var TxtDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__TxtDiv",
  componentId: "teytsb-3"
})(["", " max-width:230px;font-size:15px;text-align:center;margin:auto;display:flex;flex-direction:row;"], _components_shared_helpers__WEBPACK_IMPORTED_MODULE_6__["wideFont"]);
var TxtDivBlack = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__TxtDivBlack",
  componentId: "teytsb-4"
})(["", " max-width:450px;font-size:15px;color:#ffffff;text-align:center;margin:auto;margin-bottom:25px;"], _components_shared_helpers__WEBPACK_IMPORTED_MODULE_6__["wideFont"]);
var TxtDivBlack2 = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__TxtDivBlack2",
  componentId: "teytsb-5"
})(["", " max-width:550px;font-size:15px;color:#ffffff;text-align:center;margin:auto;margin-top:25px;"], _components_shared_helpers__WEBPACK_IMPORTED_MODULE_6__["wideFont"]);
var RowOne = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__RowOne",
  componentId: "teytsb-6"
})(["height:auto;width:100%;display:flex;flex-direction:column;margin-top:100px;background-color:", ";"], function (props) {
  return props.theme.foreground;
});
var InnerRowContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__InnerRowContainer",
  componentId: "teytsb-7"
})(["width:100%;margin-top:20px;margin-bottom:20px;"]);
var InnerRowContainerBlack = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__InnerRowContainerBlack",
  componentId: "teytsb-8"
})(["width:100%;min-height:400px;margin-top:100px;margin-bottom:60px;background:#1b1b1b;border-radius:2px;display:flex;flex-direction:column;@media (max-width:1024px){margin-bottom:60px;}@media (max-width:768px){margin-bottom:0;}"]);

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-pose":
/*!*****************************!*\
  !*** external "react-pose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),

/***/ "react-typist":
/*!*******************************!*\
  !*** external "react-typist" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-typist");

/***/ }),

/***/ "react-typist-loop":
/*!************************************!*\
  !*** external "react-typist-loop" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-typist-loop");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map