webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Dashboard/AddTerm.js":
/*!*****************************************!*\
  !*** ./components/Dashboard/AddTerm.js ***!
  \*****************************************/
/*! exports provided: default, addSt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSt", function() { return addSt; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation AddSearchTerm($searchterm: String!) {\n    addSearchTerm(searchterm: $searchterm)\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // import Popover from "./Popover";



function AddTerm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
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

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    id: "Popover1",
    onClick: function onClick() {
      setClicked(true);
      toggle();
    }
  }, "add term"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Popover"], {
    placement: "bottom",
    isOpen: popover,
    target: "Popover1"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["PopoverHeader"], null, "Add Term"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["PopoverBody"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopBody, null))));
}

var PopBody = function PopBody() {
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      newTerm = _useState6[0],
      setNewTerm = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      clicked = _useState8[0],
      setClicked = _useState8[1];

  console.log(newTerm);

  function handleClick() {
    console.log("was clicked");
    setClicked(true); // return <AddTodo term={newTerm} />;
  }

  if (!!clicked) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      mutation: addSt
    }, function (addSearchTerm, _ref) {
      var data = _ref.data;
      setClicked(false);
      addSearchTerm({
        variables: {
          searchterm: newTerm
        }
      });
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AddTodo, null));
};

var addSt = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

var AddTodo = function AddTodo() {
  var input;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
    mutation: addSt
  }, function (addSearchTerm, _ref2) {
    var data = _ref2.data;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-297400294"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: function onSubmit(e) {
        e.preventDefault();
        addSearchTerm({
          variables: {
            searchterm: input.value
          }
        });
        input.value = "";
        location.reload(true);
      },
      className: "jsx-297400294"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      ref: function ref(node) {
        input = node;
      },
      className: "jsx-297400294"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "submit",
      className: "jsx-297400294" + " " + "add-button"
    }, "Add")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "297400294",
      css: ".add-button.jsx-297400294{margin-top:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2luc3RhZ2F1Z2UvZnJvbnRlbmQvY29tcG9uZW50cy9EYXNoYm9hcmQvQWRkVGVybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvR2EsQUFHZ0MsZUFDakIiLCJmaWxlIjoiL1VzZXJzL21hbngvcHJvamVjdHMvaW5zdGFnYXVnZS9mcm9udGVuZC9jb21wb25lbnRzL0Rhc2hib2FyZC9BZGRUZXJtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE11dGF0aW9uIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbi8vIGltcG9ydCBQb3BvdmVyIGZyb20gXCIuL1BvcG92ZXJcIjtcbmltcG9ydCB7IEJ1dHRvbiwgUG9wb3ZlciwgUG9wb3ZlckhlYWRlciwgUG9wb3ZlckJvZHkgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkVGVybShwcm9wcykge1xuICBjb25zdCBbY2xpY2tlZCwgc2V0Q2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwb3BvdmVyLCBzZXRQb3BvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgaWYgKCFwb3BvdmVyKSB7XG4gICAgICBzZXRQb3BvdmVyKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRQb3BvdmVyKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGlkPVwiUG9wb3ZlcjFcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0Q2xpY2tlZCh0cnVlKTtcbiAgICAgICAgICB0b2dnbGUoKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgYWRkIHRlcm1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPFBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tXCIgaXNPcGVuPXtwb3BvdmVyfSB0YXJnZXQ9XCJQb3BvdmVyMVwiPlxuICAgICAgICA8UG9wb3ZlckhlYWRlcj5BZGQgVGVybTwvUG9wb3ZlckhlYWRlcj5cbiAgICAgICAgPFBvcG92ZXJCb2R5PlxuICAgICAgICAgIDxQb3BCb2R5IC8+XG4gICAgICAgIDwvUG9wb3ZlckJvZHk+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IFBvcEJvZHkgPSAoKSA9PiB7XG4gIGNvbnN0IFtuZXdUZXJtLCBzZXROZXdUZXJtXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjbGlja2VkLCBzZXRDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc29sZS5sb2cobmV3VGVybSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgY29uc29sZS5sb2coXCJ3YXMgY2xpY2tlZFwiKTtcbiAgICBzZXRDbGlja2VkKHRydWUpO1xuICAgIC8vIHJldHVybiA8QWRkVG9kbyB0ZXJtPXtuZXdUZXJtfSAvPjtcbiAgfVxuXG4gIGlmICghIWNsaWNrZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE11dGF0aW9uIG11dGF0aW9uPXthZGRTdH0+XG4gICAgICAgIHsoYWRkU2VhcmNoVGVybSwgeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICBzZXRDbGlja2VkKGZhbHNlKTtcbiAgICAgICAgICBhZGRTZWFyY2hUZXJtKHsgdmFyaWFibGVzOiB7IHNlYXJjaHRlcm06IG5ld1Rlcm0gfSB9KTtcbiAgICAgICAgfX1cbiAgICAgIDwvTXV0YXRpb24+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxBZGRUb2RvIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkU3QgPSBncWxgXG4gIG11dGF0aW9uIEFkZFNlYXJjaFRlcm0oJHNlYXJjaHRlcm06IFN0cmluZyEpIHtcbiAgICBhZGRTZWFyY2hUZXJtKHNlYXJjaHRlcm06ICRzZWFyY2h0ZXJtKVxuICB9XG5gO1xuXG5jb25zdCBBZGRUb2RvID0gKCkgPT4ge1xuICBsZXQgaW5wdXQ7XG5cbiAgcmV0dXJuIChcbiAgICA8TXV0YXRpb24gbXV0YXRpb249e2FkZFN0fT5cbiAgICAgIHsoYWRkU2VhcmNoVGVybSwgeyBkYXRhIH0pID0+IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2UgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGFkZFNlYXJjaFRlcm0oeyB2YXJpYWJsZXM6IHsgc2VhcmNodGVybTogaW5wdXQudmFsdWUgfSB9KTtcbiAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gbm9kZTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFkZC1idXR0b25cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAuYWRkLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L011dGF0aW9uPlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects/instagauge/frontend/components/Dashboard/AddTerm.js */"
    }));
  });
};

/***/ })

})
//# sourceMappingURL=dashboard.js.c83b671a267e94601c91.hot-update.js.map