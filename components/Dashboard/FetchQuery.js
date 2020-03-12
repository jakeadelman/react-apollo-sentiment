import { Query } from "react-apollo";
import ReChart from "../Charts/ReChart";
import Sidebar from "../Categories/Menu";
import gql from "graphql-tag";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import {
  ContainDiv,
  NextToDiv,
  NextToDivHeader,
  RowContainer,
  ContainDivHeader
} from "../Charts/ReChart";
import { getStateDate } from "../Helpers/Functions";
import { equal } from "fast-deep-equal";
// import { useState, useEffect } from "react";

// import { storesContext } from "../../stores/UserStore";

@inject(["store"])
@observer
class FetchQuery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startDate: "", endDate: "", date: "" };
  }

  componentDidMount() {
    // console.log(this.props.store);
    // try {
    //   let myStorage = window.localStorage;
    //   let theDate = myStorage.getItem("store");
    //   let obj = JSON.parse(theDate);
    //   console.log(obj);
    //   this.setState({
    //     startDate: obj.startDate,
    //     endDate: obj.endDate
    //   });
    //   console.log("SUCCESS");
    //   console.log(obj.startDate);
    //   console.log(obj.endDate);
    // } catch (err) {
    //   let theDates = getStateDate(2);
    //   this.setState({
    //     startDate: theDates.startDate,
    //     endDate: theDates.endDate
    //   });
    //   console.log("FAILED");
    // }
  }

  clicked = () => {
    store.isAuth = !store.isAuth;
    console.log(store.isAuth);
  };

  render() {
    let fetchTradeHistoryVariables = {
      start: this.props.store.startDate,
      end: this.props.store.endDate
    };
    console.log(fetchTradeHistoryQuery);
    // let fetchTradeHistoryVariables = {
    //   start: "2020-02-24T12:43:56.702Z",
    //   end: "2020-02-26T15:01:59.727Z"
    // };
    return (
      <div>
        <Comp
          query={fetchTradeHistoryQuery}
          vars={fetchTradeHistoryVariables}
        />
      </div>
    );
  }
}

class Comp extends React.Component {
  render() {
    return (
      <Query query={this.props.query} variables={this.props.vars}>
        {({ loading, error, data }) => {
          // console.log(data);
          if (error) return <div>no data loaded</div>;
          if (loading) return <div>Loading</div>;

          return (
            <Wrapper>
              <ChartWrapper>
                <ContainDivHeader>
                  <NextToDivHeader>Start</NextToDivHeader>
                  <NextToDivHeader>End</NextToDivHeader>
                  <NextToDivHeader>Direction</NextToDivHeader>
                  <NextToDivHeader>Avg Entry</NextToDivHeader>
                  <NextToDivHeader>Avg Exit</NextToDivHeader>
                  <NextToDivHeader>Qty</NextToDivHeader>
                  <NextToDivHeader>Realized Pnl</NextToDivHeader>
                </ContainDivHeader>
                <ReChart data={data} />
              </ChartWrapper>
              <Sidebar />
            </Wrapper>
          );
        }}
      </Query>
    );
  }
}

export default FetchQuery;

const fetchTradeHistoryQuery = gql`
  query fetchTradeHistory($start: String!, $end: String!) {
    fetchTradeHistory(start: $start, end: $end) {
      id
      timestamp
      side
      price
      orderQty
      leavesQty
      currentQty
      avgEntryPrice
      execGrossPnl
      realizedPnl
      commission
      execType
      trdStart
      trdEnd
      notes
      hashtags
    }

    fetchOneMinuteCandleHistory(start: $start, end: $end) {
      id
      timestamp
      symbol
      timeframe
      open
      high
      low
      close
      trades
      volume
      vwap
      lastSize
      homeNotional
      foreignNotional
    }

    fetchOneHourCandleHistory(start: $start, end: $end) {
      id
      timestamp
      symbol
      timeframe
      open
      high
      low
      close
      trades
      volume
      vwap
      lastSize
      homeNotional
      foreignNotional
    }

    fetchOneDayCandleHistory(start: $start, end: $end) {
      id
      timestamp
      symbol
      timeframe
      open
      high
      low
      close
      trades
      volume
      vwap
      lastSize
      homeNotional
      foreignNotional
    }

    fetchFiveMinuteCandleHistory(start: $start, end: $end) {
      id
      timestamp
      symbol
      timeframe
      open
      high
      low
      close
      trades
      volume
      vwap
      lastSize
      homeNotional
      foreignNotional
    }
  }
`;

const ChartWrapper = styled.div`
  background: white;
  padding: 5px;
  width: 100%;
  @media (max-width: 768px) {
    margin: 0 5vw;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-align;
`;
