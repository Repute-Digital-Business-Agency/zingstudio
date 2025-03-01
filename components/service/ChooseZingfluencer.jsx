import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function ChooseZingFluencer() {
  return (
    <div className="section-full content-inner const-about choose-Zf bg-white">
      <div className="container">
        <div className="row align-items-center">

          
          
          <div
            className="col-lg-8 col-md-12 col-sm-12 col-12 m-b15 wow bounceInUp"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >

            <div
              className="icon-bx-wraper m-b30 left wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <h2 className="title text-primary">
               
                  
                   
               Influencer Buzz
 
              
               </h2>
               {/* <h4 className="title"> Empowering women to lead the future</h4> */}
               <p className="mb-2" style={{ color: "#282222" }}>
               Ready to collaborate and create impact? Join forces with top brands and showcase products that align with your style and audience. Let’s work together to craft authentic stories, drive engagement, and deliver campaigns that stand out. Your influence, their brand—let’s make it happen!
               <a href="/influencer-buzz" className="text-primary">
               &nbsp; read more...
               {/* <i className="fas fa-angle-double-right ms-2" /> */}
             </a>
               </p>
 
              
            </div>

            
            <div
              className="icon-bx-wraper m-b30 left wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <h2 className="title text-primary">
              Brand Buzz

              </h2>

              <p className="mb-2" style={{ color: "#282222" }}>
              Partner with the right influencers to amplify your brand’s story. We collaborate with creators who align with your brand values, using their authentic voice and reach to promote your products, engage target audiences, and drive impactful brand awareness. Let’s turn influence into lasting impressions
              &nbsp; <a href="/brand-buzz" className="text-primary">
              read more...
              {/* <i className="fas fa-angle-double-right ms-2" /> */}
            </a>
              </p>

             
            </div>
          

            {/* <div className=" m-auto">
            <div className="our-story">
              {" "}
              <h2 className="title text-primary">
               
                  
                   
              Influencer Buzz

             
              </h2>
              
              <p className="mb-2" style={{ color: "#282222" }}>
              Ready to collaborate and create impact? Join forces with top brands and showcase products that align with your style and audience. Let’s work together to craft authentic stories, drive engagement, and deliver campaigns that stand out. Your influence, their brand—let’s make it happen!

              </p>

              <a href="/influencer-buzz" className="site-button outline outline-2 btnhover11 ">
              Read More
              <i className="fas fa-angle-double-right ms-2" />
            </a>

              

            <h2 className="title text-primary mt-5">
              Brand Buzz

              </h2>

              <p className="mb-2" style={{ color: "#282222" }}>
              Partner with the right influencers to amplify your brand’s story. We collaborate with creators who align with your brand values, using their authentic voice and reach to promote your products, engage target audiences, and drive impactful brand awareness. Let’s turn influence into lasting impressions.

              </p>

              <a href="/brand-buzz" className="site-button outline outline-2 btnhover11">
              Read More
              <i className="fas fa-angle-double-right ms-2" />
            </a>
            </div>
            
          </div> */}


          </div>

          <div
            className="col-lg-4 col-md-12 col-sm-12 col-12 wow  bounceInRight"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="radius-sm m-b30 ">
              <Image className="choose-Zf-img"
                alt=""
                src="/images/Zingfluence/influencer-buzz-image.jpg"
                width="600"
                height="722"
                 style={{
                    height:"700px",
                    objectFit:"cover"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
