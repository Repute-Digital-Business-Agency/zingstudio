import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function HomeAbout() {
  return (
    <div className="section-full content-inner const-about homeAbout" style={{ backgroundImage: "url(/images/elementbg/about-us-bg-element.png)",backgroundRepeat:"no-repeat", }}>
       <div className="moveAnimation" style={{ position: "absolute", bottom: "0px", right: "0", animation: "moveImage3 5s linear infinite", opacity:"0.7"
        // border:"1px solid red"
         }}>
          <img
            src="/images/Academy/lets-connect/animation.png"
           
          />
        </div>
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-5 col-sm-12 col-12 wow fadeInUp img-sec mx-auto"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="radius-sm m-b30 img-ho1">
              <Image
                alt=""
                src="/images/Home-Page/about/pic11.jpg.png"
                width="600"
                height="722"
              />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12 col-12 wow fadeInUp pt-4"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="content-bx1" style={{paddingLeft:"60px"}}>
              <div className="about-year">
                <span>13</span>
                <p>
                  Years
                  <br />
                  Experience
                  <br />
                  Working
                </p>
              </div>
              <div className="section-head style2">
                <h2 className="title">
                Delivering cost-effective digital solutions success stories like these.
                    {/* <br /> */}
                
                </h2>
                <p>
                Zing Studio is a leading branding firm offering a full spectrum of services, including web design, digital marketing, and specialized digital marketing training through Zing Academy. Dedicated to delivering exceptional services at highly competitive and cost-effective rates, Zing Studio empowers businesses to enhance their online presence while equipping individuals with the skills required to excel in the digital marketing landscape. Our commitment to quality, innovation, and affordability makes Zing Studio a trusted partner for both organizational growth and professional development.
                </p>
              </div>
              <Link
                href={`/about`}
                className="site-button m-r10 m-b10 btnhover20 bg-primary"
                // style={{background:"#e21100"}}
              >
                Know More
              </Link>
              {/* <Link
                href={`/about`}
                className="site-button black m-b10 btnhover20"
              >
                About Us
              </Link> */}
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}


// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// export default function HomeAbout() {
//   return (
//     <div className="section-full content-inner const-about homeAbout extra" style={{ backgroundImage: "url(/images/elementbg/about-us-bg-element.png)",backgroundRepeat:"no-repeat", }}>
//        <div className="moveAnimation" style={{ position: "absolute", bottom: "0px", right: "0", animation: "moveImage3 5s linear infinite", opacity:"0.7"
//         // border:"1px solid red"
//          }}>
//           <img
//             src="/images/Academy/lets-connect/animation.png"
           
//           />
//         </div>
//       <div className="container">
//         <div className="row align-items-center">
//           <div
//             className="col-lg-6 col-md-5 col-sm-12 col-12 wow fadeInUp img-sec mx-auto"
//             data-wow-duration="2s"
//             data-wow-delay="0.3s"
//           >
//             <div className="radius-sm m-b30 ">
//               <Image
//                 alt=""
//                 src="/images/Home-Page/home-about.png"
//                 width="600"
//                 height="722"
//               />
//             </div>
//           </div>
//           <div
//             className="col-lg-6 col-md-12 col-sm-12 col-12 wow fadeInUp pt-4"
//             data-wow-duration="2s"
//             data-wow-delay="0.6s"
//           >
//             <div className="content-bx1" style={{paddingLeft:"60px"}}>
//               {/* <div className="about-year">
//                 <span>13</span>
//                 <p>
//                   Years
//                   <br />
//                   Experience
//                   <br />
//                   Working
//                 </p>
//               </div> */}
//               <div className="section-head style2">
//                 <h2 className="title">
//                 Delivering cost-effective digital solutions success stories like these.
//                     {/* <br /> */}
                
//                 </h2>
//                 <p>
//                 Zing Studio is a leading branding firm offering a full spectrum of services, including web design, digital marketing, and specialized digital marketing training through Zing Academy.   </p>
//                 <p>
//                   Dedicated to delivering exceptional services at highly competitive and cost-effective rates, Zing Studio empowers businesses to enhance their online presence while equipping individuals with the skills required to excel in the digital marketing landscape.
//                   </p> 
                
//                 <p>
//                 Our commitment to quality, innovation, and affordability makes Zing Studio a trusted partner for both organizational growth and professional development.
//                 </p>
//               </div>
//               <Link
//                 href={`/about`}
//                 className="site-button m-r10 m-b10 btnhover20 bg-primary"
//                 // style={{background:"#e21100"}}
//               >
//                 Know More
//               </Link>
//               {/* <Link
//                 href={`/about`}
//                 className="site-button black m-b10 btnhover20"
//               >
//                 About Us
//               </Link> */}
//             </div>
//           </div>
//         </div>
//       </div>
     
//     </div>
//   );
// }
