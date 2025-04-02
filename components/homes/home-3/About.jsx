import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <>
      {/* Service Info Head */}

      {/* Service Info Head End */}
      {/* About Us */}
      <div className="section-full content-inner bg-gray relative">
      <div  className="moveAnimation" style={{ position: "absolute", bottom: "0px", left: "100px", animation: "moveImage4 5s linear infinite",
        // border:"1px solid red"
       }}>
        <img
          src="/images/Academy/lets-connect/animation.png"
          // src="/images/Academy/lets-connect/lets-connect-img.png"
          // style={{ width: "40%" }}
        />
      </div>
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-12 m-b30 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="our-story">
                <span>Who We Are</span>
                <h2 className="title" style={{ fontSize: "35px" }}>
                  Delivering cost-effective digital solutions

                </h2>
                <p className="title mb-0">
                  Zing Studio is a leading branding firm offering a full spectrum of services, including web design, digital marketing, and specialized digital marketing training through Zing Academy. Dedicated to delivering exceptional services at highly competitive and cost-effective rates, Zing Studio empowers businesses to enhance their online presence while equipping individuals with the skills required to excel in the digital marketing landscape. Our commitment to quality, innovation, and affordability makes Zing Studio a trusted partner for both organizational growth and professional development.

                </p>

                {/* <Link href={`/about-2`} className="site-button btnhover14">
                  Read More
                </Link> */}
              </div>
            </div>
            <div
              className="col-xl-6 col-12 m-b30 wow fadeInUp d-flex justify-content-center "
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <Image
                className="radius-sm "
                alt=""
                src="/images/about-us/about-img.png"
                width="600"
                height="800"
                
              />
            </div>
          </div>
        </div>

      </div>
      <div className="section-full content-inner bg-white relative">
        <div class="container">
          {/* <h2>Timeline Of Achievements</h2> */}
          <div class="row">
            <div class="col-md-12">
              <img src="/images/about-us/Zing-Infographics.jpg"></img>
            </div>
          </div>
        </div>
        <div className="moveAnimation" style={{ position: "absolute", bottom: "0px", right: "0", animation: "moveImage3 5s linear infinite", 
        // border:"1px solid red"
         }}>
          <img
            src="/images/Academy/lets-connect/animation.png"
           
          />
        </div>
      </div>
      {/* About Us End */}
    </>
  );
}
