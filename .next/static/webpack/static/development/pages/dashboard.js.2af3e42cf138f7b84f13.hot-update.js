webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Dashboard/DashInitialTerms.js":
/*!**************************************************!*\
  !*** ./components/Dashboard/DashInitialTerms.js ***!
  \**************************************************/
/*! exports provided: default, fetchTweetsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


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




 // import Pagination from "./Pagination";





var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      term: "",
      allTerms: []
    });

    return _this;
  }

  _createClass(_default, [{
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
        if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading"); //   console.log(data.fetchTweets);
        // const areMorePosts = allPosts.length < _allPostsMeta.count;

        if (!_this2.state.initialTerm) {
          _this2.setState({
            initialTerm: data.fetchTerms[0].term
          });
        }

        if (!_this2.state.allTerms[0]) {
          data.fetchTerms.map(function (term) {
            _this2.state.allTerms.push(term.term);
          });
        }

        console.log("THIS DATA", data.fetchTerms);
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-182642247" + " " + "dash-main-table"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-182642247"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          onClick: function onClick() {
            return _this2.setState({
              term: _this2.state.allTerms[0]
            });
          },
          className: "jsx-182642247"
        }, "term1")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-182642247"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          onClick: function onClick() {
            console.log(_this2.state.term);

            _this2.setState({
              term: _this2.state.allTerms[1]
            });
          },
          className: "jsx-182642247"
        }, "term2")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-182642247"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          onClick: function onClick() {
            return _this2.setState({
              term: _this2.state.allTerms[2]
            });
          },
          className: "jsx-182642247"
        }, "term3")), _this2.state.allTerms.map(function (term) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-182642247"
          });
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DashMain__WEBPACK_IMPORTED_MODULE_4__["default"], {
          initialTerm: _this2.state.term
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "182642247",
          css: ".dash-main-table.jsx-182642247{max-width:50%;margin:3em auto 3em auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaEluaXRpYWxUZXJtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RW1CLEFBR3FDLGNBQ1cseUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaEluaXRpYWxUZXJtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCBEYXNoTWFpbiBmcm9tIFwiLi9EYXNoTWFpblwiO1xuLy8gaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4vUGFnaW5hdGlvblwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vQXBwXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9IZWFkZXJcIjtcbmltcG9ydCB7IFBhZ2luYXRpb24sIFBhZ2luYXRpb25JdGVtLCBQYWdpbmF0aW9uTGluayB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdGVybTogXCJcIixcbiAgICBhbGxUZXJtczogW11cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxRdWVyeSBxdWVyeT17ZmV0Y2hUd2VldHNRdWVyeX0+XG4gICAgICAgIHsoeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5ubyBkYXRhIGxvYWRlZDwvZGl2PjtcbiAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PjtcbiAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKGRhdGEuZmV0Y2hUd2VldHMpO1xuICAgICAgICAgIC8vIGNvbnN0IGFyZU1vcmVQb3N0cyA9IGFsbFBvc3RzLmxlbmd0aCA8IF9hbGxQb3N0c01ldGEuY291bnQ7XG4gICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmluaXRpYWxUZXJtKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgaW5pdGlhbFRlcm06IGRhdGEuZmV0Y2hUZXJtc1swXS50ZXJtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmFsbFRlcm1zWzBdKSB7XG4gICAgICAgICAgICBkYXRhLmZldGNoVGVybXMubWFwKHRlcm0gPT4ge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFsbFRlcm1zLnB1c2godGVybS50ZXJtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlRISVMgREFUQVwiLCBkYXRhLmZldGNoVGVybXMpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2gtbWFpbi10YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRlcm06IHRoaXMuc3RhdGUuYWxsVGVybXNbMF0gfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB0ZXJtMVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudGVybSk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRlcm06IHRoaXMuc3RhdGUuYWxsVGVybXNbMV0gfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHRlcm0yXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXJtOiB0aGlzLnN0YXRlLmFsbFRlcm1zWzJdIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgdGVybTNcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYWxsVGVybXMubWFwKHRlcm0gPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgLz47XG4gICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICA8RGFzaE1haW4gaW5pdGlhbFRlcm09e3RoaXMuc3RhdGUudGVybX0gLz5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLmRhc2gtbWFpbi10YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzZW0gYXV0byAzZW0gYXV0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L1F1ZXJ5PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoVHdlZXRzUXVlcnkgPSBncWxgXG4gIHF1ZXJ5IGZldGNoVGVybXMge1xuICAgIGZldGNoVGVybXMge1xuICAgICAgaWRcbiAgICAgIHRlcm1cbiAgICB9XG4gIH1cbmA7XG4vLyBleHBvcnQgY29uc3QgZmV0Y2hUd2VldHNWYXJzID0ge1xuLy8gICBxdWVyeTogXCJiaXRjb2luXCJcbi8vIH07XG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/Dashboard/DashInitialTerms.js */"
        })));
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


var fetchTweetsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject()); // export const fetchTweetsVars = {
//   query: "bitcoin"
// };

/***/ })

})
//# sourceMappingURL=dashboard.js.2af3e42cf138f7b84f13.hot-update.js.map