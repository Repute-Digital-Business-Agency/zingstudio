

import Hero from "@/components/homes/home-19/Hero";
import Blog from "@/components/homes/home-9/Blog";
import Cta from "@/components/homes/home-9/Cta";
import Projects from "@/components/homes/home-9/Projects";
import Service2 from "@/components/homes/home-9/Service2";
import Services from "@/components/homes/home-9/Services";
import Team from "@/components/homes/home-9/Team";
import Testimonials from "@/components/homes/home-9/Testimonials";
import React from "react";

export const metadata = {
  title: "Home 19 || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-wraper ">
      
        <div className="page-content bg-white">
          <Hero />
          <div className="content-block">
            <Services />
            <Projects />
            <Service2 />
            <Testimonials />
            <Team />
            <Cta />
            <Blog />
          </div>
        </div>

      </div>
    </>
  );
}
