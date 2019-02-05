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
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(4);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(3);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./components/ConfirmUserComponent.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation confirmUser($token: String!) {\n    confirmUser(token: $token)\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var confirmUserMutation = external_graphql_tag_default()(_templateObject());

var ConfirmUser =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConfirmUser, _React$Component);

  function ConfirmUser() {
    _classCallCheck(this, ConfirmUser);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConfirmUser).apply(this, arguments));
  }

  _createClass(ConfirmUser, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.confirm();
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return ConfirmUser;
}(external_react_default.a.Component); // export default props => {
//   let token = props.token;
//   let newDat;
//   return (
//     <Mutation mutation={confirmUserMutation} variables={{ token }}>
//       {(confirmUser, { data }) => (
//         <ConfirmUser confirm={confirmUser}>
//           <div>thank you for confirming your email</div>
//         </ConfirmUser>
//       )}
//     </Mutation>
//   );
// };


var ConfirmUserComponent_default =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(_default, _React$Component2);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
    _this.state = {
      confirmed: false
    };
    _this.userConfirmed = _this.userConfirmed.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(_default, [{
    key: "userConfirmed",
    value: function userConfirmed() {
      this.setState({
        confirmed: true
      });
      router_default.a.push("/login");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var token = this.props.token;
      return external_react_default.a.createElement("div", null, this.state.confirmed == false ? external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_react_apollo_["Mutation"], {
        mutation: confirmUserMutation,
        variables: {
          token: token
        }
      }, function (confirmUser, _ref) {
        var data = _ref.data;
        return external_react_default.a.createElement(ConfirmUser, {
          confirm: confirmUser
        }, external_react_default.a.createElement("div", null, "thank you for confirming your email"), external_react_default.a.createElement("div", null, data ? _this2.userConfirmed() : null));
      })) : external_react_default.a.createElement("div", null, "now confirmed"));
    }
  }]);

  return _default;
}(external_react_default.a.Component);
/* <div>{JSON.stringify(data)}</div> */
// class Confi extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   componentDidMount() {
//     let dat = JSON.stringify(this.props.data);
//     console.log(dat);
//     dat = JSON.parse(dat);
//     this.setState({ data: dat });
//   }
//   render() {
//     return <div>{this.state.data}</div>;
//   }
// }



// CONCATENATED MODULE: ./components/ConfirmUser.js
function ConfirmUser_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ConfirmUser_typeof = function _typeof(obj) { return typeof obj; }; } else { ConfirmUser_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ConfirmUser_typeof(obj); }

function ConfirmUser_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ConfirmUser_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ConfirmUser_createClass(Constructor, protoProps, staticProps) { if (protoProps) ConfirmUser_defineProperties(Constructor.prototype, protoProps); if (staticProps) ConfirmUser_defineProperties(Constructor, staticProps); return Constructor; }

function ConfirmUser_possibleConstructorReturn(self, call) { if (call && (ConfirmUser_typeof(call) === "object" || typeof call === "function")) { return call; } return ConfirmUser_assertThisInitialized(self); }

function ConfirmUser_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ConfirmUser_getPrototypeOf(o) { ConfirmUser_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ConfirmUser_getPrototypeOf(o); }

function ConfirmUser_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ConfirmUser_setPrototypeOf(subClass, superClass); }

function ConfirmUser_setPrototypeOf(o, p) { ConfirmUser_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ConfirmUser_setPrototypeOf(o, p); }




var ConfirmUser_Conf =
/*#__PURE__*/
function (_React$Component) {
  ConfirmUser_inherits(Conf, _React$Component);

  function Conf(props) {
    ConfirmUser_classCallCheck(this, Conf);

    return ConfirmUser_possibleConstructorReturn(this, ConfirmUser_getPrototypeOf(Conf).call(this, props));
  }

  ConfirmUser_createClass(Conf, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(ConfirmUserComponent_default, {
        token: this.props.token
      });
    }
  }]);

  return Conf;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./pages/confirm.js



var Content = Object(router_["withRouter"])(function (props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(ConfirmUser_Conf, {
    token: props.router.query.id
  }));
});

var confirm_Page = function Page(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Content, null));
};

/* harmony default export */ var pages_confirm = __webpack_exports__["default"] = (confirm_Page);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ })

/******/ });