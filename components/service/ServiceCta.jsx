import React from "react";
import Link from "next/link";
export default function ServiceCta({cta}) {
  return (
    <div
      className="section-full call-action  wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.3s"
      style={{background:"#e21100"}}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-white">
            <h2 className="title">{cta.title}</h2>
            <p className="m-b0">
            {cta.description}

            </p>
          </div>
          <div className="col-lg-3 d-flex">
            <Link
              href={`/contact`}
              className="site-button btnhover13 white align-self-center outline ms-auto outline-2"
            >
             {cta.button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}