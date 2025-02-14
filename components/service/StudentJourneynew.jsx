import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function StudentJourneynew() {
  const services10 =   [
    {
      id: 137,
      imgSrc: "/images/icon/car/icon-1.png",
      title: "Orientation & Icebreaker <br/> (Day 1-2)",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.3s",
      list:[
        "Welcome session with an introduction to Zing Studio’s mission & goals",
        "Fun icebreaker activities & networking games",
        "Overview of the course structure, expectations, and outcomes",
        "Access to LMS (Learning Management System) and student portal"
      ]
    },
    {
      id: 138,
      imgSrc: "/images/icon/car/icon-2.png",
      title: "Module-Based Practical Learning <br/> (Week 1 - Ongoing)",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.6s",
      list:[
        "Engaging video lessons, live masterclasses & hands-on workshops",
        "Real-world applications & industry insights",
        "Interactive Q&A sessions after every module",
       
      ]
    },
    {
      id: 139,
      imgSrc: "/images/icon/car/icon-3.png",
      title: "Doubt Clearing & Weekly Q&A <br/> (Every Weekend)",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.9s",
      list:[
        "Dedicated live doubt-clearing sessions with mentors",
        "Discussion forums & peer-to-peer learning groups", 
      ]
    },
    {
      id: 140,
      imgSrc: "/images/icon/car/icon-4.png",
      title: "Assignments & Case Studies <br/>(Mid-Course)",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.9s",
      list:[
        "Individual & group assignments with real-world scenarios",
        "Case studies on successful digital campaigns & business strategies", 
        "Feedback & improvement sessions"
      ]
    },
    // {
    //   id: 141,
    //   imgSrc: "/images/icon/car/icon-5.png",
    //   title: "Engine Diagnostics",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
    //   animation: "bounceInUp",
    //   delay: "0.6s",
    // },
    {
      id: 142,
      imgSrc: "/images/icon/car/icon-6.png",
      title: "Group Projects & Presentations <br/> (Final Weeks)",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.3s",
      list:[
        "Collaborative projects to apply learning",
        "Live presentations with expert feedback", 
        "Team-based problem-solving & innovation challenges"
      ]
    }, 
    // ------------
    {
      id: 143,
      imgSrc: "/images/icon/car/icon-6.png",
      title: "Guest Lectures & Industry Talks",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.3s",
      list:[
        "Sessions with industry leaders, influencers & successful entrepreneurs",
        "AMA (Ask Me Anything) sessions for deep insights", 
       
      ]
    },
    {
      id: 144,
      imgSrc: "/images/icon/car/icon-6.png",
      title: "Internship & Real-World Application",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.3s",
      list:[
        "Live internship opportunities for top students",
        "Shadowing real businesses & executing digital strategies", 
       
      ]
    },
    {
      id: 144,
      imgSrc: "/images/icon/car/icon-6.png",
      title: "Placement Assistance & Graduation",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      animation: "bounceInUp",
      delay: "0.3s",
      list:[
        "Resume building & mock interviews",
        "Placement drives & networking events", 
        "Certification ceremony & alumni community access"
      ]
    },
  ]
  return (
    <>
      
      <div className="bg-white">
        
        <div className="section-full bg-white content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
              <div className="section-head style2 text-center ">
                    <h2 className="title">Student Journey at Zing Studio</h2>
                    <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting
          industry has been the industry's standard dummy text ever since the
          been when an unknown printer.
                    </p>
                </div>
                <div className="section-content box-sort-in button-example p-b0">
                  <div className="row">
                    {services10.map((item)=>(
                       <div className="col-md-12 col-lg-12  pb-2 wow fadeInUp" >
                       <div className="blog-post blog-md clearfix border-1 br-col-b1 radius-sm">
                        
                         <div className="dlab-post-info">
                           
                           <div className="dlab-post-title">
                             <h4 className="post-title pt-3">
                               <a href="#"  dangerouslySetInnerHTML={{ __html: item.title }}></a>
                             </h4>
                           </div>
                           <div className="dlab-post-text">

               

                                <ul className="list-hand-point flex-grow-1">
                                  {item?.list?.map((item, index) => (
                                    <li className="text-left" key={index}>{item}</li>
                                  ))}
                                </ul>

                                {/* Button (if needed, placed at bottom) */}
                                {/* <Link href={`/services-details/${service.title}`} className="site-button btnhover19 mt-auto">
                                  Site Button
                                </Link> */}

                           </div>
                           
                         </div>
                       </div>
                     </div>
                    ))}
                   
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Images box with content demo 1 END */}
        </div>
        
       
      </div>
    </>
  );
}
