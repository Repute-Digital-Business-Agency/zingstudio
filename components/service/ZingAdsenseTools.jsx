"use client";
import Image from "next/image";
import { clientLogos } from "@/data/clients";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ZingAdsenseTools({
  parentClass = "client-logo-carousel owl-loaded owl-theme owl-carousel owl-dots-none owl-btn-center-lr owl-btn-3 bg-white py-5",
  border = false,
  ToolsContent,
  Tools1,
  Tools2,
  Tools3
}) {

  return (
    <>
      {/* <div className="sort-title clearfix text-center m-b20">
        <h4>Our Clients</h4>
        <p style={{ marginBottom: "0px" }}>Dummy Text</p>
      </div> */}

      <div className="section-head style2 text-center bg-white mb-0">
        <h2 className="title pt-5">Tools That you will learn</h2>
        <h4 className="text-dark mt-5"> <b style={{color:"#e21100"}}> {ToolsContent?.tool1Num} </b>{ToolsContent?.tool1Title}</h4>
                    <p className="text-dark mb-0" >{ToolsContent?.tool1worth}</p>
      </div>

        
        
     
     
      {/* <Swiper
        // slidesPerView={5}
        spaceBetween={60}
        slidesPerGroup={2}
        style={{ maxWidth: "100vw", overflow: "hidden" }}
        loop
        autoplay={{
          delay: 100,
        }}
        speed={2500}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },

          480: {
            slidesPerView: 3,
          },

          767: {
            slidesPerView: 5,
          },
          
          1024:{
            slidesPerView: 5,
          },
         
        }}
        modules={[Autoplay]}
        className={parentClass}
      > */}

<div className="d-flex flex-wrap justify-content-center gap-5  bg-white py-5">
        {Tools1?.map((item, index) => (
          // <SwiperSlide className="item" key={index}>
          <div className={`wow ${item.animation} ${item.delay}  will-animate bg-white`}>
              <div className={` bg-white ${border ? "border" : ""}`}>
                <a href="#">
                  <Image width={100} height={150} src={item.img} alt="" style={{height:"100px", width:"auto"}}/>
                </a>
              </div>
            </div>
          // </SwiperSlide>
        ))}

</div>
      {/* </Swiper> */}
    


    {Tools3 &&
        <>
          
              <div className="section-head style2 text-center pt-5  mb-0 bg-white">
                    <h4 className="text-dark mb-0"> <b style={{color:"#e21100"}}> {ToolsContent?.tool2Num} </b>{ToolsContent?.tool2Title}</h4>
                  
                </div>

               
                    {/* <Swiper
                    // slidesPerView={5}
                    spaceBetween={60}
                    slidesPerGroup={2}
                    style={{ maxWidth: "100vw", overflow: "hidden" }}
                    loop
                    
                    autoplay={{
                    delay: 100,
                    reverseDirection:true
                    }}
                    speed={2500}
                    breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
            
                    480: {
                        slidesPerView: 4,
                    },
            
                    767: {
                        slidesPerView: 4,
                    },
                    1000: {
                        slidesPerView: 5,
                    },
                    }}
                    modules={[Autoplay]}
                    className={parentClass}
                > */}
                 <div className="d-flex flex-wrap justify-content-center gap-5   bg-white py-5">
                    {Tools3?.map((item, index) => (
                    // <SwiperSlide className="item" key={index}>
                    <div className={`wow ${item.animation} ${item.delay}  will-animate bg-white`}>
                        <div className={` bg-white ${border ? "border" : ""}`}>
                            <a href="#">
                            <Image width={100} height={150} src={item.img} alt=""  style={{height:"100px", width:"auto"}}/>
                            </a>
                        </div>
                        </div>
                    // {/* </SwiperSlide> */}
                    ))}
            </div>
                    
                    {/* </Swiper> */}
               

               
        </>
    }


    </>
  );
}
