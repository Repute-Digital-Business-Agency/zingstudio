import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function WhatIsZing() {
  return (
    <div style={{background:"#fff"}}>
      <div className="container WhatIsZing">
        <div className="row">
            <div className="text-center">
            <h2 className="newtitle title wox">What Is Zing</h2>
            <p className="mb-0 mb-lg-4 mb-xl-0">New Age Digital Design, Development and Digital Marketing agency based in coimbatore, India. <br /> I Works across globe.</p>
            </div>
       
            <div className="col-12 col-lg-3 d-flex justify-content-center py-3" >
            <img src="/images/elementbg/10.png" style={{objectFit:"contain"}}/>
            </div>
            <div className="col-12 col-lg-9 WhatIsZing-content">
                <div >
                   

                    <h3 className="fw-bold px-3 "> I Specializes In</h3>

                    <div className="d-flex justify-content-start gap-3 flex-wrap">
                    <div className="spl-list">
                    <div >
                       
                        <img src="/images/about-us/webdesign.png" alt="webdesign" style={{width:"32px"}}/>
                       
                    </div>
                    <div className="head">Website Design</div>
                        
                    </div>
                    <div className="spl-list">
                    <div>
                       
                        <img src="/images/about-us/cms.png" alt="cms" style={{width:"45px",paddingLeft:"12px"}}/>
                       
                    </div>
                    <div className="head">CMS Websites</div>
                        
                    </div>
                    <div className="spl-list">
                    <div >
                       
                        <img src="/images/about-us/ecommerce.png" alt="ecommerce" style={{width:"32px"}}/>
                       
                    </div>
                    <div className="head">E-commerce Websites</div>
                        
                    </div>
                    <div className="spl-list">
                    <div >
                       
                       <img src="/images/about-us/dm.png" alt="dm" style={{width:"32px"}}/>
                      
                   </div>
                    <div className="head">Digital Marketing </div>
                        
                    </div>

                    <div className="spl-list">
                    <div >
                       
                        <img src="/images/about-us/creative.png" alt="" style={{width:"32px"}}/>
                       
                    </div>
                    <div className="head">Creative Design </div>
                        
                    </div>
                   
                    </div>

                   
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
