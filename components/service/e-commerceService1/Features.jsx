import React from "react";


const Features = ({features}) => {
  return (
        <div className="bg-white">
    
        <div className="dz-ship-industry-zone position-relative  BrandBuzzBanner container " >
          {/* <div className="dzpattern position-absolute">
            <Image
              alt="#"
              src="/images/pattern/pt13.jpg"
              width="100"
              height="160"
            />
          </div> */}
  
     
           <div className="section-head container text-left mb-3">
              <div className="row">
                  <div className="col-12 m-auto">
                  <h4>{features.subTitle}
                  </h4>
                  <h2 className="title " >{features.title}
                  </h2>
                  <p>{features.description}
                  </p>
  
                  </div>
              </div>
            </div>
            <div className="section-full bg-gray content-inner pb-0 pt-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 m-auto">
               
                  
                  <div className="section-content box-sort-in p-b0 button-example">
                    <div className="row">
                    {features?.feature?.map((item)=>(
                          <div className="col-lg-6 col-md-6 col-sm-12 m-b30">
                          <div className="icon-bx-wraper left">
                            <div className="icon-lg text-primary radius">
                              {/* <a href="#" className="icon-cell text-red"> */}
                                {/* <i className="ti-video-clapper" /> */}
                                <img src={item.src} alt="colored-icon" />
                              {/* </a> */}
                            </div>
                            <div className="icon-content">
                              <h5 className="dlab-tilte text-capitalize fw-bold">
                              {item.title}
                              </h5>
                              <p>
                              {item.caption}
                              </p>
                            </div>
                          </div>
                        </div>
                    ))}
                      
                   
                    
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </div>
        
      </div>
  );
};

export default Features;
