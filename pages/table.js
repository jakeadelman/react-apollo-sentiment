import TableMain from "../components/Table/Main";
import styled, { ThemeProvider } from "styled-components";
import App from "../components/App";
import Header from "../components/Header/Header";
import theme from "../components/theme";
export default function Table() {
  return (
    <App>
      <Header />
      <ThemeProvider theme={theme(false)}>
        <Wrapper>
          <TableMain />
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
