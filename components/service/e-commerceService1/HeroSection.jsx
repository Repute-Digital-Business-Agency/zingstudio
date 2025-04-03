"use client";

import React from "react";

export default function HeroSection({head,option,bannerContent,offers}) {
  return (
    <>
        <div
      className="section-full   bg-img-fix pr-service-hero trans no-bg pb-5"
    
    >
      <div className="container-fluid ">
        <div className="row m-0">
            <div className="col-11 mx-auto p-0 m-0">
                <div className="containter-fluid p-0 m-0">
                    <div className="row m-0">
                        <div className="col-xl-6 col-md-12 m-b30  pt-5 " >
                            <img className="rounded" src={bannerContent.src} alt="" style={{height:"100%", width:"100%",objectFit:"contain"}}/>
                        </div>

                        <div className="col-xl-6 col-md-12 content-inner chosesus-content text-black pb-md-0 px-2 px-xl-5 pt-2 pt-xl-5">
                        <p className="font-16  wow fadeInUp text-black mb-3" data-wow-delay="0.4s">
                            {bannerContent.caption}

                            </p>
                            <h2
                            className="title-box  mb-2 wow fadeInUp text-black"
                            data-wow-delay="0.2s" style={{fontWeight:"500"}}
                            >
                            {bannerContent.head} 
                            </h2>
                            
                            <h3
                            className="font-weight-300   wow fadeInUp mt-3"
                            data-wow-delay="0.6s"
                            style={{fontSize:"16px",
                                lineHeight:"1"
                            }}
                            >
                            {bannerContent.subTitle}

                            </h3>
                            
                            {/* <ul
                            className="list-arrow  wow fadeInUp"
                            data-wow-delay="1s"
                            > */}
                            
                            <ul
                                className=" wow fadeInUp"
                                data-wow-delay="0.6s"
                                >
                                     {bannerContent.list.map((item, index) => (
                                     <li className="d-flex justify-content-start mb-2" key={index} style={{listStyle:"none",}}>
                                        <div className="mt-1">
                                        <i className="ti-time "  style={{fontSize:"20px"}}/>
                                        </div>
                                        <div className="mx-3" style={{ borderBottom:"2px dashed gray",}}>{item} </div></li>
                                     ))}
                                        
                                        
                            </ul>

                            <div className="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.6s">
                                <a
                                    href="/contact"
                                    className="site-button btnhover20 "
                                >
                                    <span>Get a quote</span>
                                </a>
                            </div>

                            <h5
                            className="font-weight-300 mt-3  wow fadeInUp"
                            data-wow-delay="0.6s"
                            style={{fontSize:"12px"}}
                            >
                            {bannerContent.description}

                            </h5>

                            {/* <h3
                            className="font-weight-400 mt-3  wow fadeInUp"
                            data-wow-delay="0.6s"
                            style={{fontSize:"15px"}}
                            >
                                 <span className="rating-bx" style={{paddingRight:"5px"}}>
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </span>
                            {bannerContent.rating}

                            </h3> */}


                                        
                            
                            
                            {/* </ul> */}
                        </div>


                        
                    </div>
                    {/* <div className="row m-0">
                        <p>
                        {bannerContent?.about}
                        </p>
                    </div> */}
                </div>
            </div>
        
        </div>
      </div>
    </div>

    <div
    className="section-full content-inner-2 bg-primary wow fadeIn "
    data-wow-duration="2s"
    data-wow-delay="0.2s"

    >
    <div className="container">
    <div className="row">
        <div className="col-lg-12 text-center ">
        <h2 className="title text-white mb-3">
        {offers.head}
        </h2>
        <p>
        {offers.caption}
        </p>
        {/* <p className="mt-3">
        {offers.code}
        </p> */}
        </div>
    </div>
    </div>
    </div>
    </>
  );
}
