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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
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
    setClicked(true); // return <AddTodo term={newTerm} />;
  }

  if (!!clicked) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddTodo, null));
}; // const AddTodo = props => {
//   return (
//     <Mutation mutation={addSearchTermQuery}>
//       {(addSearchTerm, { data }) =>
//         addSearchTerm({ variables: { searchterm: props.term } })
//       }
//     </Mutation>
//   );
// };


var addSt = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var AddTodo = function AddTodo() {
  var input;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: addSt
  }, function (addSearchTerm, _ref2) {
    var data = _ref2.data;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: function onSubmit(e) {
        e.preventDefault();
        addSearchTerm({
          variables: {
            searchterm: input.value
          }
        });
        input.value = "";
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/dashboard");
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

/***/ }),

/***/ "./node_modules/aws-sdk/apis/acm-2015-12-08.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/acm-2015-12-08.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/acm-2015-12-08.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/apigateway-2015-07-09.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/apigateway-2015-07-09.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/application-autoscaling-2016-02-06.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/application-autoscaling-2016-02-06.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/autoscaling-2011-01-01.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/autoscaling-2011-01-01.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudformation-2010-05-15.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudformation-2010-05-15.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudformation-2010-05-15.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudfront-2016-11-25.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudfront-2016-11-25.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudfront-2016-11-25.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudfront-2017-03-25.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudfront-2017-03-25.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudfront-2017-03-25.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudfront-2017-10-30.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudfront-2017-10-30.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudfront-2017-10-30.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudfront-2018-06-18.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudfront-2018-06-18.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudfront-2018-06-18.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudfront-2018-11-05.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudfront-2018-11-05.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudfront-2018-11-05.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudhsm-2014-05-30.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudhsm-2014-05-30.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudtrail-2013-11-01.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/cloudtrail-2013-11-01.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/codebuild-2016-10-06.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/codebuild-2016-10-06.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/codecommit-2015-04-13.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/codecommit-2015-04-13.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/codedeploy-2014-10-06.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/codedeploy-2014-10-06.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/codedeploy-2014-10-06.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/codepipeline-2015-07-09.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/codepipeline-2015-07-09.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/cognito-identity-2014-06-30.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/cognito-identity-2014-06-30.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/cognito-idp-2016-04-18.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/cognito-idp-2016-04-18.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/cognito-sync-2014-06-30.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/comprehend-2017-11-27.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/comprehend-2017-11-27.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/config-2014-11-12.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/config-2014-11-12.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/cur-2017-01-06.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/cur-2017-01-06.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/devicefarm-2015-06-23.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/devicefarm-2015-06-23.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/directconnect-2012-10-25.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/directconnect-2012-10-25.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/dynamodb-2011-12-05.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/dynamodb-2011-12-05.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/dynamodb-2011-12-05.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/dynamodb-2012-08-10.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/dynamodb-2012-08-10.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/dynamodb-2012-08-10.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/ec2-2016-11-15.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/ec2-2016-11-15.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/ec2-2016-11-15.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/ecr-2015-09-21.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/ecr-2015-09-21.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/ecs-2014-11-13.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/ecs-2014-11-13.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/ecs-2014-11-13.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/elasticache-2015-02-02.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/elasticache-2015-02-02.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/elasticache-2015-02-02.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/elasticbeanstalk-2010-12-01.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/elasticbeanstalk-2010-12-01.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/elasticfilesystem-2015-02-01.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/elasticfilesystem-2015-02-01.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/elasticloadbalancing-2012-06-01.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/elasticloadbalancing-2012-06-01.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/elasticloadbalancing-2012-06-01.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/elasticloadbalancingv2-2015-12-01.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/elasticloadbalancingv2-2015-12-01.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/elasticloadbalancingv2-2015-12-01.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/elasticmapreduce-2009-03-31.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/elasticmapreduce-2009-03-31.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/elasticmapreduce-2009-03-31.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/elastictranscoder-2012-09-25.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/elastictranscoder-2012-09-25.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/elastictranscoder-2012-09-25.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/email-2010-12-01.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/email-2010-12-01.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/email-2010-12-01.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/events-2015-10-07.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/events-2015-10-07.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/firehose-2015-08-04.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/firehose-2015-08-04.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/gamelift-2015-10-01.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/gamelift-2015-10-01.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/inspector-2016-02-16.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/inspector-2016-02-16.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/iot-2015-05-28.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/iot-2015-05-28.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/iot-data-2015-05-28.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/kinesis-2013-12-02.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/kinesis-2013-12-02.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/kinesis-2013-12-02.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/kinesis-video-archived-media-2017-09-30.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/kinesis-video-archived-media-2017-09-30.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/kinesis-video-media-2017-09-30.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/kinesis-video-media-2017-09-30.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/kinesisvideo-2017-09-30.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/kinesisvideo-2017-09-30.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/kms-2014-11-01.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/kms-2014-11-01.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/lambda-2014-11-11.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/lambda-2014-11-11.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/lambda-2015-03-31.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/lambda-2015-03-31.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/lex-models-2017-04-19.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/lex-models-2017-04-19.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/logs-2014-03-28.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/logs-2014-03-28.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/machinelearning-2014-12-12.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/machinelearning-2014-12-12.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/machinelearning-2014-12-12.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/marketplacecommerceanalytics-2015-07-01.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/marketplacecommerceanalytics-2015-07-01.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/mediastore-data-2017-09-01.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/mediastore-data-2017-09-01.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/metadata.json":
false,

/***/ "./node_modules/aws-sdk/apis/mobileanalytics-2014-06-05.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/monitoring-2010-08-01.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/monitoring-2010-08-01.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/monitoring-2010-08-01.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/mturk-requester-2017-01-17.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/mturk-requester-2017-01-17.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/opsworks-2013-02-18.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/opsworks-2013-02-18.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/opsworks-2013-02-18.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/polly-2016-06-10.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/polly-2016-06-10.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/pricing-2017-10-15.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/pricing-2017-10-15.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/rds-2013-01-10.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/rds-2013-01-10.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/rds-2013-02-12.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/rds-2013-02-12.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/rds-2013-09-09.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/rds-2013-09-09.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/rds-2013-09-09.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/rds-2014-09-01.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/rds-2014-09-01.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/rds-2014-10-31.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/rds-2014-10-31.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/rds-2014-10-31.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/redshift-2012-12-01.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/redshift-2012-12-01.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/redshift-2012-12-01.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/rekognition-2016-06-27.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/rekognition-2016-06-27.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/route53-2013-04-01.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/route53-2013-04-01.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/route53-2013-04-01.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/route53domains-2014-05-15.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/route53domains-2014-05-15.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/runtime.lex-2016-11-28.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/runtime.lex-2016-11-28.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/s3-2006-03-01.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/s3-2006-03-01.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/s3-2006-03-01.waiters2.json":
false,

/***/ "./node_modules/aws-sdk/apis/secretsmanager-2017-10-17.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/secretsmanager-2017-10-17.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/servicecatalog-2015-12-10.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/servicecatalog-2015-12-10.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/sns-2010-03-31.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/sns-2010-03-31.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/sqs-2012-11-05.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/sqs-2012-11-05.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/ssm-2014-11-06.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/ssm-2014-11-06.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/storagegateway-2013-06-30.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/storagegateway-2013-06-30.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/streams.dynamodb-2012-08-10.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/streams.dynamodb-2012-08-10.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/sts-2011-06-15.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/sts-2011-06-15.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/translate-2017-07-01.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/translate-2017-07-01.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/waf-2015-08-24.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/waf-2015-08-24.paginators.json":
false,

/***/ "./node_modules/aws-sdk/apis/workdocs-2016-05-01.min.json":
false,

/***/ "./node_modules/aws-sdk/apis/workdocs-2016-05-01.paginators.json":
false,

/***/ "./node_modules/aws-sdk/clients/acm.js":
false,

/***/ "./node_modules/aws-sdk/clients/apigateway.js":
false,

/***/ "./node_modules/aws-sdk/clients/applicationautoscaling.js":
false,

/***/ "./node_modules/aws-sdk/clients/autoscaling.js":
false,

/***/ "./node_modules/aws-sdk/clients/browser_default.js":
false,

/***/ "./node_modules/aws-sdk/clients/cloudformation.js":
false,

/***/ "./node_modules/aws-sdk/clients/cloudfront.js":
false,

/***/ "./node_modules/aws-sdk/clients/cloudhsm.js":
false,

/***/ "./node_modules/aws-sdk/clients/cloudtrail.js":
false,

/***/ "./node_modules/aws-sdk/clients/cloudwatch.js":
false,

/***/ "./node_modules/aws-sdk/clients/cloudwatchevents.js":
false,

/***/ "./node_modules/aws-sdk/clients/cloudwatchlogs.js":
false,

/***/ "./node_modules/aws-sdk/clients/codebuild.js":
false,

/***/ "./node_modules/aws-sdk/clients/codecommit.js":
false,

/***/ "./node_modules/aws-sdk/clients/codedeploy.js":
false,

/***/ "./node_modules/aws-sdk/clients/codepipeline.js":
false,

/***/ "./node_modules/aws-sdk/clients/cognitoidentity.js":
false,

/***/ "./node_modules/aws-sdk/clients/cognitoidentityserviceprovider.js":
false,

/***/ "./node_modules/aws-sdk/clients/cognitosync.js":
false,

/***/ "./node_modules/aws-sdk/clients/comprehend.js":
false,

/***/ "./node_modules/aws-sdk/clients/configservice.js":
false,

/***/ "./node_modules/aws-sdk/clients/cur.js":
false,

/***/ "./node_modules/aws-sdk/clients/devicefarm.js":
false,

/***/ "./node_modules/aws-sdk/clients/directconnect.js":
false,

/***/ "./node_modules/aws-sdk/clients/dynamodb.js":
false,

/***/ "./node_modules/aws-sdk/clients/dynamodbstreams.js":
false,

/***/ "./node_modules/aws-sdk/clients/ec2.js":
false,

/***/ "./node_modules/aws-sdk/clients/ecr.js":
false,

/***/ "./node_modules/aws-sdk/clients/ecs.js":
false,

/***/ "./node_modules/aws-sdk/clients/efs.js":
false,

/***/ "./node_modules/aws-sdk/clients/elasticache.js":
false,

/***/ "./node_modules/aws-sdk/clients/elasticbeanstalk.js":
false,

/***/ "./node_modules/aws-sdk/clients/elastictranscoder.js":
false,

/***/ "./node_modules/aws-sdk/clients/elb.js":
false,

/***/ "./node_modules/aws-sdk/clients/elbv2.js":
false,

/***/ "./node_modules/aws-sdk/clients/emr.js":
false,

/***/ "./node_modules/aws-sdk/clients/firehose.js":
false,

/***/ "./node_modules/aws-sdk/clients/gamelift.js":
false,

/***/ "./node_modules/aws-sdk/clients/inspector.js":
false,

/***/ "./node_modules/aws-sdk/clients/iot.js":
false,

/***/ "./node_modules/aws-sdk/clients/iotdata.js":
false,

/***/ "./node_modules/aws-sdk/clients/kinesis.js":
false,

/***/ "./node_modules/aws-sdk/clients/kinesisvideo.js":
false,

/***/ "./node_modules/aws-sdk/clients/kinesisvideoarchivedmedia.js":
false,

/***/ "./node_modules/aws-sdk/clients/kinesisvideomedia.js":
false,

/***/ "./node_modules/aws-sdk/clients/kms.js":
false,

/***/ "./node_modules/aws-sdk/clients/lambda.js":
false,

/***/ "./node_modules/aws-sdk/clients/lexmodelbuildingservice.js":
false,

/***/ "./node_modules/aws-sdk/clients/lexruntime.js":
false,

/***/ "./node_modules/aws-sdk/clients/machinelearning.js":
false,

/***/ "./node_modules/aws-sdk/clients/marketplacecommerceanalytics.js":
false,

/***/ "./node_modules/aws-sdk/clients/mediastoredata.js":
false,

/***/ "./node_modules/aws-sdk/clients/mobileanalytics.js":
false,

/***/ "./node_modules/aws-sdk/clients/mturk.js":
false,

/***/ "./node_modules/aws-sdk/clients/opsworks.js":
false,

/***/ "./node_modules/aws-sdk/clients/polly.js":
false,

/***/ "./node_modules/aws-sdk/clients/pricing.js":
false,

/***/ "./node_modules/aws-sdk/clients/rds.js":
false,

/***/ "./node_modules/aws-sdk/clients/redshift.js":
false,

/***/ "./node_modules/aws-sdk/clients/rekognition.js":
false,

/***/ "./node_modules/aws-sdk/clients/route53.js":
false,

/***/ "./node_modules/aws-sdk/clients/route53domains.js":
false,

/***/ "./node_modules/aws-sdk/clients/s3.js":
false,

/***/ "./node_modules/aws-sdk/clients/secretsmanager.js":
false,

/***/ "./node_modules/aws-sdk/clients/servicecatalog.js":
false,

/***/ "./node_modules/aws-sdk/clients/ses.js":
false,

/***/ "./node_modules/aws-sdk/clients/sns.js":
false,

/***/ "./node_modules/aws-sdk/clients/sqs.js":
false,

/***/ "./node_modules/aws-sdk/clients/ssm.js":
false,

/***/ "./node_modules/aws-sdk/clients/storagegateway.js":
false,

/***/ "./node_modules/aws-sdk/clients/sts.js":
false,

/***/ "./node_modules/aws-sdk/clients/translate.js":
false,

/***/ "./node_modules/aws-sdk/clients/waf.js":
false,

/***/ "./node_modules/aws-sdk/clients/workdocs.js":
false,

/***/ "./node_modules/aws-sdk/lib/api_loader.js":
false,

/***/ "./node_modules/aws-sdk/lib/browser.js":
false,

/***/ "./node_modules/aws-sdk/lib/browserCryptoLib.js":
false,

/***/ "./node_modules/aws-sdk/lib/browserHashUtils.js":
false,

/***/ "./node_modules/aws-sdk/lib/browserHmac.js":
false,

/***/ "./node_modules/aws-sdk/lib/browserMd5.js":
false,

/***/ "./node_modules/aws-sdk/lib/browserSha1.js":
false,

/***/ "./node_modules/aws-sdk/lib/browserSha256.js":
false,

/***/ "./node_modules/aws-sdk/lib/browser_loader.js":
false,

/***/ "./node_modules/aws-sdk/lib/cloudfront/signer.js":
false,

/***/ "./node_modules/aws-sdk/lib/config.js":
false,

/***/ "./node_modules/aws-sdk/lib/core.js":
false,

/***/ "./node_modules/aws-sdk/lib/credentials.js":
false,

/***/ "./node_modules/aws-sdk/lib/credentials/chainable_temporary_credentials.js":
false,

/***/ "./node_modules/aws-sdk/lib/credentials/cognito_identity_credentials.js":
false,

/***/ "./node_modules/aws-sdk/lib/credentials/credential_provider_chain.js":
false,

/***/ "./node_modules/aws-sdk/lib/credentials/saml_credentials.js":
false,

/***/ "./node_modules/aws-sdk/lib/credentials/temporary_credentials.js":
false,

/***/ "./node_modules/aws-sdk/lib/credentials/web_identity_credentials.js":
false,

/***/ "./node_modules/aws-sdk/lib/discover_endpoint.js":
false,

/***/ "./node_modules/aws-sdk/lib/dynamodb/converter.js":
false,

/***/ "./node_modules/aws-sdk/lib/dynamodb/document_client.js":
false,

/***/ "./node_modules/aws-sdk/lib/dynamodb/numberValue.js":
false,

/***/ "./node_modules/aws-sdk/lib/dynamodb/set.js":
false,

/***/ "./node_modules/aws-sdk/lib/dynamodb/translator.js":
false,

/***/ "./node_modules/aws-sdk/lib/dynamodb/types.js":
false,

/***/ "./node_modules/aws-sdk/lib/event-stream/buffered-create-event-stream.js":
false,

/***/ "./node_modules/aws-sdk/lib/event-stream/event-message-chunker.js":
false,

/***/ "./node_modules/aws-sdk/lib/event-stream/int64.js":
false,

/***/ "./node_modules/aws-sdk/lib/event-stream/parse-event.js":
false,

/***/ "./node_modules/aws-sdk/lib/event-stream/parse-message.js":
false,

/***/ "./node_modules/aws-sdk/lib/event-stream/split-message.js":
false,

/***/ "./node_modules/aws-sdk/lib/event-stream/to-buffer.js":
false,

/***/ "./node_modules/aws-sdk/lib/event_listeners.js":
false,

/***/ "./node_modules/aws-sdk/lib/http.js":
false,

/***/ "./node_modules/aws-sdk/lib/http/xhr.js":
false,

/***/ "./node_modules/aws-sdk/lib/json/builder.js":
false,

/***/ "./node_modules/aws-sdk/lib/json/parser.js":
false,

/***/ "./node_modules/aws-sdk/lib/model/api.js":
false,

/***/ "./node_modules/aws-sdk/lib/model/collection.js":
false,

/***/ "./node_modules/aws-sdk/lib/model/operation.js":
false,

/***/ "./node_modules/aws-sdk/lib/model/paginator.js":
false,

/***/ "./node_modules/aws-sdk/lib/model/resource_waiter.js":
false,

/***/ "./node_modules/aws-sdk/lib/model/shape.js":
false,

/***/ "./node_modules/aws-sdk/lib/param_validator.js":
false,

/***/ "./node_modules/aws-sdk/lib/polly/presigner.js":
false,

/***/ "./node_modules/aws-sdk/lib/protocol/helpers.js":
false,

/***/ "./node_modules/aws-sdk/lib/protocol/json.js":
false,

/***/ "./node_modules/aws-sdk/lib/protocol/query.js":
false,

/***/ "./node_modules/aws-sdk/lib/protocol/rest.js":
false,

/***/ "./node_modules/aws-sdk/lib/protocol/rest_json.js":
false,

/***/ "./node_modules/aws-sdk/lib/protocol/rest_xml.js":
false,

/***/ "./node_modules/aws-sdk/lib/query/query_param_serializer.js":
false,

/***/ "./node_modules/aws-sdk/lib/rds/signer.js":
false,

/***/ "./node_modules/aws-sdk/lib/realclock/browserClock.js":
false,

/***/ "./node_modules/aws-sdk/lib/region_config.js":
false,

/***/ "./node_modules/aws-sdk/lib/region_config_data.json":
false,

/***/ "./node_modules/aws-sdk/lib/request.js":
false,

/***/ "./node_modules/aws-sdk/lib/resource_waiter.js":
false,

/***/ "./node_modules/aws-sdk/lib/response.js":
false,

/***/ "./node_modules/aws-sdk/lib/s3/managed_upload.js":
false,

/***/ "./node_modules/aws-sdk/lib/sequential_executor.js":
false,

/***/ "./node_modules/aws-sdk/lib/service.js":
false,

/***/ "./node_modules/aws-sdk/lib/services/apigateway.js":
false,

/***/ "./node_modules/aws-sdk/lib/services/cloudfront.js":
false,

/***/ "./node_modules/aws-sdk/lib/services/cognitoidentity.js":
false,

/***/ "./node_modules/aws-sdk/lib/services/dynamodb.js":
false,

/***/ "./node_modules/aws-sdk/lib/services/ec2.js":
false,

/***/ "./node_modules/aws-sdk/lib/services/iotdata.js":
false,

/***/ "./node_modules/aws-sdk/lib/services/lambda.js":
false,

/***/ "./node_modules/aws-sdk/lib/services/machinelearning.js":
false,

/***/ "./node_modules/aws-sdk/lib/services/polly.js":
false,

/***/ "./node_modules/aws-sdk/lib/services/rds.js":
false,

/***/ "./node_modules/aws-sdk/lib/services/route53.js":
false,

/***/ "./node_modules/aws-sdk/lib/services/s3.js":
false,

/***/ "./node_modules/aws-sdk/lib/services/sqs.js":
false,

/***/ "./node_modules/aws-sdk/lib/services/sts.js":
false,

/***/ "./node_modules/aws-sdk/lib/signers/presign.js":
false,

/***/ "./node_modules/aws-sdk/lib/signers/request_signer.js":
false,

/***/ "./node_modules/aws-sdk/lib/signers/s3.js":
false,

/***/ "./node_modules/aws-sdk/lib/signers/v2.js":
false,

/***/ "./node_modules/aws-sdk/lib/signers/v3.js":
false,

/***/ "./node_modules/aws-sdk/lib/signers/v3https.js":
false,

/***/ "./node_modules/aws-sdk/lib/signers/v4.js":
false,

/***/ "./node_modules/aws-sdk/lib/signers/v4_credentials.js":
false,

/***/ "./node_modules/aws-sdk/lib/state_machine.js":
false,

/***/ "./node_modules/aws-sdk/lib/util.js":
false,

/***/ "./node_modules/aws-sdk/lib/xml/browser_parser.js":
false,

/***/ "./node_modules/aws-sdk/lib/xml/builder.js":
false,

/***/ "./node_modules/aws-sdk/lib/xml/escape-attribute.js":
false,

/***/ "./node_modules/aws-sdk/lib/xml/escape-element.js":
false,

/***/ "./node_modules/aws-sdk/lib/xml/xml-node.js":
false,

/***/ "./node_modules/aws-sdk/lib/xml/xml-text.js":
false,

/***/ "./node_modules/aws-sdk/vendor/endpoint-cache/index.js":
false,

/***/ "./node_modules/aws-sdk/vendor/endpoint-cache/utils/LRU.js":
false,

/***/ "./node_modules/base64-js/index.js":
false,

/***/ "./node_modules/buffer/index.js":
false,

/***/ "./node_modules/buffer/node_modules/ieee754/index.js":
false,

/***/ "./node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/isarray/index.js":
false,

/***/ "./node_modules/jmespath/jmespath.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/events/events.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/util/support/isBufferBrowser.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/util/util.js":
false,

/***/ "./node_modules/setimmediate/setImmediate.js":
false,

/***/ "./node_modules/timers-browserify/main.js":
false,

/***/ "./node_modules/uuid/index.js":
false,

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
false,

/***/ "./node_modules/uuid/lib/rng-browser.js":
false,

/***/ "./node_modules/uuid/v1.js":
false,

/***/ "./node_modules/uuid/v4.js":
false,

/***/ 5:
false

})
//# sourceMappingURL=dashboard.js.2230acac747af3fa6cc7.hot-update.js.map