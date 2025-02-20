import Testimonials from "@/components/common/Testimonials";
import Footer13 from "@/components/footers/Footer13";

import Blogs from "@/components/homes/home-13/Blogs";
import Cta from "@/components/homes/home-13/Cta";
import Fact from "@/components/homes/home-13/Fact";
import Hero from "@/components/homes/home-13/Hero";
import ProjectGallery from "@/components/homes/home-13/ProjectGallery";
import Services from "@/components/homes/home-13/Services";
import Services2 from "@/components/homes/home-13/Services2";
import Team from "@/components/homes/home-13/Team";

export const metadata = {
  title: "Home 13 || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <div className="page-wraper  ">

      <Hero />
      <div className="page-content bg-white">
        <div className="content-block">
          <Services />
          <Services2 />
          <ProjectGallery />
          <Team />
          <Fact />
          <Testimonials />
          <Blogs />
          <Cta />
        </div>
      </div>
      <Footer13 />
    </div>
  );
}
