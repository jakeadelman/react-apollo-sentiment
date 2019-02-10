import React, { setState } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const fetchTweetsVars = {
      query: this.props.initialTerm
    };
    return (
      <Query query={fetchTweetsQuery} variables={fetchTweetsVars}>
        {({ loading, error, data }) => {
          if (error) return <div>no data loaded</div>;
          if (loading) return <div>Loading</div>;
          //   console.log(data.fetchTweets);
          // const areMorePosts  allPosts.length < _allPostsMeta.count;
          return (
            <div>
              <div className="dash-main-table">
                <table>
                  <thread>
                    <tr>
                      <th>query: {this.props.initialTerm}</th>
                    </tr>
                  </thread>
                  <tbody>
                    <div>
                      {data.fetchTweets.map(tweet => (
                        <tr>
                          <th scope="row">text</th>
                          <td>{tweet.text}</td>
                        </tr>
                      ))}
                    </div>
                  </tbody>
                </table>
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
  query fetchTweets($query: String!) {
    fetchTweets(query: $query) {
      id
      tweetId
      text
      score
      comparative
    }
  }
`;
