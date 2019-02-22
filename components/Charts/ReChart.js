import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    sentiment: 4000,
    amt: 2400
  },
  {
    name: "Page B",
    sentiment: 3000,
    amt: 2210
  },
  {
    name: "Page C",
    sentiment: 2000,
    amt: 2290
  },
  {
    name: "Page D",
    sentiment: 2780,
    amt: 2000
  },
  {
    name: "Page E",
    sentiment: 1890,
    amt: 2181
  },
  {
    name: "Page F",
    sentiment: 2390,
    amt: 2500
  },
  {
    name: "the date",
    sentiment: 3490,
    amt: 2100
  }
];

export default class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentDidUpdate() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log(this.state.width);
  }
  // static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    return (
      <LineChart
        width={this.state.width * 0.8}
        height={200}
        data={data.slice(0, 7)}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line type="monotone" dataKey="sentiment" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
