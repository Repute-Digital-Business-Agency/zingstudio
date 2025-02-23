
import Link from "next/link";

import ProjectDetails from "@/components/portfolio/ProjectDetails";
import React from "react";
import { allProjects } from "@/data/projects";
import WebDesignDetails from "@/components/service/WebDesignDetails";
import SeoDetails from "@/components/service/SeoDetails";
import SmmDetails from "@/components/service/SmmDetails";
import PpcDetails from "@/components/service/PpcDetails";
import Header17 from "@/components/headers/Header17";
import Footer13 from "@/components/footers/Footer13";

export const metadata = {
  title: "PPC || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{
              backgroundImage: "url(/images/services/pay-per-click/banner.jpg)",
            }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Pay Per Click</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  {/* <ul className="list-inline">
                    <li>
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href={`/services`}>service</Link>
                    </li>
                    <li>PPC</li>
                  </ul> */}
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>

          <div className="content-block">
            <PpcDetails />
          </div>
        </div>
        
        <Footer13 />
      </div>
    </>
  );
}
