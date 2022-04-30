import { Row, Column, Text } from "./ui/utils";
import { useState } from "react";
import styled from "styled-components";
import arnab from "../images/arnab.jpeg";
import keaton from "../images/Keaton.png";
import shawn from "../images/Shawn.png";
import sebastian from "../images/Sebastian.png";
import amit from "../images/Amit.png";
import brayden from "../images/Brayden.png";

export default function Pioneers() {
  
  return (
    <Column
      id="pioneers"
      maxWidth="100vw"
      justify="center"
      align="center"
      paddingTop="0px"
      backgroundColor="#08183A"
    >
      <Row maxWidth='80vw' width='100%' justify="space-between" marginLeft='190px' marginRight='190px'>
       <PioneerInfo image={keaton} name='Keaton McCune' title='CEO - CTO' desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
       <PioneerInfo image={shawn} name='Shawn Saucier' title='CFO' desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
       <PioneerInfo image={sebastian} name='Sebastian Garcia' title='COO' desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
      </Row>
      <Row maxWidth='80vw' width='100%'  justify="space-between" marginLeft='190px' marginRight='190px'>
       <PioneerInfo image={arnab} name='Arnab Bhattacharya' title='Lead Developer' desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
       <PioneerInfo image={amit} name='Dr. Amit' title='Lead Architect' desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
       <PioneerInfo image={brayden} name='Brayden Salmins' title='Managing Director' desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
      </Row>
    </Column>
  );
}

function PioneerInfo (props){
  const [show, setShow] = useState(false);

  return (
    <Card
    onMouseOver={() => setShow(true)}
    onMouseOut={() => setShow(false)}
  >
    <Column justify="center" align="center">
      <CardImage image={props.image} />
      <Text fontSize="20px" color="rgba(255, 255, 255, 0.7)">
        {props.name}
      </Text>
      <Text fontSize="17px" color="rgba(255, 255, 255, 1)" marginTop='5px'>
        {props.title}
      </Text>
    </Column>
    {show ? 
    <div style={{
      minWidth:'270px'
    }}>
    <Text marginRight='30px' marginTop='50px' height="300px" align="center" justify="start" color="rgba(255, 255, 255,0.6)">
     {props.desc}
    </Text></div> : <div></div>}
  </Card>
  )
}

const Card = styled.div`
  width: 250px;
  height: 270px;
  display: flex;
  -webkit-transition: width 0.3s;
  margin-top: 20px;
  margin-bottom: 20px;
  transition: width 0.3s; 
  flex-direction: row;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(0px) saturate(187%);
  box-shadow: 0 10px 20px 0 rgba(31, 38, 135, 0.9);
  -webkit-backdrop-filter: blur(0px) saturate(187%);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(8, 24, 58, 0.8);
  &:hover{
    width: 500px;
    cursor:pointer;
  }
`;

const CardImage = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: 100%;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 15px;
  background-position: center;
  height: 150px;
  border-radius: 100%;
  width: 150px;
  scale: 2;
`;
