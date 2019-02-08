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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
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

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("react-facebook-login");

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(36);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("react-facebook");

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(5);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./components/DashMain.js


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query fetchTweets($query: String!) {\n    fetchTweets(query: $query) {\n      id\n      tweetId\n      text\n      score\n      comparative\n    }\n  }\n"]);

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





var DashMain_default =
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
      return external_react_default.a.createElement(external_react_apollo_["Query"], {
        query: fetchTweetsQuery,
        variables: fetchTweetsVars
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (error) return external_react_default.a.createElement("div", null, "no data loaded");
        if (loading) return external_react_default.a.createElement("div", null, "Loading"); //   console.log(data.fetchTweets);
        // const areMorePosts = allPosts.length < _allPostsMeta.count;

        return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
          className: "jsx-182642247" + " " + "dash-main-table"
        }, external_react_default.a.createElement("table", {
          className: "jsx-182642247"
        }, external_react_default.a.createElement("thread", {
          className: "jsx-182642247"
        }, external_react_default.a.createElement("tr", {
          className: "jsx-182642247"
        }, external_react_default.a.createElement("th", {
          className: "jsx-182642247"
        }, "query: bitcoin"))), external_react_default.a.createElement("tbody", {
          className: "jsx-182642247"
        }, external_react_default.a.createElement("div", {
          className: "jsx-182642247"
        }, data.fetchTweets.map(function (tweet) {
          return external_react_default.a.createElement("tr", {
            className: "jsx-182642247"
          }, external_react_default.a.createElement("th", {
            scope: "row",
            className: "jsx-182642247"
          }, "text"), external_react_default.a.createElement("td", {
            className: "jsx-182642247"
          }, tweet.text));
        })))), external_react_default.a.createElement(style_default.a, {
          styleId: "182642247",
          css: [".dash-main-table.jsx-182642247{max-width:50%;margin:3em auto 3em auto;}"]
        })));
      });
    }
  }]);

  return _default;
}(external_react_default.a.Component);


var fetchTweetsQuery = external_graphql_tag_default()(_templateObject());
var fetchTweetsVars = {
  query: "bitcoin"
}; // export default function PostList () {
//   return (
//   )
// }
// function loadMorePosts (allPosts, fetchMore) {
//   fetchMore({
//     variables: {
//       skip: allPosts.length
//     },
//     updateQuery: (previousResult, { fetchMoreResult }) => {
//       if (!fetchMoreResult) {
//         return previousResult
//       }
//       return Object.assign({}, previousResult, {
//         // Append the new posts results to the old one
//         allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
//       })
//     }
//   })
// }
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(20);

// EXTERNAL MODULE: external "react-facebook-login"
var external_react_facebook_login_ = __webpack_require__(13);
var external_react_facebook_login_default = /*#__PURE__*/__webpack_require__.n(external_react_facebook_login_);

// EXTERNAL MODULE: external "react-facebook"
var external_react_facebook_ = __webpack_require__(21);

// CONCATENATED MODULE: ./components/FacebookLogin.js


function FacebookLogin_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FacebookLogin_typeof = function _typeof(obj) { return typeof obj; }; } else { FacebookLogin_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FacebookLogin_typeof(obj); }

function FacebookLogin_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FacebookLogin_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FacebookLogin_createClass(Constructor, protoProps, staticProps) { if (protoProps) FacebookLogin_defineProperties(Constructor.prototype, protoProps); if (staticProps) FacebookLogin_defineProperties(Constructor, staticProps); return Constructor; }

function FacebookLogin_possibleConstructorReturn(self, call) { if (call && (FacebookLogin_typeof(call) === "object" || typeof call === "function")) { return call; } return FacebookLogin_assertThisInitialized(self); }

function FacebookLogin_getPrototypeOf(o) { FacebookLogin_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FacebookLogin_getPrototypeOf(o); }

function FacebookLogin_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FacebookLogin_setPrototypeOf(subClass, superClass); }

function FacebookLogin_setPrototypeOf(o, p) { FacebookLogin_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FacebookLogin_setPrototypeOf(o, p); }

function FacebookLogin_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var FacebookLogin_default =
/*#__PURE__*/
function (_React$Component) {
  FacebookLogin_inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    FacebookLogin_classCallCheck(this, _default);

    _this = FacebookLogin_possibleConstructorReturn(this, FacebookLogin_getPrototypeOf(_default).call(this, props));

    _defineProperty(FacebookLogin_assertThisInitialized(FacebookLogin_assertThisInitialized(_this)), "responseFacebook", function (response) {
      console.log(response);
    });

    _this.responseFacebook = _this.responseFacebook.bind(FacebookLogin_assertThisInitialized(FacebookLogin_assertThisInitialized(_this)));
    return _this;
  }

  FacebookLogin_createClass(_default, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-2857769890"
      }, external_react_default.a.createElement("div", {
        className: "jsx-2857769890" + " " + "facebook-login"
      }, external_react_default.a.createElement(external_react_facebook_login_default.a, {
        appId: "353317018730609",
        autoLoad: true,
        fields: "name,email,picture",
        callback: this.responseFacebook
      })), external_react_default.a.createElement(style_default.a, {
        styleId: "2857769890",
        css: [".facebook-login.jsx-2857769890{margin:20px;}"]
      }));
    }
  }]);

  return _default;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./pages/dashboard.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dashboard_default; });
function dashboard_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dashboard_typeof = function _typeof(obj) { return typeof obj; }; } else { dashboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dashboard_typeof(obj); }

function dashboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dashboard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dashboard_createClass(Constructor, protoProps, staticProps) { if (protoProps) dashboard_defineProperties(Constructor.prototype, protoProps); if (staticProps) dashboard_defineProperties(Constructor, staticProps); return Constructor; }

function dashboard_possibleConstructorReturn(self, call) { if (call && (dashboard_typeof(call) === "object" || typeof call === "function")) { return call; } return dashboard_assertThisInitialized(self); }

function dashboard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dashboard_getPrototypeOf(o) { dashboard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dashboard_getPrototypeOf(o); }

function dashboard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dashboard_setPrototypeOf(subClass, superClass); }

function dashboard_setPrototypeOf(o, p) { dashboard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dashboard_setPrototypeOf(o, p); }





var dashboard_default =
/*#__PURE__*/
function (_React$Component) {
  dashboard_inherits(_default, _React$Component);

  function _default(props) {
    dashboard_classCallCheck(this, _default);

    return dashboard_possibleConstructorReturn(this, dashboard_getPrototypeOf(_default).call(this, props));
  }

  dashboard_createClass(_default, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(FacebookLogin_default, null), external_react_default.a.createElement(DashMain_default, null));
    }
  }]);

  return _default;
}(external_react_default.a.Component);



/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ })

/******/ });