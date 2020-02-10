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
    // let theStore = store;
    // store.changeStartDate("HELLO");
    console.log(store.date + "START"); // console.log(store.startDate + "THIS STORE");
  }

  function handleClick(value) {
    console.log(value);
    store.changeDate(value);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CategoryList, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    onClick: function onClick() {
      return handleClick("today");
    }
  }, "Today"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    onClick: function onClick() {
      return handleClick("yesterday");
    }
  }, "Yesterday"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    onClick: function onClick() {
      return handleClick("this week");
    }
  }, "This Week"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    onClick: function onClick() {
      return handleClick("this month");
    }
  }, "This Month"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    onClick: function onClick() {
      return handleClick("custom");
    }
  }, "Custom"));
}));
/* harmony default export */ __webpack_exports__["default"] = (SidebarCategoryList);
var CategoryList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "CategoryList",
  componentId: "sc-1g55hdr-0"
})(["display:flex;flex-direction:column;"]);
var Item = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CategoryList__Item",
  componentId: "sc-1g55hdr-1"
})(["padding:12px;font-size:15px;text-decoration:none;color:", ";color:white;::after{left:-1px;top:0;bottom:0;border-left:3px solid ", ";}&:hover{background-color:#fff;color:#212529;cursor:pointer;}&:active{background-color:#fff;color:#212529;cursor:pointer;}"], function (props) {
  return props.theme.normalText;
}, function (props) {
  return props.theme.accent;
});

/***/ })

})
//# sourceMappingURL=dashboard.js.3276f45c8e767de20447.hot-update.js.map