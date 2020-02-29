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

@inject("store")
@observer
class FetchQuery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startDate: "", endDate: "", date: "" };
  }

  componentDidMount() {
    // console.log(this.props.store.date);
    let myStore = this.props.store;
    console.log(myStore.date);
    let dates = getStateDate(myStore.date);
    console.log(dates);
    this.setState({
      startDate: dates.start,
      endDate: dates.end,
      date: this.props.store.date
    });
  }

  componentDidUpdate(prevProps) {
    console.log("updated");
    if (this.props.store.date != prevProps.store.date) {
      // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
      let dates = getStateDate(this.props.store.date);
      console.log(dates);
      this.setState({
        startDate: dates.start,
        endDate: dates.end,
        date: this.props.store.date
      });
    }
  }

  clicked = () => {
    store.isAuth = !store.isAuth;
    console.log(store.isAuth);
  };

  render() {
    // let fetchTradeHistoryVariables = {
    //   start: this.state.startDate,
    //   end: this.state.endDate
    // };
    let fetchTradeHistoryVariables = {
      start: "2020-02-24T12:43:56.702Z",
      end: "2020-02-26T15:01:59.727Z"
    };
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

// const FetchQuery = inject("store")(
//   observer(({ store }) => {
//     // if (store) {
//     // const [startDate, setStartDate] = useState();
//     // const [endDate, setEndDate] = useState();
//     // const [myStore, setStore] = useState();

//     // useEffect(() => {
//     //   setStore(store);
//     //   let dates = getStateDate(myStore.date);
//     //   setStartDate(dates.start);
//     //   setEndDate(dates.end);
//     // }, []);

//     const clicked = () => {
//       store.isAuth = !store.isAuth;
//       console.log(store.isAuth);
//     };

//     // let fetchTradeHistoryVariables = {
//     //   start: "2020-01-14T12:43:56.702Z",
//     //   end: "2020-01-14T15:01:59.727Z"
//     // };

//     if (dates) {
//       let fetchTradeHistoryVariables = {
//         start: dates.start,
//         end: dates.end
//       };
//     }
//     return (
//       <div>
//         <Comp
//           query={fetchTradeHistoryQuery}
//           vars={fetchTradeHistoryVariables}
//         />
//       </div>
//     );
//   })
// );

class Comp extends React.Component {
  render() {
    return (
      <Query query={this.props.query} variables={this.props.vars}>
        {({ loading, error, data }) => {
          console.log(data);
          if (error) return <div>no data loaded</div>;
          if (loading) return <div>Loading</div>;

          return (
            <Wrapper>
              <ChartWrapper>
                <ContainDivHeader>
                  <NextToDivHeader>Start</NextToDivHeader>
                  <NextToDivHeader>End</NextToDivHeader>
                  <NextToDivHeader>Direction</NextToDivHeader>
                  <NextToDivHeader>Avg Entry Price</NextToDivHeader>
                  <NextToDivHeader>Avg Exit Price</NextToDivHeader>
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
      trdStart
      trdEnd
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
