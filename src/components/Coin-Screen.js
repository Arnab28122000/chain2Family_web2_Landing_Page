import CoinModelLayout from "./Coin-Model-Layout";
import { Row, Text } from "./ui/utils";

export default function CoinScreen() {
    return (
      <Row maxWidth="100vw" height="500px" 
    //   backgroundColor="#1f1144" 
      backgroundImage="linear-gradient(#1f1144,#1f1144, #57BEF8)" 
      justify="space-between" align="center" paddingTop="400px">
          <CoinModelLayout/>
          <Text width="50vw" fontSize="22px" wordSpacing="7px" color="white" lineHeight="40px" paddingRight="70px" fontWeight="bold">
          We aim to be a GLOBAL provider in BRANCHING the financial gaps between Traditional Finance, Centralized Finance and Decentralized Finance. C2FC powers an ecosystem of individual BLOCKCHAINS designed to scale and interoperate with each other including CENTRAL BANK DIGITAL CURRENCIES on a GLOBAL scale.
          </Text>
      </Row>
    );
  }