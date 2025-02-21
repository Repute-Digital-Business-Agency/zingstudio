"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
export default function StudentJourneynew({services10, studentJourneyContent}) {
  
  
  const [isOpen, setOpen] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  {/* 

    const studentJourneyContent = {
    Title:"Student Journey at Zing Studio",
    Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.",
    image:"/images/Zing-Infographic-Students-Journey.png", 
    }
    
    */}
  
  return (
    <>
      
      <div className="bg-white studentJourney">
        
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
              <div className="section-head style2 text-center ">
                    <h2 className="title">{studentJourneyContent?.Title}</h2>
                    <p className="mb-4">{studentJourneyContent?.Description}
                    </p>
                    <img src={studentJourneyContent?.image}></img>
                </div>

               
                {/* <div className="video-bx radius-no  mb-5">
                  <img
                    className="img-cover"
                    width="500"
                    height="100"
                    src="/images/our-work/car/pic4.jpg"
                    alt="Video Thumbnail"
                  />
                  <div className="video-play-icon">
                    <a
                      onClick={() => setOpen(true)}
                      className="popup-video video "
                      style={{background:"#e21100"}}
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div> */}

{/* <div
        className="video-bx radius-no mb-5"
        onClick={() => setPlaying(true)}
        style={{ cursor: "pointer" }}
      >
        {!isPlaying ? (
          <>
            <img
              className="img-cover"
              width="500"
              height="100"
              src="/images/our-work/car/pic4.jpg"
              alt="Video Thumbnail"
            />
            <div className="video-play-icon">
              <a className="popup-video video" style={{ background: "#e21100" }}>
                <i className="fas fa-play" />
              </a>
            </div>
          </>
        ) : (
          <video
            className="img-cover"
            width="500"
            height="100"
            src="/video/student-journey.mp4"
            autoPlay
            muted
            playsInline
            controls
          />
        )}
      </div> */}

   
              
                <div className="section-content box-sort-in button-example p-b0">
                  <div className="row">
                    {services10.map((item)=>(
                       <div className="col-md-12 col-lg-12  pb-2 wow fadeInUp" >
                       <div className="blog-post blog-md clearfix border-1 br-col-b1 radius-sm">
                        
                         <div className="dlab-post-info">
                           
                           <div className="dlab-post-title">
                             <h4 className="post-title pt-3">
                               <a href="#"  dangerouslySetInnerHTML={{ __html: item.title }}></a>
                             </h4>
                           </div>
                           <div className="dlab-post-text">

               

                                <ul className="list-hand-point flex-grow-1">
                                  {item?.list?.map((item, index) => (
                                    <li className="text-left" key={index}>{item}</li>
                                  ))}
                                </ul>

                                {/* Button (if needed, placed at bottom) */}
                                {/* <Link href={`/services-details/${service.title}`} className="site-button btnhover19 mt-auto">
                                  Site Button
                                </Link> */}

                           </div>
                           
                         </div>
                       </div>
                     </div>
                    ))}
                   
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Images box with content demo 1 END */}
        </div>
        
       
      </div>

      {/* <ModalVideo
        channel="custom"
        isOpen={isOpen}
        url="/video/student-journey.mp4"
        onClose={() => setOpen(false)}
      /> */}
     
    </>
  );
}
