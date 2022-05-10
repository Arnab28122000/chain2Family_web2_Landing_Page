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
import { Column, Container, useWindowSize, Text } from "./ui/utils";
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
       <Menu style={{
         backgroundColor: 'rgba(255,255,255,1)'
       }} width='60vw' isOpen={open}>
       <HashLink style={{ textDecoration: "none" }} smooth to="/#home">
            <Text
              color="black"
              fontSize="15px"
              fontWeight="bold"
              paddingRight="20px"
            >
              HOME
            </Text>
          </HashLink>

          <HashLink style={{ textDecoration: "none" }} smooth to="/#about">
            <Text
              color="black"
              fontSize="15px"
              fontWeight="bold"
              paddingRight="20px"
            >
              ABOUT
            </Text>
          </HashLink>

          <a
            style={{
              textDecoration: "none",
            }}
            href="https://docs.google.com/document/d/1DWcH9zvDgD6RVFI9_HohWoYbbJQmMEmti5WNHae0O_I/edit?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Text
              color="black"
              fontSize="15px"
              fontWeight="bold"
              paddingRight="20px"
            >
              WHITEPAPER
            </Text>
          </a>

          <HashLink style={{ textDecoration: "none" }} smooth to="/#roadmap">
            <Text
              color="black"
              fontSize="15px"
              fontWeight="bold"
              paddingRight="20px"
            >
              ROADMAP
            </Text>
          </HashLink>

          <HashLink style={{ textDecoration: "none" }} smooth to="/#whitelist">
            <Text
              color="black"
              fontSize="15px"
              fontWeight="bold"
              paddingRight="20px"
            >
              WHITELIST
            </Text>
          </HashLink>
          <HashLink style={{ textDecoration: "none" }} smooth to="/#faq">
            <Text
              color="black"
              fontSize="15px"
              fontWeight="bold"
              paddingRight="20px"
            >
              FAQ
            </Text>
          </HashLink>

          <HashLink style={{ textDecoration: "none" }} smooth to="/#pioneers">
            <Text
              color="black"
              fontSize="15px"
              fontWeight="bold"
              paddingRight="20px"
            >
              PIONEERS
            </Text>
          </HashLink>
      </Menu>
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
