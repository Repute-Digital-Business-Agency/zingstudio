"use client";

import { services9 } from "@/data/services";
import React, { useRef } from "react";
import Link from "next/link";
export default function HowDoesItWork() {

     const services9 = [
        {
          id: 131,
          No:"1",
          imgSrc: "/images/Influence-Buzz/How-Does-It-Work/icon-1.png",
          iconClass: "ti-user",
          title: "Right Brands",
          description: "We match you with brands that align with your style, values, and audience for authentic collaborations.",
          animation: "fadeInLeft",
          delay: "0.3s",
        },
        {
          id: 132,
          No:"2",
          imgSrc: "/images/Influence-Buzz/How-Does-It-Work/icon-2.png",
          iconClass: "ti-settings",
          title: "Plan & Collaborate",
          description:
            "Work closely with our team to design creative campaigns that highlight your unique voice.",
          delay: "0.3s",
        },
        {
          id: 133,
          No:"3",
          imgSrc: "/images/Influence-Buzz/How-Does-It-Work/icon-3.png",
          iconClass: "ti-support",
          title: "Create & Share",
          description:
            "Bring campaigns to life with engaging content that resonates with your followers across digital platforms.",
          animation: "fadeInDown",
          delay: "0.3s",
        },
        {
            id: 133,
            No:"4",
            imgSrc: "/images/Influence-Buzz/How-Does-It-Work/icon-4.png",
            iconClass: "ti-support",
            title: "Measure & Grow",
            description:
              "Track performance, gain insights, and unlock new opportunities to expand your reach and influence.",
            animation: "fadeInUp",
            delay: "0.3s",
          },
      ];

  const parentRefs = useRef([]);

  const handleHover = (i) => {
    parentRefs.current.forEach((elm) => elm.classList.remove("active"));
    parentRefs.current[i].classList.add("active");
  };
  return (
    <div
      className="section-full content-inner bg-gray scrollSpySection HowDoesItWork"
      id="about"
    >
      <div className="container">
        <div className="row">
            <div className="section-head  text-center mb-2" >
            <h2 className="title" style={{fontWeight:"800"}}>How Does It Work</h2>
            </div>
          
          <div className="col-12 mt-4">
            <div className="row">
            {services9.map((item, index) => (
                <div
                  key={index}
                  className={`col-lg-3 col-md-6 col-sm-6 wow ${item.animation}`}
                  data-wow-duration="2s"
                  data-wow-delay={item.delay}
                >
                  <div
                    ref={(el) => (parentRefs.current[index] = el)}
                    onMouseOver={() => handleHover(index)}
                    className=" m-b30 box-hover style3"
                    
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b20">
                        <span className="icon-cell icon-md">
                          {/* <i className={item.iconClass} /> */}
                          <img src={item.imgSrc} alt="" />
                        </span>
                      </div>
                      <div className="icon-content d-flex justify-content-evenly">
                        {/* <b style={{fontSize:"36px"}}>{item.No}</b> */}
                        <h5 style={{position:"relative", top:"10px"}} className="dlab-tilte">{item.title}</h5>
                        
                      </div>
                      <p className="mt-2" style={{color:"#282222"}}>{item.description}</p>
                    </div>
                    {/* <div className="icon-box-btn text-center">
                      <Link
                        href={`/services-details/${item.title}`}
                        className="site-button btn-block"
                      >
                        Read More
                      </Link>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}
