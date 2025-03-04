"use client";

import React from "react";

export default function HeroSection({head,option,bannerContent}) {
  return (
    <div
      className="section-full   bg-img-fix pr-service-hero trans"
      style={{ backgroundImage: "url(/images/services/serviceBanner.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 content-inner chosesus-content text-white pb-md-0">
            <h2
              className="title-box font-weight-300 mb-2 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              {head} <span className="bg-primary" />
            </h2>
            <p className="font-16  wow fadeInUp " data-wow-delay="0.4s">
            {bannerContent.caption}

            </p>
            <h3
              className="font-weight-300   wow fadeInUp"
              data-wow-delay="0.6s"
              style={{fontSize:"25px"}}
            >
               {bannerContent.subTitle}



            </h3>
            <h5
              className="font-weight-300 wow fadeInUp"
              data-wow-delay="0.8s"
            >
             What you get
            </h5>
            <ul
              className="list-hand-point  wow fadeInUp"
              data-wow-delay="1s"
            >
              {bannerContent.list.map((item, index) => (
                <li key={index}><span>{item} </span></li>
              ))}
             
             
            </ul>
          </div>
          <div className="col-lg-6 col-md-12 m-b30 pt-md-0" >
            <form 
              onSubmit={(e) => e.preventDefault()}
              className="inquiry-form wow box-shadow bg-white fadeInUp "
              data-wow-delay="0.2s"
              
            >
              <h3 className="title-box font-weight-300 m-t0 m-b10 text-white">
              {bannerContent.formTitle}
                <span className="bg-primary" />
              </h3>
              <p>
               {bannerContent.formCaption}
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-user " />
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
                        <i className="ti-mobile " />
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
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-email " />
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
                    <div className="input-group flex-nowrap">
                      <span className="input-group-addon">
                        <i className="ti-check-box " />
                      </span>
                      <select className="form-select form-select-lg type-3 ml-2">
                        {option.map((option, index) => (
                          <option key={index}>{option}</option>
                        ))}
                        {/* <option>Static Site</option>
                        <option>Dynamic Site</option>
                        <option>E-commerce site</option> */}
                       
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-12 col-md-12">
                  <button
                    name="submit"
                    type="submit"
                    value="Submit"
                    className="site-button btnhover20 m-t10"
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
