"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function AcademyCourseBanner({option,bannerContent}) {

  

    {/*  
         const bannerContent = {
        head:"Zing AdSense Ace",
        caption:"Course Highlight",
        duration:"8 Weeks",
        subTitle:"Application Closes On 31/05/2025",
        list:[
          "lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut in, rem officiis ",
          "lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut in, rem officiis ",
          "lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut in, rem officiis"
        ],
        button1:"Live",
        button2:"Online",
        button3:"Interactive",
        image:"/images/brand-buzz/brand-buzz-header-img.png",
        formTitle:"Register Now For free"
      }
        
        */}
   



  return (
    <>
    <div
      className="section-full  text-white bg-img-fix pr-service-hero influ-banner course-banner trans"
      id="contact"
    >
      <div className="container">
        <div className="row">
        
        <div className="col-12 m-auto">
          <div className="row">
         
          <div className="col-lg-7 col-md-12 content-inner chosesus-content text-black  pb-5">
          <h2
              className="title-box font-weight-300  wow fadeInUp mb-0 pb-3 "
              data-wow-delay="0.2s"
              dangerouslySetInnerHTML={{__html:bannerContent.head}}
            > 
            
               {/* <span className="bg-primary" /> */}
            </h2>
          <h4
              className="font-weight-300 wow fadeInUp pb-2 mb-0"
              data-wow-delay="0.4s"
            >
            {bannerContent.caption}
            </h4>
            <ul
              className="list-check  wow fadeInUp text-white mb-0 pb-2"
              data-wow-delay="0.6s"
            >
              {bannerContent.list.map((item, index) => (
                <li key={index}><span>{item} </span></li>
              ))}
             
             
            </ul>

            <h4 className="font-16 fw-medium wow fadeInUp mb-0 course-highlight" data-wow-delay="1s">
          Course Duration : {bannerContent.duration}

            </h4>

            <h4 className="font-16 fw-medium   wow fadeInUp mb-0  course-highlight" data-wow-delay="1s">
          Course Fees : {bannerContent.fees}

            </h4>
            

            <h4
              className="font-16 fw-medium   wow fadeInUp course-highlight"
              data-wow-delay="1.2s"
            >
              {bannerContent.subTitle}



            </h4>

            <div >
            {/* <a href="/contact" className="site-button btnhover13 primary align-self-center outline ms-auto outline-2 wow fadeInUp  text-white "
              data-wow-delay="1.4s"  style={{textWrap:"wrap", marginRight:"10px", background:"#1a43bf"}}>
                    {bannerContent.button1}
             
            </a> */}
            <a href="/contact" className="site-button btnhover13 primary align-self-center outline ms-auto outline-2 wow fadeInUp mt-2"
              data-wow-delay="1.4s"  style={{textWrap:"wrap",marginRight:"10px",background:"transparent", border:"1px solid #fff ", color:"#fff", fontSize:"16px", textTransform:"uppercase"}}>
                     {bannerContent.button2}
             
            </a>
            {/* <a href="/contact" className="site-button btnhover13 primary align-self-center outline ms-auto outline-2 wow fadeInUp  text-white"
              data-wow-delay="1.4s"  style={{textWrap:"wrap",marginRight:"10px", background:"#1a43bf"}}>
                     {bannerContent.button3}
             
            </a> */}
            </div>

            

            {/* <h4
              className="font-weight-300 wow fadeInLeft"
              data-wow-delay="0.8s"
            >
             What you get
            </h4>
            <ul
              className="list-hand-point  wow fadeInLeft"
              data-wow-delay="1s"
            >
              {bannerContent.list.map((item, index) => (
                <li key={index}><span>{item} </span></li>
              ))}
             
             
            </ul> */}
          </div>
         
          <div className="col-lg-5 col-md-12 m-b30  pt-sm-0 pt-3" >
            {/* <div style={{width:"200px", height:"500px"}}> */}
            <img src={bannerContent.charImg} alt={bannerContent.head} style={{width:"400px"}}/>
            {/* </div> */}
            
            {/* <form 
              onSubmit={(e) => e.preventDefault()}
              className="inquiry-form wow box-shadow  fadeInUp mb-3"
              data-wow-delay="0.2s"
              // id="contact"
            >
              <h3 className="title-box font-weight-300 m-t0 m-b10 text-white">
              Register Now For Free
               
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
                        <i className="ti-user " />
                      </span>
                      <input
                        name="name"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Last Name"
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
                        <i className="ti-lock " />
                      </span>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        required
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
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

                
                
               
                
                
                <div className="col-lg-12 col-md-12">
                  <button
                    name="submit"
                    type="submit"
                    value="Submit"
                    className="site-button btnhover20 m-t10"
                  >
                    <span>Register</span>
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