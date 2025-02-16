"use client";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function CourseLearning() {
    const projects = [
        {
          id: 1,
          imgSrc: "/images/our-work/steelplant/pic10.jpg",
          title: "Digital Marketing Startegy",
          link:"zing-digital-marketing-mastery"
        },
        {
          id: 2,
          imgSrc: "/images/our-work/steelplant/pic9.jpg",
          title: "Content And Prompt Engineering",
          link:"zing-digital-marketing-mastery"
        },
        {
          id: 3,
          imgSrc: "/images/our-work/steelplant/pic8.jpg",
          title: "Google And Advance web Analytics",
          link:"zing-digital-marketing-mastery"
        },
        {
          id: 4,
          imgSrc: "/images/our-work/steelplant/pic7.jpg",
          title: "Social Media Marketing",
          link:"zing-digital-marketing-mastery"
        },
        {
          id: 5,
          imgSrc: "/images/our-work/steelplant/pic10.jpg",
          title: "Search Engine Optimization",
          link:"zing-digital-marketing-mastery"
        },
        {
          id: 6,
          imgSrc: "/images/our-work/steelplant/pic9.jpg",
          title: "Funnel Building Lead Gen",
          link:"zing-digital-marketing-mastery"
        },
        {
          id: 7,
          imgSrc: "/images/our-work/steelplant/pic8.jpg",
          title: "Facebook And Instagram Ads",
          link:"zing-digital-marketing-mastery"
        },
        {
          id: 8,
          imgSrc: "/images/our-work/steelplant/pic7.jpg",
          title: "Wix",
          link:"zing-digital-marketing-mastery"
        },
        {
            id: 9,
            imgSrc: "/images/our-work/steelplant/pic7.jpg",
            title: "Whatsapp Marketing",
            link:"zing-digital-marketing-mastery"
          },
          {
            id: 9,
            imgSrc: "/images/our-work/steelplant/pic7.jpg",
            title: "Web Technology",
            link:"zing-digital-marketing-mastery"
          },
          {
            id: 10,
            imgSrc: "/images/our-work/steelplant/pic7.jpg",
            title: "Projecs",
            link:"zing-digital-marketing-mastery"
          },
      ];

  return (
    <div
      className="section-full content-inner-2 bg-img-fix overlay-black-dark wow fadeIn courseLearnig"
      data-wow-duration="2s"
      data-wow-delay="0.8s"
      style={{ backgroundImage: "url(/images/background/cs.jpg)" }}
    >
      <div className="container">
        <div className="section-head text-white text-center">
          <h2 className="title">What Will You Learn In This Course ?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
          <h4 className="mt-4 mb-0" style={{fontSize:"22px"}}>
              50 Sub Modules
            </h4>
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
              {projects.map((item, index) => (
                <SwiperSlide className="item" key={index}>
                  <div className="dlab-box project-bx position-relative">
                  <Link href={item?.link} className="apply-btn">
                    Apply
                    </Link>

                    <div className="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect zoom">
                      <Link href={`/portfolio-details/${item.title}`}>
                        <Image
                          src={item.imgSrc}
                          width={500}
                          height={700}
                          alt={item.title}
                        />
                      </Link>
                    </div>
                    <div className="dlab-info">
                      <h5 className="dlab-title">
                        <Link href={`/portfolio-details/${item.title}`}>
                          {item.title}
                        </Link>
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
