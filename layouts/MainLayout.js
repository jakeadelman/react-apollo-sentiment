import React from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
// import Fonts from "./index/Fonts";
// import "../index.css";

// const layoutStyle = {
//   margin: 20,
//   padding: 20
// };

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div style={layoutStyle}>{this.props.children}</div>;
  }
}
