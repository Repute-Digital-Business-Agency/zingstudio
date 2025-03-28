import React from "react";

export default function FAQ({faqData}) {
   
  return (
    <div className="section-full content-inner bg-gray ecomFAQ">
      <div className="container">
        <div className="section-head text-black text-center">
          <h3>FAQ</h3>
        </div>
        <div className="row  justify-content-center">
          <div className="col-lg-8 col-sm-12">
          <div className="dlab-accordion faq-1 box-sort-in" id="accordion2">
                  {faqData?.map((faq, index) => (
                    <div className="panel px-0" key={faq.id}
                    // style={{ background: index % 2 !== 0 ? "white" : "#f4f2f2" }}
                    >
                      <div className="acod-head">
                        <h6 className="acod-title">
                          <a
                            href="#"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${faq.id}`}
                            className="collapsed"
                            aria-expanded="false"
                          >
                            {faq.question}
                          </a>
                        </h6>
                      </div>
                      <div
                        id={faq.id}
                        className="acod-body collapse"
                        data-bs-parent="#accordion2"
                      >
                        <div className="acod-content mt-0" dangerouslySetInnerHTML={{__html:faq.answer}}></div>
                      </div>
                    </div>
                  ))}
                </div>
          </div>
        </div>
        {/* Faq Info END */}
      </div>
    </div>
  );
}