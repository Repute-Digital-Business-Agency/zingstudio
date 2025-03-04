// import React from "react";

// export default function WhosThisCourseFor() {
//   return (
//     <div
//       className="section-full content-inner overlay-black-dark bg-img-fix"
//       style={{ backgroundImage: "url(/images/background/bg1.jpg)" }}
//     >
//       <div className="container">
//         <div className="section-content text-center text-white">
//           <div className="row">
//                 <div className="section-head style2 text-center mb-4">
//                     <h2 className="title">Who can apply for this course?</h2>
//                     {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p> */}
//                 </div>
//             <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
//               <div className="counter-style-5">
//                 {/* <div className="">
//                   <span className="counter">Students Studying In College</span>
//                 </div> */}
//                 <span className="counter-text" style={{fontSize:"25px"}}>Students Studying In College</span>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
//               <div className="counter-style-5">
//                 {/* <div className="">
//                   <span className="counter">4060</span>
//                 </div> */}
//                 <span className="counter-text" style={{fontSize:"25px"}}>Working Proffesionals</span>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
//               <div className="counter-style-5">
//                 {/* <div className="">
//                   <span className="counter">3164</span>
//                 </div> */}
//                 <span className="counter-text" style={{fontSize:"25px"}}>Business <br /> Owners</span>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
//               <div className="counter-style-5">
//                 {/* <div className="">
//                   <span className="counter">1852</span>
//                 </div> */}
//                 <span className="counter-text" style={{fontSize:"25px"}}>Home <br /> Makers</span>
//               </div>
//             </div>

//             <div className="dlab-post-readmore">
//                             <a
//                               href="#"
//                               title="READ MORE"
//                               rel="bookmark"
//                               className="site-button white"
//                             >
//                               READ MORE
//                               <i className="ti-arrow-right" />
//                             </a>
//             </div>
//           </div>
//           <div className="row">
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";
import Link from "next/link";
import { services2 } from "@/data/services";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Services() {
  const services2 = [
    {
      id: 13,
      iconClass: "flaticon-worker",
      title: "Students Studying In College",
      imgSrc:"/images/zing-digital-marketing-mastery/Who-can-apply-for-this-course/icon-1.png"
    },
    {
      id: 14,
      iconClass: "flaticon-factory",
      title: "Working Proffesionals",
       imgSrc:"/images/zing-digital-marketing-mastery/Who-can-apply-for-this-course/icon-2.png"
    },
    {
      id: 15,
      iconClass: "flaticon-settings",
      title: "Business <br/> Owners",
       imgSrc:"/images/zing-digital-marketing-mastery/Who-can-apply-for-this-course/icon-3.png"
    },
    {
      id: 16,
      iconClass: "flaticon-engineer-1",
      title: "Home <br/> Makers",
       imgSrc:"/images/zing-digital-marketing-mastery/Who-can-apply-for-this-course/icon-4.png"
    },
    
  ];
  return (
    <div
      className="section-full content-inner bg-white wow fadeIn whosCourse"
      data-wow-duration="2s"
      data-wow-delay="0.6s"
    >
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title">Who can apply for this course?</h2>
          <p>
          Students, professionals, entrepreneurs, or content creators—this course is for anyone ready to boost their digital skills. No experience needed, just a passion to learn and grow!
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12">
          <div className="d-flex gap-5 flex-wrap justify-content-center">
            {services2?.map((service, index) => (
              <div className="item" key={index}>
                <div className="service-box style1 w-100 h-100">
                  <div className="icon-xl m-b20 text-primary radius">
                    {/* <Link href={`/services-details/${service?.title}`} className="icon-cell"> */}
                      {/* <i className={service.iconClass} /> */}
                      <img src={service?.imgSrc} alt={service?.title} />
                    {/* </Link> */}
                  </div>
                  <h3 className="title" dangerouslySetInnerHTML={{__html:service?.title}}></h3>
                </div>
              </div>
            ))}
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}
