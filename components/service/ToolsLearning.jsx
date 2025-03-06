import { counterData, facts2 } from "@/data/facts";
import React from "react";
import Counter from "../common/Counter";
import Link from "next/link";

export default function ToolsLearning({ToolsContent,Tools1,Tools2}) {
{/*

    const ToolsContent = {
      tool1Num:"40+",
      tool1Title :"Free Premium Digital Marketing Tools",
      tool1worth :"Worth Of 6 Lakhs",
      tool2Num:"20+",
      tool2Title :"Digital Marketing AI Tools",
      tool2worth :"Worth Of 6 Lakhs"
    }
    const Tools1 = [
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

      const Tools2 = [
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

    */}
  return (
    <>
    
      <div className="content">
        
        <div
          className="section-full bg-white bg-img-fix text-white content-inner pb-0"
        //   style={{ backgroundImage: "url(/images/background/bg1.jpg)" }}
        >
          <div className="container">
            <div className="section-content">
              <div className="row">
              <div className="section-head style2 text-center mb-4">
                    <h2 className="title text-dark">Tools That you will learn</h2>
                    <h4 className="text-dark mt-5"> <b style={{color:"#e21100"}}> {ToolsContent?.tool1Num} </b>{ToolsContent?.tool1Title}</h4>
                    <p className="text-dark" >{ToolsContent?.tool1worth}</p>
                </div>
                {Tools1?.map((elm, i) => (
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

             { Tools2.length > 0 && <div className="row">
              <div className="section-head style2 text-center mb-4">
                    <h4 className="text-dark"> <b style={{color:"#e21100"}}> {ToolsContent?.tool2Num} </b>{ToolsContent?.tool2Title}</h4>
                  
                </div>
                {Tools2?.map((elm, i) => (
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
              </div>}
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
