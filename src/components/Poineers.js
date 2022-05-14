import { Row, Column, Text, useWindowSize } from "./ui/utils";
import { useState } from "react";
import styled from "styled-components";
import arnab from "../images/arnab.jpeg";
import keaton from "../images/Keaton.jpg";
import shawn from "../images/Shawn.jpg";
import sebastian from "../images/Sebastian.jpg";
import amit from "../images/Amit.jpg";
import brayden from "../images/Brayden.jpg";

export default function Pioneers() {
  const size = useWindowSize();
  
  return (
    <Column
      id="pioneers"
      maxWidth="100vw"
      justify="center"
      align="center"
      paddingTop="0px"
      backgroundColor="#08183A"
    >
      <Text color="rgba(255,255,255,0.8)" fontWeight="bold" 
      fontSize={size.width > 600 ?"40px" : "30px" }
      marginBottom='40px'>PIONEERS</Text>
      {
        size.width > 1200 ?
        <>
        <Row maxWidth='80vw' width='100%' justify="space-between" marginLeft='190px' marginRight='190px'>
       <PioneerInfo url='https://www.linkedin.com/in/k3ytoshi/' image={keaton} name='Keaton McCune' title='CEO - CTO' desc="Keaton is a human rights activist and a blockchain innovator with an extensive analytical background in cybersecurity. They have passed several technical assestments including testing above average on the CompTIA CySA+, CISSP and CBSA / CBSP practice exams. 
      They're consistently learning, adapting in order to be an effective KEY leader in this space"/>
       <PioneerInfo url='https://www.linkedin.com/in/shawn-saucier/' image={shawn} name='Shawn Saucier' title='CFO' desc="Shawn has extensive experience providing financial management, market research and strategy within technology companies. They have a degree with Business Administration that reflects industry expertise in computer hardware, software, SaaS, digital media, HDTV, cellular and home networking industries. They continously find success in early-stage hi-tech start-ups."/>
       <PioneerInfo url='https://www.linkedin.com/in/sebasgarciax/' image={sebastian} name='Sebastian Garcia' title='COO' desc=""/>
      </Row>
      <Row maxWidth='80vw' width='100%'  justify="space-between" marginLeft='190px' marginRight='190px'>
      <PioneerInfo url='https://www.linkedin.com/in/arnab-bhattacharya-ab7055189/' image={arnab} name='Arnab Bhattacharya' title='Lead Developer' desc="Arnab is a core developer having experience in developing scalable mobile and web applications for startups as well as big corporates. Having a bachelor's degree in Information Technology. Constantly learning, adapting, and innovating in the blockchain space by developing user-friendly scalable solutions."/>
      <PioneerInfo url='https://www.linkedin.com/in/dr-amit-vishwakarma-0a4b79bb/' image={amit} name='Dr. Amit' title='Lead Architect' desc="Dr. Amit is a creative professional with excellence in overall innovative thinking. They have worked on various blockchain platforms in the past and have 6 years of experience in developing multiple layer solutions with blockchain specific applications."/>
      <PioneerInfo url='https://www.linkedin.com/in/braydensalmins/' image={brayden} name='Brayden Salmins' title='Managing Director' desc=""/>
     </Row>
     </>
      :
      size.width > 800 && size.width < 1200 ?
      <>
      <Row maxWidth='80vw' width='100%' justify="space-between" marginLeft='190px' marginRight='190px'>
       <PioneerInfo url='https://www.linkedin.com/in/k3ytoshi/' image={keaton} name='Keaton McCune' title='CEO - CTO' desc="Keaton is a human rights activist and a blockchain innovator with an extensive analytical background in cybersecurity. They have passed several technical assestments including testing above average on the CompTIA CySA+, CISSP and CBSA / CBSP practice exams. 
      They're consistently learning, adapting in order to be an effective KEY leader in this space"/>
       <PioneerInfo url='https://www.linkedin.com/in/shawn-saucier/' image={shawn} name='Shawn Saucier' title='CFO' desc="Shawn has extensive experience providing financial management, market research and strategy within technology companies. They have a degree with Business Administration that reflects industry expertise in computer hardware, software, SaaS, digital media, HDTV, cellular and home networking industries. They continously find success in early-stage hi-tech start-ups."/>
      </Row>
      <Row maxWidth='80vw' width='100%' justify="space-between" marginLeft='190px' marginRight='190px'>
      <PioneerInfo url='https://www.linkedin.com/in/sebasgarciax/' image={sebastian} name='Sebastian Garcia' title='COO' desc=""/>
      <PioneerInfo url='https://www.linkedin.com/in/arnab-bhattacharya-ab7055189/' image={arnab} name='Arnab Bhattacharya' title='Lead Developer' desc="Arnab is a core developer having experience in developing scalable mobile and web applications for startups as well as big corporates. Having a bachelor's degree in Information Technology. Constantly learning, adapting, and innovating in the blockchain space by developing user-friendly scalable solutions."/>
      </Row>
      <Row maxWidth='80vw' width='100%' justify="space-between" marginLeft='190px' marginRight='190px'>
      <PioneerInfo url='https://www.linkedin.com/in/dr-amit-vishwakarma-0a4b79bb/' image={amit} name='Dr. Amit' title='Lead Architect' desc="Dr. Amit is a creative professional with excellence in overall innovative thinking. They have worked on various blockchain platforms in the past and have 6 years of experience in developing multiple layer solutions with blockchain specific applications."/>
      <PioneerInfo url='https://www.linkedin.com/in/braydensalmins/' image={brayden} name='Brayden Salmins' title='Managing Director' desc=""/>
      </Row>
      </>
      :
      <>
       <PioneerInfo url='https://www.linkedin.com/in/k3ytoshi/' image={keaton} name='Keaton McCune' title='CEO - CTO' desc="Keaton is a human rights activist and a blockchain innovator with an extensive analytical background in cybersecurity. They have passed several technical assestments including testing above average on the CompTIA CySA+, CISSP and CBSA / CBSP practice exams. 
      They're consistently learning, adapting in order to be an effective KEY leader in this space"/>
       <PioneerInfo url='https://www.linkedin.com/in/shawn-saucier/' image={shawn} name='Shawn Saucier' title='CFO' desc="Shawn has extensive experience providing financial management, market research and strategy within technology companies. They have a degree with Business Administration that reflects industry expertise in computer hardware, software, SaaS, digital media, HDTV, cellular and home networking industries. They continously find success in early-stage hi-tech start-ups."/>
      <PioneerInfo url='https://www.linkedin.com/in/sebasgarciax/' image={sebastian} name='Sebastian Garcia' title='COO' desc=""/>
      <PioneerInfo url='https://www.linkedin.com/in/arnab-bhattacharya-ab7055189/' image={arnab} name='Arnab Bhattacharya' title='Lead Developer' desc="Arnab is a core developer having experience in developing scalable mobile and web applications for startups as well as big corporates. Having a bachelor's degree in Information Technology. Constantly learning, adapting, and innovating in the blockchain space by developing user-friendly scalable solutions."/>
      <PioneerInfo url='https://www.linkedin.com/in/dr-amit-vishwakarma-0a4b79bb/' image={amit} name='Dr. Amit' title='Lead Architect' desc="Dr. Amit is a creative professional with excellence in overall innovative thinking. They have worked on various blockchain platforms in the past and have 6 years of experience in developing multiple layer solutions with blockchain specific applications."/>
      <PioneerInfo url='https://www.linkedin.com/in/braydensalmins/' image={brayden} name='Brayden Salmins' title='Managing Director' desc=""/>
      </>
      }
    </Column>
  );
}

function PioneerInfo (props){
  const size = useWindowSize();
  const [show, setShow] = useState(false);
  

  return (
    <a style={{
      textDecoration: 'none'
    }} href={props.url}  rel="noopener noreferrer" target="_blank">
    <Card
      width={size.width}
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
    {show && size.width > 750 ? 
    <div style={{
      minWidth:'270px'
    }}>
    <Text marginRight='30px' marginTop='50px' height="300px" align="center" justify="start" color="rgba(255, 255, 255,0.6)">
     {props.desc}
    </Text></div> : <div></div>}
  </Card>
  </a>
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
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  border: 1px solid rgba(8, 24, 58, 0.8);
  &:hover{
    width:  ${(props) => props.width > 800 ? '500px' : '250px'};
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
  scale: 1;
`;
