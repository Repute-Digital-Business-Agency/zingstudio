import About2 from "@/components/about/About2";
import Banner from "@/components/about/Banner";
import Progress from "@/components/about/Progress";
import Cta from "@/components/homes/home-13/Cta";

import Header17 from "@/components/headers/Header17";
import Services from "@/components/homes/home-1/Services";
import Team from "@/components/homes/home-10/Team";
import Services1 from "@/components/homes/home-15/Services1";
import About from "@/components/homes/home-3/About";
import React from "react";
import Footer13 from "@/components/footers/Footer13";
import AboutCta from "@/components/service/AboutCta";
import WhatIsZing from "@/components/service/WhatIsZing";
import WhyMe from "@/components/service/WhyMe";
import NewBanner from "@/components/about/NewBanner";
import DefineMe from "@/components/service/DefineMe";

export const metadata = {
  title: "About || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <div className="page-content bg-white">
        
          <NewBanner/>
          
          <WhatIsZing/>

          <WhyMe/>

          <DefineMe/>
         
          {/* <AboutCta /> */}

        </div>
        
        <Footer13 />
      </div>
    </>
  );
}
