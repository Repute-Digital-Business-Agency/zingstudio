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
import InfluencerCta from "@/components/service/InfluencerCta";

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
        head: "Monetize Your Social Media Influence Today!",
        caption: "Join a Growing Community of Over 200,000 Influencers and",
        subTitle: "Get Paid for Every",
        button: "Join Now",
        words: ["POST", "TWEET", "REEL", "SNAP", "VIDEO", "REVIEW", "STORY", "SHOOT"],
      };
      const faqData = [
        {
          id: "faq6",
          question: "1. How do I join Influencer Buzz?",
          answer:
            "Simply sign up on our platform, complete your profile, and we’ll connect you with brand collaborations that match your style and audience.",
        },
        {
          id: "faq7",
          question: "2. What types of brands can I collaborate with?",
          answer:
            "We partner with a wide range of brands across fashion, beauty, tech, lifestyle, and more—ensuring there’s something for every influencer.",
        },
        {
          id: "faq8",
          question: "3. Do I need a minimum number of followers?",
          answer:
            "Payment terms vary by campaign, but we ensure secure and timely payments once campaign requirements are met.",
        },
        {
          id: "faq9",
          question: "4. How do I get paid for collaborations?",
          answer:
            "Payment terms vary by campaign, but we ensure secure and timely payments once campaign requirements are met.",
        },
        {
          id: "faq10",
          question: "5. Can I choose the campaigns I want to work on?",
          answer:
            "Absolutely! You have complete freedom to choose the campaigns that resonate with your audience and personal brand.",
        },
        {
          id: "faq11",
          question: "6. What kind of support will I receive?",
          answer:
            "Our dedicated support team is available throughout the collaboration process, offering guidance, campaign insights, and troubleshooting whenever needed.",
        },
        {
          id: "faq12",
          question: "7. How are collaborations managed?",
          answer:
            "We handle the logistics, timelines, and brand communication so you can focus on creating engaging content that delivers results.",
        },
        {
          id: "faq13",
          question: "8. Will I have creative control over my content?",
          answer:
            "Yes! We value your unique voice and style, giving you the freedom to create content that feels authentic to you while aligning with brand goals.",
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

      {/* <Industriesworked/> */}

     {/* <InfluencerBuzzTestimonial testimonials={testimonials}/> */}
     {/* <BrandsWorkWith ToolsContent={ToolsContent} Tools1={Tools1}/> */}

        <InfluencerBuzzCta/>
        <InfluencerBuzzFAQ faqData={faqData}/>
        <InfluencerCta/>
        
        <Footer13 />
      </div>
    </>
  );
}
