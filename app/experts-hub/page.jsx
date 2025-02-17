import Faq1 from "@/components/faq/Faq1";
import Footer13 from "@/components/footers/Footer13";
import Footer15 from "@/components/footers/Footer15";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
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
  title: "Career || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function ExpertsHub() {
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt career-ban" style={{backgroundImage: "url(/images/Life at Zing/banner.jpg)" }}>
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Experts Hub</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                    <Link href="/experts-hub">Experts Hub</Link></li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>

          <div className="content-block">
          <WhyConsultUs  />
          </div>

          <div className="page-content bg-white">
          <MeetTheExperts/>
          </div>
        </div>
        <ExpertsCta/>

        {/* <Footer2 contactSection="true" /> */}
        <Footer13 />
      </div>
    </>
  );
}
