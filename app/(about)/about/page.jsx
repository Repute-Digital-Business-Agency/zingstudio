import About2 from "@/components/about/About2";
import Banner from "@/components/about/Banner";
import Progress from "@/components/about/Progress";
import Cta from "@/components/homes/home-13/Cta";
import Footer15 from "@/components/footers/Footer15";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import Header17 from "@/components/headers/Header17";
import Services from "@/components/homes/home-1/Services";
import Team from "@/components/homes/home-10/Team";
import Services1 from "@/components/homes/home-15/Services1";
import About from "@/components/homes/home-3/About";
import React from "react";
import Footer13 from "@/components/footers/Footer13";
import AboutCta from "@/components/service/AboutCta";

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
          <Banner />
          <About />
          {/* <About2 />
          <Progress /> */}
          {/* <Team /> */}
          <Services1 />
          {/* <Services /> */}
          <AboutCta />

        </div>
        {/* <Footer2 contactSection="false" /> */}
        <Footer13 />
      </div>
    </>
  );
}
