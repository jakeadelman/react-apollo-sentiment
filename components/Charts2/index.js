import React from "react";
import { render } from "react-dom";
import Chart from "./ChartDemo";
import { getData } from "./utils";
import { Alert } from "reactstrap";

import { TypeChooser } from "react-stockcharts/lib/helper";

export default class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
    // state = {};
  }
  componentDidMount() {
    // getData().then(data => {
    //   console.log(data);
    //   this.setState({ data });
    // });
    console.log(this.props);
    console.log(this.props.trades, "MY TRADES");
    let startTime = new Date(this.props.trades[0].timestamp);
    let endTime = new Date(
      this.props.trades[this.props.trades.length - 1].timestamp
    );
    let diffMs = Math.abs(startTime - endTime);
    var diffSecs = diffMs / 1000;
    var diffMins = Math.round(diffSecs / 60); // minutes
    // var diffHrs = Math.round(diffMins / 60); // hours
    // let myTimeframe = "1m";
    // console.log(diffMins, "DIFFMINS");
    try {
      if (diffMins < 60) {
        //   this.setState({ candleData: this.props.onemin });
        let allExec = [];
        for (let i = 0; i < this.props.onemin.length; i++) {
          let trade = this.props.onemin[i];
          let newTrade = {};
          newTrade.date = new Date(trade.timestamp);
          newTrade.open = parseFloat(trade.open);
          newTrade.close = parseFloat(trade.close);
          newTrade.high = parseFloat(trade.high);
          newTrade.low = parseFloat(trade.low);
          let strt = new Date(this.props.trades[0].timestamp);
          let end = new Date(
            this.props.trades[this.props.trades.length - 1].timestamp
          );
          let compare1 = newTrade.date - strt;
          let compare2 = newTrade.date - end;
          if (compare1 > 0 && compare2 < 0) {
            allExec.unshift(newTrade);
          }
          if (i == this.props.onemin.length - 1) {
            let timeframe = "1m";
            this.setState({
              trades: this.props.trades,
              newDat: allExec,
              timeframe: timeframe
            });
            console.log(this.state, "THIS STATE " + timeframe);
          }
        }
      }
      if (diffMins >= 60 && diffMins < 60 * 10) {
        //   this.setState({ candleData: this.props.fivemin });
        let allExec = [];
        for (let i = 0; i < this.props.fivemin.length; i++) {
          let trade = this.props.fivemin[i];
          let newTrade = {};
          newTrade.date = new Date(trade.timestamp);
          newTrade.open = parseFloat(trade.open);
          newTrade.close = parseFloat(trade.close);
          newTrade.high = parseFloat(trade.high);
          newTrade.low = parseFloat(trade.low);
          let strt = new Date(this.props.trades[0].timestamp);
          let end = new Date(
            this.props.trades[this.props.trades.length - 1].timestamp
          );
          let compare1 = newTrade.date - strt;
          let compare2 = newTrade.date - end;
          if (compare1 > 0 && compare2 < 0) {
            allExec.unshift(newTrade);
          }
          if (i == this.props.fivemin.length - 1) {
            let timeframe = "5m";
            this.setState({
              trades: this.props.trades,
              newDat: allExec,
              timeframe: timeframe
            });
            console.log(this.state, "THIS STATE " + timeframe);
          }
        }
      }
      let day = 60 * 24;
      if (diffMins >= 60 * 10 && diffMins < day * 4) {
        //   this.setState({ candleData: this.props.onehour });
        let allExec = [];
        for (let i = 0; i < this.props.onehour.length; i++) {
          let trade = this.props.onehour[i];
          let newTrade = {};
          newTrade.date = new Date(trade.timestamp);
          newTrade.open = parseFloat(trade.open);
          newTrade.close = parseFloat(trade.close);
          newTrade.high = parseFloat(trade.high);
          newTrade.low = parseFloat(trade.low);
          let strt = new Date(this.props.trades[0].timestamp);
          let end = new Date(
            this.props.trades[this.props.trades.length - 1].timestamp
          );
          let compare1 = newTrade.date - strt;
          let compare2 = newTrade.date - end;
          if (compare1 > 0 && compare2 < 0) {
            allExec.unshift(newTrade);
          }
          if (i == this.props.onehour.length - 1) {
            let timeframe = "1h";
            this.setState({
              trades: this.props.trades,
              newDat: allExec,
              timeframe: timeframe
            });
            console.log(this.state, "THIS STATE " + timeframe);
          }
        }
      }
      if (diffMins >= day * 4) {
        //   this.setState({ candleData: this.props.oneday });
        let allExec = [];
        for (let i = 0; i < this.props.oneday.length; i++) {
          let trade = this.props.oneday[i];
          let newTrade = {};
          newTrade.date = new Date(trade.timestamp);
          newTrade.open = parseFloat(trade.open);
          newTrade.close = parseFloat(trade.close);
          newTrade.high = parseFloat(trade.high);
          newTrade.low = parseFloat(trade.low);
          let strt = new Date(this.props.trades[0].timestamp);
          let end = new Date(
            this.props.trades[this.props.trades.length - 1].timestamp
          );
          let compare1 = newTrade.date - strt;
          let compare2 = newTrade.date - end;
          if (compare1 > 0 && compare2 < 0) {
            allExec.unshift(newTrade);
          }
          if (i == this.props.oneday.length - 1) {
            let timeframe = "1d";
            this.setState({
              trades: this.props.trades,
              newDat: allExec,
              timeframe: timeframe
            });
            console.log(this.state, "THIS STATE " + timeframe);
          }
        }
      }
    } catch (err) {
      console.log(err);
      // let allExec = [];
      // for (let i = 0; i < this.props.fivemin.length; i++) {
      //   let trade = this.props.fivemin[i];
      //   let newTrade = {};
      //   newTrade.date = new Date(trade.timestamp);
      //   newTrade.open = parseFloat(trade.open);
      //   newTrade.close = parseFloat(trade.close);
      //   newTrade.high = parseFloat(trade.high);
      //   newTrade.low = parseFloat(trade.low);
      //   let strt = new Date(this.props.trades[0].timestamp);
      //   let end = new Date(
      //     this.props.trades[this.props.trades.length - 1].timestamp
      //   );
      //   // console.log(strt, end, newTrade.date);
      //   let compare1 = newTrade.date - strt;
      //   let compare2 = newTrade.date - end;
      //   // console.log(compare1, compare2);
      //   if (compare1 > 0 && compare2 < 0) {
      //     allExec.unshift(newTrade);
      //   }
      //   if (i == this.props.fivemin.length - 1) {
      //     let timeframe = "5m";
      //     this.setState({
      //       trades: this.props.trades,
      //       newDat: allExec,
      //       timeframe: timeframe
      //     });
      //     console.log(allExec);
      //     console.log(this.props.trades);
      //     console.log(timeframe);
      //     console.log(this.state, "THIS STATE err " + timeframe);
      //   }
      // }
    }
    //  finally {
    //   if (this.state == null) {
    //     let allExec = [];
    //     for (let i = 0; i < this.props.onehour.length; i++) {
    //       let trade = this.props.onehour[i];
    //       let newTrade = {};
    //       newTrade.date = new Date(trade.timestamp);
    //       newTrade.open = parseFloat(trade.open);
    //       newTrade.close = parseFloat(trade.close);
    //       newTrade.high = parseFloat(trade.high);
    //       newTrade.low = parseFloat(trade.low);
    //       let strt = new Date(this.props.trades[0].timestamp);
    //       let end = new Date(
    //         this.props.trades[this.props.trades.length - 1].timestamp
    //       );
    //       // console.log(strt, end, newTrade.date);
    //       let compare1 = newTrade.date - strt;
    //       let compare2 = newTrade.date - end;
    //       // console.log(compare1, compare2);
    //       if (compare1 > 0 && compare2 < 0) {
    //         allExec.unshift(newTrade);
    //       }
    //       if (i == this.props.onehour.length - 1) {
    //         let timeframe = "1h";
    //         this.setState({
    //           trades: this.props.trades,
    //           newDat: allExec,
    //           timeframe: timeframe
    //         });
    //         console.log(allExec);
    //         console.log(this.state, "THIS STATE finally " + timeframe);
    //       }
    //     }
    //   }
    // }
  }
  render() {
    if (this.state == null) {
      return (
        <Alert color="light">
          Can't render chart. We don't have small enough candlestick data going
          back to that date.
        </Alert>
      );
    }
    if (!this.state.newDat[0]) {
      return (
        <Alert color="light">
          Can't render chart. We don't have small enough candlestick data going
          back to that date.
        </Alert>
      );
    }
    console.log(this.state.newDat);
    return (
      // <TypeChooser>
      //   {type => (
      <Chart
        type={"hybrid"}
        data={this.state.newDat}
        trades={this.state.trades}
        timeframe={this.state.timeframe}
      />
      //   )}
      // </TypeChooser>
    );
  }
}

// render(<ChartComponent />, document.getElementById("root"));
