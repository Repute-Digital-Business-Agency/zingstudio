

import TitleSeparator from "@/components/shortcodes/TitleSeparator";
import React from "react";

export const metadata = {
  title:
    "Shortcode Title Seperator || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <TitleSeparator />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
