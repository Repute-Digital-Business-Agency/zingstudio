import React from "react";

export default function ZingAcademyFaq() {
  return (
    <div className="section-full bg-white content-inner pb-5 pt-4">
      <div className="container">
        <div className="section-head text-black text-left">
          <h3>FAQ</h3>
        </div>
        <div className="row m-b30">
          <div className="col-lg-12 col-sm-12">
            <div className="dlab-accordion faq-2 box-sort-in" id="accordion2">
              <div className="panel px-2" style={{background:"#f4f2f2"}}>
                <div className="acod-head ">
                  <h6 className="acod-title">
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq6"
                      className="collapsed"
                      aria-expanded="true"
                    >
                      1. Who can enroll in Zing Academy’s digital marketing courses?

                    </a>
                  </h6>
                </div>
                <div
                  id="faq6"
                  className="acod-body collapse"
                  data-bs-parent="#accordion2"
                >
                  <div className="acod-content">
                  Our courses are designed for beginners, professionals, entrepreneurs, and anyone looking to enhance their digital marketing skills. No prior experience is required.

                  </div>
                </div>
              </div>
              <div className="panel px-2" >
                <div className="acod-head">
                  <h6 className="acod-title">
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq7"
                      className="collapsed"
                      aria-expanded="true"
                    >
                      2. Are the courses online or in-person?
                    </a>
                  </h6>
                </div>
                <div
                  id="faq7"
                  className="acod-body collapse"
                  data-bs-parent="#accordion2"
                >
                  <div className="acod-content">
                  We offer both online and in-person training options, allowing you to choose the format that best fits your schedule and learning preferences.

                  </div>
                </div>
              </div>
              <div className="panel px-2" style={{background:"#f4f2f2"}}>
                <div className="acod-head">
                  <h6 className="acod-title">
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq8"
                      className="collapsed"
                      aria-expanded="true"
                    >
                      3. Will I get hands-on experience?

                    </a>
                  </h6>
                </div>
                <div
                  id="faq8"
                  className="acod-body collapse"
                  data-bs-parent="#accordion2"
                >
                  <div className="acod-content">
                  Yes! Our courses include live projects, case studies, and practical exercises to ensure real-world application of the skills you learn.

                  </div>
                </div>
              </div>
              <div className="panel  px-2" >
                <div className="acod-head">
                  <h6 className="acod-title">
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq9"
                      className="collapsed"
                      aria-expanded="true"
                    >
                      4. Do I receive a certificate after completing the course?
                    </a>
                  </h6>
                </div>
                <div
                  id="faq9"
                  className="acod-body collapse"
                  data-bs-parent="#accordion2"
                >
                  <div className="acod-content">
                  Yes, upon successful completion, you will receive an industry-recognized certificate from Zing Academy.

                  </div>
                </div>
              </div>
              <div className="panel px-2" style={{background:"#f4f2f2"}}>
                <div className="acod-head">
                  <h6 className="acod-title">
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq10"
                      className="collapsed"
                      aria-expanded="true"
                    >
                      5.  Who are the trainers?

                    </a>
                  </h6>
                </div>
                <div
                  id="faq10"
                  className="acod-body collapse"
                  data-bs-parent="#accordion2"
                >
                  <div className="acod-content">
                  Our courses are led by experienced industry professionals and celebrity trainers with extensive expertise in digital marketing.

                  </div>
                </div>
              </div>
              <div className="panel px-2" >
                <div className="acod-head">
                  <h6 className="acod-title">
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq11"
                      className="collapsed"
                      aria-expanded="true"
                    >
                      6.  What career opportunities can I pursue after this course?


                    </a>
                  </h6>
                </div>
                <div
                  id="faq11"
                  className="acod-body collapse"
                  data-bs-parent="#accordion2"
                >
                  <div className="acod-content">
                  After completing the course, you can explore roles such as digital marketer, social media strategist, SEO specialist, content marketer, and more.


                  </div>
                </div>
              </div>
              <div className="panel px-2" style={{background:"#f4f2f2"}}>
                <div className="acod-head">
                  <h6 className="acod-title">
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq12"
                      className="collapsed"
                      aria-expanded="true"
                    >
                      7.  How can I enroll?


                    </a>
                  </h6>
                </div>
                <div
                  id="faq12"
                  className="acod-body collapse"
                  data-bs-parent="#accordion2"
                >
                  <div className="acod-content">
                  You can enroll by visiting our website, filling out the registration form, and selecting your preferred course package. If you need assistance, our team is happy to guide you.


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Faq Info END */}
      </div>
    </div>
  );
}
