import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function ZingAcademy() {
  return (
    <>
        <div className="section-head text-center wow fadeInUp mt-5" data-wow-delay="0.8s" style={{position:"sticky",
            top:"80px"
        }} >
            <h2 className="title">Zing Academy</h2>
            <h4 className="mt-4 mb-0" style={{fontSize:"22px"}}>
              Nurturing an environment that is inclusive and full of
              possibilities
            </h4>
            <p>
              At Zing Studio, we are committed to empowering the next generation
              of digital experts through our immersive training programs. Our
              courses are meticulously designed to equip you with cutting-edge
              skills and knowledge, ensuring that you can grow and thrive in
              your career.
            </p>
          </div>

              <div className="content-block">
      {/* Content Section */}
      <div className="section-full" style={{position:"relative"}}>
        <div className="row spno about-industry" style={{
            position:"sticky",
            top:"350px"   
        }} >
          <div
            className="col-lg-8 wow fadeIn "
            data-wow-duration="2s"
            data-wow-delay="0.2s"
            
            
          >
            <div className="dlab-post-media dlab-img-effect zoom" >
              <Image
                alt=""
                className="img-cover"
                src="/images/services/web-design.jpg"
                width="900"
                height="200"
              />
            </div>
          </div>
          <div
            className="col-lg-4 bg-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title ">
                  <span>3 Months On-Job Training</span> <br />
                  
                </h2>
                <p style={{color:"#494949"}}>
                Acquire real-world experience by developing campaigns,
                        optimizing websites, and creating engaging social media
                        content under the guidance of expert mentors. 
                </p>
                <Link
                  href={`/web-design-service`}
                  className="site-button outline outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
         
          
          
          

        
        <div className="row spno about-industry" style={{
            position:"sticky",
            top:"350px",   
          
        }} >
          <div
            className="col-lg-4 bg-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title ">
                  <span> Exclusive Discount for Female Students:</span> 
                  {/* <br /> Optimization */}
                </h2>
                <p style={{color:"#494949"}}>
                Women students pursuing our academy courses receive a
                        flat 15% discount to support their career aspirations
                        and skill-building journey. 
                </p>
                <Link
                  href={`/academy-service`}
                  className="site-button outline outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>



          <div
            className="col-lg-8 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
           
          >
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/services/seo.jpg"
                width="900"
                height="200"
              />
            </div>
          </div>
        </div>
          
        
      </div>
      {/* Content Section End */}
    </div>
    </>
    
  );
}
