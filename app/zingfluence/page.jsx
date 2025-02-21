import React from "react";

import Header17 from "@/components/headers/Header17";
import Footer13 from "@/components/footers/Footer13";
import ZingFluenceBanner from "@/components/service/ZingFluenceBanner";
import ZingfluenceBanner from "@/components/service/ZingfluenceBanner";
import Celebrity from "@/components/service/Celebrity";
import InfluencerMarketing from "@/components/service/incluencer-marketing-solution";
import About from "@/components/service/BestMarketingService";
import Facts from "@/components/service/LetsInfluence";
import MarketingAgency from "@/components/service/InfluenceMarketingAgency";
import BestInfluencer from "@/components/service/BestInfluencer";
import ProcessForInfluencer from "@/components/service/ProcessForInfluencer";
import ChooseZingFluencer from "@/components/service/ChooseZingfluencer";
import Cta from "@/components/homes/home-13/Cta";
import ZingFluenceCta from "@/components/service/ZingFluenceCta";

export const metadata = {
  title: "Zing Studio - Zingfluence",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  zingFluence">
        <Header17 />

        {/* <ZingFluenceBanner/> */}
        <ZingFluenceBanner/>

        
        <MarketingAgency/>
      
        <ChooseZingFluencer/>

        {/* ----------- */}

        {/* <InfluencerMarketing/>

        <Celebrity/>
        <BestInfluencer/>

        <About/>

        <Facts/>
          <ProcessForInfluencer/> */}
        <ZingFluenceCta />
        
        <Footer13 />
      </div>
    </>
  );
}
