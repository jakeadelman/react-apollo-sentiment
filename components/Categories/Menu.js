import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import CategoryList from "./CategoryList";
import Header from "./Header";

const Lapper = styled.aside`
  display: flex;
  flex-direction: column;
  flex-basis: 240px;
  margin-left: 24px;
  border-radius: 2px;
  background-color: ${props => props.theme.foreground};
  background-color: #212529;
  @media (max-width: 768px) {
    display: none;
  }
`;
// border: 1px solid ${props => props.theme.border};
const Sidebar = () => (
  <ThemeProvider theme={theme(false)}>
    <Lapper>
      <CategoryList />
    </Lapper>
  </ThemeProvider>
);

export default Sidebar;
