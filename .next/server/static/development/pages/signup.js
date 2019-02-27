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

/***/ "./components/Form2/FormWrapper.js":
/*!*****************************************!*\
  !*** ./components/Form2/FormWrapper.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "FormWrapper",
  componentId: "sc-1970mg2-0"
})(["position:relative;overflow:hidden;margin:0 auto;border:1px solid ", ";border-radius:2px;width:375px;padding:24px;background-color:", ";@media (max-width:768px){padding:16px;}@media (max-width:", "){border-radius:0;border-left:none;border-right:none;}"], function (props) {
  return props.theme.border;
}, function (props) {
  return props.theme.foreground;
}, function (props) {
  return props.wide ? "600px" : "375px";
});
/* harmony default export */ __webpack_exports__["default"] = (FormWrapper); // max-width: ${props => (props.wide ? "600px" : "375px")};

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
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _stores_UserStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../stores/UserStore */ "./stores/UserStore.ts");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Logo */ "./components/Header/Logo.js");
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Header/Header.js";


 // import Head from "Header/Head";








var Cookie = __webpack_require__(/*! js-cookie */ "js-cookie");

var Header2 = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__["observer"])(function (_ref) {
  var pathname = _ref.router.pathname;
  var cook = Cookie.get("isAuth");
  console.log(cook);
  var authOrNo = cook == "true";

  if (!authOrNo) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: Object(_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      className: pathname === "/login" ? "is-active" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/register",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      className: pathname === "/register" ? "is-active" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "register"))));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: Object(_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      prefetch: true,
      href: "/logout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      className: pathname === "/login" ? "is-active" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "logout"))));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Header2));
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Header__StyledLink",
  componentId: "sc-19c2vr5-0"
})(["margin:auto 10px;color:", ";position:relative;cursor:pointer;::after{content:\"\";position:absolute;left:0;right:0;bottom:0;opacity:0;border-bottom:1px solid ", ";}:hover{opacity:1;color:", ";}&.active::after{left:0;right:0;bottom:0;border-bottom:3px solid ", ";}font-weight:700;letter-spacing:0.05em;font-size:12px;text-transform:uppercase;"], function (props) {
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

/***/ "./components/Stripe/CardSection.js":
/*!******************************************!*\
  !*** ./components/Stripe/CardSection.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-stripe-elements */ "react-stripe-elements");
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Stripe/CardSection.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// CardSection.js



var CardSection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CardSection, _React$Component);

  function CardSection() {
    _classCallCheck(this, CardSection);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardSection).apply(this, arguments));
  }

  _createClass(CardSection, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, "Card details", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__["CardElement"], {
        style: {
          base: {
            fontSize: "18px"
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }));
    }
  }]);

  return CardSection;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CardSection);

/***/ }),

/***/ "./components/Stripe/CheckoutForm.js":
/*!*******************************************!*\
  !*** ./components/Stripe/CheckoutForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-stripe-elements */ "react-stripe-elements");
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stripe_elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CardSection */ "./components/Stripe/CardSection.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/Button */ "./components/shared/Button.js");
/* harmony import */ var _Form2_FormWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Form2/FormWrapper */ "./components/Form2/FormWrapper.js");

var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Stripe/CheckoutForm.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n              mutation confCard($uid: String!, $source: String!) {\n                confirmCard(uid: $uid, source: $source)\n              }\n            "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// CheckoutForm.js



 // import AddressSection from "./AddressSection";






var Cookie = __webpack_require__(/*! js-cookie */ "js-cookie");

function CheckoutForm(_ref) {
  var stripe = _ref.stripe;

  function handleSubmit(ev, client) {
    ev.preventDefault();
    var source;
    var uid = Cookie.get("uid");
    stripe.createSource({
      type: "card",
      owner: {
        email: "jacobzadelman@gmail.com"
      }
    }).then(function (_ref2) {
      var source = _ref2.source;
      return source.id.toString();
    }).then(
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(source) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(uid, source);
                console.log(_typeof(source));
                console.log(_typeof(source));
                _context.next = 5;
                return client.mutate({
                  mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject()),
                  variables: {
                    uid: uid,
                    source: source
                  }
                }).then(function (res) {
                  return console.log(res);
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloConsumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, function (client) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Form2_FormWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledForm, {
      onSubmit: function onSubmit(e) {
        return handleSubmit(e, client);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      style: {
        width: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_stripe_elements__WEBPACK_IMPORTED_MODULE_2__["CardElement"], {
      style: {
        base: {
          fontSize: "18px"
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Start your free trial")));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_stripe_elements__WEBPACK_IMPORTED_MODULE_2__["injectStripe"])(CheckoutForm));
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.form.withConfig({
  displayName: "CheckoutForm__StyledForm",
  componentId: "sc-53t4o-0"
})(["display:flex;flex-direction:column;align-items:flex-start;width:100%;", ";"], function (props) {
  return props.loading && "filter: grayscale(0.5) blur(5px) opacity(0.6); pointer-events: none";
});
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_shared_Button__WEBPACK_IMPORTED_MODULE_7__["default"]).withConfig({
  displayName: "CheckoutForm__SubmitButton",
  componentId: "sc-53t4o-1"
})(["align-self:flex-end;margin-right:0px;margin-left:auto;"]);
var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "CheckoutForm__InputWrapper",
  componentId: "sc-53t4o-2"
})(["position:relative;margin-bottom:24px;width:100%;"]);

/***/ }),

/***/ "./components/Stripe/Elements.js":
/*!***************************************!*\
  !*** ./components/Stripe/Elements.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-stripe-elements */ "react-stripe-elements");
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CheckoutForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckoutForm */ "./components/Stripe/CheckoutForm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./components/theme.js");
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Stripe/Elements.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));
    _this.state = {
      stripe: null
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Create Stripe instance in componentDidMount
      // (componentDidMount only fires in browser/DOM environment)
      this.setState({
        stripe: window.Stripe("pk_test_0O8JLNYf87Oky33vn38yNi4i")
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
        theme: Object(_theme__WEBPACK_IMPORTED_MODULE_4__["default"])(false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__["StripeProvider"], {
        stripe: this.state.stripe,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__["Elements"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CheckoutForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/shared/Button.js":
/*!*************************************!*\
  !*** ./components/shared/Button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./components/shared/helpers.js");


var Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Button",
  componentId: "sc-1yqwkyz-0"
})(["", ";", ";border:none;border-radius:3px;padding:8px 24px;background-color:", ";cursor:pointer;color:#ffffff;outline:none;:hover{filter:brightness(110%);}:active{filter:brightness(90%);}:focus{box-shadow:0 0 0 2px ", ";}"], Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["transition"])("filter", "box-shadow"), _helpers__WEBPACK_IMPORTED_MODULE_1__["wideFont"], function (props) {
  return props.theme.accent;
}, function (props) {
  return props.theme.accent + "4d";
});
/* harmony default export */ __webpack_exports__["default"] = (Button);

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

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var _components_Stripe_Elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Stripe/Elements */ "./components/Stripe/Elements.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/pages/signup.js";





function SignUp() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Stripe_Elements__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
}

/***/ }),

/***/ "./stores/UserStore.ts":
/*!*****************************!*\
  !*** ./stores/UserStore.ts ***!
  \*****************************/
/*! exports provided: userStore, UserStoreContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userStore", function() { return userStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStoreContext", function() { return UserStoreContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_1__);
var _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }


 // import * as mobby from "mobx-sync";
// import { create, persist } from "mobx-persist";

var UserStore = (_class = (_temp = function UserStore() {
  _classCallCheck(this, UserStore);

  _initializerDefineProperty(this, "isAuth", _descriptor, this);
}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "isAuth", [mobx__WEBPACK_IMPORTED_MODULE_1__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
})), _class); // const store = observable({ foo: "the" });

var userStore = new UserStore();
var UserStoreContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(userStore); // let trunk = new mobby.AsyncTrunk(store);
// trunk.init().then(() => {
//   // do any staff with loaded store
//   console.log("userStore.isAuth");
// });
// if (process.browser) {
// const hydrate = create();
// hydrate("user", userStore).then(() => console.log("has been hydrated"));
// export function hydrateUser() {
//   hydrate("user", userStore).then(() =>
//     console.log("has been hydrated and reset")
//   );
// }

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/signup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/signup.js */"./pages/signup.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react-lite":
/*!**********************************!*\
  !*** external "mobx-react-lite" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-stripe-elements":
/*!****************************************!*\
  !*** external "react-stripe-elements" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stripe-elements");

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
//# sourceMappingURL=signup.js.map