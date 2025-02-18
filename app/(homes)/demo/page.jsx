"use client"

import ClientSlider from "@/components/common/ClientSlider";
import Header17 from "@/components/headers/Header17";
import Cta from "@/components/homes/home-13/Cta";
import Testimonials from "@/components/homes/home-10/Testimonials";
import Portfolio from "@/components/homes/home-12/Portfolio";
import Blog1 from "@/components/homes/home-15/Blog1";
import Hero from "@/components/homes/home-7/Hero";
import Service from "@/components/homes/home-2/Service";
import Projects2 from "@/components/homes/home-5/Projects2";
import HomeServiceAnimation from "@/components/service/HomeServiceAnimation";
import HomeService from "@/components/service/HomeServices";
import React from "react";
import Testimonial from "@/components/homes/home-5/Testimonials";
import Footer13 from "@/components/footers/Footer13";
import Am_a_Zing from "@/components/service/Am-a-zing";
import Academy from "@/components/service/Academy";
import Am_a_ZingPar from "@/components/service/Amazingparallax";
import { Parallax } from "@react-spring/parallax";
import Am_a_ZingImg from "@/components/service/AmazingImg";

// export const metadata = {
//   title: "Home || Zing Studio",
//   description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
// };
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <div className="page-content bg-white">
          <Hero />
          {/* <div className="content-block p-t50 p-b50 bg-gray">
            <ClientSlider />
          </div> */}

          <div className="content-block home-service-section bg-gray">
            <HomeServiceAnimation />
          </div>

          <Projects2 />

          {/* <div className="content-block p-t20 p-b80 home-our-vision-section">
            <Testimonials />
          </div> */}


        {/* <div style={{marginTop:"100px", border:"1px solid redd", position:"relative", height:"600px"}}>
        <Parallax pages={1.5} style={{top:"0", left:"0"}} className="section-full box-about-list Am_a_Zing bg-gray parallax"> */}


          {/* <Am_a_Zing/> */}
          {/* <Am_a_ZingPar/> */}
          <Am_a_ZingImg/>


          {/* </Parallax>
          </div> */}
          
          <Academy/>

          {/* <Testimonial /> */}
        </div>
        <Cta />
        {/* <Footer2 contactSection="false" /> */}
        <Footer13 />
      </div>
    </>
  );
}
