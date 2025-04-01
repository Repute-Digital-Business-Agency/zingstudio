import React from "react";
import Link from "next/link";
export default function Cta2() {
  return (   
<div className="section-full call-action  wow fadeIn"  data-wow-duration="2s" data-wow-delay="0.2s" style={{background:"#d23530"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-white">
            <h2 className="title">Let’s Build Something Amazing!</h2>
            <p className="m-b0">
            Got big ideas? We’re here to make them happen!  From sleek websites to powerful digital strategies, let’s team up and take your brand to the next level. Let’s go!
            </p>
          </div>
          <div className="col-lg-3 d-flex">
            <Link
              href={`/contact`}
              className="site-button white align-self-center outline ms-auto outline-2 btnhover14"
            >
              Get In Touch      
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
