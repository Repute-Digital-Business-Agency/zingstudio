"use client";
import { portfolioItems3 } from "@/data/projects";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
const filters = [
  { filter: "*", text: "All", isActive: true },
  { filter: ".web-design", text: "Web Design" },
  { filter: ".e-commerce", text: "E-Commerce" },
  { filter: ".digital-marketing", text: "Digital Marketing" },
  // { filter: ".e-commerce-management", text: "E-Commerce Management" },
  // { filter: ".photography", text: "Plants" },
];
import Image from "next/image";
export default function Portfolio2() {
  const [currentFilter, setCurrentFilter] = useState("*");
  const isotopContainer = useRef();
  const isotope = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".card-container",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      // Trigger Isotope layout
      isotope.current.layout();
    });
  };
  const updateCategory = (val) => {
    setCurrentFilter(val);
    isotope.current.arrange({
      filter: val,
    });
    //   isotope.value.layout();
  };
  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    initIsotop();
  }, []);

  const portfolioItems3 = [
    {
      id: 49,
      filter: "web-design",
      imageSrc: "/images/portfolio/portfolio/g-mak.jpg",
      title: "G-MAk Fiber Laser",
      category: "Web Design",
      link:"https://gmaklaser.com/"
    },
    // {
    //   id: 50,
    //   filter: "e-commerce",
    //   imageSrc: "/images/portfolio/portfolio/thangam-jew.jpg",
    //   title: "Sree Thangam Jewellery",
    //   category: "E-Commerce",
    //   link:"https://sreethangamjewellery.com/"
    // },
    // {
    //   id: 51,
    //   filter: "digital-marketing",
    //   imageSrc: "/images/portfolio/portfolio/karpagam.jpg",
    //   title: "Karpagam Academy of Higher Education",
    //   category: "Digital Marketing",
    //   link:"https://kahedu.edu.in/"
    // },
    // {
    //   id: 52,
    //   filter: "e-commerce-management",
    //   imageSrc: "/images/portfolio/image_4.jpg",
    //   title: "Hamburg Wind Energy Plant",
    //   category: "Energy",
    //   link:"https://irepute.in/"
    // },
    {
      id: 53,
      filter: "web-design",
      imageSrc: "/images/portfolio/portfolio/kit-varnam.jpg",
      title: "KIT - Varnam",
      category: "Web Design",
      link:"https://kitvarnam.in/"
    },
    // {
    //   id: 54,
    //   filter: "e-commerce",
    //   imageSrc: "/images/portfolio/portfolio/prade.jpg",
    //   title: "Prade Jewels ",
    //   category: "E-commerce",
    //   link:"https://prade.in/"
    // },
    // {
    //   id: 55,
    //   filter: "digital-marketing",
    //   imageSrc: "/images/portfolio/portfolio/vishwankar.jpg",
    //   title: "Vishwankar Public School",
    //   category: "Digital Marketing",
    //   link:"https://vishwankarschool.com/"
    // },
    // {
    //   id: 56,
    //   filter: "e-commerce-management",
    //   imageSrc: "/images/portfolio/Ecommerce/Mockup-3.jpg",
    //   title: "Hamburg Wind Energy Plant",
    //   category: "Industry",
    //   link:"https://irepute.in/"
    // },
    // {
    //   id: 57,
    //   filter: "web-design",
    //   imageSrc: "/images/portfolio/portfolio/kce-dhurva.jpg",
    //   title: "KCE - DHRUVA",
    //   category: "Web Design",
    //   link:"https://www.kcedhruva.in/"
    // },
    {
      id: 58,
      filter: "web-design",
      imageSrc: "/images/portfolio/portfolio/skd.jpg",
      title: "SKD Fine Decor",
      category: "Web Design",
      link:"https://skdfinedecor.com/"
    },
    // {
    //   id: 59,
    //   filter: "e-commerce",
    //   imageSrc: "/images/portfolio/portfolio/goes-good-fashion.jpg",
    //   title: "Goes Good Fashions",
    //   category: "E-commerce",
    //   link:"https://goesgood.in/"
    // },
    {
      id: 60,
      filter: "web-design",
      imageSrc: "/images/portfolio/portfolio/nvm.jpg",
      title: "NVM Diet and Lifestyle Clinic",
      category: "Web Design",
      link:"https://nvmlifestyleclinic.com/"
    },
    // {
    //   id: 61,
    //   filter: "e-commerce-management",
    //   imageSrc: "/images/portfolio/image_12.jpg",
    //   title: "Muchen Railway Station",
    //   category: "System",
    //   link:"https://irepute.in/"
    // },
    {
      id: 62,
      filter: "web-design",
      imageSrc: "/images/portfolio/portfolio/gspace.jpg",
      title: "GSpace Interior",
      category: "Web Design",
      link:"https://www.gspaceinterior.com/"
    },

    {
      id: 63,
      filter: "web-design",
      imageSrc: "/images/portfolio/portfolio/micro-group.jpg",
      title: "Micro Group",
      category: "Web Design",
      link:"https://micro-groups.com/"
    },
    {
      id: 64,
      filter: "web-design",
      imageSrc: "/images/portfolio/portfolio/rasi-foods.jpg",
      title: "Rasi Foods",
      category: "Web Design",
      link:"https://rasifoods.in/"
    },
    {
      id: 65,
      filter: "web-design",
      imageSrc: "/images/portfolio/portfolio/freedom-run.jpg",
      title: "FREEDOM RUN",
      category: "Web Design",
      link:"https://freedomrun.co.in/"
    },
    {
      id: 66,
      filter: "web-design",
      imageSrc: "/images/portfolio/portfolio/tirumalai.jpg",
      title: "Tirumalai Textiles",
      category: "Web Design",
      link:"https://tirumalaitextiles.com/"
    },
    {
      id: 67,
      filter: "digital-marketing",
      imageSrc: "/images/portfolio/portfolio/skimt.jpg",
      title: "SKIMT",
      category: "Digital Marketing",
      link:"https://skimt.edu.in/"
    },
    {
      id: 58,
      filter: "web-design",
      imageSrc: "/images/portfolio/portfolio/prem.jpg",
      title: "Prem International",
      category: "Web Design",
      link:"https://premeuropa.com/"
    },
    // {
    //   id: 68,
    //   filter: "e-commerce",
    //   imageSrc: "/images/portfolio/portfolio/filamode.jpg",
    //   title: "Filmode",
    //   category: "E-commerce",
    //   link:"https://filmodefashion.com/"
    // },
    // {
    //   id: 69,
    //   filter: "e-commerce",
    //   imageSrc: "/images/portfolio/portfolio/faso.jpg",
    //   title: "FASO",
    //   category: "E-commerce",
    //   link:"https://faso.in/"
    // },
  ];
  
  console.log(portfolioItems3);
  

  return (
    <div
      className="section-full content-inner-2 portfolio text-uppercase bg-gray"
      id="portfolio"
    >
      <div className="container-fluid">
        <div className="site-filters clearfix center m-b40">
          <div className="our-story text-capitalize">
            <h2 className="title" >Portfolio
              {/* <span className="text-primary">  </span> */}
            </h2>
            <h4 className="title" style={{textTransform:"none", color: "black", fontWeight: "600" }}>
              {" "}
              Quickly explore our services and projects by category,<br className="d-md-block d-none"/> from web design to digital marketing and more.

            </h4>
          </div>

          <ul className="filters mt-3" data-bs-toggle="buttons">
            {filters.map((item, index) => (
              <React.Fragment key={index}>
                <li
                  data-filter={item.filter}
                  className={`btn btnhover20 ${
                    currentFilter == item.filter ? "active" : ""
                  }`}
                  onClick={() => updateCategory(item.filter)}
                >
                  <input type="radio" />
                  <a
                    href="#"
                    className="site-button-secondry  button-sm radius-xl"
                  >
                    <span>{item.text}</span>
                  </a>
                </li>{" "}
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className="clearfix" id="lightgallery">
          <ul
            id="masonry"
            ref={isotopContainer}
            className="portfolio-ic dlab-gallery-listing gallery-grid-4 lightgallery text-center"
          >
            {portfolioItems3.map((item, index) => (
              <li
                className={`${item.filter} card-container col-lg-4 col-md-6 col-sm-6 p-a0 `}
                key={index}
              >
                <div className="dlab-box dlab-gallery-box">
                  <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                    <Link href={item.link} target="_blank">
                      <Image
                        src={item.imageSrc}
                        width={650}
                        height={528}
                        alt=""
                      />
                    </Link>
                    <div className="overlay-bx">
                      <div className="overlay-icon">
                        <div className="text-white">
                          <Link href={item.link} target="_blank">
                            <i className="fas fa-link icon-bx-xs"></i>
                          </Link>
                          {/* <span
                            data-exthumbimage={item.imageSrc}
                            data-src={item.imageSrc}
                            className="check-km"
                            title={item.title}
                          >
                            <i className="far fa-image icon-bx-xs"></i>
                          </span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dez-info p-a30 bg-white">
                    <p className="dez-title m-t0">
                      <Link href={item.link} target="_blank">
                        {item.title}
                      </Link>
                    </p>
                    <p>
                      <small>{item.category}</small>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
