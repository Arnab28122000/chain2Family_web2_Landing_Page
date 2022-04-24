/* eslint-disable no-mixed-operators */
import styled from "styled-components";
import { useState, useEffect } from "react";

import mountain1 from "../images/mountain1.svg";
import mountain2 from "../images/mountain2.svg";
import mountain3 from "../images/mountain3.svg";
import mountain4 from "../images/mountain4.svg";
import mountain5 from "../images/mountain5.svg";
import heroWave from "../images/hero-wave.svg";
import blurLayer from "../images/blur-layer.webp";

export default function HeroBackground() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <Wrapper>
      <Wave1 style={{ transform: `translateY(-${offsetY * 0.1}px)` }}/>
      <Wave2 style={{ transform: `translateY(-${offsetY * 0.2}px)` }}/>
      <BlurLayer style={{ transform: `translateY(-${offsetY * 0.3}px)` }}/>
      <Wave3 style={{ transform: `translateY(-${offsetY * 0.4}px)` }}/>
      <Wave4 style={{ transform: `translateY(-${offsetY * 0.5}px)` }}/>
      <Wave5 style={{ transform: `translateY(-${offsetY * 0.6}px)` }}/>
      <Wave6/>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 1000px;
  background: linear-gradient(180deg, #322d6d 6.33%, #663182 39.13%);
  text-align: center;
  overflow: hidden;
  padding: 0px;
`;

const Layer = styled.div`
  position: absolute;
  width: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 1440px) {
    background-size: 1440px;
  }
`;

const Wave1 = styled(Layer)`

  top: 190px;
  height: 446px;
  background-image: url(${mountain1});
`;

const Wave2 = styled(Layer)`
  top: 160px;
  height: 464px;
  background-image: url(${mountain2});
`;

const Wave3 = styled(Layer)`
  top: 347px;
  height: 408px;
  background-image: url(${mountain3});
`;

const Wave4 = styled(Layer)`
  top: 466px;
  height: 457px;
  background-image: url(${mountain4});
`;

const Wave5 = styled(Layer)`
  top: 450px;
  height: 867px;
  background-image: url(${mountain5});
`;

const Wave6 = styled(Layer)`
  top: 700px;
  height: 630px;
  background-image: url(${heroWave});
`;

const BlurLayer = styled(Layer)`
  top: 100px;
  height: 1000px;
  background-image: url(${blurLayer});
`;
