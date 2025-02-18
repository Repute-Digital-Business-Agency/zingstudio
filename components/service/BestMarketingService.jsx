import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <div className="section-full content-inner const-about bg-white zingFluence">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="radius-sm m-b30 img-ho1">
              <Image
                alt=""
                src="/images/about/pic11.jpg"
                width="600"
                height="600"
              />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInRight content-sec"
            data-wow-duration="2s"
            data-wow-delay="0.6s"

          >
            <div className="content-bx1">
              {/* <div className="about-year">
                <span>26</span>
                <p>
                  Years
                  <br />
                  Experience
                  <br />
                  Working
                </p>
              </div> */}
              <div className="section-head style2">
                <h2 className="title">
                How do we offer the 
                  <br />
                  best influencer marketing services?
                </h2>
                <p>
                At Zingfluence, we provide premium influencer marketing services by integrating strategic planning, creativity, and data-driven insights. Our process begins with carefully selecting influencers who align with your brand values and objectives, ensuring authentic and effective partnerships. We develop customized campaigns that engage your target audience and drive measurable results. 

                </p>
                <p>
                Our content creation focuses on producing high-quality, relevant content that resonates with followers, fostering trust and engagement. Additionally, we monitor campaign performance closely, utilizing analytics to optimize strategies and maximize ROI. With Zingfluence, you can trust that every influencer marketing campaign is designed for tangible and sustained success.
                </p>
              </div>
              {/* <Link
                href={`/portfolio-grid-2`}
                className="site-button m-r10 m-b10 btnhover20"
              >
                View Portfolio
              </Link>
              <Link
                href={`/about-1`}
                className="site-button black m-b10 btnhover20"
              >
                About Us
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
