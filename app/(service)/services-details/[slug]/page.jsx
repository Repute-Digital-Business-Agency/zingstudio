

import Banner3 from "@/components/service/Banner3";
import ServiceDetails from "@/components/service/ServiceDetails";
import { allServices } from "@/data/services";

import React from "react";

export const metadata = {
  title:
    "Services Details || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page({ params }) {
  const slug = params.slug.split("%20").join(" ");
  const serviceItem =
    allServices.filter((elm) => elm.title == slug)[0] || allServices[0];
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          <Banner3 />
          <div className="content-block">
            <ServiceDetails serviceItem={serviceItem} />
          </div>
        </div>
        <Footer15 />
      </div>
    </>
  );
}
