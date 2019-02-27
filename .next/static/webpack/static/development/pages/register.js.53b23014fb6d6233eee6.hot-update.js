webpackHotUpdate("static/development/pages/register.js",{

/***/ "./components/RegisterForm.js":
/*!************************************!*\
  !*** ./components/RegisterForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegisterForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PostList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostList */ "./components/PostList.js");
/* harmony import */ var _Form2_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Form2/Input */ "./components/Form2/Input.js");
/* harmony import */ var _form_Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/Label */ "./components/form/Label.js");
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/Button */ "./components/shared/Button.js");
/* harmony import */ var _Form2_FormWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Form2/FormWrapper */ "./components/Form2/FormWrapper.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/RegisterForm.js";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n          mutation register(\n            $firstName: String!\n            $lastName: String!\n            $email: String!\n            $password: String!\n          ) {\n            register(\n              data: {\n                firstName: $firstName\n                lastName: $lastName\n                email: $email\n                password: $password\n              }\n            ) {\n              id\n            }\n          }\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var Cookie = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");

function RegisterForm() {
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
      mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject()),
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      }
    }).then(function (response) {
      if (response.data) {
        Cookie.set("uid", response.data.register.id);
        next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/signup");
      } else {
        console.log("there was an error");
      }
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["ApolloConsumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, function (client) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form2_FormWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledForm, {
      onSubmit: function onSubmit(event) {
        return handleSubmit(event, client);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "firstname"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form2_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      placeholder: "",
      name: "firstName",
      type: "text",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "lastname"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form2_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      placeholder: "",
      name: "lastName",
      type: "text",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form2_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      placeholder: "",
      name: "email",
      type: "text",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form2_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      placeholder: "",
      name: "password",
      type: "text",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubmitButton, {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "Submit")));
  });
}
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].form.withConfig({
  displayName: "RegisterForm__StyledForm",
  componentId: "sc-1jkrpw9-0"
})(["display:flex;flex-direction:column;align-items:flex-start;", ";"], function (props) {
  return props.loading && "filter: grayscale(0.5) blur(5px) opacity(0.6); pointer-events: none";
});
var SubmitButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_shared_Button__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "RegisterForm__SubmitButton",
  componentId: "sc-1jkrpw9-1"
})(["align-self:flex-end;margin-right:0px;margin-left:auto;"]);
var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "RegisterForm__InputWrapper",
  componentId: "sc-1jkrpw9-2"
})(["position:relative;margin-bottom:24px;width:100%;"]);

/***/ })

})
//# sourceMappingURL=register.js.53b23014fb6d6233eee6.hot-update.js.map