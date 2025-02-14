import Contact2 from "@/components/contact/Contact2";
import Footer13 from "@/components/footers/Footer13";
import Footer15 from "@/components/footers/Footer15";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import Header17 from "@/components/headers/Header17";
import React from "react";

export const metadata = {
  title: "Contact 2 || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper contact-page">
        <Header17 />
        <div className="page-content ">
          <Contact2 />
        </div>
        {/* <Footer2 contactSection="false"/> */}
        <Footer13 />
      </div>
    </>
  );
}
