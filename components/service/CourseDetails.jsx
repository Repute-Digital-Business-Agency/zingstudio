import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function CourseDetails({CourseTitle,CourseDuration,courseModule}) {
  return (
    <>
        <div className="section-head text-center wow fadeInUp mt-5 " data-wow-delay="0.8s" 
      
        >
            <h2 className="title">{CourseTitle}</h2>
            <p className="mt-0 mb-0 pt-0" >
            Course Duration : {CourseDuration}
            </p>
            {/* <p>
              At Zing Studio, we are committed to empowering the next generation
              of digital experts through our immersive training programs. Our
              courses are meticulously designed to equip you with cutting-edge
              skills and knowledge, ensuring that you can grow and thrive in
              your career.
            </p> */}
          </div>

          <div className="container content-block">
      {/* Content Section */}
      <div className="section-full pb-4">
      {courseModule?.map((module, index) => (
        <div
          key={index}
          className="row spno about-industry zing-academy course-details bg-white  mb-5"
         
        >
          {index % 2 === 0 ? (
            <>
              <div className="col-lg-6">
                <div className="dlab-post-media dlab-img-effect zoom">
                  <Image
                    alt=""
                    className="img-cover"
                    src={module.imgSrc}
                    width={900}
                    height={200}
                  />
                </div>
              </div>
              <div className="col-lg-6 "  style={{backgroundColor: module.bgColor}}>
                <div className="service-box style2">
                  <h2 className="title">{module.title}</h2>
                  <ul className="list-check secondry">
                    {module.list.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-6 " style={{backgroundColor: module.bgColor}}>
                <div className="service-box style2">
                  <h2 className="title">{module.title}</h2>
                  <ul className="list-check secondry">
                    {module.list.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="dlab-post-media dlab-img-effect zoom">
                  <Image
                    alt=""
                    className="img-cover"
                    src={module.imgSrc}
                    width={900}
                    height={200}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
      {/* Content Section End */}
          </div>
    </>
    
  );
}
