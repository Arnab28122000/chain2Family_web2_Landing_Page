import { Column, Text, useWindowSize } from "./ui/utils";
import { Chrono } from "react-chrono";

export default function Timeline() {
  const size = useWindowSize();
  const items = [
    {
      title: "2022 Q2",
      cardTitle: "\n\t2022 Q2\n\n",
      cardSubtitle:
        "\t- WhitepaperV1\n \t- Early Whitelisting\n \t- Startup with Chainlink\n \t- Ignite Startup Program\n \t- First Round of Funding\n \t- Onboard KEY Team Members",

    },
    {
      title: "2022 Q3",
      cardTitle: "\n\t2022 Q3\n\n",
      cardSubtitle:
        "\t- Public HomeTree Beta\n \t- Private ChainBranch Beta\n \t- Strategic Partnerships\n \t- Community Development\n \t- 1st Presale Announced\n \t- Tokenized BranchApp Beta",
    },
    {
      title: "2022 Q4",
      cardTitle: "\n\t2022 Q4\n\n",
      cardSubtitle:
        "\t- HEXTree Beta\n \t- LiquidityTree Beta\n \t- BranchMarket Beta\n \t- LifeDeFied Utility Wallet\n \t- Allocation of 1st Presale \n \t- 2nd Presale Announced",
    },
    {
      title: "2023 Q1",
      cardTitle: "\n\t2023 Q1\n\n",
      cardSubtitle:
        "\t- Public ICO Begins\n \t- LifeDeFied Testnet\n \t- Bug Bounty Programs\n \t- In House Security Audits \n \t- Allocation of 2nd Presale\n \t- BranchApp Solutions Begin",
    },
    {
      title: "2023 Q2",
      cardTitle: "\n\t2023 Q2\n\n",
      cardSubtitle:"\t- Public ICO Ends \n \t- Allocation of Public ICO \n \t- LifeDeFied Mainnet\n \t- Global DeFi Marketplace"
    },
  ];

  return (
    <Column backgroundColor="#fff" id='roadmap' paddingTop='0px' paddingBottom='70px'>
      <Text 
      fontSize={size.width > 800 ?"40px": "30px"}
      textAlign="center" maxWidth='100vw' width='100%' fontWeight="bold" color='rgba(0,0,0,1)' marginBottom='50px'> Roadmap (subject to change)</Text>
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
