"use client"
import React, { useState } from "react";


const Amazingform = () => {
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
              <h2 className="fw-bold pt-4">AM-A-ZING – Made Just for Women! </h2>
              <p>
              Boss lady or making a comeback? We’ve got an exclusive offer designed to power up your next big move!
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="form-group text-white">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-check-box text-white" />
                      </span>
                      <select id="role" className="form-select form-select-lg type-3 ml-2" value={role} onChange={handleRoleChange} placeholder="Iam a" style={{borderTop:"none", borderLeft:"none", borderRight:"none"}}>
                        <option value="Boss Lady">Boss Lady</option>
                        <option value="Career Comeback">Career Comeback</option>
                      </select>
                    </div>
                  </div>
                </div>
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
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-check-box text-white" />
                      </span>
                      <input type="text" className="form-control" id="lookingFor" value={`Looking For - ${lookingFor}`} readOnly placeholder="Looking for" disabled style={{backgroundColor:"transparent"}}/>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="ti-comment text-white" />
                      </span>
                      <textarea className="form-control" id="remark" rows="3" placeholder="Remark"></textarea>
                    </div>
                  </div>
                </div>
                {role === "Career Comeback" && (
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="ti-upload text-white" />
                        </span>
                        <input type="file" className="form-control" id="resume" />
                      </div>
                    </div>
                  </div>
                )}
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
          
          <img src="/images/Am-a-Zing/am-a-zing-image.png" alt="Newsletter" className="img-fluid rounded" style={{position:"relative", bottom:"-58px"}}/>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Amazingform;

