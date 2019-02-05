import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export default class extends React.Component {
  render() {
    return (
      <Query query={fetchTweetsQuery} variables={fetchTweetsVars}>
        {({ loading, error, data }) => {
          if (error) return <div>you are not allowed to access this page</div>;
          if (loading) return <div>Loading</div>;
          //   console.log(data.fetchTweets);
          // const areMorePosts = allPosts.length < _allPostsMeta.count;
          return (
            <div>
              <div className="dash-main-table">
                <table>
                  <thread>
                    <tr>
                      <th>query: bitcoin</th>
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
export const fetchTweetsVars = {
  query: "bitcoin"
};

// export default function PostList () {
//   return (

//   )
// }

// function loadMorePosts (allPosts, fetchMore) {
//   fetchMore({
//     variables: {
//       skip: allPosts.length
//     },
//     updateQuery: (previousResult, { fetchMoreResult }) => {
//       if (!fetchMoreResult) {
//         return previousResult
//       }
//       return Object.assign({}, previousResult, {
//         // Append the new posts results to the old one
//         allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
//       })
//     }
//   })
// }
