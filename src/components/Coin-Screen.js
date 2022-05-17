import { Row, Text, useWindowSize } from "./ui/utils";

export default function CoinScreen() {
  const size = useWindowSize();
    return (
      <Row maxWidth="100vw" 
      height={size> 1000 ?"400px": "500px" }
      id="about"
    backgroundColor="#08183A" 
      // backgroundImage="linear-gradient(#1f1144,#1f1144, #57BEF8)" 
      justify="center" align="center" paddingTop="825px">
          <Text alignSelf='center' textAlign="center" width="100vw"
           fontSize={size.width > 800 ?"22px": "16px"}
            wordSpacing={size.width > 800 ?"7px": "5px"}
            color='rgba(255,255,255,0.8)' 
            lineHeight={size.width > 800 ?"40px": "30px"}
            paddingRight={size.width > 800 ?"70px": "10px"}
            paddingLeft={size.width > 800 ?"70px": "10px"}
            fontWeight="bold">
          C2F is the future of assest management and tokenization!💎 The network aims to be a GL🌎BAL provider in 🌿BRANCHING the financial gaps between Traditional Finance, Centralized Finance and Decentralized Finance. The platform will host a global DeFi market where the community can access multiple DeFi applications for personal or consortium use cases
          </Text>
      </Row>
    );
  }