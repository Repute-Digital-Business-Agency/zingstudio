import Footer15 from "@/components/footers/Footer15";
import Link from "next/link";
import Header1 from "@/components/headers/Header1";
import ProjectDetails from "@/components/portfolio/ProjectDetails";
import React from "react";
import { allProjects } from "@/data/projects";
import WebDesignDetails from "@/components/service/WebDesignDetails";
import AcademyContent from "@/components/academy/AcademyContent";
import Footer2 from "@/components/footers/Footer2";
import Header17 from "@/components/headers/Header17";
import Testimonials from "@/components/homes/home-6/Testimonials";
import Footer13 from "@/components/footers/Footer13";
import Cta from "@/components/homes/home-13/Cta";
import Insights from "@/components/service/Insights";
import LiveProjects from "@/components/service/liveProjects";
import ZingAcademyHero from "@/components/service/zingAcademyCourseHero";
import CourseModules from "@/components/service/CourseModules";
import BrandCaseStudy from "@/components/service/BrandCaseStudy";
import ZingAcademyCta from "@/components/service/ZingAcademyCta";
import StudentsJourney from "@/components/service/StudentsJourney";
import ZingAcademy from "@/components/service/ZingAcademy";
import CourseDetails from "@/components/service/CourseDetails";
import Projects2 from "@/components/homes/home-5/Projects2";
import GuestLectures from "@/components/service/GuestLectures";
import WhosThisCourseFor from "@/components/service/Who'sThisCourseFor";
import CourseLearning from "@/components/service/CourseLearning";
import ToolsLearning from "@/components/service/ToolsLearning";
import SucessStories from "@/components/service/SucessStories";
import CourseProgramFaq from "@/components/service/CourseProgramFaq";
import StudentsJourney2 from "@/components/service/StudentsJourney2";
import StudentsJourney3 from "@/components/service/StudentsJourney3";
export const metadata = {
  title: "Academy || Zing Studio",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {

  const CourseTitle= "Zing Launchpad – Student Internship Program"
  const CourseDuration = "10 Days"

  const courseModule = [
    {
      title:"Module 1: Digital Marketing Foundations",
      list:[
        "Understanding Digital Marketing & Trends",
        "Marketing Funnels & Customer Journey",
        "Brand Positioning & Market Research",
        "Competitor Analysis & Strategy"
      ],
      imgSrc:"/images/services/web-design.jpg"
    },
    {
      title:"Module 2: SEO Mastery",
      list:[
        "Keyword Research & Competitive Analysis",
        "On-Page & Off-Page SEO",
        "Technical SEO (Schema, Site Speed, Mobile Optimization)",
        "Local SEO & E-commerce SEO"
      ],
      imgSrc:"/images/services/web-design.jpg"
    },
    {
      title:"Module 3: Social Media & Community Building",
      list:[
        "Instagram & Facebook Growth Strategies",
        "LinkedIn & Twitter for Personal Branding",
        "YouTube Marketing & Video SEO",
        "Social Media Monetization Techniques"
      ],
      imgSrc:"/images/services/web-design.jpg"
    },    {
      title:"Module 4: Paid Advertising & Google Ads",
      list:[
        "Google Ads (Search, Display, Shopping)",
        "Facebook & Instagram Ads",
        "LinkedIn & Twitter Ads",
        "A/B Testing & Performance Analytics",
        "Retargeting & Budget Optimization"
      ],
      imgSrc:"/images/services/web-design.jpg"
    },
    {
      title:"Module 5: Content Marketing & Copywriting",
      list:[
        "Crafting High-Converting Sales Copy",
        "Blogging & SEO Writing",
        "Storytelling & Brand Voice",
        "Video Content & Email Marketing"
      ],
      imgSrc:"/images/services/web-design.jpg"
    },
    {
      title:"Module 6: AI & Automation in Marketing",
      list:[
        "AI-Powered Tools for Marketing",
        "Chatbots & Email Automation",
        "Personalization & Predictive Analytics",
       
      ],
      imgSrc:"/images/services/web-design.jpg"
    },
    {
      title:"Internship",
      list:[
        "Work on Live Projects",
        "Develop Digital Strategies for Real Businesses",
        "Create & Optimize Ad Campaigns",
        "SEO & Social Media Content Execution"
      ],
      imgSrc:"/images/services/web-design.jpg"
    }
  ]
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
         <ZingAcademyHero/>
         <div
              className="section-full content-inner-2 bg-primary wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
              // style={{ backgroundImage: "url(/images/background/map-bg.png)" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center service-info">
                    <h2 className="title text-white">
                      Why Zing Academy ?
                    </h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
 
        <div >
          <CourseDetails CourseTitle={CourseTitle} CourseDuration={CourseDuration} courseModule={courseModule}/>
          </div>
        <StudentsJourney/>
        
        {/* <div  
        style={{padding:"100px 0 50px 0"}}
        >
        <StudentsJourney2/>

        <StudentsJourney3/>

        </div> */}
      
        
        {/* <div className="section-full content-inner mb-4"> */}
        {/* <BrandCaseStudy/> */}
        {/* </div> */}

       
        <CourseLearning/>
        <WhosThisCourseFor/>
       

      
        <LiveProjects/>
      
    
      <GuestLectures/>
      
      
      <ToolsLearning/>
      
      
      <SucessStories/>
    
      <div  style={{marginBottom:"100px", marginTop:"50px"}}>
        <CourseProgramFaq/>
        </div>

        <ZingAcademyCta/>
        {/* <Footer2 contactSection="true" /> */}
        <Footer13 />
      </div>
    </>
  );
}
