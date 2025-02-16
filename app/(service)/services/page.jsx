import Footer13 from "@/components/footers/Footer13";
import Footer15 from "@/components/footers/Footer15";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import Header17 from "@/components/headers/Header17";
import Service from "@/components/homes/home-2/Service";

import Banner2 from "@/components/service/Banner2";
import Cta from "@/components/service/Cta";

import React from "react";

export const metadata = {
  title: "Services || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <div className="page-content bg-white">
          <Banner2 />
          <div className="content-block">
            <Cta />
            <Service />
          </div>
        </div>
        {/* <Footer2 contactSection="true" /> */}
        <Footer13 />
      </div>
    </>
  );
}
