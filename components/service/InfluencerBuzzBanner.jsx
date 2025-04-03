"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function InfluencerBuzzBanner({option,bannerContent}) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerContent.words.length);
        setFade(true); // Start fading in
      }, 500); // Duration should match the CSS transition

    }, 3000); // Overall interval time

    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <div
      className="section-full   bg-img-fix pr-service-hero influ-banner trans"
      // style={{background:"#e9e9e9"}}
      style={{ backgroundImage: "url(/images/services/serviceBanner.jpg)" }}
    >
      <div className="container-fluid">
        <div className="row ">
        
        <div className="col-11 m-auto">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 content-inner chosesus-content text-white pb-lg-5 pb-md-0">
              <h2 className="title-box wow fadeInUp pt-5" data-wow-delay="0.2s">
                {bannerContent.head} <span className="bg-primary" />
              </h2>
              <p className="font-16  wow fadeInUp" data-wow-delay="0.4s">
                {bannerContent.caption}
              </p>
              <h3 className={`font-weight-300 m-b50  wow fadeInUp ${!bannerContent.words && "m-b50" }`} data-wow-delay="0.6s">
                {bannerContent.subTitle}{" "}
                {bannerContent.words && <span className="dropping-texts">
                  {bannerContent.words?.map((word, index) => (
                    <div key={index} className={index === currentIndex ? "visible" : ""}>
                      {word}
                    </div>
                  ))}
                </span>}
              </h3>
              <a
                href="/contact"
                className="site-button btnhover13 bg-primary align-self-center outline ms-auto outline-2 wow fadeInUp text-white"
                data-wow-delay="0.8s"
                style={{ textWrap: "wrap" }}
              >
                {bannerContent.button}
              </a>

              <style>{`
                .dropping-texts {
                  display: inline-block;
                  width: 180px;
                  text-align: left;
                  height: 36px;
                  vertical-align: -2px;
                  position: relative;
                 -webkit-text-stroke: 2px #fff;
                 color:transparent;
                 font-weight:800;
                 letter-spacing:2px
                }

                .dropping-texts > div {
                  font-size: 0px;
                  opacity: 0;
                  margin-left: -10px;
                  position: absolute;
                  font-weight: 800;
                  box-shadow: 0px 60px 25px -20px rgba(0, 0, 0, 0.5);
                 
                  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out, margin-left 0.3s ease-in-out,margin-left 0.3s ease-in-out;
                 
                }

                .dropping-texts > div.visible {
                  font-size: 32px !important;
                  opacity: 1;
                  margin-left: 5px;
                  margin-top: 10px;
                  transform: rotate(0deg);
                  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out, margin-left 0.3s ease-in-out, margin-top 0.3s ease-in-out;
                   font-weight: 800 !important;
                }
              `}</style>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 content-inner chosesus-content text-white d-flex flex-coloumn align-item-end justify-content-center wow fadeInUp md-pt-0 pb-md-0 ">
              
            <div className="radius-sm  ">
                {/* <img className="choose-Zf-img fade-image"
                  alt=""
                  src={`/images/Influence-Buzz/banner-img-${currentIndex + 1}.png`}
                  // width="600"
                  // height="722"
                  style={{
                      // height:"700px",
                      objectFit:"cover",
                      position:"relative",
                      bottom:"-50px"
                  }}
                /> */}
              
                  
              <Image
                className={`choose-Zf-img fade-image ${fade ? "fade-in" : "fade-out"}`}
                alt="Influencer Banner"
                src={bannerContent.image[currentIndex]}
                width={600}
                height={722}
                style={{ objectFit: "contain" , position: "relative", bottom: "0px", width:"100%", height:"100%"}}
              />
                  
              

              
              </div>
              <style>{`
              .fade-image {
                transition: opacity 0.5s ease-in-out;
              }
              .fade-in {
                opacity: 1;
                 
              }
              .fade-out {
                opacity: 0;
                 
              }
            `}</style>
              
            </div>
          <div className="col-xl-4 col-lg-12 col-md-12 " >
            <div style={{display:"flex", justifyContent:"center"}}>
            <img className=" wow box-shadow  fadeInUp" src={bannerContent.charImg} alt={bannerContent.head} style={{width:"400px", }}/>
            </div>


              {/* <div className="inquiry-form wow box-shadow  fadeInUp mt-0 mt-xl-5 mb-lg-5 mb-md-0">
              <h3 className="title-box text-white m-t0 m-b10">
              {bannerContent.formTitle}
                <span className="bg-primary" />
              </h3>
              <iframe
            src="https://connect.irepute.in/file/zing-fluence/"
            width="100%"
            height="320px"
            // style="border: none;"
            allowfullscreen
           scrolling="no"
           style={{background:"transparent"}}
            ></iframe>
              </div> */}
            
          
            {/* <form 
              onSubmit={(e) => e.preventDefault()}
              className="inquiry-form wow box-shadow  fadeInUp "
              data-wow-delay="0.2s"
            
            >
              <h3 className="title-box text-white m-t0 m-b10">
              {bannerContent.formTitle}
                <span className="bg-primary" />
              </h3>
             
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-user " />
                      </span>
                      <input
                        name="dzName"
                        type="text"
                        required
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-mobile " />
                      </span>
                      <input
                        name="dzOther[Phone]"
                        type="number"
                        required
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-email " />
                      </span>
                      <input
                        name="dzEmail"
                        type="email"
                        className="form-control"
                        required
                        placeholder="Your Email Id"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-link " />
                      </span>
                      <input
                        name="profileLink"
                        type="text"
                        className="form-control"
                        required
                        placeholder="Profile Link"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                     
                      <input
                        name="niche"
                        type="text"
                        className="form-control"
                        required
                        placeholder="What is your Niche?"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                     
                      <input
                        name="dzEmail"
                        type="email"
                        className="form-control"
                        required
                        placeholder="What are your Commercials?"
                      />
                    </div>
                  </div>
                </div>
                
                
                <div className="col-lg-12 col-md-12">
                  <button
                    name="submit"
                    type="submit"
                    value="Submit"
                    className="site-button btnhover20 m-t10"
                  >
                    <span>Submit</span>
                  </button>
                </div>
              </div>
          </form> */}
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
</>
  );
}