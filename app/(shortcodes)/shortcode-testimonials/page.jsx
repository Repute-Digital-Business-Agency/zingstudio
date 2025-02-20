

import Testimonials from "@/components/shortcodes/Testimonials";
import React from "react";

export const metadata = {
  title:
    "Shortcode Testimonials || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        
        <div className="page-content bg-white">
          <Testimonials />
        </div>
        
      </div>
    </>
  );
}
