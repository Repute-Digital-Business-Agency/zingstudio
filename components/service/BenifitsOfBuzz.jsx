import { foodItems } from "@/data/foodItems";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function BenifitsOfBuzz() {
   const foodItems = [
    {
       imgSrc: "/images/Influence-Buzz/Why-join-Zingluence/icon-1.png",
      title: "Brand Collaborations",
      description:
        "Partner with reputable brands that align with your values, enhancing your credibility and audience engagement.",
      classes: "col-lg-3 col-md-6 col-sm-6 m-b30 wow bounceInLeft",
      dataWowDuration: "2s",
      dataWowDelay: "0.3s",
      bgColor:"#e9e9e9"
    },
    {
      imgSrc: "/images/Influence-Buzz/Why-join-Zingluence/icon-2.png",      title: "Exclusive Campaigns",
      description:
        "Access high-profile campaigns, product launches, and partnerships tailored to showcase your unique voice and expertise.",
      classes: "col-lg-3 col-md-6 col-sm-6 m-b30 wow bounceInUp",
      dataWowDuration: "2s",
      dataWowDelay: "0.3s",
      bgColor:"#1a43bf42"
    },
    {
      imgSrc: "/images/Influence-Buzz/Why-join-Zingluence/icon-3.png",      title: "Monetize Your Influence",
      description:
        "Leverage your platform through paid collaborations, sponsorships, and long-term brand partnerships, turning your influence into sustainable income.",
      classes: "col-lg-3 col-md-6 col-sm-6 m-b30 wow bounceInDown",
      dataWowDuration: "2s",
      dataWowDelay: "0.3s",
      bgColor:"#fff36330"
    },
    {
      imgSrc: "/images/Influence-Buzz/Why-join-Zingluence/icon-4.png",      title: "Expand Your Reach",
      description:
        "Grow your audience through strategic partnerships and campaigns designed to connect you with new, relevant followers.",
      classes: "col-lg-3 col-md-6 col-sm-6 m-b30 wow bounceInRight ",
      dataWowDuration: "2s",
      dataWowDelay: "0.3s",
      bgColor:"#e2110026"
    },
    {
      imgSrc: "/images/Influence-Buzz/Why-join-Zingluence/icon-5.png",      title: "Creative Freedom",
      description:
        "Maintain your authentic voice with the freedom to create content that reflects your style, supported by strategic guidance when needed.",
      classes: "col-lg-3 col-md-6 col-sm-6 m-b30 wow bounceInRight ",
      dataWowDuration: "2s",
      dataWowDelay: "0.3s",
      bgColor:"#e2110026"
    },
    {
      imgSrc: "/images/Influence-Buzz/Why-join-Zingluence/icon-6.png",      title: "Insightful Analytics",
      description:
        "Receive detailed performance analytics to measure campaign success, optimize content strategy, and strengthen your influence.",
      classes: "col-lg-3 col-md-6 col-sm-6 m-b30 wow bounceInLeft",
      dataWowDuration: "2s",
      dataWowDelay: "0.3s",
      bgColor:"#e9e9e9"
    },
   
  ];
  return (
    <div className="section-full bg-white content-inner">
      <div className="container-fluid">
        <div className="col-10 m-auto" >
        <div className="row m-auto justify-content-center">
            <div className="section-head text-center ">
            <h2 className="title mb-5" >Why join Zingluence Buzz ?</h2>
            {/* <p style={{color:"#282222"}}>Amplifying Brands with Influence and Prestige
            </p> */}
            </div>
           
          {foodItems.map((item, index) => (
            <div
              key={index}
              className={item.classes}
              data-wow-duration={item.dataWowDuration}
              data-wow-delay={item.dataWowDelay}
            >
              <div className="icon-bx-wraper sr-iconbox1 bg-gray h-100" style={{background:item.bgColor}}>
                <div className="icon-lg m-b20 icon-up">
                  <a className="icon-cell">
                    <Image
                      src={item.imgSrc}
                      width={70}
                      height={70}
                      alt={item.title}
                    />
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-tilte">{item.title}</h4>
                  <p style={{color:"#282222"}}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center">
          <a href="/contact" className="site-button btnhover13 primary align-self-center outline ms-auto outline-2 wow fadeInLeft"
              data-wow-delay="0.8s" >
           Enquiry Now
              
            </a>
          </div>


        </div>
        </div>
      
      </div>
    </div>
  );
}
