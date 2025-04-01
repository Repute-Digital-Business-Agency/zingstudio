
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
import ToolsSlider from "@/components/service/ToolsSlider";
import ZinglaunchpadTools from "@/components/service/ZinglaunchpadTools";
export const metadata = {
  title: "Zing Launchpad – Student Internship Program || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {

  const CourseTitle= "Zing Launchpad – Student Internship Program"
  const CourseDuration = "10 Days"

  const courseModule = [
    {
      title:"Module 1: Digital Marketing Basics",
      list:[
        "Introduction to Digital Marketing",
        "Marketing Psychology & Consumer Behavior",
        
      ],
      imgSrc:"/images/Zing-Launchpad-Student-Internship-Program/digital-marketing-basics.jpg",
       bgColor:"#e9e9e9"
    },
    {
      title:"Module 2: SEO Basics & Social Media Marketing",
      list:[
        "Fundamentals of SEO & Google Search",
        "Instagram & Facebook Growth Strategies",
        
      ],
      imgSrc:"/images/Zing-Launchpad-Student-Internship-Program/socia-media-optimization.jpg",
       bgColor:"#fff"
    },
    {
      title:"Module 3: Paid Ads & Campaign Setup",
      list:[
        "Running Facebook & Google Ads",
        "Basics of Retargeting & Ad Optimization",
        
      ],
      imgSrc:"/images/Zing-Launchpad-Student-Internship-Program/paid-ads.jpg",
       bgColor:"#d2dbf6"
    },    {
      title:"Live Internship Projects:",
      list:[
        "Managing Social Media Pages",
        "Running Ads & Analyzing Results",
        "SEO Optimization for Websites",
       
      ],
      imgSrc:"/images/Zing-Launchpad-Student-Internship-Program/internship-projects.jpg",
       bgColor:"#e9e9e9"
    },

    
  ]

  const services10 =   [
    {
      id: 137,
      imgSrc: "/images/icon/car/icon-1.png",
      title: " Orientation & Goal Setting <b style='font-size: 18px; color: #1a43bf; font-weight:500'> (Day 1) </b>",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.3s",
      list:[
        "Introduction to Zing’s mission & internship expectations",
        "Personal branding basics & goal-setting workshop",
      
      ]
    },
    {
      id: 138,
      imgSrc: "/images/icon/car/icon-2.png",
      title: "Digital Marketing Basics & Tools <b style='font-size: 18px; color: #1a43bf; font-weight:500'> (Days 2-5) </b>",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.6s",
      list:[
        "Recap of digital marketing fundamentals",
        "SEO & Social Media Tools overview",
        "Building marketing strategies with live examples",
       
      ]
    },
    {
      id: 139,
      imgSrc: "/images/icon/car/icon-3.png",
      title: "Project Implementation <b style='font-size: 18px; color: #1a43bf; font-weight:500'> (Days 6-8) </b>",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.9s",
      list:[
        "Social media page management & content posting",
        "Creating viral posts and Campaigns", 
      ]
    },
    {
      id: 140,
      imgSrc: "/images/icon/car/icon-4.png",
      title: "Evaluation & Networking <b style='font-size: 18px; color: #1a43bf; font-weight:500'>(Days 9-10) </b>",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.9s",
      list:[
        "Final project presentations with feedback",
        "Networking session & certification ceremony", 
        
      ]
    },
    
  ]
  const studentJourneyContent = {
    Title:"Student Journey at Zing Studio",
    Description:"From newbie to digital pro—your journey starts here! With expert mentors, hands-on projects, and real-world skills, we’ll help you level up and make your mark in the digital world.",
    image:"/images/Zing-Launchpad-Student-Internship-Program/Zing-Launchpad-Student-Internship-Program-01.png", 
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
          animation: "fadeInUp",
          delay: "0.3s",
          iconClass: "flaticon-factory",
          img:"/images/Zing-Launchpad-Student-Internship-Program/Zing-Launchpad-Student-Internship-Program-Tools/essential-tools/tool-1.png"
        },
        
        {
          
          animation: "fadeInUp",
          delay: "0.3s",
          iconClass: "flaticon-settings",
          img:"/images/Zing-Launchpad-Student-Internship-Program/Zing-Launchpad-Student-Internship-Program-Tools/essential-tools/tool-3.png"
        },
        {
         
          animation: "fadeInLeft",
          delay: "0.3s",
          iconClass: "flaticon-conveyor",
           img:"/images/Zing-Launchpad-Student-Internship-Program/Zing-Launchpad-Student-Internship-Program-Tools/essential-tools/tool-4.png"
        },
        {
            animation: "fadeInDown",
            delay: "0.3s",
            iconClass: "flaticon-factory",
             img:"/images/Zing-Launchpad-Student-Internship-Program/Zing-Launchpad-Student-Internship-Program-Tools/essential-tools/tool-5.png"
          },
          {
           
            animation: "fadeInLeft",
            delay: "0.3s",
            iconClass: "flaticon-worker",
             img:"/images/Zing-Launchpad-Student-Internship-Program/Zing-Launchpad-Student-Internship-Program-Tools/essential-tools/tool-6.png"
          },
          {
            
            animation: "fadeInLeft",
            delay: "0.3s",
            iconClass: "flaticon-settings",
             img:"/images/Zing-Launchpad-Student-Internship-Program/Zing-Launchpad-Student-Internship-Program-Tools/essential-tools/tool-7.png"
          },
          {
           
            animation: "fadeInRight",
            delay: "0.3s",
            iconClass: "flaticon-conveyor",
             img:"/images/Zing-Launchpad-Student-Internship-Program/Zing-Launchpad-Student-Internship-Program-Tools/essential-tools/tool-8.png"
          },
        
       
        ];

  //   const Tools2 = [
  //     {
           
  //       animation: "fadeInDown",
  //       delay: "0.3s",
  //       iconClass: "flaticon-worker",
  //       img:"/images/Zing-Launchpad-Student-Internship-Program/essential-tools/tool-14.png"
  //     },
  //     {
        
  //       animation: "fadeInUp",
  //       delay: "0.3s",
  //       iconClass: "flaticon-settings",
  //       img:"/images/Zing-Launchpad-Student-Internship-Program/essential-tools/tool-15.png"
  //     },
  //     {
       
  //       animation: "fadeInRight",
  //       delay: "0.3s",
  //       iconClass: "flaticon-conveyor",
  //       img:"/images/Zing-Launchpad-Student-Internship-Program/essential-tools/tool-16.png"
  //     },
  //     {
  //       animation: "fadeInLeft",
  //       delay: "0.3s",
  //       iconClass: "flaticon-factory",
  //       img:"/images/Zing-Launchpad-Student-Internship-Program/essential-tools/tool-17.png"
  //     },
  //     {
       
  //       animation: "fadeInDown",
  //       delay: "0.3s",
  //       iconClass: "flaticon-worker",
  //       img:"/images/Zing-Launchpad-Student-Internship-Program/essential-tools/tool-18.png"
  //     },
  //     {
       
  //       animation: "fadeInDown",
  //       delay: "0.3s",
  //       iconClass: "flaticon-worker",
  //       img:"/images/Zing-Launchpad-Student-Internship-Program/essential-tools/tool-19.png"
  //     },
  //     {
       
  //       animation: "fadeInDown",
  //       delay: "0.3s",
  //       iconClass: "flaticon-worker",
  //       img:"/images/Zing-Launchpad-Student-Internship-Program/essential-tools/tool-20.png"
  //     },
  //     {
       
  //       animation: "fadeInDown",
  //       delay: "0.3s",
  //       iconClass: "flaticon-worker",
  //       img:"/images/Zing-Launchpad-Student-Internship-Program/essential-tools/tool-21.png"
  //     },
  //     {
       
  //       animation: "fadeInDown",
  //       delay: "0.3s",
  //       iconClass: "flaticon-worker",
  //       img:"/images/zZing-Launchpad-Student-Internship-Program/essential-tools/tool-22.png"
  //     },
  //     {
       
  //       animation: "fadeInDown",
  //       delay: "0.3s",
  //       iconClass: "flaticon-worker",
  //       img:"/images/Zing-Launchpad-Student-Internship-Program/essential-tools/tool-23.png"
  //     },
  //     {
       
  //       animation: "fadeInDown",
  //       delay: "0.3s",
  //       iconClass: "flaticon-worker",
  //       img:"/images/Zing-Launchpad-Student-Internship-Program/essential-tools/tool-24.png"
  //     },
  //     {
       
  //       animation: "fadeInDown",
  //       delay: "0.3s",
  //       iconClass: "flaticon-worker",
  //       img:"/images/Zing-Launchpad-Student-Internship-Program/essential-tools/tool-25.png"
  //     },
  //     {
       
  //       animation: "fadeInDown",
  //       delay: "0.3s",
  //       iconClass: "flaticon-worker",
  //       img:"/images/Zing-Launchpad-Student-Internship-Program/essential-tools/tool-26.png"
  //     },
  // ];


  const Tools3 = [
   
    {
     
      animation: "fadeInUp",
      delay: "0.3s",
      iconClass: "flaticon-worker",
      img:"/images/Zing-Launchpad-Student-Internship-Program/Zing-Launchpad-Student-Internship-Program-Tools/AI-tools/tool-2.png"
    },
   
    {
     
      animation: "fadeInLeft",
      delay: "0.3s",
      iconClass: "flaticon-conveyor",
      img:"/images/Zing-Launchpad-Student-Internship-Program/Zing-Launchpad-Student-Internship-Program-Tools/AI-tools/tool-4.png"
    },
    {
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-factory",
        img:"/images/Zing-Launchpad-Student-Internship-Program/Zing-Launchpad-Student-Internship-Program-Tools/AI-tools/tool-5.png"
      },
      {
       
        animation: "fadeInRight",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-Launchpad-Student-Internship-Program/Zing-Launchpad-Student-Internship-Program-Tools/AI-tools/tool-6.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-Launchpad-Student-Internship-Program/Zing-Launchpad-Student-Internship-Program-Tools/AI-tools/tool-7.png"
      },
      
     
    ]


        const faqData = [
          {
            id: "faq6",
            question: "1. Who can apply for the internship program?",
            answer:
              "The program is open to students pursuing undergraduate or postgraduate degrees in relevant fields, as well as recent graduates seeking practical experience.",
          },
          {
            id: "faq7",
            question: "2. What skills are required to apply?",
            answer:
              "Basic knowledge related to the chosen domain is preferred. However, a willingness to learn, adaptability, and enthusiasm are highly valued.",
          },
          {
            id: "faq8",
            question: "3. What are the key benefits of this internship?",
            answer:
              "Interns gain hands-on experience, mentorship from industry experts, real-world project exposure, and the opportunity to enhance their professional network.",
          },
          {
            id: "faq9",
            question: "4. Is this a paid internship?",
            answer:
              "The internship structure may vary. Some positions offer stipends based on performance and project requirements.",
          },
          {
            id: "faq10",
            question: "5. How long does the internship last?",
            answer:
              "The duration typically ranges from 8 to 12 weeks, depending on the project scope and the intern's availability.",
          },
          {
            id: "faq11",
            question: "6. Will I receive a certificate after completion?",
            answer:
              "Yes. All interns who successfully complete the program will receive a certificate acknowledging their participation and achievements.",
          },
          {
            id: "faq12",
            question: "7. What kind of projects will I work on?",
            answer:
              "Interns will engage in live projects across various domains, providing practical exposure and helping them apply academic knowledge to real-world scenarios.",
          },
          {
            id: "faq13",
            question: "8. Is there a possibility of full-time employment after the internship?",
            answer:
              "High-performing interns may be considered for full-time opportunities, subject to available openings and performance evaluations.",
          },
          {
            id: "faq14",
            question: "9. How do I apply for the internship?",
            answer:
              "Applications can be submitted through our official website by filling out the internship application form and attaching the latest resume.",
          },
          {
            id: "faq15",
            question: "10. Will there be mentorship during the internship?",
            answer:
              "Yes. Interns will work closely with experienced professionals who will guide them throughout the program, ensuring continuous learning and growth.",
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
            head:"Zing Launchpad – <br/> Student Internship Program",
            caption:"Course Highlights",
            duration:"10 Days",
            fees:"₹3,000",
            subTitle:"Application Closes On 31/05/2025",
            list:[
              "Gain real-world experience on live projects",
              "Learn under expert mentorship",
              "In-house placement for top performers"
            ],
            button1:"Live",
            button2:"Online",
            button3:"Interactive",
            image:"/images/brand-buzz/brand-buzz-header-img.png",
            formTitle:"Register Now For free",
            charImg:"/images/Home-Page/mbl-banner/character-img-6.png",
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
      
    
      <GuestLectures/>
      
      
      {/* <ToolsLearning ToolsContent={ToolsContent} Tools1={Tools1} Tools2={Tools2} Tools3={Tools3}/> */}
      <ZinglaunchpadTools ToolsContent={ToolsContent} Tools1={Tools1}  Tools3={Tools3}/>
      
      
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
