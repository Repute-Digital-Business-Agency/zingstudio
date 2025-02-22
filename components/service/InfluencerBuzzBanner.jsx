"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function InfluencerBuzzBanner({option,bannerContent}) {
  return (
    <>
    <div
      className="section-full  bg-gray bg-img-fix pr-service-hero influ-banner"
      
    >
      <div className="container-fluid">
        <div className="row">
        
        <div className="col-11 m-auto">
          <div className="row">
          <div className="col-lg-4 col-md-6 content-inner chosesus-content text-black">
            <h2
              className="title-box font-weight-300  wow fadeInLeft pt-5"
              data-wow-delay="0.2s"
            > 
            {bannerContent.head}
               <span className="bg-primary" />
            </h2>
            <p className="font-16 op8 wow fadeInLeft" data-wow-delay="0.4s">
            {bannerContent.caption}

            </p>
            <h3
              className="font-weight-300 m-b50 op7 wow fadeInLeft"
              data-wow-delay="0.6s"
            >
               {bannerContent.subTitle}



            </h3>

            <a href="/contact" className="site-button btnhover13 primary align-self-center outline ms-auto outline-2 wow fadeInLeft"
              data-wow-delay="0.8s"  style={{textWrap:"wrap"}}>
            {bannerContent.button}
              {/* <i className="fas fa-angle-double-right ms-2" /> */}
            </a>

            {/* <h4
              className="font-weight-300 wow fadeInLeft"
              data-wow-delay="0.8s"
            >
             What you get
            </h4>
            <ul
              className="list-hand-point  wow fadeInLeft"
              data-wow-delay="1s"
            >
              {bannerContent.list.map((item, index) => (
                <li key={index}><span>{item} </span></li>
              ))}
             
             
            </ul> */}
          </div>
          <div className="col-lg-4 col-md-6 content-inner chosesus-content text-white d-flex flex-coloumn align-item-end wow fadeInUp">
            
          <div className="radius-sm  ">
              <img className="choose-Zf-img"
                alt=""
                src={bannerContent.image}
                // width="600"
                // height="722"
                 style={{
                    // height:"700px",
                    objectFit:"cover",
                    position:"relative",
                    bottom:"-50px"
                }}
              />
            </div>
           
          </div>
          <div className="col-lg-4 col-md-12 m-b30 " >
            <form 
              onSubmit={(e) => e.preventDefault()}
              className="inquiry-form wow box-shadow bg-white fadeInUp"
              data-wow-delay="0.2s"
              
            >
              <h3 className="title-box font-weight-300 m-t0 m-b10">
              {bannerContent.formTitle}
                <span className="bg-primary" />
              </h3>
              {/* <p>
               Have questions or need expert help with web design, digital marketing, or branding? We’re here for you! Simply fill out the form below, and one of our team members will reach out to discuss how we can create something amazing together. We can’t wait to connect with you!
              </p> */}
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
                <div className="col-lg-6 col-md-6">
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
                        <i className="ti-link text-redblk" />
                      </span>
                      <input
                        name="profileLink"
                        type="text"
                        className="form-control"
                        required
                        placeholder="Profile Link"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      {/* <span className="input-group-addon">
                        <i className="ti-email text-redblk" />
                      </span> */}
                      <input
                        name="niche"
                        type="text"
                        className="form-control"
                        required
                        placeholder="What is your Niche?"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      {/* <span className="input-group-addon">
                        <i className="ti-email text-redblk" />
                      </span> */}
                      <input
                        name="dzEmail"
                        type="email"
                        className="form-control"
                        required
                        placeholder="What are your Commercials?"
                      />
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
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
</>
  );
}