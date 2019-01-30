import React from "react";
import ConfirmUserComponent from "./ConfirmUserComponent";

export default class Conf extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ConfirmUserComponent token={this.props.token} />;
  }
}
