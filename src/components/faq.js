import { Column, Text, Row, useWindowSize } from "./ui/utils";
import { useState } from "react";

import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

export default function FAQ(){
    const size = useWindowSize();
    return (
        <Column backgroundColor="#08183A" justify='center' align='center' id='faq' paddingBottom='70px'>
            <Text 
            fontSize={size.width > 600 ?"40px" : "30px" }
            textAlign='center'
            fontWeight="bold" color='rgba(255,255,255,0.8)' marginBottom='50px'>Frequently Asked Questions</Text>
            <FAQTile question='What is Chain2Family?' answer='We aim to be a GLOBAL provider in BRANCHING the financial gaps between Traditional Finance, Centralized Finance and Decentralized Finance. C2FC powers an ecosystem of individual BLOCKCHAINS designed to scale and interoperate with each other including CENTRAL BANK DIGITAL CURRENCIES on a GLOBAL scale.'/>
            <FAQTile question='When is the public ICO🚀?' answer="The public ICO is on April 1st 2023 and last until April 5th 2023 i.e. Satoshi Nakamoto's Birthday"/>
            <FAQTile question='How to get whitelisted?' answer="Please navigate to the whitelisting section and fill out the required details. Our team will get in contact with you immediately."/>
            <FAQTile question='What is a hardware wallet?' answer="Hardware wallets are a form of offline storage. A hardware wallet is a cryptocurrency wallet that stores the user's private keys (a critical piece of information used to authorize outgoing transactions on the blockchain network) in a secure hardware device."/>
            <FAQTile question='How to tokenize real estate?' answer="Tokenization is the process in which  real estate assets are converted into several virtual (digital) tokens. Further selling these virtual tokens on an online marketplace. The purchaser of a particular token owns that portion of the asset. In real estate tokenization, every token represents direct ownership of an asset. These assets can be a share in a company owning real estate, a piece of real estate or else participation in a real estate investment fund or anything else. Hence, with the help of tokenization, property purchasers can do transactions digitally using tokens instead of the traditional way of paper documentation. "/>
            <FAQTile question='Why should I tokenize real estate?' answer="The motive behind tokenization is to secure real assets; that’s why it is also called security tokens. Like securitizing an asset means dividing it into shares; the same way tokenization means splitting an asset into tokens (shares), representing a particular share of the underlying asset. "/>
        </Column>
    )
}

function FAQTile(props){
    const size = useWindowSize();
    const [isOpen, setOPen] = useState(false);
    return(
        <Column 
        width={size.width > 1000 ?'60vw':'90vw' }
        backgroundColor='rgba(0,0,0,0.5)' borderRadius='5px' marginBottom='12px'>
        <Row justify='space-between' margin='10px 20px'>
            <Text fontWeight='bold' letterSpacing='1.5px' 
            fontSize={size.width > 1000 ?'30px':'20px' }
            color='rgba(255,255,255,0.8)'>{props.question}</Text>
            {isOpen ? 
            <MinusIcon color='white' width='40px' height='40px' onClick={() => setOPen(!isOpen)}/> 
            : 
            <PlusIcon color='white' width='40px' height='40px' onClick={() => setOPen(!isOpen)}/>}
        </Row>
        {isOpen ? <Text 
        lineHeight={size.width > 1000 ?'30px':'22px' }
        fontWeight='600' 
        fontSize={size.width > 1000 ?'20px':'18px' }
        color='rgba(255,255,255, 0.8)' marginTop='10px' marginLeft='20px' marginRight='20px' marginBottom='20px'>{props.answer}</Text> : null}
        </Column>
    )
}