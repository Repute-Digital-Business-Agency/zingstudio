"use client";

import { projects2 } from "@/data/projects";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeService() {
  return (
    <div className="section-full bg-white content-inner-1 project-area bg-img-fix centeredSlides HomeService">
      <div className="container">
        <div
          className="section-head text-dark style2 wow fadeInRight"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <h2 className="title m-b10">Our Services</h2>
          <p>
          Zing Studio offers comprehensive branding solutions, including web design, digital marketing, and brand identity development. We combine creativity with strategy to deliver impactful, cost-effective solutions that help businesses grow. Explore our services to see how we can elevate your brand.
          </p>
          <Link href={`/contact`} className="site-button btnhover20 m-r10 m-b10">
            Contact Us
          </Link>
          <Link href={`/portfolio`} className="site-button btnhover20 m-b10">
            View Service
          </Link>
        </div>
        <div className="project-list">
          {/* {projects2.map((project, index) => ( */}
            <div className="project-info-box mt-5">
              <div className="project-media">
                <Image src="/images/our-services/construct/pic1.jpg" width={1704} height={696} alt="" />
              </div>
              <div className="project-content" style={{ background: "#cc3e30" }}>
                <ul className="list-details">
                  <li className="text-white">
                    <strong>Static Websites</strong>
                    <span>Starting @ ₹ 8750</span>
                  </li>
                  <li className="text-white">
                    {/* <strong> */}
                      <ul className="list-arrow mb-0">
                        <li className="text-white px-4">1 Home Page Design</li>
                        <li className="text-white px-4" style={{borderTop:"none", color:"white"}}>Upto 10 Inner Page Design</li>
                        <li className="text-white px-4" style={{borderTop:"none",color:"white"}}>HTML5 / CSS3 Compatible for Mobiles</li>
                        <li className="text-white px-4" style={{borderTop:"none",color:"white"}}>JQUERY Banner Slider</li>
                      </ul>
                    {/* </strong> */}
                    {/* <span>{project.completionDate}</span> */}
                  </li>
                 
                  <li className="text-white" >
                    <Link href={`/web-design-service`} className="site-button btnhover20 m-t10" style={{padding:"8px 15px", fontWeight:"400", fontSize:"17px"}}>
                      View Portfolio
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          {/* ))} */}

          <div className="project-info-box mt-5">
              <div className="project-media">
                <Image src="/images/our-services/construct/pic1.jpg" width={1704} height={696} alt="" />
              </div>
              <div className="project-content" style={{ background: "#cc3e30" }}>
                <ul className="list-details">
                  <li className="text-white">
                    <strong>CMS Websites</strong>
                    <span>Starting @ ₹ 25,850</span>
                  </li>
                  <li className="text-white mb-0">
                    {/* <strong> */}
                      <ul className="list-arrow mb-0">
                        <li  className="text-white px-4">1 Home Page Design</li>
                        <li className="text-white px-4" style={{borderTop:"none", color:"white"}}>Upto 15 Inner Pages</li>
                        <li className="text-white px-4" style={{borderTop:"none",color:"white"}}>HTML5 / CSS3 Compatible for Mobiles</li>
                        <li className="text-white px-4" style={{borderTop:"none",color:"white"}}>CMS (Manage Website content)</li>
                      </ul>
                    {/* </strong> */}
                    {/* <span>{project.completionDate}</span> */}
                  </li>
                 
                  <li className="text-white" >
                    <Link href={`/web-design-service`} className="site-button btnhover20 m-t10" style={{padding:"8px 15px", fontWeight:"400", fontSize:"15px"}}>
                      View Portfolio
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="project-info-box mt-5">
              <div className="project-media">
                <Image src="/images/our-services/construct/pic1.jpg" width={1704} height={696} alt="" />
              </div>
              <div className="project-content" style={{ background: "#cc3e30" }}>
                <ul className="list-details">
                  <li className="text-white">
                    <strong>E-Commerce Websites-Basic</strong>
                    <span>Starting @ ₹ 10,000</span>
                  </li>
                  <li className="text-white">
                    {/* <strong> */}
                      <ul className="list-arrow mb-0">
                        <li className="text-white px-4">1 Home Page Design</li>
                        <li className="text-white px-4" style={{borderTop:"none", color:"white"}}>Upto 5 Inner Pages</li>
                        <li className="text-white px-4" style={{borderTop:"none",color:"white"}}>Upto 15 Products Pages</li>
                        <li className="text-white px-4" style={{borderTop:"none",color:"white"}}>Categories</li>
                      </ul>
                    {/* </strong> */}
                    {/* <span>{project.completionDate}</span> */}
                  </li>
                 
                  <li className="text-white" >
                    <Link href={`/web-design-service`} className="site-button btnhover20 m-t10" style={{padding:"8px 15px", fontWeight:"400", fontSize:"17px"}}>
                      View Portfolio
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="project-info-box mt-5">
              <div className="project-media">
                <Image src="/images/our-services/construct/pic1.jpg" width={1704} height={696} alt="" />
              </div>
              <div className="project-content last" style={{ background: "#cc3e30", width:"520px" }}>
                <ul className="list-details">
                  <li className="text-white">
                    <strong>E-Commerce Websites-Standard</strong>
                    <span>Starting @ ₹ 20,000</span>
                  </li>
                  <li className="text-white">
                    {/* <strong> */}
                      <ul className="list-arrow mb-0">
                        <li className="text-white px-4">Inventory management</li>
                        <li className="text-white px-4" style={{borderTop:"none", color:"white"}}>CMS (Manage Website content)</li>
                        <li className="text-white px-4" style={{borderTop:"none",color:"white"}}>HTML5 / CSS3 Compatible for Mobiles</li>
                        <li className="text-white px-4" style={{borderTop:"none",color:"white"}}>General Features With Modern Look</li>
                      </ul>
                    {/* </strong> */}
                    {/* <span>{project.completionDate}</span> */}
                  </li>
                 
                  <li className="text-white" >
                    <Link href={`/web-design-service`} className="site-button btnhover20 m-t10" style={{padding:"8px 15px", fontWeight:"400", fontSize:"17px"}}>
                      View Portfolio
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="project-info-box mt-5">
              <div className="project-media">
                <Image src="/images/our-services/construct/pic1.jpg" width={1704} height={696} alt="" />
              </div>
              <div className="project-content " style={{ background: "#cc3e30" }}>
                <ul className="list-details">
                  <li className="text-white">
                    <strong>Digital Marketing-Basic</strong>
                    <span>Starting @ ₹ 25,999</span>
                  </li>
                  <li className="text-white">
                    {/* <strong> */}
                      <ul className="list-arrow mb-0">
                        <li className="text-white px-4">On-Page Optimization - Up to 10 Pages</li>
                        <li className="text-white px-4" style={{borderTop:"none", color:"white"}}>Competitor Analysis - 1 Competitor</li>
                        <li className="text-white px-4" style={{borderTop:"none",color:"white"}}>Keyword Research and Analysis</li>
                        <li className="text-white px-4" style={{borderTop:"none",color:"white"}}>Keyphrase Optimization - 10 Pages</li>
                      </ul>
                    {/* </strong> */}
                    {/* <span>{project.completionDate}</span> */}
                  </li>
                 
                  <li className="text-white" >
                    <Link href={`/digital-marketing-service`} className="site-button btnhover20 m-t10" style={{padding:"8px 15px", fontWeight:"400", fontSize:"17px"}}>
                      View Portfolio
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="project-info-box mt-5">
              <div className="project-media">
                <Image src="/images/our-services/construct/pic1.jpg" width={1704} height={696} alt="" />
              </div>
              <div className="project-content" style={{ background: "#cc3e30" }}>
                <ul className="list-details ">
                  <li className="text-white">
                    <strong>Digital Marketing-Standard</strong>
                    <span>Starting @ ₹ 35,000</span>
                  </li>
                  <li className="text-white">
                    {/* <strong> */}
                      <ul className="list-arrow mb-0">
                        <li className="text-white px-4">On-Page Optimization - Up to 15 Pages</li>
                        <li className="text-white px-4" style={{borderTop:"none", color:"white"}}>Competitor Analysis - 3 Competitor</li>
                        <li className="text-white px-4" style={{borderTop:"none",color:"white"}}>Keyword Research and Analysis</li>
                        <li className="text-white px-4" style={{borderTop:"none",color:"white"}}>Keyphrase Optimization - 15 Pages</li>
                      </ul>
                    {/* </strong> */}
                    {/* <span>{project.completionDate}</span> */}
                  </li>
                 
                  <li className="text-white" >
                    <Link href={`/digital-marketing-service`} className="site-button btnhover20 m-t10" style={{padding:"8px 15px", fontWeight:"400", fontSize:"17px"}}>
                      View Portfolio
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
}
