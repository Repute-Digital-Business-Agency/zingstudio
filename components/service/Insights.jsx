"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
export default function Insights() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="section-full scrollSpySection mb-5 " id="choose-us">
        <div className="row m-lr0">
          <div
            className="col-xl-6 col-lg-12 p-lr0 d-flex dis-tbl latest-project-info style1 bg-secondry wow fadeInLeft bg-primary"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="align-self-center text-white ">
              <div className="section-head text-white">
                <h2 className="title">Insights</h2>
                <p>
                Ready to level up? Discover what makes Zing Academy the ultimate place to learn digital marketing—from expert trainers to real-world projects, we give you the skills to succeed and stand out!

                </p>
              </div>
              <ul className="list-check white list-2 rounded border">
                <li>
                  <h4 className="m-b10">Expert-Led Training</h4>
                  <p>
                  Learn from top industry professionals with years of hands-on experience, offering you practical knowledge and valuable insights to excel in digital marketing.

                  </p>
                </li>
                <li>
                  <h4 className="m-b10">Real-World Projects</h4>
                  <p>
                  Gain practical experience by working on live projects, applying your skills in real-time scenarios that prepare you for success in the digital world.
                  </p>
                </li>
                <li>
                  <h4 className="m-b10">Career-Ready Skills
                  </h4>
                  <p>
                  Our courses are designed to equip you with the skills employers are looking for, from SEO and social media marketing to content strategy and analytics.

                  </p>
                </li>
                <li>
                  <h4 className="m-b10">Flexible Learning
                  </h4>
                  <p>
                  With online and in-person options, you can learn at your own pace, fitting your education into your busy schedule without compromising on quality.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-12 p-lr0 wow fadeInRight "
            data-wow-duration="2s"
            data-wow-delay="0.3s"
            
          >
            <div className="row spno">
              <div className="col-lg-6 col-md-6 col-sm-6 align-items-center d-flex" style={{
                backgroundColor:"#c41e0e"
            }}>
                <div className="dlab-services-box text-white">
                  <h2 className="service-year">
                    32<small>year</small>
                  </h2>
                  <h3 className="title m-b0">
                    We are Building the Future and Restoring
                  </h3>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <Image
                  className="img-cover"
                  alt=""
                  src="/images/Academy/insights/img-1.jpg"
                  width="500"
                  height="357"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="video-bx radius-no h100">
                  <Image
                    alt="Signature"
                    className="img-cover"
                    src="/images/Academy/insights/img-2.jpg"
                    width="500"
                    height="357"
                  />
                  {/* <div className="video-play-icon">
                    <a
                      onClick={() => setOpen(true)}
                      className="popup-youtube video bg-primary"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 bg-primary align-items-center d-flex">
                <div className="dlab-services-box text-white">
                  <h3 className="title text-white m-b15">
                    Renting Tips &amp; Articles
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <Link
                    href={`/about-1`}
                    className="site-button btnhover19 outline white outline-2"
                  >
                    ABOUT US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="_FRZVScwggM"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}
