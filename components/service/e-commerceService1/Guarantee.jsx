import Link from 'next/link';
import React from 'react'

const Guarantee = ({Performance}) => {

    
    
  return (
    <>
            <div className="section-full content-inner bg-white py-0 pb-5">
                <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-11 ">
                    
                        <div className="section-content box-sort-in py-5 px-sm-3 button-example bg-gray" style={{borderRadius:"10px"}}>
                            <div className="row justify-content-start justify-content-xl-center m-0">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 px-4 px-sm-3">
                            <h6 className='text-uppercase p-1' style={{background:"#e2110026", display:"inline"}}>{Performance.head}</h6>
                            <h3 className='mt-4 fw-bold'>{Performance.description} 
                            </h3>
                            </div>
                        
                            {Performance.guarantee.map((item,index)=>(
                                <>
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12 col-sm-12 px-4 px-sm-3">
                                    <div className="icon-bx-wraper" style={{textAlign:"left"}}>
                                        <div className="icon-md text-orange m-b20">
                                            <a href="#" className="icon-cell text-orange" >
                                            {/* <i className={item.icon} style={{fontSize:"25px" , color:"#1a43bf"}}/> */}
                                            <img src={item.icon} alt={item.name} />
                                            </a>
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte mb-2 fw-bold" style={{fontSize:"15px " , fontWeight:"500"}}>
                                            {item.title}
                                            </h5>
                                            <h5  style={{fontSize:"14px" }}>
                                            {item.caption}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                </>
                            ))}
                            
                            
                            
                            
                        
                            
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div
          className="section-full content-inner-2 bg-gray wow fadeIn " 
          data-wow-duration="2s"
          data-wow-delay="0.2s"

          >
          <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center service-info">

              <p dangerouslySetInnerHTML={{__html: Performance.cta}}>
             
              </p>
           
              
              </div>
          </div>
          </div>
           </div>
    </>
  )
}

export default Guarantee