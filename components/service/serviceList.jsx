import React from 'react'

const ServiceList = ({data,head}) => {
    console.log(data);
    const length = data.length
    console.log(length);
    
    
  return (
    <div className="section-full bg-white content-inner pr-service-list">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="sort-title clearfix text-center">
                  <h4>{head}</h4>
                </div>
                {/* Pricing table-1 Columns 3 with gap */}
                <div className="section-content box-sort-in button-example p-tb50">
                  <div className="pricingtable-row">
                    <div className="row">
                    
                        {data?.map((data,index)=>(
                             <div className={`wow fadeInUp col-sm-12 ${length === 2 ? "col-md-6 col-lg-6" : "col-md-4 col-lg-4"} ${length === 4 ? "col-md-6 col-lg-6" : "col-md-4 col-lg-4"} mb-4`} data-wow-delay={data.delay}>
                             <div className="pricingtable-wrapper">
                               <div className={`pricingtable-inner `}>
                                 <div className="pricingtable-price" style={{padding:"10px"}} >
                                 <span className="pricingtable-type">Starting @ </span>
                                   <span className="pricingtable-bx">₹{data.price}</span>
                                   
                                 </div>
                                 <div className="pricingtable-title bg-primary "  style={{padding:"0px"}} >
                                   <h2 style={{fontSize:"22px"}}>{data.title}</h2>
                                 </div>
                                 <ul className="pricingtable-features " >
                                     {data?.list?.map((item)=>(
                                          <li style={{fontSize:"16px"}}>
                                          <i className="fas fa-check" style={{fontSize:"12px", color:"#1a43bf"}}/> {item}
                                        </li>
                                     ))}
                                     {length === 4 && <p >{data?.description}</p>} 
                                     
                                 </ul>
                                 
                                 <div className="pricingtable-footer ">
                                   <a href="/contact" className="site-button outline outline-2 btnhover11">
                                     Buy Now
                                   </a>
                                 </div>
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
          {/* Pricing table-1 Columns 3 with gap END */}
        </div>
  )
}

export default ServiceList