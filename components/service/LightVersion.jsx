"use client";

import Image from "next/image";
import Link from "next/link";

const LightVersion = ({
  title,
  description,
  src,
  link,
  price,
  color,
  i,
  activeCard,
  cardRef,
  animation_delay,
  data
}) => {
  const isActive = activeCard === `${i + 1}`;
  const backgroundColor = i % 2 === 0 
  return (
    <div
      className={`staticCard`} // Add scrolled-up class for activeCard
      ref={cardRef}
      data-id={i + 1} // Set the ID to match the index for comparison
    >
      <div
        className=" dlab-box no-hover wow fadeInUp "
       
        style={{
         
          width: `100% `, 
        }}
      >


        <div className="row">
          <div className="col-lg-12 px-0" >
            
            
            <div className="section-content box-sort-in button-example mt-4 mb-5">
              <div className="pricingtable-row">
                <div className="row  m-auto gap-5 justify-content-center">
                  <div className="col-sm-12 col-md-12 col-lg-5 col-xl-3 p-lr0 align-items-stretch">
                    <div className="project-content " 
                    style={{ background: "#1a43bf42" }}>
                        <ul className="list-details">
                        <li className="text-black">
                            <span style={{ fontSize: "18px" }}>Web Design</span>
                            <span style={{ fontSize: "18px", fontWeight: "600" }}>Starting @ ₹ 8750</span>
                        </li>
                        <li className="pt-3 pb-0 text-black" style={{ fontWeight: "600",borderTop:"1px solid black" }}>Static Websites</li>
                        <ul className="list-arrow mb-0 mt-0">
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>1 Home Page Design</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>Upto 10 Inner Page Design</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>HTML5 / CSS3 Compatible for Mobiles</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>JQUERY Banner Slider</li>
                    </ul>

                        <li className="text-black btn py-0 pt-2  mb-0" style={{borderTop:"1px solid black"}}>
                            <Link href={`/web-design-service`} className="site-button btnhover20 mt-3" style={{ padding: "8px 15px", fontWeight: "600", fontSize: "15px" }}>
                            View Service
                            </Link>
                        </li>
                        </ul>
                    </div>
                  </div>
                  

                  <div className="col-sm-12 col-md-12 col-lg-5 col-xl-3 p-lr0 align-items-stretch">
                    <div className="project-content " style={{ background: "#e9e9e9" }}>
                        <ul className="list-details">
                        <li className="text-black">
                            <span style={{ fontSize: "18px" }}>Web Design</span>
                            <span style={{ fontSize: "18px", fontWeight: "600" }}>Starting @ ₹ 10,000</span>
                        </li>
                        <li className="pt-3 pb-0 text-black" style={{ fontWeight: "600" , borderTop:"1px solid black"}}>E-Commerce Websites</li>
                        <ul className="list-arrow mb-0 mt-0">
                      <li className="text-black px-4">Inventory management</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>CMS (Manage Website content)</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>HTML5 / CSS3 Compatible for Mobiles</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>General Features With Modern Look</li>
                    </ul>

                        <li className="text-black btn py-0 pt-2 mb-0" style={{borderTop:"1px solid black"}} >
                            <Link href={`/e-commerce-service`} className="site-button btnhover20 mt-3 " style={{ padding: "8px 15px", fontWeight: "600", fontSize: "15px"}}>
                            View Service
                            </Link>
                        </li>
                        </ul>
                    </div>
                  </div>
                    

                  <div className="col-sm-12 col-md-12 col-lg-5 col-xl-3 p-lr0 align-items-stretch">
                  <div className="project-content " style={{ background: "#e2110026" }}>
                        <ul className="list-details">
                        <li className="text-black">
                            <span style={{ fontSize: "18px" }}>Web Design</span>
                            <span style={{ fontSize: "18px" ,  fontWeight: "600" }}>Starting @ ₹ 25,850</span>
                        </li>
                        <li className="pt-3 pb-0 text-black" style={{ fontWeight: "600", borderTop:"1px solid black" }}>CMS Websites</li>
                        <li className="text-black mt-0 pt-0" style={{ borderTop: "none" }}>
                            {/* <strong> */}
                            <ul className="list-arrow mb-0 mt-0">
                      <li className="text-black px-4">1 Home Page Design</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>Upto 15 Inner Pages</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>HTML5 / CSS3 Compatible for Mobiles</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>CMS (Manage Website content)</li>
                    </ul>
                            {/* </strong> */}
                            {/* <span>{project.completionDate}</span> */}
                        </li>

                        <li className="text-black btn py-0 pt-2 mb-0" style={{borderTop:"1px solid black"}}>
                            <Link href={`/web-design-service`} className="site-button btnhover20 mt-3" style={{ padding: "8px 15px", fontWeight: "600", fontSize: "15px" }}>
                            View Service
                            </Link>
                        </li>
                        </ul>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-12 col-lg-5 col-xl-3 p-lr0 align-items-stretch">
                    <div className="project-content " style={{ background: "#e9e9e9" }}>
                        <ul className="list-details">
                        <li className="text-black">
                            <span style={{ fontSize: "18px" }}>Digital Marketing</span>
                            <span style={{ fontSize: "18px", fontWeight: "600"  }}>Starting @ ₹ 25,999</span>
                        </li>
                        <li className="pt-3 pb-0 text-black" style={{ fontWeight: "600",borderTop:"1px solid black" }}>Basic</li>
                        <ul className="list-arrow mb-0 mt-0">
                      <li className="text-black px-4">On-Page Optimization - Up to 10 Pages</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>Competitor Analysis - 1 Competitor</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>Keyword Research and Analysis</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>Keyphrase Optimization - 10 Pages</li>
                    </ul>

                        <li className="text-black btn py-0 pt-2  mb-0" style={{borderTop:"1px solid black"}}>
                            <Link href={`/digital-marketing-service`} className="site-button btnhover20 mt-3" style={{ padding: "8px 15px", fontWeight: "600", fontSize: "15px" }}>
                            View Service
                            </Link>
                        </li>
                        </ul>
                    </div>
                  </div>
                  

                  <div className="col-sm-12 col-md-12 col-lg-5 col-xl-3 p-lr0 align-items-stretch">
                    <div className="project-content " style={{ background: "#e2110026" }}>
                        <ul className="list-details">
                        <li className="text-black">
                            <span style={{ fontSize: "18px" }}>Digital Marketing</span>
                            <span style={{ fontSize: "18px", fontWeight: "600" }}>Starting @ ₹ 35,000</span>
                        </li>
                        <li className="pt-3 pb-0 text-black" style={{ fontWeight: "600",borderTop:"1px solid black" }}>Standard</li>
                        <ul className="list-arrow mb-0 mt-0">
                      <li className="text-black px-4">On-Page Optimization - Up to 15 Pages</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>Competitor Analysis - 3 Competitor</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>Keyword Research and Analysis</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>Keyphrase Optimization - 15 Pages</li>
                    </ul>

                        <li className="text-black btn py-0 pt-2 mb-0" style={{borderTop:"1px solid black"}} >
                            <Link href={`/digital-marketing-service`} className="site-button btnhover20 mt-3 " style={{ padding: "8px 15px", fontWeight: "600", fontSize: "15px"}}>
                            View Service
                            </Link>
                        </li>
                        </ul>
                    </div>
                  </div>
                  

                  <div className="col-sm-12 col-md-12 col-lg-5 col-xl-3 p-lr0 align-items-stretch">
                  <div className="project-content " style={{ background: "#1a43bf42" }}>
                        <ul className="list-details">
                        <li className="text-black">
                            <span style={{ fontSize: "18px" }}>Digital Marketing</span>
                            <span style={{ fontSize: "18px" ,  fontWeight: "600" }}>Starting @ ₹ 25,850</span>
                        </li>
                        <li className="pt-3 pb-0 text-black" style={{ fontWeight: "600" , borderTop:"1px solid black"}}>Premium</li>
                        <li className="text-black mt-0 pt-0" style={{ borderTop: "none" }}>
                            {/* <strong> */}
                            <ul className="list-arrow mb-0 mt-0">
                            <li className="text-black px-4">On-Page Optimization - Up to 15 Pages</li>
                            <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>Competitor Analysis - 3 Competitor</li>
                            <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>Keyword Research and Analysis</li>
                            <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>Keyphrase Optimization - 10 Pages</li>
                    </ul>
                            {/* </strong> */}
                            {/* <span>{project.completionDate}</span> */}
                        </li>

                        <li className="text-black btn py-0 pt-2 mb-0" style={{borderTop:"1px solid black"}}>
                            <Link href={`/digital-marketing-service`} className="site-button btnhover20 mt-3" style={{ padding: "8px 15px", fontWeight: "600", fontSize: "15px" }}>
                            View Service
                            </Link>
                        </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            {/* <div className="section-content box-sort-in button-example mb-5">
              <div className="pricingtable-row">
                <div className="row  m-auto">
                  <div className="col-sm-12 col-md-12 col-lg-4 p-lr0 ">
                    <div className="project-content " style={{ background: "#e21100" }}>
                        <ul className="list-details">
                        <li className="text-black">
                            <span style={{ fontSize: "18px" }}>E-Commerce Websites</span>
                            <span style={{ fontSize: "18px", fontWeight: "600" }}>Starting @ ₹ 10,000</span>
                        </li>
                        <li className="pt-3 pb-0 text-black" style={{ fontWeight: "600" }}>Basic</li>
                        <ul className="list-arrow mb-0 mt-0">
                      <li className="text-black px-4">1 Home Page Design</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>Upto 5 Inner Pages</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>Upto 15 Products Pages</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>Categories</li>
                    </ul>

                        <li className="text-black btn mt-2 mb-0" >
                            <Link href={`/web-design-service`} className="site-button btnhover20 mt-3" style={{ padding: "8px 15px", fontWeight: "600", fontSize: "15px" }}>
                            View Service
                            </Link>
                        </li>
                        </ul>
                    </div>
                  </div>
                  

                    <div className="col-sm-12 col-md-12 col-lg-4 p-lr0 " >
                    
                        <div
                        className={`pricingtable-wrapper style2 text-black active center-card`}
                        // style={{position:"relative"}}

                        >
                        <div
                            className="dm"
                        
                        >
                            
                            <h4
                            className="font-weight-800 m-t10 m-b0"
                            style={{ fontSize: "35px" ,
                                zIndex:"2000",
                                textAlign:"center",
                                lineHeight:"38px",
                            
                            }}
                            
                            
                            >E-Commerce Websites</h4>
                            <img src="images/Home-Page/web-design.jpg" alt="" />
                        </div>
                        </div>
                    
                    </div>

                  <div className="col-sm-12 col-md-12 col-lg-4 p-lr0">
                  <div className="project-content " style={{ background: "#e21100" }}>
                        <ul className="list-details">
                        <li className="text-black">
                            <span style={{ fontSize: "18px" }}>E-Commerce Websites</span>
                            <span style={{ fontSize: "18px" ,  fontWeight: "600" }}>Starting @ ₹ 20,000</span>
                        </li>
                        <li className="pt-3 pb-0 text-black" style={{ fontWeight: "600" }}>Standard</li>
                        <li className="text-black mt-0 pt-0" style={{ borderTop: "none" }}>
                           
                            <ul className="list-arrow mb-0 mt-0">
                      <li className="text-black px-4">Inventory management</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>CMS (Manage Website content)</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>HTML5 / CSS3 Compatible for Mobiles</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>General Features With Modern Look</li>
                    </ul>
                            
                        </li>

                        <li className="text-black btn mt-2 mb-0" >
                            <Link href={`/web-design-service`} className="site-button btnhover20 mt-3" style={{ padding: "8px 15px", fontWeight: "600", fontSize: "15px" }}>
                            View Service
                            </Link>
                        </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="section-content box-sort-in button-example mb-5">
              <div className="pricingtable-row">
                <div className="row  m-auto">
                  <div className="col-sm-12 col-md-12 col-lg-4 p-lr0 ">
                    <div className="project-content " style={{ background: "#e21100" }}>
                        <ul className="list-details">
                        <li className="text-black">
                            <span style={{ fontSize: "18px" }}>Digital Marketing</span>
                            <span style={{ fontSize: "18px", fontWeight: "600" }}>Starting @ ₹ 25,999</span>
                        </li>
                        <li className="pt-3 pb-0 text-black" style={{ fontWeight: "600" }}>Basic</li>
                        <ul className="list-arrow mb-0 mt-0">
                      <li className="text-black px-4">On-Page Optimization - Up to 10 Pages</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>Competitor Analysis - 1 Competitor</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>Keyword Research and Analysis</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>Keyphrase Optimization - 10 Pages</li>
                    </ul>

                        <li className="text-black btn mt-2 mb-0" >
                            <Link href={`/web-design-service`} className="site-button btnhover20 mt-3" style={{ padding: "8px 15px", fontWeight: "600", fontSize: "15px" }}>
                            View Service
                            </Link>
                        </li>
                        </ul>
                    </div>
                  </div>
                  

                    <div className="col-sm-12 col-md-12 col-lg-4  p-lr0 " >
                    
                        <div
                        className={`pricingtable-wrapper style2 text-black active center-card`}
                        

                        >
                        <div
                            className="dm"
                        
                        >
                            
                            <h4
                            className="font-weight-800 m-t10 m-b0"
                            style={{ fontSize: "35px" ,
                                zIndex:"2000",
                                textAlign:"center",
                                lineHeight:"38px",
                            
                            }}
                            
                            
                            >Digital Marketing</h4>
                            <img src="images/Home-Page/web-design.jpg" alt="" />
                        </div>
                        </div>
                    
                    </div>

                  <div className="col-sm-12 col-md-12 col-lg-4 p-lr0">
                  <div className="project-content " style={{ background: "#e21100" }}>
                        <ul className="list-details">
                        <li className="text-black">
                            <span style={{ fontSize: "18px" }}>Digital Marketing</span>
                            <span style={{ fontSize: "18px" ,  fontWeight: "600" }}>Starting @ ₹ 35,000</span>
                        </li>
                        <li className="pt-3 pb-0 text-black" style={{ fontWeight: "600" }}>Standard</li>
                        <li className="text-black mt-0 pt-0" style={{ borderTop: "none" }}>
                          


                            <ul className="list-arrow mb-0 mt-0">
                      <li className="text-black px-4">On-Page Optimization - Up to 15 Pages</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>Competitor Analysis - 3 Competitor</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>Keyword Research and Analysis</li>
                      <li className="text-black px-4" style={{ borderTop: "none", color: "white" }}>Keyphrase Optimization - 15 Pages</li>
                    </ul>

                           
                        </li>

                        <li className="text-black btn mt-2 mb-0" >
                            <Link href={`/web-design-service`} className="site-button btnhover20 mt-3" style={{ padding: "8px 15px", fontWeight: "600", fontSize: "15px" }}>
                            View Service
                            </Link>
                        </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

          </div>
        </div>

      </div>
    </div>
  );
};

export default LightVersion;

