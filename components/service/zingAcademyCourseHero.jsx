"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
const slides = [
  {
    imageSrc: "/images/main-slider/pic1.jpg",
    title: "We Are Industry Factory Solutions",
    description:
      "Find the comfiest and most suitable suits for your outdoor activities from head to toe",
  },
  {
    imageSrc: "/images/main-slider/pic2.jpg",
    title: "We Are Industry Factory Solutions",
    description:
      "Find the comfiest and most suitable suits for your outdoor activities from head to toe",
  },
  {
    imageSrc: "/images/main-slider/pic3.jpg",
    title: "We Are Industry Factory Solutions",
    description:
      "Find the comfiest and most suitable suits for your outdoor activities from head to toe",
  },
  {
    imageSrc: "/images/main-slider/pic4.jpg",
    title: "We Are Industry Factory Solutions",
    description:
      "Find the comfiest and most suitable suits for your outdoor activities from head to toe",
  },
  {
    imageSrc: "/images/main-slider/pic5.jpg",
    title: "We Are Industry Factory Solutions",
    description:
      "Find the comfiest and most suitable suits for your outdoor activities from head to toe",
  },
  {
    imageSrc: "/images/main-slider/pic6.jpg",
    title: "We Are Industry Factory Solutions",
    description:
      "Find the comfiest and most suitable suits for your outdoor activities from head to toe",
  },
];

export default function ZingAcademyCourseHero() {
  return (
    <div className="dz-industry2-zone position-relative academy-ban">
      {/* <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
        }}
        speed={2500}
        loop
        pagination={{
          clickable: true,
          el: ".sph2",
        }}
        className="swiper mySwiper relative"
      > */}
        {/* {slides.map((slide, index) => ( */}
          <div className="swiper-slide">
            <div className="silder-img " style={{height:"100%"}}>
              <img
                src="/images/Academy/banner/banner-img.jpg"
               style={{width:"100%",height:"100%",objectFit:"", objectPosition:"center"}}
                // height={720}
                data-swiper-parallax="30%"
                alt="Industry Factory Solutions"
              />
            </div>
            <div className="silder-content">
              <h1 className="title fw-semibold text-dark">Power Up Your Skills, Power Up Your Career!   </h1>
              <p className="m-b30 text-dark">Zing Academy – Master Digital Marketing with Industry Experts! </p>
              <div className="dz-btns d-flex align-items-center">
                <Link
                  href="/careers/"
                  className=" m-0 text-decoration-none text-white"
                  style={{
                    background:"#e21100"
                  }}
                >
                  Free Career Counselling
                </Link>
                <Link href="/contact" className="text-dark"
                style={{
                  border:"1px solid #e21100"
                }}>
               Connect Us
                </Link>
              </div>
            </div>
          </div>
        {/* ))} */}

        {/* <div
          style={{
            position: "absolute",
            bottom: "8px",
            zIndex: "1",
            left: "calc(50% - 56px)",
          }}
          className="swiper-pagination style-1 swiper-pagination-bullets swiper-pagination-horizontal sph2"
        ></div> */}
      {/* </Swiper> */}
    </div>
  );
}
