import { services11 } from "@/data/services";
import React from "react";

export default function WhyChooseUs() {
     const services11 = [
        {
          id: 149,
          iconClass: "flaticon-robot-arm",
          iconimg:"/images/Influence-Buzz/Why-Choose-Us/instant-setup.png",
          title: "Instant Setup",
          description:
            " We connect you with reputable brands that align with your personal style and values, ensuring collaborations feel natural and resonate with your audience.",
          wowClass: "fadeInLeft",
          wowDelay: "0.3s",
        },
        {
          id: 150,
          iconClass: "flaticon-factory-1",
          iconimg:"/images/Influence-Buzz/Why-Choose-Us/creative-freedom.png",
          title: "Creative Freedom",
          description:
            "Your voice matters. We provide the flexibility to express your creativity while offering strategic guidance to deliver impactful campaigns that engage and inspire.",
          wowClass: "fadeInDown",
          wowDelay: "0.3s",
        },
        {
          id: 151,
          iconClass: "flaticon-fuel-station",
          iconimg:"/images/Influence-Buzz/Why-Choose-Us/growth-opportunities.png",
          title: "Growth Opportunities",
          description:
            "Expand your reach through high-visibility campaigns and exclusive collaborations. We help you build your personal brand, offering opportunities that elevate your influence and open doors to future partnerships.",
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
        <div className="row pt-5 justify-content-center" >
          {services11.map((item, index) => (
            <div
              key={index}
              className={`col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-5 d-flex align-items-stretch ${item.wowClass}`}              
              data-wow-duration="2s"
              data-wow-delay={item.wowDelay}
            >
              <div className="icon-bx-wraper bx-style-2 m-l40 p-a30 left bg-gray icon-bx-ho d-flex flex-column w-100">
                <div className="icon-bx-sm m-b20" style={{ backgroundColor: "#e21100" }}>
                  <a href="#" className="icon-cell">
                    <img src={item.iconimg} alt="" style={{height:"40px"}}/>
                  </a>
                </div>
                <div className="icon-content p-l40 flex-grow-1">
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
