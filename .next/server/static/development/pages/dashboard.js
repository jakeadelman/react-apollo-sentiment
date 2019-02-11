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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-664422056"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "664422056",
    css: "*{font-family:Menlo,Monaco,\"Lucida Console\",\"Liberation Mono\", \"DejaVu Sans Mono\",\"Bitstream Vera Sans Mono\",\"Courier New\", monospace,serif;}body{margin:0;padding:25px 50px;}a{color:#22bad9;}p{font-size:14px;line-height:24px;}article{margin:0 auto;max-width:650px;}button{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#22bad9;border:0;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5px 7px;}button:active{background-color:#1b9db7;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;}button:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS3VCLEFBSzJCLEFBR1QsQUFJSyxBQUdDLEFBSUQsQUFJSyxBQVFNLEFBSVosU0ExQkssSUEyQnBCLENBdkJBLEFBT2tCLENBSkMsVUFnQmdCLEVBdEJuQyxHQVdBLEVBSkEsNkRBTzJCLE1BUzNCLG1CQVJXLFNBQ0csV0FwQmQsQ0FxQmUsMEVBQ0csZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9BcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8bWFpbj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICoge1xuICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgXCJMdWNpZGEgQ29uc29sZVwiLCBcIkxpYmVyYXRpb24gTW9ub1wiLFxuICAgICAgICAgIFwiRGVqYVZ1IFNhbnMgTW9ub1wiLCBcIkJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsXG4gICAgICAgICAgbW9ub3NwYWNlLCBzZXJpZjtcbiAgICAgIH1cbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDI1cHggNTBweDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzIyYmFkOTtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgfVxuICAgICAgYXJ0aWNsZSB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDY1MHB4O1xuICAgICAgfVxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyYmFkOTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDVweCA3cHg7XG4gICAgICB9XG4gICAgICBidXR0b246YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiOWRiNztcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICAgICAgfVxuICAgICAgYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbWFpbj5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/App.js */"
  }));
});

/***/ }),

/***/ "./components/Dashboard/AddTerm.js":
/*!*****************************************!*\
  !*** ./components/Dashboard/AddTerm.js ***!
  \*****************************************/
/*! exports provided: default, addSt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSt", function() { return addSt; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation AddSearchTerm($searchterm: String!) {\n    addSearchTerm(searchterm: $searchterm)\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // import Popover from "./Popover";



function AddTerm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
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

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    id: "Popover1",
    onClick: function onClick() {
      setClicked(true);
      toggle();
    }
  }, "add term"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Popover"], {
    placement: "bottom",
    isOpen: popover,
    target: "Popover1"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["PopoverHeader"], null, "Add Term"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["PopoverBody"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopBody, null))));
}

var PopBody = function PopBody() {
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      newTerm = _useState6[0],
      setNewTerm = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      clicked = _useState8[0],
      setClicked = _useState8[1];

  console.log(newTerm);

  function handleClick() {
    console.log("was clicked");
    setClicked(true); // return <AddTodo term={newTerm} />;
  }

  if (!!clicked) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
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

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AddTodo, null));
};

var addSt = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

var AddTodo = function AddTodo() {
  var input;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
    mutation: addSt
  }, function (addSearchTerm, _ref2) {
    var data = _ref2.data;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-297400294"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: function onSubmit(e) {
        e.preventDefault();
        addSearchTerm({
          variables: {
            searchterm: input.value
          }
        });
        input.value = "";
        location.reload(true);
      },
      className: "jsx-297400294"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      ref: function ref(node) {
        input = node;
      },
      className: "jsx-297400294"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "submit",
      className: "jsx-297400294" + " " + "add-button"
    }, "Add")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "297400294",
      css: ".add-button.jsx-297400294{margin-top:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRkVGVybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvR2EsQUFHZ0MsZUFDakIiLCJmaWxlIjoiL1VzZXJzL21hbngvcHJvamVjdHMvaW5zdGFnYXVnZS9mcm9udGVuZC9jb21wb25lbnRzL0Rhc2hib2FyZC9BZGRUZXJtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE11dGF0aW9uIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbi8vIGltcG9ydCBQb3BvdmVyIGZyb20gXCIuL1BvcG92ZXJcIjtcbmltcG9ydCB7IEJ1dHRvbiwgUG9wb3ZlciwgUG9wb3ZlckhlYWRlciwgUG9wb3ZlckJvZHkgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkVGVybShwcm9wcykge1xuICBjb25zdCBbY2xpY2tlZCwgc2V0Q2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwb3BvdmVyLCBzZXRQb3BvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgaWYgKCFwb3BvdmVyKSB7XG4gICAgICBzZXRQb3BvdmVyKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRQb3BvdmVyKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGlkPVwiUG9wb3ZlcjFcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0Q2xpY2tlZCh0cnVlKTtcbiAgICAgICAgICB0b2dnbGUoKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgYWRkIHRlcm1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPFBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tXCIgaXNPcGVuPXtwb3BvdmVyfSB0YXJnZXQ9XCJQb3BvdmVyMVwiPlxuICAgICAgICA8UG9wb3ZlckhlYWRlcj5BZGQgVGVybTwvUG9wb3ZlckhlYWRlcj5cbiAgICAgICAgPFBvcG92ZXJCb2R5PlxuICAgICAgICAgIDxQb3BCb2R5IC8+XG4gICAgICAgIDwvUG9wb3ZlckJvZHk+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IFBvcEJvZHkgPSAoKSA9PiB7XG4gIGNvbnN0IFtuZXdUZXJtLCBzZXROZXdUZXJtXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjbGlja2VkLCBzZXRDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc29sZS5sb2cobmV3VGVybSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgY29uc29sZS5sb2coXCJ3YXMgY2xpY2tlZFwiKTtcbiAgICBzZXRDbGlja2VkKHRydWUpO1xuICAgIC8vIHJldHVybiA8QWRkVG9kbyB0ZXJtPXtuZXdUZXJtfSAvPjtcbiAgfVxuXG4gIGlmICghIWNsaWNrZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE11dGF0aW9uIG11dGF0aW9uPXthZGRTdH0+XG4gICAgICAgIHsoYWRkU2VhcmNoVGVybSwgeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICBzZXRDbGlja2VkKGZhbHNlKTtcbiAgICAgICAgICBhZGRTZWFyY2hUZXJtKHsgdmFyaWFibGVzOiB7IHNlYXJjaHRlcm06IG5ld1Rlcm0gfSB9KTtcbiAgICAgICAgfX1cbiAgICAgIDwvTXV0YXRpb24+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxBZGRUb2RvIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkU3QgPSBncWxgXG4gIG11dGF0aW9uIEFkZFNlYXJjaFRlcm0oJHNlYXJjaHRlcm06IFN0cmluZyEpIHtcbiAgICBhZGRTZWFyY2hUZXJtKHNlYXJjaHRlcm06ICRzZWFyY2h0ZXJtKVxuICB9XG5gO1xuXG5jb25zdCBBZGRUb2RvID0gKCkgPT4ge1xuICBsZXQgaW5wdXQ7XG5cbiAgcmV0dXJuIChcbiAgICA8TXV0YXRpb24gbXV0YXRpb249e2FkZFN0fT5cbiAgICAgIHsoYWRkU2VhcmNoVGVybSwgeyBkYXRhIH0pID0+IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2UgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGFkZFNlYXJjaFRlcm0oeyB2YXJpYWJsZXM6IHsgc2VhcmNodGVybTogaW5wdXQudmFsdWUgfSB9KTtcbiAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gbm9kZTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFkZC1idXR0b25cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAuYWRkLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L011dGF0aW9uPlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/Dashboard/AddTerm.js */"
    }));
  });
};

/***/ }),

/***/ "./components/Dashboard/DashInitialTerms.js":
/*!**************************************************!*\
  !*** ./components/Dashboard/DashInitialTerms.js ***!
  \**************************************************/
/*! exports provided: fetchTweetsQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTweetsQuery", function() { return fetchTweetsQuery; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DashMain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DashMain */ "./components/Dashboard/DashMain.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../App */ "./components/App.js");
/* harmony import */ var _Header2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Header2 */ "./components/Header2.js");
/* harmony import */ var _AddTerm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddTerm */ "./components/Dashboard/AddTerm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_8__);


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query fetchTerms {\n    fetchTerms {\n      id\n      term\n    }\n  }\n"]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








 // import SentimentModule from "./SentimentModule";

var DashInitialTerms =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DashInitialTerms, _React$Component);

  function DashInitialTerms(props) {
    var _this;

    _classCallCheck(this, DashInitialTerms);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DashInitialTerms).call(this, props));
    _this.state = {
      allTerms: []
    };
    _this.toggleTerm = _this.toggleTerm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.mapTerms = _this.mapTerms.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DashInitialTerms, [{
    key: "toggleTerm",
    value: function toggleTerm(term) {
      this.setState({
        term: term
      });
      console.log(this.state);
    }
  }, {
    key: "mapTerms",
    value: function mapTerms(allterms) {
      var _this2 = this;

      allterms.map(function (term) {
        _this2.state.allTerms.push(term.term);
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      // console.log(e.target.value);
      this.setState({
        term: e.target.value
      });
      console.log(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: fetchTweetsQuery
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "no data loaded");
        if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading");

        if (!_this3.state.allTerms[0]) {
          _this3.toggleTerm(data.fetchTerms[0].term);

          _this3.mapTerms(data.fetchTerms);

          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "loading");
        }

        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-1554724229" + " " + "dash-main-container"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-1554724229" + " " + "pagination-list"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
          className: "jsx-1554724229"
        }, _this3.state.allTerms.map(function (term) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
            className: "jsx-1554724229" + " " + "pagination-list-item"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            value: term,
            onClick: _this3.handleClick,
            className: "jsx-1554724229" + " " + "pagination-button"
          }, term));
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          className: "jsx-1554724229" + " " + "pagination-list-item"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "jsx-1554724229" + " " + "pagination-button"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddTerm__WEBPACK_IMPORTED_MODULE_7__["default"], null))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DashMain__WEBPACK_IMPORTED_MODULE_4__["default"], {
          initialTerm: _this3.state.term
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "1554724229",
          css: ".pagination-list-item.jsx-1554724229{float:left;list-style-type:none;margin:2px;}.pagination-button.jsx-1554724229{border-radius:2px;}.dash-main-container.jsx-1554724229{display:block;max-width:50%;margin:3em auto 3em auto;}.dash-main-table.jsx-1554724229{display:block;}.pagination-list.jsx-1554724229{display:inline-block;}.outer-sent.jsx-1554724229{margin:0;}@media only screen and (max-width:960px){.dash-main-container.jsx-1554724229{max-width:85%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaEluaXRpYWxUZXJtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RWlCLEFBS2dDLEFBS08sQUFHSixBQUtBLEFBR08sQUFHWixBQUtPLFNBSmxCLEVBbkJ1QixHQVFQLEFBS2hCLEFBV0UsSUFuQkYsR0FXQSxPQVAyQixJQVJkLFdBQ2IsVUFRQSIsImZpbGUiOiIvVXNlcnMvbWFueC9wcm9qZWN0cy9pbnN0YWdhdWdlL2Zyb250ZW5kL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hJbml0aWFsVGVybXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgRGFzaE1haW4gZnJvbSBcIi4vRGFzaE1haW5cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL0FwcFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vSGVhZGVyMlwiO1xuaW1wb3J0IEFkZFRlcm0gZnJvbSBcIi4vQWRkVGVybVwiO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiwgUGFnaW5hdGlvbkl0ZW0sIFBhZ2luYXRpb25MaW5rIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbi8vIGltcG9ydCBTZW50aW1lbnRNb2R1bGUgZnJvbSBcIi4vU2VudGltZW50TW9kdWxlXCI7XG5cbmNsYXNzIERhc2hJbml0aWFsVGVybXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWxsVGVybXM6IFtdXG4gICAgfTtcbiAgICB0aGlzLnRvZ2dsZVRlcm0gPSB0aGlzLnRvZ2dsZVRlcm0uYmluZCh0aGlzKTtcbiAgICB0aGlzLm1hcFRlcm1zID0gdGhpcy5tYXBUZXJtcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICB0b2dnbGVUZXJtKHRlcm0pIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGVybTogdGVybSB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIG1hcFRlcm1zKGFsbHRlcm1zKSB7XG4gICAgYWxsdGVybXMubWFwKHRlcm0gPT4ge1xuICAgICAgdGhpcy5zdGF0ZS5hbGxUZXJtcy5wdXNoKHRlcm0udGVybSk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXJtOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFF1ZXJ5IHF1ZXJ5PXtmZXRjaFR3ZWV0c1F1ZXJ5fT5cbiAgICAgICAgeyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2Pm5vIGRhdGEgbG9hZGVkPC9kaXY+O1xuICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+O1xuXG4gICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmFsbFRlcm1zWzBdKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVRlcm0oZGF0YS5mZXRjaFRlcm1zWzBdLnRlcm0pO1xuICAgICAgICAgICAgdGhpcy5tYXBUZXJtcyhkYXRhLmZldGNoVGVybXMpO1xuICAgICAgICAgICAgcmV0dXJuIDxkaXY+bG9hZGluZzwvZGl2PjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaC1tYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb24tbGlzdFwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsbFRlcm1zLm1hcCh0ZXJtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Rlcm19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2luYXRpb24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Rlcm19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxBZGRUZXJtIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8RGFzaE1haW4gaW5pdGlhbFRlcm09e3RoaXMuc3RhdGUudGVybX0gLz5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgLmRhc2gtbWFpbi10YWJsZSB7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAucGFnaW5hdGlvbi1saXN0LWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5wYWdpbmF0aW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5kYXNoLW1haW4tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDNlbSBhdXRvIDNlbSBhdXRvO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLmRhc2gtbWFpbi10YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLnBhZ2luYXRpb24tbGlzdCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5vdXRlci1zZW50IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC5kYXNoLW1haW4tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDg1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9RdWVyeT5cbiAgICApO1xuICB9XG59XG5cbi8vIC5vdXRlci1zZW50IHtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBmbG9hdDogbGVmdDtcbi8vIH1cblxuZXhwb3J0IGNvbnN0IGZldGNoVHdlZXRzUXVlcnkgPSBncWxgXG4gIHF1ZXJ5IGZldGNoVGVybXMge1xuICAgIGZldGNoVGVybXMge1xuICAgICAgaWRcbiAgICAgIHRlcm1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPEFwcD5cbiAgICA8SGVhZGVyIC8+XG4gICAgPERhc2hJbml0aWFsVGVybXMgLz5cbiAgPC9BcHA+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/Dashboard/DashInitialTerms.js */"
        }));
      });
    }
  }]);

  return DashInitialTerms;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component); // .outer-sent {
//   display: inline-block;
//   float: left;
// }


var fetchTweetsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header2__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DashInitialTerms, null));
});

/***/ }),

/***/ "./components/Dashboard/DashMain.js":
/*!******************************************!*\
  !*** ./components/Dashboard/DashMain.js ***!
  \******************************************/
/*! exports provided: default, fetchTweetsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTweetsQuery", function() { return fetchTweetsQuery; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query fetchTweets($query: String!) {\n    fetchTweets(query: $query) {\n      id\n      timestamp\n      tweetId\n      text\n      polarity\n    }\n\n    getDailyTweet(query: $query) {\n      day\n      negative\n      positive\n      total\n    }\n  }\n"]);

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




 // import SentimentModule from "./SentimentModule";

var dateformat = __webpack_require__(/*! dateformat */ "dateformat");

var DashMain =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DashMain, _React$Component);

  function DashMain(props) {
    var _this;

    _classCallCheck(this, DashMain);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DashMain).call(this, props));
    _this.state = {
      term: _this.props.initialTerm
    };
    return _this;
  }

  _createClass(DashMain, [{
    key: "componentDidMount",
    value: function componentDidMount() {// console.log(this.props.initialTerm);
      // console.log(this.props.initialTerm);
      // this.setState({ term: this.props.initialTerm });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log(nextProps.initialTerm);

      if (nextProps.initialTerm !== this.state.term) {
        this.setState({
          term: nextProps.initialTerm
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.state.term) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "loading");
      } else {
        var fetchTweetsVars = {
          query: this.state.term
        };
        console.log(fetchTweetsVars);
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
          query: fetchTweetsQuery,
          variables: fetchTweetsVars
        }, function (_ref) {
          var loading = _ref.loading,
              error = _ref.error,
              data = _ref.data;
          if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "no data loaded.. there may have been an error please refresh the page");
          if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading");
          console.log(data.getDailyTweet);
          var pos = data.getDailyTweet.positive / data.getDailyTweet.total * 100;
          var neg = data.getDailyTweet.negative / data.getDailyTweet.total * 100;
          var trans = 140 - pos;
          console.log(pos, neg);
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "dash-main-table"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-2789878193"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
            className: "jsx-2789878193"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thread", {
            className: "jsx-2789878193"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
            className: "jsx-2789878193" + " " + "top-row"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
            className: "jsx-2789878193" + " " + "tr-heading"
          }, "query: ", _this2.props.initialTerm), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
            className: "jsx-2789878193" + " " + "bar-heading tr-heading"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
            class: "chart",
            width: "450",
            height: "40",
            "aria-labelledby": "title desc",
            role: "img",
            className: "jsx-2789878193"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
            class: "bar",
            transform: "translate(140,4)",
            className: "jsx-2789878193"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
            width: neg,
            height: "19",
            className: "jsx-2789878193" + " " + "rect1"
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
            x: neg + 5,
            y: "9.5",
            dy: ".35em",
            className: "jsx-2789878193" + " " + "texto"
          }, parseInt(neg), "%"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
            x: "130",
            y: "9.5",
            dy: ".35em",
            className: "jsx-2789878193" + " " + "texto"
          }, "24 hour sentiment")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
            class: "bar2",
            transform: "translate(".concat(trans, ",4)"),
            className: "jsx-2789878193"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
            width: pos,
            height: "19",
            className: "jsx-2789878193" + " " + "rect2"
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
            x: "-35",
            y: "9.5",
            dy: ".35em",
            className: "jsx-2789878193" + " " + "texto"
          }, parseInt(pos), "%")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
            className: "jsx-2789878193"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-2789878193"
          }, data.fetchTweets.map(function (tweet) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
              className: "jsx-2789878193" + " " + "data"
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
              scope: "row",
              className: "jsx-2789878193" + " " + "hdata-".concat(tweet.polarity)
            }, dateformat(tweet.timestamp, "shortTime")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
              className: "jsx-2789878193" + " " + "tdata-".concat(tweet.polarity)
            }, tweet.text));
          })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
            styleId: "2789878193",
            css: ".dash-main-table.jsx-2789878193{max-width:50%;display:block;margin:auto;}table.jsx-2789878193{table-layout:fixed;width:100% !important;}.hdata-1.jsx-2789878193{background-color:rgba(127,209,185,0.35);}.hdata-0.jsx-2789878193{background-color:rgba(127,209,185,0.35);}.data.jsx-2789878193{word-wrap:break-word;}.tdata-1.jsx-2789878193{background-color:rgba(127,209,185,0.44);}.tdata-0.jsx-2789878193{background-color:rgba(247,175,157,0.44);}td.jsx-2789878193{word-break:break-all;margin:10px;padding:10px;border-radius:10px;}th.jsx-2789878193{margin:10px;min-width:5em;padding:0.2em;border-radius:10px;}tr.jsx-2789878193{margin:10px;padding:5px;}.tr-heading.jsx-2789878193{border:none;border-radius:5px;min-width:5em;padding:0.4em;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#26c2dd;color:white;}.texto.jsx-2789878193{fill:white;}.bar-heading.jsx-2789878193{margin-left:auto;margin-right:0;overflow:overlay;}.rect1.jsx-2789878193{fill:#f7af9d;}.rect2.jsx-2789878193{fill:#7fd1b9;}tr.jsx-2789878193{margin:10px;}tr.top-row.jsx-2789878193{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaE1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkhxQixBQUd1QyxBQUtLLEFBSXdCLEFBR0EsQUFHdEIsQUFHc0IsQUFHQSxBQUd0QixBQU1ULEFBT0EsQUFJQSxBQVNELEFBR00sQUFLSixBQUdBLEFBR0QsQUFJQyxXQWpCZixDQXBCZ0IsQUFPRixBQUlNLEFBdUJwQixDQU5BLEFBR0EsQ0E3RGdCLEdBcURDLEVBaERPLEVBVXhCLEFBU2MsR0FjZCxFQVBnQixFQTlCRixFQXlDRSxFQVlHLENBN0JKLE9BdkJmLEFBT0EsQUFHQSxBQU1BLEFBR0EsQUFZcUIsQ0EzQnJCLEdBcUNnQixFQWpCSyxHQTZCckIsU0FYcUIsQ0FWckIsTUFQQSxTQXlDQSw2RUF2QjJCLHlCQUNiLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL21hbngvcHJvamVjdHMvaW5zdGFnYXVnZS9mcm9udGVuZC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoTWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBzZXRTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuLy8gaW1wb3J0IFNlbnRpbWVudE1vZHVsZSBmcm9tIFwiLi9TZW50aW1lbnRNb2R1bGVcIjtcbmNvbnN0IGRhdGVmb3JtYXQgPSByZXF1aXJlKFwiZGF0ZWZvcm1hdFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyB0ZXJtOiB0aGlzLnByb3BzLmluaXRpYWxUZXJtIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5pbml0aWFsVGVybSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5pbml0aWFsVGVybSk7XG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7IHRlcm06IHRoaXMucHJvcHMuaW5pdGlhbFRlcm0gfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnNvbGUubG9nKG5leHRQcm9wcy5pbml0aWFsVGVybSk7XG4gICAgaWYgKG5leHRQcm9wcy5pbml0aWFsVGVybSAhPT0gdGhpcy5zdGF0ZS50ZXJtKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGVybTogbmV4dFByb3BzLmluaXRpYWxUZXJtIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUudGVybSkge1xuICAgICAgcmV0dXJuIDxkaXY+bG9hZGluZzwvZGl2PjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmV0Y2hUd2VldHNWYXJzID0ge1xuICAgICAgICBxdWVyeTogdGhpcy5zdGF0ZS50ZXJtXG4gICAgICB9O1xuICAgICAgY29uc29sZS5sb2coZmV0Y2hUd2VldHNWYXJzKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxRdWVyeSBxdWVyeT17ZmV0Y2hUd2VldHNRdWVyeX0gdmFyaWFibGVzPXtmZXRjaFR3ZWV0c1ZhcnN9PlxuICAgICAgICAgIHsoeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIG5vIGRhdGEgbG9hZGVkLi4gdGhlcmUgbWF5IGhhdmUgYmVlbiBhbiBlcnJvciBwbGVhc2UgcmVmcmVzaFxuICAgICAgICAgICAgICAgICAgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+O1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5nZXREYWlseVR3ZWV0KTtcbiAgICAgICAgICAgIGxldCBwb3MgPVxuICAgICAgICAgICAgICAoZGF0YS5nZXREYWlseVR3ZWV0LnBvc2l0aXZlIC8gZGF0YS5nZXREYWlseVR3ZWV0LnRvdGFsKSAqIDEwMDtcbiAgICAgICAgICAgIGxldCBuZWcgPVxuICAgICAgICAgICAgICAoZGF0YS5nZXREYWlseVR3ZWV0Lm5lZ2F0aXZlIC8gZGF0YS5nZXREYWlseVR3ZWV0LnRvdGFsKSAqIDEwMDtcbiAgICAgICAgICAgIGxldCB0cmFucyA9IDE0MCAtIHBvcztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvcywgbmVnKTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoLW1haW4tdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8dGhyZWFkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ0b3Atcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidHItaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeToge3RoaXMucHJvcHMuaW5pdGlhbFRlcm19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJhci1oZWFkaW5nIHRyLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2hhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidGl0bGUgZGVzY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBjbGFzcz1cImJhclwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDAsNClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPXtuZWd9IGhlaWdodD1cIjE5XCIgY2xhc3NOYW1lPVwicmVjdDFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD17bmVnICsgNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjkuNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR5PVwiLjM1ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUludChuZWcpfSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9XCIxMzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5PVwiOS41XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHk9XCIuMzVlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjQgaG91ciBzZW50aW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgY2xhc3M9XCJiYXIyXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7dHJhbnN9LDQpYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD17cG9zfSBoZWlnaHQ9XCIxOVwiIGNsYXNzTmFtZT1cInJlY3QyXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD1cIi0zNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk9XCI5LjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkeT1cIi4zNWVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VJbnQocG9zKX0lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aHJlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZmV0Y2hUd2VldHMubWFwKHR3ZWV0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17YGRhdGFgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhkYXRhLSR7dHdlZXQucG9sYXJpdHl9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0ZWZvcm1hdCh0d2VldC50aW1lc3RhbXAsIFwic2hvcnRUaW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17YHRkYXRhLSR7dHdlZXQucG9sYXJpdHl9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHdlZXQudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgICAuZGFzaC1tYWluLXRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuaGRhdGEtMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjA5LCAxODUsIDAuMzUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuaGRhdGEtMCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjA5LCAxODUsIDAuMzUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuZGF0YSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC50ZGF0YS0xIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAyMDksIDE4NSwgMC40NCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC50ZGF0YS0wIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAxNzUsIDE1NywgMC40NCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMmVtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC50ci1oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC40ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YzJkZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLnRleHRvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuYmFyLWhlYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogb3ZlcmxheTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLnJlY3QxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICNmN2FmOWQ7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5yZWN0MiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjN2ZkMWI5O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgdHIudG9wLXJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9fVxuICAgICAgICA8L1F1ZXJ5PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoVHdlZXRzUXVlcnkgPSBncWxgXG4gIHF1ZXJ5IGZldGNoVHdlZXRzKCRxdWVyeTogU3RyaW5nISkge1xuICAgIGZldGNoVHdlZXRzKHF1ZXJ5OiAkcXVlcnkpIHtcbiAgICAgIGlkXG4gICAgICB0aW1lc3RhbXBcbiAgICAgIHR3ZWV0SWRcbiAgICAgIHRleHRcbiAgICAgIHBvbGFyaXR5XG4gICAgfVxuXG4gICAgZ2V0RGFpbHlUd2VldChxdWVyeTogJHF1ZXJ5KSB7XG4gICAgICBkYXlcbiAgICAgIG5lZ2F0aXZlXG4gICAgICBwb3NpdGl2ZVxuICAgICAgdG90YWxcbiAgICB9XG4gIH1cbmA7XG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/Dashboard/DashMain.js */"
          })));
        });
      }
    }
  }]);

  return DashMain;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


var fetchTweetsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

/***/ }),

/***/ "./components/Header2.js":
/*!*******************************!*\
  !*** ./components/Header2.js ***!
  \*******************************/
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
    css: "header.jsx-1871386056{margin-bottom:25px;}a.jsx-1871386056{font-size:14px;margin-right:15px;-webkit-text-decoration:none;text-decoration:none;color:#22bad9;}.is-active.jsx-1871386056{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9IZWFkZXIyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNnQixBQUc0QixBQUdKLEFBTVcsZUFMUixJQUhwQixjQUl1QiwyQkFLdkIsdUJBSmdCLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9IZWFkZXIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBIZWFkZXIgPSAoeyByb3V0ZXI6IHsgcGF0aG5hbWUgfSB9KSA9PiAoXG4gIDxoZWFkZXI+XG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9cIj5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09IFwiL1wiID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJ9PkhvbWU8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09IFwiL2Fib3V0XCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIn0+QWJvdXQ8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09IFwiL2xvZ2luXCIgPyBcImlzLWFjdGl2ZVwiIDogXCJcIn0+TG9naW48L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICMyMmJhZDk7XG4gICAgICB9XG4gICAgICAuaXMtYWN0aXZlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2hlYWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSGVhZGVyKTtcbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/Header2.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Header));

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Dashboard_DashInitialTerms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Dashboard/DashInitialTerms */ "./components/Dashboard/DashInitialTerms.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // import DashMain from "../components/DashMain";
// import FacebookLogin from "../components/FacebookLogin";



var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dashboard_DashInitialTerms__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/dashboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/dashboard.js */"./pages/dashboard.js");


/***/ }),

/***/ "dateformat":
/*!*****************************!*\
  !*** external "dateformat" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dateformat");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

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

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

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
//# sourceMappingURL=dashboard.js.map