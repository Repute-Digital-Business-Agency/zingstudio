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
export default function ITeach() {
  const course = [
    {
        // imgSrc:"/images/Home-Page/Zing-acd/zing-digital-marketing-mastery.jpg",
        imgSrc:"/images/Home-Page/iteach-img-1.png",
        title:"Zing Digital Marketing Mastery",
        mode:"online",
        list:[
          'Lorem ipsum dolor sit amet',
          'Lorem ipsum dolor sit amet',
          'Lorem ipsum dolor sit amet'
        ],
        description:" A comprehensive, hands-on program covering advanced digital marketing strategies. From SEO to paid ads and content marketing, this course is designed to equip you with real-world expertise.",
        duration:"3 Months + 3 Months Internship",
        price:"₹25,000",
        link:"zing-digital-marketing-mastery"
        
    },
    {
      // imgSrc:"/images/Home-Page/Zing-acd/student-internship-program.jpg",
      imgSrc:"/images/Home-Page/iteach-img-2.png",
      title:" Zing Launchpad – Student Internship Program",
      mode:"online",
      list:[
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet'
      ],
      description:"A power-packed internship experience tailored for college students. Work on live projects, apply digital marketing concepts, and build your portfolio.",
      price:"₹3,000",
      duration:" 10 Days",
       link:"zing-launchpad-student-internship-program"

      
    },
    {
      // imgSrc:"/images/Home-Page/Zing-acd/essentials-of-marketing.jpg",
      imgSrc:"/images/Home-Page/iteach-img-3.png",
      title:"Zing Digital Sprint – Essentials of Marketing",
      mode:"online",
      list:[
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet'
      ],
      description:"A fast-track, beginner-friendly program covering the core aspects of digital marketing. Perfect for those looking to get a strong foundation in the field.",
      duration:" 15 Days",
      price:"₹7,000",
       link:"zing-digital-sprint-essentials-of-marketing"

      
  },
  {
    // imgSrc:"/images/Home-Page/Zing-acd/zing-ai-in-digital-marketing.jpg",
    imgSrc:"/images/Home-Page/iteach-img-1.png",
    title:"Zing AI in Digital Marketing",
    mode:"online",
    list:[
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet'
    ],
    description:"Discover how AI is revolutionizing digital marketing! Learn to use AI-powered tools for better decision-making, automation, and campaign optimization.",
    duration:"5 Days",
    price:"₹7,000",
     link:"zing-ai-in-digital-marketing"


  },

  {
    // imgSrc:"/images/Home-Page/Zing-acd/zing-social-media-mastery.jpg",
    imgSrc:"/images/Home-Page/iteach-img-2.png",
    title:"Zing Social Media Mastery",
    mode:"online",
    list:[
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet'
    ],
    description:"Learn how to turn followers into fans and likes into leads with a strategic social media approach. Master Instagram, LinkedIn, Facebook, and YouTube while uncovering monetization secrets.",
    duration:" 4 Weeks",
    price:"₹10,000",
     link:"zing-social-media-mastery"

    
  },
  {
    // imgSrc:"/images/Home-Page/Zing-acd/zing-seo-spercharger.jpg",
    imgSrc:"/images/Home-Page/iteach-img-3.png",
    title:"Zing SEO Supercharger ",
    mode:"online",
    list:[
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet'
    ],
    description:"Unlock the power of SEO and get your content ranking at the top of Google! From keyword research to technical SEO and e-commerce optimization, this course is your ultimate guide to search success.",
    duration:"4 Weeks",
    price:"₹5,000",
     link:"zing-seo-supercharger"

    
  },  
  {
    // imgSrc:"/images/Home-Page/Zing-acd/zing-adSense-ace.jpg",
    imgSrc:"/images/Home-Page/iteach-img-1.png",
    title:" Zing AdSense Ace ",
    mode:"online",
    list:[
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet'
    ],
    description:"Master the science of paid ads and learn how to maximize ROI from your campaigns. Cover Google, Facebook, Instagram, and LinkedIn ads while mastering conversion tracking and budget optimization.",
    duration:"8 Weeks",
    price:"₹15,000",
     link:"zing-adSense-ace"

    
  },
  {
    // imgSrc:"/images/Home-Page/Zing-acd/zing-copywriting-content-mastery.jpg",
    imgSrc:"/images/Home-Page/iteach-img-2.png",
    title:"Zing Copywriting & Content Mastery",
    mode:"online",
    list:[
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet'
    ],
    description:" Create words that sell, stories that engage, and content that converts! Learn content psychology, persuasive writing, SEO blogging, and email marketing to craft compelling narratives.",
    duration:"4 Weeks",
    price:"₹10,000",
     link:"zing-copywriting-&-content-mastery"

    
  },
]
  return (


    <>
   
        <div className="section-full bg-white content-inner iteach">
          <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4" >
                    <div className="iteach-img">
                        <img src="/images/Home-Page/i-teach-img.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-8 col-12 px-3 p-lg-0">
                  <div className="container-fluid ">
                    <div className="row">
                      <h2 className="newtitle title">I Teach</h2>
                      <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sit quas reprehenderit totam repudiandae consectetur, aliquam aperiam et, veritatis eligendi ipsam dolorum qui, unde voluptate incidunt quasi! Possimus, neque voluptate.</p>
                    <div className="col-md-1 col-2 mt-4 mt-lg-5  px-3 p-lg-0">
                <div className="owl-nav">
                      <button
                        type="button"
                        role="presentation"
                        className="owl-prev snbp35"
                        style={{ zIndex: 1 }}
                      >
                        <i className="ti-arrow-left" />
                      </button>
                      <button
                        type="button"
                        role="presentation"
                        className="owl-next snbn35"
                        style={{ zIndex: 1 }}
                      >
                        <i className="ti-arrow-right" />
                      </button>
                    </div>
                    
                </div> 
              <div className="col-lg-11 mt-4 mt-lg-5  px-3 p-lg-0 " >
                
                {/* Event post Carousel with no margin */}
                <div className="section-content box-sort-in m-b30 button-example ">
                  <div className="blog-carousel owl-loaded owl-theme owl-carousel mfp-gallery gallery owl-btn-center-lr owl-btn-2">
                    <Swiper
                      slidesPerView={3}
                      spaceBetween={30}
                      slidesPerGroup={1}
                      loop
                      autoplay={{
                        delay: 4000,
                      }}
                      speed={2500}
                      modules={[Pagination, Autoplay, Navigation]}
                      navigation={{
                        prevEl: ".snbp35",
                        nextEl: ".snbn35",
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        991: {
                          slidesPerView: 2,
                        },
                        1200: {
                          slidesPerView: 3,
                        },
                      }}
                    >
                      {course.map((elm, i) => (
                        <SwiperSlide key={i}>
                        <div className="item h-100 w-100">
                          <div className="ow-event-post date-style-2 d-flex flex-column h-100 w-100">
                            <div className="ow-event-media dlab-img-effect zoom-slow">
                              <Image
                                alt=""
                                src={elm?.imgSrc}
                                width="700"
                                height="500"
                                // style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
                              />
                            </div>
                            <div className="ow-event-info d-flex flex-column flex-grow-1 justify-content-between" style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>
                              <p className="mb-4" style={{ color: "#e21100" }}>Fees @ {elm.price}</p>
                              <div className="ow-event-title">
                                <h4 className="event-title">
                                  <a href="#" title="Video post">{elm.title}</a>
                                </h4>
                              </div>
                              
                              <div className="ow-event-readmore mt-auto ">
                                <a
                                  href={elm?.link}
                                  title="READ MORE"
                                  rel="bookmark"
                                  className="site-button-link "
                                >
                                  Read More <i className="fas fa-arrow-right" />
                                </a>
                              </div>
                            </div>
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
                </div>
               
            </div>
          </div>
     
        </div>
       
   
      
    </>
  );
}
