
"use client"
import Image from "next/image";
import Link from "next/link";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import BannerParallax from "@/components/service/BannerParallex";
// import Header17 from "@/components/headers/Header17";
// import Academy from "@/components/service/Academy";
// import Footer13 from "@/components/footers/Footer13";

export default function Am_a_Zing() {
  return (

    <div style={{marginTop:"100px", border:"1px solid red", position:"relative", height:"1000px"}}>
       <Parallax pages={1.5} style={{top:"0", left:"0"}} className="section-full box-about-list Am_a_Zing bg-gray parallax">
      <ParallaxLayer
        offset={0}
        speed={0.3}
        style={{
          backgroundImage: "url(/images/element-4.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: -1,
          // transform: "scale(1.2)"
          
        }}
      />
      <ParallaxLayer
        offset={0}
        speed={0.8}
        style={{
          backgroundImage: "url(/images/element-6.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: -1,
         
        }}
      />
      <div className="row spno">
      <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.2s">
        <Parallax pages={1} style={{ position: "relative", top: "0", left: "0" }} className="parallax">
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{
              zIndex: 1, // Ensure proper layering
              position:"absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%", // Match the parent's height
            }}
          >
            <Image
              alt="Am-A-Zing Program"
              className="img-cover"
              src="/images/Home-Page/test-2.png"
              width={500} // Adjust width to fit the container
              height={400} // Adjust height proportionally
              style={{
                objectFit: "cover",
                maxWidth: "100%", // Ensure responsiveness
                maxHeight: "100%", // Ensure responsiveness
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0}
            speed={0.4}
            style={{
              zIndex: 1, // Ensure proper layering
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%", // Match the parent's height
            }}
          >
            <Image
              alt="Am-A-Zing Program"
              className="img-cover"
              src="/images/Home-Page/test-1.png"
              width={500} // Adjust width to fit the container
              height={400} // Adjust height proportionally
              style={{
                objectFit: "cover",
                maxWidth: "100%", // Ensure responsiveness
                maxHeight: "100%", // Ensure responsiveness
              }}
            />
          </ParallaxLayer>
        </Parallax>
</div>

        <div className="col-lg-6 col-md-12 ">
          <div className="max-w700 m-auto p-tb50 p-lr20">
            <div className="our-story">
              <h2 className="title text-primary">
                <Link href="/am-a-zing">
                  <span className="p-r20">Am-A-Zing</span> Program:
                </Link>
              </h2>
              <h4 className="title"> Empowering women to lead the future</h4>
              <p style={{ color: "black" }}>
                At Zing Studio, we strive to create opportunities to uplift
                women, enabling them to realize their potential and take control
                of the decisions that shape their lives. We do this through
                leadership capacity building, digital literacy, skills
                development and employment, ensuring equal access to
                opportunities for women to thrive and succeed.
              </p>
            </div>

            <div
              className="icon-bx-wraper m-b30 left wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="icon-md">
                <a href="#" className="icon-cell text-white">
                  <i className="flaticon-factory"></i>
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-title">
                  10% discounted cost for Women Entrepreneurs:
                </h4>
                <p className="text-white">
                  We believe in supporting women entrepreneurs on their journey
                  to success, that’s why we offer a 10% discount on our services
                  to help them grow their businesses with ease and confidence.
                </p>
              </div>
            </div>

            <div
              className="icon-bx-wraper m-b30 left wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="icon-md">
                <a href="#" className="icon-cell text-white">
                  <i className="flaticon-settings"></i>
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-title">
                  Turning Career Breaks into Breakthroughs for Women:
                </h4>
                <p className="text-white">
                  We prioritize hiring and providing a supportive platform for
                  women and encouraging those who have taken a career break to
                  restart and thrive in their professional journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
    </div>


   
  );
}


{/* <>
<Header17/>
<BannerParallax/>
<Academy/>
<Footer13/>
</> */}