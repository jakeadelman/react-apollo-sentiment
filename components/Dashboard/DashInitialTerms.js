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
            <div>
              <div className="dash-main-table">
                <Pagination>
                  {this.state.allTerms.map(term => {
                    return (
                      <PaginationItem>
                        <PaginationLink
                          onClick={() => {
                            this.setState({ term: term });
                          }}
                        >
                          {term}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}
                  <PaginationItem>
                    <PaginationLink>
                      <AddTerm />
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>

                <DashMain initialTerm={this.state.term} />
                <style jsx>
                  {`
                    .dash-main-table {
                      max-width: 50%;
                      margin: 3em auto 3em auto;
                    }
                  `}
                </style>
              </div>
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
