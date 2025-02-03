"use client";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ClientSlider from "../common/ClientSlider";
import { testimonials6 } from "@/data/testimonials";
import Link from "next/link";
import Image from "next/image";

import GallaryWrapper from "../common/GallaryWrapper";
const images = [
    "/images/our-work/pic1.jpg",
    "/images/our-work/pic2.jpg",
    "/images/our-work/pic3.jpg",
    "/images/our-work/pic4.jpg",
    "/images/our-work/pic5.jpg",
    "/images/our-work/pic6.jpg",
    "/images/our-work/pic1.jpg",
    "/images/our-work/pic2.jpg",
    "/images/our-work/pic3.jpg",
    "/images/our-work/pic4.jpg",
    "/images/our-work/pic5.jpg",
    "/images/our-work/pic6.jpg",
  ];
  const images2 = ["/images/banner/bnr5.jpg", "/images/banner/bnr4.jpg"];
export default function BestInfluencer() {
  return (
    <div className="section-full bg-white content-inner">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-head sort-title clearfix text-center">
          <h2 className="title" style={{fontWeight:"800"}}>Our Exclusive Creators</h2>
          <p style={{color:"#494949"}}>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy 
          </p>
          </div>
          {/* Image Carousel start */}
          <div className="section-content box-sort-in m-b30 button-example">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              slidesPerGroup={2}
              loop
              autoplay={{
                delay: 4000,
              }}
              speed={2500}
              modules={[Pagination, Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
              pagination={{
                clickable: true,
                el: ".spt1",
                bulletActiveClass: "active",
                renderBullet: function (index, className) {
                  return `  <button role="button" class="owl-dot ${className}">
          <span></span>
        </button>`;
                },
              }}
              className="img-carousel-dots owl-loaded owl-theme owl-carousel mfp-gallery gallery owl-none owl-dots-primary-full"
            >
              {images.map((elm, i) => (
                <SwiperSlide key={i}>
                  <div className="item">
                    <div className="ow-img dlab-img-effect zoom-slow">
                      <a href="#">
                        <Image
                          alt=""
                          src={elm}
                          width="700"
                          height="500"
                          style={{
                            height:"350px",
                            objectFit:"cover"
                          }}
                        />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="owl-dots spt1"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
    {/* Image Carousel start END*/}
  </div>
  );
}
