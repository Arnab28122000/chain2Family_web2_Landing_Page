import styled from "styled-components";
import { useState } from "react";

import Background from "./Background";
import CoinScreen from "./Coin-Screen";
import { HashLink } from "react-router-hash-link";
import FAQ from "./faq";
import Footer from "./footer";
import Navbar from "./Navbar";
import Pioneers from "./Poineers";
import Timeline from "./timeline";
import { Column, Container, useWindowSize, Text, Row } from "./ui/utils";
import WhiteListing from "./WhiteListing";
import { slide as Menu } from 'react-burger-menu'

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const size = useWindowSize();
  return (
    <Column>
      <Wrapper>
        <Background />
        <Navbar />
      </Wrapper>
      {size.width < 600 ? (
        <Column
          position="sticky"
          marginLeft="20px"
          onClick={() => setOpen(!open)}
          style={{
            top: 20,
          }}
        >
          <Container
            width="40px"
            height="5px"
            borderRadius="10px"
            marginBottom="5px"
            backgroundColor="rgba(255,255,255,1)"
          />
          <Container
            width="40px"
            height="5px"
            borderRadius="10px"
            marginBottom="5px"
            backgroundColor="rgba(255,255,255,1)"
          />
          <Container
            width="40px"
            height="5px"
            borderRadius="10px"
            marginBottom="5px"
            backgroundColor="rgba(255,255,255,1)"
          />
        </Column>
      ) : null}
      <Container backgroundColor="white">
      {size.width < 600 ?
       <Menu noOverlay style={{
         backgroundColor: 'rgba(255,255,255,1)'
       }} width='50vw' isOpen={open} 
       
       >
       <HashLink style={{ textDecoration: "none" }} smooth to="/#home">
         <Row paddingTop='5px' align='center' justify='center' width='100%'>
            <Text
              color="white"
              fontSize="20px"
              textAlign="center"
              fontWeight="bold"
              paddingRight="20px"
              paddingTop="10px"
              paddingBottom="10px"
              backgroundColor="#08183A" 
              width='100%'
              borderRadius="10px"
            >
              HOME
            </Text>
            </Row>
          </HashLink>
          
          
          <HashLink style={{ textDecoration: "none" }} smooth to="/#about">
          <Row paddingTop='5px' align='center' justify='center' width='100%'>
            <Text
             color="white"
             fontSize="20px"
             textAlign="center"
             fontWeight="bold"
             paddingRight="20px"
             paddingTop="10px"
             paddingBottom="10px"
             backgroundColor="#08183A" 
             width='100%'
             borderRadius="10px"
            >
              ABOUT
            </Text>
            </Row>
          </HashLink>
          

          
          <a
            style={{
              textDecoration: "none",
            }}
            href="https://docs.google.com/document/d/1DWcH9zvDgD6RVFI9_HohWoYbbJQmMEmti5WNHae0O_I/edit?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Row paddingTop='5px' align='center' justify='center' width='100%'>
            <Text
             color="white"
             fontSize="20px"
             textAlign="center"
             fontWeight="bold"
             paddingRight="20px"
             paddingTop="10px"
             paddingBottom="10px"
             backgroundColor="#08183A" 
             width='100%'
             borderRadius="10px"
            >
              WHITEPAPER
            </Text>
            </Row>
          </a>
          

          
          <HashLink style={{ textDecoration: "none" }} smooth to="/#roadmap">
          <Row paddingTop='5px' align='center' justify='center' width='100%'>
            <Text
             color="white"
             fontSize="20px"
             textAlign="center"
             fontWeight="bold"
             paddingRight="20px"
             paddingTop="10px"
             paddingBottom="10px"
             backgroundColor="#08183A" 
             width='100%'
             borderRadius="10px"
            >
              ROADMAP
            </Text>
            </Row>
          </HashLink>
          
          
          <HashLink style={{ textDecoration: "none" }} smooth to="/#whitelist">
          <Row paddingTop='5px' align='center' justify='center' width='100%'>
            <Text
             color="white"
             fontSize="20px"
             textAlign="center"
             fontWeight="bold"
             paddingRight="20px"
             paddingTop="10px"
             paddingBottom="10px"
             backgroundColor="#08183A" 
             width='100%'
             borderRadius="10px"
            >
              WHITELIST
            </Text>
            </Row>
          </HashLink>
          
          
          <HashLink style={{ textDecoration: "none" }} smooth to="/#faq">
          <Row paddingTop='5px' align='center' justify='center' width='100%'>
            <Text
             color="white"
             fontSize="20px"
             textAlign="center"
             fontWeight="bold"
             paddingRight="20px"
             paddingTop="10px"
             paddingBottom="10px"
             backgroundColor="#08183A" 
             width='100%'
             borderRadius="10px"
            >
              FAQ
            </Text>
            </Row>
          </HashLink>
          

          
          <HashLink style={{ textDecoration: "none" }} smooth to="/#pioneers">
          <Row paddingTop='5px' align='center' justify='center' width='100%'>
            <Text
             color="white"
             fontSize="20px"
             textAlign="center"
             fontWeight="bold"
             paddingRight="20px"
             paddingTop="10px"
             paddingBottom="10px"
             backgroundColor="#08183A" 
             width='100%'
             borderRadius="10px"
            >
              PIONEERS
            </Text>
            </Row>
          </HashLink>
          
      </Menu> : null}
      </Container>
      <CoinScreen />
      <Timeline />
      <WhiteListing />
      <FAQ />
      <Pioneers />
      <Footer />
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
