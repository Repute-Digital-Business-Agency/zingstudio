import Contact4 from "@/components/contact/Contact4";

import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title: "Contact 4 || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Contact4 />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
