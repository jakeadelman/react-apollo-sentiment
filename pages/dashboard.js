import React from "react";
import DashInitialTerms from "../components/Dashboard/DashInitialTerms";
import App from "../components/App";
import Header from "../components/Header/Header";
import LoginForm from "../components/LoginForm";
import styled, { ThemeProvider } from "styled-components";
import theme from "../components/theme";
import "../styles.css";
export default class extends React.Component {
  render() {
    return (
      <App>
        <Header />
        <ThemeProvider theme={theme}>
          <Wrapper>
            <DashInitialTerms />
          </Wrapper>
        </ThemeProvider>
      </App>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 10vw;
  @media (max-width: 1024px) {
    margin: 0 5vw;
  }
  @media (max-width: 768px) {
    display: block;
    margin: 0;
  }
`;
