import Footer13 from "@/components/footers/Footer13";


import Header17 from "@/components/headers/Header17";

import Cta from "@/components/homes/home-13/Cta";
import Service from "@/components/homes/home-2/Service";

import Banner2 from "@/components/service/Banner2";
import ServiceDescription from "@/components/service/ServiceDescription";
import ServiceProgress from "@/components/service/ServiceProgress";


import React from "react";

export const metadata = {
  title: "Services || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper ">
        <Header17 />
        <div className="page-content bg-white pb-0">
          <Banner2 />
          <div className="content-block">
            <ServiceDescription />
            <Service />
            {/* <ServiceProgress/> */}
          </div>
        </div>

        <Cta/>
        
        <Footer13 />
      </div>
    </>
  );
}
