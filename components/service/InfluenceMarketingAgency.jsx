import React from "react";
import Image from "next/image";
export default function MarketingAgency() {
  return (
    <section
      className="content-inner-4 ev-aboutus pb-5"
      style={{
        backgroundImage: "",
        backgroundPosition: "center",
       
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="ev-aboutus-media h-100">
              <span className="ev-about3">
                <Image
                  alt=""
                  src="/images/Zingfluence/influencer-img-2.jpg"
                  width="220"
                  height="220"
                />
              </span>
              <span className="ev-about1">
                <Image
                  alt=""
                   src="/images/Zingfluence/influencer-img-1.jpg"
                  width="500"
                  height="825"
                />
              </span>
              <span className="ev-about2">
                <Image
                  alt=""
                   src="/images/Zingfluence/influencer-img-3.jpg"
                  width="170"
                  height="291"
                />
              </span>
            </div>
          </div>
          <div className="col-lg-6 ev-about-content ">
            {/* <div className="section-head style-2">
              <h2 className="title">
              Influencer Buzz 
               
              </h2>
            </div> */}
            {/* <ul className="ev-list mb-4">
              <li>
                <i className="fas fa-certificate" />
                Security and privacy
              </li>
              <li>
                <i className="fas fa-certificate" />
                Artificial intelligence
              </li>
              <li>
                <i className="fas fa-certificate" />
                New media
              </li>
              <li>
                <i className="fas fa-certificate" />
                Cryptocurrency
              </li>
            </ul> */}
            <p className="wow fadeInRight" style={{color:"#282222"}}>
            At Zingfluence, we provide premium influencer marketing services by integrating strategic planning, creativity, and data-driven insights. Our process begins with carefully selecting influencers who align with your brand values and objectives, ensuring authentic and effective partnerships. We develop customized campaigns that engage your target audience and drive measurable results. 

            </p>

            {/* <a href="/influencer-buzz" className="site-button outline outline-2 btnhover11">
              Read More
              <i className="fas fa-angle-double-right ms-2" />
            </a> */}

            {/* <div className="section-head style-2 mt-5">
              <h2 className="title">
              Brand Buzz
                
              </h2>
            </div> */}

            <p className="wow fadeInRight" style={{color:"#282222"}}>
            Our content creation focuses on producing high-quality, relevant content that resonates with followers, fostering trust and engagement. Additionally, we monitor campaign performance closely, utilizing analytics to optimize strategies and maximize ROI. With Zingfluence, you can trust that every influencer marketing campaign is designed for tangible and sustained success.

            </p>
            
           
            
            {/* <a href="/brand-buzz" className="site-button outline outline-2 btnhover11">
              Read More
              <i className="fas fa-angle-double-right ms-2" />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
