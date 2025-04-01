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
import Features from "@/components/service/e-commerceService1/Features";
import FAQ from "@/components/service/FAQ";
import Guarantee from "@/components/service/e-commerceService1/Guarantee";
import EComFeatures from "@/components/service/e-commerceService1/EComFeatures";
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
            head:"E-commerce",
         title:"E-Commerce Web Design",
         price: "50,000",
         save:"Save 22%",
         strike:"1,919.00",
         condition:" With a 3-yr term. You pay ₹ 53,424.00 today. <br />Renews at  ₹ 69,084.00.",
         
        //  list:[
        //      "Administrator Dashboard",
        //      "Categories",
        //      "Secure Online Payment",
        //      "Product Reviews & Ratings",
        //      "Email Notifications",
        //      "Products & Inventory Management",
        //      "Orders & Shipping Management",
        //      "Stock,Order & Customer Report"
        //  ],
        list:[
          
            { icon: "ti-world", text: "50 websites" },
            { icon: "ti-server", text: "Unlimited databases" },
            { icon: "ti-time", text: "100 GB NVMe storage" },
            { icon: "ti-panel", text: "cPanel control panel" },
            { icon: "ti-dashboard", text: "4 GB RAM, 2 vCPUs" },
            { icon: "ti-lock", text: "Free dedicated IP" },
            { icon: "ti-gift", text: "Free domain" },
            { icon: "ti-shield", text: "Free, unlimited SSL for all your websites" },
            { icon: "ti-reload", text: "30-day, money-back guarantee" },
          
        ],
           delay:"0.6s"
        },
        

        {
            head:"E-commerce",
            title:"Saas Platform",
            price: "50,000",
            save:"Save 23%",
            strike:"1,919.00",
            condition:" With a 3-yr term. You pay ₹ 53,424.00 today. <br />Renews at  ₹ 69,084.00.",
            // list:[
            //  "Custom Layout",
            //  "10 Static Page(HTML/PHP)",
            //  "Enquiry Form",
            //  "Free Website Maintenance",
            //  "Free Images",
            //  "World Class Design & Approval",
            //  "User Friendly Design",
            //  "Responsive Design"   
            // ],
            list:[
              { icon: "ti-world", text: "50 websites" },
              { icon: "ti-server", text: "Unlimited databases" },
              { icon: "ti-time", text: "100 GB NVMe storage" },
              { icon: "ti-panel", text: "cPanel control panel" },
              { icon: "ti-dashboard", text: "4 GB RAM, 2 vCPUs" },
              { icon: "ti-lock", text: "Free dedicated IP" },
              { icon: "ti-gift", text: "Free domain" },
              { icon: "ti-shield", text: "Free, unlimited SSL for all your websites" },
              { icon: "ti-reload", text: "30-day, money-back guarantee" },
            ],
              delay:"0.2s"
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
      src:"/images/services/E-commerce/banner.jpg",
        head:"Scalable and Seamless E-Commerce Solutions for Business Growth.",
      caption:"E-Commerce",
      subTitle:"Custom E-Commerce solutions for smooth operations, better user experiences, and faster growth.",
      description:"Our Web Development experts are ready to assist you!",
      rating:"4.6 out of 5 stars ",
      
        icon:[
          <i className="ti-time " />,
          <i className="ti-time " />,
          <i className="ti-time " />
        ],
        list:[
            "Seamless Integration",
        "User-Centric Design ",
        "Scalable Growth "
        ],
      
        formTitle:"Build. Scale. Succeed. ",
      formCaption:"From powerful e-commerce platforms to smart SaaS solutions and flexible open-source development, we’ve got the tools to fuel digital growth. Let’s create something extraordinary—connect now! ",
       about:"Zing Studio provides comprehensive E-Commerce solutions designed to meet the unique needs of your business. Our platforms offer seamless integration with payment gateways, logistics,and inventory management systems, ensuring operational efficiency. With a focus on user- friendly design, we deliver engaging shopping experiences that drive customer satisfaction and sales. Our scalable solutions adapt to your business growth, while our dedicated support team ensures continuous performance and optimization. Partner with us to build a robust online presence and achieve long-term success."
    }
    const offers={
      head:"Special offer for new customers.",
      caption:"Zing Studio provides comprehensive E-Commerce solutions designed to meet the unique needs of your business. Our platforms offer seamless integration with payment gateways, logistics,and inventory management systems, ensuring operational efficiency. With a focus on user- friendly design, we deliver engaging shopping experiences that drive customer satisfaction and sales. Our scalable solutions adapt to your business growth, while our dedicated support team ensures continuous performance and optimization. Partner with us to build a robust online presence and achieve long-term success. ",
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
      //   title: "Filmode Fashon",
      //   image: "/images/services/E-commerce/mockup-1.jpg",
      //   className: "col-lg-3 col-md-6 col-sm-6",
      //   delay: "0.3s",
      //   duration: "1s",
      //   link:"https://filmodefashion.com/"
      // },
      // {
      //   title: "Prade Jewels",
      //   image: "/images/services/E-commerce/mockup-6.jpg",
      //   className: "col-lg-6 col-md-6 col-sm-6",
      //   delay: "0.9s",
      //   duration: "1.15s",
      //   link:"https://prade.in/"
      // },
    ];
  
    const faqData = [
      {
        id: "faq6",
        question: "1. What types of E-Commerce solutions do you offer?",
        answer:
          "We provide custom E-Commerce development, platform integration, marketplace solutions,and tailored solutions for B2B and B2C businesses.",
      },
      {
        id: "faq7",
        question: "2. Can you integrate third-party tools and payment gateways?",
        answer:
          "Yes, we integrate various payment gateways, CRM, ERP, and third-party tools to streamline operations.",
      },
      {
        id: "faq8",
        question: "3. How do you ensure security for my E-Commerce platform?",
        answer:
          "We implement robust security measures including SSL encryption, secure payment gateways,and regular audits.",
      },
      {
        id: "faq9",
        question: "4. Will my E-Commerce site be mobile-friendly?",
        answer:
          "Absolutely! We ensure responsive designs that provide a seamless experience across all devices.",
      },
      {
        id: "faq10",
        question: "5. Do you offer post-launch support and maintenance?",
        answer:
          "Yes, we offer ongoing support, maintenance, and performance optimization to ensure your platform runs smoothly.",
      },
      {
        id: "faq11",
        question: "6. Can my E-Commerce site be scaled as my business grows?",
        answer:
          "Certainly! Our solutions are designed to be scalable, accommodating your growing business needs.",
      },
      {
        id: "faq12",
        question: "7. How long does it take to develop an E-Commerce website?",
        answer:
          "Timelines vary depending on project complexity, but we provide clear milestones and updates throughout the development process.",
      },
      {
        id: "faq13",
        question: "8. Do you offer SEO and digital marketing support for my E-Commerce site?",
        answer:
          "Yes, we offer SEO, digital marketing, and content management services to help drive traffic and sales.",
      },
    ]
    const Performance={
      head:"Seamless Solutions",
      description:"Every E-Commerce plan includes:",
      cta:"From concept to launch, we transform ideas into high-performing e-commerce platforms. Focused on customization, functionality, and growth, our expert approach ensures success. Launch, Grow, and Succeed Online — Get Started with Us!",
      guarantee:[
        {
          icon:"ti-ruler-pencil",
          title:" Seamless Integration:", 
          caption:"Effortless connectivity with payment gateways, logistics, and third-party tools."
        },
        {
          icon:"ti-ruler-pencil",
          title:" User-Centric Design:", 
          caption:"Intuitive interfaces for enhanced customer experience and engagement."
        },
        {
          icon:"ti-ruler-pencil",
          title:" Scalable Solutions:", 
          caption:"Flexible platforms that grow alongside your business."
        },
        {
          icon:"ti-ruler-pencil",
          title:"Robust Security:", 
          caption:"Advanced security measures to protect customer data and transactions."
        }
      ],
    
    }

    const Cta={
      title:"Not sure which package is the best for you?",
      description:"Get Expert Guidance on E-Commerce Packages, schedule a consultation with our experts at Zing Studio and find the perfect solution tailored to your business goals.",
      button:"Book Free Consultation"
    }

    const features = {
      title:"Smart, secure, and scalable E-Commerce solutions to drive growth",
      description:"Zing Studio delivers customized E-Commerce solutions designed for performance, security, and user engagement. From intuitive design to seamless functionality, we create online stores that enhance customer experience and drive conversions. Partner with us to build a future-ready digital storefront.",
      subTitle:"Smart E-Commerce Solutions",
      feature:[
        {
          title:"Consultation & Planning",
          caption:"Understanding business goals and target audience to create a strategic roadmap.",
          src:"/images/brand-buzz/Colored-icons/colored-icon-01.png"
        },
        {
          title:"Design & Development",
          caption:"Crafting user-friendly, responsive, and visually appealing designs backed by robust development.",
          src:"/images/brand-buzz/Colored-icons/colored-icon-02.png"
        },
        {
          title:"Customization & Integration",
          caption:"Implementing tailored features and integrating essential third-party tools for seamless operations.",
          src:"/images/brand-buzz/Colored-icons/colored-icon-03.png"
        },
        {
          title:"Testing & Quality Assurance",
          caption:"Conducting rigorous testing to ensure a flawless user experience across devices and platforms.",
          src:"/images/brand-buzz/Colored-icons/colored-icon-04.png"
        },{
          title:"Launch & Optimization",
          caption:"Deploying the platform with post-launch support, ensuring performance tracking and continuous improvements.",
          src:"/images/brand-buzz/Colored-icons/colored-icon-05.png"
        },{
          title:"Maintenance & Support",
          caption:"Offering reliable technical assistance, updates, and enhancements to keep the platform at its best.",
          src:"/images/brand-buzz/Colored-icons/colored-icon-06.png"
        }
      ]
    }
    
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <HeroSection  option={formOption} bannerContent={bannerContent} offers={offers}/>
        
        <ServiceList data={EcommerceDevelopment} head={"E-commerce Development"} WebDesignfeatures={WebDesignfeatures}/>

       <Guarantee Performance={Performance}/>


        {/* <EComFeatures/> */}

        <Features features={features}/>

        <ServicePortfolio portfolioItems={portfolioItems} portfolioContent={portfolioContent}/>

        <FAQ faqData={faqData}/>

        
     
        
        <ServicesCta cta={Cta}/>
        <Footer13 />
      </div>
    </>
  );
}
