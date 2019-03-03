import { withRouter } from "next/router";
import ConfirmUser from "../components/Confirm/ConfirmUser";
import App from "../components/App";
import Header from "../components/Header/Header";
import styled, { ThemeProvider } from "styled-components";
import theme from "../components/theme";

const Content = withRouter(props => (
  <App>
    <Header />
    <ThemeProvider theme={theme(false)}>
      <Wrapper>
        <ConfirmUser token={props.router.query.id} />
      </Wrapper>
    </ThemeProvider>
  </App>
));

const Page = props => (
  <div>
    <Content />
  </div>
);

export default Page;

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
