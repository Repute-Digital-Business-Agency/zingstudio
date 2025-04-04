
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
import ZingSEOTools from "@/components/service/ZingSEOTools";
export const metadata = {
  title: "Zing SEO Supercharger || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  const CourseTitle= "Zing SEO Supercharger"
  const CourseDuration = "4 Weeks"

  const courseModule = [
    {
      title:"Module 1: SEO Foundations",
      list:[
        "Understanding Search Engines & Algorithms",
        "Keyword Research & Competitive Analysis",
        
      ],
      imgSrc:"/images/Zing-SEO-Supercharger/seo-foundations.jpg",
      bgColor:"#e9e9e9"
    },
    {
      title:"Module 2: On-Page & Off-Page SEO",
      list:[
        "Site Optimization & Speed Enhancement",
        "Link Building & Guest Posting",
       
      ],
      imgSrc:"/images/Zing-SEO-Supercharger/On-Page-seo.jpg",
      bgColor:"#fff"
    },
    {
      title:"Module 3: Technical SEO & Local SEO",
      list:[
        "Website Audits & Fixing Issues",
        "Local Business SEO & Google My Business",
       
      ],
      imgSrc:"/images/Zing-SEO-Supercharger/technical-SEO.jpg",
      bgColor:"#d2dbf6"
    }, 
       {
      title:"Module 4: E-commerce SEO & Analytics",
      list:[
        "Product Page Optimization",
        "SEO Tracking & Analytics",
        
      ],
     imgSrc:"/images/Zing-SEO-Supercharger/E-commerce-SEO.jpg",
     bgColor:"#e9e9e9"
    },
   
  ]

  const  services10 =   [
    {
      id: 137,
      imgSrc: "/images/icon/car/icon-1.png",
      title: "SEO Foundations <b style='font-size: 18px; color: #1a43bf; font-weight:500'> (Week 1) </b>",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.3s",
      list:[
        "In-depth keyword research & competitive analysis",
        "SEO tools walkthrough",
        
      ]
    },
    {
      id: 138,
      imgSrc: "/images/icon/car/icon-2.png",
      title: "On-Page SEO & Speed Optimization <b style='font-size: 18px; color: #1a43bf; font-weight:500'> (Week 2) </b>",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.6s",
      list:[
        "Page structure optimization",
        "Site speed enhancement techniques",
        
       
      ]
    },
    {
      id: 139,
      imgSrc: "/images/icon/car/icon-3.png",
      title: "Link Building & Technical SEO <b style='font-size: 18px; color: #1a43bf; font-weight:500'> (Week 3) </b>",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.9s",
      list:[
        "Internal linking strategies",
        "Fixing common technical SEO errors", 
      ]
    },
    {
      id: 140,
      imgSrc: "/images/icon/car/icon-4.png",
      title: "E-Commerce & Local SEO <b style='font-size: 18px; color: #1a43bf; font-weight:500'>(Week 4) </b>",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.9s",
      list:[
        "Optimizing product pages for SEO",
        "Google My Business walkthrough", 
       
      ]
    },
  
    // ------------
    {
      id: 143,
      imgSrc: "/images/icon/car/icon-6.png",
      title: "SEO Strategy Showcase ",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.3s",
      list:[
        "Final Presentation",
        
      ]
    },
   
  ]

  const studentJourneyContent = {
    Title:"Student Journey at Zing Studio",
    Description:"From newbie to digital pro—your journey starts here! With expert mentors, hands-on projects, and real-world skills, we’ll help you level up and make your mark in the digital world.",
    image:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-01.png", 
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
          img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-1.png"
        },
        {
         
          animation: "fadeInDown",
          delay: "0.3s",
          iconClass: "flaticon-worker",
          img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-2.png"
        },
        {
          
          animation: "fadeInUp",
          delay: "0.3s",
          iconClass: "flaticon-settings",
          img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-3.png"
        },
        {
         
          animation: "fadeInRight",
          delay: "0.3s",
          iconClass: "flaticon-conveyor",
           img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-4.png"
        },
        {
            animation: "fadeInLeft",
            delay: "0.3s",
            iconClass: "flaticon-factory",
             img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-5.png"
          },
          {
           
            animation: "fadeInDown",
            delay: "0.3s",
            iconClass: "flaticon-worker",
             img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-6.png"
          },
          {
            
            animation: "fadeInUp",
            delay: "0.3s",
            iconClass: "flaticon-settings",
             img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-8.png"
          },
          {
           
            animation: "fadeInRight",
            delay: "0.3s",
            iconClass: "flaticon-conveyor",
             img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-9.png"
          },
          {
            animation: "fadeInLeft",
            delay: "0.3s",
            iconClass: "flaticon-factory",
             img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-10.png"
          },
         
        
        
        ];

    const Tools2 = [
      {
           
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-14.png"
      },
      {
        
        animation: "fadeInUp",
        delay: "0.3s",
        iconClass: "flaticon-settings",
        img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-15.png"
      },
      {
       
        animation: "fadeInRight",
        delay: "0.3s",
        iconClass: "flaticon-conveyor",
        img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-16.png"
      },
      {
        animation: "fadeInLeft",
        delay: "0.3s",
        iconClass: "flaticon-factory",
        img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-17.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-18.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-19.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-20.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-21.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-22.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-23.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-24.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-25.png"
      },
      {
       
        animation: "fadeInDown",
        delay: "0.3s",
        iconClass: "flaticon-worker",
        img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/essential-tools/tool-26.png"
      },
  ];

    const Tools3 = [
    {
      animation: "fadeInLeft",
      delay: "0.3s",
      iconClass: "flaticon-factory",
       img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/AI-tools/tool-1.png"
    },
    {
     
      animation: "fadeInDown",
      delay: "0.3s",
      iconClass: "flaticon-worker",
      img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/AI-tools/tool-2.png"
    },
    {
      
      animation: "fadeInUp",
      delay: "0.3s",
      iconClass: "flaticon-settings",
      img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/AI-tools/tool-3.png"
    },
    {
     
      animation: "fadeInRight",
      delay: "0.3s",
      iconClass: "flaticon-conveyor",
      img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/AI-tools/tool-4.png"
    },
    {
        animation: "fadeInLeft",
        delay: "0.3s",
        iconClass: "flaticon-factory",
        img:"/images/Zing-SEO-Supercharger/Zing-SEO-Supercharger-Tools/AI-tools/tool-5.png"
      },
      
      
     
    ]

        const faqData = [
          {
            id: "faq6",
            question: "1. Who should take this course?",
            answer:
              "This course is designed for digital marketers, content creators, business owners, web developers, and anyone looking to improve website visibility through effective SEO strategies.",
          },
          {
            id: "faq7",
            question: "2. What topics does the course cover?",
            answer:
              "Key areas include on-page and off-page SEO, keyword research, technical SEO, link building, local SEO, mobile optimization, and SEO analytics tools.",
          },
          {
            id: "faq8",
            question: "3. Do I need any prior SEO knowledge?",
            answer:
              "No prior experience is needed. The course covers both foundational concepts and advanced SEO techniques, suitable for beginners and professionals alike.",
          },
          {
            id: "faq9",
            question: "4. What is the duration of the course?",
            answer:
              "The course runs for 4–8 weeks, featuring flexible schedules with a combination of live sessions, recorded lectures, and practical assignments.",
          },
          {
            id: "faq10",
            question: "5. Will I receive a certificate upon completion?",
            answer:
              "Yes. A certificate of completion will be awarded, showcasing your expertise in SEO and boosting your professional profile.",
          },
          {
            id: "faq11",
            question: "6. Are there practical exercises included?",
            answer:
              "Definitely. The course includes hands-on projects like optimizing website content, conducting keyword research, and running SEO audits.",
          },
          {
            id: "faq12",
            question: "7. What tools will I learn during the course?",
            answer:
              "Gain experience with essential SEO tools like Google Analytics, Google Search Console, SEMrush, Ahrefs, and Yoast SEO.",
          },
          {
            id: "faq13",
            question: "8. How will this course help my career?",
            answer:
              "The course prepares you for roles such as SEO Specialist, Digital Marketing Strategist, or Content Marketing Manager by teaching in-demand SEO skills.",
          },
          {
            id: "faq14",
            question: "9. Is the course self-paced or instructor-led?",
            answer:
              "The course offers a blended learning experience with self-paced modules and live sessions led by industry experts.",
          },
          {
            id: "faq15",
            question: "10. How can I enroll in the course?",
            answer:
              "Simply visit our website, select the SEO Supercharger course, and complete the online registration process to get started.",
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
            head:"Zing SEO Supercharger",
            caption:"Course Highlights",
            duration:"4 Weeks",
            fees:"₹5,000",
            subTitle:"Application Closes On 31/05/2025",
            list:[
              "Master advanced SEO & data-driven optimization",
              "Improve website rankings with proven strategies",
              "Placement support for top performers"
            ],
            button1:"Live",
            button2:"Online",
            button3:"Interactive",
            image:"/images/brand-buzz/brand-buzz-header-img.png",
            formTitle:"Register Now For free",
            charImg:"/images/Home-Page/mbl-banner/character-img-7.png",
            formLink:"https://connect.irepute.in/file/zing-seo-supercharger/"
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
      
      
       <ZingSEOTools ToolsContent={ToolsContent} Tools1={Tools1} Tools3={Tools3}/>
      
      
      {/* <SucessStories testimonials={testimonials}/> */}
    
      <div  className="bg-white pb-0 pb-sm-5" >
        <CourseProgramFaq faqData={faqData}/>
        </div>

        <ZingAcademyCta/>
        
        <Footer13 />
      </div>
    </>
  );
}
