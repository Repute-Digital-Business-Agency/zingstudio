

import Accordions from "@/components/shortcodes/Accordions";
import React from "react";

export const metadata = {
  title:
    "Shortcode Accordions || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        
        <div className="page-content bg-white">
          <Accordions />
        </div>
        
      </div>
    </>
  );
}
