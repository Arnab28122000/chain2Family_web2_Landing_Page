import { Column, Text, Row, useWindowSize } from "./ui/utils";
import { useState } from "react";

import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

export default function FAQ(){
    const size = useWindowSize();

    const faqList = [
        {
            question:'When is the public ICO? (Initial Coin Offering) 🚀',
            answer:"The public ICO is scheduled to start on December 31st 2022 and will last until April 5th 2023 (Satoshi Nakamoto's Birthday). There will be two early private fundraisers held prior to the Public ICO. Those who want to participate in the early fundraisers can sign-up on the whitelisting form",
            height: '180px',
        },{
            question:'Who is LifeDeFied for?',
            answer:"The LifeDeFied platform is for everyone! Our decentralized banking solutions are meant to accomodate the individual or a consortium of local businesses, family households, commercial banks, credit unions, niche communities, enterprise businesses, government organizations, non-profit to for-profit organizations, universities, and web2 users looking to transtion into the web3 space.",
            height: '220px',
        },{
            question:'What is LifeDeFied for?',
            answer:"The LifeDeFied platform is a global public blockchain meant to branch and connect the financial gaps between Traditional Finance (TradFi), Centralized Finance (CeFi), Decentralized Finance (DeFi) by empowering the people through asset tokenization, connecting their own blockchains and accessing a DeFi marketplace of decentralized applications",
            height: '220px',
        },{
            question:'Where can I get whitelisted?📃✍', 
            answer:"Please navigate to the whitelisting form above and fill out the required details. You'll receive additional onboarding information through the email and information provided",
            height: '160px',
        },{
            question:'How does asset tokenization work?💎', 
            answer:"The LifeDeFied platform will provide a native desktop and mobile application that communicates to the public layer of the network. The user then selects what type of assets they want to upload whether it be physical, digital or documentation. After successful verification of ownership through our intergration with chainlinks DON (decentraliced oracle network), the user will receive an overview of their tokenized smart contract. They will then be presented a final confirmation of their asset value and upload their stable tokens or information assets to their blockchain network.",
            height: '300px',
        },{
            question:'Why should I tokenize and bank with LifeDeFied?🤔', 
            answer:"Why wouldn't you? We're the only DeFi banking platform that offers you complete sovereignty over your assets and personal information. Our network allows the capability for the user to BRANCH out into their own private blockchain ledgers where you have an extra layer of economic freedom and security that the current financial system fails to provide. Additionally you will have access to a complete DeFi Marketplace called the BranchMarket. This BranchMarket hosts addtional BranchApplications (dApps) providing a wide range of services and features",
            height: '280px',
        }
    ];

    return (
        <Column backgroundColor="#EFEFEF" justify='center' align='center' id='faq' paddingBottom='70px'>
            <Text 
            fontSize={size.width > 600 ?"40px" : "30px" }
            textAlign='center'
            fontWeight="bold" color='rgba(0,0,0)' marginBottom='50px'  marginTop='70px'>Frequently Asked Questions</Text>
            {
                faqList.map((faq, index) => {
                    return (
                        <FAQTile key={index} question={faq.question} answer={faq.answer} height={faq.height} mobileHeight={faq.mobileHeight}/>
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
        height={height}
        style={{
            transition: "height 0.3s",
            WebkitTransition: "height 0.3s",
        }}
        width={size.width > 1500 ? '60vw' : size.width > 700 ? '80vw' :'90vw' }
        // align='center'
        backgroundColor='rgba(255,255,255,1)' borderRadius='5px' marginBottom='12px'>
        <Row justify='space-between' margin='10px 20px'>
            <Text fontWeight='bold' letterSpacing='1.5px' 
            fontSize={size.width > 1000 ?'30px':'20px' }
            color='rgba(0,0,0,1)'>{props.question}</Text>
            {isOpen ? 
            <MinusIcon color='black' width='40px' height='40px' onClick={() => {
                setHeight('70px')
                setOPen(!isOpen)
                
            }}/> 
            : 
            <PlusIcon color='black' width='40px' height='40px' onClick={() => {
                setHeight(size.width<650 ? props.mobileHeight :props.height)
                setOPen(!isOpen)
                
            }}/>}
        </Row>
        {isOpen ? <Text 
        lineHeight={size.width > 1000 ?'30px':'22px' }
        fontWeight='600' 
        fontSize={size.width > 1000 ?'20px':'18px' }
        color='rgba(49, 173, 148, 1)' marginTop='10px' marginLeft='20px' marginRight='20px' marginBottom='20px'>{props.answer}</Text> : null}
        </Column>
    )
}