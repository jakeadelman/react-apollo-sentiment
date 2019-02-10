import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import DashMain from "./DashMain";
import Pagination from "./Pagination";
import App from "../App";
import Header from "../Header";

export default class extends React.Component {
  state = {
    initialTerm: "",
    allTerms: []
  };

  render() {
    return (
      <Query query={fetchTweetsQuery}>
        {({ loading, error, data }) => {
          if (error) return <div>no data loaded</div>;
          if (loading) return <div>Loading</div>;
          //   console.log(data.fetchTweets);
          // const areMorePosts = allPosts.length < _allPostsMeta.count;
          if (!this.state.initialTerm) {
            this.setState({
              initialTerm: data.fetchTerms[0].term
            });
          }
          if (!this.state.allTerms[0]) {
            data.fetchTerms.map(term => {
              this.state.allTerms.push(term.term);
            });
          }
          console.log("THIS DATA", data.fetchTerms);
          return (
            <div>
              <div className="dash-main-table">
                <Pagination searchterms={this.state.allTerms} />
                <DashMain initialTerm={this.state.initialTerm} />
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
// export const fetchTweetsVars = {
//   query: "bitcoin"
// };
