import React from "react";
import Image from "next/image";
export default function WhyConsultUs() {
  return (
    <div className="section-full content-inner bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-b30">
            
            <h2 className="text-black font-weight-600 m-b15">Why Consult with Us
            </h2>
            <p>
            At Zing Studio, we offer strategic consulting services to help businesses navigate the complexities of branding, digital marketing, and web design. The following insights into our practices will provide a deeper understanding of why Zing Studio is the ideal partner for your consulting needs:

            </p>
            <div className="row">
              <div className="col-lg-12">
                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-md">
                    <a href="#" className="icon-cell text-primary">
                    <img src="/images/Experts-Hub/client-centric-approach.png" alt="client-centric-approach" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte">Client-Centric Approach:</h5>
                    <p>
                    We place your business objectives at the heart of every decision, ensuring our solutions are aligned with your unique goals and challenges.

                    </p>
                  </div>
                </div>
                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-md">
                    <a href="#" className="icon-cell text-primary">
                     <img src="/images/Experts-Hub/innovative-thinking.png" alt="innovative-thinking" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte">Innovative Thinking: </h5>
                    <p>
                    Our team continuously explores new ideas and approaches, leveraging the latest trends and technologies to deliver forward-thinking solutions.

                    </p>
                  </div>
                </div>
                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-md">
                    <a href="#" className="icon-cell text-primary">
                    <img src="/images/Experts-Hub/data-driven-decisions.png" alt="data-driven-decisions" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte">Data-Driven Decisions:</h5>
                    <p>
                    We rely on detailed analytics and data insights to inform our strategies, ensuring every recommendation is based on concrete, measurable results.
                    </p>
                  </div>
                 
                </div>

                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-md">
                    <a href="#" className="icon-cell text-primary">
                    <img src="/images/Experts-Hub/collaboration-transparency.png" alt="collaboration-transparency" />
                    </a>
                  </div>
                    <div className="icon-content">
                        <h5 className="dlab-tilte">Collaboration and Transparency: </h5>
                        <p>
                        We maintain open lines of communication, involving you in every step of the process to ensure our strategies reflect your vision.

                        </p>
                    </div>
                </div>

                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-md">
                    <a href="#" className="icon-cell text-primary">
                    <img src="/images/Experts-Hub/sustained-results.png" alt="sustained-results" />
                    </a>
                  </div>
                    <div className="icon-content">
                        <h5 className="dlab-tilte">Sustained Results:  </h5>
                        <p>
                        We focus not just on immediate outcomes but also on long-term success, continually refining our approach to adapt to evolving market conditions.

                        </p>
                    </div>
                </div>

                <div>
                    <p>Choose Zing Studio for a process-driven, results-oriented consulting experience that is focused on your business’s success.
                    </p>
                </div>

              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12 m-b30">
                <Image
                  alt=""
                  src="/images/Experts-Hub/img-1.jpg"
                  width="1000"
                  height="674"
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
          </div>
        </div>
      </div>
    </div>
  );
}
