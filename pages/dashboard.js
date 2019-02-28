import React, { useContext, useState } from "react";
import DashInitialTerms from "../components/Dashboard/DashInitialTerms";
import App from "../components/App";
import Header from "../components/Header/Header";
import styled, { ThemeProvider } from "styled-components";
import theme from "../components/theme";
import "../styles.css";
// const Cookie = require("js-cookie");
// import Router from "next/router";

export default function dashboard({ initialState }) {
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
