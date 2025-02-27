"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
export default function InfluencerMarketingService() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="bg-white">
    
      <div className="dz-ship-industry-zone position-relative  BrandBuzzBanner container " >
        {/* <div className="dzpattern position-absolute">
          <Image
            alt="#"
            src="/images/pattern/pt13.jpg"
            width="100"
            height="160"
          />
        </div> */}

   
         <div className="section-head container text-left ">
            <div className="row">
                <div className="col-12 m-auto">
                <h2 className="title " >Brand Marketing Services by Zingfluence
                </h2>
                <p>At Zingfluence, we specialize in delivering comprehensive 360-degree influencer marketing campaigns that help brands connect with the right audience. As one of the most trusted influencer marketing agencies in India, we work with top influencers across multiple platforms—YouTube, Instagram, Snapchat, Facebook, Twitter, LinkedIn, and more—ensuring maximum reach and engagement for your brand. Our data-driven, hyper-targeted strategies are designed to deliver authentic communication and unmatched value.
                </p>
                <h4>Partner with Zingfluence today and take your brand to new heights!
                </h4>
                </div>
            </div>
          </div>
          <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 m-auto">
             
                
                <div className="section-content box-sort-in p-b0 button-example">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-lg text-primary radius">
                          <a href="#" className="icon-cell text-red">
                            {/* <i className="ti-video-clapper" /> */}
                            <img src="/images/brand-buzz/Colored-icons/colored-icon-01.png" alt="colored-icon" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                          Enhanced Brand Visibility
                          </h5>
                          <p>
                          Amplify your brand’s presence with influencer-driven campaigns that reach wider, targeted audiences.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                      <div className="icon-lg text-primary radius">
                          <a href="#" className="icon-cell text-red">
                            {/* <i className="ti-video-clapper" /> */}
                            <img src="/images/brand-buzz/Colored-icons/colored-icon-05.png" alt="colored-icon" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                          Authentic Audience Engagement
                          </h5>
                          <p>
                          Build meaningful connections through trusted influencers who resonate with your target market.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                      <div className="icon-lg text-primary radius">
                          <a href="#" className="icon-cell text-red">
                            {/* <i className="ti-video-clapper" /> */}
                            <img src="/images/brand-buzz/Colored-icons/colored-icon-02.png" alt="colored-icon" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                          Enhanced Brand Credibility

                          </h5>
                          <p>
                          Gain consumer trust as influencers endorse your brand with authentic, relatable content.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                   
                  {/* </div>
                  <div className="row"> */}
                  
                    <div className="col-lg-6 col-md-6 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                      <div className="icon-lg text-primary radius">
                          <a href="#" className="icon-cell text-red">
                            {/* <i className="ti-video-clapper" /> */}
                            <img src="/images/brand-buzz/Colored-icons/colored-icon-03.png" alt="colored-icon" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                          Optimized Conversion Rates
                          </h5>
                          <p>
                          Drive more leads and sales with influencer collaborations that turn audience engagement into action.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                      <div className="icon-lg text-primary radius">
                          <a href="#" className="icon-cell text-red">
                            {/* <i className="ti-video-clapper" /> */}
                            <img src="/images/brand-buzz/Colored-icons/colored-icon-04.png" alt="colored-icon" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                          Cost-Efficient Marketing
                          </h5>
                          <p>
                          Achieve maximum impact with campaigns that deliver results without exceeding your budget.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                      <div className="icon-lg text-primary radius">
                          <a href="#" className="icon-cell text-red">
                            {/* <i className="ti-video-clapper" /> */}
                            <img src="/images/brand-buzz/Colored-icons/colored-icon-06.png" alt="colored-icon" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                          Data-Driven Insights
                          </h5>
                          <p>
                          Access real-time analytics to track performance, optimize strategies, and ensure continuous growth.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-sm text-primary radius">
                          <a href="#" className="icon-cell text-red">
                            <i className="ti-video-clapper" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                          Lorem ipsum dolor
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 m-b30">
                      <div className="icon-bx-wraper left">
                        <div className="icon-xs text-primary radius">
                          <a href="#" className="icon-cell text-orange">
                            <i className="ti-gift" />
                          </a>
                        </div>
                        <div className="icon-content">
                          <h5 className="dlab-tilte text-capitalize">
                          Lorem ipsum dolor
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod.
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


    
{/*         
        <div className="col-12 m-auto px-4 rounded mt-4" style={{ background:"#1a43bf42"}}>
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
                  <ol className="list-hand-point">
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
                    <li className="fw-bold">
                    
                      Memes & Challenges

                        
                    
                    </li>
                    <li className="fw-bold">
                     
                      
                      Long & Short-Form Videos
                        
                     
                    </li>
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
                  <source src="/images/zing-influ/dm-demo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 m-auto px-4 rounded mt-4" style={{ background:"#1a43bf42"}}>
          <div className="row align-items-center">
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
                 <source src="/images/zing-influ/dm-demo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="banner-content">
                <h1 className="dz-title fw-semibold">
                Instagram Brand Marketing
                </h1>
                <p className="fw-bold">
                Create a lasting impression on Instagram with content from India’s most influential Instagrammers.
                </p>
                <div className="dz-btn d-flex align-items-center">
                  <Link
                    href={`/contact`}
                    className="btn bg-primary fw-bold text-white"
                  >
                    Hire Top Instagramers
                  </Link>
                
                </div>

                <div className="dz-bannerlist">
                  <ol className="list-hand-point">
                    <li className="fw-bold">
                     
                      
                    Posts & Stories

                        
                     
                    </li>
                    <li className="fw-bold">
                    
                      
                    Reels & IGTV Videos


                       
                    
                    </li>
                    <li className="fw-bold">
                    
                      
                    User-Generated Content (UGC)

                      
                      
                    </li>
                    <li className="fw-bold">
                     
                      
                    Influencer Reviews & Endorsements

                        
                     
                    </li>
                    <li className="fw-bold">
                    
                    Memes & Polls

                        
                    
                    </li>
                    <li className="fw-bold">
                     
                      
                      Long & Short-Form Videos
                        
                     
                    </li>
                  </ol>
                </div>
                
              </div>
            </div>
           
          </div>
        </div>


        <div className="col-12 m-auto px-4 rounded mt-4" style={{ background:"#1a43bf42"}}>
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="banner-content">
                <h1 className="dz-title fw-semibold">
                LinkedIn Brand Marketing

                </h1>
                <p className="fw-bold">
                Maximize your brand's professional reach with LinkedIn influencers, targeting industry leaders and professionals.


                </p>
                <div className="dz-btn d-flex align-items-center">
                  <Link
                    href={`/contact`}
                    className="btn bg-primary fw-bold text-white"
                  >
                 Hire LinkedIn influencers
                  
                  </Link>
                
                </div>

                <div className="dz-bannerlist">
                  <ol className="list-hand-point">
                    <li className="fw-bold">
                     
                      
                    Brand Awareness Campaigns


                        
                     
                    </li>
                    <li className="fw-bold">
                    
                      
                    TVC Amplification



                       
                    
                    </li>
                    <li className="fw-bold">
                    
                    LinkedIn Page Growth


                      
                      
                    </li>
                    <li className="fw-bold">
                     
                      
                    Talent Acquisition & Hiring Campaigns
                        
                     
                    </li>
                    <li className="fw-bold">
                    
                    Targeted Launches & Sign-Up Drives


                        
                    
                    </li>
                    <li className="fw-bold">
                     
                      
                    Credibility & Visibility Boosts

                        
                     
                    </li>
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
                  <source src="/images/zing-influ/dm-demo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 m-auto px-4 rounded mt-4" style={{ background:"#1a43bf42"}}>
          <div className="row align-items-center">
            
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
                  <source src="/images/zing-influ/dm-demo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="banner-content">
                <h1 className="dz-title fw-semibold">
                Meme Marketing
                </h1>
                <p className="fw-bold">
                Engage your audience with the viral potential of memes—perfect for relatable, humorous, and shareable content.

                </p>
                <div className="dz-btn d-flex align-items-center">
                  <Link
                    href={`/contact`}
                    className="btn bg-primary fw-bold text-white"
                  >
                   Hire meme influencers
                  </Link>
                
                </div>

                <div className="dz-bannerlist">
                  <ol className="list-hand-point">
                    <li className="fw-bold">
                     
                      
                    Meme Creation & Customization

                        
                     
                    </li>
                    <li className="fw-bold">
                    
                      
                    Amplification of Trending Memes


                       
                    
                    </li>
                    <li className="fw-bold">
                    
                      
                    Campaign-Specific Memes for High Engagement

                      
                    </li>
                    <li className="fw-bold">
                     
                      
                      Long & Short-Form Videos
                        
                     
                    </li>
                    <li className="fw-bold">
                    
                      Memes & Challenges

                        
                    
                    </li>
                    <li className="fw-bold">
                     
                      
                      Long & Short-Form Videos
                        
                     
                    </li>
                  </ol>
                </div>
                
              </div>
            </div>
          </div>
        </div>
          */}

      </div>
      
    </div>
  );
}
