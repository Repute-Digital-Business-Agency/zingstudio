import React from "react";
import Image from "next/image";
export default function WhyConsultUs() {
  return (
    <div className="section-full content-inner bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-b30">
            
            <h2 className="text-black font-weight-600 m-b15 pt-lg-5">Why Consult with Us
            </h2>
            <p>
            At Zing Studio, we offer strategic consulting services to help businesses navigate the complexities of branding, digital marketing, and web design. The following insights into our practices will provide a deeper understanding of why Zing Studio is the ideal partner for your consulting needs:

            </p>
           
          </div>
          {/* <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12 m-b30">
                <Image
                  alt=""
                  src="/images/Experts-Hub/img-1.jpg"
                  width="450"
                  height="400"
                />
              </div>
               <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <Image
                  alt=""
                  src="/images/Experts-Hub/img-2.jpg"
                  width="500"
                  height="357"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <Image
                  alt=""
                  src="/images/Experts-Hub/img-3.jpg"
                  width="500"
                  height="357"
                />
              </div>
              <div className="col-lg-12 m-b30">
                <Image
                  alt=""
                  src="/images/Experts-Hub/img-4.jpg"
                  width="700"
                  height="479"
                />
              </div> 
            </div>
          </div> */}
        </div>
        <div className="row">
              <div className="col-lg-6">
                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-lg">
                    {/* <a href="#" className="icon-cell text-primary"> */}
                    <img src="/images/brand-buzz/Colored-icons/colored-icon-01.png" alt="client-centric-approach" />
                    {/* </a> */}
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte mb-2 mb-sm-1">Client-Centric Approach:</h5>
                    <p>
                    We place your business objectives at the heart of every decision, ensuring our solutions are aligned with your unique goals and challenges.
                    </p>
                  </div>
                </div>
              </div>  
              <div className="col-lg-6">
                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-lg">
                    {/* <a href="#" className="icon-cell text-primary"> */}
                     <img src="/images/brand-buzz/Colored-icons/colored-icon-02.png" alt="innovative-thinking" />
                    {/* </a> */}
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte mb-2 mb-sm-1">Innovative Thinking: </h5>
                    <p>
                    Our team continuously explores new ideas and approaches, leveraging the latest trends and technologies to deliver forward-thinking solutions.

                    </p>
                  </div>
                </div>
              </div>  
              <div className="col-lg-6">
                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-lg">
                    {/* <a href="#" className="icon-cell text-primary"> */}
                    <img src="/images/brand-buzz/Colored-icons/colored-icon-03.png" alt="data-driven-decisions" />
                    {/* </a> */}
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte mb-2 mb-sm-1">Data-Driven Decisions:</h5>
                    <p>
                    We rely on detailed analytics and data insights to inform our strategies, ensuring every recommendation is based on concrete, measurable results.
                    </p>
                  </div>
                 
                </div>
              </div>
              <div className="col-lg-6">
                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-lg">
                    {/* <a href="#" className="icon-cell text-primary"> */}
                    <img src="/images/brand-buzz/Colored-icons/colored-icon-04.png" alt="collaboration-transparency" />
                    {/* </a> */}
                  </div>
                    <div className="icon-content">
                        <h5 className="dlab-tilte mb-2 mb-sm-1">Collaboration and Transparency: </h5>
                        <p>
                        We maintain open lines of communication, involving you in every step of the process to ensure our strategies reflect your vision.

                        </p>
                    </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-lg">
                    {/* <a href="#" className="icon-cell text-primary"> */}
                    <img src="/images/brand-buzz/Colored-icons/colored-icon-06.png" alt="sustained-results" />
                    {/* </a> */}
                  </div>
                    <div className="icon-content">
                        <h5 className="dlab-tilte mb-2 mb-sm-1">Sustained Results:  </h5>
                        <p>
                        We focus not just on immediate outcomes but also on long-term success, continually refining our approach to adapt to evolving market conditions.

                        </p>
                    </div>
                </div>
              </div>
                <div>
                    <p>Choose Zing Studio for a process-driven, results-oriented consulting experience that prioritizes your business’s success. Our expert team combines strategic insights, innovative solutions, and data-driven methodologies to enhance brand growth, optimize performance, and deliver measurable impact. From crafting compelling digital strategies to streamlining operations, we ensure every step is aligned with your goals. With a commitment to quality, creativity, and efficiency, we help brands stay ahead in a competitive landscape. Partner with us for tailored solutions that drive long-term success.
                    </p>
                </div>

              
            </div>
      </div>
    </div>
  );
}
