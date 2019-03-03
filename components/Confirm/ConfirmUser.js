import React from "react";
import ConfirmUserComponent from "./ConfirmUserComponent";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";

export default class Conf extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme(false)}>
        <Wrapper>
          <ConfirmUserComponent token={this.props.token} />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;
  width: 375px;
  padding: 24px;
  background-color: ${props => props.theme.foreground};

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: ${props => (props.wide ? "600px" : "375px")}) {
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
`;
