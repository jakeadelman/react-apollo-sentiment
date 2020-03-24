webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Charts/Notes.js":
/*!************************************!*\
  !*** ./components/Charts/Notes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./components/Charts/helpers.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n          mutation addNotes($time: String!, $notes: String!) {\n            addNotes(time: $time, notes: $notes)\n          }\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
    _this.state = {
      value: "",
      hashtags: []
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        value: this.props.firstTrade.notes
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(client) {
      var _this2 = this;

      return function (event) {
        // event.preventDefault();
        _this2.setState({
          value: event.target.value
        }, _this2.handleSubmit(client));
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(client) {
      var _this3 = this;

      // return event => {
      // event.preventDefault();
      // alert("A name was submitted: " + this.state.value);
      // let splitted = this.state.value.split(" ");
      // for (let i = 0; i < splitted.length; i++) {
      //   if (splitted[i].includes("#")) {
      //     this.state.hashtags.push(splitted[i]);
      //   }
      //   if (i == splitted.length - 1) {
      console.log("HASHTAGS", this.state.hashtags);
      Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getNotesHashtags"])(this.state.value, this.state.hashtags).then(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
          var notes, time, reso, r;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  notes = res[0]; // let hashtags = res[1];

                  time = _this3.props.firstTrade.timestamp;
                  reso = client.mutate({
                    mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()),
                    variables: {
                      time: time,
                      notes: notes
                    }
                  });
                  _context.next = 5;
                  return reso;

                case 5:
                  r = _context.sent;
                  console.log(r);

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloConsumer"], null, function (client) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FullRow, {
          onSubmit: _this4.handleSubmit(client)
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HashtagDiv, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AddHashtag, null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NotesInput, {
          type: "text",
          value: _this4.state.value,
          onChange: _this4.handleChange(client)
        }));
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



var AddHashtag =
/*#__PURE__*/
function (_Component2) {
  _inherits(AddHashtag, _Component2);

  function AddHashtag(props) {
    var _this5;

    _classCallCheck(this, AddHashtag);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(AddHashtag).call(this, props));
    _this5.state = {};
    return _this5;
  }

  _createClass(AddHashtag, [{
    key: "handleChange",
    value: function handleChange(client) {
      var _this6 = this;

      return function (event) {
        // event.preventDefault();
        _this6.setState({
          value: event.target.value
        }, _this6.handleSubmit(client));
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      // let styles = {
      //   background: "none !important",
      //   backgroundColor: "none"
      // };
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloConsumer"], null, function (client) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], {
          direction: "right",
          isOpen: _this7.state.btnDropright,
          toggle: function toggle() {
            _this7.setState({
              btnDropright: !_this7.state.btnDropright
            });
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownToggle"], null, "+"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownMenu"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
          onSubmit: handleSubmit(client)
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          value: _this7.state.value,
          onChange: _this7.handleChange(client)
        })))));
      });
    }
  }]);

  return AddHashtag;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]); // const HashtagDiv = styled.div`
//   background: #212528;
//   margin: 20px 8px;
//   text-align: center;
//   vertical-align: middle;
//   color: white;
//   padding: 10px;
//   padding-top: 8px;
// `;


var HashtagDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Notes__HashtagDiv",
  componentId: "nwljd5-0"
})(["margin:auto;text-align:center;vertical-align:middle;color:white;padding:10px;padding-top:8px;"]);
var FullRow = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "Notes__FullRow",
  componentId: "nwljd5-1"
})(["display:flex;flex-direction:row;"]);
var NotesSubmit = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "Notes__NotesSubmit",
  componentId: "nwljd5-2"
})(["margin:9px;padding:15px;background:#212528;border:none;color:white;"]);
var NotesInput = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "Notes__NotesInput",
  componentId: "nwljd5-3"
})(["width:100%;padding:12px 20px;margin:8px 0;box-sizing:border-box;background:#f8f8ff;border:none;"]);

/***/ })

})
//# sourceMappingURL=dashboard.js.4cf8faff48d2e6aecea6.hot-update.js.map