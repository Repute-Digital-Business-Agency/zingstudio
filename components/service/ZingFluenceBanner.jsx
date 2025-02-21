import React from "react";
import Link from "next/link";
export default function ZingFluenceBanner() {
  return (
    <>
    <div
      className="dlab-bnr-inr overlay-black-middle text-center bg-pt"
      style={{ backgroundImage: "url(/images/about-us/banner.jpg)" }}
    >
      <div className="container">
        <div className="dlab-bnr-inr-entry align-m text-center">
          <h1 className="text-white">ZingFluence</h1>
          {/* Breadcrumb row */}
          <div className="breadcrumb-row">
            {/* <ul className="list-inline">
              <li>
                <Link href={`/`}>Home</Link>
              </li>
              <li>
              <Link href={`/about`}>About us</Link></li>
            </ul> */}
          </div>
          {/* Breadcrumb row END */}
        </div>
      </div>
    </div>

<div className="section-full bg-white content-inner" style={{ marginBottom:"150px"}}>
<div className="container">
  <div className="text-center wow fadeInUp"
      data-wow-duration="2s"
      data-wow-delay="0.3s">
    <h2 className="title">Our Services</h2>
    <div>
         <h4 className="mb-0 " style={{fontWeight:"300"}}>
         At Zingfluence, we’re all about making your brand stand out in the digital world. From handpicking the perfect influencers to crafting bold campaigns and tracking real-time results, we’ve got it covered. We create authentic, eye-catching content that connects with your audience and delivers big impact. Whether you’re looking to boost brand awareness, skyrocket engagement, or drive sales, Zingfluence has the strategy and tools to make it happen. Let’s get your brand buzzing!

    </h4>
    </div>
   
  </div>
  
</div>
</div>
</>
  );
}