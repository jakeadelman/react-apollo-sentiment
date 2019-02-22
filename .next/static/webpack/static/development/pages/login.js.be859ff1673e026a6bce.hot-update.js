webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var _stores_UserStore_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stores/UserStore.ts */ "./stores/UserStore.ts");

var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/LoginForm.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        mutation login($email: String!, $password: String!) {\n          login(email: $email, password: $password)\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var LoginForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm(props) {
    var _this;

    _classCallCheck(this, LoginForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginForm).call(this, props));
    _this.state = {
      wrongCredentials: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(LoginForm, [{
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event, client) {
        var form, formData, email, password, res, userStore, r, isTrue;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                form = event.target;
                formData = new window.FormData(form);
                email = formData.get("email");
                password = formData.get("password");
                form.reset();
                res = client.mutate({
                  mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject()),
                  variables: {
                    email: email,
                    password: password
                  }
                });
                userStore = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_stores_UserStore_ts__WEBPACK_IMPORTED_MODULE_8__["UserStoreContext"]);
                console.log(userStore);
                _context.next = 11;
                return res;

              case 11:
                r = _context.sent;
                console.log(r);
                r = r.data.login;
                console.log(r);
                isTrue = r == "true";
                console.log(_typeof(r));

                if (!(isTrue == true)) {
                  _context.next = 22;
                  break;
                }

                console.log(r);
                next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/dashboard");
                _context.next = 24;
                break;

              case 22:
                this.setState({
                  wrongCredentials: true
                });
                return _context.abrupt("return");

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x, _x2) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["ApolloConsumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, function (client) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
          onSubmit: function onSubmit(event) {
            return _this2.handleSubmit(event, client);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, "Login"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          placeholder: "email",
          name: "email",
          type: "text",
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          placeholder: "password",
          name: "password",
          type: "text",
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, "Submit"), _this2.state.wrongCredentials == true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "login-alert",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
          color: "secondary",
          isOpen: _this2.state.wrongCredentials == true ? true : false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, "Wrong login credentials")) : null);
      });
    }
  }]);

  return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["observer"])(LoginForm));

/***/ })

})
//# sourceMappingURL=login.js.be859ff1673e026a6bce.hot-update.js.map