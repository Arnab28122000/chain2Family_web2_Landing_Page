import styled from "styled-components";


import Background from "./Background";
import CoinScreen from "./Coin-Screen";
import Footer from "./footer";
import Navbar from "./Navbar";
import Pioneers from "./Poineers";
import { Column } from "./ui/utils";


export default function HomePage() {
  return (
    <Column>
    <Wrapper>
      <Background />
      <Navbar/>
    </Wrapper>
    <CoinScreen/>
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
