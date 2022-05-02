import { Row, Text } from "./ui/utils";

export default function CoinScreen() {
    return (
      <Row maxWidth="100vw" height="400px" id="about"
    backgroundColor="#08183A" 
      // backgroundImage="linear-gradient(#1f1144,#1f1144, #57BEF8)" 
      justify="center" align="center" paddingTop="800px">
          <Text alignSelf='center' textAlign="center" width="100vw" fontSize="22px" wordSpacing="7px" color='rgba(255,255,255,0.8)' lineHeight="40px" paddingRight="70px" paddingLeft="70px" fontWeight="bold">
          We aim to be a GLOBAL provider in BRANCHING the financial gaps between Traditional Finance, Centralized Finance and Decentralized Finance. C2FC powers an ecosystem of individual BLOCKCHAINS designed to scale and interoperate with each other including CENTRAL BANK DIGITAL CURRENCIES on a GLOBAL scale.
          </Text>
      </Row>
    );
  }