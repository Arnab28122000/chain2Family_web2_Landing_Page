import {Link} from 'react-router-dom';
import Logo from "../images/chain2Logo_sunset.png"
import { Row, Text, Container } from './ui/utils';
import styled from "styled-components";


export default function Navbar() {

    return (
        <Wrapper>
        <Row 
        maxWidth="100vw"background="transparent"
        justify="space-between" align="center"
         >
        <Link 
        to="/" 
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
        </Link>  
        <Row>
        
              <Link style={{ textDecoration: 'none' }} to="/about">
                  <Text color='#ffffff' fontSize='18px' fontWeight='bold' paddingRight='20px'>
                  About
                  </Text>
                </Link>
          
                <Link style={{ textDecoration: 'none' }} to="/about">
                  <Text color='#ffffff' fontSize='18px' fontWeight='bold' paddingRight='50px'>
                  Contact Us
                  </Text>
                </Link>
              </Row> 
        </Row>   
        </Wrapper>
    )
}

const Wrapper = styled.div`
  position: relative;
  max-width: 35vw;
  max-height: 1000px;
  display: grid;
  gap: 0px;
  text-align: center;
  margin: 0 auto;
  padding: 30px 0px 0px;
`;