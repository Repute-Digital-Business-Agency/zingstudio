import { counterData, facts2 } from "@/data/facts";
import React from "react";
import Counter from "../common/Counter";
import Link from "next/link";

export default function ToolsLearning() {
    const facts2 = [
        {
          animation: "fadeInLeft",
          delay: "0.3s",
          iconClass: "flaticon-factory",
        },
        {
         
          animation: "fadeInDown",
          delay: "0.3s",
          iconClass: "flaticon-worker",
        },
        {
          
          animation: "fadeInUp",
          delay: "0.3s",
          iconClass: "flaticon-settings",
        },
        {
         
          animation: "fadeInRight",
          delay: "0.3s",
          iconClass: "flaticon-conveyor",
        },
        {
            animation: "fadeInLeft",
            delay: "0.3s",
            iconClass: "flaticon-factory",
          },
          {
           
            animation: "fadeInDown",
            delay: "0.3s",
            iconClass: "flaticon-worker",
          },
          {
            
            animation: "fadeInUp",
            delay: "0.3s",
            iconClass: "flaticon-settings",
          },
          {
           
            animation: "fadeInRight",
            delay: "0.3s",
            iconClass: "flaticon-conveyor",
          },
          {
            animation: "fadeInLeft",
            delay: "0.3s",
            iconClass: "flaticon-factory",
          },
          {
           
            animation: "fadeInDown",
            delay: "0.3s",
            iconClass: "flaticon-worker",
          },
          {
            
            animation: "fadeInUp",
            delay: "0.3s",
            iconClass: "flaticon-settings",
          },
          {
           
            animation: "fadeInRight",
            delay: "0.3s",
            iconClass: "flaticon-conveyor",
          },
          {
            animation: "fadeInLeft",
            delay: "0.3s",
            iconClass: "flaticon-factory",
          },
          {
           
            animation: "fadeInDown",
            delay: "0.3s",
            iconClass: "flaticon-worker",
          },
          {
            
            animation: "fadeInUp",
            delay: "0.3s",
            iconClass: "flaticon-settings",
          },
          {
           
            animation: "fadeInRight",
            delay: "0.3s",
            iconClass: "flaticon-conveyor",
          },
          {
            animation: "fadeInLeft",
            delay: "0.3s",
            iconClass: "flaticon-factory",
          },
          {
           
            animation: "fadeInDown",
            delay: "0.3s",
            iconClass: "flaticon-worker",
          },
      ];

      const facts3 = [
        {
          animation: "fadeInLeft",
          delay: "0.3s",
          iconClass: "flaticon-factory",
        },
        {
         
          animation: "fadeInDown",
          delay: "0.3s",
          iconClass: "flaticon-worker",
        },
        {
          
          animation: "fadeInUp",
          delay: "0.3s",
          iconClass: "flaticon-settings",
        },
        {
         
          animation: "fadeInRight",
          delay: "0.3s",
          iconClass: "flaticon-conveyor",
        },
        {
            animation: "fadeInLeft",
            delay: "0.3s",
            iconClass: "flaticon-factory",
          },
          {
           
            animation: "fadeInDown",
            delay: "0.3s",
            iconClass: "flaticon-worker",
          },
        ]
  return (
    <>
    
      <div className="content">
        
        <div
          className="section-full bg-white bg-img-fix text-white content-inner "
        //   style={{ backgroundImage: "url(/images/background/bg1.jpg)" }}
        >
          <div className="container">
            <div className="section-content">
              <div className="row">
              <div className="section-head style2 text-center mb-4">
                    <h2 className="title text-dark">Tools That you will learn</h2>
                    <h4 className="text-dark mt-5"> <b style={{color:"#e21100"}}> 40+ </b>Free Premium Digital Marketing Tools</h4>
                    <p className="text-dark" >Worth Of 6 Lakhs</p>
                </div>
                {facts2.map((elm, i) => (
                  <div
                    key={i}
                    className="col-lg-2 col-md-6 col-sm-6 col-6 m-b30"
                  >
                    <div className="m-b30 dlab-box text-center counter-style-2">
                      <div className="icon-lg text-dark">
                        <i className={elm.iconClass} />
                      </div>
                      {/* <div className="counter text-blue m-b5">
                        <Counter max={elm.number} />
                      </div>
                      <span className="counter-text">{elm.text}</span> */}
                    </div>
                  </div>
                ))}
              </div>

              <div className="row">
              <div className="section-head style2 text-center mb-4">
                    <h4 className="text-dark"> <b style={{color:"#e21100"}}> 20+ </b>Digital Marketing AI Tools</h4>
                  
                </div>
                {facts3.map((elm, i) => (
                  <div
                    key={i}
                    className="col-lg-2 col-md-6 col-sm-6 col-6 m-b30"
                  >
                    <div className="m-b30 dlab-box text-center counter-style-2">
                      <div className="icon-lg text-dark">
                        <i className={elm.iconClass} />
                      </div>
                      {/* <div className="counter text-blue m-b5">
                        <Counter max={elm.number} />
                      </div>
                      <span className="counter-text">{elm.text}</span> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
