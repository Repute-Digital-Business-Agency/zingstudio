

import Footer13 from "@/components/footers/Footer13";
import Header17 from "@/components/headers/Header17";
import PrivacyPolicy from "@/components/otherPages/PrivacyPolicy";
import React from "react";

export const metadata = {
  title:
    "Privacy Policy || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
      <Header17 />
        <div className="page-content bg-white">
          <PrivacyPolicy />
        </div>
        <Footer13 />
      </div>
    </>
  );
}
