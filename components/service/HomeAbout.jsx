// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// export default function HomeAbout() {
//   return (
//     <div className="section-full content-inner const-about">
//       <div className="container">
//         <div className="row align-items-center">
//         <div
//             className="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInUp"
//             data-wow-duration="2s"
//             data-wow-delay="0.6s"
//           >
//             <div className="content-bx1">
//               {/* <div className="about-year"> */}
//               <h2 className="title" style={{color:"#1a43bf",fontSize:"30px"}}> About Us</h2>
//               {/* </div> */}
//               <div className="section-head style2">
//                 <h2 className="title">
//                 Delivering cost-effective digital solutions
//                   {/* <br />
//                  success stories like these. */}
//                 </h2>
//                 <p>
//                 Zing Studio is a leading branding firm offering a full spectrum of services, including web design, digital marketing, and specialized digital marketing training through Zing Academy. Dedicated to delivering exceptional services at highly competitive and cost-effective rates, Zing Studio empowers businesses to enhance their online presence while equipping individuals with the skills required to excel in the digital marketing landscape. Our commitment to quality, innovation, and affordability makes Zing Studio a trusted partner for both organizational growth and professional development.

//                 </p>
//               </div>
//               <Link
//                 href={`/portfolio`}
//                 className="site-button m-r10 m-b10 btnhover20"
//               >
//                 View Portfolio
//               </Link>
//               <Link
//                 href={`/about`}
//                 className="site-button  m-b10 btnhover20"
//               >
//                 About Us
//               </Link>
//             </div>
//           </div>
//           <div
//             className="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInUp"
//             data-wow-duration="2s"
//             data-wow-delay="0.3s"
//           >
//             <div className="radius-sm m-b30 img-ho1">
//               <Image
//                 alt=""
//                 src="/images/about/slide13-person.png"
//                 width="600"
//                 height="722"
//               />
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function HomeAbout() {
  return (
    <div className="section-full content-inner const-about bg-gray" style={{ backgroundImage: "url(/images/elementbg/about-us-bg-element.png)", backgroundRepeat:"no-repeat", }}>
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInUp"
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
            className="col-lg-6 col-md-6 col-sm-12 col-12 wow fadeInUp"
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
                Delivering cost-effective digital solutions
                    {/* <br /> */}
                 success stories like these.
                </h2>
                <p>
                Zing Studio is a leading branding firm offering a full spectrum of services, including web design, digital marketing, and specialized digital marketing training through Zing Academy. Dedicated to delivering exceptional services at highly competitive and cost-effective rates, Zing Studio empowers businesses to enhance their online presence while equipping individuals with the skills required to excel in the digital marketing landscape. Our commitment to quality, innovation, and affordability makes Zing Studio a trusted partner for both organizational growth and professional development.
                </p>
              </div>
              <Link
                href={`/portfolio`}
                className="site-button m-r10 m-b10 btnhover20"
                style={{background:"#e21100"}}
              >
                View Portfolio
              </Link>
              <Link
                href={`/about`}
                className="site-button black m-b10 btnhover20"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

