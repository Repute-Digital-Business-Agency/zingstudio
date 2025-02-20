import ClientSlider from "@/components/common/ClientSlider";
import Link from "next/link";


import Team1 from "@/components/team/Team1";
import React from "react";

export const metadata = {
  title: "Team 1 || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Team</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  {/* <ul className="list-inline">
                    <li>
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li>Team</li>
                  </ul> */}
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>

          <div className="content-block">
            <Team1 />
            <div className="section-full content-inner bg-gray">
              <div className="container overflow-hidden">
                <ClientSlider />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
