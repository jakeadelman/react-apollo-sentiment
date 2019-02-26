import Router from "next/router";
import React from "react";
const Cookie = require("js-cookie");

export default class Logout extends React.Component {
  componentDidMount() {
    Cookie.remove("isAuth");
    Router.push("/");
  }
  render() {
    return null;
  }
}
