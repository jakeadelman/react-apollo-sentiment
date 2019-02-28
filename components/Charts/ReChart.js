import React, { PureComponent } from "react";
import {
  LineChart,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import styled, { ThemeProvider } from "styled-components";
import { wideFont } from "../shared/helpers";
import theme from "../theme";

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
    this.state = { width: 0, height: 0, data: [] };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.props.data.fetchFourHourSent.map(dat => {
      this.state.data.unshift(dat);
    });

    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (window.innerWidth < 768) {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        chartWidth: window.innerWidth * 0.9
      });
    } else if (window.innerWidth < 1024) {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        chartWidth: window.innerWidth * 0.9 - 179
      });
    } else if (window.innerWidth >= 1024) {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        chartWidth: window.innerWidth * 0.8 - 179
      });
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme(false)}>
        <AreaChart
          width={this.state.chartWidth}
          height={200}
          data={this.state.data.slice(0, 7)}
          margin={{
            top: 20,
            right: 35,
            left: 5,
            bottom: 5
          }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#62BFED" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#62BFED" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#eee" opacity={0.4} strokeDasharray="5 5" />
          <XAxis dataKey="hour" style={{ fontSize: "13px" }} />
          <YAxis style={{ fontSize: "13px" }} />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="sentiment"
            stroke="#62BFED"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
          {/* <Legend height={36} /> */}
          {/* <Legend content={<CustomizedLegend external={external} />} /> */}

          <Legend content={renderLegend} />

          {/* <Line type="monotone" dataKey="sentiment" stroke="#82ca9d" /> */}
        </AreaChart>
      </ThemeProvider>
    );
  }
}

const renderLegend = props => {
  const { payload } = props;
  // console.log(payload);

  return (
    <StyledUl>
      {payload.map((entry, index) => (
        <li key={`item-${index}`} style={{ display: "flex", margin: "auto" }}>
          <Sv color={entry.color} />
          <div style={{ marginLeft: "7px" }}>{entry.value}</div>
        </li>
      ))}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  display: flex;
  font-size: 16px;
  text-decoration: none;
  margin-left: 60px;
  list-style: none;
  text-align: center;
  color: ${props => props.theme.normalText};
`;

const Sv = ({ color }) => (
  <svg width="10" height="10" style={{ marginTop: "8px" }}>
    <rect width="10" height="10" fill={color} />
  </svg>
);
