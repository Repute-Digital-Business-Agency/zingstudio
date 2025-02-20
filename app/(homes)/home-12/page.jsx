
import About from "@/components/homes/home-12/About";
import Blogs from "@/components/homes/home-12/Blogs";
import Hero from "@/components/homes/home-12/Hero";
import Portfolio from "@/components/homes/home-12/Portfolio";
import Servies from "@/components/homes/home-12/Servies";
import Team from "@/components/homes/home-12/Team";
import Testimonials from "@/components/homes/home-12/Testimonials";
import React from "react";

export const metadata = {
  title: "Home 12 || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <div className="page-wraper roboto-condensed  ">
     
      <Hero />
      <div className="page-content bg-white">
        <div className="content-block">
          <About />
          <Servies />
          <Portfolio />
          <Team />
          <Blogs />
          <Testimonials />
        </div>
      </div>
     
    </div>
  );
}
