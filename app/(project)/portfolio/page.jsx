
import Link from "next/link";


import Portfolio2 from "@/components/portfolio/Portfolio2";
import React from "react";
import Header17 from "@/components/headers/Header17";
import Footer13 from "@/components/footers/Footer13";
import Cta from "@/components/homes/home-13/Cta";
import Portfolio4 from "@/components/portfolio/Portfolio4";


export const metadata = {
  title:
    "Zing Studio - Portfolio",
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
              <h1 className="text-white">Portfolio</h1>
              {/* Breadcrumb row */}
              <div className="breadcrumb-row">
                {/* <ul className="list-inline">
                  <li>
                    <Link href={`/`}>Home</Link>
                  </li>
                  <li>
                    <Link href={`/portfolio`}>Portfolio</Link></li>
                </ul> */}
              </div>
              {/* Breadcrumb row END */}
            </div>
          </div>
        </div>

        <div className="content-block">
          {/* <Portfolio2 /> */}
          <Portfolio4/>

        </div>

        <Cta />
        <Footer13 />
      </div>
    </>
  );
}
