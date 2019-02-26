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
import Sidebar from "../Categories/Menu";
import { removeArgumentsFromDocument } from "apollo-utilities";
// import theme from "../theme";
import Router from "next/router";
const Cookie = require("js-cookie");

class DashInitialTerms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTerms: [],
      width: 0,
      height: 0
    };
    this.toggleTerm = this.toggleTerm.bind(this);
    this.mapTerms = this.mapTerms.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.push = this.push.bind(this);
  }

  componentDidMount() {
    let cook = Cookie.get("isAuth") == "true";
    console.log(cook);
    if (!cook) {
      Router.push("/");
    } else if (!!cook) {
      this.setState({ isAuth: cook });
    }
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log(this.state.width);
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
  push() {
    Router.push("/");
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
    if (!this.state.isAuth) {
      return null;
    } else {
      return (
        <Query query={fetchTweetsQuery}>
          {({ loading, error, data }) => {
            if (error) return <div>no data loaded</div>;
            if (loading) return <div>Loading</div>;

            console.log(data);

            if (!this.state.allTerms[0]) {
              this.toggleTerm(data.fetchTerms[0].term);
              this.mapTerms(data.fetchTerms);
              return <div>loading</div>;
            }
            return (
              <ThemeProvider theme={theme}>
                <Wrapper>
                  <div
                    style={{
                      background: "white",
                      border: "1px solid #ebedf0",
                      padding: "5px"
                    }}
                  >
                    <ReChart />
                  </div>
                  <Sidebar />
                </Wrapper>
              </ThemeProvider>
            );
          }}
        </Query>
      );
    }
  }
}
const Menu = styled.nav`
  border: 1px solid ${props => props.theme.border};
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const fetchTweetsQuery = gql`
  query fetchTerms {
    fetchTerms {
      id
      term
    }
  }
`;

export default DashInitialTerms;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-align;
`;

const SampleWrapper = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  display: flex;
  align-items: stretch;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px ${props => props.theme.shadow};
  border-bottom: 1px solid ${props => props.theme.border};
  height: 48px;
  padding: 0 10vw;
  background-color: ${props => props.theme.foreground};
  user-select: none;
  @media (max-width: 425px) {
    margin-bottom: 16px;
    height: 40px;
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`;
