"use client";
import Image from "next/image";
import { clientLogos } from "@/data/clients";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ToolsSlider({
  parentClass = "client-logo-carousel owl-loaded owl-theme owl-carousel owl-dots-none owl-btn-center-lr owl-btn-3 bg-gray py-5 tools",
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

      <div className="section-head style2 text-center bg-gray mb-0">
        <h2 className="title pt-5">Tools That you will learn</h2>
        <h4 className="text-dark mt-5"> <b style={{color:"#e21100"}}> {ToolsContent?.tool1Num} </b>{ToolsContent?.tool1Title}</h4>
                    <p className="text-dark mb-0" >{ToolsContent?.tool1worth}</p>
      </div>

      <Swiper
        // slidesPerView={5}
        spaceBetween={30}
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
          1000: {
            slidesPerView: 10,
          },
        }}
        modules={[Autoplay]}
        className={parentClass}
      >
        {Tools1?.map((item, index) => (
          <SwiperSlide className="item " key={index}>
            <div className="ow-client-logo   bg-gray">
              <div className={`client-logo bg-gray ${border ? "border" : ""}`}>
                <a href="#">
                  <Image width={100} height={150} src={item.img} alt="" style={{height:"100px"}} />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        
      </Swiper>

      {Tools2 &&
         <Swiper
         // slidesPerView={5}
         spaceBetween={30}
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
             slidesPerView: 3,
           },
 
           767: {
             slidesPerView: 5,
           },
           1000: {
             slidesPerView: 10,
           },
         }}
         modules={[Autoplay]}
         className={parentClass}
       >
         {Tools2?.map((item, index) => (
           <SwiperSlide className="item" key={index}>
             <div className="ow-client-logo  bg-gray">
               <div className={`client-logo bg-gray ${border ? "border" : ""}`}>
                 <a href="#">
                   <Image width={100} height={150} src={item.img} alt="" style={{height:"100px"}}/>
                 </a>
               </div>
             </div>
           </SwiperSlide>
         ))}
 
         
       </Swiper>
      }

    {Tools3 &&
        <>
          
              <div className="section-head style2 text-center pt-5 mb-0 bg-gray">
                    <h4 className="text-dark mb-0"> <b style={{color:"#e21100"}}> {ToolsContent?.tool2Num} </b>{ToolsContent?.tool2Title}</h4>
                  
                </div>


            <Swiper
            // slidesPerView={5}
            spaceBetween={30}
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
            1000: {
                slidesPerView: 10,
            },
            }}
            modules={[Autoplay]}
            className={parentClass}
        >
            {Tools3?.map((item, index) => (
            <SwiperSlide className="item" key={index}>
                <div className="ow-client-logo  bg-gray">
                <div className={`client-logo bg-gray ${border ? "border" : ""}`}>
                    <a href="#">
                    <Image width={100} height={150} src={item.img} alt="" style={{height:"100px"}}/>
                    </a>
                </div>
                </div>
            </SwiperSlide>
            ))}
    
            
        </Swiper>
        
        </>
    }


    </>
  );
}
