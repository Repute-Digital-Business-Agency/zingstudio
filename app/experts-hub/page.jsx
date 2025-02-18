import Faq1 from "@/components/faq/Faq1";
import Footer13 from "@/components/footers/Footer13";


import Header17 from "@/components/headers/Header17";
import Link from "next/link";
import React from "react";
import Cta from "@/components/homes/home-13/Cta";
import ProjectDetails from "@/components/portfolio/ProjectDetails";
import { allProjects } from "@/data/projects";
import WhyConsultUs from "@/components/service/WhyConsultUs";
import MeetTheExperts from "@/components/service/MeetTheExperts";
import ExpertsCta from "@/components/service/ExpertsCta";


export const metadata = {
  title: "Zing Studio - Experts Hub",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function ExpertsHub() {
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <div
          className="dlab-bnr-inr overlay-black-middle bg-pt career-ban" style={{backgroundImage: "url(/images/bg-header.jpg)" }}>
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Experts Hub</h1>
              {/* Breadcrumb row */}
              <div className="breadcrumb-row">
                
              </div>
              {/* Breadcrumb row END */}
            </div>
          </div>
        </div>

        <div className="content-block">
          <WhyConsultUs />
        </div>
        <div >
          <MeetTheExperts />
        </div>
        <ExpertsCta />

        {/* <Footer2 contactSection="true" /> */}
        <Footer13 />
      </div>
    </>
  );
}
