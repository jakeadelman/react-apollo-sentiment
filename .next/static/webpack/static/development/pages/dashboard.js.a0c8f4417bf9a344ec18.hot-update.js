webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Dashboard/AddTerm.js":
/*!*****************************************!*\
  !*** ./components/Dashboard/AddTerm.js ***!
  \*****************************************/
/*! exports provided: default, fetchTweetsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTweetsQuery", function() { return fetchTweetsQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // import Popover from "./Popover";


function AddTerm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      popover = _useState4[0],
      setPopover = _useState4[1];

  function toggle() {
    if (!popover) {
      setPopover(true);
    } else {
      setPopover(false);
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "Popover1",
    onClick: function onClick() {
      setClicked(true);
      toggle();
    }
  }, "add term"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
    placement: "bottom",
    isOpen: popover,
    target: "Popover1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["PopoverHeader"], null, "Popover Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["PopoverBody"], null, "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")));
}

var Pop =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Pop, _React$Component);

  function Pop(props) {
    var _this;

    _classCallCheck(this, Pop);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pop).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      popoverOpen: false
    };
    return _this;
  }

  _createClass(Pop, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        popoverOpen: !this.state.popoverOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        id: "Popover1",
        type: "button"
      }, "Launch Popover"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
        placement: "bottom",
        isOpen: this.state.popoverOpen,
        target: "Popover1",
        toggle: this.toggle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["PopoverHeader"], null, "Popover Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["PopoverBody"], null, "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")));
    }
  }]);

  return Pop;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/* <Query query={fetchTweetsQuery}>
          {({ loading, error, data }) => {
            if (error) return <div>no data loaded</div>;
            if (loading) return <div>Loading</div>;
            console.log(data);
            return (
              <div>
                <Popover placement="bottom">
                  <PopoverHeader>Popover Title</PopoverHeader>
                  <PopoverBody>
                    Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                    Pellentesque ornare sem lacinia quam venenatis vestibulum.
                  </PopoverBody>
                </Popover>
              </div>
            );
          }}
        </Query> */
// const AfterClickTry = () => (
//   <div>
//     <div>fuck yall</div>
//     {console.log("fuck")}
//   </div>
// );
// function AfterClick() {
//   return (
//     <Query query={fetchTweetsQuery}>
//       {({ loading, error, data }) => {
//         if (error) return <div>no data loaded</div>;
//         if (loading) return <div>Loading</div>;
//         console.log(data);
//         return (
//           <div>
//             <div className="dash-main-table">
//               <div>clicky bro</div>
//               <style jsx>
//                 {`
//                   .dash-main-table {
//                     max-width: 50%;
//                     margin: 3em auto 3em auto;
//                   }
//                 `}
//               </style>
//             </div>
//           </div>
//         );
//       }}
//     </Query>
//   );
// }


var fetchTweetsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

/***/ })

})
//# sourceMappingURL=dashboard.js.a0c8f4417bf9a344ec18.hot-update.js.map