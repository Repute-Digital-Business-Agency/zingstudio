"use client"
import React, { useState } from "react";


const CareerForm = () => {
  const [role, setRole] = useState("");
  const [market, setMarket] = useState("")
 
  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setRole(selectedRole);

    
  };
  return (
    <div className="newsletter-container pt-4 pb-5 m-0" id="careers">
      <div className="newsletter-box mx-auto  py-4 px-2 px-md-2">
        
        <div className="container-fluid px-0">
        <div className="col-12 col-lg-11 col-xl-8  mx-auto" >
        <div className="row justify-content-between m-0">
        {/* Form Section */}
        <div className="col-lg-7 col-md-12">
          <div className=" border rounded text-white">

          <div  className="inquiry-form wow box-shadow  fadeInUp p-0" style={{backgroundColor:"transparent", boxShadow:"none"}}>
          <h2 className="fw-bold pt-4">  Join Our Team & Shine! 
              </h2>
              <p>
              Got the skills? We’ve got the opportunities! Fill out the form and step into an exciting career with Zing Studio!
              </p>
              <style>
                
              </style>
             
          <iframe
            src="https://connect.irepute.in/file/life-at-zing/"
            width="100%"
            height="370px" scrolling="no"
            // style="border: none;"
            ></iframe>
            
          </div>
          
           


            {/* <form 
              onSubmit={(e) => e.preventDefault()}
              className="inquiry-form wow box-shadow  fadeInUp p-0" style={{backgroundColor:"transparent", boxShadow:"none"}}
              data-wow-delay="0.2s"
            >
              <h2 className="fw-bold pt-4">  Join Our Team & Shine! 
              </h2>
              <p>
              Got the skills? We’ve got the opportunities! Fill out the form and step into an exciting career with Zing Studio!
              </p>
              <div className="row">
                
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-user text-white" />
                      </span>
                      <input type="text" className="form-control" id="firstname" required placeholder="First Name" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-user text-white" />
                      </span>
                      <input type="text" className="form-control" id="lastname" required placeholder="Last Name" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-mobile text-white" />
                      </span>
                      <input type="tel" className="form-control" id="mobile" required placeholder="Mobile No." />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-email text-white" />
                      </span>
                      <input type="email" className="form-control" id="email" required placeholder="Email ID" />
                    </div>
                  </div>
                </div>
              
                <div className="col-lg-6 col-md-12">
                  <div className="form-group text-white">
                  <label htmlFor="Interested-In">Interested In ?</label>
                    <div className="input-group">
                      
                      <span className="input-group-addon">
                        <i className="ti-check-box text-white" />
                      </span>

                      <select id="role" className="form-select form-select-lg type-3 ml-2" value={role} onChange={handleRoleChange} placeholder="Interested In" style={{borderTop:"none", borderLeft:"none", borderRight:"none"}}>
                        <option value="Please Choose Option">Please Choose Option</option>
                        <option value="Web Development & Design">Web Development & Design</option>
                        <option value="Digital and Social Media Marketing">Digital and Social Media Marketing</option>
                        <option value="Marketing">Marketing</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="form-group text-white">
                  <label htmlFor="Interested-In">Where did you hear about us through ?</label>
                    <div className="input-group">
                      
                      <span className="input-group-addon">
                        <i className="ti-check-box text-white" />
                      </span>

                      <select id="market" className="form-select form-select-lg type-3 ml-2" value={market} onChange={(e)=>setMarket(e.target.value)} placeholder="Interested In" style={{borderTop:"none", borderLeft:"none", borderRight:"none"}}>
                        <option value="Please Choose Option">Please Choose Option</option>
                        <option value="Referral">Referral</option>
                        <option value="Internet Search">Internet Search</option>
                        <option value="Job Fair">Job Fair</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                        <label htmlFor="resume">Upload Resume</label>
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-upload text-white" />
                        </span>
                        <input type="file" className="form-control" id="resume" />
                      </div>
                    </div>
                  </div>
               
                <div className="col-lg-12 col-md-12 mb-4">
                  <button
                    name="submit"
                    type="submit"
                    value="Submit"
                    className="site-button btnhover20 m-t10 bg-white " 
                  >
                    <span className="text-dark">Submit</span>
                  </button>
                </div>
              </div>
            </form> */}


          </div>
        </div>
        {/* Image Section */}
        <div className="col-lg-5 col-md-12 text-center">
          <img src="/images/Am-a-Zing/am-a-zing-image.png" alt="Newsletter" className="img-fluid rounded" />
        </div>
      </div>
        </div>
        {/* <h6 className="text-uppercase text-primary">Subscribe to Newsletter</h6> */}
       
     
    </div>
      </div>
    </div>
  );
};

export default CareerForm;

