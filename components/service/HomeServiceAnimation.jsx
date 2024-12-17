"use client";
import Card from "./ServiceCardAnimation";

const projects = [
  {
    title: "Web Design",
    description:
      "At Zing Studio we design websites with your customer in mind, because modern web design is more than just about creating a visually stunning site.",
    src: "images/Home-Page/web-design.jpg",
    link: "/web-design",
    color: "#1a43bf",
  },
  {
    title: "E-Commerce",
    description:
      "The modern consumer of today looks for a simple and intuitive online shopping experience that responds to their needs.",
    src: "images/Home-Page/ecommerce.jpg",
    link: "/e-commerce",
    color: "#1a43bf",
  },
  {
    title: "Digital Marketing",
    description: "Dummny Text",
    src: "images/Home-Page/digital-marketing.jpg",
    link: "/digital-marketing",
    color: "#1a43bf",
  },
  {
    title: "E-Commerce Management",
    description:
      "It can be overwhelming for most businesses to manage inventory, process orders and address customer queries.",
    src: "images/Home-Page/e-commerce-managment.jpg",
    link: "/e-commerce-management",
    color: "#1a43bf",
  },
];

export default function HomeServiceAnimation() {
  return (
    <main className="main container">
      {projects.map((project, i) => {
        return <Card key={`p_${i}`} {...project} i={i}  />;
      })}
    </main>
  );
}
