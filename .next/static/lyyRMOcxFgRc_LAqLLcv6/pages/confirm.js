(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{298:function(e,t,n){__NEXT_REGISTER_PAGE("/confirm",function(){return e.exports=n(313),{page:e.exports.default}})},313:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(29),u=n.n(i),c=n(6),f=n(10);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function y(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  mutation confirmUser($token: String!) {\n    confirmUser(token: $token)\n  }\n"]);return v=function(){return e},e}var w=n.n(f)()(v()),O=function(e){function t(){return l(this,t),y(this,m(t).apply(this,arguments))}return h(t,o.a.Component),s(t,[{key:"componentDidMount",value:function(){this.props.confirm()}},{key:"render",value:function(){return this.props.children}}]),t}(),E=function(e){function t(e){var n;return l(this,t),(n=y(this,m(t).call(this,e))).state={confirmed:!1},n.userConfirmed=n.userConfirmed.bind(b(b(n))),n}return h(t,o.a.Component),s(t,[{key:"userConfirmed",value:function(){this.setState({confirmed:!0}),u.a.push("/login")}},{key:"render",value:function(){var e=this,t=this.props.token;return o.a.createElement("div",null,0==this.state.confirmed?o.a.createElement("div",null,o.a.createElement(c.Mutation,{mutation:w,variables:{token:t}},function(t,n){var r=n.data;return o.a.createElement(O,{confirm:t},o.a.createElement("div",null,"thank you for confirming your email"),o.a.createElement("div",null,r?e.userConfirmed():null))})):o.a.createElement("div",null,"now confirmed"))}}]),t}();function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),k(this,S(t).call(this,e))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){return o.a.createElement(E,{token:this.props.token})}}])&&j(n.prototype,r),i&&j(n,i),t}(),C=Object(i.withRouter)(function(e){return o.a.createElement("div",null,o.a.createElement(P,{token:e.router.query.id}))});t.default=function(e){return o.a.createElement("div",null,o.a.createElement(C,null))}}},[[298,1,0]]]);