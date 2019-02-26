webpackHotUpdate("static/development/pages/index.js",{

/***/ "./stores/UserStore.ts":
/*!*****************************!*\
  !*** ./stores/UserStore.ts ***!
  \*****************************/
/*! exports provided: userStore, UserStoreContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userStore", function() { return userStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStoreContext", function() { return UserStoreContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
var _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }


 // import * as mobby from "mobx-sync";
// import { create, persist } from "mobx-persist";

var UserStore = (_class = (_temp = function UserStore() {
  _classCallCheck(this, UserStore);

  _initializerDefineProperty(this, "isAuth", _descriptor, this);
}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "isAuth", [mobx__WEBPACK_IMPORTED_MODULE_1__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
})), _class); // const store = observable({ foo: "the" });

var userStore = new UserStore();
var UserStoreContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(userStore); // let trunk = new mobby.AsyncTrunk(store);
// trunk.init().then(() => {
//   // do any staff with loaded store
//   console.log("userStore.isAuth");
// });
// if (process.browser) {
// const hydrate = create();
// hydrate("user", userStore).then(() => console.log("has been hydrated"));
// export function hydrateUser() {
//   hydrate("user", userStore).then(() =>
//     console.log("has been hydrated and reset")
//   );
// }

/***/ })

})
//# sourceMappingURL=index.js.20080645ed4750fee8c3.hot-update.js.map