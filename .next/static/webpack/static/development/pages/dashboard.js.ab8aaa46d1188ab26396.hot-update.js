webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Dashboard/DashInitialTerms.js":
/*!**************************************************!*\
  !*** ./components/Dashboard/DashInitialTerms.js ***!
  \**************************************************/
/*! exports provided: fetchTweetsQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTweetsQuery", function() { return fetchTweetsQuery; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DashMain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DashMain */ "./components/Dashboard/DashMain.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../App */ "./components/App.js");
/* harmony import */ var _Header2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Header2 */ "./components/Header2.js");
/* harmony import */ var _AddTerm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddTerm */ "./components/Dashboard/AddTerm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _SentimentModule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SentimentModule */ "./components/Dashboard/SentimentModule.js");


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query fetchTerms {\n    fetchTerms {\n      id\n      term\n    }\n  }\n"]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var DashInitialTerms =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DashInitialTerms, _React$Component);

  function DashInitialTerms() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DashInitialTerms);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DashInitialTerms)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      term: "",
      allTerms: []
    });

    return _this;
  }

  _createClass(DashInitialTerms, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: fetchTweetsQuery
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "no data loaded");
        if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading");
        console.log(data.fetchTerms);

        if (!_this2.state.term) {
          _this2.setState({
            term: data.fetchTerms[0].term
          });
        }

        if (!_this2.state.allTerms[0]) {
          data.fetchTerms.map(function (term) {
            _this2.state.allTerms.push(term.term);
          });
        }

        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "outer-cont",
          style: {
            display: "inline-flex"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "outer-sent"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-340537512" + " " + "dash-main-container"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-340537512" + " " + "pagination-list"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
          className: "jsx-340537512"
        }, _this2.state.allTerms.map(function (term) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
            className: "jsx-340537512" + " " + "pagination-list-item"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            onClick: function onClick() {
              _this2.setState({
                term: term
              });
            },
            className: "jsx-340537512" + " " + "pagination-button"
          }, term));
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          className: "jsx-340537512" + " " + "pagination-list-item"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "jsx-340537512" + " " + "pagination-button"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddTerm__WEBPACK_IMPORTED_MODULE_7__["default"], null))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SentimentModule__WEBPACK_IMPORTED_MODULE_9__["default"], {
          term: _this2.state.term
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DashMain__WEBPACK_IMPORTED_MODULE_4__["default"], {
          initialTerm: _this2.state.term
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "340537512",
          css: ".pagination-list-item.jsx-340537512{float:left;list-style-type:none;margin:2px;}.pagination-button.jsx-340537512{border-radius:2px;}.dash-main-container.jsx-340537512{display:block;max-width:50%;margin:3em auto 3em auto;}.dash-main-table.jsx-340537512{display:block;}.pagination-list.jsx-340537512{display:inline-block;}.outer-sent.jsx-340537512{margin:0;}@media only screen and (max-width:960px){.dash-main-container.jsx-340537512{max-width:85%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaEluaXRpYWxUZXJtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRW1CLEFBS2tDLEFBS08sQUFHSixBQUtBLEFBR08sQUFHWixBQUtPLFNBSmxCLEVBbkJ1QixHQVFQLEFBS2hCLEFBV0UsSUFuQkYsR0FXQSxPQVAyQixJQVJkLFdBQ2IsVUFRQSIsImZpbGUiOiIvVXNlcnMvbWFueC9wcm9qZWN0cy9pbnN0YWdhdWdlL2Zyb250ZW5kL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hJbml0aWFsVGVybXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgRGFzaE1haW4gZnJvbSBcIi4vRGFzaE1haW5cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL0FwcFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vSGVhZGVyMlwiO1xuaW1wb3J0IEFkZFRlcm0gZnJvbSBcIi4vQWRkVGVybVwiO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiwgUGFnaW5hdGlvbkl0ZW0sIFBhZ2luYXRpb25MaW5rIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBTZW50aW1lbnRNb2R1bGUgZnJvbSBcIi4vU2VudGltZW50TW9kdWxlXCI7XG5cbmNsYXNzIERhc2hJbml0aWFsVGVybXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB0ZXJtOiBcIlwiLFxuICAgIGFsbFRlcm1zOiBbXVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFF1ZXJ5IHF1ZXJ5PXtmZXRjaFR3ZWV0c1F1ZXJ5fT5cbiAgICAgICAgeyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2Pm5vIGRhdGEgbG9hZGVkPC9kaXY+O1xuICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+O1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZmV0Y2hUZXJtcyk7XG4gICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnRlcm0pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB0ZXJtOiBkYXRhLmZldGNoVGVybXNbMF0udGVybVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5hbGxUZXJtc1swXSkge1xuICAgICAgICAgICAgZGF0YS5mZXRjaFRlcm1zLm1hcCh0ZXJtID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hbGxUZXJtcy5wdXNoKHRlcm0udGVybSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItY29udFwiIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIiB9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlci1zZW50XCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoLW1haW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYWxsVGVybXMubWFwKHRlcm0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXJtOiB0ZXJtIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rlcm19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2luYXRpb24tbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFkZFRlcm0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFNlbnRpbWVudE1vZHVsZSB0ZXJtPXt0aGlzLnN0YXRlLnRlcm19IC8+XG5cbiAgICAgICAgICAgICAgICA8RGFzaE1haW4gaW5pdGlhbFRlcm09e3RoaXMuc3RhdGUudGVybX0gLz5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLmRhc2gtbWFpbi10YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBhZ2luYXRpb24tbGlzdC1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBhZ2luYXRpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmRhc2gtbWFpbi1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogM2VtIGF1dG8gM2VtIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmRhc2gtbWFpbi10YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBhZ2luYXRpb24tbGlzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5vdXRlci1zZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgLmRhc2gtbWFpbi1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4NSU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvUXVlcnk+XG4gICAgKTtcbiAgfVxufVxuXG4vLyAub3V0ZXItc2VudCB7XG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgZmxvYXQ6IGxlZnQ7XG4vLyB9XG5cbmV4cG9ydCBjb25zdCBmZXRjaFR3ZWV0c1F1ZXJ5ID0gZ3FsYFxuICBxdWVyeSBmZXRjaFRlcm1zIHtcbiAgICBmZXRjaFRlcm1zIHtcbiAgICAgIGlkXG4gICAgICB0ZXJtXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxBcHA+XG4gICAgPEhlYWRlciAvPlxuICAgIDxEYXNoSW5pdGlhbFRlcm1zIC8+XG4gIDwvQXBwPlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/Dashboard/DashInitialTerms.js */"
        })));
      });
    }
  }]);

  return DashInitialTerms;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component); // .outer-sent {
//   display: inline-block;
//   float: left;
// }


var fetchTweetsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header2__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DashInitialTerms, null));
});

/***/ }),

/***/ "./components/Dashboard/SentVis.js":
false,

/***/ "./node_modules/@vx/axis/dist/vx-axis.es.js":
false,

/***/ "./node_modules/@vx/group/dist/vx-group.es.js":
false,

/***/ "./node_modules/@vx/mock-data/dist/vx-mock-data.es.js":
false,

/***/ "./node_modules/@vx/point/dist/vx-point.es.js":
false,

/***/ "./node_modules/@vx/scale/dist/vx-scale.es.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/array.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/band.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/constant.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/continuous.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/diverging.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/identity.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/index.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/init.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/linear.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/log.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/nice.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/number.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/ordinal.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/pow.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/quantile.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/quantize.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/sequential.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/sequentialQuantile.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/symlog.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/threshold.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/tickFormat.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/time.js":
false,

/***/ "./node_modules/@vx/scale/node_modules/d3-scale/src/utcTime.js":
false,

/***/ "./node_modules/@vx/shape/dist/vx-shape.es.js":
false,

/***/ "./node_modules/@vx/shape/node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/@vx/shape/node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/@vx/shape/node_modules/prop-types/index.js":
false,

/***/ "./node_modules/@vx/shape/node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/@vx/shape/node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/@vx/shape/node_modules/react-is/index.js":
false,

/***/ "./node_modules/@vx/text/dist/vx-text.es.js":
false,

/***/ "./node_modules/balanced-match/index.js":
false,

/***/ "./node_modules/d3-random/src/bates.js":
false,

/***/ "./node_modules/d3-random/src/defaultSource.js":
false,

/***/ "./node_modules/d3-random/src/exponential.js":
false,

/***/ "./node_modules/d3-random/src/index.js":
false,

/***/ "./node_modules/d3-random/src/irwinHall.js":
false,

/***/ "./node_modules/d3-random/src/logNormal.js":
false,

/***/ "./node_modules/d3-random/src/normal.js":
false,

/***/ "./node_modules/d3-random/src/uniform.js":
false,

/***/ "./node_modules/math-expression-evaluator/src/formula_evaluator.js":
false,

/***/ "./node_modules/math-expression-evaluator/src/lexer.js":
false,

/***/ "./node_modules/math-expression-evaluator/src/math_function.js":
false,

/***/ "./node_modules/math-expression-evaluator/src/postfix.js":
false,

/***/ "./node_modules/math-expression-evaluator/src/postfix_evaluator.js":
false,

/***/ "./node_modules/reduce-css-calc/index.js":
false,

/***/ "./node_modules/reduce-function-call/index.js":
false

})
//# sourceMappingURL=dashboard.js.ab8aaa46d1188ab26396.hot-update.js.map