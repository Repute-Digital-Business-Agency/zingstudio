import About from "@/components/about/About";
import Banner from "@/components/about/Banner";
import Facts from "@/components/common/Facts";
import Pricing from "@/components/about/Pricing";
import Testimonials from "@/components/common/Testimonials2";

import Team from "@/components/homes/home-1/Team";
import React from "react";

export const metadata = {
  title: "About 1 || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        
        <div className="page-content bg-white">
          <Banner />
          <About />
          <Facts />
          <Team />
          <Pricing />
          <Testimonials />
        </div>
        
      </div>
    </>
  );
}
