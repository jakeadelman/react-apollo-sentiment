webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./components/Stripe/CheckoutForm.js":
/*!*******************************************!*\
  !*** ./components/Stripe/CheckoutForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-stripe-elements */ "./node_modules/react-stripe-elements/es/index.js");
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardSection */ "./components/Stripe/CardSection.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/Button */ "./components/shared/Button.js");
/* harmony import */ var _Form2_FormWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Form2/FormWrapper */ "./components/Form2/FormWrapper.js");
var _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Stripe/CheckoutForm.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n              mutation confCard($uid: String!, $source: String!) {\n                confirmCard(uid: $uid, source: $source)\n              }\n            "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// CheckoutForm.js



 // import AddressSection from "./AddressSection";






var Cookie = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");

function CheckoutForm(_ref) {
  var stripe = _ref.stripe;

  function handleSubmit(ev, client) {
    ev.preventDefault();
    var source;
    var uid = Cookie.get("uid");
    stripe.createSource({
      type: "card",
      owner: {
        name: "jenny rosen"
      }
    }).then(function (_ref2) {
      var source = _ref2.source;
      return source.id.toString();
    }).then(function (src) {
      console.log(uid, src);
      client.mutate({
        mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject()),
        variables: {
          uid: uid,
          src: src
        }
      }).then(function (res) {
        return console.log(res);
      });
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["ApolloConsumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, function (client) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form2_FormWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledForm, {
      onSubmit: function onSubmit(e) {
        return handleSubmit(e, client);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      style: {
        width: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__["CardElement"], {
      style: {
        base: {
          fontSize: "18px"
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Start your free trial")));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_stripe_elements__WEBPACK_IMPORTED_MODULE_1__["injectStripe"])(CheckoutForm));
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].form.withConfig({
  displayName: "CheckoutForm__StyledForm",
  componentId: "sc-53t4o-0"
})(["display:flex;flex-direction:column;align-items:flex-start;width:100%;", ";"], function (props) {
  return props.loading && "filter: grayscale(0.5) blur(5px) opacity(0.6); pointer-events: none";
});
var SubmitButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(_shared_Button__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "CheckoutForm__SubmitButton",
  componentId: "sc-53t4o-1"
})(["align-self:flex-end;margin-right:0px;margin-left:auto;"]);
var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "CheckoutForm__InputWrapper",
  componentId: "sc-53t4o-2"
})(["position:relative;margin-bottom:24px;width:100%;"]);

/***/ })

})
//# sourceMappingURL=signup.js.9955899efc6c7a434492.hot-update.js.map