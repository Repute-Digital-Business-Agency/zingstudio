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
  title: "Web Design || Zing Studio",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
    const WebDevelopment = [
        {
         head:"Web Design",
         title:"Static Web Design",
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
            head:"Web Design",
         title:"Dynamic Web Design",
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
        {
            head:"Web Design",
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
     ]

    // const heroContent= [
    //   {
    //     head:"Web Design",
        
    //   }
    // ]   

    const formOption  =[
      "Static Site",
      "Dynamic Site",
      "E-Commerce Site"
    ]
    const bannerContent = {
      caption:"High-performance website to strengthen your digital presence.",
      subTitle:"Custom and scalable web development solutions designed to enhance user experience and drive business growth.",
      list:[
        "Navigable and functional websites, optimized to deliver desired results for your business.",
        "A visually appealing, functional and conversion-focused website.",
        "Custom-built static or dynamic CMS solutions tailored to your business needs."
      ]
    }

    const portfolioContent ={
     description: "Check out our lineup of stunning websites that pop, perform, and leave a mark! At Zing Studio, we blend bold designs with smooth vibes to craft digital spaces that turn clicks into customers. From trendy business sites to vibrant online stores, our creations are all about making your brand shine."
    }
    const portfolioItems = [
      {
        title: "Prade Jewels",
        image: "/images/services/web-deisgn/mockup-1.jpg",
        className: "col-lg-6 col-md-6 col-sm-6",
        delay: "0.3s",
        duration: "1s",
      },
      {
        title: "KPRMill",
        image: "/images/services/web-deisgn/mockup-2.jpg",
        className: "col-lg-3 col-md-3 col-sm-6",
        delay: "0.6s",
        duration: "1.3s",
      },
      {
        title: "OMI Pumps",
        image: "/images/services/web-deisgn/mockup-3.jpg",
        className: "col-lg-3 col-md-3 col-sm-6",
        delay: "0.9s",
        duration: "1.6s",
      },
      {
        title: "Tirumalai Textiles",
        image: "/images/services/web-deisgn/mockup-4.jpg",
        className: "col-lg-3 col-md-3 col-sm-6",
        delay: "0.3s",
        duration: "1.9s",
      },
      {
        title: "Karpagam College of Engineering",
        image: "/images/services/web-deisgn/mockup-5.jpg",
        className: "col-lg-3 col-md-3 col-sm-6",
        delay: "0.6s",
        duration: "1.12s",
      },
      {
        title: "Filmode Fashions",
        image: "/images/services/web-deisgn/mockup-6.jpg",
        className: "col-lg-6 col-md-6 col-sm-6",
        delay: "0.9s",
        duration: "1.15s",
      },
    ];
    
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <HeroSection head={"Web Design"} option={formOption} bannerContent={bannerContent}/>
        <ServiceList data={WebDevelopment} head={"Web Design"}/>
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
