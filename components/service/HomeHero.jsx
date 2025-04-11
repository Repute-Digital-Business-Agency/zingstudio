"use client";
import { slides } from "@/data/heroSlides";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
export default function HomeHero() {
  const slides = [
     {
      backgroundImage: "/images/Home-Page/our-work/Mockup-2.jpg",
      content1: "Magnum Spinning Millss",
      content2: "Magnum Spinning Millss",
      link: "https://magnummills.com/"
    },
    {
      backgroundImage: "/images/Home-Page/our-work/Mockup-3.jpg",
      content1: "Shree Sudharsan Engineering",
      content2: "Shree Sudharsan Engineering",
      link: "https://shreesudharsanengineering.com/"
    },
    {
      backgroundImage: "/images/Home-Page/our-work/Mockup-4.jpg",
      content1: "GMAK Fiber Laser ",
      content2: "GMAK Fiber Laser",
      link: "https://gmaklaser.com/"
    },
    {
      backgroundImage: "/images/Home-Page/our-work/Mockup-5.jpg",
      content1: "Motherland Textiles",
      content2: "Motherland Textiles",
      link: "https://motherlandtextiles.com/",

    },
    {
      backgroundImage: "/images/Home-Page/our-work/Mockup-6.jpg",
      content1: "SITARC",
      content2: "SITARC",
      link: "https://sitarc.com/"
    },
    {
      backgroundImage: "/images/Home-Page/our-work/Mockup-7.jpg",
      content1: "Tirumalai Textiles",
      content2: "Tirumalai Textiles",
      link: "https://tirumalaitextiles.com/"
    },
    {
      backgroundImage: "/images/Home-Page/our-work/Mockup-8.jpg",
      content1: "Tirumalai Textiles",
      content2: "Tirumalai Textiles",
      link: "https://tirumalaitextiles.com/"
    },

  ];

  const handleProjectHover = (index) => {
    document.querySelectorAll(".swiper-hover .swiper-slide").forEach((el) => {
      el.classList.remove("active");
    });
    document
      .querySelectorAll(".swiper-hover .swiper-slide")
    [index].classList.add("active");
  };
  return (
    <div className="dz-oil-industry-zone bg-gray relative homeWorks" style={{ backgroundImage: "url(/images/elementbg/our-works-bg-element.png)", backgroundRepeat: "no-repeat", overflowX:"hidden"}}>
      {/* <div style={{ position: "absolute", bottom: "10px", right: "100px", animation: "moveImage2 5s linear infinite" }}>
          <img
            src="/images/Academy/lets-connect/lets-connect-img.png"
            style={{ width: "40%" }}
          />
        </div> */}
      <div className="container-fluid">
      
        <div className="dz-banner-top">
          <div className="row justify-content-between mb-4">
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="section-head style2">
                <h2 className="dz-title  position-relative newtitle" >
                  Works I Did
                  {/* Drive more
                sales and achieve scalable growth for your business */}
                </h2>
              </div>

              {/* <div className="section-head style2 text-center">
             <h2 className="title m-b10" style={{textDecoration:"underline", textAlign:"left"}}>Our Works</h2>
             </div> */}
            </div>
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <p className="mb-2">
               You will see design to purpose creativity and effectiveness in every piece of my works
              
              </p>
              <p className="fw-bold"> Web Design &nbsp; | &nbsp;  E-commerce &nbsp;  | &nbsp; Digital Marketing  &nbsp;| &nbsp; Creative Designs</p>
              
              <Link
                href={`/portfolio`}
                className="site-button btnhover20 text-decoration-none text-white bg-primary"
                
              >
                View All
              </Link>
              {/* <Link
                  href={`/contact`}
                  className="site-button outline outline-2 text-decoration-none ms-3 "
                  style={{ color: "#1a43bf " }}
                >
                  Case Study
                </Link> */}
              {/* <a href="#">
                  Learn More
                  <svg
                    width={40}
                    height={41}
                    viewBox="0 0 40 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.75002 19.8548C8.75002 19.5126 8.88172 19.1844 9.11614 18.9424C9.35056 18.7004 9.6685 18.5645 10 18.5645L26.9875 18.5645L25.3625 16.9C25.1271 16.657 24.9949 16.3275 24.9949 15.9838C24.9949 15.6402 25.1271 15.3107 25.3625 15.0677C25.5979 14.8247 25.9171 14.6882 26.25 14.6882C26.5829 14.6882 26.9021 14.8247 27.1375 15.0677L30.8875 18.9387C31.061 19.1201 31.1785 19.3506 31.2252 19.6009C31.2719 19.8512 31.2457 20.1102 31.15 20.3451C31.0562 20.5808 30.897 20.7825 30.6924 20.9249C30.4877 21.0672 30.2468 21.1439 30 21.1451L10 21.1451C9.6685 21.1451 9.35056 21.0092 9.11614 20.7672C8.88172 20.5252 8.75002 20.197 8.75002 19.8548Z"
                      fill="#1F1F1F"
                    />
                    <path
                      d="M25 23.7258C24.9991 23.556 25.0306 23.3876 25.0928 23.2304C25.155 23.0732 25.2467 22.9302 25.3625 22.8097L29.1125 18.9387C29.3479 18.6957 29.6671 18.5592 30 18.5592C30.1648 18.5592 30.3281 18.5927 30.4803 18.6578C30.6326 18.723 30.771 18.8184 30.8875 18.9387C31.0041 19.059 31.0965 19.2018 31.1596 19.359C31.2227 19.5162 31.2551 19.6847 31.2551 19.8548C31.2551 20.1984 31.1229 20.528 30.8875 20.771L27.1375 24.6419C27.0213 24.7629 26.8831 24.8589 26.7307 24.9244C26.5784 24.9899 26.415 25.0236 26.25 25.0236C26.085 25.0236 25.9216 24.9899 25.7693 24.9244C25.617 24.8589 25.4787 24.7629 25.3625 24.6419C25.2467 24.5213 25.155 24.3784 25.0928 24.2212C25.0306 24.0639 24.9991 23.8956 25 23.7258Z"
                      fill="#1F1F1F"
                    />
                  </svg>
                </a> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="dz-banner-bottom relative swiper-hover ">
          <Swiper
            slidesPerView={7}
            spaceBetween={30}
            slidesPerGroup={1}
            loop
            autoplay={{
              delay: 4000,
            }}
            speed={2500}
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".snbph1",
              nextEl: ".snbnh1",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              570: {
                slidesPerView: 2,
              },
              770: {
                slidesPerView: 3,
              },
              1000: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
              1600: {
                slidesPerView: 6,
              },
            }}
            className="swiper mySwiper wow fadeIn"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className={`swiper-slide ${index === 0 ? "active" : ""
                  } box-hover`}
                onMouseOver={() => handleProjectHover(index)}
              >
                <div
                  className="dz-banner-media position-relative"
                  style={{ backgroundImage: `url(${slide.backgroundImage})`, backgroundRepeat: "no-repeat", objectFit: "cover", width: "100%", height: "100%" }}
                >
                  <div className="dz-media-content position-absolute">
                    <h3 className="m-0 py-3" style={{ fontSize: "20px" }}>{slide.content1}</h3>
                  </div>
                  <div className="dz-media-content2 d-flex align-items-center justify-content-between position-absolute">
                    <h2 className=" m-0" style={{ fontSize: "22px" }}>{slide.content2}</h2>
                    <Link style={{ color: "#000 " }}
                      className="btn mediabtn bg-white"
                      href={slide.link}
                      target="blank"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className="swiper-button-next dz-next snbph1   "
            style={{
              position: "absolute",
              bottom: "calc( 50% - 10px )",
              zIndex: "2",
              right: "calc(0% - 20px)",
              background: "#e21100",
             
            }}
            tabIndex="0"
            role="button"
            aria-label="Next slide"
            aria-controls="swiper-wrapper-61a309c5d3ca8a49"
            aria-disabled="false"
          ></div>
          <div
            className="swiper-button-next dz-next snbnh1  swiper-p-button"
            style={{
              position: "absolute",
              bottom: "calc( 50% - 40px )",
              zIndex: "2",
              left: "calc(0% - 20px)",
              background: "#e21100"
            }}
            tabIndex="0"
            role="button"
            aria-label="Next slide"
            aria-controls="swiper-wrapper-61a309c5d3ca8a49"
            aria-disabled="false"
          ></div>
        </div>
      </div>
    </div>
  );
}
