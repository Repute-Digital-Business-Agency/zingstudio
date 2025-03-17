import ClientSlider from "@/components/common/ClientSlider";
import Header17 from "@/components/headers/Header17";
import Cta from "@/components/homes/home-13/Cta";
import Testimonials from "@/components/homes/home-10/Testimonials";
import Portfolio from "@/components/homes/home-12/Portfolio";
import Blog1 from "@/components/homes/home-15/Blog1";
import Hero from "@/components/homes/home-7/Hero";
import Service from "@/components/homes/home-2/Service";
import Projects2 from "@/components/homes/home-5/Projects2";
import HomeServiceAnimation from "@/components/service/HomeServiceAnimation";
// import HomeService from "@/components/service/HomeServices";
import React from "react";
import Testimonial from "@/components/homes/home-5/Testimonials";
import Footer13 from "@/components/footers/Footer13";
import Am_a_Zing from "@/components/service/Am-a-zing";
import Academy from "@/components/service/Academy";
import Am_a_ZingPar from "@/components/service/Amazingparallax";
import HomeAbout from "@/components/service/HomeAbout";
import ZingAcademy from "@/components/service/ZingAcademy";
import CourseModulesHome from "@/components/service/CourseModulesHome";
import HomeAmazing from "@/components/service/HomeAmazing";
import Home from "@/app/page";
import HomeHero from "@/components/service/HomeHero";
import HomeService from "@/components/service/HomeService";
import HomeCta from "@/components/service/HomeCta";
import DemoHero from "@/components/homes/home-7/HomeMobileBanner";
import ResponsiveHomeBanner from "@/components/service/ResponsiveHomeBanner";
import HomeServiceStatic from "@/components/service/HomeServiceStatic";
// import HomeService from "@/components/service/HomeService"


export const metadata = {
  title: "Home || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function Home1() {
 
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <div className="page-content bg-white pb-0" >
          {/* <Hero/> */}
        <ResponsiveHomeBanner/>



          {/* <div className="content-block p-t50 p-b50 bg-gray">
            <ClientSlider />
          </div> */}

          <HomeAbout />
         


          <HomeHero />


          {/* <Projects2 /> */}
          {/* <div className="content-block home-service-section bg-gray"> */}
          {/* <HomeServiceAnimation /> */}
          {/* <HomeService /> */}
          {/* </div> */}

          <HomeServiceStatic/>
       



          {/* <div className="content-block p-t20 p-b80 home-our-vision-section">
            <Testimonials />
          </div> */}

          <CourseModulesHome />

          <Am_a_Zing />
          {/* <HomeAmazing/> */}


          {/* normal  academy section component */}
          {/* <Academy/> */}
          {/* normal  academy section component */}


          {/* scroll effect academy section component */}

          {/* <div >
          <ZingAcademy/>
          </div> */}

          {/* scroll effect academy section component */}


          {/* ceo speaks */}
          {/* <Testimonial /> */}
        </div>
        {/* <div className="container">
        <div className="studio-bg" style={{backgroundImage: "url(/images/element-6.png)"}}></div>
        </div> */}


        <HomeCta />
        
        <Footer13 />
      </div>
    </>
  );
}
