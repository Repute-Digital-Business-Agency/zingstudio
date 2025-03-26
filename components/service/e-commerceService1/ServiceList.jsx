import Link from 'next/link';
import React from 'react'

const ServiceList = ({data,head,WebDesignfeatures}) => {
    console.log(data);
    const length = data.length
    console.log(length);
    
    
  return (
    <>
   
    <div className="section-full bg-white content-inner pr-service-list relative ecom" id='pricing'>
      <div className="moveAnimation" style={{ position: "absolute", bottom: "0px", left: "100px", animation: "moveImage4 5s linear infinite", 
        // border:"1px solid red"
       }}>
        <img
          src="/images/Academy/lets-connect/animation.png"
          // src="/images/Academy/lets-connect/lets-connect-img.png"
          // style={{ width: "40%" }}
        />
      </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="sort-title clearfix text-center">
                  <h2>{head}</h2>
                </div>
                {/* Pricing table-1 Columns 3 with gap */}
                <div className="section-content box-sort-in button-example">
                  <div className="pricingtable-row ">
                    <div className="row justify-content-center">
                    
                        {data?.map((data,index)=>(
                             <div className={`wow fadeInUp col-sm-12 ${length === 2 ? "col-md-6 col-lg-6 col-xl-5 " : "col-md-4 col-lg-4"} ${length === 4 ? "col-md-6 col-lg-6 " : "col-md-4 col-lg-4 "} mb-4 d-flex `} data-wow-delay={data.delay}>
                             <div className="pricingtable-wrapper d-flex flex-column"  >
                               <div className={`pricingtable-inner flex-grow-1`}>
                                <div className="pricing-card h-100 d-flex flex-column ">
                                  <div className="card-body flex-grow-1">
                                    <h2 className="card-title">{data.title}</h2>
                                    <p className="discount-text mb-3 mt-2">
                                      <span>{data.save} </span><span className="original-price ">₹  {data.strike}
                                      </span>
                                    </p>
                                    <h1 className="price mb-0">₹ {data.price} <span className="text-muted">/mo</span></h1>
                                    <p className="small text-black">
                                    {data.condition}
                                    </p>
                                   
                                    <a href="/contact"
                                        className="site-button btnhover20 w-100 "
                                    >
                                        <span>Buy Now</span>
                                    </a>
                           
                                    {/* <button className="btn btn-dark w-100 mt-3">Buy Now</button> */}
                                    <ul className="feature-list mt-3">
                                      {data.list.map((feature, index) => (
                                        <li key={index}>
                                          <i className={feature.icon} /> {feature.text}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                               </div>
                             </div>
                           </div>
                        ))}
                     
                     
                    </div>
                  </div>
                </div>


                {/* --------pricing table end----------- */}


                
                  


              </div>
            </div>
          </div>
          {/* Pricing table-1 Columns 3 with gap END */}
        </div>



</>
  )
}

export default ServiceList