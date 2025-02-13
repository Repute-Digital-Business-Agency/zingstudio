import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function CourseDetails() {
  return (
    <>
        <div className="section-head text-center wow fadeInUp mt-5 " data-wow-delay="0.8s" 
      
        >
            <h2 className="title">Zing Digital Marketing Mastery</h2>
            <h4 className="mt-4 mb-0" style={{fontSize:"22px"}}>
            3 Months + 3 Months Internship
            </h4>
            {/* <p>
              At Zing Studio, we are committed to empowering the next generation
              of digital experts through our immersive training programs. Our
              courses are meticulously designed to equip you with cutting-edge
              skills and knowledge, ensuring that you can grow and thrive in
              your career.
            </p> */}
          </div>

          <div className="container content-block">
      {/* Content Section */}
            <div className="section-full" >
              <div className="row spno about-industry zing-academy course-details" >
                <div
                  className="col-lg-6 "
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
                  className="col-lg-6 bg-white "
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                  
                >
                  <div className="service-box style2">
                    <div>
                      <h2 className="title ">
                        <span>Module 1: Digital Marketing Foundations</span> <br />
                        
                      </h2>

                      <ul className="list-check secondry">    
                        <li >Understanding Digital Marketing & Trends</li>
                        <li >Marketing Funnels & Customer Journey</li>
                        <li >Brand Positioning & Market Research</li>
                        <li >Competitor Analysis & Strategy</li>          
                      </ul> 

                      {/* <p style={{color:"#494949"}}>
                      Acquire real-world experience by developing campaigns,
                              optimizing websites, and creating engaging social media
                              content under the guidance of expert mentors. 
                      </p> */}
                      
                    </div>
                  </div>
                </div>
              </div>
              
                
                
                

              
              <div className="row spno about-industry zing-academy course-details mt-5"   >
                <div
                  className="col-lg-6 bg-white "
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                  
                >
                  <div className="service-box style2">
                    <div>
                      <h2 className="title ">
                        <span> Module 2: SEO Mastery</span> 
                        {/* <br /> Optimization */}
                      </h2>

                      <ul className="list-check secondry">    
                        <li >Keyword Research & Competitive Analysis</li>
                        <li >On-Page & Off-Page SEO</li>
                        <li >Technical SEO (Schema, Site Speed, Mobile Optimization)</li>
                        <li >Local SEO & E-commerce SEO</li>          
                      </ul> 

                      {/* <p style={{color:"#494949"}}>
                      Women students pursuing our academy courses receive a
                              flat 15% discount to support their career aspirations
                              and skill-building journey. 
                      </p>
                      <Link
                        href={`/academy`}
                        className="site-button outline outline-2 btnhover11"
                      >
                        Read More
                      </Link> */}
                    </div>
                  </div>
                </div>



                <div
                  className="col-lg-6 "
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


              <div className="row spno about-industry zing-academy course-details mt-5" >
                <div
                  className="col-lg-6  "
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
                  className="col-lg-6 bg-white "
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                  
                >
                  <div className="service-box style2">
                    <div>
                      <h2 className="title ">
                        <span>Module 3: Social Media & Community Building</span> <br />
                        
                      </h2>
                      <ul className="list-check secondry">    
                        <li >Instagram & Facebook Growth Strategies</li>
                        <li >LinkedIn & Twitter for Personal Branding</li>
                        <li >YouTube Marketing & Video SEO</li>
                        <li >Social Media Monetization Techniques</li>          
                      </ul> 
                      {/* <p style={{color:"#494949"}}>
                      Acquire real-world experience by developing campaigns,
                              optimizing websites, and creating engaging social media
                              content under the guidance of expert mentors. 
                      </p>
                      <Link
                        href={`/academy`}
                        className="site-button outline outline-2 btnhover11"
                      >
                        Read More
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>


              <div className="row spno about-industry zing-academy course-details mt-5"   >
                <div
                  className="col-lg-6 bg-white "
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                  
                >
                  <div className="service-box style2">
                    <div>
                      <h2 className="title ">
                        <span>Module 4: Paid Advertising & Google Ads</span> 
                        {/* <br /> Optimization */}
                      </h2>

                      <ul className="list-check secondry">    
                        <li >Google Ads (Search, Display, Shopping)</li>
                        <li >Facebook & Instagram Ads</li>
                        <li >LinkedIn & Twitter Ads</li>
                        <li >A/B Testing & Performance Analytics</li>          
                        <li >Retargeting & Budget Optimization</li>          
                      </ul>

                      {/* <p style={{color:"#494949"}}>
                      Women students pursuing our academy courses receive a
                              flat 15% discount to support their career aspirations
                              and skill-building journey. 
                      </p>
                      <Link
                        href={`/academy`}
                        className="site-button outline outline-2 btnhover11"
                      >
                        Read More
                      </Link> */}
                    </div>
                  </div>
                </div>



                <div
                  className="col-lg-6 "
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

              <div className="row spno about-industry zing-academy course-details" >
                <div
                  className="col-lg-6 "
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
                  className="col-lg-6 bg-white "
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                  
                >
                  <div className="service-box style2">
                    <div>
                      <h2 className="title ">
                        <span>Module 5: Content Marketing & Copywriting</span> <br />
                        
                      </h2>

                      <ul className="list-check secondry">    
                        <li >Crafting High-Converting Sales Copy</li>
                        <li >Blogging & SEO Writing</li>
                        <li >Storytelling & Brand Voice</li>
                        <li >Video Content & Email Marketing</li>          
                      </ul> 

                      {/* <p style={{color:"#494949"}}>
                      Acquire real-world experience by developing campaigns,
                              optimizing websites, and creating engaging social media
                              content under the guidance of expert mentors. 
                      </p> */}
                      
                    </div>
                  </div>
                </div>
              </div>
              
                
                
                

              
              <div className="row spno about-industry zing-academy course-details mt-5"   >
                <div
                  className="col-lg-6 bg-white "
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                  
                >
                  <div className="service-box style2">
                    <div>
                      <h2 className="title ">
                        <span> Module 6: AI & Automation in Marketing</span> 
                        {/* <br /> Optimization */}
                      </h2>

                      <ul className="list-check secondry">    
                        <li >AI-Powered Tools for Marketing</li>
                        <li >Chatbots & Email Automation</li>
                        <li >Personalization & Predictive Analytics</li>
                            
                      </ul> 

                      {/* <p style={{color:"#494949"}}>
                      Women students pursuing our academy courses receive a
                              flat 15% discount to support their career aspirations
                              and skill-building journey. 
                      </p>
                      <Link
                        href={`/academy`}
                        className="site-button outline outline-2 btnhover11"
                      >
                        Read More
                      </Link> */}
                    </div>
                  </div>
                </div>



                <div
                  className="col-lg-6 "
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


              <div className="row spno about-industry zing-academy course-details mt-5" >
                <div
                  className="col-lg-6  "
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
                  className="col-lg-6 bg-white "
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                  
                >
                  <div className="service-box style2">
                    <div>
                      <h2 className="title ">
                        <span>Internship</span> <br />
                        
                      </h2>
                      <ul className="list-check secondry">    
                        <li >Work on Live Projects</li>
                        <li >Develop Digital Strategies for Real Businesses</li>
                        <li >Create & Optimize Ad Campaigns</li>
                        <li >SEO & Social Media Content Execution</li>          
                      </ul> 
                      {/* <p style={{color:"#494949"}}>
                      Acquire real-world experience by developing campaigns,
                              optimizing websites, and creating engaging social media
                              content under the guidance of expert mentors. 
                      </p>
                      <Link
                        href={`/academy`}
                        className="site-button outline outline-2 btnhover11"
                      >
                        Read More
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>




                
              
            </div>
      {/* Content Section End */}
          </div>
    </>
    
  );
}
