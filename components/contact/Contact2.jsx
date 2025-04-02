"use client";

import React from "react";
import Link from "next/link";
import Cta from "../service/ServiceDescription";
import Cta2 from "../homes/home-3/Cta2";
export default function Contact2() {
  return (
    <>
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt"
        style={{ backgroundImage: "url(/images/Contact-Us/banner.jpg)" }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Contact Us</h1>
            {/* Breadcrumb row */}
            <div className="breadcrumb-row">
              {/* <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>
                <Link href={`/contact`}>Contact Us</Link></li>
              </ul> */}
            </div>
            {/* Breadcrumb row END */}
          </div>
        </div>
      </div>
      {/* inner page banner END */}
      {/* Contact Form */}
      <div className="section-full content-inner contact-page-8  bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 mb-5">
                  <div className="icon-bx-wraper expertise bx-style-1 p-a20 radius-sm">
                    <div className="icon-content">
                      <h5 className="dlab-tilte">
                        <span className="icon-sm text-redblk" style={{margin:"0 0 0 -10px"}}>
                          <i className="ti-location-pin" />
                        </span>
                        Company Address
                      </h5>
                      <p>
                        5A-1, 4th Street, <br /> Chinthamani Nagar, K.K.Pudur, <br /> Saibaba
                        Colony, <br /> Coimbatore – 641 038. <br /> Tamil Nadu, India.
                      </p>
                      {/* <h6 className="m-b15 text-black font-weight-400">
                        <i className="ti-alarm-clock" /> Office Hours
                      </h6>
                      <p className="m-b0">Mon To Sat : 09.00AM - 7.00PM</p>
                      <p>Sunday : Close</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 mb-5">
                  <div className="icon-bx-wraper expertise bx-style-1 p-a20 radius-sm">
                    <div className="icon-content">
                      <h5 className="dlab-tilte">
                        <span className="icon-sm text-redblk" style={{margin:"0 5px 0 -3px"}}>
                          <i className="ti-email " />
                        </span>
                        E-mail
                      </h5>
                      <p className="m-b0">
                        <a href="mailto:support@zingstudio.in">
                          support@zingstudio.in
                        </a>
                      </p>
                      {/* <p className="m-b0">
                        <a href="mailto:someone@example.com">hr@example.com</a>
                      </p>
                      <p className="m-b0">
                        <a href="mailto:someone@example.com">
                          support@example.com
                        </a>
                      </p> */}
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-12 col-md-6">
                  <div className="icon-bx-wraper expertise bx-style-1 p-a20 radius-sm">
                    <div className="icon-content">
                      <h5 className="dlab-tilte">
                        <span className="icon-sm text-redblk" style={{margin:"0 0 0 -5px"}}>
                          <i className="ti-mobile"  />
                        </span>
                        Phone Number
                      </h5>
                      <p className="m-b0">
                        <a href="tel:04224980307"> +91 (422) 498 0307</a>
                      </p>
                     
                    </div>
                  </div>
                </div> */}

                {/* <div className="col-lg-12 col-md-6 mx-auto">
                  
                   
                    <img src="/images/GIF/lets-connect-img.gif" alt="lets-connect"  
                                   style={{height:"150px", width:"150px"}} ></img>
                   
                  
                </div> */}
              </div>
            </div>
            <div className="col-lg-8 col-md-12 m-b30">

            <iframe
            src="https://connect.irepute.in/file/lets-zing/"
            width="100%"
            height="400px"
            // style="border: none;"
            allowfullscreen
            ></iframe>

              {/* <form
                onSubmit={(e) => e.preventDefault()}
                className="inquiry-form wow fadeInUp py-3"
                data-wow-delay="0.2s"
              >
                <div className="our-story">
                  <h2 className="title">
                  Reach <span className="text-primary">Us</span>
                  </h2>
                  <h4 className="title">
                  Let’s create something amazing—top-notch quality, totally budget-friendly!
                  </h4>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-user text-redblk" />
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
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-mobile text-redblk" />
                        </span>
                        <input
                          name="dzOther[Phone]"
                          type="number"
                          required
                          className="form-control"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-email text-redblk" />
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
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-check-box text-redblk" />
                        </span>
                        <input
                          name="dzOther[Subject]"
                          type="file"
                          required
                          className="form-control"
                          placeholder="Upload File"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-file text-redblk" />
                        </span>
                        <input
                          name="dzOther[Subject]"
                          type="file"
                          required
                          className="form-control"
                          placeholder="Upload File"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-agenda text-redblk" />
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
                  <div className="col-lg-12 col-md-12">
                    <button
                      name="submit"
                      type="submit"
                      value="Submit"
                      className="site-button button-md btnhover20"
                    >
                      <span>Get A Free Quote!</span>
                    </button>
                  </div>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
      {/* <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.460467731644!2d76.95759670714209!3d11.029989062678691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85815bb375b37%3A0x2ae31305026b56e8!2sRepute%20Branding%20%7C%20Mobile%20App%20%7C%20Web%20Development%20%7C%20Digital%20Marketing!5e0!3m2!1sen!2sin!4v1739790096596!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section> */}
       <Cta2/>
      {/* Con
       */}
    </>
  );
}
