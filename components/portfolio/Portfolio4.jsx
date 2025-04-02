"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const filters = [
  { filter: "*", text: "All", isActive: true },
  { filter: ".web-design", text: "Web Design" },
//   { filter: ".e-commerce", text: "E-Commerce" },
  { filter: ".digital-marketing", text: "Digital Marketing" },
];

export default function Portfolio4() {
  const [currentFilter, setCurrentFilter] = useState("*");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);

  const isotopContainer = useRef();
  const isotope = useRef();

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
    // {
    //   id: 67,
    //   filter: "digital-marketing",
    //   imageSrc: "/images/portfolio/portfolio/skimt.jpg",
    //   title: "SKIMT",
    //   category: "Digital Marketing",
    //   posters:[
    //     "/images/portfolio/portfolio/tirumalai.jpg",
    //     "/images/portfolio/portfolio/tirumalai.jpg",
    //     "/images/portfolio/portfolio/tirumalai.jpg",
    //    "/images/portfolio/portfolio/tirumalai.jpg",
    //     "/images/portfolio/portfolio/tirumalai.jpg",
    //     "/images/portfolio/portfolio/tirumalai.jpg",
    //   ],
     
    // },
    {
        id: 68,
        filter: "digital-marketing",
        imageSrc: "/images/portfolio/portfolio/dm-mockup-1.jpg",
        title:  "Kumar's Houston",
        category: "Digital Marketing",
        posters: [
            "/images/services/digital-marketing/kumars/14.jpeg",
            "/images/services/digital-marketing/kumars/2.jpeg",
            "/images/services/digital-marketing/kumars/3.jpeg",
            "/images/services/digital-marketing/kumars/4.jpeg",
           "/images/services/digital-marketing/kumars/5.jpeg",
            "/images/services/digital-marketing/kumars/6.jpeg",
            "/images/services/digital-marketing/kumars/7.jpeg",
            "/images/services/digital-marketing/kumars/8.jpeg",
            "/images/services/digital-marketing/kumars/9.jpeg",
            "/images/services/digital-marketing/kumars/10.jpeg",
            "/images/services/digital-marketing/kumars/11.jpeg",
            "/images/services/digital-marketing/kumars/12.jpeg",
           "/images/services/digital-marketing/kumars/13.jpeg",
            "/images/services/digital-marketing/kumars/16.jpeg",
            "/images/services/digital-marketing/kumars/15.jpeg",
            "/images/services/digital-marketing/kumars/1.jpeg",
            "/images/services/digital-marketing/kumars/17.jpeg",
            "/images/services/digital-marketing/kumars/18.jpeg",
            "/images/services/digital-marketing/kumars/19.jpeg",
    
          ],
        
      },
      {
        id: 69,
        filter: "digital-marketing",
        imageSrc: "/images/portfolio/portfolio/dm-mockup-3.jpg",
        title: "Sri Gomuki Tex Chem Pvt Ltd",
        category: "Digital Marketing",
        posters: [
            "/images/services/digital-marketing/gomuki/2.jpeg",
            "/images/services/digital-marketing/gomuki/1.jpeg",
            "/images/services/digital-marketing/gomuki/3.jpeg",
            "/images/services/digital-marketing/gomuki/4.jpeg",
           "/images/services/digital-marketing/gomuki/5.jpeg",
            "/images/services/digital-marketing/gomuki/6.jpeg",
            "/images/services/digital-marketing/gomuki/7.jpeg",
          ],
        link:"https://skimt.edu.in/"
      },

      {
        id: 70,
        filter: "digital-marketing",
        imageSrc: "/images/portfolio/portfolio/dm-mockup-4.jpg",
        title: "Tirumalai Textiles",
        category: "Digital Marketing",
        posters: [
            "/images/services/digital-marketing/tirumalai/4.jpeg",
            "/images/services/digital-marketing/tirumalai/2.jpeg",
            "/images/services/digital-marketing/tirumalai/3.jpeg",
            "/images/services/digital-marketing/tirumalai/1.jpeg",
           "/images/services/digital-marketing/tirumalai/5.jpeg",
            "/images/services/digital-marketing/tirumalai/6.jpeg",
            "/images/services/digital-marketing/tirumalai/7.jpeg",
            "/images/services/digital-marketing/tirumalai/8.jpeg",
            "/images/services/digital-marketing/tirumalai/9.jpeg",
            
          ],
        link:"https://skimt.edu.in/"
      },

    // {
    //   id: 58,
    //   filter: "web-design",
    //   imageSrc: "/images/portfolio/portfolio/prem.jpg",
    //   title: "Prem International",
    //   category: "Web Design",
    //   link:"https://premeuropa.com/"
    // },
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

  useEffect(() => {
    const initIsotop = async () => {
      const Isotope = (await import("isotope-layout")).default;
      const imagesloaded = (await import("imagesloaded")).default;

      isotope.current = new Isotope(isotopContainer.current, {
        itemSelector: ".card-container",
        layoutMode: "masonry",
      });

      imagesloaded(isotopContainer.current).on("progress", function () {
        isotope.current.layout();
      });
    };

    initIsotop();
  }, []);

  const updateCategory = (val) => {
    setCurrentFilter(val);
    isotope.current.arrange({ filter: val });
  };



  const handleImageClick = (item) => {
    if (item.filter === "digital-marketing" && item.posters?.length > 0) {
      const images = item.posters.map((src) => ({ src }));
      setSelectedImages(images);
      setIndex(0);
      setOpen(true);
    } else if (item.filter === "web-design" && item.link) {
      window.open(item.link, "_blank");
    }
  };

  return (
    <div className="section-full content-inner-2 portfolio text-uppercase bg-gray" id="portfolio">
      <div className="container-fluid">
        <div className="site-filters clearfix center m-b40">
          <h2 className="title">Portfolio</h2>
          <h4 className="title" style={{ color: "black", fontWeight: "600" }}>
            Quickly explore our services and projects by category.
          </h4>
          <ul className="filters mt-3">
            {filters.map((item, index) => (
              <li key={index} className={`btn btnhover20 ${currentFilter === item.filter ? "active" : ""}`} onClick={() => updateCategory(item.filter)}>
                <input type="radio" />
                <a href="#" className="site-button-secondry button-sm radius-xl">
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="clearfix" id="lightgallery">
          <ul id="masonry" ref={isotopContainer} className="portfolio-ic dlab-gallery-listing gallery-grid-4 lightgallery text-center">
            {portfolioItems3.map((item, index) => (
              <li key={index} className={`${item.filter} card-container col-lg-4 col-md-6 col-sm-6 p-a0`} onClick={() => handleImageClick(item)}>
                <div className="dlab-box dlab-gallery-box">
                  <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                    <Image src={item.imageSrc} width={650} height={528} alt={item.title} />
                    <div className="overlay-bx">
                      <div className="overlay-icon">
                        <div className="text-white">
                          {item.filter === "digital-marketing" ? (
                            <i className="far fa-image icon-bx-xs"></i>
                          ) : (
                            <Link href={item.link || "#"} target="_blank">
                              <i className="fas fa-link icon-bx-xs"></i>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dez-info p-a30 bg-white">
                    <p className="dez-title m-t0">
                      {item.filter === "web-design" ? (
                        <Link href={item.link || "#"} target="_blank">{item.title}</Link>
                      ) : (
                        item.title
                      )}
                    </p>
                    <p><small>{item.category}</small></p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={selectedImages}
          index={index}
          styles={{
            container: { backgroundColor: "#000000cf", }, // White background
            slide: { display: "flex", alignItems: "center", justifyContent: "center",height:"100%" },
            toolbar: { top: "100px" }, // Move close button toolbar down
            button:{ fontSize:"15px"}
          
          }}
          render={{
            slide: ({ slide }) => (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                <img
                  src={slide.src}
                  alt=""
                  style={{ height: "600px", maxWidth: "90%", objectFit: "contain" }} // Proper image styling
                />
              </div>
            ),
          
          }}
        />
      </div>
    </div>
  );
}
