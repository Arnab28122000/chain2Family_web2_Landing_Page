import { Column, Text, Row, useWindowSize } from "./ui/utils";
import { useState } from "react";

import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

export default function FAQ(){
    const size = useWindowSize();

    const faqList = [
        {
            question:'When is the public ICO?🚀',
            answer:"The public ICO starts December 31st 2022 and will last until April 5th 2023 (Satoshi Nakamoto's Birthday). There will be two private fundraisers held prior to the Public ICO. Those who want to participate in the first early fundraisers can sign-up on the whitelisting form",
            height: '180px',
        },{
            question:'Who is this network for?🌎',
            answer:"The C2F Network is for everyone! Our decentralized platform is able to accomodate individual or a consortium of local businesses, family households, commercial banks, credit unions, niche communities, enterprise businesses, government organizations, non or for-profit organizations, university or college centers, and web2 users looking to transtion into the web3 space.",
            height: '220px',
        },{
            question:'What is the C2F Network?🌎',
            answer:"The Chain2Family Network is a global public blockchain that branches the financial gaps between Traditional Finance (TradFi), Centralized Finance (CeFi), Decentralized Finance (DeFi) by empowering the people through asset tokenization, connecting their own blockchains and accessing a DeFi marketplace of decentralized applications",
            height: '220px',
        },{
            question:'How can I get whitelisted?📃', 
            answer:"Please navigate to the whitelisting form above and fill out the required details. You'll receive additional onboarding information through the email and information provided",
            height: '160px',
        },{
            question:'How does asset tokenization work?🌀', 
            answer:"The C2F network provides a native desktop and mobile application that communicates back to the public layer of the network. The user then selects what type of physical and digital assets they would like to tokenize. After successful verification of ownership through our intergration with chainlinks DON (decentraliced oracle network), the user will receive an overview of their tokenized assets value. They will then be presented a final confirmation of asset transfer where they will SWAP their native C2FCoins to receive their tokenized assets in the form of C2FTokens, further uploading to their blockchain.",
            height: '300px',
        },{
            question:'Why should I tokenize with the C2F Network?🤔', 
            answer:"Why wouldn't you? We're pioneering the FUTURE of asset management! Our network allows the capability for the user to BRANCH out into their own blockchain ledgers where they'll have an extra layer of economic freedom and security that the current financial system fails to provide. Additionally our community members will have access to a complete DeFi Marketplace called the BranchMarket. This BranchMarket hosts addtional BranchApplications (dApps) providing a wide range of services and features",
            height: '280px',
        }
    ];

    return (
        <Column backgroundColor="#08183A" justify='center' align='center' id='faq' paddingBottom='70px'>
            <Text 
            fontSize={size.width > 600 ?"40px" : "30px" }
            textAlign='center'
            fontWeight="bold" color='rgba(255,255,255,0.8)' marginBottom='50px'>Frequently Asked Questions</Text>
            {
                faqList.map((faq, index) => {
                    return (
                        <FAQTile key={index} question={faq.question} answer={faq.answer} height={faq.height}/>
                    )
                })
        }
        </Column>
    )
}

function FAQTile(props){
    const size = useWindowSize();
    const [isOpen, setOPen] = useState(false);
    const [height, setHeight] = useState('70px');
    return(
        <Column 
        height={size.width<650 && isOpen ? height + height/2 : height}
        style={{
            transition: "height 0.3s",
            webkitTransition: "height 0.3s",
        }}
        width={size.width > 1500 ? '60vw' : size.width > 700 ? '80vw' :'90vw' }
        // align='center'
        backgroundColor='rgba(0,0,0,0.5)' borderRadius='5px' marginBottom='12px'>
        <Row justify='space-between' margin='10px 20px'>
            <Text fontWeight='bold' letterSpacing='1.5px' 
            fontSize={size.width > 1000 ?'30px':'20px' }
            color='rgba(255,255,255,0.8)'>{props.question}</Text>
            {isOpen ? 
            <MinusIcon color='white' width='40px' height='40px' onClick={() => {
                setHeight('70px')
                setOPen(!isOpen)
                
            }}/> 
            : 
            <PlusIcon color='white' width='40px' height='40px' onClick={() => {
                setHeight(props.height)
                setOPen(!isOpen)
                
            }}/>}
        </Row>
        {isOpen ? <Text 
        lineHeight={size.width > 1000 ?'30px':'22px' }
        fontWeight='600' 
        fontSize={size.width > 1000 ?'20px':'18px' }
        color='rgba(255,255,255, 0.8)' marginTop='10px' marginLeft='20px' marginRight='20px' marginBottom='20px'>{props.answer}</Text> : null}
        </Column>
    )
}