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
  Legend,
  BarChart,
  Bar,
  ComposedChart,
  ScatterChart,
  ZAxis
} from "recharts";
import styled, { ThemeProvider } from "styled-components";
import { wideFont, smallFont } from "../shared/helpers";
import theme from "../theme";
import ScatterC from "./Scatter";
import Button from "../shared/Button";
import { inject, observer } from "mobx-react";
// import "./recharts.css";

@inject("store")
@observer
export default class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, data: [], numTweets: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.setStoreHours = this.setStoreHours.bind(this);
  }

  componentDidMount() {
    this.setState({ currency: this.props.store.currency });
    this.setState({
      datLength: this.props.data.hourSentiment.num_tweets.length
    });
    for (let i = 0; i < this.props.data.hourSentiment.num_tweets.length; i++) {
      let newDat = {};
      newDat["hour"] = this.props.data.hourSentiment.time[i];
      newDat["sentiment"] = this.props.data.hourSentiment.sentiment[i];
      newDat["num"] = this.props.data.hourSentiment.num_tweets[i];
      this.state.data.unshift(newDat);
      this.state.numTweets += this.props.data.hourSentiment.num_tweets[i];
    }

    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  setStoreHours(e) {
    this.props.store.hoursBack = 24 * e.target.value;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    // console.log(this.props.store.currency);
    // console.log(this.state.currency);
    if (this.state.currency !== this.props.store.currency) {
      // console.log(this.props.store.currency);
      this.setState({ currency: this.props.store.currency });
      this.state.data = [];
      this.state.numTweets = 0;
      for (
        let i = 0;
        i < this.props.data.hourSentiment.num_tweets.length;
        i++
      ) {
        let newDat = {};
        newDat["hour"] = this.props.data.hourSentiment.time[i];
        newDat["sentiment"] = this.props.data.hourSentiment.sentiment[i];
        newDat["num"] = this.props.data.hourSentiment.num_tweets[i];
        this.state.data.unshift(newDat);
        this.state.numTweets += this.props.data.hourSentiment.num_tweets[i];
      }
    }
    console.log(
      this.state.data.length,
      this.props.data.hourSentiment.time.length
    );
    if (prevState.data.length !== this.props.data.hourSentiment.time.length) {
      this.state.data = [];
      this.state.numTweets = 0;
      console.log("setting new data");
      console.log(this.props.data, this.props.store.hoursBack);
      for (
        let i = 0;
        i < this.props.data.hourSentiment.num_tweets.length;
        i++
      ) {
        let newDat = {};
        newDat["hour"] = this.props.data.hourSentiment.time[i];
        newDat["sentiment"] = this.props.data.hourSentiment.sentiment[i];
        newDat["num"] = this.props.data.hourSentiment.num_tweets[i];
        this.state.data.unshift(newDat);
        this.state.numTweets += this.props.data.hourSentiment.num_tweets[i];
      }
      console.log(this.state.data);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (window.innerWidth < 768) {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        chartWidth: window.innerWidth * 0.85
      });
    } else if (window.innerWidth < 1024) {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        chartWidth: window.innerWidth * 0.85 - 179
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
        <div style={{ padding: "10px" }}>
          <div
            style={{ display: "flex", width: "100%", flexDirection: "column" }}
          >
            <LabelDiv>Twitter Sentiment - {this.state.currency}</LabelDiv>
            <NumTweetDiv>
              based on {this.state.numTweets} tweets in the past 7 hours
            </NumTweetDiv>
          </div>
          <AreaChart
            width={this.state.chartWidth}
            height={200}
            data={this.state.data}
            margin={{
              top: 20,
              right: 35,
              left: 5,
              bottom: 0
            }}
          >
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#62BFED" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#62BFED" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#eee" opacity={0} strokeDasharray="3 3" />
            <XAxis dataKey="hour" style={{ fontSize: "13px" }} />
            <YAxis style={{ fontSize: "13px" }} type="number" domain={[0, 1]} />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="sentiment"
              stroke="#62BFED"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
          <div
            style={{
              display: "flex",
              paddingRight: "40px",
              paddingLeft: "40px"
            }}
          >
            <div style={{ marginRight: 0, marginLeft: "auto" }}>
              <StyledButton value={45} onClick={this.setStoreHours}>
                max
              </StyledButton>
              <StyledButton value={30} onClick={this.setStoreHours}>
                1 month
              </StyledButton>
              <StyledButton value={7} onClick={this.setStoreHours}>
                7 days
              </StyledButton>
              <StyledButton value={1} onClick={this.setStoreHours}>
                24 hours
              </StyledButton>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

const renderLegend = props => {
  const { payload } = props;
  console.log(payload);

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

const LabelDiv = styled.div`
  ${smallFont}
  margin: auto;
  padding-left: 25px;
`;

const NumTweetDiv = styled(LabelDiv)`
  ${wideFont}
  color: ${props => props.theme.mutedText};
  font-size: 11px;
 
`;

const StyledButton = styled(Button)`
  padding: 3px 18px;
  margin: 0 4px;
  font-size: 10px;
`;
