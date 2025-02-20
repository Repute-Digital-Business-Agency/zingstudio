import React from "react";

import Header17 from "@/components/headers/Header17";
import Footer13 from "@/components/footers/Footer13";
import ZingFluenceBanner from "@/components/service/ZingFluenceBanner";
import Celebrity from "@/components/service/Celebrity";
import InfluencerMarketing from "@/components/service/incluencer-marketing-solution";
import About from "@/components/service/BestMarketingService";
import Facts from "@/components/service/LetsInfluence";
import MarketingAgency from "@/components/service/InfluenceMarketingAgency";
import BestInfluencer from "@/components/service/BestInfluencer";
import ProcessForInfluencer from "@/components/service/ProcessForInfluencer";
import ChooseZingFluencer from "@/components/service/ChooseZingfluencer";
import Cta from "@/components/homes/home-13/Cta";
import InfluencerBuzzBanner from "@/components/service/InfluencerBuzzBanner";
import WhyChooseUs from "@/components/service/WhyChooseUs";
import BenifitsOfBuzz from "@/components/service/BenifitsOfBuzz";
import DedicatedSupport from "@/components/service/DedicatedSupport";
import HowDoesItWork from "@/components/service/HowDoesItWork";
import Industriesworked from "@/components/service/Industriesworked";
import InfluencerBuzzFAQ from "@/components/service/InfluencerBuzzFAQ";
import InfluencerBuzzTestimonial from "@/components/service/InfluencerBuzzTestimonial";
import BrandsWorkWith from "@/components/service/BrandsWorkWith";
import InfluencerBuzzCta from "@/components/service/InfluencerBuzzCta";

export const metadata = {
  title: "Zing Studio - Zingfluence",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
    const formOption  =[
        "Basic",
        "Standard",
      ]
      const bannerContent = {
        head:"Monetize Your Social Media Influence Today!",
        caption:"Join a Growing Community of Over 200,000 Influencers and",
        subTitle:"Get Paid for Every POST, TWEET, REEL, SNAP, VIDEO, REVIEW, STORY, SHOOT",
        list:[
          "Connect with your ideal customers at the exact moment they are searching.",
          "Achieve measurable results without the high expenses of traditional marketing.",
          "Result-driven strategies that target potential customers with precision, leading to high-conversion leads and increased sales for your business."
        ]
      }
      const faqData = [
        {
          id: "faq6",
          question: "1. Web design aorem apsum dolor sit amet?",
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        },
        {
          id: "faq7",
          question: "2. Graphic design aorem apsum dolor?",
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        },
        {
          id: "faq8",
          question: "3. Development aorem apsum dolor sit amet?",
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        },
        {
          id: "faq9",
          question: "4. True Responsiveness consectetuer adipiscing?",
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        },
        {
          id: "faq10",
          question: "5. Claritas est etiam processus?",
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
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

      const ToolsContent = {
        tool1Num:"40+",
        tool1Title :"Brands We Work With",
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
  
     

  return (
    <>
      <div className="page-wraper  zingFluence">
        <Header17 />

       
        <InfluencerBuzzBanner option= {formOption} bannerContent={bannerContent}/>

       <WhyChooseUs/>
       <HowDoesItWork/>

        <BenifitsOfBuzz/>
      <DedicatedSupport/>
      <Industriesworked/>

     <InfluencerBuzzTestimonial testimonials={testimonials}/>
     <BrandsWorkWith ToolsContent={ToolsContent} Tools1={Tools1}/>

        <InfluencerBuzzCta/>
        <InfluencerBuzzFAQ faqData={faqData}/>
        <Cta/>
        
        <Footer13 />
      </div>
    </>
  );
}
