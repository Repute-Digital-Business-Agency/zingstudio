"use client";

import React from "react";
import Link from "next/link";
import { footerLinks2, socialLinks } from "@/data/footerLinks";

export default function Footer13() {
  return (
    <footer className="site-footer footer-gray-1 ">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="widget border-0">
                <h6 className="m-b10 font-weight-300 " style={{ color: "#1A43BF" }}>
                  Quick Links
                </h6>
                <ul className="list-2 ">
                  {footerLinks2.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                     
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-6  wow fadeIn"
              data-wow-delay="0.4s"
            >
              <div className="widget d-flex flex-column justify-content-center align-items-center">
                {/* <h6 className="m-b20 font-weight-300 text-uppercase">
                  Newsletter
                </h6>
                <div className="subscribe-form form-white m-b20 m-t30">
                  <form
                    className="dzSubscribe"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="dzSubscribeMsg" />
                    <div className="input-group">
                      <input
                        name="dzEmail"
                        required="required"
                        className="form-control radius-no"
                        placeholder="Your Email Id"
                        type="email"
                      />
                      <span className="input-group-btn">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className="site-button btnhover13 radius-no"
                        >
                          SEND
                        </button>
                      </span>
                    </div>
                  </form>
                </div> */}
                <h6 className="m-b10 font-weight-300 " style={{ color: "#1A43BF" }}>
                  Connect with us
                </h6>

                {/* <img src="/images/GIF/lets-connect-img.gif" alt="lets-connect" style={{width:"150px"}}/> */}
                {/* <ul className="list-inline m-a0 mt-3">
                  {socialLinks.map((link, index) => (
                    <React.Fragment key={index}>
                      <li>
                        <a
                          href={link.href}
                          className={`site-button btnhover13 sharp ${link.className}`}
                        >
                          <i className={`${link.iconClass} text-white`} />
                        </a>
                      </li>{" "}
                    </React.Fragment>
                  ))}
                </ul> */}

              <div className="circle-container footer-gif">
                <img src="/images/Academy/lets-connect/lets-connect-img.png" alt="Center GIF" className="center-gif" />
                <div className="social-icons">
                  <a href="https://www.facebook.com/irepute.agency" target="_blank" rel="noopener noreferrer" className="icon icon1" 
                  style={{padding:"5px 8px "}}
                  >
                    <i className="fab fa-facebook-f"></i>
                    {/* <img src="/images/footer/icon-1.png" alt="" /> */}
                  </a>
                  <a href="https://x.com/ireputeagency" target="_blank" rel="noopener noreferrer" className="icon icon2" style={{padding:"1px 7px", fontWeight:"500" }}>
                    <i style={{position:"relative", bottom:"-1px", left:"-1px", fontWeight:"600"}}>
                    𝕏
                    </i>
                    

                    {/* <img src="/images/footer/icon-2.png" alt="" /> */}
                  </a>
                  <a href="https://www.instagram.com/ireputeagency/" target="_blank" rel="noopener noreferrer" className="icon icon3">
                    <i className="fab fa-instagram"></i>
                    {/* <img src="/images/footer/icon-3.png" alt="" /> */}
                  </a>
                  <a href="https://www.linkedin.com/company/irepute-agency" target="_blank" rel="noopener noreferrer" className="icon icon4">
                    <i className="fab fa-linkedin-in"></i>
                    {/* <img src="/images/footer/icon-4.png" alt="" /> */}
                  </a>
                  <a href="https://www.youtube.com/@ireputeagency" target="_blank" rel="noopener noreferrer" className="icon icon5">
                    <i className="fab fa-youtube"></i>
                    {/* <img src="/images/footer/icon-5.png" alt="" /> */}
                  </a>
                  <a href="https://in.pinterest.com/ireputeagency/" target="_blank" rel="noopener noreferrer" className="icon icon6">
                    <i className="fab fa-pinterest"></i>
                    {/* <img src="/images/footer/icon-6.png" alt="" /> */}
                  </a>
                </div>
              </div>



              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 col-sm-12  wow fadeIn"
              data-wow-delay="0.6s"
            >
              <div className="icon-bx-wraper bx-style-1 m-b15  radius-sm br-col-w1 bg-tpw1 d-flex footer-img-content">
                <div className="py-3 px-3">
                <h6 className="font-weight-500" style={{ color: "#1A43BF" }}>
                Creative Solutions. Impactful Results. Affordable Excellence
                </h6>
                <p>
                Zing Studio delivers exceptional web design, digital marketing, and branding solutions tailored to help businesses grow and succeed. With a focus on creativity, quality, and affordability, we turn ideas into impactful digital experiences that drive results.
                </p>
                </div>
                <div className="footer-img " style={{height:"contentFit"}}>
                <img style={{paddingBottom:"0"}} src="/images/Academy/lets-connect/lets-connect-img.png" />
                </div>
                
              </div>
              
            </div>

            {/* <div
              className="col-lg-2 col-md-4 col-sm-4  wow fadeIn footer-img "
              data-wow-delay="0.6s"
            >
               <img src="/images/GIF/lets-connect-img.gif" alt="lets-connect" 
               style={{height:"200px", width:"200px"}} 
               />
              <img src="/images/Academy/lets-connect/lets-connect-img.png" />
            </div> */}
          </div>
        </div>
      </div>
      {/* footer bottom part */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 text-left">
              <span>
                Copyright ©{" "}
                <span className="current-year">{new Date().getFullYear()} </span>
                <a href="#" target="_blank">
                  Zing Studio
                </a>{" "}
                . All Rights Reserved.
              </span>
            </div>
            <div className="col-md-6 col-sm-6 text-right">
              <div className="widget-link">
                <ul>
                  <li>
                    <Link href={`#`}> Help Desk</Link>
                  </li>
                  <li>
                    <Link href={`/privacy-policy`}> Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
