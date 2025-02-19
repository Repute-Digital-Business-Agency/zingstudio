import Contact2 from "@/components/contact/Contact2";
import Footer13 from "@/components/footers/Footer13";


import Header17 from "@/components/headers/Header17";
import React from "react";

export const metadata = {
  title: "Contact || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper contact-page">
        <Header17 />
        <Contact2 />
        {/* <Footer2 contactSection="false"/> */}
        <Footer13 />
      </div>
    </>
  );
}
