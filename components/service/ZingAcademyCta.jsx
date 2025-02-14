"use client";

import React from "react";
import Image from "next/image";

export default function ZingAcademyCta() {
  return (
    <div
      className="section-full  bg-img-fix"
      style={{ backgroundImage: "url(/images/Academy/lets-connect/bg1.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 content-inner chosesus-content text-white">
          <Image
                              alt=""
                              src="/images/Academy/lets-connect/lets-connect-img.png"
                              width="700"
                              height="500"
                            />
            {/* <h2
              className="title-box font-weight-300 m-b15 wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              Let's get in touch <span className="bg-primary" />
            </h2>
            <p className="font-16 op8 wow fadeInLeft" data-wow-delay="0.4s">
              Give us a call or drop by anytime, we endeavour to answer all
              enquiries within 24 hours on business days.
            </p>
            <h3
              className="font-weight-300 m-b50 op6 wow fadeInLeft"
              data-wow-delay="0.6s"
            >
              By 700+ customers for 3200+ Web and Mobile App development
              projects.
            </h3>
            <h4
              className="font-weight-300 wow fadeInLeft"
              data-wow-delay="0.8s"
            >
              &amp; What you will get:
            </h4>
            <ul
              className="list-checked primary wow fadeInLeft"
              data-wow-delay="1s"
            >
              <li>
                <span>
                  Contrary to popular belief, Lorem Ipsum is not simply
                </span>
              </li>
              <li>
                <span>
                  Random text. It has roots in a piece of classical Latin
                  literature
                </span>
              </li>
              <li>
                <span>
                  Latin professor at Hampden-Sydney College in Virginia
                </span>
              </li>
            </ul> */}
          </div>
          <div className="col-lg-7 col-md-12 m-b30">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="inquiry-form contact-project bg-white box-shadow wow fadeInUp"
              data-wow-delay="0.2s"
              style={{marginTop:"-50px"}}
            >
              <h3 className="title-box font-weight-300 m-t0 m-b10">
              Got Questions? Let’s Chat!

                <span className="bg-primary" />
              </h3>
              <p>
              Fill out the form and get all the info you need to kickstart your digital marketing journey. We're here to help you level up and make your mark in the digital world!

              </p>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-user text-primary" />
                      </span>
                      <input
                        name="dzName"
                        type="text"
                        required
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-mobile text-primary" />
                      </span>
                      <input
                        name="dzOther[Phone]"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-email text-primary" />
                      </span>
                      <input
                        name="dzEmail"
                        type="email"
                        className="form-control"
                        required
                        placeholder="Your Email Id"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-check-box text-primary" />
                      </span>
                      <input
                        name="dzOther[Subject]"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Upload File"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-file text-primary" />
                      </span>
                      <input
                        name="dzOther[Subject]"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Upload File"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-agenda text-primary" />
                      </span>
                      <textarea
                        name="dzMessage"
                        rows={4}
                        className="form-control"
                        required
                        placeholder="Tell us about your project or idea"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <button
                    name="submit"
                    type="submit"
                    value="Submit"
                    className="site-button button-lg"
                  >
                    <span>Get A Free Quote!</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
