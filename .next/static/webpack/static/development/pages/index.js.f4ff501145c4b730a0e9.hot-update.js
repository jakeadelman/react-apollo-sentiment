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
          className: "jsx-2990633675",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
          className: "jsx-2990633675",
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
          className: "jsx-2990633675",
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
          className: "jsx-2990633675",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
          type: "submit",
          className: "jsx-2990633675",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, "Submit"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
          color: "secondary",
          isOpen: _this2.state.wrongCredentials == true ? true : false,
          className: "lert",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, "Wrong login credentials"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
          styleId: "2990633675",
          css: "form.jsx-2990633675{border-bottom:1px solid #ececec;padding-bottom:20px;margin-bottom:20px;}h1.jsx-2990633675{font-size:20px;}input.jsx-2990633675{display:block;margin-bottom:10px;}.lert.jsx-2990633675{max-width:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL3dpdGgtYXBvbGxvLWFwcC9jb21wb25lbnRzL0xvZ2luRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRXdCLEFBR2lELEFBS2pCLEFBR0QsQUFJQSxjQUhLLEFBSXJCLENBUEEsaUJBTHNCLENBU3RCLG1CQVJxQixtQkFDckIiLCJmaWxlIjoiL1VzZXJzL21hbngvcHJvamVjdHMvd2l0aC1hcG9sbG8tYXBwL2NvbXBvbmVudHMvTG9naW5Gb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHdyb25nQ3JlZGVudGlhbHM6IGZhbHNlIH07XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlU3VibWl0KGV2ZW50LCBjbGllbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgd2luZG93LkZvcm1EYXRhKGZvcm0pO1xuICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIik7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKTtcbiAgICBmb3JtLnJlc2V0KCk7XG5cbiAgICBsZXQgcmVzID0gY2xpZW50Lm11dGF0ZSh7XG4gICAgICBtdXRhdGlvbjogZ3FsYFxuICAgICAgICBtdXRhdGlvbiBsb2dpbigkZW1haWw6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xuICAgICAgICAgIGxvZ2luKGVtYWlsOiAkZW1haWwsIHBhc3N3b3JkOiAkcGFzc3dvcmQpXG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgICB2YXJpYWJsZXM6IHsgZW1haWwsIHBhc3N3b3JkIH1cbiAgICB9KTtcblxuICAgIGxldCByID0gYXdhaXQgcmVzO1xuICAgIHIgPSByLmRhdGEubG9naW47XG4gICAgbGV0IGlzVHJ1ZSA9IHIgPT0gXCJ0cnVlXCI7XG4gICAgY29uc29sZS5sb2codHlwZW9mIHIpO1xuICAgIGlmIChpc1RydWUgPT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5sb2cocik7XG4gICAgICBSb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB3cm9uZ0NyZWRlbnRpYWxzOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZXZlbnQgPT4gdGhpcy5oYW5kbGVTdWJtaXQoZXZlbnQsIGNsaWVudCl9PlxuICAgICAgICAgICAgPGgxPkxvZ2luPC9oMT5cbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8QWxlcnRcbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUud3JvbmdDcmVkZW50aWFscyA9PSB0cnVlID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZXJ0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgV3JvbmcgbG9naW4gY3JlZGVudGlhbHNcbiAgICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNlY2VjO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubGVydCB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG4gICAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects/with-apollo-app/components/LoginForm.js */",
          __self: this
        }));
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.f4ff501145c4b730a0e9.hot-update.js.map