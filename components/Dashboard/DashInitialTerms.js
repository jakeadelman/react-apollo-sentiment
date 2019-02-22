import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import DashMain from "./DashMain";
import App from "../App";
import Header from "../Header2";
import AddTerm from "./AddTerm";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import AreaChart from "../Charts/AreaChart";
import AxisChart from "../Charts/AxisChart";
import NewChart from "../Charts/NewChart";
import ScreenSize from "./Window";
import windowSize from "react-window-size";
import BtcChart from "../Charts/BtcChart";
import Currency from "../Charts/Currency";
import ReChart from "../Charts/ReChart";
// import SentimentModule from "./SentimentModule";

class DashInitialTerms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTerms: []
    };
    this.toggleTerm = this.toggleTerm.bind(this);
    this.mapTerms = this.mapTerms.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleTerm(term) {
    this.setState({ term: term });
    console.log(this.state);
  }

  mapTerms(allterms) {
    allterms.map(term => {
      this.state.allTerms.push(term.term);
    });
  }

  handleClick(e) {
    // console.log(e.target.value);
    this.setState({ term: e.target.value });
    console.log(this.state);
  }

  render() {
    let marg = {
      left: 20,
      right: 20,
      top: 20,
      bottom: 20
    };
    return (
      <Query query={fetchTweetsQuery}>
        {({ loading, error, data }) => {
          if (error) return <div>no data loaded</div>;
          if (loading) return <div>Loading</div>;

          if (!this.state.allTerms[0]) {
            this.toggleTerm(data.fetchTerms[0].term);
            this.mapTerms(data.fetchTerms);
            return <div>loading</div>;
          }
          return (
            <div className="dash-main-container">
              <div className="pagination-list">
                <ul>
                  {this.state.allTerms.map(term => {
                    return (
                      <li className="pagination-list-item">
                        <button
                          value={term}
                          onClick={this.handleClick}
                          className="pagination-button"
                        >
                          {term}
                        </button>
                      </li>
                    );
                  })}
                  <li className="pagination-list-item">
                    <button className="pagination-button">
                      <AddTerm />
                    </button>
                  </li>
                </ul>
              </div>
              {/* <AxisChart margin={marg} width={500} height={500} /> */}
              {/* <AreaChart margin={marg} /> */}
              <ScreenSize margin={marg} />
              <NewChart />
              <Currency />
              <ReChart />
              {/* <BtcChart /> */}
            </div>
          );
        }}
      </Query>
    );
  }
}

// .outer-sent {
//   display: inline-block;
//   float: left;
// }

export const fetchTweetsQuery = gql`
  query fetchTerms {
    fetchTerms {
      id
      term
    }
  }
`;

export default DashInitialTerms;

// export default () => (
//   <App>
//     <Header />
//     <DashInitialTerms />
//   </App>
// );
