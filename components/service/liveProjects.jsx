import React from "react";
import Image from "next/image";
import Link from "next/link";

{/* 

const projectContent = {
  title:"Live Projects",
  description:" Gain hands-on experience with real-world digital marketing projects and enhance your skills in practical scenarios."
}

const projects = [
  {
    title: "<span> Digital </span> <br /> Marketing",
    description:
      "Step into the world of digital marketing and learn how to build brands that stand out online! From viral social media strategies and killer SEO hacks to content that clicks and data that delivers, this course has it all! Perfect for beginners and future marketing pros—learn, create, and crush it online.",
    image: "/images/zing-digital-marketing-mastery/Live-Projects/digital-marketing.jpg",
    link: "/digital-marketing-service",
    bgColor: "bg-primary",
    textColor: "text-white",
  },
  {
    title: "<span> Saas </span> <br />  Platform",
    description:
      "We offer to jump start your e-commerce brand online with some of the leading Saas platforms that offer your quicker turn around, robust and feature rich e-commerce website.",
    image: "/images/zing-digital-marketing-mastery/Live-Projects/saas-platform.jpg",
    link: "/web-design-service",
    bgColor: "#e21100",
    textColor: "text-white",
  },
  {
    title: "<span>  Open-source  </span> <br /> Development",
    description:
      "Open-source Development Open Source commerce development is the order of the way in Ecommerce development. The open source platforms offer a host os flexible and beneficial features...",
    image: "/images/zing-digital-marketing-mastery/Live-Projects/open-source-development.jpg",
    link: "/web-design-service",
    bgColor: "#e21100",
    textColor: "text-white",
  },
];


*/}

export default function LiveProjects({projectContent,projects}) {
  return (
    <div className="content-block pt-5 bg-white">
      <div className="section-full">
        <div className="section-head style2 text-center mb-5">
          <h2 className="title">{projectContent?.title}</h2>
          <p className="mb-0">
          {projectContent?.description}
          </p>
        </div>
        <div className="row spno about-industry">
          {projects?.map((project, index) => (
            <React.Fragment key={index}>
              <div className="col-lg-4 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="dlab-post-media dlab-img-effect zoom" style={{ height: "100%" }}>
                  <Image
                    alt=""
                    className="img-cover"
                    src={project.image}
                    width="900"
                    height="550"
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className={`col-lg-4 ${project.bgColor} wow fadeIn`} data-wow-duration="2s" data-wow-delay="0.4s" style={{background:project.bgColor}}>
                <div className="service-box style2">
                  <div>
                    <h2 className={`title ${project.textColor}`} dangerouslySetInnerHTML={{__html:project.title}}>
                      
                    </h2>
                    <p className={` ${project.textColor}`}>{project.description}</p>
                    <Link href={project.link} className="site-button outline white outline-2 btnhover11">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
