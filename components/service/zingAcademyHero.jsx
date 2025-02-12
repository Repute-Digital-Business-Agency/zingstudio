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

export default function zingAcademyHero() {
  return (
    <div className="dz-industry2-zone position-relative">
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
            <div className="silder-img overlay-black-middle">
              <Image
                src="/images/main-slider/pic1.jpg"
                width={1920}
                height={720}
                data-swiper-parallax="30%"
                alt="Industry Factory Solutions"
              />
            </div>
            <div className="silder-content">
              <h1 className="title fw-semibold">We Are Industry Factory Solutions</h1>
              <p className="m-b30">Find the comfiest and most suitable suits for your outdoor activities from head to toe</p>
              <div className="dz-btns d-flex align-items-center">
                <Link
                  href="/services-1"
                  className="bg-primary m-0 text-decoration-none text-white"
                >
                  Read More
                </Link>
                <Link href="/about-1" className="text-white">
                  About Us
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
