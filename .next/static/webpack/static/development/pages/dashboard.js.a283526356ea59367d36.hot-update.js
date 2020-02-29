webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Dashboard/FetchQuery.js":
/*!********************************************!*\
  !*** ./components/Dashboard/FetchQuery.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Charts/ReChart */ "./components/Charts/ReChart.js");
/* harmony import */ var _Categories_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Categories/Menu */ "./components/Categories/Menu.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _Helpers_Functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Helpers/Functions */ "./components/Helpers/Functions.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_8__);
var _dec, _class, _temp;



function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query fetchTradeHistory($start: String!, $end: String!) {\n    fetchTradeHistory(start: $start, end: $end) {\n      id\n      timestamp\n      side\n      price\n      orderQty\n      leavesQty\n      currentQty\n      avgEntryPrice\n      execGrossPnl\n      realizedPnl\n      commission\n      trdStart\n      trdEnd\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









 // import { useState, useEffect } from "react";
// import { storesContext } from "../../stores/UserStore";

var FetchQuery = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FetchQuery, _React$Component);

  function FetchQuery(props) {
    var _this;

    _classCallCheck(this, FetchQuery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FetchQuery).call(this, props));

    _this.clicked = function () {
      store.isAuth = !store.isAuth;
      console.log(store.isAuth);
    };

    _this.state = {
      startDate: "",
      endDate: "",
      date: ""
    };
    return _this;
  }

  _createClass(FetchQuery, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // console.log(this.props.store.date);
      var myStore = this.props.store;
      console.log(myStore.date);
      var dates = Object(_Helpers_Functions__WEBPACK_IMPORTED_MODULE_7__["getStateDate"])(myStore.date);
      console.log(dates);
      this.setState({
        startDate: dates.start,
        endDate: dates.end,
        date: this.props.store.date
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      console.log("updated");

      if (this.props.store.date != prevProps.store.date) {
        // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
        var dates = Object(_Helpers_Functions__WEBPACK_IMPORTED_MODULE_7__["getStateDate"])(this.props.store.date);
        console.log(dates);
        this.setState({
          startDate: dates.start,
          endDate: dates.end,
          date: this.props.store.date
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      // let fetchTradeHistoryVariables = {
      //   start: this.state.startDate,
      //   end: this.state.endDate
      // };
      var fetchTradeHistoryVariables = {
        start: "2020-02-15T12:43:56.702Z",
        end: "2020-02-16T15:01:59.727Z"
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, {
        query: fetchTradeHistoryQuery,
        vars: fetchTradeHistoryVariables
      }));
    }
  }]);

  return FetchQuery;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component), _temp)) || _class) || _class); // const FetchQuery = inject("store")(
//   observer(({ store }) => {
//     // if (store) {
//     // const [startDate, setStartDate] = useState();
//     // const [endDate, setEndDate] = useState();
//     // const [myStore, setStore] = useState();
//     // useEffect(() => {
//     //   setStore(store);
//     //   let dates = getStateDate(myStore.date);
//     //   setStartDate(dates.start);
//     //   setEndDate(dates.end);
//     // }, []);
//     const clicked = () => {
//       store.isAuth = !store.isAuth;
//       console.log(store.isAuth);
//     };
//     // let fetchTradeHistoryVariables = {
//     //   start: "2020-01-14T12:43:56.702Z",
//     //   end: "2020-01-14T15:01:59.727Z"
//     // };
//     if (dates) {
//       let fetchTradeHistoryVariables = {
//         start: dates.start,
//         end: dates.end
//       };
//     }
//     return (
//       <div>
//         <Comp
//           query={fetchTradeHistoryQuery}
//           vars={fetchTradeHistoryVariables}
//         />
//       </div>
//     );
//   })
// );

var Comp =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Comp, _React$Component2);

  function Comp() {
    _classCallCheck(this, Comp);

    return _possibleConstructorReturn(this, _getPrototypeOf(Comp).apply(this, arguments));
  }

  _createClass(Comp, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: this.props.query,
        variables: this.props.vars
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        console.log(data);
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "no data loaded");
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading");
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChartWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["ContainDivHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Start"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "End"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Direction"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Avg Entry Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Avg Exit Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["NextToDivHeader"], null, "Realized Pnl")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
          data: data
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Categories_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], null));
      });
    }
  }]);

  return Comp;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FetchQuery);
var fetchTradeHistoryQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "FetchQuery__ChartWrapper",
  componentId: "sc-1g6l220-0"
})(["background:white;padding:5px;width:100%;@media (max-width:768px){margin:0 5vw;}"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "FetchQuery__Wrapper",
  componentId: "sc-1g6l220-1"
})(["display:flex;align-items:flex-align;"]);

/***/ })

})
//# sourceMappingURL=dashboard.js.a283526356ea59367d36.hot-update.js.map