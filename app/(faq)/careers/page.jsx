import Faq1 from "@/components/faq/Faq1";
import Footer15 from "@/components/footers/Footer15";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import Header17 from "@/components/headers/Header17";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Career || Zing Studio",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr3.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Careers</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>Careers</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>

          <div className="content-block">
            <Faq1 />
          </div>
        </div>
        <Footer2 />
      </div>
    </>
  );
}