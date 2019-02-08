import React from "react";
import DashMain from "../components/DashMain";
import FacebookLogin from "../components/FacebookLogin";

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FacebookLogin />
        <DashMain />
      </div>
    );
  }
}
