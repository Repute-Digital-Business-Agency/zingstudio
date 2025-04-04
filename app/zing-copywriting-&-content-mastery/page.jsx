
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
import AcademyCourseBanner from "@/components/service/AcademyCourseBanner";
import ZingCopyWritingTools from "@/components/service/ZingCopyWritingTools";
export const metadata = {
  title: "Zing Copywriting & Content Mastery || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  const CourseTitle= "Zing Copywriting & Content Mastery"
  const CourseDuration = "4 Weeks"

  const courseModule = [
    {
      title:"Module 1: Content Psychology & Storytelling",
      list:[
        "Understanding Consumer Behavior",
        "Brand Storytelling Techniques",
       
      ],
      imgSrc:"/images/Zing-Copywriting-&-Content-Mastery/content-psychology-storytelling.jpg",
      bgColor:"#e9e9e9"
    },
    {
      title:"Module 2: Blogging & SEO Writing",
      list:[
        "Writing High-Performing Blog Content",
        "SEO Copywriting Best Practices",
       
      ],
     imgSrc:"/images/Zing-Copywriting-&-Content-Mastery/blogging-seo-writing.jpg",
     bgColor:"#fff"
    },
    {
      title:"Module 3: Video & Social Media Content",
      list:[
        "Writing Video Scripts & Social Captions",
        "Engaging LinkedIn & Twitter Content",
        
      ],
      imgSrc:"/images/Zing-Copywriting-&-Content-Mastery/video-social-media-content.jpg",
      bgColor:"#d2dbf6"
    },
    {
      title:"Module 4: Email & Sales Copywriting",
      list:[
        "High-Converting Email Sequences",
        "Persuasive Sales Copy & Landing Pages",
       
      ],
     imgSrc:"/images/Zing-Copywriting-&-Content-Mastery/email-sales-copywriting.jpg",
     bgColor:"#e9e9e9"
    },
  
  ]

  const services10 =   [
    {
      id: 137,
      imgSrc: "/images/icon/car/icon-1.png",
      title: "Copywriting Foundations <b style='font-size: 18px; color: #1a43bf; font-weight:500'> (Week 1) </b>",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.3s",
      list:[
        "Persuasive writing basics",
        "Content marketing trends",
        "Overview of the course structure, expectations, and outcomes",
        "Access to LMS (Learning Management System) and student portal"
      ]
    },
    {
      id: 138,
      imgSrc: "/images/icon/car/icon-2.png",
      title: "Storytelling & Branding <b style='font-size: 18px; color: #1a43bf; font-weight:500'> (Week 2) </b>",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.6s",
      list:[
        "Creating a compelling brand voice",
        "Crafting narratives for audience engagement",
       
       
      ]
    },
    {
      id: 139,
      imgSrc: "/images/icon/car/icon-3.png",
      title: " SEO Writing & Blogging <b style='font-size: 18px; color: #1a43bf; font-weight:500'> (Week 3) </b>",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.9s",
      list:[
        "Writing content that ranks on Google",
        "On-page SEO content techniques", 
      ]
    },
    {
      id: 140,
      imgSrc: "/images/icon/car/icon-4.png",
      title: " Final Project & Graduation <b style='font-size: 18px; color: #1a43bf; font-weight:500'>(Week 4) </b>",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.9s",
      list:[
        "Create a complete content strategy",
        "Present strategy for feedback & certification", 
       
      ]
    },
  
  ]

  const studentJourneyContent = {
    Title:"Student Journey at Zing Studio",
    Description:"From newbie to digital pro—your journey starts here! With expert mentors, hands-on projects, and real-world skills, we’ll help you level up and make your mark in the digital world.",
    image:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-01.png", 
    }

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
      tool1Num:"20+",
      tool1Title :"Free Essential Digital Marketing Tools",
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
          img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-1.png"
        },
        {
         
          animation: "fadeInDown",
          delay: "0.3s",
          iconClass: "flaticon-worker",
          img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-2.png"
        },
        {
          
          animation: "fadeInUp",
          delay: "0.3s",
          iconClass: "flaticon-settings",
          img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-3.png"
        },
        {
         
          animation: "fadeInRight",
          delay: "0.3s",
          iconClass: "flaticon-conveyor",
           img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-4.png"
        },
        {
            animation: "fadeInLeft",
            delay: "0.3s",
            iconClass: "flaticon-factory",
             img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-5.png"
          },
          {
           
            animation: "fadeInDown",
            delay: "0.3s",
            iconClass: "flaticon-worker",
             img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-6.png"
          },
          {
            
            animation: "fadeInUp",
            delay: "0.3s",
            iconClass: "flaticon-settings",
             img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-7.png"
          },
          {
            
            animation: "fadeInUp",
            delay: "0.3s",
            iconClass: "flaticon-settings",
             img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-8.png"
          },
          // {
            
          //   animation: "fadeInUp",
          //   delay: "0.3s",
          //   iconClass: "flaticon-settings",
          //    img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-9.png"
          // },
          
        
        
        ];
  
    const Tools2 = [
      {
           
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-14.png"
      },
      {
        
        animation: "fadeInUp",
        delay: "0.3s",
        iconClass: "flaticon-settings",
        img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-15.png"
      },
      {
       
        animation: "fadeInRight",
        delay: "0.3s",
        iconClass: "flaticon-conveyor",
        img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-16.png"
      },
      {
        animation: "fadeInLeft",
        delay: "0.3s",
        iconClass: "flaticon-factory",
        img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-17.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-18.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-19.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-20.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-21.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-22.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-23.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-24.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-25.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/essential-tools/tool-26.png"
      },
  ];
  
    const Tools3 = [
    {
      animation: "fadeInLeft",
      delay: "0.3s",
      iconClass: "flaticon-factory",
       img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/AI-tools/tool-1.png"
    },
    {
     
      animation: "fadeInDown",
      delay: "0.3s",
      iconClass: "flaticon-worker",
      img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/AI-tools/tool-2.png"
    },
    {
      
      animation: "fadeInUp",
      delay: "0.3s",
      iconClass: "flaticon-settings",
      img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/AI-tools/tool-3.png"
    },
    {
     
      animation: "fadeInRight",
      delay: "0.3s",
      iconClass: "flaticon-conveyor",
      img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/AI-tools/tool-4.png"
    },
    {
        animation: "fadeInLeft",
        delay: "0.3s",
        iconClass: "flaticon-factory",
        img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/AI-tools/tool-5.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-Copywriting-&-Content-Mastery/Zing-Copywriting-&-Content-Mastery-Tools/AI-tools/tool-6.png"
      },
      
     
      
     
    ]

        const faqData = [
          {
            id: "faq6",
            question: "1. Who should enroll in this course?",
            answer:
              "This course is perfect for aspiring copywriters, content creators, marketers, entrepreneurs, and anyone interested in mastering the art of persuasive writing.",
          },
          {
            id: "faq7",
            question: "2. What topics does the course cover?",
            answer:
              "The course includes modules on persuasive copywriting techniques, SEO content writing, storytelling, email marketing copy, ad copy, and creating content strategies that convert.",
          },
          {
            id: "faq8",
            question: "3. Is any prior writing experience required?",
            answer:
              "No prior experience is necessary. The course starts with the fundamentals and gradually advances to expert-level techniques suitable for all learners.",
          },
          {
            id: "faq9",
            question: "4. How long does the course take to complete?",
            answer:
              "The course spans 4–6 weeks, combining interactive sessions, practical assignments, and real-world projects for hands-on learning.",
          },
          {
            id: "faq10",
            question: "5. Will I receive a certificate upon completion?",
            answer:
              "Yes. A certificate of completion will be awarded, validating your skills in copywriting and content creation.",
          },
          {
            id: "faq11",
            question: "6. Does the course include practical projects?",
            answer:
              "Absolutely. Learners will work on real-world projects, including writing landing pages, ad copies, blog content, and social media campaigns.",
          },
          {
            id: "faq12",
            question: "7. How will this course benefit my career?",
            answer:
              "The course equips learners with high-demand skills in copywriting and content marketing, opening doors to freelance opportunities, agency roles, and in-house marketing positions.",
          },
          {
            id: "faq13",
            question: "8. Will I learn SEO-focused writing?",
            answer:
              "Yes. The course features a dedicated module on SEO copywriting, ensuring you understand how to write content that ranks and converts.",
          },
          {
            id: "faq14",
            question: "9.Is the course self-paced or instructor-led?",
            answer:
              "The course offers flexible learning options with self-paced modules supported by live sessions and mentorship from industry experts.",
          },
          {
            id: "faq15",
            question: "10. How can I enroll in the course?",
            answer:
              "Enrollment is easy. Simply visit our website, select the Copywriting & Content Mastery course, and complete the online registration process.",
          },
        ];
  

        const testimonials = [
          {
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.",
            image: "/images/testimonials/pic3.jpg",
        
            name: "David Matin",
            position: "Student",
          },
          {
            text:  "Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.",
            image: "/images/testimonials/pic3.jpg",
            image: "/images/testimonials/pic2.jpg",
            name: "David Matin",
            position: "Student",
          },
          {
            text:  "Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.",
            image: "/images/testimonials/pic3.jpg",
            image: "/images/testimonials/pic1.jpg",
            name: "David Matin",
            position: "Student",
          },
        
        ];
        const HeroBannerContent = {
          title:"Power Up Your Skills, Power Up Your Career!",
          description:"Zing Academy – Master Digital Marketing with Industry Experts!",
          btn1:"Free Career Counselling",
          btn1Link:"/careers",
          btn2:"Connect Us",
          btn2Link:"/contact",
          img:"/images/Academy/banner/banner-bg-img.jpg"
          }

          const projectContent = {
            title:"Live Projects",
            description:" Gain hands-on experience with real-world digital marketing projects and enhance your skills in practical scenarios."
          }
          
          const projects = [
            {
              title: "<span> Digital </span> <br /> Marketing",
              description:
                "Step into the world of digital marketing and learn how to build brands that stand out online! From viral social media strategies and killer SEO hacks to content that clicks and data that delivers, this course has it all! Perfect for beginners and future marketing pros—learn, create, and crush it online.",
              image: "/images/zing-digital-marketing-mastery/Live-Projects/digital-marketing.jpg",
              link: "/digital-marketing-service",
              bgColor: "bg-primary",
              textColor: "text-white",
            },
            {
              title: "<span> Saas </span> <br />  Platform",
              description:
                "We offer to jump start your e-commerce brand online with some of the leading Saas platforms that offer your quicker turn around, robust and feature rich e-commerce website.",
              image: "/images/zing-digital-marketing-mastery/Live-Projects/saas-platform.jpg",
              link: "/web-design-service",
              bgColor: "#e21100",
              textColor: "text-white",
            },
            {
              title: "<span>  Open-source  </span> <br /> Development",
              description:
                "Open-source Development Open Source commerce development is the order of the way in Ecommerce development. The open source platforms offer a host os flexible and beneficial features...",
              image: "/images/zing-digital-marketing-mastery/Live-Projects/open-source-development.jpg",
              link: "/web-design-service",
              bgColor: "#e21100",
              textColor: "text-white",
            },
          ];

          const formOption  =[
            "Basic",
            "Standard",
          ]

          const bannerContent = {
            head:"Zing Copywriting & Content Mastery",
            caption:"Course Highlights",
            duration:"4 Weeks",
            fees:"₹10,000",
            subTitle:"Application Closes On 31/05/2025",
            list:[
              "Develop persuasive copy & content creation skills",
              "Learn storytelling, SEO writing & brand messaging",
              "Placement support for top performers"
            ],
            button1:"Live",
            button2:"Online",
            button3:"Interactive",
            image:"/images/brand-buzz/brand-buzz-header-img.png",
            formTitle:"Register Now For free",
            charImg:"/images/Home-Page/mbl-banner/character-img-4.png",
            formLink:"https://connect.irepute.in/file/zing-copywriting-content-mastery/"
          }


  return (
    <>
      <div className="page-wraper  " style={{background:"#fff"}}>
        <Header17 />
         {/* <ZingAcademyProgramHero HeroBannerContent={HeroBannerContent}/> */}
         <AcademyCourseBanner option= {formOption} bannerContent={bannerContent}/>
         {/* <div
              className="section-full content-inner-2 bg-primary wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
              style={{ backgroundImage: "url(/images/background/map-bg.png)" }}
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
            </div> */}
 
        <div >
        <CourseDetails CourseTitle={CourseTitle} CourseDuration={CourseDuration} courseModule={courseModule}/>
          </div>
        {/* <StudentsJourney/> */}
        <StudentJourneynew services10={services10} studentJourneyContent={studentJourneyContent}/>
       
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
       

      
        {/* <LiveProjects projectContent={projectContent} projects={projects}/> */}
      
    
      {/* <GuestLectures/> */}
      
      
      {/* <ToolsLearning ToolsContent={ToolsContent} Tools1={Tools1} Tools2={Tools2}/> */}
      <ZingCopyWritingTools ToolsContent={ToolsContent} Tools1={Tools1} Tools3={Tools3}/>
      
      {/* <SucessStories testimonials={testimonials}/> */}
    
      <div  className="bg-white pb-0 pb-sm-5"  >
        <CourseProgramFaq faqData={faqData}/>
        </div>

        <ZingAcademyCta/>
        
        <Footer13 />
      </div>
    </>
  );
}
