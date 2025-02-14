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
        imgSrc:"/images/Home-Page/Zing-acd/img-1.jpg",
        title:"Zing Digital Marketing Mastery",
        mode:"online | Free",
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
      imgSrc:"/images/Home-Page/Zing-acd/img-2.jpg",
      title:" Zing Launchpad – Student Internship Program",
      mode:"online | Free",
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
      imgSrc:"/images/Home-Page/Zing-acd/img-3.jpg",
      title:"Zing Digital Sprint – Essentials of Marketing",
      mode:"online | Free",
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
    imgSrc:"/images/Home-Page/Zing-acd/img-4.jpg",
    title:"Zing AI in Digital Marketing",
    mode:"online | Free",
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
    imgSrc:"/images/Home-Page/Zing-acd/img-5.jpg",
    title:"Zing Social Media Mastery",
    mode:"online | Free",
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
    imgSrc:"/images/Home-Page/Zing-acd/img-6.jpg",
    title:"Zing SEO Supercharger",
    mode:"online | Free",
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
    imgSrc:"/images/Home-Page/Zing-acd/img-7.jpg",
    title:" Zing AdSense Ace",
    mode:"online | Free",
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
    imgSrc:"/images/Home-Page/Zing-acd/img-8.jpg",
    title:"Zing Copywriting & Content Mastery",
    mode:"online | Free",
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
const images2 = ["/images/banner/bnr5.jpg", "/images/banner/bnr4.jpg"];


export default function CourseModulesHome() {
  return (
    <div className="container pt-5" style={{ backgroundImage: "url(/images/elementbg/zing-acd-bg-element.png)", backgroundRepeat:"no-repeat", }}>
      {/* blog grid */}
      <div id="masonry" className="dlab-blog-grid-3 row">
        <div className="section-head style2 text-center mb-0">
          <h2 className="title">Zing Academy</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
        {images.map((elm, i) => (
          <div
            key={i}
            className="post card-container col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex"
          >
            <div className="blog-post blog-grid blog-rounded blog-effect1 d-flex flex-column w-100">
              <div className="dlab-post-media dlab-img-effect">
                <Link href={`/blog-single/${elm.title}`}>
                  <Image alt="" src={elm.imgSrc} width="700" height="500" />
                </Link>
              </div>
              <div className="dlab-info p-a20 border-1 flex-grow-1 d-flex flex-column">
                <div className="dlab-post-meta">
                  <ul>
                    <li className="post-date">
                      <strong style={{ color: "#e21100" }}>{elm.mode}</strong>
                  {/* <span> </span> */}
                  </li>
                  {/* <li className="post-author">
                    By <a href="#">{elm.author}</a>
                  </li> */}
                  </ul>
                </div>
                <div className="dlab-post-title">
                  <h4 className="post-title">
                    <Link href={elm.link} style={{fontSize:"18px"}}>{elm.title}</Link>
                  </h4>
                  <p className="mb-0">Duration: {elm.duration}</p>
                  <p className="mb-0">Fees: {elm.price}</p>
                </div>
                <div className="dlab-post-text flex-grow-1">
                  <p>{elm.text}</p>
                </div>
                <div className="dlab-post-readmore mt-auto">
                  <Link
                    href={elm.link}
                    title="READ MORE"
                    rel="bookmark"
                    className="site-button"
                  >
                    Read More
                    <i className="ti-arrow-right px-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

