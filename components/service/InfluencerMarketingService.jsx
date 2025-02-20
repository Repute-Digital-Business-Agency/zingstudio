"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
export default function InfluencerMarketingService() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    
      <div className="dz-ship-industry-zone position-relative bg-white BrandBuzzBanner container-fluid " >
        {/* <div className="dzpattern position-absolute">
          <Image
            alt="#"
            src="/images/pattern/pt13.jpg"
            width="100"
            height="160"
          />
        </div> */}
         <div className="section-head container-fluid text-left ">
            <div className="row">
                <div className="col-11 m-auto">
                <h2 className="title " >Brand Marketing Services by Zingfluence
                </h2>
                <p>At Zingfluence, we specialize in delivering comprehensive 360-degree influencer marketing campaigns that help brands connect with the right audience. As one of the most trusted influencer marketing agencies in India, we work with top influencers across multiple platforms—YouTube, Instagram, Snapchat, Facebook, Twitter, LinkedIn, and more—ensuring maximum reach and engagement for your brand. Our data-driven, hyper-targeted strategies are designed to deliver authentic communication and unmatched value.
                </p>
                <h4>Partner with Zingfluence today and take your brand to new heights!
                </h4>
                </div>
            </div>
            </div>
        <div className="col-11 m-auto px-4 rounded mt-4" style={{ background:"#1a43bf42"}}>
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="banner-content">
                <h1 className="dz-title fw-semibold">
                YouTube Brand Marketing
                </h1>
                <p className="fw-bold">
                Harness the power of top YouTubers to influence potential customers through creative content.
                </p>
                <div className="dz-btn d-flex align-items-center">
                  <Link
                    href={`/contact`}
                    className="btn bg-primary fw-bold text-white"
                  >
                    Hire Top Youtubers
                  </Link>
                
                </div>

                <div className="dz-bannerlist">
                  <ol className="list-circle">
                    <li className="fw-bold">
                     
                      
                      Unboxing Video
                        
                     
                    </li>
                    <li className="fw-bold">
                    
                      
                      Product Reviews

                       
                    
                    </li>
                    <li className="fw-bold">
                    
                      
                      Vlogs & Community Posts
                      
                      
                    </li>
                    <li className="fw-bold">
                     
                      
                      Long & Short-Form Videos
                        
                     
                    </li>
                    {/* <li className="fw-bold">
                      05
                      <a href="#">
                      Memes & Challenges

                        
                      </a>
                    </li> */}
                  </ol>
                </div>
                
              </div>
            </div>
            <div className="col-lg-5 ">
              <div className="banner-media rounded py-5">
                <video
                  autoPlay
                  loop
                  className="video-background rounded"
                  muted
                  width={700}
                  height={500}
                >
                  <source src="/video/video4.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="_FRZVScwggM"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}
