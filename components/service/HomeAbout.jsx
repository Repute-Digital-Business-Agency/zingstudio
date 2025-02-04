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
                  Architecure is a visual art,
                  <br />
                  and The Building
                </h2>
                <p>
                  Praesent pharetra orci odio, ut mattis tellus ullamcorper
                  ornare. Suspendisse ullamcorper metus in erat viverra,
                  vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus
                  malesuada vel. Praesent pharetra orci odio, ut mattis tellus
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
