import React from "react";

import Header17 from "@/components/headers/Header17";
import Footer13 from "@/components/footers/Footer13";
import HeroSection from "@/components/service/heroSection";
import ServiceList from "@/components/service/serviceList";
import ServiceCta from "@/components/service/ServiceCta";
import Portfolio from "@/components/service/Portfolio";
import Faq from "@/components/faq/Faq3";
import Projects2 from "@/components/homes/home-5/Projects2";

export const metadata = {
  title: "Web Design || Zing Studio",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
    const Academy = [
        {
         head:"Academy",
         title:"Zing Digital Marketing Mastery",
         price: "25,000",
         list:[
          "3 Months + 3 Months Internship"
          // "On-Page Optimization - Up to 10 Pages",
          // "Competitor Analysis - 1 Competitor",
          // "Keyword Research and Analysis",
          // "Keyphrase Optimization - 10 Pages",
          // "Google Analytics Setup",
          // "Google Analytics Configuration",
          // "XML Sitemap Creation and Submission",
          // "Monthly Performance Reports",
          // "Link Building - 30",
            
         ],
         link:"",
         description:"Comprehensive program covering advanced digital marketing strategies, culminating in a hands-on internship for real-world experience."
        },
        {
            head:"Academy",
         title:"Zing Launchpad (Student Internship Program)",
         price: "3000",
         list:[
          "10 Days"
          // "On-Page Optimization - Up to 10 Pages",
          // "Competitor Analysis - 1 Competitor",
          // "Keyword Research and Analysis",
          // "Keyphrase Optimization - 10 Pages",
          // "Google Analytics Setup",
          // "Google Analytics Configuration",
          // "XML Sitemap Creation and Submission",
          // "Monthly Performance Reports",
          // "Link Building - 30",
            
         ],
         link:"",
         description:"A dynamic internship designed for college students to gain practical experience in digital marketing."
        },
        {
            head:"Academy",
         title:"Zing Digital Sprint (Essentials of Marketing)",
         price: "3000",
         list:[
          "15 Days"
          // "On-Page Optimization - Up to 10 Pages",
          // "Competitor Analysis - 1 Competitor",
          // "Keyword Research and Analysis",
          // "Keyphrase Optimization - 10 Pages",
          // "Google Analytics Setup",
          // "Google Analytics Configuration",
          // "XML Sitemap Creation and Submission",
          // "Monthly Performance Reports",
          // "Link Building - 30",
            
         ],

         link:"",
         description:"An intensive course focusing on essential digital marketing skills, perfect for beginners and aspiring marketers."
        },
        {
          head:"Academy",
       title:"ZZing AI in Digital Marketing",
       price: "7000",
       list:[
        "10 Days"
        // "On-Page Optimization - Up to 10 Pages",
        // "Competitor Analysis - 1 Competitor",
        // "Keyword Research and Analysis",
        // "Keyphrase Optimization - 10 Pages",
        // "Google Analytics Setup",
        // "Google Analytics Configuration",
        // "XML Sitemap Creation and Submission",
        // "Monthly Performance Reports",
        // "Link Building - 30",
          
       ],

       link:"",
       description:"An innovative course thatexplores the integration of AItechnologies in digital marketing strategies, enhancing decision-making and campaign effectiveness."
      },
 
     ]
     const formOption  =[
      "Digital Marketing",
      "SEO",
      "SMM"
    ]
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <HeroSection head={"Academy"} option={formOption}/>
        <ServiceList data={Academy} head={"Academy"}/>
        <ServiceCta/>
        {/* <Portfolio/> */}
        <Projects2 />
        {/* <Faq/> */}
        
        <Footer13 />
      </div>
    </>
  );
}
