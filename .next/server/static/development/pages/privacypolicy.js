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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-3354999716"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3354999716",
    css: "*{font-family:Menlo,Monaco,'Lucida Console','Liberation Mono', 'DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New', monospace,serif;}body{margin:0;padding:25px 50px;}a{color:#22bad9;}p{font-size:14px;line-height:24px;}article{margin:0 auto;max-width:650px;}button{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#22bad9;border:0;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5px 7px;}button:active{background-color:#1b9db7;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;}button:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3VCLEFBSzJCLEFBR1QsQUFJSyxBQUdDLEFBSUQsQUFJSyxBQVFNLEFBSVosU0ExQkssSUEyQnBCLENBdkJBLEFBT2tCLENBSkMsVUFnQmdCLEVBdEJuQyxHQVdBLEVBSkEsNkRBTzJCLE1BUzNCLG1CQVJXLFNBQ0csV0FwQmQsQ0FxQmUsMEVBQ0csZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9BcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxtYWluPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgKiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCAnTHVjaWRhIENvbnNvbGUnLCAnTGliZXJhdGlvbiBNb25vJyxcbiAgICAgICAgICAnRGVqYVZ1IFNhbnMgTW9ubycsICdCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8nLCAnQ291cmllciBOZXcnLFxuICAgICAgICAgIG1vbm9zcGFjZSwgc2VyaWY7XG4gICAgICB9XG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAyNXB4IDUwcHg7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICMyMmJhZDk7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIH1cbiAgICAgIGFydGljbGUge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA2NTBweDtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMmJhZDk7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiA1cHggN3B4O1xuICAgICAgfVxuICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjlkYjc7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgICAgIH1cbiAgICAgIGJ1dHRvbjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L21haW4+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/App.js */"
  }));
});

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);





var Header = function Header(_ref) {
  var pathname = _ref.router.pathname;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-3970066506"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3970066506" + " " + ((pathname === "/" ? "is-active" : "") || "")
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3970066506" + " " + ((pathname === "/about" ? "is-active" : "") || "")
  }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/login"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3970066506" + " " + ((pathname === "/login" ? "is-active" : "") || "")
  }, "Login")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/privacypolicy"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3970066506" + " " + ((pathname === "/privacypolicy" ? "is-active" : "") || "")
  }, "Privacy Policy")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3970066506",
    css: "header.jsx-3970066506{margin-bottom:25px;}a.jsx-3970066506{font-size:14px;margin-right:15px;-webkit-text-decoration:none;text-decoration:none;}.is-active.jsx-3970066506{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJnQixBQUc0QixBQUdKLEFBS1csZUFKUixJQUhwQixjQUl1QiwyQkFJdkIsdUJBSEEiLCJmaWxlIjoiL1VzZXJzL21hbngvcHJvamVjdHMvaW5zdGFnYXVnZS9mcm9udGVuZC9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgSGVhZGVyID0gKHsgcm91dGVyOiB7IHBhdGhuYW1lIH0gfSkgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCI+XG4gICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSBcIi9cIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwifT5Ib21lPC9hPlxuICAgIDwvTGluaz5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL2Fib3V0XCI+XG4gICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSBcIi9hYm91dFwiID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJ9PkFib3V0PC9hPlxuICAgIDwvTGluaz5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL2xvZ2luXCI+XG4gICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSBcIi9sb2dpblwiID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJ9PkxvZ2luPC9hPlxuICAgIDwvTGluaz5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL3ByaXZhY3lwb2xpY3lcIj5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09IFwiL3ByaXZhY3lwb2xpY3lcIiA/IFwiaXMtYWN0aXZlXCIgOiBcIlwifT5cbiAgICAgICAgUHJpdmFjeSBQb2xpY3lcbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgLmlzLWFjdGl2ZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9oZWFkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEhlYWRlcik7XG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Header));

/***/ }),

/***/ "./components/PrivacyPolicy.js":
/*!*************************************!*\
  !*** ./components/PrivacyPolicy.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Privacy Policy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Effective date: February 08, 2019"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Social Slant (\"us\", \"we\", or \"our\") operates the https://socialslant.io website (hereinafter referred to as the \"Service\")."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. The Privacy Policy for Social Slant has been created with the help of", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://termsfeed.com/"
  }, "TermsFeed"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://socialslant.io"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Definitions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Service")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Service is the https://socialslant.io website operated by Social Slant")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Personal Data")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Personal Data means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Usage Data")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Usage Data is data collected automatically either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Cookies")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Cookies are small files stored on your device (computer or mobile device)."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Information Collection and Use"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We collect several different types of information for various purposes to provide and improve our Service to you."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Types of Data Collected"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Personal Data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (\"Personal Data\"). Personally identifiable information may include, but is not limited to:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Email address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Cookies and Usage Data")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Usage Data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We may also collect information how the Service is accessed and used (\"Usage Data\"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Tracking & Cookies Data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyse our Service."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Examples of Cookies we use:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Session Cookies."), " We use Session Cookies to operate our Service."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Preference Cookies."), " We use Preference Cookies to remember your preferences and various settings."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Security Cookies."), " We use Security Cookies for security purposes.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Use of Data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Social Slant uses the collected data for various purposes:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To provide and maintain the Service"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To notify you about changes to our Service"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To allow you to participate in interactive features of our Service when you choose to do so"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To provide customer care and support"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To provide analysis or valuable information so that we can improve the Service"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To monitor the usage of the Service"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To detect, prevent and address technical issues")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Transfer Of Data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Your information, including Personal Data, may be transferred to - and maintained on - computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If you are located outside Canada and choose to provide information to us, please note that we transfer the data, including Personal Data, to Canada and process it there."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Social Slant will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Disclosure Of Data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Legal Requirements"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Social Slant may disclose your Personal Data in the good faith belief that such action is necessary to:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To comply with a legal obligation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To protect and defend the rights or property of Social Slant"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To prevent or investigate possible wrongdoing in connection with the Service"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To protect the personal safety of users of the Service or the public"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To protect against legal liability")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "As an European citizen, under GDPR, you have certain individual rights. You can learn more about these guides in the", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://termsfeed.com/blog/gdpr/#Individual_Rights_Under_the_GDPR"
  }, "GDPR Guide"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Security of Data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Service Providers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We may employ third party companies and individuals to facilitate our Service (\"Service Providers\"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Links to Other Sites"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Children's Privacy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Our Service does not address anyone under the age of 18 (\"Children\")."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Changes to This Privacy Policy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the \"effective date\" at the top of this Privacy Policy."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Contact Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If you have any questions about this Privacy Policy, please contact us:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "By email: support@socialslant.io")));
});

/***/ }),

/***/ "./pages/privacypolicy.js":
/*!********************************!*\
  !*** ./pages/privacypolicy.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_PrivacyPolicy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PrivacyPolicy */ "./components/PrivacyPolicy.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PrivacyPolicy__WEBPACK_IMPORTED_MODULE_3__["default"], null));
});

/***/ }),

/***/ 4:
/*!**************************************!*\
  !*** multi ./pages/privacypolicy.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/privacypolicy.js */"./pages/privacypolicy.js");


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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=privacypolicy.js.map