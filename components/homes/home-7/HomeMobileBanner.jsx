"use client";

import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
const slidesData = [
  {
    // backgroundImage:
    //   'url("/images/Home-Page/banner-zing-studio-1.jpg") center center no-repeat',
    backgroundImage:
      "/images/Home-Page/banner-bg-img-4.jpg",
    charImg:"/images/Home-Page/character-img-4.png",
    subTitle: "Empowering Brands with Creativity, Strategy, and Innovation – Zing Studio, Your Partner in Digital Success!",
    title: `<span class="home-banner-title">ZING STUDIO</span><br/>Elevate Your  <b style='font-size:48px; color:#fff'> Brand </b>, <br/> Amplify Your  <b style='font-size:48px; color:#fff'> Impact <b/>`,
    description:
      "Delivering sophisticated, cutting-edge web solutions with Zing Studio—your creative partner in digital excellence.",
    buttonLabel: "View Services",
    link:"/about"
  },

  // ---demo start-----

  {
    // backgroundImage:
    //   'url("/images/Home-Page/banner-opt-2.jpg") center center no-repeat',
    backgroundImage:
      "/images/Home-Page/banner-bg-img-1.jpg",
      charImg:"/images/Home-Page/character-img-1.png",
    subTitle: "Empowering Brands with Creativity, Strategy, and Innovation – Zing Studio, Your Partner in Digital Success!",
    title: `<span class="home-banner-title">ZING STUDIO</span><br/>Elevate Your  <b style='font-size:48px; color:#fff'> Brand </b>, <br/> Amplify Your  <b style='font-size:48px; color:#fff'> Impact </b>`,
    description:
      "Delivering sophisticated, cutting-edge web solutions with Zing Studio—your creative partner in digital excellence.",
    buttonLabel: "View Services",
    link:"/about"
  },
  {
    // backgroundImage:
    //   'url("/images/Home-Page/banner-opt-3.jpg") center center no-repeat',
    backgroundImage:
      "/images/Home-Page/banner-bg-img-2.jpg",
      charImg:"/images/Home-Page/character-img-2.png",
    subTitle: "Empowering Brands with Creativity, Strategy, and Innovation – Zing Studio, Your Partner in Digital Success!",
    title: `<span class="home-banner-title">ZING STUDIO</span><br/>Elevate Your <b style='font-size:48px; color:#fff'> Brand </b>, <br/> Amplify Your  <b style='font-size:48px; color:#fff'> Impact </b>`,
    description:
      "Delivering sophisticated, cutting-edge web solutions with Zing Studio—your creative partner in digital excellence.",
    buttonLabel: "View Services",
    link:"/about"
  },
  {
    // backgroundImage:
    //   'url("/images/Home-Page/banner-opt-4.jpg") center center no-repeat',
    backgroundImage:
      "/images/Home-Page/banner-bg-img-3.jpg",
      charImg:"/images/Home-Page/character-img-3.png",
    subTitle: "Empowering Brands with Creativity, Strategy, and Innovation – Zing Studio, Your Partner in Digital Success!",
    title: `<span class="home-banner-title">ZING STUDIO</span><br/>Elevate Your  <b style='font-size:48px; color:#fff'> Brand </b>, <br/> Amplify Your  <b style='font-size:48px; color:#fff'> Impact </b>`,
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

export default function HomeMobileBanner() {
 


  return (
    <div
    className="hero-sec react-parallax overflow-hidden"
    // style={{ position: "relative", overflow: "hidden" }}
  >
     <Swiper
          modules={[Navigation, Autoplay]}
          // autoplay={{
          //   delay: 4000,
          // }}
          speed={2500}
          loop
          direction={"horizontal"}
          navigation={{ prevEl: ".snbph7", nextEl: ".snbnh7" }}
          style={{ height: "95vh" }}
          className="home-ban swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress home-swiper-10 swiper-backface-hidden fadeInUp" data-wow-delay="0.2s"
        >

         {slidesData.map((slide, index) => ( 
             <SwiperSlide
             key={index}
             className="swiper-slide slider-content"
            
           >
            
            <Image
                className="react-parallax-bgimage"
                alt=""
                style={{
                    position: "absolute",
                    left: "0%",
                    top: 0,
                    width: "100%",
                    objectFit:"cover",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    height: 898,
                    width: "100%",
                    filter: "none",
                }}
                src={slide.backgroundImage}
                width={1920}
                height={1024}
                priority
                />
                <div className="react-parallax-content" style={{ position: "relative" }}>
                <div className=" pt-50 home-bnr1">
                    <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                        <div className="hero-content  ">

                        <h1  dangerouslySetInnerHTML={{ __html: slide.title }} ></h1>
                  {/* <p>{slide.description}</p> */}
                  <p className="subTitle1">{slide.subTitle}</p>
                  {/* <Link href={slide.link}>
                    <button className="text-white" >{slide.buttonLabel}</button>
                  </Link> */}
                  <Link href={slide.link} 
                  className="site-button btnhover13 white align-self-center outline ms-auto outline-2 mt-3">
                    {slide.buttonLabel}
                  </Link>
                            {/* <h1 className="title">We are industry Factory solution</h1>
                            <div className="description">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the.
                            </div>
                            <div className="buttons">
                            <Link href="/services-1">Read More</Link>
                            <Link href="/about-1">About Us</Link>
                            </div> */}
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                        <Image
                        className="char-img"
                            alt=""
                            src={slide.charImg}
                            width="965"
                            height="894"
                            style={{width:"100%",
                              objectFit:"contain"
                            }}
                        />
                        </div>
                    </div>
                    </div>
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
    
  </div>
  );
}
