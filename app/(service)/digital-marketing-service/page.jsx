import React from "react";

import Header17 from "@/components/headers/Header17";
import Footer13 from "@/components/footers/Footer13";
import ServiceCta from "@/components/service/ServiceCta";
import Portfolio from "@/components/service/Portfolio";
import Faq from "@/components/faq/Faq3";
import Projects2 from "@/components/homes/home-5/Projects2";
import Cta from "@/components/homes/home-13/Cta";
import OurWorkServices from "@/components/homes/home-5/OurWorksServices";
import HeroSection from "@/components/service/e-commerceService1/HeroSection";
import ServiceList from "@/components/service/e-commerceService1/ServiceList";
import Features from "@/components/service/e-commerceService1/EComFeatures";
import FAQ from "@/components/service/FAQ";
import Guarantee from "@/components/service/e-commerceService1/Guarantee";
import EComFeatures from "@/components/service/e-commerceService1/EComFeatures";
import WebFeatures from "@/components/service/e-commerceService1/WebFeatures";
import DigitalFeatures from "@/components/service/e-commerceService1/DigitalFeatures";
import ServicesCta from "@/components/service/e-commerceService1/ServicesCta";
import ServicePortfolio from "@/components/service/e-commerceService1/portfolio";

export const metadata = {
  title: "E-commerce Development || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  
  const WebDesignfeatures = [
    { icon: "ti-world", text: "50 websites" },
    { icon: "ti-server", text: "Unlimited databases" },
    { icon: "ti-time", text: "100 GB NVMe storage" },
    { icon: "ti-panel", text: "cPanel control panel" },
    { icon: "ti-dashboard", text: "4 GB RAM, 2 vCPUs" },
    { icon: "ti-lock", text: "Free dedicated IP" },
    { icon: "ti-gift", text: "Free domain" },
    { icon: "ti-shield", text: "Free, unlimited SSL for all your websites" },
    { icon: "ti-reload", text: "30-day, money-back guarantee" },
  ];
    const EcommerceDevelopment = [
       
        {
            head:"Digital Marketing",
         title:"Basic - Digital Marketing",
         price: "10,000",
         save:"Save 22%",
         strike:"1,919.00",
         condition:" With a 3-yr term. You pay ₹ 53,424.00 today. <br />Renews at  ₹ 69,084.00.",
         
          list :[
            { icon: "ti-search", text: "On-Page Optimization - Up to 10 Pages" },
            { icon: "ti-bar-chart", text: "Competitor Analysis - 1 Competitor" },
            { icon: "ti-key", text: "Keyword Research and Analysis" },
            { icon: "ti-pencil", text: "Keyphrase Optimization - 10 Pages" },
            { icon: "ti-stats-up", text: "Google Analytics Setup" },
            { icon: "ti-settings", text: "Google Analytics Configuration" },
            { icon: "ti-map", text: "XML Sitemap Creation and Submission" },
            { icon: "ti-clipboard", text: "Monthly Performance Reports" },
            { icon: "ti-link", text: "Link Building - 30" },
      ],
           delay:"0.6s"
        },
        

        {
            head:"Digital Marketing",
            title:"Enterprise - Digital Marketing",
            price: "20,000",
            save:"Save 23%",
            strike:"1,919.00",
            condition:" With a 3-yr term. You pay ₹ 53,424.00 today. <br />Renews at  ₹ 69,084.00.",
            list:[
              { icon: "ti-search", text: "On-Page Optimization - Up to 15 Pages" },
              { icon: "ti-bar-chart", text: "Competitor Analysis - 3 Competitor" },
              { icon: "ti-key", text: "Keyword Research and Analysis" },
              { icon: "ti-pencil", text: "Keyphrase Optimization - 15 Pages" },
              { icon: "ti-stats-up", text: "Google Analytics Setup" },
              { icon: "ti-settings", text: "Google Analytics Configuration" },
              { icon: "ti-map", text: "XML Sitemap Creation and Submission" },
              { icon: "ti-clipboard", text: "Monthly Performance Reports" },
              { icon: "ti-link", text: "Link Building - 50-60" },
          ],
              delay:"0.2s"
           },
          //  {
          //      head:"E-commerce",
          //   title:"Open-source Development ",
          //   price: "8750",
          //   list:[
          //       "Administrator Dashboard",
          //       "Editor Dashboard",
          //       "20 Page Responsive Website",
          //       "1 Basic Contact/Enquiry Form",
          //       "Designs Related to your Industry",
          //       "Multiple Payment Options",
          //       "Maintainance",
          //       "Responsive Design"       
          //   ],
          //     delay:"0.4s"
          //  },
     ]

    // const heroContent= [
    //   {
    //     head:"Web Design",
        
    //   }
    // ]   

    const formOption  =[
      "E-Commerce",
      "SaaS Platform",
      "Open-Source Development"
    ]
    const bannerContent = {
      src:"https://img1.wsimg.com/cdnassets/transform/c50e55dd-152b-45c6-815a-f7164b2a87aa/FOSMO-98392-WH-SLP-New-Marquee-Image-without-cPanel",
        head:"Boost Visibility, Engage Audiences, and Drive Results with Our Digital Marketing Expertise!",
      caption:"Digital Marketing",
      subTitle:"Drive growth with targeted digital strategies that maximize impact.",
      description:"Our Digital Marketing pros are here to boost your brand!",
      rating:"4.6 out of 5 stars ",
      
        icon:[
          <i className="ti-time " />,
          <i className="ti-time " />,
          <i className="ti-time " />
        ],
        list:[
            "Data-Driven Campaigns",
        "Multi-Channel Strategies",
        "Performance Tracking"
        ],
      
        formTitle:"Build. Scale. Succeed. ",
      formCaption:"From powerful e-commerce platforms to smart SaaS solutions and flexible open-source development, we’ve got the tools to fuel digital growth. Let’s create something extraordinary—connect now! ",

      about:"Drive measurable growth with our result-oriented digital marketing services. From data-driven strategies to optimized campaigns, we enhance your online visibility and ensure meaningful engagement. Partner with us to build a stronger digital presence and achieve your business goals efficiently."
    }
    const offers={
      head:"Establish Your Brand Digitally with Expert Digital Marketing Solutions",
      caption:"Drive measurable growth with our result-oriented digital marketing services. From data-driven strategies to optimized campaigns, we enhance your online visibility and ensure meaningful engagement. Partner with us to build a stronger digital presence and achieve your business goals efficiently.",
      code:"Promo code: HOSTING25"
}

    const portfolioContent ={
     description: "Discover a portfolio of e-commerce projects engineered for optimal user experiences, secure transactions, and scalable growth. Each solution is tailored to enhance customer engagement, drive sales, and support sustained digital success."
    }
    const portfolioItems = [
      {
        title: "Rhythm Fashion",
        image: "/images/services/E-commerce/mockup-5.jpg",
        className: "col-lg-3 col-md-3 col-sm-6",
        delay: "0.6s",
        duration: "1.12s",
        link:"https://rhythmfashion.com/"
      },
      {
        title: "Thangam Jewelry",
        image: "/images/services/E-commerce/mockup-2.jpg",
        className: "col-lg-3 col-md-3 col-sm-6",
        delay: "0.6s",
        duration: "1.3s",
        link:"https://sreethangamjewellery.com/"
      },
      {
        title: "Goes Good",
        image: "/images/services/E-commerce/mockup-3.jpg",
        className: "col-lg-3 col-md-3 col-sm-6",
        delay: "0.9s",
        duration: "1.6s",
        link:"https://goesgood.in/"
      },
      {
        title: "Faso",
        image: "/images/services/E-commerce/mockup-4.jpg",
        className: "col-lg-3 col-md-3 col-sm-6",
        delay: "0.3s",
        duration: "1.9s",
        link:"https://faso.in/"
      },
     
      // {
      //   title: "Prade Jewels",
      //   image: "/images/services/E-commerce/mockup-6.jpg",
      //   className: "col-lg-6 col-md-6 col-sm-6",
      //   delay: "0.9s",
      //   duration: "1.15s",
      //   link:"https://prade.in/"
      // },
      // {
      //   title: "Filmode Fashon",
      //   image: "/images/services/E-commerce/mockup-1.jpg",
      //   className: "col-lg-6 col-md-6 col-sm-6",
      //   delay: "0.3s",
      //   duration: "1s",
      //   link:"https://filmodefashion.com/"
      // },
    ];
  
    const faqData = [
      {
        id: "faq6",
        question: "1. What is digital marketing?",
        answer:
          " Digital marketing involves promoting products, services, or brands using online platforms such as search engines, social media, email, and websites. It’s a powerful way to reach and engage your target audience.",
      },
      {
        id: "faq7",
        question: "2. Why is digital marketing important for my business? ",
        answer:
          "Digital marketing helps businesses reach a broader audience, increase brand visibility, generate leads, and boost sales. It’s cost-effective and provides measurable results.",
      },
      {
        id: "faq8",
        question: "3. What services do you offer under digital marketing?",
        answer:
          "We offer a comprehensive range of services including:  <br/> <ul class='px-3 mt-2'><li >Search Engine Optimization (SEO)</li> <li >Social Media Marketing (SMM)</li><li >Pay-Per-Click Advertising (PPC)</li><li>Content Marketing </li><li>Email Marketing</li><li>Influencer Marketing</li><li>Web Design & Development</li><li>Analytics & Reporting</li></ul>",
      },
      {
        id: "faq9",
        question: "4. How do I know which digital marketing service is right for my business? ",
        answer:
          "We conduct a detailed analysis of your business, industry, and target audience to recommend a customized digital marketing strategy that aligns with your goals.",
      },
      {
        id: "faq10",
        question: "5. How long will it take to see results?",
        answer:
          "Results vary depending on the service and strategy applied. While paid advertising campaigns may show immediate results, SEO and organic marketing typically take 3 to 6 months to yield noticeable outcomes.",
      },
      {
        id: "faq11",
        question: "6. What platforms do you specialize in?",
        answer:
          "We work on various platforms including Google, Facebook, Instagram, LinkedIn, Twitter, YouTube, and more, ensuring a well-rounded digital presence.",
      },
      {
        id: "faq12",
        question: "7. Can you help with branding and website development?",
        answer:
          "Yes! We offer branding services, website design, and development to create a visually appealing and functional online presence for your business.",
      },
      {
        id: "faq13",
        question: "8. How much does digital marketing cost? ",
        answer:
          "The cost depends on the scope of services, the size of your business, and your goals. We offer flexible packages to suit different budgets.",
      },
      {
        id: "faq14",
        question: "9. How will I track the progress of my digital marketing campaigns?",
        answer:
          "We provide regular reports with key performance indicators (KPIs) and analytics to measure the effectiveness of your campaigns.",
      },
      {
        id: "faq15",
        question: "10. How can I get started?",
        answer:
          "Contact us today for a free consultation. Our team will guide you through the best digital marketing strategies to grow your business!",
      },
    ]

    const Performance={
      head:"High Performance",
      description:"Every Digital Marketing plan includes:",
      cta:"From goal-setting and market analysis to campaign execution and performance tracking, we ensure measurable growth. Enhance Your Digital Presence with Confidence. Connect with us today!",
      guarantee:[
        {
          icon:"ti-ruler-pencil",
          title:" Tailored Strategies:", 
          caption:" Personalized plans aligned with business goals."
        },
        {
          icon:"ti-ruler-pencil",
          title:"Targeted Reach:", 
          caption:" Effective audience engagement through data insights."
        },
        {
          icon:"ti-ruler-pencil",
          title:"Performance Tracking:", 
          caption:"Real-time analytics for measurable growth."
        },
        {
          icon:"ti-ruler-pencil",
          title:"Multi-Channel Approach:", 
          caption:"Integrated campaigns across platforms for maximum impact."
        }
      ],
    
    }
    const Cta={
      title:"Not sure which package is the best for you?",
      description:"Get Expert Guidance on Web Design Packages, schedule a consultation with our experts at Zing Studio and find the perfect solution tailored to your business goals.",
      button:"Book Free Consultation"
    }

  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <HeroSection  option={formOption} bannerContent={bannerContent} offers={offers}/>
        
        <ServiceList data={EcommerceDevelopment} head={"Digital Marketing"} WebDesignfeatures={WebDesignfeatures}/>

       <Guarantee Performance={Performance}/>


        <DigitalFeatures/>

        <ServicePortfolio portfolioItems={portfolioItems} portfolioContent={portfolioContent}/>

        <FAQ faqData={faqData}/>

        
     
        
        <ServicesCta cta={Cta}/>
        <Footer13 />
      </div>
    </>
  );
}
