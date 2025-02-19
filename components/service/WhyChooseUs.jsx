import { services11 } from "@/data/services";
import React from "react";

export default function WhyChooseUs() {
     const services11 = [
        {
          id: 149,
          iconClass: "flaticon-robot-arm",
          title: "Instant Setup",
          description:
            " Easy onboarding to start earning quickly.",
          wowClass: "fadeInLeft",
          wowDelay: "0.3s",
        },
        {
          id: 150,
          iconClass: "flaticon-factory-1",
          title: "Diverse Opportunities",
          description:
            "Connect with brands that match your niche and style.",
          wowClass: "fadeInDown",
          wowDelay: "0.3s",
        },
        {
          id: 151,
          iconClass: "flaticon-fuel-station",
          title: "Transparent Tracking: ",
          description:
            " Monitor your performance and earnings in real-time.",
          wowClass: "fadeInRight",
          wowDelay: "0.3s",
        },
        
        
      
      ];
  return (
    <div className="section-full content-inner bg-white relative" >
     
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">Why Choose Us?</h2>
         
        </div>
        <div className="row pt-5">
          {services11.map((item, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 col-sm-12 m-b30 wow ${item.wowClass}`}
              data-wow-duration="2s"
              data-wow-delay={item.wowDelay}
            >
              <div className="icon-bx-wraper bx-style-2 m-l40 p-a30 left bg-gray icon-bx-ho">
                <div className="icon-bx-sm  m-b20" style={{ backgroundColor: "#e21100" }}>
                  <a href="#" className="icon-cell ">
                    <i className={`${item.iconClass} text-white`} />
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
