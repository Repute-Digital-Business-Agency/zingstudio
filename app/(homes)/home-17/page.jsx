

import About from "@/components/homes/home-1/About";
import Blogs from "@/components/homes/home-1/Blogs";
import Clients from "@/components/homes/home-1/Clients";
import Cta from "@/components/homes/home-1/Cta";
import Facts from "@/components/homes/home-1/Facts";
import Services from "@/components/homes/home-1/Services";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Socials from "@/components/homes/home-17/Socials";

export const metadata = {
  title: "Home 17 || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function Home() {
  return (
    <>
      <div className="page-wraper  ">
        
        <div className="page-content bg-white">
          <Socials />
          <div className="content-block">
            {/* <Hero /> */}
            <About />
            <Cta />
            <Services />
            <Facts />
            <Team />
            <Testimonials />
            <Blogs />
            <Clients />
          </div>
        </div>
        
      </div>
    </>
  );
}
