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
import BrandBuzzBanner from "@/components/service/BrandBuzzBanner";
import BusinessWork from "@/components/service/BusinessWork";
import InfluencerMarketingService from "@/components/service/InfluencerMarketingService";
import BestInfluencerMarketing from "@/components/service/BestInfluencerMarketing";
import NumberToCelebrate from "@/components/service/NumberToCelebrate";
import YoutubersAndInstagramers from "@/components/service/YoutubersAndInstagramers";
import BrandBuzzCta from "@/components/service/BrandBuzzCta";

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
        head:"Create the Buzz. Build the Brand.",
        caption:"Harness the power of influencer marketing to amplify your brand’s voice, connect authentically, and make a lasting impact",
        subTitle:"Level up your brand with influencer vibes that",
        words: ["Connect", "Captivate", "Convert"],
        list:[
          "Connect with your ideal customers at the exact moment they are searching.",
          "Achieve measurable results without the high expenses of traditional marketing.",
          "Result-driven strategies that target potential customers with precision, leading to high-conversion leads and increased sales for your business."
        ],
        button:"Let’s Connect and Spotlight Your Brand!",
        image:"/images/brand-buzz/banner-img.png",
        formTitle:"Let’s turn your brand into the next big thing!",
        bgimg:"/images/brand-buzz/serviceBanner.jpg"
      }

      const faqData = [
        {
          id: "faq6",
          question: "1. What is influencer marketing, and how can it benefit my brand?",
          answer:
            "Influencer marketing involves collaborating with influencers who have a loyal following to promote your brand. It boosts brand visibility, builds trust, and drives engagement by leveraging authentic content.",
        },
        {
          id: "faq7",
          question: "2. How do you select the right influencers for my brand?",
          answer:
            "We analyze your brand's target audience, values, and campaign goals to match you with influencers who align perfectly with your brand identity and can deliver measurable results.",
        },
        {
          id: "faq8",
          question: "3. What types of influencer partnerships are available?",
          answer:
            "We offer various partnership options, including sponsored posts, product reviews, brand ambassadorships, event collaborations, and affiliate marketing campaigns.",
        },
        {
          id: "faq9",
          question: "4. How is influencer marketing success measured?",
          answer:
            "Success is tracked using key performance indicators (KPIs) such as engagement rates, reach, impressions, click-through rates, and conversion metrics tailored to your campaign objectives.",
        },
        {
          id: "faq10",
          question: "5. Is influencer marketing suitable for small businesses?",
          answer:
            "Absolutely. Influencer marketing is scalable and can be tailored to suit businesses of all sizes. Micro-influencers, in particular, offer high engagement rates at cost-effective rates.",
        },
        {
          id: "faq11",
          question: "6. What is the typical duration of an influencer marketing campaign?",
          answer:
            "Campaign duration varies based on objectives. It can range from a single post or event promotion to long-term partnerships spanning several months for sustained impact.",
        },
        {
          id: "faq12",
          question: "7. How much does an influencer marketing campaign cost?",
          answer:
            "Costs depend on factors such as influencer reach, engagement rates, content requirements, and campaign duration. We offer customizable packages to suit various budgets.",
        },
        {
          id: "faq13",
          question: "8. Can influencer marketing help with brand loyalty?",
          answer:
            "Yes. Long-term collaborations with influencers who resonate with your audience foster brand trust and loyalty, leading to sustained customer relationships.",
        },
        {
          id: "faq14",
          question: "9. What industries benefit most from influencer marketing?",
          answer:
            "Influencer marketing is highly versatile and works well across industries, including fashion, beauty, technology, travel, lifestyle, food, and fitness.",
        },
        {
          id: "faq15",
          question: "10. How do you ensure influencer content aligns with our brand values?",
          answer:
            "We work closely with both brands and influencers, providing clear guidelines and approval processes to ensure all content aligns with your brand voice and objectives.",
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
        tool1Title :"As Featured In",
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

       
        {/* <BrandBuzzBanner/> */}
        <InfluencerBuzzBanner option= {formOption} bannerContent={bannerContent}/>

        <BusinessWork/>

        <InfluencerMarketingService/>
        <div
              className="section-full content-inner-2  wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
              style={{
                background:"#e21100"
              }}
              // style={{ backgroundImage: "url(/images/background/map-bg.png)" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center ">
                    <h2 className="title text-white">
                    Why Brand Buzz ?
                    </h2>
                    <p className="text-white mb-0">
                    Unlock the power of influencer marketing with Brand Buzz. We connect your brand with the right voices, creating authentic stories that captivate audiences and drive results. From boosting visibility to building lasting customer trust, Brand Buzz delivers tailored campaigns designed for maximum impact and measurable growth.


                    </p>
                  </div>
                </div>
              </div>
            </div>

        <BestInfluencerMarketing/>
        {/* <NumberToCelebrate/> */}

        {/* <YoutubersAndInstagramers/> */}
      
       
       

     {/* <InfluencerBuzzTestimonial testimonials={testimonials}/> */}
     {/* <BrandsWorkWith ToolsContent={ToolsContent} Tools1={Tools1}/> */}

      
        <InfluencerBuzzFAQ faqData={faqData}/>
        <BrandBuzzCta/>
        
        <Footer13 />
      </div>
    </>
  );
}
