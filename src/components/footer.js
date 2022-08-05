import { Row, Column, Text } from "./ui/utils";

import { LinkedInLogoIcon, InstagramLogoIcon, DiscordLogoIcon, TwitterLogoIcon, EnvelopeClosedIcon  } from "@radix-ui/react-icons";


export default function Footer(){
    return(
        <Column  backgroundColor="#000" justify="center" align="center" paddingBottom='10px'>
        <Text fontSize="30px" color="rgba(255,255,255,0.8)" fontWeight="bold" marginTop='50px' marginBottom='20px'>Contact Us</Text>
        <Row marginBottom="10px">
        <a style={{
      textDecoration: 'none'
    }} href='https://www.linkedin.com/company/lifedefied'  rel="noopener noreferrer" target="_blank">
            <LinkedInLogoIcon 
            style={{
                marginLeft: '10px',
                marginRight: '10px'
            }} 
            height='30px' width='30px' color="rgba(255,255,255,0.8)"/>
            </a>
            <a style={{
      textDecoration: 'none'
    }} href='https://www.instagram.com/lifedefied/'  rel="noopener noreferrer" target="_blank">
            <InstagramLogoIcon  style={{
                marginLeft: '10px',
                marginRight: '10px'
            }} height='30px' width='30px' color="rgba(255,255,255,0.8)"/>
            </a>
            <a style={{
      textDecoration: 'none'
    }} href='https://t.co/lj27jtrawp'  rel="noopener noreferrer" target="_blank">
            <DiscordLogoIcon  style={{
                marginLeft: '10px',
                marginRight: '10px'
            }} height='30px' width='30px' color="rgba(255,255,255,0.8)"/>
            </a>
            <a style={{
      textDecoration: 'none'
    }} href='https://twitter.com/LifeDeFied'  rel="noopener noreferrer" target="_blank">
            <TwitterLogoIcon  style={{
                marginLeft: '10px',
                marginRight: '10px'
            }} height='30px' width='30px' color="rgba(255,255,255,0.8)"/>
            </a>
            <a style={{
      textDecoration: 'none'
    }} href='mailto:mccunekeaton@gmail.com'  rel="noopener noreferrer" target="_blank">
            <EnvelopeClosedIcon  style={{
                marginLeft: '10px',
                marginRight: '10px'
            }} height='30px' width='30px' color="rgba(255,255,255,0.8)"/>
            </a>
        </Row>
        <Text color="rgba(255, 255, 255, 0.6)">© LifeDeFied, 2022 |  mccunekeaton@gmail.com</Text>
        </Column>
    );
}
    
