import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function MblZingAcademyCourseHero() {
  return (

   
    <div
      className="hero-sec react-parallax overflow-hidden  academy-ban"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <Image
        className="react-parallax-bgimage"
        alt=""
        style={{
          position: "absolute",
          left: "0%",
          top: 0,
          width: "100%",
        objectFit: "cover",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          height: 898,
          width: "100%",
          filter: "none",
        }}
        src="/images/Academy/banner/banner-img-bg.jpg"
        width={1920}
        height={1024}
        priority
      />
      <div className="react-parallax-content" style={{ position: "relative" }}>
        <div className=" pt-50 pb-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="hero-content">
                <div className="silder-content">
              <h1 className="title fw-semibold text-dark">Power Up Your Skills, Power Up Your Career!   </h1>
              <p className="m-b30 text-dark">Zing Academy – Master Digital Marketing with Industry Experts! </p>
              <div className="dz-btns d-flex align-items-center justify-content-center gap-2 ">
                <Link
                  href="/careers/"
                  className=" m-0 text-decoration-none  "
                  style={{
                    background:"#e21100",
                    color:"white"
                  }}
                >
                  Free Career Counselling
                </Link>
                <Link href="/contact" className="text-dark"
                style={{
                  border:"1px solid #e21100"
                }}>
               Connect Us
                </Link>
              </div>
            </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 pt-5">
                <Image
                  alt=""
                  src="/images/Academy/banner/banner-vector-img.png"
                  width="965"
                  height="894"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
   
  );
}
