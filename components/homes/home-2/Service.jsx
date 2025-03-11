import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Service() {
  return (
    <div className="content-block">
      {/* Content Section */}
      <div className="section-full">
        <div className="row spno about-industry">
          <div
            className="col-lg-8 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="dlab-post-media dlab-img-effect zoom height-sec" style={{height:"400px"}}>
              <Image
                alt=""
                className="img-cover"
                src="/images/services/web-design-image.jpg"
                width="900"
                height="550"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div
            className="col-lg-4 bg-white wow fadeIn height-sec"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
            style={{height:"400px"}}
          >
            <div className="service-box style2 h-100">
              <div>
                <h2 className="title text-black">
                  {/* <span ></span> <br /> */}
                  Web Design
                </h2>
                <p>
                Your website is your brand’s first impression—let’s make it unforgettable! We create sleek, responsive, and user-friendly designs that captivate audiences and drive results. Let’s build a digital presence that turns visitors into loyal customers!
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

          <div
            className="col-lg-4 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="dlab-post-media dlab-img-effect zoom" style={{height:"100%"}}>
              <Image
                alt=""
                className="img-cover"
                src="/images/services/digital-marketing-img-1.jpg"
                width="900"
                height="550"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div
            className="col-lg-4 bg-primary text-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.8s"
          >
            <div className="service-box style2 h-100">
              <div>
                <h2 className="title text-white">
                  {/* <span className=""> </span> <br /> */}
                  Digital Marketing
                </h2>
                <p>
                Boosting brand visibility and engagement through tailored strategies—SEO, social media, content marketing, and paid campaigns—designed to deliver measurable results.
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
            <div className="dlab-post-media dlab-img-effect zoom " style={{height:"100%"}}>
              <Image
                alt=""
                className="img-cover"
                src="/images/services/digital-marketing-img-2.jpg"
                width="900"
                height="550"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

        {/*  <div
            className="col-lg-4 bg-primary text-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title">
                  <span>Saas </span> <br />
                  Platform
                </h2>
                <p>
                  We offer to jump start your e-commerce brand online with some
                  of the leading Saas platforms that offer your quicker turn
                  around, robust and feature rich e-commerce website.
                </p>
                <Link
                  href={`/e-commerce`}
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
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/services/e-commerce-managment.jpg"
                width="900"
                height="550"
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
                <h2 className="title">
                  <span>Open-source </span> <br />
                  Development
                </h2>
                <p>
                  Open-source Development Open Source commerce development is
                  the order of the way in Ecommerce development. The open source
                  platforms offer a host os flexible and beneficial features...
                </p>
                <Link
                  href={`/e-commerce`}
                  className="site-button outline white outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div> */}

          <div
            className="col-lg-4 bg-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="service-box style2 h-100">
              <div>
                <h2 className="title text-black">
                  {/* <span></span> 
                  <br />  */}
                  E-Commerce
                </h2>
                <p>
                User-centric e-commerce websites with intuitive navigation and secure payment systems, designed to optimize customer experience and accelerate business growth.
                </p>
                <Link
                  href={`/e-commerce-service`}
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
            <div className="dlab-post-media dlab-img-effect zoom " style={{height:"100%"}}>
              <Image
                alt=""
                className="img-cover"
                src="/images/services/e-commerece-img.jpg"
                width="900"
                height="550"
                // style={{ height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* <div
            className="col-lg-4 bg-primary text-white wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div className="service-box style2">
              <div>
                <h2 className="title">
                  <span>Academy</span>
                  <br />
                  Marketing 
                </h2>
                <p>
                  At Zing Studio, our competent team specializes in providing
                  innovative, result-driven and cost-effective social media
                  marketing services in India designed to improve your
                  performance and maximize ROI.
                </p>
                <Link
                  href={`/social-media-marketing`}
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
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/services/linkedln-marketing.jpg"
                width="900"
                height="550"
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
                <h2 className="title">
                  <span>Pay Per </span>
                  <br />
                  Click
                </h2>
                <p>
                  PPC advertising takes advantage of high-competition keywords
                  to drive targeted traffic to your website cost-effectively,
                  maximizing returns on your marketing spend.
                </p>
                <Link
                  href={`/pay-per-click`}
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
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/services/social-media-marketing.jpg"
                width="900"
                height="550"
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
                <h2 className="title">
                  <span>LinkedIn </span> <br />
                  Marketing
                </h2>
                <p>
                  At Zing Studio, we specialize in providing creative LinkedIn
                  marketing services that elevate your business profile into a
                  dynamic hub to attract professionals and spark meaningful
                  conversations.
                </p>
                <Link
                  href={`/linkedin-marketing`}
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
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/services/pay-per-click.jpg"
                width="900"
                height="550"
              />
            </div>
          </div>

          <div
            className="col-lg-8 wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="dlab-post-media dlab-img-effect zoom">
              <Image
                alt=""
                className="img-cover"
                src="/images/services/lead-generation-camp.jpg"
                width="900"
                height="550"
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
                  <span>Lead Generation </span> <br />
                  Campaigns
                </h2>
                <p>
                  At Zing Studio, we specialize in providing reliable,
                  high-impact and cost-effective lead generation solutions
                  customized to meet the specific business needs and budget.
                </p>
                <Link
                  href={`/lead-generation-compaigns`}
                  className="site-button outline outline-2 btnhover11"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* Content Section End */}
    </div>
  );
}
