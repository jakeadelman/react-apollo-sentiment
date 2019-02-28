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
    this.onTheClick = this.onTheClick.bind(this);
    this.check = this.check.bind(this);
  }

  componentDidMount() {
    let cook = Cookie.get("isAuth") == "true";
    if (!cook) {
      Router.push("/");
    } else if (!!cook) {
      this.setState({ isAuth: cook });
    }
    setTimeout(() => {
      console.log(`isAuth is ${this.props.store.isAuth} on initial load`);
    }, 1000);
    // this.props.store.isAuth = true;

    // setTimeout(() => {
    //   this.props.store.isAuth = true;
    // }, 3000);

    // this.setState({ iStore: this.props.store.isAuth });
  }

  onTheClick() {
    // let st = new Store();
    // hydrate("some", st).then(() => {
    //   this.props.store.isAuth = true;

    //   console.log("someStore has been hydrated");
    // });

    this.props.store.isAuth = !this.props.store.isAuth;

    // const result = hydrate("some", st, this.state.iStore);
    // const rehydrate = result.rehydrate;
    // result.then(() => console.log("some hydrated"));

    // setTimeout(() => {
    //   rehydrate().then(() => console.log("rehydrated"));
    // }, 3000);
  }

  check() {
    console.log(`isAuth is ${this.props.store.isAuth}`);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <button onClick={this.onTheClick}>rehydrate</button>
          <button onClick={this.check}>check</button>
          <FetchQuery />
        </div>
      </ThemeProvider>
    );
  }

  // render() {
  //   return (
  //     <ThemeProvider theme={theme}>
  //       <FetchQuery />
  //     </ThemeProvider>
  //   );
  // }
}
