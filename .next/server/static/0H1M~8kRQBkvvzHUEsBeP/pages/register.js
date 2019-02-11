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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
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
/* 9 */,
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
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
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

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(4);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(5);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./components/ErrorMessage.js


/* harmony default export */ var ErrorMessage = (function (_ref) {
  var message = _ref.message;
  return external_react_default.a.createElement("aside", {
    className: "jsx-160792485"
  }, message, external_react_default.a.createElement(style_default.a, {
    styleId: "160792485",
    css: ["aside.jsx-160792485{padding:1.5em;font-size:14px;color:white;background-color:red;}"]
  }));
});
// CONCATENATED MODULE: ./components/PostUpvoter.js


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      mutation updatePost($id: ID!, $votes: Int) {\n        updatePost(id: $id, votes: $votes) {\n          id\n          __typename\n          votes\n        }\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




function PostUpvoter(_ref) {
  var votes = _ref.votes,
      id = _ref.id;
  return external_react_default.a.createElement(external_react_apollo_["ApolloConsumer"], null, function (client) {
    return external_react_default.a.createElement("button", {
      onClick: function onClick() {
        return upvotePost(votes, id, client);
      },
      className: "jsx-3320733804"
    }, votes, external_react_default.a.createElement(style_default.a, {
      styleId: "3320733804",
      css: ["button.jsx-3320733804{background-color:transparent;border:1px solid #e4e4e4;color:#000;}", "button.jsx-3320733804:active{background-color:transparent;}", "button.jsx-3320733804:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-color:transparent transparent #000000 transparent;border-style:solid;border-width:0 4px 6px 4px;content:\"\";height:0;margin-right:5px;width:0;}"]
    }));
  });
}

function upvotePost(votes, id, client) {
  client.mutate({
    mutation: external_graphql_tag_default()(_templateObject()),
    variables: {
      id: id,
      votes: votes + 1
    },
    optimisticResponse: {
      __typename: "Mutation",
      updatePost: {
        __typename: "Post",
        id: id,
        votes: votes + 1
      }
    }
  });
}
// CONCATENATED MODULE: ./components/PostList.js



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function PostList_templateObject() {
  var data = PostList_taggedTemplateLiteral(["\n  query allPosts($first: Int!, $skip: Int!) {\n    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n    _allPostsMeta {\n      count\n    }\n  }\n"]);

  PostList_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function PostList_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var allPostsQuery = external_graphql_tag_default()(PostList_templateObject());
var allPostsQueryVars = {
  skip: 0,
  first: 10
};
function PostList() {
  return external_react_default.a.createElement(external_react_apollo_["Query"], {
    query: allPostsQuery,
    variables: allPostsQueryVars
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        _ref$data = _ref.data,
        allPosts = _ref$data.allPosts,
        _allPostsMeta = _ref$data._allPostsMeta,
        fetchMore = _ref.fetchMore;
    if (error) return external_react_default.a.createElement(ErrorMessage, {
      message: "Error loading posts."
    });
    if (loading) return external_react_default.a.createElement("div", null, "Loading");
    var areMorePosts = allPosts.length < _allPostsMeta.count;
    return external_react_default.a.createElement("section", {
      className: "jsx-3530367944"
    }, external_react_default.a.createElement("ul", {
      className: "jsx-3530367944"
    }, allPosts.map(function (post, index) {
      return external_react_default.a.createElement("li", {
        key: post.id,
        className: "jsx-3530367944"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3530367944"
      }, external_react_default.a.createElement("span", {
        className: "jsx-3530367944"
      }, index + 1, ". "), external_react_default.a.createElement("a", {
        href: post.url,
        className: "jsx-3530367944"
      }, post.title), external_react_default.a.createElement(PostUpvoter, {
        id: post.id,
        votes: post.votes
      })));
    })), areMorePosts ? external_react_default.a.createElement("button", {
      onClick: function onClick() {
        return loadMorePosts(allPosts, fetchMore);
      },
      className: "jsx-3530367944"
    }, ' ', loading ? 'Loading...' : 'Show More', ' ') : '', external_react_default.a.createElement(style_default.a, {
      styleId: "3530367944",
      css: ["section.jsx-3530367944{padding-bottom:20px;}", "li.jsx-3530367944{display:block;margin-bottom:10px;}", "div.jsx-3530367944{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", "a.jsx-3530367944{font-size:14px;margin-right:10px;-webkit-text-decoration:none;text-decoration:none;padding-bottom:0;border:0;}", "span.jsx-3530367944{font-size:14px;margin-right:5px;}", "ul.jsx-3530367944{margin:0;padding:0;}", "button.jsx-3530367944:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-style:solid;border-width:6px 4px 0 4px;border-color:#ffffff transparent transparent transparent;content:'';height:0;margin-right:5px;width:0;}"]
    }));
  });
}

function loadMorePosts(allPosts, fetchMore) {
  fetchMore({
    variables: {
      skip: allPosts.length
    },
    updateQuery: function updateQuery(previousResult, _ref2) {
      var fetchMoreResult = _ref2.fetchMoreResult;

      if (!fetchMoreResult) {
        return previousResult;
      }

      return Object.assign({}, previousResult, {
        // Append the new posts results to the old one
        allPosts: [].concat(_toConsumableArray(previousResult.allPosts), _toConsumableArray(fetchMoreResult.allPosts))
      });
    }
  });
}
// CONCATENATED MODULE: ./components/RegisterForm.js



function RegisterForm_templateObject() {
  var data = RegisterForm_taggedTemplateLiteral(["\n      mutation register(\n        $firstName: String!\n        $lastName: String!\n        $email: String!\n        $password: String!\n      ) {\n        register(\n          data: {\n            firstName: $firstName\n            lastName: $lastName\n            email: $email\n            password: $password\n          }\n        ) {\n          id\n        }\n      }\n    "]);

  RegisterForm_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function RegisterForm_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




function Submit() {
  return external_react_default.a.createElement(external_react_apollo_["ApolloConsumer"], null, function (client) {
    return external_react_default.a.createElement("form", {
      onSubmit: function onSubmit(event) {
        return handleSubmit(event, client);
      },
      className: "jsx-3675017326"
    }, external_react_default.a.createElement("h1", {
      className: "jsx-3675017326"
    }, "Register"), external_react_default.a.createElement("input", {
      placeholder: "firstname",
      name: "firstName",
      type: "text",
      required: true,
      className: "jsx-3675017326"
    }), external_react_default.a.createElement("input", {
      placeholder: "lastname",
      name: "lastName",
      type: "text",
      required: true,
      className: "jsx-3675017326"
    }), external_react_default.a.createElement("input", {
      placeholder: "email",
      name: "email",
      type: "text",
      required: true,
      className: "jsx-3675017326"
    }), external_react_default.a.createElement("input", {
      placeholder: "password",
      name: "password",
      type: "text",
      required: true,
      className: "jsx-3675017326"
    }), external_react_default.a.createElement("button", {
      type: "submit",
      className: "jsx-3675017326"
    }, "Submit"), external_react_default.a.createElement(style_default.a, {
      styleId: "3675017326",
      css: ["form.jsx-3675017326{border-bottom:1px solid #ececec;padding-bottom:20px;margin-bottom:20px;}", "h1.jsx-3675017326{font-size:20px;}", "input.jsx-3675017326{display:block;margin-bottom:10px;}"]
    }));
  });
}

function handleSubmit(event, client) {
  event.preventDefault();
  var form = event.target;
  var formData = new window.FormData(form);
  var firstName = formData.get("firstName");
  var lastName = formData.get("lastName");
  var email = formData.get("email");
  var password = formData.get("password");
  form.reset();
  client.mutate({
    mutation: external_graphql_tag_default()(RegisterForm_templateObject()),
    variables: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password // update: (proxy, { data: { createPost } }) => {
      //   const data = proxy.readQuery({
      //     query: allPostsQuery,
      //     variables: allPostsQueryVars
      //   });
      //   proxy.writeQuery({
      //     query: allPostsQuery,
      //     data: {
      //       ...data,
      //       allPosts: [createPost, ...data.allPosts]
      //     },
      //     variables: allPostsQueryVars
      //   });
      // }

    }
  });
}
// CONCATENATED MODULE: ./pages/register.js





/* harmony default export */ var register = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(App["a" /* default */], null, external_react_default.a.createElement(Header["a" /* default */], null), external_react_default.a.createElement(Submit, null));
});

/***/ })
/******/ ]);