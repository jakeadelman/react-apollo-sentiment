import { Query } from "react-apollo";
import GoogleReChart from "../Charts/GoogleReChart";
import Sidebar from "../Categories/Menu";
import gql from "graphql-tag";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { useState } from "react";
// import { observer } from "mobx-react-lite";

// import { storesContext } from "../../stores/UserStore";

@inject("store")
@observer
class FetchGoogleQuery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currency: this.props.store.currency };
  }

  componentDidMount() {
    this.setState({ currency: this.props.store.currency });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(prevProps.store.currency);
    // console.log(this.props.store.currency);
    // console.log(snapshot);
    // console.log(this.props.store.currency);
    // if (this.props.store.currency !== prevProps.store.currency) {
    //   console.log("got new props");
    // }
  }

  render() {
    let googleVariables = {
      currency: this.props.store.currency,
      time: "week"
    };
    return (
      <Query query={googleTrendsQuery} variables={googleVariables}>
        {({ loading, error, data }) => {
          if (error) return <div>no data loaded</div>;
          if (loading) return <div>Loading</div>;
          // console.log(data);

          return (
            <Wrapper>
              <ChartWrapper>
                <GoogleReChart data={data} />
              </ChartWrapper>
            </Wrapper>
          );
        }}
      </Query>
    );
  }
}

export default FetchGoogleQuery;

const googleTrendsQuery = gql`
  query GoogleTrendsQuery($time: String!, $currency: String!) {
    fetchGoogleTrend(time: $time, currency: $currency) {
      formattedTime
      value
    }
  }
`;

const ChartWrapper = styled.div`
  background: white;
  border: 1px solid #ebedf0;
  padding: 5px;
  @media (max-width: 768px) {
    margin: 0 5vw;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-align;
`;
