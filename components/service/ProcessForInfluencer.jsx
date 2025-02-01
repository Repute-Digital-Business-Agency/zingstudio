"use client";

import { services9 } from "@/data/services";
import React, { useRef } from "react";
import Link from "next/link";
export default function ProcessForInfluencer() {

     const services9 = [
        {
          id: 131,
          imgSrc: "/images/gallery/car/pic1.jpg",
          iconClass: "ti-user",
          title: "Largest Dealership",
          description:
            "Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.Our team will contact you for further procedures after completing the sign-up process",
          animation: "fadeInLeft",
          delay: "0.3s",
        },
        {
          id: 132,
          imgSrc: "/images/gallery/car/pic2.jpg",
          iconClass: "ti-settings",
          title: "Lower Car Prices",
          description:
            "Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.Our team will contact you for further procedures after completing the sign-up process",
          animation: "fadeInRight",
          delay: "0.3s",
        },
        {
          id: 133,
          imgSrc: "/images/gallery/car/pic3.jpg",
          iconClass: "ti-support",
          title: "Multipoint Safety",
          description:
            "Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.Our team will contact you for further procedures after completing the sign-up process",
          animation: "fadeInDown",
          delay: "0.3s",
        },
        {
            id: 133,
            imgSrc: "/images/gallery/car/pic3.jpg",
            iconClass: "ti-support",
            title: "Multipoint Safety",
            description:
              "Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text.Our team will contact you for further procedures after completing the sign-up process",
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
      className="section-full content-inner bg-white scrollSpySection"
      id="about"
    >
      <div className="container">
        <div className="row">
            <div className="title text-center mb-2" >
            <h2 style={{fontWeight:"800"}}>Process for Influencers</h2>
            </div>
          
          <div className="col-12 ">
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
                    className="dlab-box-bg m-b30 box-hover style3"
                    style={{ backgroundImage: `url(${item.imgSrc})` }}
                  >
                    <div className="icon-bx-wraper center p-lr20 p-tb30">
                      <div className="text-primary m-b20">
                        <span className="icon-cell icon-md">
                          <i className={item.iconClass} />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte">{item.title}</h5>
                        <p style={{color:"#494949"}}>{item.description}</p>
                      </div>
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
