import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import DashMain from "./DashMain";
import App from "../App";
import Header from "../Header";
import AddTerm from "./AddTerm";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
class DashInitialTerms extends React.Component {
  state = {
    term: "",
    allTerms: []
  };

  render() {
    return (
      <Query query={fetchTweetsQuery}>
        {({ loading, error, data }) => {
          if (error) return <div>no data loaded</div>;
          if (loading) return <div>Loading</div>;
          console.log(data.fetchTerms);
          if (!this.state.term) {
            this.setState({
              term: data.fetchTerms[0].term
            });
          }
          if (!this.state.allTerms[0]) {
            data.fetchTerms.map(term => {
              this.state.allTerms.push(term.term);
            });
          }
          return (
            <div className="dash-main-container">
              <div className="pagination-list">
                <ul>
                  {this.state.allTerms.map(term => {
                    return (
                      <li className="pagination-list-item">
                        <button
                          onClick={() => {
                            this.setState({ term: term });
                          }}
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
