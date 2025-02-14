import CommingSoon from "@/components/otherPages/CommingSoon";
import React from "react";

export const metadata = {
  title:
    "Comming Soon 2 || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <div className="comming-soon">
      <div className="page-wraper">
        <CommingSoon />
      </div>{" "}
    </div>
  );
}
