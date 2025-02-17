import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <>
      {/* Service Info Head */}

      {/* Service Info Head End */}
      {/* About Us */}
      <div className="section-full content-inner bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-6 m-b30 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="our-story">
                <span>OUR STORY</span>
                <h2 className="title" style={{fontSize:"35px"}}>
                Delivering cost-effective digital solutions

                </h2>
                <h4 className="title">
                Zing Studio is a leading branding firm offering a full spectrum of services, including web design, digital marketing, and specialized digital marketing training through Zing Academy. Dedicated to delivering exceptional services at highly competitive and cost-effective rates, Zing Studio empowers businesses to enhance their online presence while equipping individuals with the skills required to excel in the digital marketing landscape. Our commitment to quality, innovation, and affordability makes Zing Studio a trusted partner for both organizational growth and professional development.

                </h4>
               
                {/* <Link href={`/about-2`} className="site-button btnhover14">
                  Read More
                </Link> */}
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 m-b30 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <Image
                className="radius-sm"
                alt=""
                src="/images/about-us/about-img.jpg"
                width="600"
                height="800"
              />
            </div>
          </div>
        </div>
        <div class="container">
        <h2>Timeline Of Achievements</h2>
        <div class="row">
            <div class="col-md-12">
             <img src="/images/about-us/Zing-Infographics.png"></img>
            </div>
        </div>
    </div>
      </div>
      {/* About Us End */}
    </>
  );
}
