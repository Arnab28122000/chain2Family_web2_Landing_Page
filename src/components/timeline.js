import { Column, Text, useWindowSize } from "./ui/utils";
import { Chrono } from "react-chrono";

export default function Timeline() {
  const size = useWindowSize();
  const items = [
    {
      title: "PHASE ONE",
      cardTitle: "\n\tPHASE ONE BETA\n\n",
      cardSubtitle:
        "\t- MetaSeedling Avatars Season 1\n \t- Dynamic NFT Collection (Closed Beta)\n \t- Dynamic NFT Collection (Open Beta)\n \t- HomeTree Network (Public Blockchain Layer)\n \t- ChainBranch Networks (Private Blockchain Layer)\n \t- Inter Blockchain Communication and Routing",

    },
    {
      title: "PHASE TWO",
      cardTitle: "\n\tPHASE TWO BETA\n\n",
      cardSubtitle:
        "\t- LifeDeFied Utility Platform\n \t- LifeDeFied Utility Wallet (Hot + Cold Wallet)\n \t- DeFi Bank Account + Web3 Identity\n \t- HEXTree + LiquidityTree (DeFi, CeFi and TradFi)\n \t- Tokenization Portal (Physical, Digital and Documentational",
    },
    {
      title: "PHASE THREE",
      cardTitle: "\n\tPHASE THREE BETA\n\n",
      cardSubtitle:
        "\t- BranchMarket + BranchApps (Closed Beta)\n \t- BranchMarket + BranchApps (Open Beta)\n \t- LifeDeFied Web3 Services (LD3S Closed Beta)\n \t- LifeDeFied Web3 Services (LD3S Open Beta)\n \t- ChainBranch Utility Marketplace Intergrations", 
    },
    {
      title: "PHASE FOUR",
      cardTitle: "\n\tPHASE FOUR BETA\n\n",
      cardSubtitle:
        "\t- Cold Storage Services + Cold Data Center\n \t- Cold Storage Staking (Validation + Delegation)\n \t-  Eco Friendly Validation + Delegation\n \t- Carbon Neutral to Carbon Negative \n \t- ChainBranch Nested Blockchain Virtulization\n \t- Global DeFi Marketplace + Community Gamification",
    },
  ];

  return (
    <Column backgroundColor="#fff" id='roadmap' paddingTop='0px' paddingBottom='70px'>
      <Text 
      fontSize={size.width > 800 ?"40px": "30px"}
      textAlign="center" maxWidth='100vw' width='100%' fontWeight="bold" color='rgba(0,0,0,1)' marginBottom='50px'> Roadmap to Mainnet</Text>
      <div style={{whiteSpace: "pre-wrap" }}>
      <Chrono
        items={items}
        theme={{
          // primary: "rgba(0,0,0,0.7)",
          primary: "rgba(49,173,148,1)",
          // secondary: "rgba(255,255,255,0.7)",
          secondary: "rgba(41, 116, 143, 1)",
          // cardBgColor: "rgba(255,255,255,0.9)",
          cardBgColor: "rgba(239,239,239,1)",
          // cardForeColor: "rgba(0,0,0,0.8)",
          cardForeColor: "rgba(0,0,0,1)",
          titleColor: "rgba(49,173,148,1)",
          textColor: "rgba(255,255,255,1)",
        }}
        mode={size.width > 800 ? "VERTICAL_ALTERNATING" : "VERTICAL"}
        slideItemDuration={2000}
        scrollable={{ scrollbar: true }}
        showNavigation={false}
      />
      </div>
    </Column>
  );
}
