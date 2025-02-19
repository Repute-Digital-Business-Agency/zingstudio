"use client";

import Counter from "@/components/common/Counter";
import { facts } from "@/data/facts";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
export default function Facts() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        className="section-full text-white bg-img-fix content-inner overlay-black-dark counter-staus-box Zf-cta letsInfluence"
        style={{ backgroundImage: "url(/images/Careers/banner.jpg)" , marginBottom:"150px"}}
      >
        <div className="container">
          <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="row sp20">
               
                  <div
                    // key={index}
                    className="col-md-6 col-sm-6 m-b30 wow fadeInUp letsinflu"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    <div className="icon-bx-wraper center counter-style-5">
                      <div className="icon-xl m-b20 d-flex align-item-center justify-content-center" style={{ width:"100%"}}>
                        <span className="icon-cell mx-3">
                          <i className="flaticon-worker"  style={{color:"#1A43BF"}}/>
                        </span>
                      </div>
                      <div className="icon-content">
                        <div className="dlab-separator bg-primary" />
                        {/* <h2 className="dlab-tilte counter">
                          <Counter max="1226" />
                        </h2> */}
                        <p style={{fontSize:"16px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, suscipit reprehenderit.</p>
                      </div>
                    </div>
                  </div>
                        
                  <div
                    // key={index}
                    className="col-md-6 col-sm-6 m-b30 wow fadeInUp letsinflu"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    <div className="icon-bx-wraper center counter-style-5">
                      <div className="icon-xl m-b20 d-flex align-item-center justify-content-center" style={{width:"100%"}}>
                        <span className="icon-cell mx-3">
                          <i className="flaticon-worker" style={{color:"#1A43BF"}}/>
                        </span>
                      </div>
                      <div className="icon-content">
                        <div className="dlab-separator bg-primary" />
                        {/* <h2 className="dlab-tilte counter">
                          <Counter max="1226" />
                        </h2> */}
                        <p style={{fontSize:"16px"}}>Ready to make some noise?  Let’s team up and create influencer campaigns that shine, spark engagement, and get your brand buzzing! Let’s do this!
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
          <div
              className="col-lg-5 col-md-12 col-sm-12 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="section-head text-white">
                
                <h2 className="title">
                Let’s Influence Together!
                </h2>
                <p>
                Whether you’re a brand looking to connect with the right influencers for your next campaign or an influencer looking to get your work recognized and collaborate with top brands, get in touch with Socio Influencer, the best Influencer Marketing agency today.
                </p>

                <div className="icon-content d-flex flex-start">
                      <h5 className="dlab-tilte">
                        <span className="icon-sm text-redblk" style={{marginLeft:"-10px"}}>
                          <i className="ti-mobile" />
                        </span>
                        Phone Number <br />
                        <a className="text-white" href="tel:04224980307"> +91 (422) 498 0307</a>
                      </h5>
                      <h5 className="dlab-tilte p-lr15">
                        <span className="icon-sm text-redblk" style={{margin:"0 10px 0 -5px"}}>
                          <i className="ti-email" />
                        </span>
                        E-mail <br />
                        <a className="text-white" href="mailto:support@irepute.in">
                          support@irepute.in
                        </a>
                      </h5>
                      
                </div>

              </div>
          </div>
          
          </div>
        </div>
      </div>
     
    </>
  );
}
