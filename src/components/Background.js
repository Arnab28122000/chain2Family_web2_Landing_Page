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
    <Wrapper>
      <div style={{
        height: '500px'
      }}>
      <ParticlesContainer/>
      </div>
      <Wave1 style={{ transform: `translateY(-${offsetY * 0.05}px)` }}/>
      <Wave2 style={{ transform: `translateY(-${offsetY * 0.1}px)` }}/>
      <Wave3 style={{ transform: `translateY(-${offsetY * 0.15}px)` }}/>
      <Wave4 style={{ transform: `translateY(-${offsetY * 0.2}px)` }}/>
      <Wave5 style={{ transform: `translateY(-${offsetY * 0.25}px)` }}/>
      <Wave6 style={{ transform: `translateY(-${offsetY * 0.25}px)` }}/>
      <Wave7/>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 1000px;
  background: linear-gradient(180deg, #08183A 4.33%, #4B3D60 18%, #FC9C54 50%, #ffffff 100.13%);
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

  top: 240px;
  height: 446px;
  background-image: url(${mountain1});
`;

const Wave2 = styled(Layer)`

  top: 310px;
  height: 446px;
  background-image: url(${mountain2});
`;

const Wave3 = styled(Layer)`
  top: 430px;
  height: 464px;
  background-image: url(${mountain3});
`;

const Wave4 = styled(Layer)`
  top: 450px;
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

const Wave7 = styled(Layer)`
  top: 870px;
  width: 100vw;
  height: 200px;
  background-color: #08183A;
  //background-image: linear-gradient(rgba(8, 24, 58, 0.95), #08183A);
`;

