import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function LiveProjects() {
  return (
    <div className="content-block pt-5  bg-white">
      {/* Content Section */}
      <div className="section-full">
      <div className="section-head style2 text-center mb-5">
                    <h2 className="title">Live Projects</h2>
                    <p className="mb-0">Gain hands-on experience with real-world digital marketing projects and enhance your skills in practical scenarios.
                    </p>
                </div>
        <div className="row spno about-industry">
          
          {/* <div
            className="col-lg-8 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
            // style={{height:"60%"}}
          >
            <div className="dlab-post-media dlab-img-effect zoom" >
              <Image
                alt=""
                className="img-cover"
                src="/images/zing-digital-marketing-mastery/Live-Projects/web-design.jpg"
                width="900"
                height="650"
                style={{height:"450px",objectFit:"cover"}}
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
                <h2 className="title text-black">
                  <span>Web </span> 
                  Design
                </h2>
                <p>
                  At Zing Studio we design websites with your customer in mind,
                  because modern web design is more than just about creating a
                  visually stunning site.
                </p>
                <Link
                  href={`/web-design-service`}
                  className="site-button outline outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div> */}

          <div
            className="col-lg-4 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="dlab-post-media dlab-img-effect zoom" style={{height:"100%"}}>
              <Image
                alt=""
                className="img-cover"
                src="/images/zing-digital-marketing-mastery/Live-Projects/digital-marketing.jpg"
                width="900"
                height="550"
                style={{height:"100%",objectFit:"cover"}}
              />
            </div>
          </div>
          <div
            className="col-lg-4 bg-primary text-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.8s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title text-white">
                  <span>Digital </span> <br />
                  Marketing
                </h2>
                <p>
                Step into the world of digital marketing and learn how to build brands that stand out online! From viral social media strategies and killer SEO hacks to content that clicks and data that delivers, this course has it all! Perfect for beginners and future marketing pros—learn, create, and crush it online.
                </p>
                <Link
                  href={`/digital-marketing-service`}
                  className="site-button outline white outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          
           <div
            className="col-lg-4 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="dlab-post-media dlab-img-effect zoom" style={{height:"100%"}}>
              <Image
                alt=""
                className="img-cover"
                src="/images/zing-digital-marketing-mastery/Live-Projects/saas-platform.jpg"
                width="900"
                height="550"
                style={{height:"100%",objectFit:"cover"}}
              />
            </div>
          </div>

         <div
            className="col-lg-4 text-white wow fadeIn " 
            data-wow-duration="2s"
            data-wow-delay="0.4s"
            style={{ backgroundColor: "#e21100" }}
          >
            <div className="service-box style2">
              <div>
                <h2 className="title text-white">
                  <span>Saas </span> <br />
                  Platform
                </h2>
                <p>
                  We offer to jump start your e-commerce brand online with some
                  of the leading Saas platforms that offer your quicker turn
                  around, robust and feature rich e-commerce website.
                </p>
                <Link
                  href={`/web-design-service`}
                  className="site-button outline white outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="dlab-post-media dlab-img-effect zoom" style={{height:"100%"}}>
              <Image
                alt=""
                className="img-cover"
                src="/images/zing-digital-marketing-mastery/Live-Projects/open-source-development.jpg"
                width="900"
                height="550"
                style={{height:"100%",objectFit:"cover"}}
              />
            </div>
          </div>
          <div
            className="col-lg-4 text-white wow fadeIn "
            data-wow-duration="2s"
            data-wow-delay="0.8s"
            style={{ backgroundColor: "#e21100" }}
          >
            <div className="service-box style2">
              <div>
                <h2 className="title text-white">
                  <span>Open-source </span> <br />
                  Development
                </h2>
                <p>
                  Open-source Development Open Source commerce development is
                  the order of the way in Ecommerce development. The open source
                  platforms offer a host os flexible and beneficial features...
                </p>
                <Link
                  href={`/web-design-service`}
                  className="site-button outline white outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          
        </div>
      </div>
      {/* Content Section End */}
    </div>
  );
}
