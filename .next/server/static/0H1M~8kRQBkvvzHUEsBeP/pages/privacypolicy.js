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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(37);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/App.js
var App = __webpack_require__(6);

// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(7);

// CONCATENATED MODULE: ./components/PrivacyPolicy.js

/* harmony default export */ var PrivacyPolicy = (function () {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h1", null, "Privacy Policy"), external_react_default.a.createElement("p", null, "Effective date: February 08, 2019"), external_react_default.a.createElement("p", null, "Social Slant (\"us\", \"we\", or \"our\") operates the https://socialslant.io website (hereinafter referred to as the \"Service\")."), external_react_default.a.createElement("p", null, "This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. The Privacy Policy for Social Slant has been created with the help of", " ", external_react_default.a.createElement("a", {
    href: "https://termsfeed.com/"
  }, "TermsFeed"), "."), external_react_default.a.createElement("p", null, "We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://socialslant.io"), external_react_default.a.createElement("h2", null, "Definitions"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Service")), external_react_default.a.createElement("p", null, "Service is the https://socialslant.io website operated by Social Slant")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Personal Data")), external_react_default.a.createElement("p", null, "Personal Data means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Usage Data")), external_react_default.a.createElement("p", null, "Usage Data is data collected automatically either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Cookies")), external_react_default.a.createElement("p", null, "Cookies are small files stored on your device (computer or mobile device)."))), external_react_default.a.createElement("h2", null, "Information Collection and Use"), external_react_default.a.createElement("p", null, "We collect several different types of information for various purposes to provide and improve our Service to you."), external_react_default.a.createElement("h3", null, "Types of Data Collected"), external_react_default.a.createElement("h4", null, "Personal Data"), external_react_default.a.createElement("p", null, "While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (\"Personal Data\"). Personally identifiable information may include, but is not limited to:"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, "Email address"), external_react_default.a.createElement("li", null, "Cookies and Usage Data")), external_react_default.a.createElement("h4", null, "Usage Data"), external_react_default.a.createElement("p", null, "We may also collect information how the Service is accessed and used (\"Usage Data\"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data."), external_react_default.a.createElement("h4", null, "Tracking & Cookies Data"), external_react_default.a.createElement("p", null, "We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information."), external_react_default.a.createElement("p", null, "Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyse our Service."), external_react_default.a.createElement("p", null, "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service."), external_react_default.a.createElement("p", null, "Examples of Cookies we use:"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "Session Cookies."), " We use Session Cookies to operate our Service."), external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "Preference Cookies."), " We use Preference Cookies to remember your preferences and various settings."), external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "Security Cookies."), " We use Security Cookies for security purposes.")), external_react_default.a.createElement("h2", null, "Use of Data"), external_react_default.a.createElement("p", null, "Social Slant uses the collected data for various purposes:"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, "To provide and maintain the Service"), external_react_default.a.createElement("li", null, "To notify you about changes to our Service"), external_react_default.a.createElement("li", null, "To allow you to participate in interactive features of our Service when you choose to do so"), external_react_default.a.createElement("li", null, "To provide customer care and support"), external_react_default.a.createElement("li", null, "To provide analysis or valuable information so that we can improve the Service"), external_react_default.a.createElement("li", null, "To monitor the usage of the Service"), external_react_default.a.createElement("li", null, "To detect, prevent and address technical issues")), external_react_default.a.createElement("h2", null, "Transfer Of Data"), external_react_default.a.createElement("p", null, "Your information, including Personal Data, may be transferred to - and maintained on - computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction."), external_react_default.a.createElement("p", null, "If you are located outside Canada and choose to provide information to us, please note that we transfer the data, including Personal Data, to Canada and process it there."), external_react_default.a.createElement("p", null, "Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer."), external_react_default.a.createElement("p", null, "Social Slant will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information."), external_react_default.a.createElement("h2", null, "Disclosure Of Data"), external_react_default.a.createElement("h3", null, "Legal Requirements"), external_react_default.a.createElement("p", null, "Social Slant may disclose your Personal Data in the good faith belief that such action is necessary to:"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, "To comply with a legal obligation"), external_react_default.a.createElement("li", null, "To protect and defend the rights or property of Social Slant"), external_react_default.a.createElement("li", null, "To prevent or investigate possible wrongdoing in connection with the Service"), external_react_default.a.createElement("li", null, "To protect the personal safety of users of the Service or the public"), external_react_default.a.createElement("li", null, "To protect against legal liability")), external_react_default.a.createElement("p", null, "As an European citizen, under GDPR, you have certain individual rights. You can learn more about these guides in the", " ", external_react_default.a.createElement("a", {
    href: "https://termsfeed.com/blog/gdpr/#Individual_Rights_Under_the_GDPR"
  }, "GDPR Guide"), "."), external_react_default.a.createElement("h2", null, "Security of Data"), external_react_default.a.createElement("p", null, "The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."), external_react_default.a.createElement("h2", null, "Service Providers"), external_react_default.a.createElement("p", null, "We may employ third party companies and individuals to facilitate our Service (\"Service Providers\"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used."), external_react_default.a.createElement("p", null, "These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."), external_react_default.a.createElement("h2", null, "Links to Other Sites"), external_react_default.a.createElement("p", null, "Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit."), external_react_default.a.createElement("p", null, "We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services."), external_react_default.a.createElement("h2", null, "Children's Privacy"), external_react_default.a.createElement("p", null, "Our Service does not address anyone under the age of 18 (\"Children\")."), external_react_default.a.createElement("p", null, "We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers."), external_react_default.a.createElement("h2", null, "Changes to This Privacy Policy"), external_react_default.a.createElement("p", null, "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."), external_react_default.a.createElement("p", null, "We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the \"effective date\" at the top of this Privacy Policy."), external_react_default.a.createElement("p", null, "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."), external_react_default.a.createElement("h2", null, "Contact Us"), external_react_default.a.createElement("p", null, "If you have any questions about this Privacy Policy, please contact us:"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, "By email: support@socialslant.io")));
});
// CONCATENATED MODULE: ./pages/privacypolicy.js




/* harmony default export */ var privacypolicy = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(App["a" /* default */], null, external_react_default.a.createElement(Header["a" /* default */], null), external_react_default.a.createElement(PrivacyPolicy, null));
});

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-664422056"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "664422056",
    css: ["*{font-family:Menlo,Monaco,\"Lucida Console\",\"Liberation Mono\", \"DejaVu Sans Mono\",\"Bitstream Vera Sans Mono\",\"Courier New\", monospace,serif;}", "body{margin:0;padding:25px 50px;}", "a{color:#22bad9;}", "p{font-size:14px;line-height:24px;}", "article{margin:0 auto;max-width:650px;}", "button{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#22bad9;border:0;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5px 7px;}", "button:active{background-color:#1b9db7;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;}", "button:focus{outline:none;}"]
  }));
});

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);





var Header = function Header(_ref) {
  var pathname = _ref.router.pathname;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-1871386056"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1871386056" + " " + ((pathname === "/" ? "is-active" : "") || "")
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1871386056" + " " + ((pathname === "/about" ? "is-active" : "") || "")
  }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/login"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1871386056" + " " + ((pathname === "/login" ? "is-active" : "") || "")
  }, "Login")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1871386056",
    css: ["header.jsx-1871386056{margin-bottom:25px;}", "a.jsx-1871386056{font-size:14px;margin-right:15px;-webkit-text-decoration:none;text-decoration:none;color:#22bad9;}", ".is-active.jsx-1871386056{-webkit-text-decoration:underline;text-decoration:underline;}"]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Header));

/***/ }),

/***/ 8:
/***/ (function(module, exports) {



/***/ })

/******/ });