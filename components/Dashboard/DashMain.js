import React, { setState } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "next/router";

export default class DashMain extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.initialTerm);
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

// const DashMainWrapper = withRouter(props => {
//   if (!!props.router.query) {
//     console.log("ROUTER QUERY TERM", props.router.query);
//     return (
//       <div>
//         <DashMain initialTerm={props.router.query.term} />
//       </div>
//     );
//   } else {
//     console.log("INITIAL TERM", props.initialTerm);
//     return (
//       <div>
//         <DashMain initialTerm={props.initialTerm} />
//       </div>
//     );
//   }
// });
// export default DashMainWrapper;
// const Page = props => (
//   <div>
//     <DashMainWrapper initialTerm={props.initialTerm} />
//   </div>
// );

// export default Page;
