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

export default class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, data: [], fullTrades: [] };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.props.data.fetchTradeHistory.map(dat => {
      this.state.data.unshift(dat);
    });
    console.log(this.state);

    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    this.state.data.map((dat, i) => {
      if (dat.trdStart == true) {
        let sliced = this.state.data.slice(i, this.state.data.length);
        console.log(sliced);
        for (let i = 0; i < sliced.length; i++) {
          if (sliced[i].trdEnd == true) {
            let newsliced = sliced.slice(0, i + 1);
            this.state.fullTrades.push(newsliced);

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
            return <MakeCol slic={slic} />;
          })}
        </div>
      </ThemeProvider>
    );
  }
}

class MakeCol extends Component {
  state = {
    data: [],
    pnl: 0,
    avgEntryPrice: 0,
    avgExitPrice: 0,
    clicked: false
  };
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   console.log(this.state);
  // }
  componentDidMount() {
    console.log(this.state);
  }

  componentWillMount() {
    this.state.data = this.props.slic;
    if (this.state.data[0].side == "Buy") {
      let avgBuyPrice = 0;
      let avgSellPrice = 0;
      let totBuyContracts = 0;
      let totSellContracts = 0;
      let buyNum = 0;
      let sellNum = 0;
      let totBuyContractsMult = 0;
      let totSellContractsMult = 0;
      for (let i = 0; i < this.state.data.length; i++) {
        if (this.state.data[i].side == "Buy") {
          // totBuyPrice += parseFloat(this.state.data[i].price);
          buyNum += 1;
          totBuyContracts += this.state.data[i].orderQty;
          totBuyContractsMult +=
            this.state.data[i].orderQty * parseFloat(this.state.data[i].price);
        }
        if (this.state.data[i].side == "Sell") {
          sellNum += 1;
          totSellContracts += this.state.data[i].orderQty;
          totSellContractsMult +=
            this.state.data[i].orderQty * parseFloat(this.state.data[i].price);
        }
        if (i == this.state.data.length - 1) {
          avgBuyPrice = totBuyContractsMult / totBuyContracts;
          avgSellPrice = totSellContractsMult / totSellContracts;
          this.state.avgEntryPrice = avgBuyPrice;
          this.state.avgExitPrice = avgSellPrice;
          this.state.pnl =
            (1 / avgBuyPrice - 1 / avgSellPrice) * totSellContracts;
        }
      }
    }
    if (this.state.data[0].side == "Sell") {
      // let avgBuyPrice = 0;
      // let avgSellPrice = 0;
      let totBuyContracts = 0;
      let totSellContracts = 0;
      let buyNum = 0;
      let sellNum = 0;
      let totBuyContractsMult = 0;
      let totSellContractsMult = 0;
      for (let i = 0; i < this.state.data.length; i++) {
        if (this.state.data[i].side == "Buy") {
          // totBuyPrice += parseFloat(this.state.data[i].price);
          buyNum += 1;
          totBuyContracts += this.state.data[i].orderQty;
          totBuyContractsMult +=
            this.state.data[i].orderQty * parseFloat(this.state.data[i].price);
        }
        if (this.state.data[i].side == "Sell") {
          sellNum += 1;
          totSellContracts += this.state.data[i].orderQty;
          totSellContractsMult +=
            this.state.data[i].orderQty * parseFloat(this.state.data[i].price);
        }
        if (i == this.state.data.length - 1) {
          console.log(totBuyContracts, totBuyContractsMult);
          console.log(totSellContracts, totSellContractsMult);
          let avgBuyPrice = totBuyContractsMult / totBuyContracts;
          let avgSellPrice = totSellContractsMult / totSellContracts;
          let pnl = (1 / avgBuyPrice - 1 / avgSellPrice) * totBuyContracts;
          // console.log(pnl, totBuyContractsMult, totBuyContracts);
          this.state.avgEntryPrice = avgBuyPrice;
          this.state.avgExitPrice = avgSellPrice;
          this.state.pnl = pnl;
        }
      }
    }
  }

  clicked() {
    console.log(this.state);
    if (this.state.clicked == false) {
      this.setState({ clicked: true });
    } else {
      this.setState({ clicked: false });
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
          <NextToDiv>{this.state.pnl.toFixed(4) + "xbt"}</NextToDiv>
        </ContainDiv>
      );
    } else {
      return (
        <div>
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
            <NextToDiv>{this.state.pnl.toFixed(4) + "xbt"}</NextToDiv>
          </ContainDivClicked>
          <ContainDivBlack>
            <NextToDivBlack>Side</NextToDivBlack>
            <NextToDivBlack>Price</NextToDivBlack>
            <NextToDivBlack>Order Qty</NextToDivBlack>
            <NextToDivBlack>Commission</NextToDivBlack>
          </ContainDivBlack>

          {this.state.data.map(dat => {
            return (
              <ContainDivBlack onClick={this.clicked.bind(this)}>
                <NextToDivBlack>{dat.side}</NextToDivBlack>
                <NextToDivBlack>${dat.price.toString()}</NextToDivBlack>
                <NextToDivBlack>{dat.orderQty.toString()}</NextToDivBlack>
                <NextToDivBlack>{dat.commission}</NextToDivBlack>
              </ContainDivBlack>
            );
          })}
        </div>
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
