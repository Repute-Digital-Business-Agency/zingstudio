import Header2 from "@/components/headers/Header2";
import Hero from "@/components/homes/home-2/Hero";
import Service from "@/components/homes/home-2/Service";
import React from "react";

export const metadata = {
  title: "Home 2 || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header2 />
        <div className="page-content bg-white">
          <Hero />

          <Service />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
