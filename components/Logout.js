import Router from "next/router";
import { hydrate, userStore } from "../stores/UserStore";
import React from "react";

export default class Logout extends React.Component {
  componentDidMount() {
    userStore.isAuth = false;
    hydrate("user", userStore).then(() => console.log("has been hydrated"));
    window.location.replace("https://tradrr.app/");
  }
  render() {
    return null;
  }
}
