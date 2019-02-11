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
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Header */ "./components/Header.js");
/* harmony import */ var _AddTerm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddTerm */ "./components/Dashboard/AddTerm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


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
          className: "jsx-4051300681" + " " + "dash-main-container"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-4051300681" + " " + "pagination-list"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
          className: "jsx-4051300681"
        }, _this2.state.allTerms.map(function (term) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
            className: "jsx-4051300681" + " " + "pagination-list-item"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            onClick: function onClick() {
              _this2.setState({
                term: term
              });
            },
            className: "jsx-4051300681" + " " + "pagination-button"
          }, term));
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          className: "jsx-4051300681" + " " + "pagination-list-item"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "jsx-4051300681" + " " + "pagination-button"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddTerm__WEBPACK_IMPORTED_MODULE_7__["default"], null))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DashMain__WEBPACK_IMPORTED_MODULE_4__["default"], {
          initialTerm: _this2.state.term
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "4051300681",
          css: ".dash-main-table.jsx-4051300681{max-width:50%;margin:3em auto 3em auto;}.pagination-list-item.jsx-4051300681{float:left;list-style-type:none;margin:2px;}.pagination-button.jsx-4051300681{border-radius:2px;}.dash-main-container.jsx-4051300681{display:block;}.dash-main-table.jsx-4051300681{display:block;}.pagination-list.jsx-4051300681{display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaEluaXRpYWxUZXJtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRGlCLEFBR21DLEFBSUgsQUFLTyxBQUdKLEFBR0EsQUFHTyxXQWJBLEdBSkksQUFZM0IsQUFHQSxJQU5BLEdBU0EsV0FiYSxPQUpiLElBS0EiLCJmaWxlIjoiL1VzZXJzL21hbngvcHJvamVjdHMvaW5zdGFnYXVnZS9mcm9udGVuZC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoSW5pdGlhbFRlcm1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IERhc2hNYWluIGZyb20gXCIuL0Rhc2hNYWluXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi9BcHBcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL0hlYWRlclwiO1xuaW1wb3J0IEFkZFRlcm0gZnJvbSBcIi4vQWRkVGVybVwiO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiwgUGFnaW5hdGlvbkl0ZW0sIFBhZ2luYXRpb25MaW5rIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmNsYXNzIERhc2hJbml0aWFsVGVybXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB0ZXJtOiBcIlwiLFxuICAgIGFsbFRlcm1zOiBbXVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFF1ZXJ5IHF1ZXJ5PXtmZXRjaFR3ZWV0c1F1ZXJ5fT5cbiAgICAgICAgeyh7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2Pm5vIGRhdGEgbG9hZGVkPC9kaXY+O1xuICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+O1xuXG4gICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnRlcm0pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB0ZXJtOiBkYXRhLmZldGNoVGVybXNbMF0udGVybVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5hbGxUZXJtc1swXSkge1xuICAgICAgICAgICAgZGF0YS5mZXRjaFRlcm1zLm1hcCh0ZXJtID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hbGxUZXJtcy5wdXNoKHRlcm0udGVybSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaC1tYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb24tbGlzdFwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsbFRlcm1zLm1hcCh0ZXJtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXJtOiB0ZXJtIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXJtfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2luYXRpb24tbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QWRkVGVybSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxEYXNoTWFpbiBpbml0aWFsVGVybT17dGhpcy5zdGF0ZS50ZXJtfSAvPlxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAuZGFzaC1tYWluLXRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogM2VtIGF1dG8gM2VtIGF1dG87XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAucGFnaW5hdGlvbi1saXN0LWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5wYWdpbmF0aW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5kYXNoLW1haW4tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuZGFzaC1tYWluLXRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAucGFnaW5hdGlvbi1saXN0IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9RdWVyeT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFR3ZWV0c1F1ZXJ5ID0gZ3FsYFxuICBxdWVyeSBmZXRjaFRlcm1zIHtcbiAgICBmZXRjaFRlcm1zIHtcbiAgICAgIGlkXG4gICAgICB0ZXJtXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxBcHA+XG4gICAgPEhlYWRlciAvPlxuICAgIDxEYXNoSW5pdGlhbFRlcm1zIC8+XG4gIDwvQXBwPlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/Dashboard/DashInitialTerms.js */"
        }));
      });
    }
  }]);

  return DashInitialTerms;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var fetchTweetsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DashInitialTerms, null));
});

/***/ })

})
//# sourceMappingURL=dashboard.js.8933468f9c3824859c5d.hot-update.js.map