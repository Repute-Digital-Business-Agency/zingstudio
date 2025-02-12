"use client";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ClientSlider from "../common/ClientSlider";
import { testimonials6 } from "@/data/testimonials";
import Link from "next/link";
import Image from "next/image";

import GallaryWrapper from "../common/GallaryWrapper";

// const images = [
//   "/images/our-work/pic1.jpg",
//   "/images/our-work/pic2.jpg",
//   "/images/our-work/pic3.jpg",
//   "/images/our-work/pic4.jpg",
//   "/images/our-work/pic5.jpg",
//   "/images/our-work/pic6.jpg",
//   "/images/our-work/pic1.jpg",
//   "/images/our-work/pic2.jpg",
//   "/images/our-work/pic3.jpg",
//   "/images/our-work/pic4.jpg",
//   "/images/our-work/pic5.jpg",
//   "/images/our-work/pic6.jpg",
// ];

const images = [
    {
        imgSrc:"/images/Academy/Course-Mod/pic11.jpg",
        title:"Zing Digital Marketing Mastery",
        mode:"online/offline",
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
      imgSrc:"/images/Academy/Course-Mod/pic12.jpg",
      title:" Zing Launchpad – Student Internship Program",
      mode:"online/offline",
      list:[
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet'
      ],
      description:"A power-packed internship experience tailored for college students. Work on live projects, apply digital marketing concepts, and build your portfolio.",
      price:"₹3,000"

      
    },
    {
      imgSrc:"/images/Academy/Course-Mod/pic13.jpg",
      title:"Zing Digital Sprint – Essentials of Marketing",
      mode:"online/offline",
      list:[
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet'
      ],
      description:"A fast-track, beginner-friendly program covering the core aspects of digital marketing. Perfect for those looking to get a strong foundation in the field.",
      duration:" 15 Days",
      price:"₹7,000"

      
  },
  {
    imgSrc:"/images/our-work/pic1.jpg",
    title:"Zing AI in Digital Marketing",
    mode:"online/offline",
    list:[
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet'
    ],
    description:"Discover how AI is revolutionizing digital marketing! Learn to use AI-powered tools for better decision-making, automation, and campaign optimization.",
    duration:"5 Days",
    price:"₹7,000"


  },

  {
    imgSrc:"/images/our-work/pic1.jpg",
    title:"Zing Social Media Mastery",
    mode:"online/offline",
    list:[
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet'
    ],
    description:"Learn how to turn followers into fans and likes into leads with a strategic social media approach. Master Instagram, LinkedIn, Facebook, and YouTube while uncovering monetization secrets.",
    duration:" 4 Weeks",
    price:"₹10,000"

    
  },
  {
    imgSrc:"/images/our-work/pic1.jpg",
    title:"Zing SEO Supercharger",
    mode:"online/offline",
    list:[
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet'
    ],
    description:"Unlock the power of SEO and get your content ranking at the top of Google! From keyword research to technical SEO and e-commerce optimization, this course is your ultimate guide to search success.",
    duration:"4 Weeks",
    price:"₹5,000"

    
  },  
  {
    imgSrc:"/images/our-work/pic1.jpg",
    title:" Zing AdSense Ace",
    mode:"online/offline",
    list:[
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet'
    ],
    description:"Master the science of paid ads and learn how to maximize ROI from your campaigns. Cover Google, Facebook, Instagram, and LinkedIn ads while mastering conversion tracking and budget optimization.",
    duration:"8 Weeks",
    price:"₹15,000"

    
  },
  {
    imgSrc:"/images/our-work/pic1.jpg",
    title:"Zing Copywriting & Content Mastery",
    mode:"online/offline",
    list:[
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet'
    ],
    description:" Create words that sell, stories that engage, and content that converts! Learn content psychology, persuasive writing, SEO blogging, and email marketing to craft compelling narratives.",
    duration:"4 Weeks",
    price:"₹10,000"

    
  },
]
const images2 = ["/images/banner/bnr5.jpg", "/images/banner/bnr4.jpg"];
export default function Course() {
  return (
    <>
    
      <div className="bg-white lightgallery" id="lightgallery">
        
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
              <div className="section-head style2 text-center mb-4">
                    <h2 className="title">Course Modules</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                {/* blog post Carousel with no margin */}
                <div className="section-content box-sort-in m-b30 button-example">
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
                      prevEl: ".snbp34",
                      nextEl: ".snbn34",
                    }}
                    className="blog-carousel mfp-gallery owl-loaded owl-theme owl-carousel gallery owl-btn-center-lr owl-btn-1 primary"
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
                      1000: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    {images.map((elm, i) => (
                      <SwiperSlide key={i}>
                        <div className="item">
                          <div className="ow-blog-post date-style-2">
                            <div className="ow-post-media dlab-img-effect zoom-slow">
                              <Image
                                alt=""
                                src={elm.imgSrc}
                                width="700"
                                height="500"
                              />
                            </div>
                            <div className="ow-post-info">
                              <div className="ow-post-title">
                                <h4 className="post-title">
                                  <a href="#" title="Video post">
                                   {elm.title}
                                  </a>
                                </h4>
                              </div>
                              <div className="ow-post-meta">
                                <ul>
                                  <li className="post-date">
                                    {elm.mode}
                                  </li>
                                  <li className="post-comment">
                                    {/* <i className="ti-user" /> */}
                                   
                                    {elm.duration}
                                   
                                  
                                  </li>
                                  {/* <li className="post-comment">
                                    <i className="ti-comment-alt" />
                                    <a href="#" className="comments-link">
                                      1 Comment
                                    </a>
                                  </li> */}
                                  
                                </ul>
                              </div>
                              <div className="ow-post-text">
                                {elm.description}
                              {/* <ul className="list-check secondry">
                                {elm?.list?.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                                 
                                  
                                </ul> */}
                              </div>
                              {/* <div className="ow-post-text ">
                                <h4 className="mb-0">
                                  {elm.price}
                                </h4>
                              </div> */}
                              <div className="ow-post-readmore d-flex justify-content-between">
                              <h4 className="mb-0">
                                  {elm.price}
                                </h4>
                                <a
                                  href={elm.link}
                                  title="READ MORE"
                                  rel="bookmark"
                                  className="site-button-link"
                                >
                                  READ MORE
                                  <i className="fas fa-angle-double-right" />
                                </a>
                              </div>
                              <div className="ow-post-tags clearfix">
                                <div className="post-tags">
                                  {/* <a href="#">Child </a>
                                  <a href="#">Eduction </a>
                                  <a href="#">Money </a>
                                  <a href="#">Resturent </a> */}
                                  {/* <div className="shop-item-rating"> */}
                                <span className="rating-bx">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="far fa-star" />
                                </span>
                                {/* <span>4.5 Rating</span> */}
                              {/* </div> */}
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    <div className="owl-nav">
                      <button
                        type="button"
                        role="presentation"
                        className="owl-prev snbp34"
                        style={{ zIndex: 1 }}
                      >
                        <i className="ti-arrow-left" />
                      </button>
                      <button
                        type="button"
                        role="presentation"
                        className="owl-next snbn34"
                        style={{ zIndex: 1 }}
                      >
                        <i className="ti-arrow-right" />
                      </button>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          {/* blog post Carousel with no margin END */}
        </div>
       
        {/* content  END */}
      </div>
    </>
  );
}
