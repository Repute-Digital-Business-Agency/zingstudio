"use client";

import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const slidesData = [
  {
    backgroundImage:
      'url("/images/Home-Page/banner-zing-studio-1.jpg") center center no-repeat',
    subTitle: "Empowering Brands with Creativity, Strategy, and Innovation – Zing Studio, Your Partner in Digital Success!",
    title: `<span class="home-banner-title">ZING STUDIO</span><br/>Elevate Your  <b style='font-size:48px; color:#fff'> Brand </b>, Amplify Your  <b style='font-size:48px; color:#fff'> Impact <b/>`,
    description:
      "Delivering sophisticated, cutting-edge web solutions with Zing Studio—your creative partner in digital excellence.",
    buttonLabel: "View Services",
    link:"/about"
  },

  // ---demo start-----

  {
    backgroundImage:
      'url("/images/Home-Page/banner-opt-2.jpg") center center no-repeat',
    subTitle: "Empowering Brands with Creativity, Strategy, and Innovation – Zing Studio, Your Partner in Digital Success!",
    title: `<span class="home-banner-title">ZING STUDIO</span><br/>Elevate Your  <b style='font-size:48px; color:#fff'> Brand </b>, Amplify Your  <b style='font-size:48px; color:#fff'> Impact </b>`,
    description:
      "Delivering sophisticated, cutting-edge web solutions with Zing Studio—your creative partner in digital excellence.",
    buttonLabel: "View Services",
    link:"/about"
  },
  {
    backgroundImage:
      'url("/images/Home-Page/banner-opt-3.jpg") center center no-repeat',
    subTitle: "Empowering Brands with Creativity, Strategy, and Innovation – Zing Studio, Your Partner in Digital Success!",
    title: `<span class="home-banner-title">ZING STUDIO</span><br/>Elevate Your <b style='font-size:48px; color:#fff'> Brand </b>, Amplify Your  <b style='font-size:48px; color:#fff'> Impact </b>`,
    description:
      "Delivering sophisticated, cutting-edge web solutions with Zing Studio—your creative partner in digital excellence.",
    buttonLabel: "View Services",
    link:"/about"
  },
  {
    backgroundImage:
      'url("/images/Home-Page/banner-opt-4.jpg") center center no-repeat',
    subTitle: "Empowering Brands with Creativity, Strategy, and Innovation – Zing Studio, Your Partner in Digital Success!",
    title: `<span class="home-banner-title">ZING STUDIO</span><br/>Elevate Your  <b style='font-size:48px; color:#fff'> Brand </b>, Amplify Your  <b style='font-size:48px; color:#fff'> Impact </b>`,
    description:
      "Delivering sophisticated, cutting-edge web solutions with Zing Studio—your creative partner in digital excellence.",
    buttonLabel: "View Services",
    link:"/about"
  },
  {
    backgroundImage:
      'url("/images/Home-Page/banner-opt-5.jpg") center center no-repeat',
    subTitle: "Empowering Brands with Creativity, Strategy, and Innovation – Zing Studio, Your Partner in Digital Success!",
    title: `<span class="home-banner-title">ZING STUDIO</span><br/>Elevate Your  <b style='font-size:48px; color:#fff'> Brand </b>, Amplify Your  <b style='font-size:48px; color:#fff'> Impact </b>`,
    description:
      "Delivering sophisticated, cutting-edge web solutions with Zing Studio—your creative partner in digital excellence.",
    buttonLabel: "View Services",
    link:"/about"
  },
  {
    backgroundImage:
      'url("/images/Home-Page/banner-opt-6.jpg") center center no-repeat',
    subTitle: "Empowering Brands with Creativity, Strategy, and Innovation – Zing Studio, Your Partner in Digital Success!",
    title: `<span class="home-banner-title">ZING STUDIO</span><br/>Elevate Your  <b style='font-size:48px; color:#fff'> Brand </b>, Amplify Your  <b style='font-size:48px; color:#fff'> Impact </b>`,
    description:
      "Delivering sophisticated, cutting-edge web solutions with Zing Studio—your creative partner in digital excellence.",
    buttonLabel: "View Services",
    link:"/about"
  },
  {
    backgroundImage:
      'url("/images/Home-Page/banner-opt-7.jpg") center center no-repeat',
    subTitle: "Empowering Brands with Creativity, Strategy, and Innovation – Zing Studio, Your Partner in Digital Success!",
    title: `<span class="home-banner-title">ZING STUDIO</span><br/>Elevate Your  <b style='font-size:48px; color:#fff'> Brand </b>, Amplify Your  <b style='font-size:48px; color:#fff'> Impact </b>`,
    description:
      "Delivering sophisticated, cutting-edge web solutions with Zing Studio—your creative partner in digital excellence.",
    buttonLabel: "View Services",
    link:"/about"
  },
  {
    backgroundImage:
      'url("/images/Home-Page/banner-opt-1.jpg") center center no-repeat',
    subTitle: "Empowering Brands with Creativity, Strategy, and Innovation – Zing Studio, Your Partner in Digital Success!",
    title: `<span class="home-banner-title">ZING STUDIO</span><br/>Elevate Your  <b style='font-size:48px; color:#fff'> Brand </b>, Amplify Your  <b style='font-size:48px; color:#fff'> Impact </b>`,
    description:
      "Delivering sophisticated, cutting-edge web solutions with Zing Studio—your creative partner in digital excellence.",
    buttonLabel: "View Services",
    link:"/about"
  },

  // ----------demo end

  
  // {
  //   backgroundImage:
  //     'url("/images/Home-Page/banner-zing-web-design--1.jpg") center center no-repeat',
  //   subTitle: "Delivering sophisticated, cutting-edge web solutions with Zing Studio—your creative partner in digital excellence.",
  //   title: "<span class='home-banner-title'>WEB DESIGN </span><br/>Smart, sleek, and user-focused",
  //   description:
  //     "Delivering sophisticated, cutting-edge web solutions with Zing Studio—your creative partner in digital excellence.",
  //   buttonLabel: "View Services",
  //   link:"/web-design-service"
  // },
  // {
  //   backgroundImage:
  //     'url("/images/Home-Page/banner-zing-digital-marketing-1.jpg") center center no-repeat',
  //   subTitle: "Empowering brands with data-driven digital marketing strategies for impactful online growth.",
  //   title: "<span class='home-banner-title'>DIGITAL MARKETING </span><br/> Fueling  <b style='font-size:48px; color:#fff'> brand </b> growth  <b style='font-size:48px; color:#fff'> digitally </b>",
  //   description:
  //     "Empowering brands with data-driven digital marketing strategies for impactful online growth.",
  //   buttonLabel: "View Services",
  //   link:"/digital-marketing-service"
  // },
  // {
  //   backgroundImage:
  //     'url("/images/Home-Page/banner-zing-acadmey-1.jpg") center center no-repeat',
  //   subTitle:
  //     "Shaping future entrepreneurs and skilled professionals through educational excellence.",
  //   title:
  //     "<span class='home-banner-title'>ZING ACADEMY</span><br/>Transforming  <b style='font-size:48px; color:#fff'> students </b> into  <b style='font-size:48px; color:#fff'> professionals </b>",
  //   description:
  //     "Shaping future entrepreneurs and skilled professionals through educational excellence.",
  //   buttonLabel: "View Services",
  //   link:"/zing-academy"
  // },
];

export default function Hero() {
  return (
    <div className="hero-sec ">
      <div className="home-slider-7 wow fadeInUp" data-wow-delay="0.1s">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
          }}
          speed={2500}
          loop
          direction={"vertical"}
          navigation={{ prevEl: ".snbph7", nextEl: ".snbnh7" }}
          style={{ height: "95vh" }}
          className="home-ban swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress home-swiper-10 swiper-backface-hidden fadeInUp" data-wow-delay="0.2s"
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
                  <h1 dangerouslySetInnerHTML={{ __html: slide.title }} ></h1>
                  {/* <p>{slide.description}</p> */}
                  <p className="subTitle1">{slide.subTitle}</p>
                  {/* <Link href={slide.link}>
                    <button className="text-white" >{slide.buttonLabel}</button>
                  </Link> */}
                  <Link href={slide.link} 
                  className="site-button btnhover13 white align-self-center outline ms-auto outline-2 py-3">
                    {slide.buttonLabel}
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
