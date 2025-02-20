"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
export default function BrandBuzzBanner() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="dz-ship-industry-zone position-relative BrandBuzzBanner">
        <div className="dzpattern position-absolute">
          <Image
            alt="#"
            src="/images/pattern/pt13.jpg"
            width="100"
            height="160"
          />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="banner-content">
                <h1 className="dz-title fw-semibold">
                Best Influencer Marketing <br /> Agency In India
                </h1>
                <p className="fw-bold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sapiente quis accusantium ex impedit? Quaerat recusandae magni voluptatem, expedita nemo culpa adipisci asperiores sint delectus nesciunt ad maiores quod velit.
                </p>
                <div className="dz-btn d-flex align-items-center">
                  <Link
                    href={`/contact`}
                    className="btn bg-primary fw-bold text-white"
                  >
                    Contact Us
                  </Link>
                
                </div>
                
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner-media">
                <video
                  autoPlay
                  loop
                  className="video-background"
                  muted
                  width={700}
                  height={800}
                >
                  <source src="/video/video4.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
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
