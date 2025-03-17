"use client";

import React, { useState } from "react";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import CareerForm from "../service/CareerForm";
import Link from "next/link";
export default function Faq1() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="section-full overlay-white-middle content-inner">
        <div className="container-fluid p-0">

          <div className="row m-0">
            <div className="col-12 col-lg-11 col-xl-8  mx-auto" >

            <div className="section-head text-black text-center">
            <div className="our-story">
              <h2 className="title">
                Why Work at
                <span className="text-primary"> Zing Studio? </span>
              </h2>
              <p className="mb-0 fw-medium fs-5">
                At Zing Studio, we believe in fostering a dynamic and innovative work environment where creativity, professionalism, and growth are at the core of everything we do.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 col-md-12 m-b30">
              <h4> Here’s why you should consider joining our team:</h4>

              <div className="wow fadeInUp  will-animate" data-wow-duration="2s" data-wow-delay="0.6s" >
                <p><b>Collaborative Culture: </b>We thrive on teamwork and believe that the best ideas come from collaboration. You'll be part of a supportive, creative team dedicated to delivering outstanding results.
                </p>
              </div>
              <div className="wow fadeInUp  will-animate" data-wow-duration="2.2s" data-wow-delay="0.7s" >
                <p><b>Professional Growth:</b> At Zing Studio, we are committed to your personal and professional development. You’ll have access to continuous learning opportunities, mentorship, and the chance to expand your skill set in a fast-paced, ever-evolving digital landscape.
                </p>
              </div>
              <div className="wow fadeInUp  will-animate" data-wow-duration="2.4s" data-wow-delay="0.8s" >

                <p><b>Innovative Environment: </b>We encourage out-of-the-box thinking and value fresh perspectives. Join us if you’re ready to make a real impact with your innovative ideas and passion for digital solutions.
                </p>
              </div>
              <div className="wow fadeInUp  will-animate" data-wow-duration="2.6s" data-wow-delay="0.9s" >
                <p><b>Work-Life Balance: </b>We understand the importance of maintaining a healthy balance. With flexible hours and a focus on employee well-being, Zing Studio ensures you can excel both professionally and personally.
                </p>
              </div>
              <div className="wow fadeInUp  will-animate" data-wow-duration="2.8s" data-wow-delay="0.9s" >
                <p><b>Empowerment and Autonomy: </b>We trust our employees to take ownership of their projects and encourage autonomy in decision-making, allowing you to make a significant impact on the company's success.
                  <br></br>Join Zing Studio and be part of an inspiring, forward-thinking company where your talents will be nurtured, your ideas valued, and your career accelerated.
                </p>
              </div>



            </div>
            <div className="col-lg-5 col-md-12 m-b30 wow fadeInUp  will-animate" data-wow-duration="2s" data-wow-delay="0.6s" >
              <img alt=""
                className="img-cover radius-sm"
                src="/images/Life-at-Zing/zing-life.jpg"
              />
            </div>
          </div>

            </div>
          </div>
          
          <div className="row m-0">
          <div className="col-12 col-lg-11 col-xl-8  mx-auto">
          <h2 className="title"> Job Openings</h2>
            <p>At Zing Studio, we’re seeking passionate individuals to join our innovative team. If you’re eager to make an impact in digital marketing, web design, or branding, we offer exciting opportunities for growth and collaboration. Explore our current openings and take the next step in your career with a company that values creativity and professional development.
            </p>
          </div>
          </div>
        
            <CareerForm/>


            <div className="row m-0">
              <div className="col-12 col-lg-11 col-xl-8  mx-auto" >
                <div className="row"> 
                  
                      <h2>Internship Opportunities at Zing Studio</h2>
                      <p>Zing Studio offers exceptional internship opportunities designed for students and recent graduates seeking to gain practical experience in digital marketing, web design, and branding. As an intern with us, you will collaborate with seasoned professionals, contributing to high-impact projects while honing your skills in a dynamic, innovative environment.
                      </p>

                      <div className="col-lg-6 col-md-12 m-b30">
                        <div className="faq-video h-100">
                          <a
                            className="play-btn popup-youtube"
                            onClick={() => setOpen(true)}
                          >
                            <i className="flaticon-play-button text-white" />
                          </a>
                          <Image
                            alt=""
                            className="img-cover radius-sm"
                            src="/images/Life-at-Zing/image (5).jpg"
                            width="1000"
                            height="674"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-12 m-b30">
                        <h4>Benefits of Internship @ Zing Studio:
                        </h4>
                        <div
                          className="dlab-accordion faq-1 box-sort-in m-b30"
                          id="accordion1"
                        >
                          <div className="panel">
                            <div className="acod-head">
                              <h6 className="acod-title">
                                <a
                                  href="#"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq1"
                                  className="collapsed"
                                  aria-expanded="true"
                                >
                                  Mentorship from Experts
                                </a>
                              </h6>
                            </div>
                            <div
                              id="faq1"
                              className="acod-body collapse"
                              data-bs-parent="#accordion1"
                            >
                              <div className="acod-content">
                                Work closely with industry professionals and gain invaluable insights into the digital marketing and branding sectors.
                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="acod-head">
                              <h6 className="acod-title">
                                <a
                                  href="#"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq2"
                                  className="collapsed"
                                  aria-expanded="false"
                                >
                                  Portfolio Development
                                </a>
                              </h6>
                            </div>
                            <div
                              id="faq2"
                              className="acod-body collapse"
                              data-bs-parent="#accordion1"
                            >
                              <div className="acod-content">
                                Contribute to meaningful projects that enhance your portfolio and demonstrate your expertise to future employers.

                              </div>
                            </div>
                          </div>
                          <div className="panel">
                            <div className="acod-head">
                              <h6 className="acod-title">
                                <a
                                  href="#"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#faq3"
                                  className="collapsed"
                                  aria-expanded="false"
                                >
                                  Skill Advancement
                                </a>
                              </h6>
                            </div>
                            <div
                              id="faq3"
                              className="acod-body collapse"
                              data-bs-parent="#accordion1"
                            >
                              <div className="acod-content">
                                Sharpen your abilities in web design, digital marketing strategies, and other key areas, positioning yourself for future career success.

                              </div>
                            </div>
                          </div>


                        </div>
                        <div>
                        <p>
                          If you are looking to accelerate your career in a collaborative and growth-driven environment, we invite you to apply for an internship at Zing Studio. Gain the experience and knowledge that will set you apart in the competitive digital landscape.
                        </p>

                      </div>
                      </div>
                    </div>                
      
              </div>
            </div>

            <div className="row py-5 px-2 text-white m-0" style={{background:"#e21100"}}>
            <div className="col-12 col-lg-8  mx-auto" >
            <div className="row">
            <h2 className="title mb-1">Apply Now</h2>
            <p className="mb-0">Are you ready to advance your career? At Zing Studio, we’re always seeking passionate, skilled individuals to join our team. Whether you're interested in a full-time role or an internship, we offer a collaborative environment where creativity, innovation, and professional development thrive. Apply today and embark on an exciting journey with Zing Studio.
            </p>
            <div className="dz-btns d-flex align-items-center banner-btn  call-action px-0 py-0">

                <Link
                  href="#careers"
                  className=" site-button btnhover13 white align-self-center outline  outline-2 mt-4 mx-2"
                  style={{width:"auto",}}
                >
                                  
                 Apply Now
                
                </Link>
                
                </div>
          </div>
            </div>
            </div>
          
          {/* Faq Info END */}
        </div>
      </div>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        // videoId="_FRZVScwggM"
        videoId="OPTsoOmpS_s"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}
