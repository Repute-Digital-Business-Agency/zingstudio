
import Link from "next/link";

import ProjectDetails from "@/components/portfolio/ProjectDetails";
import React from "react";
import { allProjects } from "@/data/projects";
import WebDesignDetails from "@/components/service/WebDesignDetails";
import AcademyContent from "@/components/academy/AcademyContent";
import Header17 from "@/components/headers/Header17";
import Testimonials from "@/components/homes/home-6/Testimonials";
import Footer13 from "@/components/footers/Footer13";
import Cta from "@/components/homes/home-13/Cta";
import Insights from "@/components/service/Insights";
import LiveProjects from "@/components/service/liveProjects";
import CourseModules from "@/components/service/CourseModules";
import BrandCaseStudy from "@/components/service/BrandCaseStudy";
import ZingAcademyCta from "@/components/service/ZingAcademyCta";
import ZingAcademyCourseHero from "@/components/service/zingAcademyCourseHero";
import ZingAcademyFaq from "@/components/service/ZingAcademyFaq";
import ResponsiveAcademyBanner from "@/components/service/ResponsiveAcademyBanner";
export const metadata = {
  title: "Academy || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {

  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
         {/* <ZingAcademyCourseHero/> */}
         <ResponsiveAcademyBanner/>
         <div
              className="section-full content-inner-2  wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
              style={{
                background:"#e21100"
              }}
              // style={{ backgroundImage: "url(/images/background/map-bg.png)" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center ">
                    <h2 className="title text-white">
                      Why Zing Academy ?
                    </h2>
                    <p className="text-white mb-0">
                     Gain a competitive edge with expert-led digital marketing training that combines real-world experience and hands-on learning. Unlock the skills to thrive in today’s fast-moving digital landscape and take your career to the next level.

                    </p>
                  </div>
                </div>
              </div>
            </div>
        <CourseModules/>
        <Insights/>
        {/* <LiveProjects/> */}
        {/* <div className="section-full content-inner  bg-white">
        <BrandCaseStudy/>
        </div> */}
        <div className="bg-white pt-5"  style={{paddingBottom:"50px"}}>
        <ZingAcademyFaq/>
        </div>
        
        <ZingAcademyCta/>
        
        <Footer13 />
      </div>
    </>
  );
}
