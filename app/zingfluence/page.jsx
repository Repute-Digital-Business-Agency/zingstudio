import React from "react";

import Header17 from "@/components/headers/Header17";
import Footer13 from "@/components/footers/Footer13";
import ZingFluenceBanner from "@/components/service/ZingfluenceBanner";
import Celebrity from "@/components/service/Celebrity";
import InfluencerMarketing from "@/components/service/incluencer-marketing-solution";
import About from "@/components/service/BestMarketingService";
import Facts from "@/components/service/LetsInfluence";
import MarketingAgency from "@/components/service/InfluenceMarketingAgency";
import BestInfluencer from "@/components/service/BestInfluencer";
import ProcessForInfluencer from "@/components/service/ProcessForInfluencer";
import ChooseZingFluencer from "@/components/service/ChooseZingfluencer";

export const metadata = {
  title: "Academy || Zing Studio",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  zingFluence">
        <Header17 />

        <ZingFluenceBanner/>

        <InfluencerMarketing/>

        <Celebrity/>
        <BestInfluencer/>

        <About/>

        <Facts/>
        <MarketingAgency/>
        <ProcessForInfluencer/>
        <ChooseZingFluencer/>
       
        {/* <Footer2 contactSection="true" /> */}
        <Footer13 />
      </div>
    </>
  );
}