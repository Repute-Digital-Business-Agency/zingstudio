import { services11 } from "@/data/services";
import React from "react";

export default function DefineMe() {
  return (
    <div
    className="section-full content-inner-2 contact-action style2 DefineMe "
   style={{background:"#d23530"}}
  >
    <div className="container">
      <div className="row relative">
        <div
          className="col-md-12 col-lg-8 wow fadeInLeft"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="contact-no-area">
            <h4 className="title newtitle mb-0">Where Creativity and Purpose <br /> Meets !</h4>
          
            
          </div>
        </div>
        <div
          className="col-md-12 col-lg-4 contact-img-bx wow fadeInRight relative"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          {/* <img alt="" src="/images/about-us/define1.png" style={{ width: "50%" }} /> */}
          <img alt="" src="/images/about-us/define.png" style={{ width: "55%" }} />
        </div>
      </div>
    </div>
  </div>
  );
}
