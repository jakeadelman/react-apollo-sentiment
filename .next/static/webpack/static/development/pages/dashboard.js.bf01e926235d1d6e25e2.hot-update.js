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
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Charts/ReChart */ "./components/Charts/ReChart.js");
/* harmony import */ var _Categories_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Categories/Menu */ "./components/Categories/Menu.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
var _dec,
    _class,
    _jsxFileName = "/Users/manx/projects/instagauge/frontend/components/Dashboard/FetchQuery.js";



function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query HourSentiment($currency: String!, $hoursBack: String!) {\n    hourSentiment(currency: $currency, hoursBack: $hoursBack) {\n      time\n      sentiment\n      num_tweets\n    }\n  }\n"]);

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







 // import { observer } from "mobx-react-lite";
// import { storesContext } from "../../stores/UserStore";

var FetchQuery = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])("store"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FetchQuery, _React$Component);

  function FetchQuery(props) {
    var _this;

    _classCallCheck(this, FetchQuery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FetchQuery).call(this, props));
    _this.state = {
      currency: _this.props.store.currency
    };
    return _this;
  }

  _createClass(FetchQuery, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props.store.currency);
      this.setState({
        currency: this.props.store.currency
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      // console.log(prevProps.store.currency);
      // console.log(this.props.store.currency);
      // console.log(snapshot);
      console.log(this.props.store.currency);

      if (this.props.store.currency !== prevProps.store.currency) {
        console.log("got new props");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var sentVariables = {
        currency: this.props.store.currency,
        hoursBack: this.props.store.hoursBack.toString()
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: sentQuery,
        variables: sentVariables,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, "no data loaded");
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, "Loading");
        console.log(data);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChartWrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_ReChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
          data: data,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        })));
      });
    }
  }]);

  return FetchQuery;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class) || _class); // const FetchQuery = inject("store")(
//   observer(({ store, currency }) => {
//     const [currencyState, setCurrency] = useState(store.currency);
//     console.log(currency);
//     // const clicked = () => {
//     //   if (store.currency == "bitcoin") {
//     //     store.currency = "ethereum";
//     //   } else if (store.currency == "ethereum") {
//     //     store.currency = "bitcoin";
//     //   }
//     // };
//     // console.log(currency);
//     // let currency1 = "bitcoin";
//     // let currency2 = "ethereum";
//     let sentVariables = {
//       currency: currency,
//       hoursBack: "7"
//     };
//     return (
//       <Query query={sentQuery} variables={sentVariables}>
//         {({ loading, error, data }) => {
//           if (error) return <div>no data loaded</div>;
//           if (loading) return <div>Loading</div>;
//           console.log(data);
//           return (
//             <Wrapper>
//               <ChartWrapper>
//                 <ReChart data={data} />
//               </ChartWrapper>
//               <Sidebar />
//             </Wrapper>
//           );
//         }}
//       </Query>
//     );
//   })
// );

/* harmony default export */ __webpack_exports__["default"] = (FetchQuery);
var sentQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "FetchQuery__ChartWrapper",
  componentId: "sc-1g6l220-0"
})(["background:white;border:1px solid #ebedf0;padding:5px;width:100%;@media (max-width:768px){margin:0 5vw;}"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "FetchQuery__Wrapper",
  componentId: "sc-1g6l220-1"
})(["display:flex;align-items:flex-align;"]);

/***/ })

})
//# sourceMappingURL=dashboard.js.bf01e926235d1d6e25e2.hot-update.js.map