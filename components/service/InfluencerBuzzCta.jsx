import React from "react";
import Link from "next/link";
export default function InfluencerBuzzCta() {
  return (
    <div className="section-full call-action  wow fadeIn"  data-wow-duration="2s" data-wow-delay="0.2s" style={{background:"#e21100"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-white wow fadeInUp"
      data-wow-delay="1s">
            <h2 className="title">What are you Waiting For ?</h2>
            {/* <p className="m-b0">
            Get Expert Guidance on Web Design Packages, schedule a consultation with our experts at Zing Studio and find the perfect solution tailored to your business goals.

            </p> */}
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
