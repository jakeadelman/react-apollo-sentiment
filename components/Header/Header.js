import Link from "next/link";
import { withRouter } from "next/router";
// import Head from "Header/Head";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import { observer } from "mobx-react-lite";
import { UserStoreContext } from "../../stores/UserStore";
import { useContext } from "react";

const Header2 = observer(({ router: { pathname } }) => {
  const userStore = useContext(UserStoreContext);
  console.log(userStore.isAuth);

  if (userStore.isAuth == false) {
    return (
      <ThemeProvider theme={theme(false)}>
        <Wrapper>
          <Link prefetch href="/">
            <StyledLink
              className={pathname === "/" ? "is-active" : ""}
              style={{ marginRight: "auto" }}
            >
              HOME
            </StyledLink>
          </Link>

          <Link prefetch href="/login">
            <StyledLink className={pathname === "/login" ? "is-active" : ""}>
              LOGIN
            </StyledLink>
          </Link>

          <Link prefetch href="/register">
            <StyledLink className={pathname === "/register" ? "is-active" : ""}>
              REGISTER
            </StyledLink>
          </Link>
        </Wrapper>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme(false)}>
        <Wrapper>
          <Link prefetch href="/">
            <StyledLink
              className={pathname === "/" ? "is-active" : ""}
              style={{ marginRight: "auto" }}
            >
              HOME
            </StyledLink>
          </Link>

          <Link prefetch href="/login">
            <StyledLink className={pathname === "/login" ? "is-active" : ""}>
              LOGOUT
            </StyledLink>
          </Link>
        </Wrapper>
      </ThemeProvider>
    );
  }
});

export default withRouter(Header2);

const StyledLink = styled.div`
  margin: auto 10px;
  color: ${props => props.theme.mutedText};

  position: relative;
  cursor: pointer;

  ::after {
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
