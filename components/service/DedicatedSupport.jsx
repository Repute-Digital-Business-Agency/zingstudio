import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function DedicatedSupport() {
  return (
    <div className="section-full content-inner const-about choose-Zf bg-gray">
      <div className="container">
        <div className="row align-items-center">
          
          <div
            className="col-lg-8 col-md-12 col-sm-12 col-12 m-b15 wow bounceInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
          

            <div className=" m-auto">
            <div className="our-story">
              {" "}
              <h2 className="title text-primary mb-5">
               
                Dedicated Support
             
              </h2>
              {/* <h4 className="title"> Empowering women to lead the future</h4> */}
              {/* <p style={{ color: "#282222" }}>
                At Zing Studio, we strive to create opportunities to uplift
                women, enabling them to realize their potential and take control
                of the decisions that shape their lives.
              </p> */}

             
            </div>
            <div
              className="icon-bx-wraper m-b30 left wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="icon-lg">
                <a href="#" className="icon-cell ">
                  {/* <i className="flaticon-factory"></i> */}

                  {/* <img src="images/Influence-Buzz/Dedicated-Support/icon-1.png" alt="" /> */}
                  <img src="/images/brand-buzz/Colored-icons/colored-icon-02.png" alt="colored-icon" />
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-tilte mb-2">
                We've Got Your Back
                </h4>
                <p className="" style={{color:"#282222"}}>
                From start to finish, our support squad is here to keep things running smoothly and answer your questions—fast and hassle-free.
                </p>
              </div>
            </div>
            <div
              className="icon-bx-wraper m-b30 left wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="icon-lg">
                <a href="#" className="icon-cell">
                  {/* <i className="flaticon-settings"></i> */}
                  {/* <img src="images/Influence-Buzz/Dedicated-Support/icon-2.png" alt="" /> */}
                  <img src="/images/brand-buzz/Colored-icons/colored-icon-01.png" alt="colored-icon" />
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-tilte mb-2">
                You Create, We Handle the Rest
                </h4>
                <p className="" style={{color:"#282222"}}>
                Focus on delivering standout content while we take care of the details. Smooth plans, flawless execution—your success, our mission.
                </p>
              </div>
            </div>

           
          </div>
          </div>

          <div
            className="col-lg-4 col-md-12 col-sm-12 col-12 wow  bounceInRight"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="radius-sm m-b30 " style={{width:"100%"}}>
              <Image className="choose-Zf-img"
                alt=""
                src="/images/Influence-Buzz/Dedicated-Support/ds-img.jpg"
                width="600"
                height="722"
                 style={{
                    height:"500px",
                    objectFit:"cover"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
