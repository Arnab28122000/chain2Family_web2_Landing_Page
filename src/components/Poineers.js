import { Row, Column, Text, useWindowSize } from "./ui/utils";
import { useState } from "react";
import styled from "styled-components";
import arnab from "../images/arnab.jpeg";
import keaton from "../images/Keaton.jpg";
import shawn from "../images/Shawn.jpg";
import rita from "../images/rita.jpg";
import tiago from "../images/tiago.jpg";
import prayag from "../images/prayag.jpeg";
import alexis from "../images/alexis.jpg";
import andrew from "../images/andrew.jpg";

export default function Pioneers() {
  const size = useWindowSize();
  
  return (
    <Column
      id="pioneers"
      maxWidth="100vw"
      justify="center"
      align="center"
      paddingTop="0px"
      backgroundColor="#000"
    >
      <Text color="rgba(239, 239, 239, 1)" fontWeight="bold" 
      fontSize={size.width > 600 ?"40px" : "30px" }
      marginBottom='40px' marginTop='70px'>Meet Our Team & Advisors</Text>
      {
        size.width > 1200 ?
        <>
        <Row maxWidth='80vw' width='100%' justify="space-between" marginLeft='190px' marginRight='190px'>
        <PioneerInfo url='https://www.linkedin.com/in/k3ytoshi/' image={keaton} name='Keaton McCune' title='CEO - CTO' desc="Keaton is a human rights activist and a blockchain innovator with an extensive analytical background in cybersecurity. They have passed several technical assestments including testing above average on the CompTIA CySA+, CISSP and CBSA / CBSP practice exams. They're consistently learning and adapting in order to be an effective KEY leader in this space"/>
      <PioneerInfo url='https://www.linkedin.com/in/shawn-saucier/' image={shawn} name='Shawn Saucier' title='CFO' desc="Shawn has extensive experience providing financial management, market research and strategy within technology companies. They have a degree with Business Administration that reflects industry expertise in computer hardware, software, SaaS, digital media, HDTV, cellular and home networking industries. They continously find success in early-stage hi-tech start-ups."/>
      <PioneerInfo url='https://www.linkedin.com/in/rita-getsitdone/' image={rita} name='Rita Macdonald' title='CMO' desc="Versatile B2B and B2C marketing leader with end-to-end experience from developing product road maps to investor and analyst relations to strategic partnerships. Passionate about customer centric marketing and all things Crypto/Blockchain/NFTs. Storyteller focused on public relations, brand development, digital marketing, and customer focused messaging."/>
      <PioneerInfo url='https://www.linkedin.com/in/arnab-bhattacharya-ab7055189/' image={arnab} name='Arnab Bhattacharya' title='Lead Developer' desc="Arnab is a core developer having experience in developing scalable mobile and web applications for startups as well as big corporates. Having a bachelor's degree in Information Technology. Constantly learning, adapting, and innovating in the blockchain space by developing user-friendly scalable solutions."/>
      </Row>
      <Row maxWidth='80vw' width='100%'  justify="space-between" marginLeft='190px' marginRight='190px'>
      <PioneerInfo url='https://www.linkedin.com/in/alexis-okamoto-4874338/' image={alexis} name='Alexis Okamoto' title='CBDO' desc="Alexis is the Co-Founder/CMO/CBDO of the Defi Pay, focusing primarily on the Marketing, Partnerships, & Product. Alexis has an entrepreneur mindset, and an extensive background in early stage mobile Start-ups and B-B-C growth development."/>
      <PioneerInfo url='https://www.linkedin.com/in/andrewjduggan/' image={andrew} name='Andrew Duggan' title='Technical Advisor' desc="Executive-level strategic partner and bridge to corporate technology and operations with 30+ years’ achievement driving value-added business results through digital information technologies. Expertise in creating innovative information systems, which require deep understanding of critical business drivers in multiple markets and industries."/>
      <PioneerInfo url='https://www.linkedin.com/in/prayagpathak/' image={prayag} name='Prayag Pathak' title='Technical Advisor' desc="Prayag comes from a background involved as a commodity trader and sales engineer with background experience involved as the vice president at Goldman Sachs and software engineer at IBM along with risk analytics a J.P. Morgan"/>
      <PioneerInfo url='https://www.linkedin.com/in/tiagoluchini/' image={tiago} name='Tiago Luchini' title='Technical Advisor' desc="Tiago helps organizations create & execute technology strategies by building & leading world-class, global & award-winning teams. I am experienced across several verticals & thrive navigating socio-technical challenges & leading a set of diverse people."/>
     </Row>
     </>
      :
      size.width > 800 && size.width < 1200 ?
      <>
      <Row maxWidth='80vw' width='100%' justify="space-between" marginLeft='190px' marginRight='190px'>
      <PioneerInfo url='https://www.linkedin.com/in/k3ytoshi/' image={keaton} name='Keaton McCune' title='CEO - CTO' desc="Keaton is a human rights activist and a blockchain innovator with an extensive analytical background in cybersecurity. They have passed several technical assestments including testing above average on the CompTIA CySA+, CISSP and CBSA / CBSP practice exams. They're consistently learning and adapting in order to be an effective KEY leader in this space"/>
      <PioneerInfo url='https://www.linkedin.com/in/shawn-saucier/' image={shawn} name='Shawn Saucier' title='CFO' desc="Shawn has extensive experience providing financial management, market research and strategy within technology companies. They have a degree with Business Administration that reflects industry expertise in computer hardware, software, SaaS, digital media, HDTV, cellular and home networking industries. They continously find success in early-stage hi-tech start-ups."/>
      </Row>
      <Row maxWidth='80vw' width='100%' justify="space-between" marginLeft='190px' marginRight='190px'>
      <PioneerInfo url='https://www.linkedin.com/in/rita-getsitdone/' image={rita} name='Rita Macdonald' title='CMO' desc="Versatile B2B and B2C marketing leader with end-to-end experience from developing product road maps to investor and analyst relations to strategic partnerships. Passionate about customer centric marketing and all things Crypto/Blockchain/NFTs. Storyteller focused on public relations, brand development, digital marketing, and customer focused messaging."/>
      <PioneerInfo url='https://www.linkedin.com/in/arnab-bhattacharya-ab7055189/' image={arnab} name='Arnab Bhattacharya' title='Lead Developer' desc="Arnab is a core developer having experience in developing scalable mobile and web applications for startups as well as big corporates. Having a bachelor's degree in Information Technology. Constantly learning, adapting, and innovating in the blockchain space by developing user-friendly scalable solutions."/>
      </Row>
      <Row maxWidth='80vw' width='100%' justify="space-between" marginLeft='190px' marginRight='190px'>
      <PioneerInfo url='https://www.linkedin.com/in/alexis-okamoto-4874338/' image={alexis} name='Alexis Okamoto' title='CBDO' desc="Alexis is the Co-Founder/CMO/CBDO of the Defi Pay, focusing primarily on the Marketing, Partnerships, & Product. Alexis has an entrepreneur mindset, and an extensive background in early stage mobile Start-ups and B-B-C growth development."/>
      <PioneerInfo url='https://www.linkedin.com/in/andrewjduggan/' image={andrew} name='Andrew Duggan' title='Technical Advisor' desc="Executive-level strategic partner and bridge to corporate technology and operations with 30+ years’ achievement driving value-added business results through digital information technologies. Expertise in creating innovative information systems, which require deep understanding of critical business drivers in multiple markets and industries."/>
      </Row>
      <Row maxWidth='80vw' width='100%' justify="space-between" marginLeft='190px' marginRight='190px'>
      <PioneerInfo url='https://www.linkedin.com/in/prayagpathak/' image={prayag} name='Prayag Pathak' title='Technical Advisor' desc="Prayag comes from a background involved as a commodity trader and sales engineer with background experience involved as the vice president at Goldman Sachs and software engineer at IBM along with risk analytics a J.P. Morgan"/>
      <PioneerInfo url='https://www.linkedin.com/in/tiagoluchini/' image={tiago} name='Tiago Luchini' title='Technical Advisor' desc="Tiago helps organizations create & execute technology strategies by building & leading world-class, global & award-winning teams. I am experienced across several verticals & thrive navigating socio-technical challenges & leading a set of diverse people."/>
      </Row>
      </>
      :
      <>
        <PioneerInfo url='https://www.linkedin.com/in/k3ytoshi/' image={keaton} name='Keaton McCune' title='CEO - CTO' desc="Keaton is a human rights activist and a blockchain innovator with an extensive analytical background in cybersecurity. They have passed several technical assestments including testing above average on the CompTIA CySA+, CISSP and CBSA / CBSP practice exams. They're consistently learning and adapting in order to be an effective KEY leader in this space"/>
      <PioneerInfo url='https://www.linkedin.com/in/shawn-saucier/' image={shawn} name='Shawn Saucier' title='CFO' desc="Shawn has extensive experience providing financial management, market research and strategy within technology companies. They have a degree with Business Administration that reflects industry expertise in computer hardware, software, SaaS, digital media, HDTV, cellular and home networking industries. They continously find success in early-stage hi-tech start-ups."/>
      <PioneerInfo url='https://www.linkedin.com/in/rita-getsitdone/' image={rita} name='Rita Macdonald' title='CMO' desc="Versatile B2B and B2C marketing leader with end-to-end experience from developing product road maps to investor and analyst relations to strategic partnerships. Passionate about customer centric marketing and all things Crypto/Blockchain/NFTs. Storyteller focused on public relations, brand development, digital marketing, and customer focused messaging."/>
      <PioneerInfo url='https://www.linkedin.com/in/arnab-bhattacharya-ab7055189/' image={arnab} name='Arnab Bhattacharya' title='Lead Developer' desc="Arnab is a core developer having experience in developing scalable mobile and web applications for startups as well as big corporates. Having a bachelor's degree in Information Technology. Constantly learning, adapting, and innovating in the blockchain space by developing user-friendly scalable solutions."/>
      <PioneerInfo url='https://www.linkedin.com/in/alexis-okamoto-4874338/' image={alexis} name='Alexis Okamoto' title='CBDO' desc="Alexis is the Co-Founder/CMO/CBDO of the Defi Pay, focusing primarily on the Marketing, Partnerships, & Product. Alexis has an entrepreneur mindset, and an extensive background in early stage mobile Start-ups and B-B-C growth development."/>
      <PioneerInfo url='https://www.linkedin.com/in/andrewjduggan/' image={andrew} name='Andrew Duggan' title='Technical Advisor' desc="Executive-level strategic partner and bridge to corporate technology and operations with 30+ years’ achievement driving value-added business results through digital information technologies. Expertise in creating innovative information systems, which require deep understanding of critical business drivers in multiple markets and industries."/>
      <PioneerInfo url='https://www.linkedin.com/in/prayagpathak/' image={prayag} name='Prayag Pathak' title='Technical Advisor' desc="Prayag comes from a background involved as a commodity trader and sales engineer with background experience involved as the vice president at Goldman Sachs and software engineer at IBM along with risk analytics a J.P. Morgan"/>
      <PioneerInfo url='https://www.linkedin.com/in/tiagoluchini/' image={tiago} name='Tiago Luchini' title='Technical Advisor' desc="Tiago helps organizations create & execute technology strategies by building & leading world-class, global & award-winning teams. I am experienced across several verticals & thrive navigating socio-technical challenges & leading a set of diverse people."/>
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
      <Text fontSize="20px" color="rgba(0,0,0,1)">
        {props.name}
      </Text>
      <Text fontSize="17px" color="rgba(49, 173, 148, 1)" marginTop='5px'>
        {props.title}
      </Text>
    </Column>
    {show && size.width > 750 ? 
    <div style={{
      minWidth:'270px'
    }}>
    <Text marginRight='10px' marginTop='50px' height="300px" align="center" justify="start" color="rgba(0,0,0)">
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
  box-shadow: 0 10px 20px 0 rgba(239, 239, 239, 1);
  -webkit-backdrop-filter: blur(0px) saturate(187%);
  background-color: rgba(239, 239, 239, 1);
  border-radius: 12px;
  border: 1px solid rgba(0,0,0,1);
  &:hover{
    width:  ${(props) => props.width > 800 ? '510px' : '250px'};
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
