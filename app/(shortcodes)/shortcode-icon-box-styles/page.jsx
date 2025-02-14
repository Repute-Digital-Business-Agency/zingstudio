import Footer15 from "@/components/footers/Footer15";
import Header1 from "@/components/headers/Header1";
import IconStyles from "@/components/shortcodes/IconStyles";
import React from "react";

export const metadata = {
  title:
    "Shortcode Icon Box Styles || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <IconStyles />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
