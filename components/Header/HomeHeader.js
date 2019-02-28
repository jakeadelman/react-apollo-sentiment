import Link from "next/link";
import { withRouter } from "next/router";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import { useContext, useState } from "react";
import { headerItem, wideFont, link, transition } from "../shared/helpers";
import HeaderLogo from "./Logo";

const Cookie = require("js-cookie");

const Header2 = ({ router: { pathname } }) => {
  let cook = Cookie.get("isAuth");
  if (!cook) {
    return (
      <ThemeProvider theme={theme(false)}>
        <Wrapper>
          <HeaderLogo />

          <Link prefetch href="/login">
            <StyledLink className={pathname === "/login" ? "is-active" : ""}>
              login
            </StyledLink>
          </Link>

          <Link prefetch href="/register">
            <StyledLink className={pathname === "/register" ? "is-active" : ""}>
              register
            </StyledLink>
          </Link>
        </Wrapper>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme(false)}>
        <Wrapper>
          <HeaderLogo />

          <Link prefetch href="/dashboard">
            <StyledLink className={pathname === "/register" ? "is-active" : ""}>
              dashboard
            </StyledLink>
          </Link>
        </Wrapper>
      </ThemeProvider>
    );
  }
};

export default withRouter(Header2);

const StyledLink = styled.div`
  ${headerItem};
  ${wideFont};
  ${link};
  margin: 0;
  color: ${props => props.theme.mutedText};

  position: relative;
  cursor: pointer;

  ::after {
    ${transition("opacity", "border-bottom-width")};

    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    border-bottom: 1px solid ${props => props.theme.accent};
  }

  :hover {
    opacity: 1;
    color: ${props => props.theme.accent};
  }
  :hover::after {
    opacity: 1;
    border-bottom: 1px solid ${props => props.theme.accent};
  }

  &.active::after {
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: 3px solid ${props => props.theme.accent};
  }
  font-weight: 700;
  letter-spacing: 0.05em;
  font-size: 12px;
  text-transform: uppercase;
`;

const Wrapper = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  display: flex;
  align-items: stretch;
  margin-bottom: 0px;
  box-shadow: 0 4px 12px ${props => props.theme.shadow};
  border-bottom: 1px solid ${props => props.theme.border};
  height: 48px;
  padding: 0 10vw;
  background-color: ${props => props.theme.foreground};
  user-select: none;
  @media (max-width: 425px) {
    margin-bottom: 0px;
    height: 40px;
  }
  @media (max-width: 768px) {
    padding: 0;
    margin-bottom: 0px;
  }
`;
