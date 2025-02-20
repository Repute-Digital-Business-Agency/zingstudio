
import Link from "next/link";

import ProjectDetails from "@/components/portfolio/ProjectDetails";
import React from "react";
import { allProjects } from "@/data/projects";
import WebDesignDetails from "@/components/service/WebDesignDetails";
import SeoDetails from "@/components/service/SeoDetails";
import Header17 from "@/components/headers/Header17";
import Footer13 from "@/components/footers/Footer13";

export const metadata = {
  title: "SEO || Zing Studio",
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
              backgroundImage:
                "url(/images/services/search-engine-optimization/banner.jpg)",
            }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Search Engine Optimization</h1>
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
                    <li>SEO</li>
                  </ul> */}
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>

          <div className="content-block">
            <SeoDetails />
          </div>
        </div>
        
        <Footer13 />
      </div>
    </>
  );
}
