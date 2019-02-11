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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {



/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);


/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
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
var external_react_apollo_ = __webpack_require__(4);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(5);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Dashboard/DashMain.js


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query fetchTweets($query: String!) {\n    fetchTweets(query: $query) {\n      id\n      tweetId\n      text\n      polarity\n    }\n  }\n"]);

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






var DashMain_DashMain =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DashMain, _React$Component);

  function DashMain(props) {
    _classCallCheck(this, DashMain);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashMain).call(this, props));
  }

  _createClass(DashMain, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props.initialTerm);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var fetchTweetsVars = {
        query: this.props.initialTerm
      };
      return external_react_default.a.createElement(external_react_apollo_["Query"], {
        query: fetchTweetsQuery,
        variables: fetchTweetsVars
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (error) return external_react_default.a.createElement("div", null, "no data loaded");
        if (loading) return external_react_default.a.createElement("div", null, "Loading");
        return external_react_default.a.createElement("div", {
          className: "dash-main-table"
        }, external_react_default.a.createElement("div", {
          className: "jsx-3035299306"
        }, external_react_default.a.createElement("table", {
          className: "jsx-3035299306"
        }, external_react_default.a.createElement("thread", {
          className: "jsx-3035299306"
        }, external_react_default.a.createElement("tr", {
          className: "jsx-3035299306"
        }, external_react_default.a.createElement("th", {
          className: "jsx-3035299306"
        }, "query: ", _this.props.initialTerm))), external_react_default.a.createElement("tbody", {
          className: "jsx-3035299306"
        }, external_react_default.a.createElement("div", {
          className: "jsx-3035299306"
        }, data.fetchTweets.map(function (tweet) {
          return external_react_default.a.createElement("tr", {
            className: "jsx-3035299306" + " " + "data"
          }, external_react_default.a.createElement("th", {
            scope: "row",
            className: "jsx-3035299306"
          }, "text"), external_react_default.a.createElement("td", {
            className: "jsx-3035299306"
          }, tweet.text));
        })))), external_react_default.a.createElement(style_default.a, {
          styleId: "3035299306",
          css: [".dash-main-table.jsx-3035299306{max-width:50%;display:block;margin:auto;}", "table.jsx-3035299306{table-layout:fixed;width:100% !important;}", ".data.jsx-3035299306{display:inline-table;word-wrap:break-word;}", "td.jsx-3035299306{word-break:break-all;}"]
        })));
      });
    }
  }]);

  return DashMain;
}(external_react_default.a.Component);


var fetchTweetsQuery = external_graphql_tag_default()(_templateObject()); // const DashMainWrapper = withRouter(props => {
//   if (!!props.router.query) {
//     console.log("ROUTER QUERY TERM", props.router.query);
//     return (
//       <div>
//         <DashMain initialTerm={props.router.query.term} />
//       </div>
//     );
//   } else {
//     console.log("INITIAL TERM", props.initialTerm);
//     return (
//       <div>
//         <DashMain initialTerm={props.initialTerm} />
//       </div>
//     );
//   }
// });
// export default DashMainWrapper;
// const Page = props => (
//   <div>
//     <DashMainWrapper initialTerm={props.initialTerm} />
//   </div>
// );
// export default Page;
// EXTERNAL MODULE: ./components/App.js
var App = __webpack_require__(6);

// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(7);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(9);

// CONCATENATED MODULE: ./components/Dashboard/AddTerm.js
function AddTerm_templateObject() {
  var data = AddTerm_taggedTemplateLiteral(["\n  mutation AddSearchTerm($searchterm: String!) {\n    addSearchTerm(searchterm: $searchterm)\n  }\n"]);

  AddTerm_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function AddTerm_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // import Popover from "./Popover";



function AddTerm(props) {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      popover = _useState4[0],
      setPopover = _useState4[1];

  function toggle() {
    if (!popover) {
      setPopover(true);
    } else {
      setPopover(false);
    }
  }

  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("button", {
    id: "Popover1",
    onClick: function onClick() {
      setClicked(true);
      toggle();
    }
  }, "add term"), external_react_default.a.createElement(external_reactstrap_["Popover"], {
    placement: "bottom",
    isOpen: popover,
    target: "Popover1"
  }, external_react_default.a.createElement(external_reactstrap_["PopoverHeader"], null, "Popover Title"), external_react_default.a.createElement(external_reactstrap_["PopoverBody"], null, external_react_default.a.createElement(AddTerm_PopBody, null))));
}

var AddTerm_PopBody = function PopBody() {
  var _useState5 = Object(external_react_["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      newTerm = _useState6[0],
      setNewTerm = _useState6[1];

  var _useState7 = Object(external_react_["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      clicked = _useState8[0],
      setClicked = _useState8[1];

  console.log(newTerm);

  function handleClick() {
    console.log("was clicked");
    setClicked(true); // return <AddTodo term={newTerm} />;
  }

  if (!!clicked) {
    return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
      mutation: addSt
    }, function (addSearchTerm, _ref) {
      var data = _ref.data;
      setClicked(false);
      addSearchTerm({
        variables: {
          searchterm: newTerm
        }
      });
    });
  }

  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(AddTerm_AddTodo, null));
};

var addSt = external_graphql_tag_default()(AddTerm_templateObject());

var AddTerm_AddTodo = function AddTodo() {
  var input;
  return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
    mutation: addSt
  }, function (addSearchTerm, _ref2) {
    var data = _ref2.data;
    return external_react_default.a.createElement("div", null, external_react_default.a.createElement("form", {
      onSubmit: function onSubmit(e) {
        e.preventDefault();
        addSearchTerm({
          variables: {
            searchterm: input.value
          }
        });
        input.value = "";
        location.reload(true);
      }
    }, external_react_default.a.createElement("input", {
      ref: function ref(node) {
        input = node;
      }
    }), external_react_default.a.createElement("button", {
      type: "submit"
    }, "Add Todo")));
  });
};
// CONCATENATED MODULE: ./components/Dashboard/DashInitialTerms.js


function DashInitialTerms_templateObject() {
  var data = DashInitialTerms_taggedTemplateLiteral(["\n  query fetchTerms {\n    fetchTerms {\n      id\n      term\n    }\n  }\n"]);

  DashInitialTerms_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function DashInitialTerms_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function DashInitialTerms_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DashInitialTerms_typeof = function _typeof(obj) { return typeof obj; }; } else { DashInitialTerms_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DashInitialTerms_typeof(obj); }

function DashInitialTerms_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DashInitialTerms_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DashInitialTerms_createClass(Constructor, protoProps, staticProps) { if (protoProps) DashInitialTerms_defineProperties(Constructor.prototype, protoProps); if (staticProps) DashInitialTerms_defineProperties(Constructor, staticProps); return Constructor; }

function DashInitialTerms_possibleConstructorReturn(self, call) { if (call && (DashInitialTerms_typeof(call) === "object" || typeof call === "function")) { return call; } return DashInitialTerms_assertThisInitialized(self); }

function DashInitialTerms_getPrototypeOf(o) { DashInitialTerms_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DashInitialTerms_getPrototypeOf(o); }

function DashInitialTerms_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DashInitialTerms_setPrototypeOf(subClass, superClass); }

function DashInitialTerms_setPrototypeOf(o, p) { DashInitialTerms_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DashInitialTerms_setPrototypeOf(o, p); }

function DashInitialTerms_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var DashInitialTerms_DashInitialTerms =
/*#__PURE__*/
function (_React$Component) {
  DashInitialTerms_inherits(DashInitialTerms, _React$Component);

  function DashInitialTerms() {
    var _getPrototypeOf2;

    var _this;

    DashInitialTerms_classCallCheck(this, DashInitialTerms);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = DashInitialTerms_possibleConstructorReturn(this, (_getPrototypeOf2 = DashInitialTerms_getPrototypeOf(DashInitialTerms)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(DashInitialTerms_assertThisInitialized(DashInitialTerms_assertThisInitialized(_this)), "state", {
      term: "",
      allTerms: []
    });

    return _this;
  }

  DashInitialTerms_createClass(DashInitialTerms, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(external_react_apollo_["Query"], {
        query: DashInitialTerms_fetchTweetsQuery
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (error) return external_react_default.a.createElement("div", null, "no data loaded");
        if (loading) return external_react_default.a.createElement("div", null, "Loading");
        console.log(data.fetchTerms);

        if (!_this2.state.term) {
          _this2.setState({
            term: data.fetchTerms[0].term
          });
        }

        if (!_this2.state.allTerms[0]) {
          data.fetchTerms.map(function (term) {
            _this2.state.allTerms.push(term.term);
          });
        }

        return external_react_default.a.createElement("div", {
          className: "jsx-3704086318" + " " + "dash-main-container"
        }, external_react_default.a.createElement("div", {
          className: "jsx-3704086318" + " " + "pagination-list"
        }, external_react_default.a.createElement("ul", {
          className: "jsx-3704086318"
        }, _this2.state.allTerms.map(function (term) {
          return external_react_default.a.createElement("li", {
            className: "jsx-3704086318" + " " + "pagination-list-item"
          }, external_react_default.a.createElement("button", {
            onClick: function onClick() {
              _this2.setState({
                term: term
              });
            },
            className: "jsx-3704086318" + " " + "pagination-button"
          }, term));
        }), external_react_default.a.createElement("li", {
          className: "jsx-3704086318" + " " + "pagination-list-item"
        }, external_react_default.a.createElement("button", {
          className: "jsx-3704086318" + " " + "pagination-button"
        }, external_react_default.a.createElement(AddTerm, null))))), external_react_default.a.createElement(DashMain_DashMain, {
          initialTerm: _this2.state.term
        }), external_react_default.a.createElement(style_default.a, {
          styleId: "3704086318",
          css: [".pagination-list-item.jsx-3704086318{float:left;list-style-type:none;margin:2px;}", ".pagination-button.jsx-3704086318{border-radius:2px;}", ".dash-main-container.jsx-3704086318{display:block;max-width:50%;margin:3em auto 3em auto;}", ".dash-main-table.jsx-3704086318{display:block;}", ".pagination-list.jsx-3704086318{display:inline-block;}", "@media only screen and (max-width:960px){.dash-main-container.jsx-3704086318{max-width:85%;}}"]
        }));
      });
    }
  }]);

  return DashInitialTerms;
}(external_react_default.a.Component);

var DashInitialTerms_fetchTweetsQuery = external_graphql_tag_default()(DashInitialTerms_templateObject());
/* harmony default export */ var Dashboard_DashInitialTerms = (function () {
  return external_react_default.a.createElement(App["a" /* default */], null, external_react_default.a.createElement(Header["a" /* default */], null), external_react_default.a.createElement(DashInitialTerms_DashInitialTerms, null));
});
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

 // import DashMain from "../components/DashMain";
// import FacebookLogin from "../components/FacebookLogin";



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
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Dashboard_DashInitialTerms, null));
    }
  }]);

  return _default;
}(external_react_default.a.Component);



/***/ })
/******/ ]);