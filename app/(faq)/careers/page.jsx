import Faq1 from "@/components/faq/Faq1";
import Footer13 from "@/components/footers/Footer13";


import Header17 from "@/components/headers/Header17";
import Link from "next/link";
import React from "react";
import Cta from "@/components/homes/home-13/Cta";
import CareerForm from "@/components/service/CareerForm";


export const metadata = {
  title: "Career || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper careerss ">
        <Header17 />

        <div
          className="dlab-bnr-inr overlay-black-middle bg-pt career-ban" style={{ backgroundImage: "url(/images/Life at Zing/banner.jpg)" }}>
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Life at Zing</h1>
              {/* Breadcrumb row */}
              <div className="breadcrumb-row">
                {/* <ul className="list-inline">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/careers">Life at Zing</Link></li>
                </ul> */}
              </div>
              {/* Breadcrumb row END */}
            </div>
          </div>
        </div>

        {/* <div className="content-block"> */}
          <Faq1 />
        {/* </div> */}

      
        {/* <Cta /> */}
        
        <Footer13 />
      </div>
    </>
  );
}
