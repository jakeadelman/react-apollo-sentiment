import React, { Component } from "react";
import windowSize from "react-window-size";
import AreaChart from "../Charts/AreaChart";

class ScreenSize extends Component {
  render() {
    return (
      <p>
        Screen width is: {this.props.windowWidth}
        <br />
        Screen height is: {this.props.windowHeight}
        <AreaChart
          margin={this.props.margin}
          width={this.props.windowWidth * 0.8}
          height={300}
        />
      </p>
    );
  }
}

export default windowSize(ScreenSize);
