"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";


export default function ZingAcademyProgramHero({HeroBannerContent}) {
  {/* 

    const HeroBannerContent = {
    title:"Power Up Your Skills, Power Up Your Career!",
    description:"Zing Academy – Master Digital Marketing with Industry Experts!",
    btn1:"Free Career Counselling",
    btn1Link:"/careers",
    btn2:"Connect Us",
    btn2Link:"/contact",
    img:"/images/Academy/banner/banner-bg-img.jpg"
    }
    
    */}
  return (
    <div className="dz-industry2-zone position-relative zingProgram">
    
          <div className="swiper-slide">
            <div className="silder-img ">
              <Image
                src={HeroBannerContent?.img}
                width={1920}
                height={520}
                data-swiper-parallax="30%"
                alt="Industry Factory Solutions"
              />
            </div>
            <div className="silder-content">
              <h1 className="title fw-semibold text-dark"> {HeroBannerContent?.title}   </h1>
              <p className="m-b30 text-dark">{HeroBannerContent?.description}</p>
              <div className="dz-btns d-flex align-items-center">
                <Link
                  href={HeroBannerContent?.btn1Link}
                  className=" m-0 text-decoration-none text-white"
                  style={{
                    background:"#e21100"
                  }}
                >
                  {HeroBannerContent?.btn1}
                </Link>
                <Link href={HeroBannerContent?.btn2Link} className="text-dark"
                style={{
                  border:"1px solid #e21100"
                }}>
               {HeroBannerContent?.btn2}
                </Link>
              </div>
            </div>
          </div>
        
    </div>
  );
}
