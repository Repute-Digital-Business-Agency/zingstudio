
import Header1 from "@/components/headers/Header1";
import Buttons from "@/components/shortcodes/Buttons";
import React from "react";

export const metadata = {
  title:
    "Shortcode Buttons || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Buttons />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
