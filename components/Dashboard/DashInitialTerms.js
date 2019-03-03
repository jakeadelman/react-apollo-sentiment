import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import FetchQuery from "./FetchQuery";
import Router from "next/router";
import { inject, observer } from "mobx-react";
import { Store, hydrate } from "../../stores/store";

const Cookie = require("js-cookie");

@inject("store")
@observer
export default class DashInitialTerms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.wasClicked = this.wasClicked.bind(this);
  }

  componentDidMount() {
    let cook = Cookie.get("isAuth") == "true";
    if (!cook) {
      Router.push("/");
    } else if (!!cook) {
      this.setState({ isAuth: cook });
    }

    this.setState({ currency: this.props.store.currency });
  }

  wasClicked() {
    if (this.props.store.currency == "bitcoin") {
      this.props.store.currency = "ethereum";
      this.setState({ currency: "ethereum" });
    } else if (this.props.store.currency == "ethereum") {
      this.props.store.currency = "bitcoin";
      this.setState({ currency: "bitcoin" });
    }
    console.log(this.state.currency);
    // console.log(this.props.store.currency);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <button onClick={this.wasClicked}>clickdis</button>
          <FetchQuery currency={this.state.currency} />
        </div>
      </ThemeProvider>
    );
  }
}
