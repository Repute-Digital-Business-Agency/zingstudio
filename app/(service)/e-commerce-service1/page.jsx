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
            price: "50,000",
            save:"Save 23%",
            strike:"1,919.00",
            condition:" With a 3-yr term. You pay ₹ 53,424.00 today. <br />Renews at  ₹ 69,084.00.",
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
        head:"E-Commerce Development that's fast and reliable.",
      caption:"E-Commerce",
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
    
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <HeroSection head={"E-commerce Development"} option={formOption} bannerContent={bannerContent} offers={offers}/>
        
        <ServiceList data={EcommerceDevelopment} head={"E-commerce Development"} WebDesignfeatures={WebDesignfeatures}/>

        <div className="section-full content-inner bg-white py-0 pb-5">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-lg-11 ">
                
                  <div className="section-content box-sort-in py-5 button-example bg-gray" style={{borderRadius:"10px"}}>
                    <div className="row justify-content-start justify-content-sm-center m-0">
                    <div className="col-lg-3 col-md-4 col-sm-12 px-4 px-sm-3">
                      <h6 className='text-uppercase p-1' style={{background:"#e2110026", display:"inline"}}>High Performance</h6>
                      <h3 className='mt-4 fw-bold'>Every E-Commerce plan includes: 
                      </h3>
                    </div>
                      <div className="col-lg-2 col-md-3 col-sm-12 col-sm-12 px-4 px-sm-3">
                        <div className="icon-bx-wraper" style={{textAlign:"left"}}>
                          <div className="icon-sm text-orange m-b20">
                            <a href="#" className="icon-cell text-orange" >
                              <i className="ti-ruler-pencil" style={{fontSize:"25px" , color:"#1a43bf"}}/>
                            </a>
                          </div>
                          <div className="icon-content">
                            <h5 className="dlab-tilte mb-2 fw-bold" style={{fontSize:"15px " , fontWeight:"500"}}>
                            99.9% uptime guarantee. 
                            </h5>
                            <h5  style={{fontSize:"14px" }}>
                            We guarantee your site’s uptime, so you don’t miss customers.
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-12 col-sm-12 px-4 px-sm-3">
                        <div className="icon-bx-wraper" style={{textAlign:"left"}}>
                          <div className="icon-sm text-orange m-b20">
                            <a href="#" className="icon-cell text-orange" >
                              <i className="ti-ruler-pencil" style={{fontSize:"25px" , color:"#1a43bf"}}/>
                            </a>
                          </div>
                          <div className="icon-content">
                            <h5 className="dlab-tilte mb-2 fw-bold" style={{fontSize:"15px " , fontWeight:"500"}}>
                            99.9% uptime guarantee. 
                            </h5>
                            <h5  style={{fontSize:"14px" }}>
                            We guarantee your site’s uptime, so you don’t miss customers.
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-12 col-sm-12 px-4 px-sm-3">
                        <div className="icon-bx-wraper" style={{textAlign:"left"}}>
                          <div className="icon-sm text-orange m-b20">
                            <a href="#" className="icon-cell text-orange" >
                              <i className="ti-ruler-pencil" style={{fontSize:"25px" , color:"#1a43bf"}}/>
                            </a>
                          </div>
                          <div className="icon-content">
                            <h5 className="dlab-tilte mb-2 fw-bold" style={{fontSize:"15px " , fontWeight:"500"}}>
                            99.9% uptime guarantee. 
                            </h5>
                            <h5  style={{fontSize:"14px" }}>
                            We guarantee your site’s uptime, so you don’t miss customers.
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-12 col-sm-12 px-4 px-sm-3">
                        <div className="icon-bx-wraper" style={{textAlign:"left"}}>
                          <div className="icon-sm text-orange m-b20">
                            <a href="#" className="icon-cell text-orange" >
                              <i className="ti-ruler-pencil" style={{fontSize:"25px" , color:"#1a43bf"}}/>
                            </a>
                          </div>
                          <div className="icon-content">
                            <h5 className="dlab-tilte mb-2 fw-bold" style={{fontSize:"15px " , fontWeight:"500"}}>
                            99.9% uptime guarantee. 
                            </h5>
                            <h5  style={{fontSize:"14px" }}>
                            We guarantee your site’s uptime, so you don’t miss customers.
                            </h5>
                          </div>
                        </div>
                      </div>
                    
                  
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div
          className="section-full content-inner-2 bg-gray wow fadeIn " 
          data-wow-duration="2s"
          data-wow-delay="0.2s"

          >
          <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center service-info">

              <p>
              For ASP.NET apps, we offer Windows VPS plans with Plesk Obsidian. Learn More
              </p>
           
              
              </div>
          </div>
          </div>
          </div>


        <Features/>

        <FAQ faqData={faqData}/>

        
     
        
        <ServiceCta/>
        <Footer13 />
      </div>
    </>
  );
}
