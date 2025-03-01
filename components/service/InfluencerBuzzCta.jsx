import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function InfluencerBuzzCta() {
  return (
  <>
   
    <div
      className="react-parallax "
      style={{ position: "relative", overflow: "hidden" }}
    >
      <Image
        className="react-parallax-bgimage"
        src="/images/Influence-Buzz/what-ar-you-waiting-for/bg-img.jpg"
        alt=""
        width={1920}
        height={1024}
        style={{
          position: "absolute",
          left: "0%",
          top: "0px",
          width: "100%",
          objectFit:"cover",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          height: "100%",
          width: "100%",
          filter: "none",
        }}
      />
      <div
        className="hero-sec react-parallax-content"
        style={{ position: "relative" }}
      >
        <div className="hero-section overlay2 relative home-slider-11">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="content-wrapper height-70">
                  <div className="hero-content  text-center content-center">
                    
                    <h2 className="title text-center style3 pt-5">
                      What are You waiting For ?
                    </h2>

                    <p className="text-white m-auto pt-2" style={{width:"55%"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque mollitia, vero vel modi tenetur numquam. Praesentium nemo sed accusantium unde cupiditate molestiae omnis animi, nulla quisquam nihil exercitationem ut incidunt.</p>
                  
                    <Link href="/contact" className="site-button mt-3" style={{ cursor: "pointer", position: "relative", zIndex: 10}}>
                      Join Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
