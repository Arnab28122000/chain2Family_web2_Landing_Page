import styled from "styled-components";


import Background from "./Background";
import CoinScreen from "./Coin-Screen";
import FAQ from "./faq";
import Footer from "./footer";
import Navbar from "./Navbar";
import Pioneers from "./Poineers";
import Timeline from "./timeline";
import { Column } from "./ui/utils";
import WhiteListing from "./WhiteListing";


export default function HomePage() {
  return (
    <Column>
    <Wrapper>
      <Background />
      <Navbar/>
    </Wrapper>
    <CoinScreen/>
    <Timeline/>
    <WhiteListing/>
    <FAQ/>
    <Pioneers/>
    <Footer/>
    </Column>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  text-align: center;
`;
