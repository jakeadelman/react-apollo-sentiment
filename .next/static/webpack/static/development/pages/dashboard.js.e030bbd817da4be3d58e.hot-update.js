webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Categories/CategoryList.js":
/*!***********************************************!*\
  !*** ./components/Categories/CategoryList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
var _this = undefined;



 // export class SidebarCategoryList extends React.Component {
//   render() {
//     return (
//       <CategoryList>
//         <Item>Today</Item>
//         <Item>Yesterday</Item>
//         <Item>This Week</Item>
//         <Item>Custom</Item>
//       </CategoryList>
//     );
//   }
// }

var SidebarCategoryList = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["inject"])("store")(Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(function (_ref) {
  var store = _ref.store;

  //  constructor(props){
  //    super(props);
  //    state = {
  //     today: "hello"
  //   }
  //  }
  if (store) {
    var theStore = store;
    theStore.startDate = _this.state.today;
    console.log(theStore.startDate + "THIS STORE");
  } // const clicked = () => {
  //   store.srtDate = !store.isAuth;
  //   console.log(store.isAuth);
  // };


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CategoryList, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, null, "Today"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, null, "Yesterday"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, null, "This Week"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, null, "Custom"));
}));
/* harmony default export */ __webpack_exports__["default"] = (SidebarCategoryList);
var CategoryList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "CategoryList",
  componentId: "sc-1g55hdr-0"
})(["display:flex;flex-direction:column;"]);
var Item = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CategoryList__Item",
  componentId: "sc-1g55hdr-1"
})(["padding:12px;font-size:15px;text-decoration:none;color:", ";color:white;::after{left:-1px;top:0;bottom:0;border-left:3px solid ", ";}&:hover{background-color:#fff;color:#212529;cursor:pointer;}"], function (props) {
  return props.theme.normalText;
}, function (props) {
  return props.theme.accent;
});

/***/ })

})
//# sourceMappingURL=dashboard.js.e030bbd817da4be3d58e.hot-update.js.map