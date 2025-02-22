import React from "react";
import Link from "next/link";
export default function ServiceCta() {
  return (
    <div
      className="section-full call-action bg-primary wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.3s"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-white">
            <h2 className="title">Not sure which package is the best for you?</h2>
            <p className="m-b0">
            Get Expert Guidance on Web Design Packages, schedule a consultation with our experts at Zing Studio and find the perfect solution tailored to your business goals.

            </p>
          </div>
          <div className="col-lg-3 d-flex">
            <Link
              href={`/contact`}
              className="site-button btnhover13 white align-self-center outline ms-auto outline-2"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}