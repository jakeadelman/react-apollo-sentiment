import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    // this.resize = this.resize.bind(this);
  }

  //   resize = () => this.forceUpdate();

  //   componentDidMount() {
  //     console.log(window.innerWidth);

  //     window.addEventListener("resize", this.resize);
  //   }

  componentWillUnmount() {
    console.log(window.innerWidth);
    window.removeEventListener("resize", this.resize);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentDidUpdate() {
    console.log(this.state);
  }

  //   componentDidUpdate() {
  //     // this.updateWindowDimensions();
  //     console.log(window.innerWidth);
  //     window.removeEventListener("resize", this.updateWindowDimensions);
  //   }

  updateWindowDimensions() {
    console.log(this.state.width);
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log(this.state.width);
  }

  render() {
    return (
      <div>
        <div>this is a fucking div</div>
      </div>
    );
  }
}
