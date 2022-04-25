import {Link} from 'react-router-dom';
import Logo from "../images/chain2Logo_sunset.png"
import { Row, Text, Container } from './ui/utils';
import styled from "styled-components";
import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from "react";

export default function Navbar() {

    const [show, setShow] = useState(true)
    const [maxY, setMaxY] = useState(100)
    const controlNavbar = () => {
        console.log("Y", window.scrollY)
        
        if(window.scrollY > maxY){
            console.log("Greater")
            setMaxY(window.scrollY)
        }
        console.log("maxY", maxY)
        if (window.scrollY > 100) {
            setShow(false)
        } 
        // else if(window.scrollY < maxY-50){
        //     setShow(true)
        //     setMaxY(window.scrollY)
        // }
        else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    return (
        <Wrapper active={show}>
        <Row 
        maxWidth="100vw"background="transparent"
        justify="space-between" align="center"
         >
        <HashLink 
        smooth
        to="/#home" 
        style={{
             textDecoration: 'none'
             }}>
            <Row 
            justify="space-between" align="center"
            paddingLeft='70px' paddingTop='30px'>
            <img src={Logo} height="70px" width="auto" alt="logo"/>
            <Container paddingTop='15px' paddingLeft='10px'>
            </Container>
            </Row>
        </HashLink>  
        <Row>
        
              <HashLink
              style={{ textDecoration: 'none' }} 
              smooth
              to="/#about"
              >
                  <Text color='#fc9c54' fontSize='18px' fontWeight='bold' paddingRight='20px'>
                  About
                  </Text>
                </HashLink>
                <Link style={{ textDecoration: 'none' }} to="/about">
                  <Text color='#fc9c54' fontSize='18px' fontWeight='bold' paddingRight='50px'>
                  Contact Us
                  </Text>
                </Link>
              </Row> 
        </Row>   
        </Wrapper>
    )
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
  transition-timing-function: ${(props) => props.active ? 'ease-in': ''} ;
    transition:${(props) => props.active ? '0.5s': ''} ;
    display: ${(props) => props.active ? 'block': 'none'} ;
`;