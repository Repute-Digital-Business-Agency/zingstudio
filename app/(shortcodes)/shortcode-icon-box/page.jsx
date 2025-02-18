
import Header1 from "@/components/headers/Header1";
import IconBox from "@/components/shortcodes/IconBox";
import React from "react";

export const metadata = {
  title:
    "Shortcode Icon Box || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <IconBox />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
