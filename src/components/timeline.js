import { Column, Text, useWindowSize } from "./ui/utils";
import { Chrono } from "react-chrono";

export default function Timeline() {
  const size = useWindowSize();
  const items = [
    {
      title: "2022 Q2",
      cardTitle: "\n\t2022 Q2\n\n",
    //   url: "http://www.history.com",
      cardSubtitle:
        "\t- WhitepaperV1\n \t- Startup with Chainlink\n \t- Ignite Accelerator Program\n \t- Team / Advisor Onboarding\n \t- Secured Additional Seed Funding ",
      // cardDetailedText:
      //   "Men of the British Expeditionary Force (BEF) wade out to..",
    //   media: {
    //     type: "IMAGE",
    //     source: {
    //       url: "http://someurl/image.jpg",
    //     },
    //   },
    },
    {
      title: "2022 Q3",
      cardTitle: "\n\t2022 Q3\n\n",
      cardSubtitle:
        "\t- Legal Structuring\n \t- Grant Acceptances \n \t- Community Growth\n \t- Investor Whitelisting\n \t- Strategic Partnerships\n \t- C2FCoin Early Beta Testing ",
    },
    {
      title: "2022 Q4",
      cardTitle: "\n\t2022 Q4\n\n",
      cardSubtitle:
        "\t- C2FToken Early Beta Testing\n \t- Community events and meetups \n \t- C2FApplication Early Beta Testing\n \t- Whitelisting events and giveaways\n \t- ICO Fundraiser / Presale  ",
    },
    {
      title: "2023 Q1",
      cardTitle: "\n\t2023 Q1\n\n",
      cardSubtitle:
        "\t- Public ICO Launch 🚀",
    },
  ];

  return (
    <Column backgroundColor="#08183A" id='roadmap' paddingTop='0px' paddingBottom='70px'>
      <Text 
      fontSize={size.width > 800 ?"40px": "30px"}
      textAlign="center" maxWidth='100vw' width='100%' fontWeight="bold" color='rgba(255,255,255,0.8)' marginBottom='50px'>Roadmap</Text>
      <div style={{whiteSpace: "pre-wrap" }}>
      <Chrono
        items={items}
        theme={{
          // primary: "rgba(0,0,0,0.7)",
          primary: "rgba(255,255,255,0.7)",
          // secondary: "rgba(255,255,255,0.7)",
          secondary: "rgba(0,0,0,0.7)",
          // cardBgColor: "rgba(255,255,255,0.9)",
          cardBgColor: "rgba(0,0,0,0.2)",
          // cardForeColor: "rgba(0,0,0,0.8)",
          cardForeColor: "rgba(255,255,255,0.8)",
          titleColor: "rgba(255,255,255,1)",
          textColor: "rgba(255,255,255,0.5)",
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
