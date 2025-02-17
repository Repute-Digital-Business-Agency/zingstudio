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
                  <h2>{head}</h2>
                </div>
                {/* Pricing table-1 Columns 3 with gap */}
                <div className="section-content box-sort-in button-example">
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
                                 <div className="pricingtable-title service-titlebg"  style={{padding:"0px"}} >
                                   <h4 className="service-price-cost">{data.title}</h4>
                                 </div>
                                 <ul className="pricingtable-features " >
                                  <li> <i className="fas fa-check" style={{fontSize:"18px", color:"#036042"}}/> </li>
                                
                                     {data?.list?.map((item)=>(
                                          <li style={{fontSize:"16px"}}>
                                         {item}
                                        </li>
                                     ))}
                                     {length === 4 && <p >{data?.description}</p>} 
                                     
                                 </ul>
                                 
                                 <div className="pricingtable-footer ">
                                   <a href="/contact" className="site-button m-r10 m-b10 btnhover20 btn-danger">
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