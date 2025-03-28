import React from "react";


const WebFeatures = () => {
  return (
   <div className="container-fluid py-5 bg-white">
     <div className="web-hosting-container container ">
        <div className="row relative">
            <div className="col-12 col-sm-6">
                <div className=" d-flex flex-column">
                    <div className="item-1 wow fadeInUp pb-2 p-sm-b100"
                                data-wow-delay="0.6s" >
                        <p className="mb-2 fw-bold">Lorem ipsum dolor sit </p>
                    <h2 className="hosting-titles">web design process for delivering exceptional websites:
                    </h2>
                    <p className="hosting-description ">
                        You get speedier page-load times, tools to help grow your business, and essential security measures to build trust and help protect user data. Plus, you get peace of mind with a money-back guarantee.
                    </p>
                    </div>
                    <div className="item-2 wow fadeInUp"
                                data-wow-delay="0.6s" >
                    <div className="security-card ">
                        <img src="https://img1.wsimg.com/cdnassets/transform/77988898-896d-4b0e-a57e-a62b84b9bca7/feature-3-24-7-security" alt="Security" className="img-fluid security-img wow fadeInUp"
                                data-wow-delay="0.6s" />
                        <h3 className="hosting-title wow fadeInUp"
                                data-wow-delay="0.6s">Discovery & Planning</h3>
                        <p className="hosting-description  wow fadeInUp"
                                data-wow-delay="0.6s">
                       Understanding goals, audience, and brand identity to create a tailored strategy.
                        </p>
                    </div>
                    </div>

                    <div className="item-2 wow fadeInUp"
                                data-wow-delay="0.6s" >
                    <div className="security-card ">
                        <img src="https://img1.wsimg.com/cdnassets/transform/77988898-896d-4b0e-a57e-a62b84b9bca7/feature-3-24-7-security" alt="Security" className="img-fluid security-img wow fadeInUp"
                                data-wow-delay="0.6s" />
                        <h3 className="hosting-title wow fadeInUp"
                                data-wow-delay="0.6s">Wireframing & Prototyping </h3>
                        <p className="hosting-description  wow fadeInUp"
                                data-wow-delay="0.6s">
                        Designing a visual blueprint for seamless navigation and user experience.
                        </p>
                    </div>
                    </div>

                    <div className="item-2 wow fadeInUp"
                                data-wow-delay="0.6s" >
                    <div className="security-card ">
                        <img src="https://img1.wsimg.com/cdnassets/transform/77988898-896d-4b0e-a57e-a62b84b9bca7/feature-3-24-7-security" alt="Security" className="img-fluid security-img wow fadeInUp"
                                data-wow-delay="0.6s" />
                        <h3 className="hosting-title wow fadeInUp"
                                data-wow-delay="0.6s">Design Creation</h3>
                        <p className="hosting-description  wow fadeInUp"
                                data-wow-delay="0.6s">
                        Crafting visually engaging and brand-aligned designs using the latest design principles.
                        </p>
                    </div>
                    </div>
                 </div>
            </div>

            <div className="col-12 col-sm-6">
            <div className=" d-flex flex-column">
               <div className="item-2 ">
                    <div className="security-card ">
                        <img src="https://img1.wsimg.com/cdnassets/transform/77988898-896d-4b0e-a57e-a62b84b9bca7/feature-3-24-7-security" alt="Security" className="img-fluid security-img wow fadeInUp"
                                data-wow-delay="0.6s" />
                        <h3 className="hosting-title wow fadeInUp"
                                data-wow-delay="0.6s">Development</h3>
                        <p className="hosting-description wow fadeInUp"
                                data-wow-delay="0.6s">
                        Converting designs into responsive, functional websites with clean and efficient code.
                        </p>
                    </div>
              </div>

              <div className="item-2">
                    <div className="security-card">
                        <img src="https://img1.wsimg.com/cdnassets/transform/77988898-896d-4b0e-a57e-a62b84b9bca7/feature-3-24-7-security" alt="Security" className="img-fluid security-img wow fadeInUp"
                                data-wow-delay="0.6s" />
                        <h3 className="hosting-title wow fadeInUp"
                                data-wow-delay="0.6s">Testing & Optimization</h3>
                        <p className="hosting-description wow fadeInUp"
                                data-wow-delay="0.6s">
                        Conducting thorough testing for usability, compatibility, and performance across devices.
                        </p>
                    </div>
                    </div>

                    <div className="item-2">
                    <div className="security-card">
                        <img src="https://img1.wsimg.com/cdnassets/transform/77988898-896d-4b0e-a57e-a62b84b9bca7/feature-3-24-7-security" alt="Security" className="img-fluid security-img wow fadeInUp"
                                data-wow-delay="0.6s" />
                        <h3 className="hosting-title wow fadeInUp"
                                data-wow-delay="0.6s">Launch & Maintenance</h3>
                        <p className="hosting-description wow fadeInUp"
                                data-wow-delay="0.6s">
                        Deploying the website and providing continuous support for updates and improvements.
                        </p>
                    </div>
                    </div>
            </div>
           </div>

           <div className="moveAnimation" style={{ position: "absolute", bottom: "0px", right: "0px", width:"auto", animation: "moveImage5 5s linear infinite",
                                                // border:"1px solid red"
                                        }}>
                                                <img
                                                src="/images/Academy/lets-connect/animation.png"
                                                // src="/images/Academy/lets-connect/lets-connect-img.png"
                                                // style={{ width: "40%" }}
                                                />
                                        </div>
        </div>


       
      

     
    </div>
   </div>
  );
};

export default WebFeatures;
