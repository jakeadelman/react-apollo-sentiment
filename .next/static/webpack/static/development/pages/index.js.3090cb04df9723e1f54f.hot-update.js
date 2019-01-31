webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/manx/projects/with-apollo-app/components/LoginForm.js";



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







var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
    _this.state = {
      wrongCredentials: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(_default, [{
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event, client) {
        var form, formData, email, password, res, r, isTrue;
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
                  mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject()),
                  variables: {
                    email: email,
                    password: password
                  }
                });
                _context.next = 9;
                return res;

              case 9:
                r = _context.sent;
                r = r.data.login;
                isTrue = r == "true";
                console.log(_typeof(r));

                if (!(isTrue == true)) {
                  _context.next = 18;
                  break;
                }

                console.log(r);
                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/dashboard");
                _context.next = 20;
                break;

              case 18:
                this.setState({
                  wrongCredentials: true
                });
                return _context.abrupt("return");

              case 20:
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

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloConsumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, function (client) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
          onSubmit: function onSubmit(event) {
            return _this2.handleSubmit(event, client);
          },
          className: "jsx-2116105801",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
          className: "jsx-2116105801",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, "Login"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
          placeholder: "email",
          name: "email",
          type: "text",
          required: true,
          className: "jsx-2116105801",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
          placeholder: "password",
          name: "password",
          type: "text",
          required: true,
          className: "jsx-2116105801",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
          type: "submit",
          className: "jsx-2116105801",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, "Submit"), _this2.state.wrongCredentials == true ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "jsx-2116105801" + " " + "login-alert",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
          color: "secondary",
          isOpen: _this2.state.wrongCredentials == true ? true : false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, "Wrong login credentials")) : null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
          styleId: "2116105801",
          css: "form.jsx-2116105801{border-bottom:1px solid #ececec;padding-bottom:20px;margin-bottom:20px;}h1.jsx-2116105801{font-size:20px;}input.jsx-2116105801{display:block;margin-bottom:10px;}.login-alert.jsx-2116105801{max-width:50%;margin-top:2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0xvZ2luRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRXdCLEFBR2lELEFBS2pCLEFBR0QsQUFJQSxjQUhLLEFBSUosQ0FQakIsY0FRQSxHQWJzQixDQVN0QixtQkFScUIsbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0xvZ2luRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyB3cm9uZ0NyZWRlbnRpYWxzOiBmYWxzZSB9O1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVN1Ym1pdChldmVudCwgY2xpZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IHdpbmRvdy5Gb3JtRGF0YShmb3JtKTtcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwicGFzc3dvcmRcIik7XG4gICAgZm9ybS5yZXNldCgpO1xuXG4gICAgbGV0IHJlcyA9IGNsaWVudC5tdXRhdGUoe1xuICAgICAgbXV0YXRpb246IGdxbGBcbiAgICAgICAgbXV0YXRpb24gbG9naW4oJGVtYWlsOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgICAgICAgICBsb2dpbihlbWFpbDogJGVtYWlsLCBwYXNzd29yZDogJHBhc3N3b3JkKVxuICAgICAgICB9XG4gICAgICBgLFxuICAgICAgdmFyaWFibGVzOiB7IGVtYWlsLCBwYXNzd29yZCB9XG4gICAgfSk7XG5cbiAgICBsZXQgciA9IGF3YWl0IHJlcztcbiAgICByID0gci5kYXRhLmxvZ2luO1xuICAgIGxldCBpc1RydWUgPSByID09IFwidHJ1ZVwiO1xuICAgIGNvbnNvbGUubG9nKHR5cGVvZiByKTtcbiAgICBpZiAoaXNUcnVlID09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKHIpO1xuICAgICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgd3JvbmdDcmVkZW50aWFsczogdHJ1ZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcG9sbG9Db25zdW1lcj5cbiAgICAgICAge2NsaWVudCA9PiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2V2ZW50ID0+IHRoaXMuaGFuZGxlU3VibWl0KGV2ZW50LCBjbGllbnQpfT5cbiAgICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUud3JvbmdDcmVkZW50aWFscyA9PSB0cnVlID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUud3JvbmdDcmVkZW50aWFscyA9PSB0cnVlID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFdyb25nIGxvZ2luIGNyZWRlbnRpYWxzXG4gICAgICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2VjZWM7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5sb2dpbi1hbGVydCB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgPC9BcG9sbG9Db25zdW1lcj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/with-apollo-app/components/LoginForm.js */",
          __self: this
        }));
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.3090cb04df9723e1f54f.hot-update.js.map