import CommingSoon1 from "@/components/otherPages/CommingSoon1";
import React from "react";

export const metadata = {
  title:
    "Comming Soon 1 || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <div className="comming-soon">
      <div className="page-wraper">
        <CommingSoon1 />
      </div>{" "}
    </div>
  );
}
