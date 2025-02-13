import React from "react";
import Image from "next/image";
import { services10 } from "@/data/services";
import Link from "next/link";
export default function StudentsJourney3() {
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
  
   
      <div className="demo">
            <div className="container-fluid">
                {/* <h4>Timeline Style : Demo-6</h4> */}
                
                <div className="row">
                <div className="section-head text-black text-center">
                    <h2 className="title">Student Journey at Zing Studio</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry has been the industry's standard dummy text ever since the
                    been when an unknown printer.
                    </p>
                </div>
                    <div className="col-md-11 m-auto">
                        <div className="main-timeline6">
                            <div className="timeline">
                                <div className="timeline-content">
                                    <span className="year p-3"></span>
                                    <div className="content-inner">
                                        <span className="icon"><i className="fa fa-globe"></i></span>
                                                                <h3 className="title">Enrollment at Zing Academy
                                                </h3>
                                                
                                                <p className="description"> <b>Welcome Package: </b>
                                                Upon enrollment, students receive a personalized welcome kit, including course materials, a Zing Academy tote bag, and exclusive access to the student portal.
                                                </p>
                                                <br />
                                                <p className="description"> <b>Orientation Session: </b>
                                                A structured, interactive orientation introduces students to faculty, mentors, and peers, establishing a strong foundation for their educational journey.
                                                </p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline">
                                <div className="timeline-content">
                                    <span className="year p-3"></span>
                                    <div className="content-inner">
                                        <span className="icon"><i className="fa fa-rocket"></i></span>
                                        <h3 className="title">Preparation: Foundation and Discovery
                        </h3>
                        <p className="description"> <b>Comprehensive Onboarding: </b>
                        Students undergo an engaging onboarding process, including assessments and quizzes designed to identify their learning styles and strengths.
                        </p>
                        <br />
                        <p className="description"> <b>Learning Platform Introduction:</b>
                        A guided walkthrough of the Academy’s learning platform and personalized dashboard provides students with a clear roadmap for their academic journey.

                        </p>
                        <br />
                        <p className="description"> <b>Mentorship Program:</b>
                        Each student is paired with a dedicated mentor who offers guidance, support, and accountability throughout their course.

                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline">
                                <div className="timeline-content">
                                    <span className="year p-3"></span>
                                    <div className="content-inner">
                                        <span className="icon"><i className="fa fa-briefcase"></i></span>
                                        <h3 className="title">Academic Engagement and Skill Development
                        </h3>
                        <p className="description"> <b>Live Interactive Sessions: </b>
                        Students participate in live online classes, hands-on workshops, and engaging quizzes to reinforce their learning.

                        </p>
                        <br />
                        <p className="description"> <b>Project-Based Learning:</b>
                        From the outset, students work on real-world projects, enabling practical application of their knowledge.


                        </p>
                        <br />
                        <p className="description"> <b>Collaborative Learning:</b>
                        Active participation in student forums, peer discussions, and group assignments fosters networking and community engagement.

                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline">
                                <div className="timeline-content">
                                    <span className="year p-3"></span>
                                    <div className="content-inner">
                                        <span className="icon"><i className="fa fa-mobile"></i></span>
                                        <h3 className="title">Mid-Journey: Skill Enhancement and Industry Exposure</h3>
                        <p className="description"> <b>Skill Challenges & Competitions:  </b>
                        Monthly challenges encourage students to refine their skills in a dynamic and competitive environment. Recognition includes prizes, certificates, and achievement badges.


                        </p>
                        <br />
                        <p className="description"> <b>Expert Webinars & Guest Lectures: </b>
                        Students gain industry insights through exclusive webinars and sessions with professionals, keeping them informed about emerging trends and career opportunities.


                        </p>
                        <br />
                        <p className="description"> <b>Progress Reviews & Feedback: </b>
                        Regular one-on-one sessions with mentors facilitate performance tracking, constructive feedback, and goal setting for continuous improvement.


                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline">
                                <div className="timeline-content">
                                    <span className="year p-3"></span>
                                    <div className="content-inner">
                                        <span className="icon"><i className="fa fa-mobile"></i></span>
                                        <h3 className="title">Graduation Preparation
                        </h3>
                        <p className="description"> <b>SCapstone Project:  </b>
                        A culminating project integrates all learned concepts, demonstrating students’ expertise and growth in their field of study.



                        </p>
                        <br />
                        <p className="description"> <b>Career Readiness Support:</b>
                        Zing Academy provides career counseling, resume-building workshops, and mock interviews to equip students for the job market.


                        </p>
                        <br />
                        <p className="description"> <b>Graduation Ceremony:</b>
                        A virtual event celebrates student achievements, with official certification and recognition from faculty, mentors, and peers.


                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline">
                                <div className="timeline-content">
                                    <span className="year p-3"></span>
                                    <div className="content-inner">
                                        <span className="icon"><i className="fa fa-mobile"></i></span>
                                        <h3 className="title"> Post-Graduation: Continued Support & Networking
                        </h3>
                        <p className="description"> <b>Alumni Network:</b>
                        Graduates join an exclusive network of alumni, fostering ongoing professional connections, collaboration, and career growth.



                        </p>
                        <br />
                        <p className="description"> <b>Job Placement Assistance:  </b>
                        Zing Academy collaborates with leading organizations to facilitate job placements, internships, and freelance opportunities for graduates.



                        </p>
                        <br />
                        <p className="description"> <b>Progress Reviews & Feedback: </b>
                        Regular one-on-one sessions with mentors facilitate performance tracking, constructive feedback, and goal setting for continuous improvement.


                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline">
                                <div className="timeline-content">
                                    <span className="year p-3"></span>
                                    <div className="content-inner">
                                        <span className="icon"><i className="fa fa-mobile"></i></span>
                                        <h3 className="title">Additional Features Throughout the Journey
                        </h3>
                        <p className="description"> <b>Gamified Learning: </b>
                        A reward-based system featuring points, badges, and leaderboards incentivizes active participation and milestone achievements.


                        </p>
                        <br />
                        <p className="description"> <b>Continuous Performance Monitoring: </b>
                        Regular assessments, quizzes, and personalized feedback ensure students remain on track and continue to enhance their skills.

                        </p>
                        <br />
                        <p className="description"> <b>Mobile Accessibility: </b>
                        A dedicated mobile app enables students to access course materials, assignments, and peer interactions anytime, anywhere.


                        </p>

                        <br />

                        <p className="description">
                        Zing Academy is committed to delivering a structured, engaging, and results-oriented learning experience that empowers students to achieve academic and professional success.
                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  );
}
