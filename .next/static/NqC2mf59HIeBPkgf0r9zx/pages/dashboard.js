(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{299:function(e,t,n){__NEXT_REGISTER_PAGE("/dashboard",function(){return e.exports=n(315),{page:e.exports.default}})},315:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(5),c=n.n(a),u=n(6),i=n(10),l=n.n(i);function f(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query fetchTweets($query: String!) {\n    fetchTweets(query: $query) {\n      id\n      tweetId\n      text\n      score\n      comparative\n    }\n  }\n"]);return f=function(){return e},e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,b(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){return o.a.createElement(u.Query,{query:h,variables:w},function(e){var t=e.loading,n=e.error,r=e.data;return n?o.a.createElement("div",null,"you are not allowed to access this page"):t?o.a.createElement("div",null,"Loading"):o.a.createElement("div",null,o.a.createElement("div",{className:"jsx-182642247 dash-main-table"},o.a.createElement("table",{className:"jsx-182642247"},o.a.createElement("thread",{className:"jsx-182642247"},o.a.createElement("tr",{className:"jsx-182642247"},o.a.createElement("th",{className:"jsx-182642247"},"query: bitcoin"))),o.a.createElement("tbody",{className:"jsx-182642247"},o.a.createElement("div",{className:"jsx-182642247"},r.fetchTweets.map(function(e){return o.a.createElement("tr",{className:"jsx-182642247"},o.a.createElement("th",{scope:"row",className:"jsx-182642247"},"text"),o.a.createElement("td",{className:"jsx-182642247"},e.text))})))),o.a.createElement(c.a,{styleId:"182642247",css:[".dash-main-table.jsx-182642247{max-width:50%;margin:3em auto 3em auto;}"]})))})}}])&&p(n.prototype,r),a&&p(n,a),t}(),h=l()(f()),w={query:"bitcoin"};function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return x});var x=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,O(t).call(this,e))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d,null))}}])&&v(n.prototype,r),a&&v(n,a),t}()}},[[299,1,0]]]);