import App from "../components/App";
import Header from "../components/Header/Header";
import RegisterSubmit from "../components/RegisterForm";
import PostList from "../components/PostList";
import styled, { ThemeProvider } from "styled-components";
import theme from "../components/theme";
import Router from "next/router";
const Cookie = require("js-cookie");

export default function RegisterPage() {
  let cook = Cookie.get("isAuth") === "true";
  console.log(cook);
  if (!!cook) {
    Router.push("/dashboard");
  } else {
    return (
      <App>
        <Header />
        <ThemeProvider theme={theme(false)}>
          <Wrapper>
            <RegisterSubmit />
          </Wrapper>
        </ThemeProvider>
      </App>
    );
  }
}

// export default () => (

// );

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
