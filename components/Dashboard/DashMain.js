import React, { setState } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "next/router";
// import SentimentModule from "./SentimentModule";
const dateformat = require("dateformat");

export default class DashMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: this.props.initialTerm };
  }
  componentDidMount() {
    // console.log(this.props.initialTerm);
    // console.log(this.props.initialTerm);
    // this.setState({ term: this.props.initialTerm });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.initialTerm);
    if (nextProps.initialTerm !== this.state.term) {
      this.setState({ term: nextProps.initialTerm });
    }
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
            if (error)
              return (
                <div>
                  no data loaded.. there may have been an error please refresh
                  the page
                </div>
              );
            if (loading) return <div>Loading</div>;
            console.log(data.getDailyTweet);
            let pos =
              (data.getDailyTweet.positive / data.getDailyTweet.total) * 100;
            let neg =
              (data.getDailyTweet.negative / data.getDailyTweet.total) * 100;
            let trans = 140 - pos;
            console.log(pos, neg);

            return (
              <div className="dash-main-table">
                <div>
                  <table>
                    <thread>
                      <tr className="top-row">
                        <th className="tr-heading">
                          query: {this.props.initialTerm}
                        </th>
                        <th className="bar-heading tr-heading">
                          <svg
                            class="chart"
                            width="450"
                            height="40"
                            aria-labelledby="title desc"
                            role="img"
                          >
                            <g class="bar" transform="translate(140,4)">
                              <rect width={neg} height="19" className="rect1" />
                              <text
                                x={neg + 5}
                                y="9.5"
                                dy=".35em"
                                className="texto"
                              >
                                {parseInt(neg)}%
                              </text>
                              <text
                                x="130"
                                y="9.5"
                                dy=".35em"
                                className="texto"
                              >
                                24 hour sentiment
                              </text>
                            </g>
                            <g class="bar2" transform={`translate(${trans},4)`}>
                              <rect width={pos} height="19" className="rect2" />

                              <text
                                x="-35"
                                y="9.5"
                                dy=".35em"
                                className="texto"
                              >
                                {parseInt(pos)}%
                              </text>
                            </g>
                          </svg>
                        </th>
                      </tr>
                    </thread>
                    <tbody>
                      <div>
                        {data.fetchTweets.map(tweet => (
                          <tr className={`data`}>
                            <th
                              scope="row"
                              className={`hdata-${tweet.polarity}`}
                            >
                              {dateformat(tweet.timestamp, "shortTime")}
                            </th>
                            <td className={`tdata-${tweet.polarity}`}>
                              {tweet.text}
                            </td>
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
                      .hdata-1 {
                        background-color: rgba(127, 209, 185, 0.35);
                      }
                      .hdata-0 {
                        background-color: rgba(127, 209, 185, 0.35);
                      }
                      .data {
                        word-wrap: break-word;
                      }
                      .tdata-1 {
                        background-color: rgba(127, 209, 185, 0.44);
                      }
                      .tdata-0 {
                        background-color: rgba(247, 175, 157, 0.44);
                      }
                      td {
                        word-break: break-all;
                        margin: 10px;
                        padding: 10px;
                        border-radius: 10px;
                      }
                      th {
                        margin: 10px;
                        min-width: 5em;
                        padding: 0.2em;

                        border-radius: 10px;
                      }
                      tr {
                        margin: 10px;
                        padding: 5px;
                      }
                      .tr-heading {
                        border: none;
                        border-radius: 5px;
                        min-width: 5em;
                        padding: 0.4em;
                        align-items: center;
                        background-color: #26c2dd;
                        color: white;
                      }
                      .texto {
                        fill: white;
                      }
                      .bar-heading {
                        margin-left: auto;
                        margin-right: 0;
                        overflow: overlay;
                      }
                      .rect1 {
                        fill: #f7af9d;
                      }
                      .rect2 {
                        fill: #7fd1b9;
                      }
                      tr {
                        margin: 10px;
                      }

                      tr.top-row {
                        display: flex;
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
      timestamp
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
