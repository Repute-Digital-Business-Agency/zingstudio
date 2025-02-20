import { foodItems } from "@/data/foodItems";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function BenifitsOfBuzz() {
   const foodItems = [
    {
      imgSrc: "/images/icon/food/icon1.png",
      title: "Lorem Ipsum",
      description:
        "I have worked with many companies offering supplemental industrial services, and out of all those companies I have worked with many companies offering supplemental industrial services, and out of all those companies",
      classes: "col-lg-3 col-md-6 col-sm-6 m-b30 wow bounceInLeft",
      dataWowDuration: "2s",
      dataWowDelay: "0.3s",
      bgColor:"#e9e9e9"
    },
    {
      imgSrc: "/images/icon/food/icon2.png",
      title: "Lorem Ipsum",
      description:
        "I have worked with many companies offering supplemental industrial services, and out of all those companies. I have worked with many companies offering supplemental industrial services, and out of all those companies",
      classes: "col-lg-3 col-md-6 col-sm-6 m-b30 wow bounceInUp",
      dataWowDuration: "2s",
      dataWowDelay: "0.3s",
      bgColor:"#1a43bf42"
    },
    {
      imgSrc: "/images/icon/food/icon3.png",
      title: "Lorem Ipsum",
      description:
        "I have worked with many companies offering supplemental industrial services, and out of all those companies. I have worked with many companies offering supplemental industrial services, and out of all those companies",
      classes: "col-lg-3 col-md-6 col-sm-6 m-b30 wow bounceInRight",
      dataWowDuration: "2s",
      dataWowDelay: "0.3s",
      bgColor:"#f7f9fb"
    },
    {
      imgSrc: "/images/icon/food/icon4.png",
      title: "Lorem Ipsum",
      description:
        "I have worked with many companies offering supplemental industrial services, and out of all those companies. I have worked with many companies offering supplemental industrial services, and out of all those companies",
      classes: "col-lg-3 col-md-6 col-sm-6 m-b30 wow bounceInLeft ",
      dataWowDuration: "2s",
      dataWowDelay: "0.3s",
      bgColor:"#e2110026"
    },
   
  ];
  return (
    <div className="section-full bg-white content-inner">
      <div className="container-fluid">
        <div className="col-10 m-auto" >
        <div className="row ">
            <div className="section-head text-center ">
            <h2 className="title mb-5" >Benifits of Joining Buzzfame !</h2>
            {/* <p style={{color:"#282222"}}>Amplifying Brands with Influence and Prestige
            </p> */}
            </div>
           
          {foodItems.map((item, index) => (
            <div
              key={index}
              className={item.classes}
              data-wow-duration={item.dataWowDuration}
              data-wow-delay={item.dataWowDelay}
            >
              <div className="icon-bx-wraper sr-iconbox1 bg-gray" style={{background:item.bgColor}}>
                <div className="icon-lg m-b20 icon-up">
                  <a className="icon-cell">
                    <Image
                      src={item.imgSrc}
                      width={70}
                      height={70}
                      alt={item.title}
                    />
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-tilte">{item.title}</h4>
                  <p style={{color:"#282222"}}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center">
          <a href="#" className="site-button btnhover13 primary align-self-center outline ms-auto outline-2 wow fadeInLeft"
              data-wow-delay="0.8s" >
           Enquiry Now
              
            </a>
          </div>


        </div>
        </div>
      
      </div>
    </div>
  );
}
