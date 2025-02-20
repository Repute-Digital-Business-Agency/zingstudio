import { counterData, facts2 } from "@/data/facts";
import React from "react";
import Counter from "../common/Counter";
import Link from "next/link";

export default function NumberToCelebrate() {
    const facts2 = [
        {
          number: 350,
          text: "Brands",
      
          animation: "fadeInLeft",
          delay: "0.3s",
          iconClass: "flaticon-factory",
        },
        {
          number: 1000,
          text: "Campaigns",
          animation: "fadeInDown",
          delay: "0.3s",
          iconClass: "flaticon-worker",
        },
        {
          number: 200,
          text: "Exclusive Creators",
          animation: "fadeInUp",
          delay: "0.3s",
          iconClass: "flaticon-settings",
        },
       
      ];
  return (
    <>
    <div className="section-full content-inner bg-white bg-img-fix"
    style={{ backgroundImage: "url(/images/background/cs.jpg)" }}
    >
          <div className="container">
            <div className="section-content">
            <div className="section-head text-center ">
            <h2 className="title mb-5" >Numbers To Celebrate!</h2>
            
            </div>
              <div className="row m-auto" style={{margin:"auto"}}>
             
                {facts2.map((elm, i) => (
                  <div
                    key={i}
                    className="col-lg-4 col-md-6 col-sm-6 col-6 m-b30 m-auto"
                  >
                    <div className="counter-style-1 text-center">
                      <div className="">
                        <span className="counter" style={{fontWeight:"400"}}>
                          <Counter max={elm.number} />+
                        </span>
                      </div>
                      <span className="counter-text">{elm.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
