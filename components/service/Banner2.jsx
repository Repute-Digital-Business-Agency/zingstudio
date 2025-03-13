import React from "react";
import Link from "next/link";
export default function Banner2() {
  return (
    <div
      className="dlab-bnr-inr overlay-black-middle bg-pt"
      style={{ backgroundImage: "url(/images/bg-header.jpg)" }}
    >
      <div className="container">
        {/* <div className="row"> */}
          <div className="dlab-bnr-inr-entry ">
            <h1 className="text-white">Services</h1>
            {/* Breadcrumb row */}
            {/* <div className="breadcrumb-row"> */}
              {/* <ul className="list-inline">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>Services</li>
              </ul> */}
            {/* </div> */}
            {/* Breadcrumb row END */}
        
          
            {/* <img className="d-none d-lg-block" src="/images/services/banner-textgraphy.png" width={300} alt="" /> */}
          </div>
        </div>
     
      {/* </div> */}
    </div>
  );
}
