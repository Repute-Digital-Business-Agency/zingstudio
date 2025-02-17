// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";

// export default function Am_a_Zing() {
//   const images = [
//     {
//       src: "/images/Home-Page/am-a-zingprogram-1.jpg",
//       alt: "am-a-zingprogram.jpg",
//       title1:"Turning Career Breaks into Breakthroughs for Women:",
//       description1:" At Zing Studio, we strive to create opportunities to uplift women, enabling them to realize their potential and take control of the decisions that shape their lives. We do this through leadership capacity building, digital literacy, skills development and  employment, ensuring equal access to opportunities for women to thrive and succeed.",

//         title2:" 10% discounted cost for Women Entrepreneurs:",
//       description2:"We prioritize hiring and providing a supportive platform for women and encouraging those who have taken a career break to restart and thrive in their professional journey."
      
//     },
//     {
//       src: "/images/Home-Page/am-a-zingprogram-2.jpg",
//       alt: "am-a-zingprogram.jpg",
//       title1:"Lorem ipsum dolor sit amet consectetur adipisicing elit Women:",
//       description1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, debitis ad odio aliquid excepturi quos recusandae dolorem ducimus inventore voluptatum cumque quas similique animi pariatur dolorum, earum, sequi eos asperiores.",

//         title2:" 10% discounted cost for Women Entrepreneurs:",
//       description2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, debitis ad odio aliquid excepturi quos recusandae dolorem ducimus inventore voluptatum cumque quas similique animi pariatur dolorum, earum, sequi eos asperiores."
      
//     },
//     {
//       src: "/images/Home-Page/am-a-zingprogram-3.jpg",
//       alt: "am-a-zingprogram.jpg",
//       title1:"Turning Career Breaks into Breakthroughs for Women:",
//       description1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, debitis ad odio aliquid excepturi quos recusandae dolorem ducimus inventore voluptatum cumque quas similique animi pariatur dolorum, earum, sequi eos asperiores.",

//         title2:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       description2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, debitis ad odio aliquid excepturi quos recusandae dolorem ducimus inventore voluptatum cumque quas similique animi pariatur dolorum, earum, sequi eos asperiores."
      
//     },
//   ];

//   const [activeImage, setActiveImage] = useState(null); // To store the active image
//   const imageRefs = useRef([]); // To store refs for all images

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.5, // 50% of the image must be visible to consider it active
//     };

//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveImage(entry.target.getAttribute("src")); // Set the active image
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);

//     // Observe all image refs
//     imageRefs.current.forEach((img) => {
//       if (img) observer.observe(img);
//     });

//     return () => {
//       // Cleanup observer on component unmount
//       imageRefs.current.forEach((img) => {
//         if (img) observer.unobserve(img);
//       });
//     };
//   }, []);

//   return (
//     <div style={{ position: "relative" }}>
//       <div
//         className="section-full box-about-list Am_a_Zing bg-gray"
//         style={{
//           backgroundImage: "url(/images/element-4.png)",
//           backgroundRepeat: "no-repeat",
//           height: "2500px",
//         }}
//       >
//         <div className="row spno">
//           <div
//             className="col-lg-6 col-md-12 wow fadeInUp image"
//             data-wow-delay="0.2s"
//             style={{ position: "relative" }}
//           >
//             {images.map((item, index) => (
//               <img
//                 key={index}
//                 ref={(el) => (imageRefs.current[index] = el)} // Store the ref
//                 alt={item.alt}
//                 className="img-cover img-inner"
//                 src={item.src}
//                 style={{
//                   width: "300px",
//                   height: "800px",
//                   position: "sticky",
//                   top: "70px",
//                   left: "0",
//                   zIndex: "1000",
//                 }}
//               />
//             ))}
//           </div>
//           <div className="col-lg-6 col-md-12 content" style={{ position: "relative" }}>
//             <div
//               className="Am-a-zing-content max-w700 m-auto p-tb50 p-lr20"
//               style={{
//                 position: "sticky",
//                 top: "100px",
//               }}
//             >
//               <div className="our-story">
//                 <h2 className="title text-primary">
//                   <Link href="/am-a-zing">
//                     <span className="p-r20">
//                       <img
//                         alt=""
//                         src="/images/Home-Page/am-text-with-two-colors.png"
//                         width="320"
//                         height="100"
//                       />
//                     </span>
//                   </Link>
//                 </h2>
//                 <h4 className="title" style={{ color: "black", fontWeight: "600" }}>
//                   Empowering women to lead the future
//                 </h4>
//                 <p style={{ color: "black" }}>
//                   At Zing Studio, we strive to create opportunities to uplift women,
//                   enabling them to realize their potential and take control of the
//                   decisions that shape their lives. We do this through leadership
//                   capacity building, digital literacy, skills development and
//                   employment, ensuring equal access to opportunities for women to
//                   thrive and succeed.
//                 </p>
//               </div>
//               {/* <div>
//                 <h4>Active Image:</h4>
//                 <p>{activeImage || "No image currently active"}</p>
//               </div> */}


// <div
//                   className="icon-bx-wraper m-b30 left wow fadeInUp"
//                   data-wow-delay="0.6s"
//                   >
//                   <div className="icon-md">
//                       <a href="#" className="icon-cell text-white">
//                       <i className="flaticon-factory"></i>
//                       </a>
//                   </div>
//                   <div className="icon-content">
//                       <h4 className="dlab-tilte">
//                       {activeImage === images[0].src ? images[0].title1 : images[0].title1}
//                       </h4>
//                       <p className="text-white">
//                       We believe in supporting women entrepreneurs on their journey
//                       to success, that’s why we offer a 10% discount on our services
//                       to help them grow their businesses with ease and confidence.
//                       </p>
//                   </div>
//                   </div>
//                   <div
//                   className="icon-bx-wraper m-b30 left wow fadeInUp"
//                   data-wow-delay="0.8s"
//                   >
//                   <div className="icon-md">
//                       <a href="#" className="icon-cell text-white">
//                       <i className="flaticon-settings"></i>
//                       </a>
//                   </div>
//                   <div className="icon-content">
//                       <h4 className="dlab-tilte">
//                       Turning Career Breaks into Breakthroughs for Women:
//                       </h4>
//                       <p className="text-white">
//                       We prioritize hiring and providing a supportive platform for
//                       women and encouraging those who have taken a career break to
//                       restart and thrive in their professional journey.
//                       </p>
//                   </div>
//                   </div>


//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Am_a_Zing() {
  const images = [
    {
      src: "/images/Home-Page/am-a-zingprogram-1.jpg",
      alt: "am-a-zingprogram.jpg",
      title1: "Turning Career Breaks into Breakthroughs for Women:",
      description1:
        "At Zing Studio, we strive to create opportunities to uplift women, enabling them to realize their potential and take control of the decisions that shape their lives. We do this through leadership capacity building, digital literacy, skills development and employment, ensuring equal access to opportunities for women to thrive and succeed.",
      title2: "10% discounted cost for Women Entrepreneurs:",
      description2:
        "We prioritize hiring and providing a supportive platform for women and encouraging those who have taken a career break to restart and thrive in their professional journey.",
    },
    {
      src: "/images/Home-Page/am-a-zingprogram-2.jpg",
      alt: "am-a-zingprogram.jpg",
      title1: "Lorem ipsum dolor sit amet consectetur adipisicing elit Women:",
      description1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, debitis ad odio aliquid excepturi quos recusandae dolorem ducimus inventore voluptatum cumque quas similique animi pariatur dolorum, earum, sequi eos asperiores.",
      title2: "10% discounted cost for Women Entrepreneurs:",
      description2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, debitis ad odio aliquid excepturi quos recusandae dolorem ducimus inventore voluptatum cumque quas similique animi pariatur dolorum, earum, sequi eos asperiores.",
    },
    {
      src: "/images/Home-Page/am-a-zingprogram-3.jpg",
      alt: "am-a-zingprogram.jpg",
      title1: "Turning Career Breaks into Breakthroughs for Women:",
      description1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, debitis ad odio aliquid excepturi quos recusandae dolorem ducimus inventore voluptatum cumque quas similique animi pariatur dolorum, earum, sequi eos asperiores.",
      title2: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, debitis ad odio aliquid excepturi quos recusandae dolorem ducimus inventore voluptatum cumque quas similique animi pariatur dolorum, earum, sequi eos asperiores.",
    },
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0); // Active image index
  const imageRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = imageRefs.current.findIndex(
            (img) => img === entry.target
          );
          if (index !== -1) {
            setActiveImageIndex(index); // Update the active image index
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    imageRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => {
      imageRefs.current.forEach((img) => {
        if (img) observer.unobserve(img);
      });
    };
  }, []);

  const activeImage = images[activeImageIndex];

  return (
    <div style={{ position: "relative" }}>
      <div
        className="section-full box-about-list Am_a_Zing bg-gray"
        style={{
          backgroundImage: "url(/images/element-4.png)",
          backgroundRepeat: "no-repeat",
          height: "2500px",
        }}
      >
        <div className="row spno">
          <div
            className="col-lg-6 col-md-12 wow fadeInUp image"
            data-wow-delay="0.2s"
            style={{ position: "relative" }}
          >
            {images.map((item, index) => (
              <img
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                alt={item.alt}
                className="img-cover img-inner"
                src={item.src}
                style={{
                  width: "300px",
                  height: "800px",
                  position: "sticky",
                  top: "70px",
                  left: "0",
                  zIndex: "1000",
                }}
              />
            ))}
          </div>
          <div className="col-lg-6 col-md-12 content" style={{ position: "relative" }}>
            <div
              className="Am-a-zing-content max-w700 m-auto p-tb50 p-lr20"
              style={{
                position: "sticky",
                top: "100px",
              }}
            >
              <div className="our-story">
                <h2 className="title text-primary">
                  <Link href="/am-a-zing">
                    <span className="p-r20">
                      <img
                        alt=""
                        src="/images/Home-Page/am-text-with-two-colors.png"
                        width="320"
                        height="100"
                      />
                    </span>
                  </Link>
                </h2>
                <h4 className="title" style={{ color: "black", fontWeight: "400" }}>
                  Empowering women to lead the future
                </h4>
                <p style={{ color: "black" }}>
                  At Zing Studio, we strive to create opportunities to uplift women,
                  enabling them to realize their potential and take control of the
                  decisions that shape their lives.
                </p>
              </div>
              <div className="icon-bx-wraper m-b30 left wow fadeInUp">
                <div className="icon-md">
                  <a href="#" className="icon-cell text-white">
                    <i className="flaticon-factory"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-tilte">{activeImage.title1}</h4>
                  <p className="text-white">{activeImage.description1}</p>
                </div>
              </div>
              <div className="icon-bx-wraper m-b30 left wow fadeInUp">
                <div className="icon-md">
                  <a href="#" className="icon-cell text-white">
                    <i className="flaticon-settings"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-tilte">{activeImage.title2}</h4>
                  <p className="text-white">{activeImage.description2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
