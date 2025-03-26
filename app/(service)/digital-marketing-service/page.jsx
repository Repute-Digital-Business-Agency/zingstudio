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
        head:"Digital Marketing Development that's fast and reliable.",
      caption:"Digital Marketing",
      subTitle:"From personal sites to high-performance sites, get hosting you can trust.",
      description:"Our Web Hosting experts are happy to help you.",
      rating:"4.6 out of 5 stars ",
      
        icon:[
          <i className="ti-time " />,
          <i className="ti-time " />,
          <i className="ti-time " />
        ],
        list:[
            "99.9% uptime — guaranteed.",
        "Free SSL certificate for all your sites. ",
        "Optimized high-performance hosting. "
        ],
      
        formTitle:"Build. Scale. Succeed. ",
      formCaption:"From powerful e-commerce platforms to smart SaaS solutions and flexible open-source development, we’ve got the tools to fuel digital growth. Let’s create something extraordinary—connect now! "
    }
    const offers={
      head:"Special offer for new customers.",
      caption:"Pay only ₹199.00 /mo (1-year term) for a Web Hosting Economy plan. ",
      code:"Promo code: HOSTING25"
}

    const portfolioContent ={
     description: "Discover a portfolio of e-commerce projects engineered for optimal user experiences, secure transactions, and scalable growth. Each solution is tailored to enhance customer engagement, drive sales, and support sustained digital success."
    }
    const portfolioItems = [
      {
        title: "Filmode Fashon",
        image: "/images/services/E-commerce/mockup-1.jpg",
        className: "col-lg-6 col-md-6 col-sm-6",
        delay: "0.3s",
        duration: "1s",
        link:"https://filmodefashion.com/"
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
      {
        title: "Rhythm Fashion",
        image: "/images/services/E-commerce/mockup-5.jpg",
        className: "col-lg-3 col-md-3 col-sm-6",
        delay: "0.6s",
        duration: "1.12s",
        link:"https://rhythmfashion.com/"
      },
      {
        title: "Prade Jewels",
        image: "/images/services/E-commerce/mockup-6.jpg",
        className: "col-lg-6 col-md-6 col-sm-6",
        delay: "0.9s",
        duration: "1.15s",
        link:"https://prade.in/"
      },
    ];
  
    const faqData = [
      {
        id: "faq6",
        question: "1. Lorem ipsum dolor sit, amet consectetur adipisicing elit.?",
        answer:
          "The course is ideal for students, marketing professionals, entrepreneurs, and anyone interested in mastering digital marketing skills.",
      },
      {
        id: "faq7",
        question: "2.Lorem ipsum dolor sit, amet consectetur adipisicing elit.?",
        answer:
          "The curriculum includes SEO, SEM, social media marketing, content marketing, email marketing, analytics, and paid advertising strategies.",
      },
      {
        id: "faq8",
        question: "3. Lorem ipsum dolor sit, amet consectetur adipisicing elit.?",
        answer:
          "No prior experience is required. The course is designed for beginners as well as professionals looking to enhance their skills.",
      },
      {
        id: "faq9",
        question: "4. Lorem ipsum dolor sit, amet consectetur adipisicing elit.?",
        answer:
          "Yes. The course offers live projects and real-world case studies to ensure practical learning and application of strategies.",
      },
      {
        id: "faq10",
        question: "5. Lorem ipsum dolor sit, amet consectetur adipisicing elit.?",
        answer:
          "Yes. Participants will receive a certification upon successfully completing the course, validating their digital marketing expertise.",
      },
      {
        id: "faq11",
        question: "6. Lorem ipsum dolor sit, amet consectetur adipisicing elit.?",
        answer:
          "Graduates can pursue roles such as digital marketing strategist, SEO specialist, social media manager, content marketer, and more.",
      },
      {
        id: "faq12",
        question: "7. Lorem ipsum dolor sit, amet consectetur adipisicing elit.?",
        answer:
          "The course duration typically ranges from 8 to 12 weeks, depending on the learning mode (full-time or part-time).",
      },
      {
        id: "faq13",
        question: "8. Lorem ipsum dolor sit, amet consectetur adipisicing elit.?",
        answer:
          "Yes. Participants will receive a certification upon successfully completing the course, validating their digital marketing expertise.",
      },
    ]

    const Performance={
      head:"High Performance",
      description:"Every Digital Marketing plan includes:",
      cta:"For ASP.NET apps, we offer Windows VPS plans with Plesk Obsidian.",
      guarantee:[
        {
          icon:"ti-ruler-pencil",
          title:" 99.9% uptime guarantee.", 
          caption:" We guarantee your site’s uptime, so you don’t miss customers."
        },
        {
          icon:"ti-ruler-pencil",
          title:" 99.9% uptime guarantee.", 
          caption:" We guarantee your site’s uptime, so you don’t miss customers."
        },
        {
          icon:"ti-ruler-pencil",
          title:" 99.9% uptime guarantee.", 
          caption:" We guarantee your site’s uptime, so you don’t miss customers."
        },
        {
          icon:"ti-ruler-pencil",
          title:" 99.9% uptime guarantee.", 
          caption:" We guarantee your site’s uptime, so you don’t miss customers."
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

        <FAQ faqData={faqData}/>

        
     
        
        <ServicesCta cta={Cta}/>
        <Footer13 />
      </div>
    </>
  );
}
