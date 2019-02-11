import React, { setState } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "next/router";
import SentimentModule from "./SentimentModule";

export default class DashMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: this.props.initialTerm };
  }
  componentDidMount() {
    console.log(this.props.initialTerm);
    this.setState({ term: this.props.initialTerm });
  }

  render() {
    if (!this.state.term) {
      return <div>loading</div>;
    } else {
      const fetchTweetsVars = {
        query: this.state.term
      };
      console.log(fetchTweetsVars);
      return (
        <Query query={fetchTweetsQuery} variables={fetchTweetsVars}>
          {({ loading, error, data }) => {
            if (error) return <div>no data loaded</div>;
            if (loading) return <div>Loading</div>;
            console.log(data);

            return (
              <div className="dash-main-table">
                <div>
                  <table>
                    <thread>
                      <tr>
                        <th>query: {this.props.initialTerm}</th>
                        <th>
                          <svg
                            class="chart"
                            width="150"
                            height="150"
                            aria-labelledby="title desc"
                            role="img"
                          >
                            <title id="title">
                              A bar chart showing information
                            </title>
                            <desc id="desc">
                              4 apples; 8 bananas; 15 kiwis; 16 oranges; 23
                              lemons
                            </desc>
                            <g class="bar">
                              <rect width="40" height="19" />
                              <text x="45" y="9.5" dy=".35em">
                                4 apples
                              </text>
                            </g>
                          </svg>
                        </th>
                      </tr>
                    </thread>
                    <tbody>
                      <div>
                        {data.fetchTweets.map(tweet => (
                          <tr className="data">
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
                        display: block;
                        margin: auto;
                      }
                      table {
                        table-layout: fixed;
                        width: 100% !important;
                      }
                      .data {
                        display: inline-table;
                        word-wrap: break-word;
                      }
                      td {
                        word-break: break-all;
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
}

export const fetchTweetsQuery = gql`
  query fetchTweets($query: String!) {
    fetchTweets(query: $query) {
      id
      tweetId
      text
      polarity
    }

    getDailyTweet(query: $query) {
      day
      negative
      positive
      total
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
