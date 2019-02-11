import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import DashMain from "./DashMain";
import App from "../App";
import Header from "../Header2";
import AddTerm from "./AddTerm";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
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

              <DashMain initialTerm={this.state.term} />
              <style jsx>
                {`
                  .dash-main-table {
                  }
                  .pagination-list-item {
                    float: left;
                    list-style-type: none;
                    margin: 2px;
                  }
                  .pagination-button {
                    border-radius: 2px;
                  }
                  .dash-main-container {
                    display: block;
                    max-width: 50%;
                    margin: 3em auto 3em auto;
                  }
                  .dash-main-table {
                    display: block;
                  }
                  .pagination-list {
                    display: inline-block;
                  }
                  .outer-sent {
                    margin: 0;
                  }

                  @media only screen and (max-width: 960px) {
                    .dash-main-container {
                      max-width: 85%;
                    }
                  }
                `}
              </style>
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

export default () => (
  <App>
    <Header />
    <DashInitialTerms />
  </App>
);
