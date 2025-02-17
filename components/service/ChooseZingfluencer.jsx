import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function ChooseZingFluencer() {
  return (
    <div className="section-full content-inner const-about choose-Zf">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-4 col-md-12 col-sm-12 col-12 wow bounceInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="radius-sm m-b30 ">
              <Image className="choose-Zf-img"
                alt=""
                src="/images/about/pic12.jpg"
                width="600"
                height="722"
                 style={{
                    height:"700px",
                    objectFit:"cover"
                }}
              />
            </div>
          </div>
          <div
            className="col-lg-8 col-md-12 col-sm-12 col-12 m-b15 wow bounceInRight"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
          

            <div className=" m-auto">
            <div className="our-story">
              {" "}
              <h2 className="title text-primary">
                {" "}
                <Link href="/am-a-zing">
                  
                   
Why Choose Zingfluencer ?
                </Link>
              </h2>
              {/* <h4 className="title"> Empowering women to lead the future</h4> */}
              <p style={{ color: "#282222" }}>
                At Zing Studio, we strive to create opportunities to uplift
                women, enabling them to realize their potential and take control
                of the decisions that shape their lives.
              </p>
            </div>
            <div
              className="icon-bx-wraper m-b30 left wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="icon-md">
                <a href="#" className="icon-cell ">
                  <i className="flaticon-factory"></i>
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-tilte">
                  10% disounted cost for Women Entrepreneurs:
                </h4>
                <p className="" style={{color:"#282222"}}>
                  We believe in supporting women entrepreneurs on their journey
                  to success, that’s why we offer a 10% discount on our services
                  to help them grow their businesses with ease and confidence.
                </p>
              </div>
            </div>
            <div
              className="icon-bx-wraper m-b30 left wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="icon-md">
                <a href="#" className="icon-cell">
                  <i className="flaticon-settings"></i>
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-tilte">
                  Turning Career Breaks into Breakthroughs for Women:
                </h4>
                <p className="" style={{color:"#282222"}}>
                  We prioritize hiring and providing a supportive platform for
                  women and encouraging those who have taken a career break to
                  restart and thrive in their professional journey.
                </p>
              </div>
            </div>

            <div
              className="icon-bx-wraper m-b30 left wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="icon-md">
                <a href="#" className="icon-cell">
                  <i className="flaticon-settings"></i>
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-tilte">
                  Turning Career Breaks into Breakthroughs for Women:
                </h4>
                <p className="" style={{color:"#282222"}}>
                  We prioritize hiring and providing a supportive platform for
                  women and encouraging those who have taken a career break to
                  restart and thrive in their professional journey.
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
