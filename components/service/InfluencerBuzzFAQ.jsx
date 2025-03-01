import React from "react";

export default function InfluencerBuzzFAQ({faqData}) {

  {/*

  const faqData = [
    {
      id: "faq6",
      question: "1. Web design aorem apsum dolor sit amet?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      id: "faq7",
      question: "2. Graphic design aorem apsum dolor?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      id: "faq8",
      question: "3. Development aorem apsum dolor sit amet?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      id: "faq9",
      question: "4. True Responsiveness consectetuer adipiscing?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      id: "faq10",
      question: "5. Claritas est etiam processus?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
  ];

  */}


  return (
   
        <div className="section-full bg-white content-inner pb-5">
          <div className="container">
            <div className="section-head text-black text-left">
              <h3>FAQ</h3>
            </div>
            <div className="row m-b30">
              <div className="col-lg-12 col-sm-12">
                <div className="dlab-accordion faq-2 box-sort-in" id="accordion2">
                  {faqData?.map((faq, index) => (
                    <div className="panel" key={faq.id}>
                      <div className="acod-head">
                        <h6 className="acod-title">
                          <a
                           
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
                        <div className="acod-content">{faq.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
   

