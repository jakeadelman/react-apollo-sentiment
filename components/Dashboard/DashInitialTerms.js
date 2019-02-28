import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import FetchQuery from "./FetchQuery";
import Router from "next/router";
const Cookie = require("js-cookie");

export default class DashInitialTerms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let cook = Cookie.get("isAuth") == "true";
    if (!cook) {
      Router.push("/");
    } else if (!!cook) {
      this.setState({ isAuth: cook });
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <FetchQuery />
      </ThemeProvider>
    );
  }
}
