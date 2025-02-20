
import About from "@/components/homes/home-11/About";
import Blogs from "@/components/homes/home-11/Blogs";
import Cta from "@/components/homes/home-11/Cta";
import Cta2 from "@/components/homes/home-11/Cta2";
import Hero from "@/components/homes/home-11/Hero";
import ProjectGallery from "@/components/homes/home-11/ProjectGallery";
import Services from "@/components/homes/home-11/Services";
import Team from "@/components/homes/home-11/Team";
import Testimonials from "@/components/homes/home-11/Testimonials";
import React from "react";

export const metadata = {
  title: "Home 11 || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <div className="page-wraper roboto-condensed  ">
     
      <Hero />
      <div className="page-content bg-white">
        <div className="content-block">
          <Cta />
          <Services />
          <ProjectGallery />
          <About />
          <Cta2 />
          <Team />
          <Testimonials />
          <Blogs />
        </div>
      </div>
      
    </div>
  );
}
