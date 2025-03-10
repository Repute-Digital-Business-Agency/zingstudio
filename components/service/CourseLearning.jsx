"use client";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function CourseLearning({courseLearnings,courseLearningContents}) {
  
   
     const courseLearningContent = {
    description:"At Zing Academy, we don’t just teach digital marketing—we shape industry leaders. Our hands-on, practical approach ensures that you don’t just learn concepts but also apply them in real-world scenarios. Whether you're a student, entrepreneur, freelancer, or job seeker, our courses are designed to equip you with the most in-demand skills in digital marketing.",
    modules:"50 Sub Modules"
     }

     const courseLearning = [
      {
        id: 1,
        imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/digital-marketing-startegy.jpg",
        title: "10+ Industry-Recognized Certificates",
        link:"zing-digital-marketing-mastery"
      },
      {
        id: 2,
        imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/content-and-prompt-engineerings.jpg",
        title: "Weekend & Flexible Batches",
        link:"zing-digital-marketing-mastery"
      },
      {
        id: 3,
        imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/google-and-advance-web-analytics.jpg",
        title: "Gamified Learning with Scoreboards",
        link:"zing-digital-marketing-mastery"
      },
      {
        id: 4,
        imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/social-media-marketing.jpg",
        title: "100% Practical Learning",
        link:"zing-digital-marketing-mastery"
      },
      {
        id: 5,
        imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/search-engine-optimization.jpg",
        title: "Community & Mentorship",
        link:"zing-digital-marketing-mastery"
      },
      {
        id: 6,
        imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/funnel-building-lead-gen.jpg",
        title: "Weekly Quizzes & Monthly Assignments",
        link:"zing-digital-marketing-mastery"
      },
      {
        id: 7,
        imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/facebook-and-instagram-ads.jpg",
        title: "Weekly Student Presentations",
        link:"zing-digital-marketing-mastery"
      },
      {
        id: 8,
        imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/wix.jpg",
        title: "Wix",
        link:"Final Capstone Project"
      },
      {
          id: 9,
          imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/whatsapp -marketing.jpg",
          title: "Certification on Completion",
          link:"zing-digital-marketing-mastery"
        },
        {
          id: 9,
          imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/web-technology.jpg",
          title: "Zingers Alumni Community ",
          link:"zing-digital-marketing-mastery"
        },
        {
          id: 10,
          imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/projects.jpg",
          title: "AI & Automation in Digital Marketing",
          link:"zing-digital-marketing-mastery"
        },
        {
          id: 11,
          imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/projects.jpg",
          title: "Job & Freelancing Support",
          link:"zing-digital-marketing-mastery"
        },
        {
          id: 12,
          imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/projects.jpg",
          title: "Exclusive Industry Webinars & Expert Sessions",
          link:"zing-digital-marketing-mastery"
        },
        {
          id: 13,
          imgSrc: "/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/projects.jpg",
          title: "10% Scholarship for Women from Underprivileged Backgrounds",
          link:"zing-digital-marketing-mastery"
        },
    ];

     
 

  return (
    <div
      className="section-full content-inner-2 bg-img-fix overlay-black-dark wow fadeIn courseLearnig"
      data-wow-duration="2s"
      data-wow-delay="0.8s"
      style={{ backgroundImage: "url(/images/zing-digital-marketing-mastery/What-Will-You-Learn-In-This-Course/bg.jpg)" }}
    >


      
      <div className="container">
      <div className="section-head text-white text-center">
          <h2 className="title">Why Choose Zing Academy?</h2>
          <p style={{width:"100%"}}>
            {courseLearningContent?.description}
          </p>
          {/* <h4 className="mt-4 mb-0" style={{fontSize:"22px"}}>
              {courseLearningContent?.modules}
            </h4> */}
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              slidesPerGroup={1}
              loop
              autoplay={{
                delay: 4000,
              }}
              speed={2500}
              modules={[Autoplay]}
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
              className="img-carousel-dots-nav owl-theme owl-dots-none owl-carousel owl-btn-center-lr owl-btn-3 btn-white"
            >
              {courseLearning?.map((item, index) => (
                <SwiperSlide className="item" key={index}>
                  <div className="dlab-box project-bx position-relative">
                  <Link href="#contact" className="apply-btn">
                    Apply
                    </Link>

                    <div className="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect zoom">
                      {/* <Link href={`/portfolio-details/${item.title}`}> */}
                        <Image
                          src={item.imgSrc}
                          width={500}
                          height={700}
                          alt={item.title}
                        />
                      {/* </Link> */}
                    </div>
                    <div className="dlab-info text-center">
                      <h5 className="dlab-title">
                        {/* <Link href={`/portfolio-details/${item.title}`}> */}
                          {item.title}
                        {/* </Link> */}
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
