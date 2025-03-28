import React from "react";
import Link from "next/link";
export default function ZingFluenceCta() {
  return (
    <div className="section-full call-action  wow fadeIn"  data-wow-duration="2s" data-wow-delay="0.2s" style={{background:"#d23530"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-white wow fadeInUp"
      data-wow-delay="1s">
            <h2 className="title">Let’s Influence Together!
            </h2>
            <p className="m-b0">
            Ready to make some noise?  Let’s team up and create influencer campaigns that shine, spark engagement, and get your brand buzzing! Let’s do this!


            </p>
          </div>
          <div className="col-lg-3 d-flex wow fadeInUp"
      data-wow-delay="1s">
            <Link
              href={`/contact`}
              className="site-button btnhover13 white align-self-center outline ms-auto outline-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
