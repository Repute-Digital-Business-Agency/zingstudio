"use client";
import { useState, useRef, useEffect } from "react";
import Card from "./ServiceCardAnimation";
import ServiceStaticCard from "./ServiceStaticCard";

// const projects = [
//   {
//     id: 1,
//     price:"45,000",
//     title: "Static Site",
//     list:[
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//     ],
//     description:
//       "At Zing Studio we design websites with your customer in mind, because modern web design is more than just about creating a visually stunning site.",
//     src: "images/Home-Page/web-design.jpg",
//     link: "/web-design",
//     color: " #1a43bf",
//     animation_delay: "0.3s",
//   },
//   {
//     id: 2,
//     title: "E-Commerce",
//     list:[
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//     ],
//     description:
//       "The modern consumer of today looks for a simple and intuitive online shopping experience that responds to their needs. At Zing Studio, our dynamic team...",
//     price: "85,000",
//     src: "images/Home-Page/ecommerce.jpg",
//     link: "/e-commerce",
//     color: " #1a43bf",
//     animation_delay: "0.6s",
//   },
//   {
//     id: 3,
//     title: "Digital Marketing",
//     list:[
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//     ],
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since...",
//     price: "65,000",
//     src: "images/Home-Page/digital-marketing.jpg",
//     link: "/digital-marketing",
//     color: " #1a43bf",
//     animation_delay: "0.9s",
//   },
//   {
//     id: 4,
//     title: "E-Commerce Management",
//     list:[
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//       "Lorem ipsum dolor ",
//     ],
//     description:
//       "It can be overwhelming for most businesses to manage inventory, process orders and address customer queries. At Zing Studio, we provide simplified...",
//     price: "75,000",
//     src: "images/Home-Page/ecommerce-managment.jpg",
//     link: "/e-commerce-management",
//     color: " #1a43bf",
//     animation_delay: "0.12s",
//   },
// ];

const projects = [
  {
    id: 1,
    service_name: "Web Development",
    service: [
      {
        id: 1,
        price: "8750",
        title: "Static Websites",
        list: [
          "1 Home Page Design",
          "Upto 10 Inner Page Design",
          "HTML5 / CSS3 Compatible for Mobiles",
          "JQUERY Banner Slider",
        ],
        link: "/web-design-service",
        buyNowLink:"/contact",
        color: "#1a43bf",
        animation_delay: "0.12s",
        description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
      },
      {
        id: 2,
        price: "8750",
        title: "Web Design",
        list: [
          "Administrator Dashboard",
             "Editor Dashboard",
             "20 Page Responsive Website",
             "1 Basic Contact/Enquiry Form"
        ],
        link: "/web-design-service",
        src: "images/Home-Page/web-design.jpg",
        buyNowLink:"/contact",
        color: "#1a43bf",
        animation_delay: "0.12s",
         description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
      },
      {
        id: 3,
        price: "25,850",
        title: "CMS Websites",
        list: [
       
             "1 Home Page Design",
             "Upto 15 Inner Pages",
               "HTML5 / CSS3 Compatible for Mobiles",
             "CMS (Manage Website content)"
        ],
        link: "/web-design-service",
        buyNowLink:"/contact",
        color: "#1a43bf",
        animation_delay: "0.12s",
         description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
      },
    ],
  },
  {
    id: 2,
    service_name: "E-Commerce Websites",
    service: [
      {
        id: 1,
        price: "10,000",
        title: "Basic",
        list: [
          "1 Home Page Design",
          "Upto 5 Inner Pages",
          "Upto 15 Products Pages",
          "Categories",
        ],
        link: "/web-design-service",
        buyNowLink:"/contact",
        color: "#1a43bf",
        animation_delay: "0.12s",
         description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
      },
      {
        id: 2,
        price: "20,000",
        title: "E-Commerce Websites",
        list: [
          "Inventory management",
          "Competitor Analysis - 3 Competitor",
          "Keyphrase Optimization - 15 Pages",
          "Link Building - 50-60",
        ],
        link: "/digital-marketing-service",
        src: "images/Home-Page/ecommerce.jpg",
        buyNowLink:"/contact",
        color: "#1a43bf",
        animation_delay: "0.12s",
         description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
      },
      {
        id: 2,
        price: "20,000",
        title: "Standard",
        list: [
          "Inventory management",
          "CMS (Manage Website content)",
          "HTML5 / CSS3 Compatible for Mobiles",
          "General Features With Modern Look",
        ],
        link: "/digital-marketing-service",
        buyNowLink:"/contact",
        color: "#1a43bf",
        animation_delay: "0.12s",
         description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
      },
    ],
  },
  {
    id: 3,
    service_name: "Digital Marketing",
    service: [
      {
        id: 1,
        price: "25,999",
        title: "Basic",
        list: [
          " On-Page Optimization - Up to 10 Pages",
          "Competitor Analysis - 1 Competitor",
          " Keyword Research and Analysis",
          "Keyphrase Optimization - 10 Pages"
        ],
        link: "/digital-marketing-service",
        buyNowLink:"/contact",
        color: "#1a43bf",
        animation_delay: "0.12s",
         description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
      },
      {
        id: 2,
        price: "35000",
        title: "Digital Marketing",
        list: [
          " On-Page Optimization - Up to 10 Pages",
          "Competitor Analysis - 1 Competitor",
          " Keyword Research and Analysis",
          "Keyphrase Optimization - 10 Pages",
        ],
        link: "/digital-marketing-service",
        src: "images/Home-Page/digital-marketing.jpg",
        buyNowLink:"/contact",
        color: "#1a43bf",
        animation_delay: "0.12s",
         description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
      },
      {
        id: 3,
        price: "35,000",
        title: "Standard",
        list: [
          "On-Page Optimization - Up to 15 Pages",
          " Competitor Analysis - 3 Competitor",
          "Keyword Research and Analysis",
          "Keyphrase Optimization - 15 Pages",
        ],
        link: "/academy-service",
        buyNowLink:"/contact",
        color: "#1a43bf",
        animation_delay: "0.12s",
         description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
      },
    ],
  },
  // {
  //   id: 4,
  //   service_name: "Mobile Development",
  //   service: [
  //     {
  //       id: 1,
  //       price: "45,000",
  //       title: "iOS application - Mobile Development",
  //       list: [
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //       ],
  //       link: "/web-design",
  //       color: "#1a43bf",
  //       animation_delay: "0.12s",
  //        description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
  //     },
  //     {
  //       id: 2,
  //       price: "50,000",
  //       title: "Android application - Mobile Development",
  //       list: [
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //       ],
  //       link: "/web-design",
  //       color: "#1a43bf",
  //       animation_delay: "0.12s",
  //        description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
  //     },
  //     {
  //       id: 3,
  //       price: "25,000",
  //       title: "React Native applications - Mobile Development",
  //       list: [
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //       ],
  //       link: "/web-design",
  //       color: "#1a43bf",
  //       animation_delay: "0.12s",
  //        description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   service_name: "Integrated Branding Solutions",
  //   service: [
  //     {
  //       id: 1,
  //       price: "45,000",
  //       title: "Brand Identity -Integrated Branding Solutions",
  //       list: [
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //       ],
  //       link: "/web-design",
  //       color: "#1a43bf",
  //       animation_delay: "0.12s",
  //        description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
  //     },
  //     {
  //       id: 2,
  //       price: "50,000",
  //       title: "CRM Implementation - Integrated Branding Solutions",
  //       list: [
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //       ],
  //       link: "/web-design",
  //       color: "#1a43bf",
  //       animation_delay: "0.12s",
  //        description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
  //     },
  //     {
  //       id: 3,
  //       price: "25,000",
  //       title: "Brand Promotion Concepts - Integrated Branding Solutions",
  //       list: [
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //         "Lorem ipsum dolor sit amet",
  //       ],
  //       link: "/web-design",
  //       color: "#1a43bf",
  //       animation_delay: "0.12s",
  //        description:"Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua"
  //     },
  //   ],
  // },
  
];


export default function HomeServiceStatic() {
  const [activeCard, setActiveCard] = useState(null);
  const cardRefs = useRef([]);

  // Create the IntersectionObserver to detect when each card enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the card ID from the data-id attribute of the element
            setActiveCard(entry.target.getAttribute("data-id"));
          }
        });
      },
      {
        threshold: 0.5, // Trigger when at least 50% of the card is in view
      }
    );

    cardRefs.current.forEach((card) => {
      observer.observe(card); // Observe each card element
    });

    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);
  const groupedSlides = projects.flatMap((project) =>
    project.service.map((service) => ({ ...service, group: project.service_name }))
  );
  

  return (
    <div className="staticservice" style={{ backgroundImage: "url(/images/elementbg/our-services-bg-element.png)", backgroundRepeat: "no-repeat" }}>
      {" "}
      <div className="section-head style2 text-center pt-5 mb-3 homeservice-static wow fadeInUp" data-wow-delay="0.6s" >
        <h2 className="title m-b10">Our Services</h2>
        <p>
        Zing Studio offers comprehensive branding solutions, including web design, digital marketing, and brand identity development. We combine creativity with strategy to deliver impactful, cost-effective solutions that help businesses grow. Explore our services to see how we can elevate your brand.

        </p>
      </div>
      <main className="main ">
        {" "}
        <div className="container-fluid">
      
          <div className="row">
            <div className="col-11 col-xl-10 mx-auto ">
            
                <ServiceStaticCard
                
                activeCard={activeCard}
                data={projects}
                
              />
           
            </div>
          </div>
        </div>
      


       
      </main>
    </div>
  );
}
