import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <div className="section-full content-inner const-about bg-white">
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
            className="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInRight"
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
                  Praesent pharetra orci odio, ut mattis tellus ullamcorper
                  ornare. Suspendisse ullamcorper metus in erat viverra,
                  vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus
                  malesuada vel. Praesent pharetra orci odio, ut mattis tellus
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, aperiam quidem, mollitia, assumenda laborum nesciunt distinctio nisi soluta perferendis repellendus eius. Cumque quis fugiat quibusdam officiis nostrum laboriosam earum sit!
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
