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
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/RegisterForm.js";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        mutation register(\n          $firstName: String!\n          $lastName: String!\n          $email: String!\n          $password: String!\n        ) {\n          register(\n            data: {\n              firstName: $firstName\n              lastName: $lastName\n              email: $email\n              password: $password\n            }\n          ) {\n            id\n          }\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["ApolloConsumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, function (client) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form2_FormWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledForm, {
      onSubmit: function onSubmit(event) {
        return handleSubmit(event, client);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "firstname"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form2_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      placeholder: "John",
      name: "firstName",
      type: "text",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "lastname"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form2_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      placeholder: "Doe",
      name: "lastName",
      type: "text",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form2_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      placeholder: "johndoe@example.com",
      name: "email",
      type: "text",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form2_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      placeholder: "*******",
      name: "password",
      type: "text",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubmitButton, {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
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
})(["position:relative;margin-bottom:24px;width:100%;"]); // import React, { useContext, useState } from "react";
// import { ApolloConsumer } from "react-apollo";
// import gql from "graphql-tag";
// import Router from "next/router";
// import { Alert } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { observer } from "mobx-react-lite";
// import { UserStoreContext } from "../stores/UserStore.ts";
// import styled from "styled-components";
// import FormWrapper from "./Form2/FormWrapper";
// const LoginForm = observer(() => {
//   const userStore = useContext(UserStoreContext);
//   async function handleSubmit(event, client) {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new window.FormData(form);
//     const email = formData.get("email");
//     const password = formData.get("password");
//     console.log(email, password);
//     form.reset();
//     let res = client.mutate({
//       mutation: gql`
//         mutation login($email: String!, $password: String!) {
//           login(email: $email, password: $password)
//         }
//       `,
//       variables: { email, password }
//     });
//     //check if login credentials are correct
//     let r = await res;
//     r = r.data.login;
//     console.log(r);
//     let isTrue = r == "true";
//     if (isTrue == true) {
//       userStore.isAuth = true;
//       Router.push("/dashboard");
//     } else {
//       setWrongCredentials(true);
//       return;
//     }
//   }
//   const [wrongCredentials, setWrongCredentials] = useState(false);
//   return (
//     <ApolloConsumer>
//       {client => (
//         <FormWrapper>
//           <StyledForm onSubmit={event => handleSubmit(event, client)}>
//             <InputWrapper>
//               <Label>email</Label>
//               <Input placeholder="email" name="email" type="text" required />
//             </InputWrapper>
//             <InputWrapper>
//               <Label>password</Label>
//               <Input
//                 placeholder="password"
//                 name="password"
//                 type="text"
//                 required
//               />
//             </InputWrapper>
//             <div style={{ display: "flex", width: "100%" }}>
//               <SubmitButton type="submit">Submit</SubmitButton>
//             </div>
//             {wrongCredentials == true ? (
//               <div className="login-alert">
//                 <Alert
//                   color="secondary"
//                   isOpen={wrongCredentials == true ? true : false}
//                 >
//                   Wrong login credentials
//                 </Alert>
//               </div>
//             ) : null}
//           </StyledForm>
//         </FormWrapper>
//       )}
//     </ApolloConsumer>
//   );
// });
// export default LoginForm;

/***/ })

})
//# sourceMappingURL=register.js.345c5e3256d7956979e9.hot-update.js.map