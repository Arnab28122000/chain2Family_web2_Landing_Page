import CoinModelLayout from "./Coin-Model-Layout";
import { Column, Row, Text } from "./ui/utils";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";

export default function Navbar() {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <Wrapper
    //  active={show}
    active={true}
     >
      <Column
      style={{ transform: `translateY(${offsetY * 0.3}px)` }}
        maxWidth="100vw"
        background="transparent"
        justify="space-between"
        align="center"
      >
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
  padding: 0px 0px 0px;
  transition-timing-function: ${(props) => (props.active ? "ease-in" : "")} ;
    transition:${(props) => (props.active ? "0.5s" : "")} ;
    display: ${(props) => (props.active ? "block" : "none")} ;
`;
