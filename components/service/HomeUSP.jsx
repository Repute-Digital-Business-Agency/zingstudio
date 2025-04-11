// import React from "react";
// import Link from "next/link";
// export default function Cta() {
//   return (
//     <>


// <div
//       className="section-full call-action  wow fadeIn ourusp"
//       data-wow-duration="2s"
//       data-wow-delay="0.3s"
//     >
//       <div className="container-fluid">

        
//         <div className="row">
//           <div className="col-12 text-white" style={{marginBottom:"-5px"}}>
            

//             <marquee behavior="scroll" direction="left" scrollamount="10">
//             <span className="title text-uppercase" style={{margin:"0 50px 0 0"}}>Cost Effective Solution</span>
//             <span className="title text-uppercase" style={{margin:"0 50px"}}>Cutting Edge Technology</span>
//             <span className="title text-uppercase" style={{margin:"0 50px"}}>Result Driven Service </span>
            
//             </marquee>

     
//           </div>
         
//         </div>
//       </div>

      
//     </div>
//     </>
  
//   );
// }


"use-client"

import React from "react";
import Link from "next/link";

export default function Cta() {
  return (
    <div
      className="section-full call-action wow fadeIn ourusp"
      data-wow-duration="2s"
      data-wow-delay="0.3s"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-white overflow-hidden" style={{ marginBottom: "-5px" }}>
            <div className="marquee-wrapper">
              <div className="marquee-content">
                <span className="title text-uppercase text-dark">Cost Effective Solution</span>
                <span className="title text-uppercase text-dark">Cutting Edge Technology</span>
                <span className="title text-uppercase text-dark">Result Driven Service</span>
                {/* Repeat for seamless loop */}
                <span className="title text-uppercase text-dark">Cost Effective Solution</span>
                <span className="title text-uppercase text-dark">Cutting Edge Technology</span>
                <span className="title text-uppercase text-dark">Result Driven Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline styles or move to a CSS file */}
      <style>{`
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .marquee-content {
          display: flex;
          animation: scroll-left 12s linear infinite;
        }

        .marquee-content span {
          margin: 0 50px;
          white-space: nowrap;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
