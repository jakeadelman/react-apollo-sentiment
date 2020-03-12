import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import CategoryList from "./CategoryList";
import Header from "./Header";
import { inject, observer } from "mobx-react";

// border: 1px solid ${props => props.theme.border};

const Sidebar = inject("store")(
  observer(({ store }) => {
    return (
      <ThemeProvider theme={theme(false)}>
        <LapperContainer>
          <Lapper>
            <CategoryList />
          </Lapper>
          {store.pnl >= 0 ? (
            <Lapper2>
              <InnerLapper>{store.pnl.toFixed(4) + "xbt"}</InnerLapper>
            </Lapper2>
          ) : (
            <Lapper3>
              <InnerLapper>{store.pnl.toFixed(4) + "xbt"}</InnerLapper>
            </Lapper3>
          )}
        </LapperContainer>
      </ThemeProvider>
    );
  })
);

// {store.pnl >= 0 ? (
//   <Lapper2>
//     <InnerLapper>{store.pnl.toFixed(4) + "xbt"}</InnerLapper>
//   </Lapper2>
// ) : (
//   <Lapper3>
//     <InnerLapper>{store.pnl.toFixed(4) + "xbt"}</InnerLapper>
//   </Lapper3>
// )}

export default Sidebar;
const LapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

const Lapper = styled.aside`
  display: flex;
  flex-direction: column;
  flex-basis: 240px;

  border-radius: 2px;
  background-color: ${props => props.theme.foreground};
  background-color: #212529;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const InnerLapper = styled.div`
  color: white;
  text-align: center;
  margin: auto;
`;

const Lapper2 = styled.aside`
  border-radius: 2px;
  background-color: ${props => props.theme.foreground};
  background-color: green;
  max-height: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Lapper3 = styled.aside`
  border-radius: 2px;
  background-color: ${props => props.theme.foreground};
  background-color: red;
  max-height: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;
