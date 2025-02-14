"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import GallaryWrapper from "@/components/common/GallaryWrapper";
export default function HomeAmazing() {
  return (
    <div className="section-full">
      <div className="row m-lr0">
        <div
          className="col-xl-6 col-lg-12 p-lr0 d-flex dis-tbl latest-project-info bg-primary wow fadeInLeft"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="text-white align-self-center">
            <h2>A Am zing</h2>
            {/* <p> */}
            <div className="icon-content">
            <h4 className="title" style={{ color: "white" , fontWeight:"600"}}>Empowering women to lead the future</h4>
                  <p className="text-white">
                      At Zing Studio, we strive to create opportunities to uplift
                      women, enabling them to realize their potential and take control
                      of the decisions that shape their lives. We do this through
                      leadership capacity building, digital literacy, skills
                      development and employment, ensuring equal access to
                      opportunities for women to thrive and succeed.
                  </p>

                  <h4 className="dlab-tilte">
                      10% discounted cost for Women Entrepreneurs:
                      </h4>
                      <p className="text-white">
                      We believe in supporting women entrepreneurs on their journey
                      to success, that’s why we offer a 10% discount on our services
                      to help them grow their businesses with ease and confidence.
                      </p>

                      <h4 className="dlab-tilte">
                      Turning Career Breaks into Breakthroughs for Women:
                      </h4>
                      <p className="text-white">
                      We prioritize hiring and providing a supportive platform for
                      women and encouraging those who have taken a career break to
                      restart and thrive in their professional journey.
                      </p>
            </div>
            
            {/* </p> */}
            
            <Link
              href={`/portfolio-grid-2`}
              className="site-button btnhover13 white"
              style={{color:"#1a43bf"}}
            >
              View Project
            </Link>
          </div>
        </div>
        <div
          className="col-xl-6 col-lg-12 p-lr0 wow fadeInRight"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          {/* <GallaryWrapper> */}
            <div className="dlab-box lightgallery" style={{objectFit:"cover",height:"100%"}}>
              <div className="dlab-thum primary" style={{objectFit:"cover", height:"100%", width:"100%"}}>
                <a style={{objectFit:"cover", height:"100%", width:"100%"}}>
                  <img
                    className="img-cover"
                    alt=""
                    src="/images/Home-Page/amazing/image.jpg"
                   
                    style={{objectFit:"cover", height:"100%", width:"100%"}}
                  />
                </a>
                {/* <div className="overlay-bx">
                  <div className="overlay-icon">
                    <a
                      data-exthumbimage="/images/gallery/pic10.jpg"
                      data-src="/images/gallery/pic10.jpg"
                    >
                      <i className="fas fa-play icon-bx-xs" />
                    </a>
                    <span className="check-km">
                      <i className="fas fa-search icon-bx-xs" />
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          {/* </GallaryWrapper> */}
        </div>
      </div>
    </div>
  );
}
