"use client";

import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const slidesData = [
  {
    backgroundImage:
      'url("/images/main-slider/slide7-1.jpg") center center no-repeat',
    subTitle: "Building Scalable, Secure, and User-Friendly Online Stores",
    title: "<span style='color: #c21807'>E-Commerce</span><br/> Development",
    description:
      "Empowering your business with seamless eCommerce solutions.From store setup to optimized sales, we’ve got you covered.Grow your online brand and reach customers worldwide.",
    buttonLabel: "BUY & VIEW SERVICES",
  },
  {
    backgroundImage:
      'url("/images/main-slider/slide7-2.jpg") center center no-repeat',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title:
      "<span style='color: #c21807'>Search Engine</span><br/> Optimization",
    description:
      "Crafting stunning, user-friendly websites tailored to your needs.From design to launch, we deliver seamless digital experiences.Your online presence, built to captivate and convert.",
    buttonLabel: "BUY & VIEW SERVICES",
  },
];

export default function Hero() {
  return (
    <div className="hero-sec">
      <div className="home-slider-7">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
          }}
          speed={2500}
          loop
          direction={"vertical"}
          navigation={{ prevEl: ".snbph7", nextEl: ".snbnh7" }}
          style={{ height: "70vh" }}
          className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress home-swiper-10 swiper-backface-hidden"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide slider-content"
              style={{ background: slide.backgroundImage, height: "700px" }}
            >
              <div className="inner sliderStyle7">
                <div>
                  {/* <p className="subTitle1">{slide.subTitle}</p> */}
                  <h1 dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
                  {/* <p>{slide.description}</p> */}
                  <p className="subTitle1">{slide.subTitle}</p>
                  <Link href={"/#"}>
                    <button className="text-white">{slide.buttonLabel}</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button" style={{ zIndex: 1 }}>
            <div className="swiper-button-prev snbph7 previousButton">
              <i className="las la-angle-left" />
            </div>
            <div className="swiper-button-next snbnh7 nextButton swiper-button-disabled">
              <i className="las la-angle-right" />
            </div>
          </div>
        </Swiper>
      </div>{" "}
    </div>
  );
}
