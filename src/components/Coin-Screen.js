import { Row, Text, useWindowSize } from "./ui/utils";

export default function CoinScreen() {
  const size = useWindowSize();
    return (
      <Row maxWidth="100vw" 
      height={size> 1000 ?"400px": "500px" }
      id="about"
    backgroundColor="#fff" 
      // backgroundImage="linear-gradient(#1f1144,#1f1144, #57BEF8)" 
      justify="center" align="center" paddingTop="825px">
          <Text alignSelf='center' textAlign="center" width="100vw"
           fontSize={size.width > 800 ?"22px": "16px"}
            wordSpacing={size.width > 800 ?"7px": "5px"}
            color='rgba(0,0,0,1)' 
            lineHeight={size.width > 800 ?"40px": "30px"}
            paddingRight={size.width > 800 ?"70px": "10px"}
            paddingLeft={size.width > 800 ?"70px": "10px"}
            fontWeight="bold">
          LifeDeFied is an all-in-one non-custodial tokenization platform and bridge that connects all three sectors of the financial market (TradFi, CeFi and DeFi). We provide the consumer, business or government their own private blockchain networks along with their own web3 wallet identities to make use of DeFi banking services, cold storage solutions and integrations on the public marketplace. 
          </Text>
      </Row>
    );
  }