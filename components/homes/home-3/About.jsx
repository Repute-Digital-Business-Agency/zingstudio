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
                <div class="main-timeline5">
                    <div class="timeline">
                        <div class="timeline-icon"><span class="year">01</span></div>
                        <div class="timeline-content">
                            <h3 class="title">Foundation Established </h3>
                            <p class="description">
                            Zing Studio was founded with a mission to offer cost-effective, high-quality branding and digital marketing services.

                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline-icon"><span class="year">02</span></div>
                        <div class="timeline-content">
                            <h3 class="title">First Major Client Success </h3>
                            <p class="description">
                            Delivered impactful web design and digital marketing campaigns, helping clients achieve measurable online growth.
                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline-icon"><span class="year">03</span></div>
                        <div class="timeline-content">
                            <h3 class="title">Launch of Zing Academy</h3>
                            <p class="description">
                            Introduced Zing Academy to offer professional training in digital marketing, empowering individuals with essential skills.
                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline-icon"><span class="year">04</span></div>
                        <div class="timeline-content">
                            <h3 class="title">Expansion of Service Portfolio</h3>
                            <p class="description">
                            Expanded service offerings to include comprehensive branding, digital marketing strategies, and skill development programs.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
      {/* About Us End */}
    </>
  );
}
