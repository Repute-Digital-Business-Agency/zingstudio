import React from "react";
import Link from "next/link";
export default function ExpertsCta() {
  return (
    <div
      className="section-full call-action  mt-5"
      style={{background:"#e21100"}}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-white wow fadeInUp"
      data-wow-delay="1s">
            <h2 className="title">Let’s Build Something Amazing!
            </h2>
            <p className="m-b0">
            Got big ideas? We’re here to make them happen!  From sleek websites to powerful digital strategies, let’s team up and take your brand to the next level. Let’s go!

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
