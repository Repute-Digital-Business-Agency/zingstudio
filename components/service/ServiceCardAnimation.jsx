"use client";

import Image from "next/image";
import Link from "next/link";

const Card = ({ title, description, src, link, color, i }) => {
  return (
    <div className="cardContainer" data-wow-delay="0.6s">
      <div
        className="card dlab-box  no-hover wow fadeInUp fly-box-ho "
        style={{ backgroundColor: color, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <div
          className="body service-box row "
          style={{
            color: "white",
            justifyContent: "space-between",
            margin: "0px",
          }}
        >
          <div
            className="description col-md-6 col-sm-12 col-12"
            style={{ paddingLeft: "30px" }}
          >
            <h2 style={{ color: "white" }}>{title}</h2>
            <p>{description}</p>

            <Link
              href={link}
              className="site-button outline white outline-2 btnhover11"
            >
              Read More
            </Link>
          </div>

          <div className="imageContainer col-md-6   col-sm-12 col-12">
            <div className="inner">
              <Image fill src={`/${src}`} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
