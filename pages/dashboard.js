import React from "react";
// import DashMain from "../components/DashMain";
// import FacebookLogin from "../components/FacebookLogin";
import DashInitialTerms from "../components/Dashboard/DashInitialTerms";

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DashInitialTerms />
      </div>
    );
  }
}
