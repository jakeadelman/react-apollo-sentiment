import React from "react";
import { BarGroupHorizontal, Bar } from "@vx/shape";
import { Group } from "@vx/group";
import { AxisLeft } from "@vx/axis";
import { cityTemperature } from "@vx/mock-data";
import { scaleBand, scaleLinear, scaleOrdinal } from "@vx/scale";
import { timeParse, timeFormat } from "d3-time-format";

const parseDate = timeParse("%Y%m%d");
const format = timeFormat("%b %d");
const formatDate = date => format(parseDate(date));
const max = (arr, fn) => Math.max(...arr.map(fn));

const data = cityTemperature.slice(0, 4);
const keys = Object.keys(data[0]).filter(d => d !== "date");

// accessors
const y0 = d => d.date;
const x = d => d.value;

// scales
const y0Scale = scaleBand({
  domain: data.map(y0),
  padding: 0.2
});
const y1Scale = scaleBand({
  domain: keys,
  padding: 0.1
});
const xScale = scaleLinear({
  domain: [0, max(data, d => max(keys, key => d[key]))]
});
const color = scaleOrdinal({
  domain: keys,
  range: ["#aeeef8", "#e5fd3d", "#9caff6"]
});

export default ({
  width,
  height,
  margin = {
    top: 20,
    left: 50,
    right: 10,
    bottom: 0
  }
}) => {
  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - 100;

  // scales
  y0Scale.rangeRound([0, yMax]);
  y1Scale.rangeRound([0, y0Scale.bandwidth()]);
  xScale.rangeRound([xMax, 0]);

  return (
    <svg
      class="chart"
      width="420"
      height="150"
      aria-labelledby="title desc"
      role="img"
    >
      <title id="title">A bar chart showing information</title>
      <desc id="desc">
        4 apples; 8 bananas; 15 kiwis; 16 oranges; 23 lemons
      </desc>
      <g class="bar">
        <rect width="40" height="19" />
        <text x="45" y="9.5" dy=".35em">
          4 apples
        </text>
      </g>
      <g class="bar">
        <rect width="80" height="19" y="20" />
        <text x="85" y="28" dy=".35em">
          8 bananas
        </text>
      </g>
      <g class="bar">
        <rect width="150" height="19" y="40" />
        <text x="150" y="48" dy=".35em">
          15 kiwis
        </text>
      </g>
      <g class="bar">
        <rect width="160" height="19" y="60" />
        <text x="161" y="68" dy=".35em">
          16 oranges
        </text>
      </g>
      <g class="bar">
        <rect width="230" height="19" y="80" />
        <text x="235" y="88" dy=".35em">
          23 lemons
        </text>
      </g>
    </svg>
  );
};
