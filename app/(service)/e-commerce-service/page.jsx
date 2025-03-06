import React from "react";

import Header17 from "@/components/headers/Header17";
import Footer13 from "@/components/footers/Footer13";
import HeroSection from "@/components/service/heroSection";
import ServiceList from "@/components/service/serviceList";
import ServiceCta from "@/components/service/ServiceCta";
import Portfolio from "@/components/service/Portfolio";
import Faq from "@/components/faq/Faq3";
import Projects2 from "@/components/homes/home-5/Projects2";
import Cta from "@/components/homes/home-13/Cta";
import OurWorkServices from "@/components/homes/home-5/OurWorksServices";

export const metadata = {
  title: "E-commerce Development || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
    const EcommerceDevelopment = [
       
        {
            head:"E-commerce",
         title:"E-Commerce Web Design",
         price: "25,850",
         list:[
             "Administrator Dashboard",
             "Categories",
             "Secure Online Payment",
             "Product Reviews & Ratings",
             "Email Notifications",
             "Products & Inventory Management",
             "Orders & Shipping Management",
             "Stock,Order & Customer Report"
         ],
           delay:"0.6s"
        },

        {
            head:"E-commerce",
            title:"Saas Platform",
            price: "8750",
            list:[
             "Custom Layout",
             "10 Static Page(HTML/PHP)",
             "Enquiry Form",
             "Free Website Maintenance",
             "Free Images",
             "World Class Design & Approval",
             "User Friendly Design",
             "Responsive Design"   
            ],
              delay:"0.2s"
           },
           {
               head:"E-commerce",
            title:"Open-source Development ",
            price: "8750",
            list:[
                "Administrator Dashboard",
                "Editor Dashboard",
                "20 Page Responsive Website",
                "1 Basic Contact/Enquiry Form",
                "Designs Related to your Industry",
                "Multiple Payment Options",
                "Maintainance",
                "Responsive Design"       
            ],
              delay:"0.4s"
           },
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
      caption:"Scalable solutions to power your online store",
      subTitle:"Custom-built, high-performance e-commerce platforms designed to enhance user experience and maximize sales.",
      list:[
        "Secure, fast and fully optimized online stores for seamless shopping experiences.",
        "Customizable e-commerce solutions, from simple storefronts to advanced CMS-based platforms.",
        "Expertise in building user-friendly, mobile-responsive, and conversion-focused e-commerce websites."
      ],
        formTitle:"Build. Scale. Succeed. ",
      formCaption:"From powerful e-commerce platforms to smart SaaS solutions and flexible open-source development, we’ve got the tools to fuel digital growth. Let’s create something extraordinary—connect now! "
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
    
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <HeroSection head={"E-commerce Development"} option={formOption} bannerContent={bannerContent}/>
        <ServiceList data={EcommerceDevelopment} head={"E-commerce Development"}/>
        <ServiceCta/>
        {/* <Portfolio/> */}
        <OurWorkServices portfolioItems={portfolioItems} portfolioContent={portfolioContent}/>
        {/* <Faq/> */}
        <Cta />
        <Footer13 />
      </div>
    </>
  );
}
