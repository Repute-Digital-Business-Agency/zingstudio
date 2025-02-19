"use client";
import Image from "next/image";
import {
  testimonials,
  
} from "@/data/testimonials";
import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

export default function SucessStories({testimonials}) {
  {/*

    const testimonials = [
        {
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.",
          image: "/images/testimonials/pic3.jpg",
      
          name: "David Matin",
          position: "Student",
        },
        {
          text:  "Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.",
          image: "/images/testimonials/pic3.jpg",
          image: "/images/testimonials/pic2.jpg",
          name: "David Matin",
          position: "Student",
        },
        {
          text:  "Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.",
          image: "/images/testimonials/pic3.jpg",
          image: "/images/testimonials/pic1.jpg",
          name: "David Matin",
          position: "Student",
        },
      
      ];
      

      */}
  return (
    <>
   
      <div className="section-full content-inner-2 bg-img-fix overlay-black-dark wow fadeIn courseLearnig"
      data-wow-duration="2s"
      data-wow-delay="0.8s"
      style={{ backgroundImage: "url(/images/background/cs.jpg)" }}
       >
        
        {/* Testimonials Style 8 */}
        <div className="section-full   content-inner"
         >
          <div className="container">
            <div className="row">

              <div className="col-lg-12">
              <div className="section-head style2 text-center mb-5">
                    <h2 className="title text-white">Zing Studio Success Stories</h2>
                    {/* <h4 className="text-dark mt-5"> <b style={{color:"#c82e1e"}}> 40+ </b>Free Premium Digital Marketing Tools</h4> */}
                    <p className="text-white " >100% Satisfaction Guaranteed</p>
                </div>
                <div className="section-content">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={2}
                    loop
                    // autoplay={{
                    //   delay: 4000,
                    // }}
                    speed={2500}
                    // modules={[Autoplay]}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      480: {
                        slidesPerView: 2,
                      },
                      991: {
                        slidesPerView: 2,
                      },
                      1000: {
                        slidesPerView: 3,
                      },
                    }}
                    className="testimonial-three owl-loaded owl-theme owl-carousel owl-btn-2 primary owl-btn-center-lr"
                  >
                    {testimonials?.map((elm, i) => (
                      <SwiperSlide key={i} className="item">
                        <div className="testimonial-15 text-white">
                          <div className="testimonial-text quote-left quote-right">
                            <p>{elm.text}</p>
                          </div>
                          <div className="testimonial-detail clearfix">
                            <div className="testimonial-pic radius shadow">
                              <Image
                                src={elm.image}
                                width={100}
                                height={100}
                                alt=""
                              />
                            </div>
                            <strong className="testimonial-name">
                              {elm.name}
                            </strong>
                            <span className="testimonial-position">
                              {elm.position}
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Style 8 End */}
       
      </div>
    </>
  );
}
