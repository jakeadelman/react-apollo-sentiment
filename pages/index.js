import App from "../components/App";
import Header from "../components/Header/HomeHeader";
import LoginForm from "../components/LoginForm";
import styled, { ThemeProvider } from "styled-components";
import theme from "../components/theme";
import HomeSvg from "../components/HomepageSvg";
import { smallFont, wideFont } from "../components/shared/helpers";

export default () => (
  <App>
    <Header />
    <ThemeProvider theme={theme}>
      <OuterWrapper>
        <Wrapper>
          <RowOne>
            <InnerRowContainer>
              <div style={{ width: "200px", height: "auto", margin: "auto" }}>
                <img
                  src="/static/brain.svg"
                  style={{ margin: "auto", maxWidth: "200px" }}
                />
              </div>
            </InnerRowContainer>
            <InnerRowContainer>
              <TxtDiv>
                Outperform the market with better data at your fingertips
              </TxtDiv>
            </InnerRowContainer>
            <InnerRowContainerBlack>
              <TxtDivBlack>
                Get access to meaningful metrics by state of the art machine
                learning classifiers to supercharge your crypto trading.
              </TxtDivBlack>
              <TxtDivBlack2>
                <SignUpButton>Sign Up</SignUpButton>
              </TxtDivBlack2>
            </InnerRowContainerBlack>
          </RowOne>
        </Wrapper>
      </OuterWrapper>
    </ThemeProvider>
  </App>
);

const OuterWrapper = styled.div`
  background-color: ${props => props.theme.foreground};
`;
const Wrapper = styled.div`
  display: flex;
  margin: 0 10vw;
  height: 100%;
  background-color: ${props => props.theme.foreground};

  @media (max-width: 1024px) {
    margin: 0 5vw;
  }
  @media (max-width: 768px) {
    display: block;
    margin: 0;
  }
`;

const SignUpButton = styled.button`
  ${smallFont}
  padding: 8px 20px;
  border-radius: 2px;
`;

const TxtDiv = styled.div`
  ${wideFont}
  max-width: 350px;
  font-size: 15px;
  text-align: center;
  margin: auto;
`;
const TxtDivBlack = styled.div`
  ${wideFont}
  max-width: 550px;
  font-size: 15px;
  color: #454f5b;
  text-align: center;
  margin: auto;
  margin-bottom: 25px;
`;
const TxtDivBlack2 = styled.div`
  ${wideFont}
  max-width: 550px;
  font-size: 15px;
  color: #454f5b;
  text-align: center;
  margin: auto;
  margin-top: 25px;
`;

const RowOne = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  background-color: ${props => props.theme.foreground};
`;

const InnerRowContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const InnerRowContainerBlack = styled.div`
  width: 100%;
  min-height: 400px;
  margin-top: 100px;
  margin-bottom: 80px;
  background: #1b1b1b;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
`;
