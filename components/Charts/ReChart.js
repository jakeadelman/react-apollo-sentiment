import React, { PureComponent, Component } from "react";
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
import { formatDateMonthOnly } from "../Helpers/Functions.js";
import { inject, observer } from "mobx-react";
import MainChart from "../Charts2/index";
import Notes from "./Notes";

export default class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      data: [],
      fullTrades: []
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    console.log(this.props.data);
    this.props.data.fetchTradeHistory.map(dat => {
      this.state.data.unshift(dat);
    });
    // this.setState({ candleData: this.props.data.fetchCandleHistory });
    // console.log(this.state);

    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    this.state.data.map((dat, i) => {
      if (dat.trdStart == true) {
        let sliced = this.state.data.slice(i, this.state.data.length);
        // console.log(sliced, "THIS SLICED");
        // console.log(this.state.fullTrades);
        for (let i = 0; i < sliced.length; i++) {
          if (sliced[i].trdEnd == true && i > 0) {
            let newsliced = sliced.slice(0, i + 1);
            if (newsliced[0].hashtags != null) {
              // this.state.hashtags.push(newsliced.)
            }
            this.state.fullTrades.unshift(newsliced);
            // console.log(this.state.fullTrades);

            break;
          }
        }
      }
    });
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
        <div style={{ minWidth: this.state.chartWidth }}>
          {this.state.fullTrades.map((slic, i) => {
            return (
              <MakeCol
                slic={slic}
                onemin={this.props.data.fetchOneMinuteCandleHistory}
                fivemin={this.props.data.fetchFiveMinuteCandleHistory}
                onehour={this.props.data.fetchOneHourCandleHistory}
                oneday={this.props.data.fetchOneDayCandleHistory}
                key={i}
              />
            );
          })}
        </div>
      </ThemeProvider>
    );
  }
}

@inject("store")
@observer
class MakeCol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pnl: 0,
      avgEntryPrice: 0,
      avgExitPrice: 0,
      clicked: false,
      cumQty: 0,
      readMoreClicked: false
    };
    this.readMoreClicked = this.readMoreClicked.bind(this);
    this.clicked = this.clicked.bind(this);
  }

  componentDidMount() {
    // console.log(this.state);
  }

  componentWillMount() {
    this.state.data = this.props.slic;
    // console.log(this.state.data[0]);
    if (
      this.state.data[0].side == "Buy" &&
      this.state.data[0].execType == "Trade"
    ) {
      let avgBuyPrice = 0;
      let avgSellPrice = 0;
      let totBuyContracts = 0;
      let totSellContracts = 0;
      let buyNum = 0;
      let sellNum = 0;
      let totBuyContractsMult = 0;
      let totSellContractsMult = 0;
      let realQty = 0;
      for (let i = 0; i < this.state.data.length; i++) {
        realQty = this.state.data[i].orderQty - this.state.data[i].leavesQty;
        if (this.state.data[i].side == "Buy") {
          // totBuyPrice += parseFloat(this.state.data[i].price);
          buyNum += 1;
          totBuyContracts += realQty;
          totBuyContractsMult += realQty * parseFloat(this.state.data[i].price);
        }
        if (this.state.data[i].side == "Sell") {
          sellNum += 1;
          totSellContracts += realQty;
          totSellContractsMult +=
            realQty * parseFloat(this.state.data[i].price);
        }
        if (i == this.state.data.length - 1) {
          avgBuyPrice = totBuyContractsMult / totBuyContracts;
          avgSellPrice = totSellContractsMult / totSellContracts;
          if (avgBuyPrice != null) {
            this.state.avgEntryPrice = avgBuyPrice;
          } else {
            this.state.avgEntryPrice = 0;
          }
          if (avgSellPrice != null) {
            this.state.avgExitPrice = avgSellPrice;
          } else {
            this.state.avgExitPrice = 0;
          }
          this.state.cumQty = totBuyContracts;

          let thePnl = (1 / avgBuyPrice - 1 / avgSellPrice) * totSellContracts;
          if (thePnl != null) {
            this.state.pnl = thePnl;
            this.props.store.addPnl(this.state.pnl);
          } else {
            this.state.pnl = 0;
          }
        }
      }
    }
    if (
      this.state.data[0].side == "Sell" &&
      this.state.data[0].execType == "Trade"
    ) {
      // let avgBuyPrice = 0;
      // let avgSellPrice = 0;
      let totBuyContracts = 0;
      let totSellContracts = 0;
      let buyNum = 0;
      let sellNum = 0;
      let totBuyContractsMult = 0;
      let totSellContractsMult = 0;
      let realQty = 0;
      for (let i = 0; i < this.state.data.length; i++) {
        realQty = this.state.data[i].orderQty - this.state.data[i].leavesQty;
        if (this.state.data[i].side == "Buy") {
          // totBuyPrice += parseFloat(this.state.data[i].price);
          buyNum += 1;
          totBuyContracts += realQty;
          totBuyContractsMult += realQty * parseFloat(this.state.data[i].price);
        }
        if (this.state.data[i].side == "Sell") {
          sellNum += 1;
          totSellContracts += realQty;
          totSellContractsMult +=
            realQty * parseFloat(this.state.data[i].price);
        }
        if (i == this.state.data.length - 1) {
          // console.log(totBuyContracts, totBuyContractsMult);
          // console.log(totSellContracts, totSellContractsMult);
          let avgBuyPrice = totBuyContractsMult / totBuyContracts;
          let avgSellPrice = totSellContractsMult / totSellContracts;
          let pnl = (1 / avgBuyPrice - 1 / avgSellPrice) * totBuyContracts;
          // console.log(pnl, totBuyContractsMult, totBuyContracts);
          if (avgBuyPrice != null) {
            this.state.avgExitPrice = avgBuyPrice;
          } else {
            this.state.avgExitPrice = 0;
          }
          if (avgSellPrice != null) {
            this.state.avgEntryPrice = avgSellPrice;
          } else {
            this.state.avgEntryPrice = 0;
          }

          this.state.cumQty = totSellContracts;
          if (pnl != null) {
            this.state.pnl = pnl;
            this.props.store.addPnl(pnl);
          } else {
            this.state.pnl = 0;
          }
        }
      }
    }
  }

  clicked() {
    // console.log(this.state);
    if (this.state.clicked == false) {
      this.setState({ clicked: true });
    } else {
      this.setState({ clicked: false });
    }
  }
  readMoreClicked() {
    // console.log(this.state);
    if (this.state.readMoreClicked == false) {
      this.setState({ readMoreClicked: true });
    } else {
      this.setState({ readMoreClicked: false });
    }
  }

  render() {
    if (this.state.clicked == false) {
      return (
        <ContainDiv onClick={this.clicked.bind(this)}>
          <NextToDiv>
            {formatDateMonthOnly(this.state.data[0].timestamp)}
          </NextToDiv>
          <NextToDiv>
            {formatDateMonthOnly(
              this.state.data[this.state.data.length - 1].timestamp
            )}
          </NextToDiv>
          <IsShort side={this.state.data[0].side} />
          <NextToDiv>${this.state.avgEntryPrice.toFixed(1)}</NextToDiv>
          <NextToDiv>${this.state.avgExitPrice.toFixed(1)}</NextToDiv>
          <NextToDiv>{this.state.cumQty}</NextToDiv>
          <NextToDiv>{this.state.pnl.toFixed(4) + "xbt"}</NextToDiv>
        </ContainDiv>
      );
    } else {
      return (
        <TotalDetails>
          {this.state.readMoreClicked ? (
            <MoreBoxTall>
              <ContainDivClicked onClick={this.clicked.bind(this)}>
                <NextToDiv>
                  {formatDateMonthOnly(this.state.data[0].timestamp)}
                </NextToDiv>
                <NextToDiv>
                  {formatDateMonthOnly(
                    this.state.data[this.state.data.length - 1].timestamp
                  )}
                </NextToDiv>
                <IsShort side={this.state.data[0].side} />
                <NextToDiv>${this.state.avgEntryPrice.toFixed(1)}</NextToDiv>
                <NextToDiv>${this.state.avgExitPrice.toFixed(1)}</NextToDiv>
                <NextToDiv>{this.state.cumQty}</NextToDiv>
                <NextToDiv>{this.state.pnl.toFixed(4) + "xbt"}</NextToDiv>
              </ContainDivClicked>
              <ContainDivBlack>
                <NextToDivBlack>Timestamp</NextToDivBlack>
                <NextToDivBlack>Side</NextToDivBlack>
                <NextToDivBlack>Price</NextToDivBlack>
                <NextToDivBlack>Order Qty</NextToDivBlack>
                <NextToDivBlack>Commission</NextToDivBlack>
              </ContainDivBlack>

              {this.state.data.map(dat => {
                return (
                  <ContainDivBlack onClick={this.clicked.bind(this)}>
                    <NextToDivBlack>{dat.timestamp}</NextToDivBlack>
                    {dat.execType == "Trade" ? (
                      <NextToDivBlack>{dat.side}</NextToDivBlack>
                    ) : (
                      <NextToDivBlack>{dat.execType}</NextToDivBlack>
                    )}
                    <NextToDivBlack>${dat.price.toString()}</NextToDivBlack>
                    <NextToDivBlack>{dat.orderQty.toString()}</NextToDivBlack>
                    <NextToDivBlack>{dat.commission}</NextToDivBlack>
                  </ContainDivBlack>
                );
              })}
              <ReadMoreTall>
                <ReadMoreInner onClick={this.readMoreClicked}>
                  Show Less
                </ReadMoreInner>
              </ReadMoreTall>
            </MoreBoxTall>
          ) : (
            <MoreBoxShort>
              <ContainDivClicked onClick={this.clicked}>
                <NextToDiv>
                  {formatDateMonthOnly(this.state.data[0].timestamp)}
                </NextToDiv>
                <NextToDiv>
                  {formatDateMonthOnly(
                    this.state.data[this.state.data.length - 1].timestamp
                  )}
                </NextToDiv>
                <IsShort side={this.state.data[0].side} />
                <NextToDiv>${this.state.avgEntryPrice.toFixed(1)}</NextToDiv>
                <NextToDiv>${this.state.avgExitPrice.toFixed(1)}</NextToDiv>
                <NextToDiv>{this.state.cumQty}</NextToDiv>
                <NextToDiv>{this.state.pnl.toFixed(4) + "xbt"}</NextToDiv>
              </ContainDivClicked>
              <ContainDivBlack>
                <NextToDivBlack>Timestamp</NextToDivBlack>
                <NextToDivBlack>Side</NextToDivBlack>
                <NextToDivBlack>Price</NextToDivBlack>
                <NextToDivBlack>Order Qty</NextToDivBlack>
                <NextToDivBlack>Commission</NextToDivBlack>
              </ContainDivBlack>

              {this.state.data.map(dat => {
                return (
                  <ContainDivBlack onClick={this.clicked.bind(this)}>
                    <NextToDivBlack>{dat.timestamp}</NextToDivBlack>
                    {dat.execType == "Trade" ? (
                      <NextToDivBlack>{dat.side}</NextToDivBlack>
                    ) : (
                      <NextToDivBlack>{dat.execType}</NextToDivBlack>
                    )}
                    <NextToDivBlack>${dat.price.toString()}</NextToDivBlack>
                    <NextToDivBlack>{dat.orderQty.toString()}</NextToDivBlack>
                    <NextToDivBlack>{dat.commission}</NextToDivBlack>
                  </ContainDivBlack>
                );
              })}
              <ReadMore>
                <ReadMoreInner onClick={this.readMoreClicked}>
                  Show All
                </ReadMoreInner>
              </ReadMore>
            </MoreBoxShort>
          )}
          <Notes firstTrade={this.state.data[0]} />
          <MainChart
            onemin={this.props.onemin}
            fivemin={this.props.fivemin}
            onehour={this.props.onehour}
            oneday={this.props.oneday}
            trades={this.state.data}
          />
        </TotalDetails>
      );
    }
  }
}

class IsShort extends Component {
  render() {
    if (this.props.side == "Sell") {
      return <NextToDiv>Short</NextToDiv>;
    } else {
      return <NextToDiv>Long</NextToDiv>;
    }
  }
}

export const ContainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 52px;

  border-bottom: 1px solid #d3d3d3;
  &:hover {
    border-left: 3px solid black;
    cursor: pointer;
  }
`;
export const ContainDivClicked = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 52px;

  border-bottom: 1px solid #d3d3d3;

  border-left: 5px solid black;
  cursor: pointer;
`;
export const ContainDivBlack = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 42px;
  background: #f8f8ff;

  border-bottom: 1px solid #f2f2f2;
`;
export const ContainDivHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 52px;
  border-bottom: 1px solid #d3d3d3;
`;

export const NextToDiv = styled.div`
  display: inline-block;
  width: 30%;
  padding: 10px;
  padding-left: 12px;
`;

export const NextToDivBlack = styled.div`
  display: inline-block;
  width: 30%;
  padding: 5px;
  padding-left: 12px;
`;
export const NextToDivHeader = styled.div`
  display: inline-block;
  width: 30%;
  color: #78838e;
  font-weight: 600;
  display: inline-block;
  text-transform: uppercase;
  padding: 10px;
  padding-left: 12px;
`;

const ReadMore = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 30px 0;

  /* "transparent" only works here because == rgba(0,0,0,0) */

  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, rgba(255, 0, 0, 0)),
    color-stop(1, rgba(248, 248, 255, 1))
  );
`;
const ReadMoreTall = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 30px 0;
`;
// background-image: linear-gradient(to bottom, transparent, black);
const MoreBoxShort = styled.div`
  max-height: 200px;
  position: relative;
  overflow: hidden;
`;
const MoreBoxTall = styled.div`
  max-height: none;
  position: relative;
  overflow: hidden;
`;

const TotalDetails = styled.div``;
const ReadMoreInner = styled.div`
  background-color: #fff;
  color: rgba(33, 37, 40, 1);
  padding: 0;
  margin: auto;
  width: 100px;
  border: 1px solid rgba(33, 37, 40, 0.7);
  border-radius: 2px;
  :hover {
    cursor: pointer;
  }
`;

// const renderLegend = props => {
//   const { payload } = props;
//   // console.log(payload);

//   return (
//     <StyledUl>
//       {payload.map((entry, index) => (
//         <li key={`item-${index}`} style={{ display: "flex", margin: "auto" }}>
//           <Sv color={entry.color} />
//           <div style={{ marginLeft: "7px" }}>{entry.value}</div>
//         </li>
//       ))}
//     </StyledUl>
//   );
// };

// const StyledUl = styled.ul`
//   display: flex;
//   font-size: 16px;
//   text-decoration: none;
//   margin-left: 60px;
//   list-style: none;
//   text-align: center;
//   color: ${props => props.theme.normalText};
// `;

// const Sv = ({ color }) => (
//   <svg width="10" height="10" style={{ marginTop: "8px" }}>
//     <rect width="10" height="10" fill={color} />
//   </svg>
// );
