import Footer15 from "@/components/footers/Footer15";
import Header1 from "@/components/headers/Header1";
import AlertBox from "@/components/shortcodes/AlertBox";
import React from "react";

export const metadata = {
  title:
    "Shortcode Alert Box || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <AlertBox />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
