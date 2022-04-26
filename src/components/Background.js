/* eslint-disable no-mixed-operators */
import styled from "styled-components";
import { useState, useEffect } from "react";

import mountain1 from "../images/mountain1.svg";
import mountain2 from "../images/mountain2.svg";
import mountain3 from "../images/mountain3.svg";
import layer4 from "../images/layer4.svg";
import layer5 from "../images/layer5.svg";
import layer6 from "../images/layer6.svg";

export default function HeroBackground() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <Wrapper>
      <Wave1 style={{ transform: `translateY(-${offsetY * 0.1}px)`,mountain1}}/>
      <Wave2 style={{ transform: `translateY(-${offsetY * 0.2}px)`,mountain2 }}/>
      <Wave3 style={{ transform: `translateY(-${offsetY * 0.4}px)`,mountain3 }}/>
      <Wave4 style={{ transform: `translateY(-${offsetY * 0.5}px)`,layer4 }}/>
      <Wave5 style={{ transform: `translateY(-${offsetY * 0.6}px)`,layer5 }}/>
      <Wave6 style={{ transform: `translateY(-${offsetY * 0.6}px)`,layer6 }}/>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 1600px;
  background: linear-gradient(180deg, #08183A 2%, #4B3D60 10%, #FC9C54 25%, #ffffff 55%);
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

  top: 200px;
  height: 446px;
  background-image: url(${mountain1});
`;

const Wave2 = styled(Layer)`

  top: 250px;
  height: 446px;
  background-image: url(${mountain2});
`;

const Wave3 = styled(Layer)`
  top: 400px;
  height: 464px;
  background-image: url(${mountain3});
`;

const Wave4 = styled(Layer)`
  top: 415px;
  height: 408px;
  background-image: url(${layer4});
`;

const Wave5 = styled(Layer)`
  top: 575px;
  height: 457px;
  background-image: url(${layer5});
`;

const Wave6 = styled(Layer)`
  top: 775px;
  height: 867px;
  background-image: url(${layer6});
`;

