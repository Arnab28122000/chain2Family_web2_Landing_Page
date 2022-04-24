import { Row,Column, Container, Text } from "./ui/utils";
import styled from "styled-components";
import pos from "../images/pos_model.png";

export default function POSScreen() {
  return (
    <Column
      maxWidth="100vw"
      height="450px"
      justify="center"
      align="center"
      paddingTop="0px"
    >
      <Container
        maxWidth="100vw"
        height="150px"
        width="100%"
        backgroundImage="linear-gradient( #57BEF8, #fff)"
      />
      <Row
        maxWidth="100vw"
        justify="space-between"
        // align="space-between"
      backgroundColor="#fff">
        {/* <Text maxWidth="40vw" width="100%" fontSize=''> */}
        <Text wordSpacing='7px' maxWidth="40vw" width="100%" fontSize="22px" color="#292929" lineHeight="40px" paddingLeft="70px" fontWeight="bold" paddingRight='20px'>
          C2FC receives out of network transaction fees and provides multiple
          DeFi crosschain apps as services both on a individual or enterprise
          level. Those who stake their assets back into the network receive a
          quarterly yield or discounts on such services.
        </Text>
        <POSImage />
      </Row>
    </Column>
  );
}

const POSImage = styled.div`
  height: 300px;
  width: 60vw;
  margin-left: 50px;
  margin-right: 50px;
  background-image: url(${pos});
  background-size: 100%;
  background-repeat: no-repeat;
`;
