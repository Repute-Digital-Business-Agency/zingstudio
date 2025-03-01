"use client";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { teamData } from "@/data/team";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
export default function GuestLectures() {
  return (

      <div className="bg-gray team-box-area ">
    
        {/* Team Section Style 3 */}
        <div className="section-full content-inner">
          <div className="container">
          <div className="section-head style2 text-center ">
                    <h2 className="title">Celebrity Trainers</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="dlab-box m-b30 dlab-team6">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/zing-digital-marketing-mastery/Celebrity-trainers/img-1.jpg"
                        width="500"
                        height="600"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Marco Datella</a>
                    </h4>
                    <span className="dlab-position">Designer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="dlab-box m-b30 dlab-team6">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/zing-digital-marketing-mastery/Celebrity-trainers/img-2.jpg"
                        width="500"
                        height="600"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Konne Backfield</a>
                    </h4>
                    <span className="dlab-position">Developer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="dlab-box m-b30 dlab-team6">
                  <div className="dlab-media">
                    <a href="#">
                      <Image
                        alt=""
                        src="/images/zing-digital-marketing-mastery/Celebrity-trainers/img-3.jpg"
                        width="500"
                        height="600"
                      />
                    </a>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <a href="#">Nashid Martines</a>
                    </h4>
                    <span className="dlab-position">Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Section Style 3 End */}
        
      </div>
  
  );
}
