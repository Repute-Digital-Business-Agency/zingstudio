import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <div className="section-full content-inner bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-12 m-b30 wow fadeInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="our-story">
              <span>OUR STORY</span>
              <h2 className="title">
              Delivering cost-effective digital solutions
              <br />
                <span className="text-primary">since 1955</span>
              </h2>
              <h4 className="title">
                Industrial engineering is a branch of engineering which deals
                with the optimization.
              </h4>
              <p>
              Zing Studio is a leading branding firm offering a full spectrum of services, including web design, digital marketing, and specialized digital marketing training through Zing Academy. Dedicated to delivering exceptional services at highly competitive and cost-effective rates, Zing Studio empowers businesses to enhance their online presence while equipping individuals with the skills required to excel in the digital marketing landscape. Our commitment to quality, innovation, and affordability makes Zing Studio a trusted partner for both organizational growth and professional development.

              </p>
              <Link href={`/about-2`} className="site-button btnhover20">
                About Us
              </Link>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 m-b30 our-story-thum wow fadeInRight"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <Image
              className="radius-sm"
              alt=""
              src="/images/about/pic13.jpg"
              width="600"
              height="722"
            />
          </div>
        </div>
      </div>
      <div class="container">
        <h4>Timeline Style : Demo-5</h4>
        <div class="row">
            <div class="col-md-12">
                <div class="main-timeline5">
                    <div class="timeline">
                        <div class="timeline-icon"><span class="year">2018</span></div>
                        <div class="timeline-content">
                            <h3 class="title">Web Desginer</h3>
                            <p class="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline-icon"><span class="year">2017</span></div>
                        <div class="timeline-content">
                            <h3 class="title">Web Developer</h3>
                            <p class="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline-icon"><span class="year">2016</span></div>
                        <div class="timeline-content">
                            <h3 class="title">Web Desginer</h3>
                            <p class="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline-icon"><span class="year">2015</span></div>
                        <div class="timeline-content">
                            <h3 class="title">Web Developer</h3>
                            <p class="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}
