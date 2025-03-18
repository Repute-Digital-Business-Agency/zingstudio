import React from "react";


const Features = () => {
  return (
   <div className="container-fluid py-5 bg-white">
     <div className="web-hosting-container container ">
        <div className="row">
            <div className="col-12 col-sm-6">
                <div className=" d-flex flex-column">
                    <div className="item-1 " style={{paddingBottom:"100px"}}>
                        <p className="mb-2 fw-bold">Lorem ipsum dolor sit </p>
                    <h2 className="hosting-titles">Our web hosting delivers.</h2>
                    <p className="hosting-description ">
                        You get speedier page-load times, tools to help grow your business, and essential security measures to build trust and help protect user data. Plus, you get peace of mind with a money-back guarantee.
                    </p>
                    </div>
                    <div className="item-2 " >
                    <div className="security-card ">
                        <img src="https://img1.wsimg.com/cdnassets/transform/77988898-896d-4b0e-a57e-a62b84b9bca7/feature-3-24-7-security" alt="Security" className="img-fluid security-img" />
                        <h3 className="hosting-title">Our security never sleeps.</h3>
                        <p className="hosting-description ">
                        Our hosting security is on the job 24/7 to monitor suspicious activity and help detect DDoS attacks.
                        </p>
                    </div>
                    </div>
                 </div>
            </div>

            <div className="col-12 col-sm-6">
            <div className=" d-flex flex-column">
               <div className="item-2">
                    <div className="security-card ">
                        <img src="https://img1.wsimg.com/cdnassets/transform/77988898-896d-4b0e-a57e-a62b84b9bca7/feature-3-24-7-security" alt="Security" className="img-fluid security-img" />
                        <h3 className="hosting-title">Our security never sleeps.</h3>
                        <p className="hosting-description">
                        Our hosting security is on the job 24/7 to monitor suspicious activity and help detect DDoS attacks.
                        </p>
                    </div>
              </div>

              <div className="item-2">
                    <div className="security-card">
                        <img src="https://img1.wsimg.com/cdnassets/transform/77988898-896d-4b0e-a57e-a62b84b9bca7/feature-3-24-7-security" alt="Security" className="img-fluid security-img" />
                        <h3 className="hosting-title">Our security never sleeps.</h3>
                        <p className="hosting-description">
                        Our hosting security is on the job 24/7 to monitor suspicious activity and help detect DDoS attacks.
                        </p>
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
