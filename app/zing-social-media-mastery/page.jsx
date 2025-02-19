
import Link from "next/link";

import ProjectDetails from "@/components/portfolio/ProjectDetails";
import React from "react";
import { allProjects } from "@/data/projects";
import WebDesignDetails from "@/components/service/WebDesignDetails";
import AcademyContent from "@/components/academy/AcademyContent";
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
import StudentJourneynew from "@/components/service/StudentJourneynew";
import ZingAcademyProgramHero from "@/components/service/ZingAcademyProgramHero";
export const metadata = {
  title: "Zing Social Media Mastery || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  const CourseTitle= "Zing Social Media Mastery"
  const CourseDuration = "4 Weeks"

  const courseModule = [
    {
      title:"Module 1: Social Media Strategy",
      list:[
        "Understanding Social Media Algorithms",
        "Audience Targeting & Engagement",
       
      ],
      imgSrc:"/images/services/web-design.jpg"
    },
    {
      title:"Module 2: Instagram & Reels Mastery",
      list:[
        "Creating Viral Reels & Stories",
        "Growth Hacking & Monetization",
       
      ],
      imgSrc:"/images/services/web-design.jpg"
    },
    {
      title:"Module 3: LinkedIn & Twitter Branding",
      list:[
        "Personal Branding Strategies",
        "Twitter Threads & LinkedIn Networking",
        
      ],
      imgSrc:"/images/services/web-design.jpg"
    },    {
      title:"Module 4: Facebook & YouTube Growth",
      list:[
        "YouTube SEO & Monetization",
        "Facebook Groups & Ads",
        
      ],
      imgSrc:"/images/services/web-design.jpg"
    },
    {
      title:"Module 5: Monetization Strategies",
      list:[
        "Affiliate Marketing & Sponsorships",
        "Brand Collaborations & Paid Partnerships",
      
      ],
      imgSrc:"/images/services/web-design.jpg"
    },
    
  ]

  const services10 =   [
    {
      id: 137,
      imgSrc: "/images/icon/car/icon-1.png",
      title: " Social Media Strategy <b> (Week 1) <b/>",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.3s",
      list:[
        "Understanding social media algorithms",
        "Growth hacking techniques for platforms",
      
      ]
    },
    {
      id: 138,
      imgSrc: "/images/icon/car/icon-2.png",
      title: "Instagram & LinkedIn Mastery <b> (Week 2) <b/>",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.6s",
      list:[
        "Creating viral content",
        "LinkedIn networking & branding",
        
       
      ]
    },
    {
      id: 139,
      imgSrc: "/images/icon/car/icon-3.png",
      title: "YouTube & Facebook Growth Q&A <b> (Week 3) <b/>" ,
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.9s",
      list:[
        "Monetization & platform-specific strategies",
     
      ]
    },
    {
      id: 140,
      imgSrc: "/images/icon/car/icon-4.png",
      title: "Monetization & Final Projects <b>(Week 4) <b/>",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.9s",
      list:[
        "Crafting collaborations & sponsorships",
        "Final presentations & certification", 
       
      ]
    },
    
  ]

  const courseLearningContent = {
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.",
    modules:"50 Sub Modules"
     }

     const courseLearning = [
      {
        id: 1,
        imgSrc: "/images/our-work/steelplant/pic10.jpg",
        title: "Digital Marketing Startegy",
        link:"zing-digital-marketing-mastery"
      },
      {
        id: 2,
        imgSrc: "/images/our-work/steelplant/pic9.jpg",
        title: "Content And Prompt Engineering",
        link:"zing-digital-marketing-mastery"
      },
      {
        id: 3,
        imgSrc: "/images/our-work/steelplant/pic8.jpg",
        title: "Google And Advance web Analytics",
        link:"zing-digital-marketing-mastery"
      },
      {
        id: 4,
        imgSrc: "/images/our-work/steelplant/pic7.jpg",
        title: "Social Media Marketing",
        link:"zing-digital-marketing-mastery"
      },
      {
        id: 5,
        imgSrc: "/images/our-work/steelplant/pic10.jpg",
        title: "Search Engine Optimization",
        link:"zing-digital-marketing-mastery"
      },
      {
        id: 6,
        imgSrc: "/images/our-work/steelplant/pic9.jpg",
        title: "Funnel Building Lead Gen",
        link:"zing-digital-marketing-mastery"
      },
      {
        id: 7,
        imgSrc: "/images/our-work/steelplant/pic8.jpg",
        title: "Facebook And Instagram Ads",
        link:"zing-digital-marketing-mastery"
      },
      {
        id: 8,
        imgSrc: "/images/our-work/steelplant/pic7.jpg",
        title: "Wix",
        link:"zing-digital-marketing-mastery"
      },
      {
          id: 9,
          imgSrc: "/images/our-work/steelplant/pic7.jpg",
          title: "Whatsapp Marketing",
          link:"zing-digital-marketing-mastery"
        },
        {
          id: 9,
          imgSrc: "/images/our-work/steelplant/pic7.jpg",
          title: "Web Technology",
          link:"zing-digital-marketing-mastery"
        },
        {
          id: 10,
          imgSrc: "/images/our-work/steelplant/pic7.jpg",
          title: "Projecs",
          link:"zing-digital-marketing-mastery"
        },
    ];

    const ToolsContent = {
      tool1Num:"40+",
      tool1Title :"Free Premium Digital Marketing Tools",
      tool1worth :"Worth Of 6 Lakhs",
      tool2Num:"20+",
      tool2Title :"Digital Marketing AI Tools",
      tool2worth :"Worth Of 6 Lakhs"
    }
    const Tools1 = [
        {
          animation: "fadeInLeft",
          delay: "0.3s",
          iconClass: "flaticon-factory",
        },
        {
         
          animation: "fadeInDown",
          delay: "0.3s",
          iconClass: "flaticon-worker",
        },
        {
          
          animation: "fadeInUp",
          delay: "0.3s",
          iconClass: "flaticon-settings",
        },
        {
         
          animation: "fadeInRight",
          delay: "0.3s",
          iconClass: "flaticon-conveyor",
        },
        {
            animation: "fadeInLeft",
            delay: "0.3s",
            iconClass: "flaticon-factory",
          },
          {
           
            animation: "fadeInDown",
            delay: "0.3s",
            iconClass: "flaticon-worker",
          },
          {
            
            animation: "fadeInUp",
            delay: "0.3s",
            iconClass: "flaticon-settings",
          },
          {
           
            animation: "fadeInRight",
            delay: "0.3s",
            iconClass: "flaticon-conveyor",
          },
          {
            animation: "fadeInLeft",
            delay: "0.3s",
            iconClass: "flaticon-factory",
          },
          {
           
            animation: "fadeInDown",
            delay: "0.3s",
            iconClass: "flaticon-worker",
          },
          {
            
            animation: "fadeInUp",
            delay: "0.3s",
            iconClass: "flaticon-settings",
          },
          {
           
            animation: "fadeInRight",
            delay: "0.3s",
            iconClass: "flaticon-conveyor",
          },
          {
            animation: "fadeInLeft",
            delay: "0.3s",
            iconClass: "flaticon-factory",
          },
          {
           
            animation: "fadeInDown",
            delay: "0.3s",
            iconClass: "flaticon-worker",
          },
          {
            
            animation: "fadeInUp",
            delay: "0.3s",
            iconClass: "flaticon-settings",
          },
          {
           
            animation: "fadeInRight",
            delay: "0.3s",
            iconClass: "flaticon-conveyor",
          },
          {
            animation: "fadeInLeft",
            delay: "0.3s",
            iconClass: "flaticon-factory",
          },
          {
           
            animation: "fadeInDown",
            delay: "0.3s",
            iconClass: "flaticon-worker",
          },
      ];

      const Tools2 = [
        {
          animation: "fadeInLeft",
          delay: "0.3s",
          iconClass: "flaticon-factory",
        },
        {
         
          animation: "fadeInDown",
          delay: "0.3s",
          iconClass: "flaticon-worker",
        },
        {
          
          animation: "fadeInUp",
          delay: "0.3s",
          iconClass: "flaticon-settings",
        },
        {
         
          animation: "fadeInRight",
          delay: "0.3s",
          iconClass: "flaticon-conveyor",
        },
        {
            animation: "fadeInLeft",
            delay: "0.3s",
            iconClass: "flaticon-factory",
          },
          {
           
            animation: "fadeInDown",
            delay: "0.3s",
            iconClass: "flaticon-worker",
          },
        ]

  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
         <ZingAcademyProgramHero/>
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
                    Gain a competitive edge with expert-led digital marketing training that combines real-world experience and hands-on learning. Unlock the skills to thrive in today’s fast-moving digital landscape and take your career to the next level.
                    </p>
                  </div>
                </div>
              </div>
            </div>
 
        <div >
        <CourseDetails CourseTitle={CourseTitle} CourseDuration={CourseDuration} courseModule={courseModule}/>
          </div>
        {/* <StudentsJourney/> */}
        <StudentJourneynew services10={services10}/>
        
        {/* <div  
        style={{padding:"100px 0 50px 0"}}
        >
        <StudentsJourney2/>

        <StudentsJourney3/>

        </div> */}
      
        
        {/* <div className="section-full content-inner mb-4"> */}
        {/* <BrandCaseStudy/> */}
        {/* </div> */}

       
        <CourseLearning courseLearningContent={courseLearningContent} courseLearning={courseLearning}/>
        <WhosThisCourseFor/>
       

      
        <LiveProjects/>
      
    
      <GuestLectures/>
      
      
      <ToolsLearning ToolsContent={ToolsContent} Tools1={Tools1} Tools2={Tools2}/>
      
      
      <SucessStories/>
    
      <div  className="bg-white"  style={{paddingBottom:"50px", paddingTop:"50px"}}>
        <CourseProgramFaq/>
        </div>

        <ZingAcademyCta/>
        {/* <Footer2 contactSection="true" /> */}
        <Footer13 />
      </div>
    </>
  );
}
