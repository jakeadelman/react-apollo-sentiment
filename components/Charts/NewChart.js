import React from "react";
import { AxisLeft, AxisBottom } from "@vx/axis";
import { appleStock } from "@vx/mock-data";
import { scaleTime, scaleLinear } from "@vx/scale";
import { extent, max } from "d3-array";
import { AreaClosed, Area, LinePath } from "@vx/shape";
import { Group } from "@vx/group";
import { bisector } from "d3-array";

const xStock = d => new Date(d.date);
const yStock = d => d.close;
const bisectDate = bisector(d => new Date(d.date)).left;

export default class extends React.Component {
  render() {
    const stock = appleStock;
    const width = 750;
    const height = 300;

    const margin = {
      top: 20,
      bottom: 20,
      left: 20,
      right: 20
    };

    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    const x = d => new Date(d.date);
    const y = d => d.close;
    // console.log(data);

    const xScale = scaleTime({
      range: [0, xMax],
      domain: extent(stock, xStock)
    });
    const yScale = scaleLinear({
      range: [yMax, 0],
      domain: [0, max(stock, yStock) + yMax / 3],
      nice: true
    });

    return (
      <svg
        width={width}
        height={height}
        style={{ borderRadius: "2px", border: "1px solid #818e99" }}
      >
        <rect x={0} y={0} width={width} height={height} fill="#ffffff" />
        <Group top={margin.top} left={margin.left}>
          <LinePath
            data={stock}
            x={d => xScale(xStock(d))}
            y={d => yScale(yStock(d))}
            yScale={yScale}
            strokeWidth={1}
            stroke={"#818e99"}
            fill={"none"}
          />
        </Group>
      </svg>
    );
  }
}

// module.exports = { Chart };
// export default NewChart;
