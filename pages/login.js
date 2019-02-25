import App from "../components/App";
import Header from "../components/Header/Header";
import LoginForm from "../components/LoginForm";
import styled, { ThemeProvider } from "styled-components";
import theme from "../components/theme";
import LoginForm2 from "../components/LoginForm2";

export default () => (
  <App>
    <Header />
    <ThemeProvider theme={theme}>
      <Wrapper>
        <LoginForm2 />
      </Wrapper>
    </ThemeProvider>
  </App>
);

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
