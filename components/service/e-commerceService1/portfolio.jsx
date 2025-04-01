"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function ServicePortfolio({portfolioItems,portfolioContent}) {

  
  return (
    <div
      className="section-full content-inner-2 wow fadeIn bg-gray  works"
      data-wow-duration="2s"
      data-wow-delay="0.6s"
    >
      <div className="container-fluid">
        <div className="section-head style2 text-center">
          <h2 className="title m-b10">Our Works</h2>
          <p style={{width:"80%"}}>
            {portfolioContent?.description}
          </p>
        </div>
        
        <div className="row p-l0 sp10">
          <div className="col-lg-12">
            <ul
              id="masonry"
              className="dlab-gallery-listing gallery mfp-gallery text-center row"
            >
              {portfolioItems.map((item, index) => (
                <li key={index} className={`card-container ${item.className}`}>
                  <div
                    className="dlab-media dlab-img-overlay1 dlab-img-effect portbox3 wow fadeInUp seth will-animate"
                    data-wow-delay={item.delay}
                    data-wow-duration={item.duration}
                  >
                    <img src={item.image} alt={item.title} />
                    <div className="overlay-bx">
                      <div className="portinner">
                        <div className="port-up">
                          <h3 className="port-title">
                            <Link href={item?.link} target="_blank">{item.title}</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}