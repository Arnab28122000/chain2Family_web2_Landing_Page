
import styled from "styled-components";
import { useState, useEffect } from "react";

import c2FHouse from "../images/C2F_HOUSE.png";
import { Wave} from 'react-animated-text';

export default function TextSection() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  return (
    <Wrapper style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
    <Wave1/>
    <Title>
    <Wave
      text="Chain2Family"
      iterations={1}
      effect="jump"
      effectDuration={1}
    />
    </Title>
    <Description>
    <Wave
    iterations={1}
    text="We are PIONEERS building and branching the gap between TradFi, CeFi and DeFi" 
    effect="stretch" 
    effectDuration={0.1} />
    </Description>
  </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  max-width: 35vw;
  max-height: 1000px;
  display: grid;
  gap: 0px;
  text-align: center;
  margin: 0 auto;
  padding: 30px 0px 0px;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 70px;
`;

const Description = styled.p`
  max-width: 35vw;
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 30px;
  margin: 0 auto;
`;

const Wave1 = styled.div`
  height: 330px;
  width: 100%;
  background-image: url(${c2FHouse});
  background-size: 100%;
  background-repeat: no-repeat;
`;
