
import Service from "@/components/homes/home-2/Service";
import Hero from "@/components/homes/home-20/Hero";
import React from "react";

export const metadata = {
  title: "Home 20 || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        
        <div className="page-content bg-white">
          <Hero />

          <Service />
        </div>
       
      </div>
    </>
  );
}
