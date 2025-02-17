import React from "react";
import Link from "next/link";
export default function ExpertsCta() {
  return (
    <div
      className="section-full call-action  "
      style={{background:"#e21100"}}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-white wow fadeInUp"
      data-wow-delay="1s">
            <h2 className="title">Book a Session
            </h2>
            <p className="m-b0">
            Book a session with our experts to receive tailored guidance in web design, digital marketing, or branding, and take your business to the next level with strategic insights and expertise.

            </p>
          </div>
          <div className="col-lg-3 d-flex wow fadeInUp"
      data-wow-delay="1s">
            <Link
              href={`/contact`}
              className="site-button btnhover13 white align-self-center outline ms-auto outline-2"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
