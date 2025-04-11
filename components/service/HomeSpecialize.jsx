import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeSpecialize() {
  return (
    <div
      className="section-full content-inner const-about homeAbout ispecialize"
      style={{
        backgroundImage: "url(/images/Home-Page/about-us-bg-element.png)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="moveAnimation"
        style={{
          position: "absolute",
          bottom: "0px",
          right: "0",
          animation: "moveImage3 5s linear infinite",
          opacity: "0.7",
         
        }}
      >
        <img src="/images/Academy/lets-connect/animation.png" />
      </div>
      <div className="container-fluid">
        <div className="row align-items-center px-2 px-xl-5" >
          <h2
            className="title text-center newtitle"
            // style={{ fontSize: "65px", marginBottom: "45px" }}
          >
            I Specialize in
          </h2>
          <div
            className="col-lg-2 col-md-4 col-sm-12 col-12 wow fadeInUp d-flex justify-content-center justify-content-lg-end img-div"
            
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            {" "}
            <img src="/images/Home-Page/i-specialize.png" />
            {/* <video src="/images/Home-Page/iteach-vid.mp4"
               loop autoPlay  muted
                type="video/mp4"
                 className="img-cover radius-sm" style={{objectFit:"contain"}} >   
                 </video> */}
          </div>

          <div
            className="col-lg-3 col-md-4 col-sm-12 col-12 wow fadeInRight pt-4"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="box1-home">
              <div>
                <div class="num fw-500">01</div>
                <div class="title text-uppercase">BUSINESS</div>
                <a class="service-heading text-uppercase fw-500" href="#">
                  Website<br></br> Design
                </a>
              </div>
              <div
                style={{
                  paddingLeft: "60px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <img
                  src="/images/Home-Page/web-design.png"
                  width="150px"
                  alt="Website Design"
                />
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-4 col-sm-12 col-12 wow fadeInRight pt-4"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="box2-home">
              <div>
                <div class="num fw-500">02</div>
                <div class="title text-uppercase">BUSINESS</div>
                <a class="service-heading text-uppercase fw-500" href="#">
                  Digital<br></br> Marketing
                </a>
              </div>
              <div
                style={{
                  paddingLeft: "60px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <img
                  src="/images/Home-Page/digital-marke.png"
                  width="150px"
                  alt="Website Design"
                />
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-8 col-sm-12 col-12 wow fadeInRight pt-4  ms-lg-0 ms-md-auto"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="box3-home">
              <div>
                <div class="num fw-500">03</div>
                <div class="title text-uppercase">BUSINESS</div>
                <a class="service-heading text-uppercase fw-500" href="#">
                  Ecommerce<br></br> Website
                </a>
              </div>
              <div
                style={{
                  paddingLeft: "60px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <img
                  src="/images/Home-Page/e-comerece.png"
                  width="150px"
                  alt="Website Design"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


