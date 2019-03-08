import React, { PureComponent } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend
} from "recharts";

const data01 = [
  { hour: "12a", index: 1, value: 170 },
  { hour: "1a", index: 1, value: 180 },
  { hour: "2a", index: 1, value: 150 },
  { hour: "3a", index: 1, value: 120 },
  { hour: "4a", index: 1, value: 200 },
  { hour: "5a", index: 1, value: 300 },
  { hour: "6a", index: 1, value: 400 },
  { hour: "7a", index: 1, value: 200 }
];

const parseDomain = () => [
  0,
  Math.max(Math.max.apply(null, data01.map(entry => entry.value)))
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/9kvhed7a/";

  renderTooltip = props => {
    const { active, payload } = props;

    if (active && payload && payload.length) {
      const data = payload[0] && payload[0].payload;

      return (
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #999",
            margin: 0,
            padding: 10
          }}
        >
          <p>{data.hour}</p>
          <p>
            <span>value: </span>
            {data.value}
          </p>
        </div>
      );
    }

    return null;
  };

  render() {
    const domain = parseDomain();
    const range = [16, 225];

    return (
      <div style={{ marginTop: "5px" }}>
        <ScatterChart
          width={this.props.width}
          height={60}
          margin={{
            top: 10,
            right: 35,
            bottom: 0,
            left: 65
          }}
        >
          <XAxis
            type="category"
            dataKey="hour"
            interval={1}
            tick={{ fontSize: 0 }}
            tickLine={{ transform: "translate(0, -6)" }}
          />
          <YAxis
            type="number"
            dataKey="index"
            height={10}
            width={80}
            tick={false}
            tickLine={false}
            axisLine={false}
            hide="true"
          />
          <ZAxis
            type="number"
            dataKey="value"
            domain={domain}
            range={range}
            style={{ border: "2px solid black" }}
          />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            wrapperStyle={{ zIndex: 100 }}
            content={this.renderTooltip}
          />
          <Scatter data={data01} fill="#62BFED" />
        </ScatterChart>
      </div>
    );
  }
}
