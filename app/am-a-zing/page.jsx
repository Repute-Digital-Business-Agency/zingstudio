
import Link from "next/link";

import ProjectDetails from "@/components/portfolio/ProjectDetails";
import React from "react";
import { allProjects } from "@/data/projects";
import WebDesignDetails from "@/components/service/WebDesignDetails";
import AcademyContent from "@/components/academy/AcademyContent";
import Header17 from "@/components/headers/Header17";
import Testimonials from "@/components/homes/home-6/Testimonials";
import Footer13 from "@/components/footers/Footer13";
import AmazingContent from "@/components/am-a-zing/Am-a-zingContent";
import Cta from "@/components/homes/home-13/Cta";

export const metadata = {
  title: "Am-A-Zing || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <div
          className="dlab-bnr-inr overlay-black-middle bg-pt"
          style={{ backgroundImage: "url(/images/bg-header.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Am-A-Zing</h1>
              {/* Breadcrumb row */}
              <div className="breadcrumb-row">
                
              </div>
              {/* Breadcrumb row END */}
            </div>
          </div>
        </div>

        <div className="content-block">
          <AmazingContent />
        </div>



        <Cta />
        {/* <Footer2 contactSection="true" /> */}
        <Footer13 />
      </div>
    </>
  );
}
