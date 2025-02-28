
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
export const metadata = {
  title: "Zing Digital Marketing Mastery || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  const CourseTitle= "Zing Digital Marketing Mastery"
  const CourseDuration = "3 Months + 3 Months Internship"

  const courseModule = [
    {
      title:"Module 1: Digital Marketing Foundations",
      list:[
        "Understanding Digital Marketing & Trends",
        "Marketing Funnels & Customer Journey",
        "Brand Positioning & Market Research",
        "Competitor Analysis & Strategy"
      ],
      imgSrc:"/images/zing-digital-marketing-mastery/digital-marketing-foundations.jpg",
       bgColor:"#e9e9e9"
    },
    {
      title:"Module 2: SEO Mastery",
      list:[
        "Keyword Research & Competitive Analysis",
        "On-Page & Off-Page SEO",
        "Technical SEO (Schema, Site Speed, Mobile Optimization)",
        "Local SEO & E-commerce SEO"
      ],
      imgSrc:"/images/zing-digital-marketing-mastery/module-2.jpg",
       bgColor:"#fff"
    },
    {
      title:"Module 3: Social Media & Community Building",
      list:[
        "Instagram & Facebook Growth Strategies",
        "LinkedIn & Twitter for Personal Branding",
        "YouTube Marketing & Video SEO",
        "Social Media Monetization Techniques"
      ],
      imgSrc:"/images/zing-digital-marketing-mastery/module-3.jpg",
       bgColor:"#d2dbf6"
    },    {
      title:"Module 4: Paid Advertising & Google Ads",
      list:[
        "Google Ads (Search, Display, Shopping)",
        "Facebook & Instagram Ads",
        "LinkedIn & Twitter Ads",
        "A/B Testing & Performance Analytics",
        "Retargeting & Budget Optimization"
      ],
      imgSrc:"/images/zing-digital-marketing-mastery/module-4.jpg",
       bgColor:"#e9e9e9"
    },
    {
      title:"Module 5: Content Marketing & Copywriting",
      list:[
        "Crafting High-Converting Sales Copy",
        "Blogging & SEO Writing",
        "Storytelling & Brand Voice",
        "Video Content & Email Marketing"
      ],
      imgSrc:"/images/zing-digital-marketing-mastery/module-5.jpg",
       bgColor:"#fff"
    },
    {
      title:"Module 6: AI & Automation in Marketing",
      list:[
        "AI-Powered Tools for Marketing",
        "Chatbots & Email Automation",
        "Personalization & Predictive Analytics",
       
      ],
      imgSrc:"/images/zing-digital-marketing-mastery/module-6.jpg",
       bgColor:"#d2dbf6"
    },
    {
      title:"Internship",
      list:[
        "Work on Live Projects",
        "Develop Digital Strategies for Real Businesses",
        "Create & Optimize Ad Campaigns",
        "SEO & Social Media Content Execution"
      ],
      imgSrc:"/images/zing-digital-marketing-mastery/module-7.jpg",
       bgColor:"#e9e9e9"
    }
  ]

  const services10 =   [
    {
      id: 137,
      imgSrc: "/images/icon/car/icon-1.png",
      title: "Orientation & Icebreaker <b> (Day 1-2) <b/>" ,
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.3s",
      list:[
        "Welcome session with an introduction to Zing Studio’s mission & goals",
        "Fun icebreaker activities & networking games",
        "Overview of the course structure, expectations, and outcomes",
        "Access to LMS (Learning Management System) and student portal"
      ]
    },
    {
      id: 138,
      imgSrc: "/images/icon/car/icon-2.png",
      title: "Module-Based Practical Learning <b> (Week 1 - Ongoing) <b/>",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.6s",
      list:[
        "Engaging video lessons, live masterclasses & hands-on workshops",
        "Real-world applications & industry insights",
        "Interactive Q&A sessions after every module",
       
      ]
    },
    {
      id: 139,
      imgSrc: "/images/icon/car/icon-3.png",
      title: "Doubt Clearing & Weekly Q&A <b> (Every Weekend)  <b/>",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.9s",
      list:[
        "Dedicated live doubt-clearing sessions with mentors",
        "Discussion forums & peer-to-peer learning groups", 
      ]
    },
    {
      id: 140,
      imgSrc: "/images/icon/car/icon-4.png",
      title: "Assignments & Case Studies <b>(Mid-Course) <b/>",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.9s",
      list:[
        "Individual & group assignments with real-world scenarios",
        "Case studies on successful digital campaigns & business strategies", 
        "Feedback & improvement sessions"
      ]
    },
    // {
    //   id: 141,
    //   imgSrc: "/images/icon/car/icon-5.png",
    //   title: "Engine Diagnostics",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
    //   animation: "bounceInUp",
    //   delay: "0.6s",
    // },
    {
      id: 142,
      imgSrc: "/images/icon/car/icon-6.png",
      title: "Group Projects & Presentations <b> (Final Weeks) <b/>",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.3s",
      list:[
        "Collaborative projects to apply learning",
        "Live presentations with expert feedback", 
        "Team-based problem-solving & innovation challenges"
      ]
    }, 
    // ------------
    {
      id: 143,
      imgSrc: "/images/icon/car/icon-6.png",
      title: "Guest Lectures & Industry Talks",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.3s",
      list:[
        "Sessions with industry leaders, influencers & successful entrepreneurs",
        "AMA (Ask Me Anything) sessions for deep insights", 
       
      ]
    },
    {
      id: 144,
      imgSrc: "/images/icon/car/icon-6.png",
      title: "Internship & Real-World Application",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.3s",
      list:[
        "Live internship opportunities for top students",
        "Shadowing real businesses & executing digital strategies", 
       
      ]
    },
    {
      id: 144,
      imgSrc: "/images/icon/car/icon-6.png",
      title: "Placement Assistance & Graduation",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.3s",
      list:[
        "Resume building & mock interviews",
        "Placement drives & networking events", 
        "Certification ceremony & alumni community access"
      ]
    },
  ]

  const studentJourneyContent = {
    Title:"Student Journey at Zing Studio",
    Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.",
    image:"/images/Zing-Infographic-Students-Journey.png",
    
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

    const faqData = [
          {
            id: "faq6",
            question: "1. Who is this course suitable for?",
            answer:
              "The course is ideal for students, marketing professionals, entrepreneurs, and anyone interested in mastering digital marketing skills.",
          },
          {
            id: "faq7",
            question: "2. What topics does the course cover?",
            answer:
              "The curriculum includes SEO, SEM, social media marketing, content marketing, email marketing, analytics, and paid advertising strategies.",
          },
          {
            id: "faq8",
            question: "3. Are there any prerequisites to enroll?",
            answer:
              "No prior experience is required. The course is designed for beginners as well as professionals looking to enhance their skills.",
          },
          {
            id: "faq9",
            question: "4. Will I get hands-on experience?",
            answer:
              "Yes. The course offers live projects and real-world case studies to ensure practical learning and application of strategies.",
          },
          {
            id: "faq10",
            question: "5. Is there a certification upon completion?",
            answer:
              "Yes. Participants will receive a certification upon successfully completing the course, validating their digital marketing expertise.",
          },
          {
            id: "faq11",
            question: "6. What career opportunities does this course open up?",
            answer:
              "Graduates can pursue roles such as digital marketing strategist, SEO specialist, social media manager, content marketer, and more.",
          },
          {
            id: "faq12",
            question: "7. How long is the course duration?",
            answer:
              "The course duration typically ranges from 8 to 12 weeks, depending on the learning mode (full-time or part-time).",
          },
          {
            id: "faq13",
            question: "8. Does the course provide placement assistance?",
            answer:
              "Yes. Participants will receive a certification upon successfully completing the course, validating their digital marketing expertise.",
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
            head:"Zing Digital Marketing Mastery",
            caption:"Course Highlights",
            duration:"3 Months + 3 Months Internship",
            subTitle:"Application Closes On 31/05/2025",
            list:[
              "Master industry-relevant skills with hands-on projects",
              "Work with top digital marketing tools & strategies",
              "Guaranteed placement support for top performers"
            ],
            button1:"Live",
            button2:"Online",
            button3:"Interactive",
            image:"/images/brand-buzz/brand-buzz-header-img.png",
            formTitle:"Register Now For free"
          }

  return (
    <>
      <div className="page-wraper  ">
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
      
      
      <ToolsLearning ToolsContent={ToolsContent} Tools1={Tools1} Tools2={Tools2}/>
      
      
      <SucessStories testimonials={testimonials}/>
    
      <div className="bg-white"  style={{paddingBottom:"50px", paddingTop:"50px"}}>
        <CourseProgramFaq faqData={faqData}/>
        </div>

        <ZingAcademyCta/>
        
        <Footer13 />
      </div>
    </>
  );
}
