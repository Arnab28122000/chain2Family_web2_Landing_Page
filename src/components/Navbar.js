import { Link } from "react-router-dom";
import Logo from "../images/chain2Logo_sunset.png";
import CoinModelLayout from "./Coin-Model-Layout";
import { Column, Row, Text, Container } from "./ui/utils";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";

export default function Navbar() {
  // const [show, setShow] = useState(true);
  // const [maxY, setMaxY] = useState(100);
  // const controlNavbar = () => {
  //   console.log("Y", window.scrollY);

  //   if (window.scrollY > maxY) {
  //     console.log("Greater");
  //     setMaxY(window.scrollY);
  //   }
  //   console.log("maxY", maxY);
  //   if (window.scrollY > 100) {
  //     setShow(false);
  //   }
  //   // else if(window.scrollY < maxY-50){
  //   //     setShow(true)
  //   //     setMaxY(window.scrollY)
  //   // }
  //   else {
  //     setShow(true);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", controlNavbar);
  //   return () => {
  //     window.removeEventListener("scroll", controlNavbar);
  //   };
  // }, []);

  return (
    <Wrapper
    //  active={show}
    active={true}
     >
      <Column
        maxWidth="100vw"
        background="transparent"
        justify="space-between"
        align="center"
      >
        {/* <HashLink 
        smooth
        to="/#home" 
        style={{
             textDecoration: 'none'
             }}>
            <Row 
            justify="" align="center"
            paddingLeft='70px' paddingTop='30px'>
            <img src={Logo} height="70px" width="auto" alt="logo"/>
            <Container paddingTop='15px' paddingLeft='10px'>
            </Container>
            </Row>
        </HashLink>   */}
        <div
          style={{
            paddingTop: "20px",
          }}
        >
          <CoinModelLayout />
        </div>
        <Text
          color="black"
          fontWeight="bold"
          fontSize="60px"
          letterSpacing="13px"
        >
          CHAIN2FAMILY
        </Text>
        <Row>
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

          <HashLink style={{ textDecoration: "none" }} smooth to="/#about">
            <Text
              color="black"
              fontSize="15px"
              fontWeight="bold"
              paddingRight="20px"
            >
              WHITEPAPER
            </Text>
          </HashLink>

          <HashLink style={{ textDecoration: "none" }} smooth to="/#about">
            <Text
              color="black"
              fontSize="15px"
              fontWeight="bold"
              paddingRight="20px"
            >
              ROADMAP
            </Text>
          </HashLink>

          <HashLink style={{ textDecoration: "none" }} smooth to="/#about">
            <Text
              color="black"
              fontSize="15px"
              fontWeight="bold"
              paddingRight="20px"
            >
              WHITELIST
            </Text>
          </HashLink>
          <HashLink style={{ textDecoration: "none" }} smooth to="/#about">
            <Text
              color="black"
              fontSize="15px"
              fontWeight="bold"
              paddingRight="20px"
            >
              FAQ
            </Text>
          </HashLink>

          <HashLink style={{ textDecoration: "none" }} smooth to="/#about">
            <Text
              color="black"
              fontSize="15px"
              fontWeight="bold"
              paddingRight="20px"
            >
              TEAM
            </Text>
          </HashLink>
        </Row>
      </Column>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: sticky;
  top:0;
  max-width: 100vw;
  width: 100%;
  max-height: 50px;
  display: grid;
  gap: 0px;
  text-align: center;
  margin: 0 auto;
<<<<<<< HEAD
  padding: 0px 0px 0px;
  transition-timing-function: ${(props) => (props.active ? "ease-in" : "")} ;
    transition:${(props) => (props.active ? "0.5s" : "")} ;
    display: ${(props) => (props.active ? "block" : "none")} ;
=======
  padding: 30px 0px 0px;
>>>>>>> 920381c55fb983623c2a16c653990c974c48d44f
`;
