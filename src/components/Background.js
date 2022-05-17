/* eslint-disable no-mixed-operators */
import styled from "styled-components";
import { useState, useEffect } from "react";

import mountain1 from "../images/mountain1.svg";
import mountain2 from "../images/mountain2.svg";
import mountain3 from "../images/mountain3.svg";
import layer4 from "../images/layer4.svg";
import layer5 from "../images/layer5.svg";
import layer6 from "../images/layer6.svg";
import { ParticlesContainer } from "./Particles";

export default function HeroBackground() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
    <Wrapper id='home'>
      <ParticlesContainer/>
      <Wave1 style={{ transform: `translateY(-${offsetY * 0.1}px)` }}/>
      <Wave2 style={{ transform: `translateY(-${offsetY * 0.2}px)` }}/>
      <Wave3 style={{ transform: `translateY(-${offsetY * 0.3}px)` }}/>
      <Wave4 style={{ transform: `translateY(-${offsetY * 0.35}px)` }}/>
      <Wave5 style={{ transform: `translateY(-${offsetY * 0.4}px)` }}/>
      <Wave6 style={{ transform: `translateY(-${offsetY * 0.45}px)` }}/>
    </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 1000px;
  background: linear-gradient(180deg, #08183A 4.33%, #4B3D60 18%, #FC9C54 60%, #08183A 70.13%);
  background-repeat: no-repeat;
  background-size: 100%;
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

  top: 260px;
  height: 446px;
  background-image: url(${mountain1});
`;

const Wave2 = styled(Layer)`

  top: 340px;
  height: 446px;
  background-image: url(${mountain2});
`;

const Wave3 = styled(Layer)`
  top: 430px;
  height: 464px;
  background-image: url(${mountain3});
`;

const Wave4 = styled(Layer)`
  top: 500px;
  height: 408px;
  background-image: url(${layer4});
`;

const Wave5 = styled(Layer)`
  top: 670px;
  height: 457px;
  background-image: url(${layer5});
`;

const Wave6 = styled(Layer)`
  top: 840px;
  height: 867px;
  background-image: url(${layer6});
`;
