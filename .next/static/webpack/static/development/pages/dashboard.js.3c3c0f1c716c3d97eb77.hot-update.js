webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Dashboard/AddTerm.js":
/*!*****************************************!*\
  !*** ./components/Dashboard/AddTerm.js ***!
  \*****************************************/
/*! exports provided: default, addSearchTermQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSearchTermQuery", function() { return addSearchTermQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query addSearchTerm($searchterm: String!) {\n    fetchTerms(searchterm: $searchterm)\n  }\n"]);

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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["PopoverHeader"], null, "Popover Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["PopoverBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PopBody, null))));
}

var PopBody = function PopBody() {
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      newTerm = _useState6[0],
      setNewTerm = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      clicked = _useState8[0],
      setClicked = _useState8[1];

  console.log(newTerm);

  function handleClick() {
    console.log("was clicked");
    setClicked(true);
  }

  var addSearchTermVars = {
    searchterm: newTerm
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: addSearchTermQuery
  }, function (addSearchTerm, _ref) {
    var data = _ref.data;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: function onSubmit(e) {
        e.preventDefault();
        addTodo({
          variables: {
            searchterm: "bitcoin"
          }
        });
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit"
    }, "Add Todo")));
  });
};

{
  /* <div>
      <input
        type="text"
        placeholder="enter term to add"
        onChange={e => setNewTerm(e.target.value)}
      />
      <button onClick={() => handleClick()}>submit</button>
      {!!clicked ? (
        <Mutation mutation={addSearchTermQuery} variables={addSearchTermVars}>
          {({ loading, error, data }) => {
            if (error) return <div>no data loaded</div>;
            if (loading) return <div>Loading</div>;
            console.log(data);
            return <div>success</div>;
          }}
        </Mutation>
      ) : null}
    </div> */
}

var AddTodo = function AddTodo() {
  var input;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: ADD_TODO
  }, function (addTodo, _ref2) {
    var data = _ref2.data;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: function onSubmit(e) {
        e.preventDefault();
        addTodo({
          variables: {
            type: input.value
          }
        });
        input.value = "";
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      ref: function ref(node) {
        input = node;
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit"
    }, "Add Todo")));
  });
};
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


var addSearchTermQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

/***/ })

})
//# sourceMappingURL=dashboard.js.3c3c0f1c716c3d97eb77.hot-update.js.map