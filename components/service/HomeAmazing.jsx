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
            <p>
           
            </p>
            
            <Link
              href={`/portfolio-grid-2`}
              className="site-button btnhover13 white"
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
          <GallaryWrapper>
            <div className="dlab-box overlay-gallery-bx1 lightgallery">
              <div className="dlab-thum dlab-img-overlay1 primary">
                <a>
                  <Image
                    className="img-cover"
                    alt=""
                    src="/images/gallery/pic10.jpg"
                    width="900"
                    height="807"
                  />
                </a>
                <div className="overlay-bx">
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
                </div>
              </div>
            </div>
          </GallaryWrapper>
        </div>
      </div>
    </div>
  );
}
