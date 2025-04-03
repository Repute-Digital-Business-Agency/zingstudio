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
import WebFeatures from "@/components/service/e-commerceService1/WebFeatures";
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
            head:"Web Design",
         title:"Static Web Design",
         price: "15,000",
         save:"Save 22%",
         strike:"1,919.00",
         condition:" With a 3-yr term. You pay ₹ 53,424.00 today. <br />Renews at  ₹ 69,084.00.",
         
         

        list: [
          { icon: "ti-world", text: "Custom Layout" },
          { icon: "ti-server", text: "10 Static Page(HTML/PHP)" },
          { icon: "ti-time", text:  "Enquiry Form"},
          { icon: "ti-dashboard", text: "Free Website Maintenance"},
          { icon: "ti-lock", text: "Free Images" },
          { icon: "ti-gift", text:   "World Class Design & Approval" },
          { icon: "ti-shield", text: "User Friendly Design"},
          { icon: "ti-reload", text: "Responsive Design" }
        ],
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
           delay:"0.6s"
        },
        

        {
            head:"Web Design",
            title:"CMS Web Design",
            price: "30,000",
            save:"Save 23%",
            strike:"1,919.00",
            condition:" With a 3-yr term. You pay ₹ 53,424.00 today. <br />Renews at  ₹ 69,084.00.",
            
            list: [
              { icon: "ti-world", text: "Administrator Dashboard" },
              { icon: "ti-server", text:  "Categories" },
              { icon: "ti-time", text: "Secure Online Payment" },
              { icon: "ti-panel", text: "Product Reviews & Ratings" },
              { icon: "ti-dashboard", text: "Email Notifications" },
              { icon: "ti-lock", text: "Products & Inventory Management" },
              { icon: "ti-gift", text: "Orders & Shipping Management" },
              { icon: "ti-shield", text: "Stock,Order & Customer Report" },
              
            ],
              delay:"0.2s"
           },

         
          
     ]

    

    const formOption  =[
      "E-Commerce",
      "SaaS Platform",
      "Open-Source Development"
    ]
    const bannerContent = {
      // src:"https://img1.wsimg.com/cdnassets/transform/c50e55dd-152b-45c6-815a-f7164b2a87aa/FOSMO-98392-WH-SLP-New-Marquee-Image-without-cPanel",
      src:"/images/services/web-deisgn/web-design-banner.png",
        head:"Craft Stunning Websites that Captivate, Engage, and Convert with our Web Designing Expertise!",
      caption:"Web Design",
      subTitle:"Designing Websites that Work, Impress, and Convert!",
      description:"Let our Web Design experts bring your vision to life!",
      rating:"4.6 out of 5 stars ",
      
        icon:[
          <i className="ti-time " />,
          <i className="ti-time " />,
          <i className="ti-time " />
        ],
        list:[
            "User-Centric Design",
        "Responsive & Mobile-Friendly",
        "SEO-Optimized for Visibility"
        ],
      
        formTitle:"Build. Scale. Succeed. ",
      formCaption:"From powerful e-commerce platforms to smart SaaS solutions and flexible open-source development, we’ve got the tools to fuel digital growth. Let’s create something extraordinary—connect now! ",
      about:"Create stunning, user-friendly websites that captivate and convert. Our web design solutions combine creativity with functionality, ensuring a seamless user experience across all devices. Let us build a digital presence that leaves a lasting impression."
    }
    const offers={
      head:"Transform Your Online Presence with Expert Web Design.",
      caption:"Create stunning, user-friendly websites that captivate and convert. Our web design solutions combine creativity with functionality, ensuring a seamless user experience across all devices. Let us build a digital presence that leaves a lasting impression.",
      code:"Promo code: HOSTING25"
}

    const portfolioContent ={
     description: "Check out our lineup of stunning websites that pop, perform, and leave a mark! At Zing Studio, we blend bold designs with smooth vibes to craft digital spaces that turn clicks into customers. From trendy business sites to vibrant online stores, our creations are all about making your brand shine."
    }
    const portfolioItems = [
      {
        title: "GMAK Fiber Laser",
        image: "/images/services/web-deisgn/mockup-1.jpg",
        className: "col-lg-3 col-md-3 col-sm-6",
        delay: "0.3s",
        duration: "1s",
        link:"https://gmaklaser.com/"
      },
      {
        title: "SKD Finedecor",
        image: "/images/services/web-deisgn/mockup-2.jpg",
        className: "col-lg-3 col-md-3 col-sm-6",
        delay: "0.6s",
        duration: "1.3s",
        link:"https://skdfinedecor.com/"
      },
      {
        title: "NVM Lifestyle Clinic",
        image: "/images/services/web-deisgn/mockup-3.jpg",
        className: "col-lg-3 col-md-3 col-sm-6",
        delay: "0.9s",
        duration: "1.6s",
        link:"https://nvmlifestyleclinic.com/"
      },
      {
        title: "GSpace Interior",
        image: "/images/services/web-deisgn/mockup-4.jpg",
        className: "col-lg-3 col-md-3 col-sm-6",
        delay: "0.3s",
        duration: "1.9s",
        link:"https://www.gspaceinterior.com/"
      },
      // {
      //   title: "Rhythm Fashion",
      //   image: "/images/services/E-commerce/mockup-5.jpg",
      //   className: "col-lg-3 col-md-3 col-sm-6",
      //   delay: "0.6s",
      //   duration: "1.12s",
      //   link:"https://rhythmfashion.com/"
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
        question: "1. What is the typical timeline for a web design project?",
        answer:
          "The timeline varies depending on the complexity and requirements of the project. On average, it takes 4 to 8 weeks to complete a standard website.",
      },
      {
        id: "faq7",
        question: "2. How involved will I be in the design process?",
        answer:
          "We encourage collaboration and will involve you at every major milestone, from concept approval to design review and final testing.",
      },
      {
        id: "faq8",
        question: "3. Will my website be mobile-friendly?",
        answer:
          "Absolutely! All our designs are responsive and optimized to work seamlessly across all devices, including smartphones and tablets.",
      },
      {
        id: "faq9",
        question: "4. Can I request changes once the design is complete?",
        answer:
          "Yes, we offer revision rounds during the design phase to ensure your satisfaction before proceeding to development.",
      },
      {
        id: "faq10",
        question: "5. Do you provide content for the website?",
        answer:
          "We can assist with content creation or work with the content you provide. Our team also offers copywriting services if needed.",
      },
      {
        id: "faq11",
        question: "6. What platforms do you use for website development?",
        answer:
          "We work with a variety of platforms like WordPress, Shopify, and custom solutions depending on your needs.",
      },
      {
        id: "faq12",
        question: "7. Do you offer website maintenance and support?",
        answer:
          "Yes, we provide ongoing maintenance packages to keep your website updated, secure, and performing at its best.",
      },
      {
        id: "faq13",
        question: "8. Will my website be SEO-friendly?",
        answer:
          "Definitely! We follow best practices for SEO during the design and development stages to enhance your website’s visibility.",
      },
      {
        id: "faq14",
        question: "9. How much will the web design project cost?",
        answer:
          "The cost depends on the features and complexity of the website. We offer customized quotes based on your requirements.",
      },
      {
        id: "faq15",
        question: "10. How do I get started?",
        answer:
          "Simply contact us to schedule a consultation. We’ll discuss your vision, goals, and how we can bring your website to life!",
      },
    ]

    const Performance={
      head:"Design Excellence",
      description:"Every Web Design plan includes:",
      cta:"From understanding brand goals to delivering a responsive, user-friendly website, we ensure every step drives engagement and results. <br/>From Vision to Website — See the Magic of Our Design Process!",
      guarantee:[
        {
          icon:"/images/services/web-deisgn/responsive-design-icon.png",
          title:" Responsive Design:", 
          caption:"Seamless experience across all devices."
        },
        {
          icon:"/images/services/web-deisgn/user-centric-interface-icon.png",
          title:" User-Centric Interface:", 
          caption:"Engaging, intuitive, and easy to navigate."
        },
        {
          icon:"/images/services/web-deisgn/seo-optimized-icon.png",
          title:"SEO-Optimized:", 
          caption:"Designed to rank higher on search engines."
        },
        {
          icon:"/images/services/web-deisgn/custom-solution-icon.png",
          title:"Custom Solutions:", 
          caption:" Tailored to reflect brand identity and goals."
        }
      ],
    
    }
    const Cta={
      title:"Not sure which package is the best for you?",
      description:"Get Expert Guidance on Web Design Packages, schedule a consultation with our experts at Zing Studio and find the perfect solution tailored to your business goals.",
      button:"Book Free Consultation"
    }

    const features = {
      title:"Web design process for delivering exceptional websites:",
      description:"You get speedier page-load times, tools to help grow your business, and essential security measures to build trust and help protect user data. Plus, you get peace of mind with a money-back guarantee.",
      subTitle:"Design. Develop. Deliver.",
      feature:[
        {
          title:"Discovery & Planning",
          caption:"Understanding goals, audience, and brand identity to create a tailored strategy.",
          src:"/images/brand-buzz/Colored-icons/colored-icon-01.png"
        },
        {
          title:"Wireframing & Prototyping",
          caption:"Designing a visual blueprint for seamless navigation and user experience.",
          src:"/images/brand-buzz/Colored-icons/colored-icon-02.png"
        },
        {
          title:"Design Creation",
          caption:"Crafting visually engaging and brand-aligned designs using the latest design principles.",
          src:"/images/brand-buzz/Colored-icons/colored-icon-03.png"
        },
        {
          title:"Development",
          caption:"Converting designs into responsive, functional websites with clean and efficient code.",
          src:"/images/brand-buzz/Colored-icons/colored-icon-04.png"
        },{
          title:"Testing & Optimization",
          caption:"Conducting thorough testing for usability, compatibility, and performance across devices.",
          src:"/images/brand-buzz/Colored-icons/colored-icon-05.png"
        },{
          title:"Launch & Maintenance",
          caption:"Deploying the website and providing continuous support for updates and improvements.",
          src:"/images/brand-buzz/Colored-icons/colored-icon-06.png"
        }
      ]
    }
    
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <HeroSection  option={formOption} bannerContent={bannerContent} offers={offers}/>
        
        <ServiceList data={EcommerceDevelopment} head={"Web Design Development"} WebDesignfeatures={WebDesignfeatures}/>

       <Guarantee Performance={Performance}/>


        {/* <WebFeatures/> */}

        <Features features={features}/>
      


        <ServicePortfolio portfolioItems={portfolioItems} portfolioContent={portfolioContent}/>

        <FAQ faqData={faqData}/>

        
     
        
        <ServicesCta cta={Cta}/>
        <Footer13 />
      </div>
    </>
  );
}
