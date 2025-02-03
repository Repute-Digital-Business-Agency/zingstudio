import React from "react";
import Link from "next/link";
export default function Cta() {
  return (
    <div
      className="section-full call-action bg-primary "
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-white wow fadeInUp"
      data-wow-delay="1s">
            <h2 className="title">Amazing things happen to your business</h2>
            <p className="m-b0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="col-lg-3 d-flex wow fadeInUp"
      data-wow-delay="1s">
            <Link
              href={`/contact`}
              className="site-button btnhover13 white align-self-center outline ms-auto outline-2"
            >
              Contac t Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
