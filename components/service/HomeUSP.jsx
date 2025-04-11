import React from "react";
import Link from "next/link";
export default function Cta() {
  return (
    <>


<div
      className="section-full call-action bg-primary wow fadeIn ourusp"
      data-wow-duration="2s"
      data-wow-delay="0.3s"
    >
      <div className="container-fluid">

        
        <div className="row">
          <div className="col-12 text-white" style={{marginBottom:"-5px"}}>
            

            <marquee behavior="scroll" direction="left" scrollamount="10">
            <span className="title text-uppercase" style={{margin:"0 50px 0 0"}}>Cost Effective Solution</span>
            <span className="title text-uppercase" style={{margin:"0 50px"}}>Cutting Edge Technology</span>
            <span className="title text-uppercase" style={{margin:"0 50px"}}>Result Driven Service </span>
            
            </marquee>

     
          </div>
         
        </div>
      </div>

      
    </div>
    </>
  
  );
}


