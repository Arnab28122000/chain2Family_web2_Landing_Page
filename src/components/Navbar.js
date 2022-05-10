import CoinModelLayout from "./Coin-Model-Layout";
import { Column, Row, Text, useWindowSize} from "./ui/utils";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";

export default function Navbar() {
  
  const size = useWindowSize();
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
          fontSize={size.width> 800 ? "60px" : "31px"}
          letterSpacing={size.width> 800 ? "13px" : "10px"}
        >
          CHAIN2FAMILY
        </Text>
        { size.width > 700 ?
        <Row>
          <HashLink style={{ textDecoration: "none" }} smooth to="/#home">
            <Text
              color="black"
              fontSize={size.width> 800 ? "15px": "12px"}
              fontWeight="bold"
              paddingRight={size.width> 800 ? "20px" : '10px'}
            >
              HOME
            </Text>
          </HashLink>

          <HashLink style={{ textDecoration: "none" }} smooth to="/#about">
            <Text
              color="black"
              fontSize={size.width> 800 ? "15px": "12px"}
              fontWeight="bold"
              paddingRight={size.width> 800 ? "20px" : '10px'}
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
              fontSize={size.width> 800 ? "15px": "12px"}
              fontWeight="bold"
              paddingRight={size.width> 800 ? "20px" : '10px'}
            >
              WHITEPAPER
            </Text>
          </a>

          <HashLink style={{ textDecoration: "none" }} smooth to="/#roadmap">
            <Text
              color="black"
              fontSize={size.width> 800 ? "15px": "12px"}
              fontWeight="bold"
              paddingRight={size.width> 800 ? "20px" : '10px'}
            >
              ROADMAP
            </Text>
          </HashLink>

          <HashLink style={{ textDecoration: "none" }} smooth to="/#whitelist">
            <Text
              color="black"
              fontSize={size.width> 800 ? "15px": "12px"}
              fontWeight="bold"
              paddingRight={size.width> 800 ? "20px" : '10px'}
            >
              WHITELIST
            </Text>
          </HashLink>
          <HashLink style={{ textDecoration: "none" }} smooth to="/#faq">
            <Text
              color="black"
              fontSize={size.width> 800 ? "15px": "12px"}
              fontWeight="bold"
              paddingRight={size.width> 800 ? "20px" : '10px'}
            >
              FAQ
            </Text>
          </HashLink>

          <HashLink style={{ textDecoration: "none" }} smooth to="/#pioneers">
            <Text
              color="black"
              fontSize={size.width> 800 ? "15px": "12px"}
              fontWeight="bold"
              paddingRight={size.width> 800 ? "20px" : '10px'}
            >
              PIONEERS
            </Text>
          </HashLink>
        </Row> : null}
      </Column>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  max-width: 100vw;
  width: 100%;
  max-height: 50px;
  display: grid;
  gap: 0px;
  text-align: center;
  margin: 0 auto;
  padding: 0px 0px 0px;
  transition-timing-function: ${(props) => (props.active ? "ease-in" : "")};
  transition: ${(props) => (props.active ? "0.5s" : "")};
  display: ${(props) => (props.active ? "block" : "none")};
`;
