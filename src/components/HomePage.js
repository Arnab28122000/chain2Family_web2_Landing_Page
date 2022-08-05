import styled from "styled-components";
import { useState } from "react";

import Background from "./Background";
import CoinScreen from "./Coin-Screen";
import { HashLink } from "react-router-hash-link";
import { Cross2Icon } from "@radix-ui/react-icons";
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
      {size.width < 600 && !open ? 
      (
        <Column
          position="sticky"
          marginLeft="20px"
          onClick={() => setOpen(true)}
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
      {
      size.width < 600 && open?
      (
        <Container height="50px" width="50px" color="#ffffff"  position="sticky" style={{
          top: 10,
        }} onClick={() => setOpen(false)}>
      <Cross2Icon
            style={{
                marginLeft: '20px',
            }} 
            height='50px' width='50px' color="rgba(255,255,255,0.8)"/>
      </Container>
      )
      : null
      }
      <Container backgroundColor="white">
      {size.width < 600 ?
       <Menu 
      
       disableCloseOnEsc 
       disableOverlayClick
       disableAutoFocus
       style={{
         backgroundColor: 'rgba(255,255,255,1)'
       }} width='50vw' isOpen={open} 
       
       >
       <HashLink style={{ textDecoration: "none" }} smooth to="/#home">
         <Row paddingTop='5px' align='center' justify='center' width='100%'>
            <Text
              color="black"
              fontSize="20px"
              textAlign="center"
              fontWeight="bold"
              paddingRight="20px"
              paddingTop="10px"
              paddingBottom="10px"
              backgroundColor="#EFEFEF" 
              width='100%'
              borderRadius="10px"
            >
              🏠 HOME
            </Text>
            </Row>
          </HashLink>
          
          
          <HashLink style={{ textDecoration: "none" }} smooth to="/#about">
          <Row paddingTop='5px' align='center' justify='center' width='100%'>
            <Text
             color="black"
             fontSize="20px"
             textAlign="center"
             fontWeight="bold"
             paddingRight="20px"
             paddingTop="10px"
             paddingBottom="10px"
             backgroundColor="#EFEFEF" 
             width='100%'
             borderRadius="10px"
            >
              🌐 ABOUT
            </Text>
            </Row>
          </HashLink>
          

          
          <a
            style={{
              textDecoration: "none",
            }}
            href="https://k3ytoshi.gitbook.io/chain2family-network/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Row paddingTop='5px' align='center' justify='center' width='100%'>
            <Text
             color="black"
             fontSize="20px"
             textAlign="center"
             fontWeight="bold"
             paddingRight="20px"
             paddingTop="10px"
             paddingBottom="10px"
             backgroundColor="#EFEFEF" 
             width='100%'
             borderRadius="10px"
            >
             📄 WHITEPAPER
            </Text>
            </Row>
          </a>
          

          
          <HashLink style={{ textDecoration: "none" }} smooth to="/#roadmap">
          <Row paddingTop='5px' align='center' justify='center' width='100%'>
            <Text
             color="black"
             fontSize="20px"
             textAlign="center"
             fontWeight="bold"
             paddingRight="20px"
             paddingTop="10px"
             paddingBottom="10px"
             backgroundColor="#EFEFEF" 
             width='100%'
             borderRadius="10px"
            >
             🚘 ROADMAP
            </Text>
            </Row>
          </HashLink>
          
          
          <HashLink style={{ textDecoration: "none" }} smooth to="/#whitelist">
          <Row paddingTop='5px' align='center' justify='center' width='100%'>
            <Text
             color="black"
             fontSize="20px"
             textAlign="center"
             fontWeight="bold"
             paddingRight="20px"
             paddingTop="10px"
             paddingBottom="10px"
             backgroundColor="#EFEFEF" 
             width='100%'
             borderRadius="10px"
            >
             ✍ WHITELIST
            </Text>
            </Row>
          </HashLink>
          
          
          <HashLink style={{ textDecoration: "none" }} smooth to="/#faq">
          <Row paddingTop='5px' align='center' justify='center' width='100%'>
            <Text
             color="black"
             fontSize="20px"
             textAlign="center"
             fontWeight="bold"
             paddingRight="20px"
             paddingTop="10px"
             paddingBottom="10px"
             backgroundColor="#EFEFEF" 
             width='100%'
             borderRadius="10px"
            >
             ❔ FAQ
            </Text>
            </Row>
          </HashLink>
          

          
          <HashLink style={{ textDecoration: "none" }} smooth to="/#pioneers">
          <Row paddingTop='5px' align='center' justify='center' width='100%'>
            <Text
             color="black"
             fontSize="20px"
             textAlign="center"
             fontWeight="bold"
             paddingRight="20px"
             paddingTop="10px"
             paddingBottom="10px"
             backgroundColor="#EFEFEF" 
             width='100%'
             borderRadius="10px"
            >
            ✨ TEAM
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
