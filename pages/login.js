import App from "../components/App";
import Header from "../components/Header/Header";
import HeaderLogo from "../components/Header/Logo";
import styled, { ThemeProvider } from "styled-components";
import theme from "../components/theme";
import LoginForm2 from "../components/LoginForm2";
import Router from "next/router";
import { smallFont } from "../components/shared/helpers";
import Link from "next/link";

let Cookie = require("js-cookie");

export default function LoginPage() {
  let cook = Cookie.get("isAuth") === "true";
  console.log(cook);
  if (!!cook) {
    Router.push("/dashboard");
  } else {
    return (
      <App>
        <ThemeProvider theme={theme(false)}>
          <Wrapper>
            <HeaderLogoDiv>
              <HeaderLogo />
            </HeaderLogoDiv>
            <LoginForm2 />
            <Annotation1>
              BitsJournal is an automated trade journal for Bitmex.{" "}
              <Link href="/register">Register</Link> for our free beta or view
              demos on YouTube.
            </Annotation1>
          </Wrapper>
        </ThemeProvider>
      </App>
    );
  }
}
export const HeaderLogoDiv = styled.div`
  margin: 15px auto;
  margin-top: 20vh;
`;

const Wrapper = styled.div`
  display: flex;

  flex-direction: column;
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
export const Annotation1 = styled.div`
  margin: 11px auto;
  ${smallFont};
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  text-transform: none;
  max-width: 18vw;
  text-align: center;

  color: ${props => props.theme.mutedText};
`;
