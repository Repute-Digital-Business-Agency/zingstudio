import Image from "next/image";
import Link from "next/link";

export default function Am_a_Zing() {
  return (
    // <div
    //   className="section-full box-about-list Am_a_Zing bg-gray"
    //   style={{ backgroundImage: "url(/images/element-4.png)", backgroundRepeat:"no-repeat", }}
    // >
    //   <div className="row spno">
    //     <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.2s">
    //       <Image
    //         alt=""
    //         className="img-cover"
    //         src="/images/Home-Page/am-a-zingprogram.jpg"
    //         width="1000"
    //         height="674"
    //       />
    //     </div>
    //     <div className="col-lg-6 col-md-12 ">
    //       <div className="max-w700 m-auto p-tb50 p-lr20">
    //         <div className="our-story">
    //           {" "}
    //           <h2 className="title text-primary">
    //             {" "}
    //             <Link href="/am-a-zing">
    //               <span className=" p-r20">
    //               <img
    //                 alt=""
                  
    //                 // src="/images/Home-Page/am-text-blue.png"
    //                 src="/images/Home-Page/am-text-with-two-colors.png"
    //                 // src="/images/Home-Page/am-text-black.png"
    //                 width="320"
    //                 height="100" 
    //                 // style={{ width: "100px", height: "auto" }}
    //               />
    //                 {/* Am-A-Zing */}
    //                 </span>
    //               {/* Program: */}
    //             </Link>
    //           </h2>
    //           <h4 className="title"> Empowering women to lead the future</h4>
    //           <p style={{ color: "black" }}>
    //             At Zing Studio, we strive to create opportunities to uplift
    //             women, enabling them to realize their potential and take control
    //             of the decisions that shape their lives. We do this through
    //             leadership capacity building, digital literacy, skills
    //             development and employment, ensuring equal access to
    //             opportunities for women to thrive and succeed.
    //           </p>
    //         </div>
    //         <div
    //           className="icon-bx-wraper m-b30 left wow fadeInUp"
    //           data-wow-delay="0.6s"
    //         >
    //           <div className="icon-md">
    //             <a href="#" className="icon-cell text-white">
    //               <i className="flaticon-factory"></i>
    //             </a>
    //           </div>
    //           <div className="icon-content">
    //             <h4 className="dlab-tilte">
    //               10% disounted cost for Women Entrepreneurs:
    //             </h4>
    //             <p className="text-white">
    //               We believe in supporting women entrepreneurs on their journey
    //               to success, that’s why we offer a 10% discount on our services
    //               to help them grow their businesses with ease and confidence.
    //             </p>
    //           </div>
    //         </div>
    //         <div
    //           className="icon-bx-wraper m-b30 left wow fadeInUp"
    //           data-wow-delay="0.8s"
    //         >
    //           <div className="icon-md">
    //             <a href="#" className="icon-cell text-white">
    //               <i className="flaticon-settings"></i>
    //             </a>
    //           </div>
    //           <div className="icon-content">
    //             <h4 className="dlab-tilte">
    //               Turning Career Breaks into Breakthroughs for Women:
    //             </h4>
    //             <p className="text-white">
    //               We prioritize hiring and providing a supportive platform for
    //               women and encouraging those who have taken a career break to
    //               restart and thrive in their professional journey.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div  style={{position:"relative"}}>
        <div
        className="section-full box-about-list Am_a_Zing bg-white "
        style={{
            backgroundImage: "url(/images/element-4.png)",
            // backgroundImage: "url(/images/elementbg/am-a-zing-element.png)",
            backgroundRepeat: "no-repeat",
            // height:"3350px"
            height:"2500px"
        
        }}
        >
          <div className="row spno"
          //  style={{ border:"1px solid blue",  }}
          >
              <div
              className="col-lg-6 col-md-12 wow fadeInUp image"
              data-wow-delay="0.2s"
              style={{ 
                  // border:"1px solid red", 
              position:"relative",
              }}
              >
              
                  <img
                  alt=""
                  className="img-cover img-inner"
                //   src="/images/Home-Page/amazing/am-a-zing-img-1.jpg"
                src="/images/Home-Page/am-a-zingprogram-1.jpg"
                  
                  style={{
                      width:"300px",
                      height:"800px",
                      position:"sticky",
                      top:"70px",
                  left:"0",
                  zIndex:"1000",
                  
                  }}
                  />
                  <img
                  alt=""
                  className="img-cover img-inner"
                //   src="/images/Home-Page/amazing/am-a-zing-img-2.jpg"
                src="/images/Home-Page/am-a-zingprogram-2.jpg"
                  style={{
                      width:"300px",
                      height:"800px",
                      position:"sticky",
                      top:"70px",
                  left:"0",
                  zIndex:"1000",
                  marginTop:"50px"
                  }}
                  />
                  <img
                  alt=""
                  className="img-cover img-inner"
                //   src="/images/Home-Page/amazing/image.jpg"
                src="/images/Home-Page/am-a-zingprogram-3.jpg"
                 
                  style={{
                      width:"300px",
                      height:"800px",
                      position:"sticky",
                      top:"70px",
                  left:"0",
                  zIndex:"1000",
                  marginTop:"50px"
                  }}
                  />

                  {/* <img
                  alt=""
                  className="img-cover img-inner"
                  src="/images/Home-Page/am-a-zingprogram.jpg"
                  style={{
                      width:"300px",
                      height:"800px",
                      position:"sticky",
                      top:"100px",
                  left:"0",
                  zIndex:"1000",
                  marginTop:"50px"
                  }}
              
                  /> */}

                  
          
              </div>
              <div className="col-lg-6 col-md-12 content" style={{position:"relative"}}>
              <div className="Am-a-zing-content max-w700 m-auto p-tb50 p-lr20" style={{position:"sticky",
                  top:"100px"
              }}>
                  <div className="our-story">
                  <h2 className="title text-primary">
                      <Link href="/am-a-zing">
                      <span className="p-r20">
                          <img
                          alt=""
                          src="/images/Home-Page/am-text-with-two-colors.png"
                          width="320"
                          height="100"
                          />
                      </span>
                      </Link>
                  </h2>
                  <h4 className="title" style={{ color: "black" , fontWeight:"600"}}>Empowering women to lead the future</h4>
                  <p style={{ color: "#282222" }}>
                      At Zing Studio, we strive to create opportunities to uplift
                      women, enabling them to realize their potential and take control
                      of the decisions that shape their lives. We do this through
                      leadership capacity building, digital literacy, skills
                      development and employment, ensuring equal access to
                      opportunities for women to thrive and succeed.
                  </p>
                  </div>
                  <div
                  className="icon-bx-wraper m-b30 left wow fadeInUp"
                  data-wow-delay="0.6s"
                  >
                  <div className="icon-md">
                      <a href="#" className="icon-cell text-white">
                      <i className="flaticon-factory"></i>
                      </a>
                  </div>
                  <div className="icon-content">
                      <h4 className="dlab-tilte">
                      10% discounted cost for Women Entrepreneurs:
                      </h4>
                      <p className="text-white">
                      We believe in supporting women entrepreneurs on their journey
                      to success, that’s why we offer a 10% discount on our services
                      to help them grow their businesses with ease and confidence.
                      </p>
                  </div>
                  </div>
                  <div
                  className="icon-bx-wraper m-b30 left wow fadeInUp"
                  data-wow-delay="0.8s"
                  >
                  <div className="icon-md">
                      <a href="#" className="icon-cell text-white">
                      <i className="flaticon-settings"></i>
                      </a>
                  </div>
                  <div className="icon-content">
                      <h4 className="dlab-tilte">
                      Turning Career Breaks into Breakthroughs for Women:
                      </h4>
                      <p className="text-white">
                      We prioritize hiring and providing a supportive platform for
                      women and encouraging those who have taken a career break to
                      restart and thrive in their professional journey.
                      </p>
                  </div>
                  </div>
              </div>
              </div>
          </div>
        </div>
    </div>
  );
}
