

import Pagination from "@/components/shortcodes/Pagination";
import React from "react";

export const metadata = {
  title:
    "Shortcode Paginations || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Pagination />
        </div>
        <Footer15 />
      </div>
    </>
  );
}
