"use client"
import React, { useState } from "react";


const CareerForm = () => {
  const [role, setRole] = useState(" ");
  const [lookingFor, setLookingFor] = useState("Expertise");

  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setRole(selectedRole);
    setLookingFor(selectedRole === "Boss Lady" ? "Expertise" : "Job Opportunity");
  };
  return (
    <div className="newsletter-container">
      <div className="newsletter-box mx-auto p-4 ">
        
        <div className="container">
        {/* <h6 className="text-uppercase text-primary">Subscribe to Newsletter</h6> */}
       
      <div className="row justify-content-between">
        {/* Form Section */}
        <div className="col-lg-6 col-md-12">
          <div className=" border rounded text-white">
         
           


            <form 
              onSubmit={(e) => e.preventDefault()}
              className="inquiry-form wow box-shadow  fadeInUp p-0" style={{backgroundColor:"transparent", boxShadow:"none"}}
              data-wow-delay="0.2s"
            >
              <h2 className="fw-bold pt-4">  Lorem ipsum dolor sit amet  </h2>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dicta dolorem pariatur ullam 
              </p>
              <div className="row">
                
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-user text-white" />
                      </span>
                      <input type="text" className="form-control" id="name" required placeholder="Name" />
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
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-email text-white" />
                      </span>
                      <input type="email" className="form-control" id="email" required placeholder="Email ID" />
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
            </form>


          </div>
        </div>
        {/* Image Section */}
        <div className="col-lg-4 col-md-12 text-center">
          <img src="/images/header.png" alt="Newsletter" className="img-fluid rounded" style={{position:"relative", bottom:"-58px"}}/>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default CareerForm;

