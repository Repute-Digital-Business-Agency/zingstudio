import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function HomeAbout() {
  return (
    <div className="section-full content-inner const-about">
      <div className="container">
        <div className="row align-items-center">
        <div
            className="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="content-bx1">
              {/* <div className="about-year"> */}
              <h2 className="title" style={{color:"#1a43bf",fontSize:"30px"}}> About Us</h2>
              {/* </div> */}
              <div className="section-head style2">
                <h2 className="title">
                Turning businesses like yours into success stories like these.
                  {/* <br />
                 success stories like these. */}
                </h2>
                <p>
                Get customized solutions based on your business goals – no matter your size or industry. With successful clients ranging from small businesses to Fortune 1000s, you’re in good company.
                </p>
              </div>
              <Link
                href={`/portfolio`}
                className="site-button m-r10 m-b10 btnhover20"
              >
                View Portfolio
              </Link>
              <Link
                href={`/about`}
                className="site-button  m-b10 btnhover20"
              >
                About Us
              </Link>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="radius-sm m-b30 img-ho1">
              <Image
                alt=""
                src="/images/about/pic11.jpg"
                width="600"
                height="722"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
