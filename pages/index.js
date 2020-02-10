import App from "../components/App";
import Header from "../components/Header/HomeHeader";
import styled, { ThemeProvider } from "styled-components";
import theme from "../components/theme";
import HomeSvg from "../components/HomepageSvg";
import { smallFont, wideFont } from "../components/shared/helpers";
// import Typing from "react-typing-animation";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import Link from "next/link";

let cursor = {
  blink: true
};

export default () => (
  <App>
    <Header style={{ margin: "0" }} />
    <ThemeProvider theme={theme(false)}>
      <OuterWrapper style={{ margin: "0" }}>
        <Wrapper>
          <RowOne>
            <InnerRowContainer>
              <div style={{ width: "200px", height: "auto", margin: "auto" }}>
                <img
                  src="/static/ai2.svg"
                  style={{ margin: "auto", maxWidth: "200px" }}
                />
              </div>
            </InnerRowContainer>
            <InnerRowContainer>
              <TxtDiv>
                <TypistLoop interval={500}>
                  {["log", "improve", "systematize"].map(text => (
                    <Typist key={text} stdTypingDelay={35} cursor={cursor}>
                      <span>{text}</span>
                      <Typist.Backspace count={text.length} delay={2200} />
                    </Typist>
                  ))}
                </TypistLoop>
                <div style={{ marginLeft: "1px" }}>your trading</div>
              </TxtDiv>
            </InnerRowContainer>
            <InnerRowContainerBlack>
              <TxtDivBlack2 className="hello">
                <Link href="/signup">
                  <SignUpButton>
                    start automatically logging your trades
                  </SignUpButton>
                </Link>
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
  height: 100%;
  margin-bottom: 0;
  padding-bottom: 0;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 0 10vw;
  height: auto;
  background-color: ${props => props.theme.foreground};

  @media (max-width: 1024px) {
    margin: 0 5vw;
  }
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const SignUpButton = styled.button`
  ${smallFont}
  padding: 8px 20px;
  border-radius: 2px;
  background: #1890ff;
  color: #ffffff;
  font-size: 20px;
`;

const TxtDiv = styled.div`
  ${wideFont}
  max-width: 240px;
  font-size: 15px;
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: row;
`;
const TxtDivBlack = styled.div`
  ${wideFont}
  max-width: 450px;
  font-size: 15px;
  color: #ffffff;
  text-align: center;
  margin: auto;
  margin-bottom: 25px;
`;
const TxtDivBlack2 = styled.div`
  ${wideFont}
  max-width: 550px;
  font-size: 15px;
  color: #ffffff;
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
  min-height: 280px;
  margin-top: 100px;
  margin-bottom: 60px;
  background: #ffffff;

  border-radius: 2px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    margin-bottom: 60px;
  }
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;
