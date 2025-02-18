import { services11 } from "@/data/services";
import React from "react";

export default function Services1() {
  return (
    <div className="section-full content-inner bg-white relative" style={{ backgroundImage: "url(/images/about-us/about-bg.png)" }}>
      <div style={{ position: "absolute", top: "10px", left: "100px", animation: "moveImage 5s linear infinite" }}>
        <img
          src="/images/Academy/lets-connect/lets-connect-img.png"
          style={{ width: "40%" }}
        />
      </div>

      
      {/* <div style={{ position: "absolute", top: "10px", right: "100px", animation: "moveImage2 5s linear infinite" }}>
          <img
            src="/images/Academy/lets-connect/lets-connect-img.png"
            style={{ width: "40%" }}
          />
        </div> */}
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">Why Choose Zing?</h2>
          <p>
            Zing Studio offers expert branding, web design, and digital marketing solutions tailored to your business needs. With a strategic approach, creative excellence, and cost-effective services, we help brands establish a strong and impactful digital presence.

          </p>
        </div>
        <div className="row">
          {services11.map((item, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 col-sm-12 m-b30 wow ${item.wowClass}`}
              data-wow-duration="2s"
              data-wow-delay={item.wowDelay}
            >
              <div className="icon-bx-wraper bx-style-2 m-l40 p-a30 left bg-gray icon-bx-ho">
                <div className="icon-bx-sm  m-b20" style={{ backgroundColor: "#e21100" }}>
                  <a href="#" className="icon-cell">
                    <i className={item.iconClass} />
                  </a>
                </div>
                <div className="icon-content p-l40">
                  <h5 className="dlab-tilte">{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
