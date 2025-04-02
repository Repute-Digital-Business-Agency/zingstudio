"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Lightbox, { CloseIcon } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


export default function DigitalMarketingPortfolio({portfolioItems,portfolioContent}) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [selectedImages, setSelectedImages] = useState([]);
  
    const openLightbox = (images) => {
      setSelectedImages(images.map((src) => ({ src }))); // Convert to Lightbox format
      setIndex(0); // Start from the first image
      setOpen(true);
    };
  
    return (
      <div
        className="section-full content-inner-2 wow fadeIn bg-gray works"
        data-wow-duration="2s"
        data-wow-delay="0.6s"
      >
        <div className="container-fluid">
          <div className="section-head style2 text-center">
            <h2 className="title m-b10">Our Works</h2>
            <p style={{ width: "80%" }}>{portfolioContent?.description}</p>
          </div>
  
          <div className="row p-l0 sp10">
            <div className="col-lg-12">
              <ul
                id="masonry"
                className="dlab-gallery-listing gallery mfp-gallery text-center row"
              >
                {portfolioItems.map((item, i) => (
                  <li
                    key={i}
                    className={`card-container cursor-pointer ${item.className}`}
                    onClick={() => openLightbox(item.posters)}
                  >
                    <div
                      className="dlab-media dlab-img-overlay1 dlab-img-effect portbox3 wow fadeInUp seth will-animate"
                      data-wow-delay={item.delay}
                      data-wow-duration={item.duration}
                    >
                      <img src={item.image} alt={item.title} />
                      <div className="overlay-bx">
                        <div className="portinner">
                          <div className="port-up">
                            <h3 className="port-title" style={{fontSize:"16px", color:"#fff"}}>
                            {item.title}
                              {/* <Link href="#">{item.title}</Link> */}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
  
        {/* Lightbox for viewing images */}
        <Lightbox open={open} close={() => setOpen(false)} slides={selectedImages} index={index}  styles={{
          container: { backgroundColor: "#000000cf", }, // White background
          slide: { display: "flex", alignItems: "center", justifyContent: "center",height:"100%" },
          toolbar: { top: "100px" }, // Move close button toolbar down
          button:{ fontSize:"15px"}
        //   closeButton: { position: "absolute", top: "15px", right: "15px", fontSize: "24px" ,color:"#000"},
        

        }}
        render={{
            slide: ({ slide }) => (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                <img
                  src={slide.src}
                  alt=""
                  style={{ height: "600px", maxWidth: "90%", objectFit: "contain" }} // Proper image styling
                />
              </div>
            ),
          
          }}/>

          
      </div>
    );
  }