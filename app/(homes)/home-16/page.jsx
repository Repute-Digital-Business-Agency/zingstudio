import Footer14 from "@/components/footers/Footer14";
import Header16 from "@/components/headers/Header16";
import About from "@/components/homes/home-16/About";
import Facts from "@/components/homes/home-16/Facts";
import Hero from "@/components/homes/home-16/Hero";
import Process from "@/components/homes/home-16/Process";
import Tickets from "@/components/homes/home-16/Tickets";

export const metadata = {
  title: "Home 16 || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page() {
  return (
    <div className="page-wraper event-body   event-page">
      <Header16 />
      <div className="page-content">
        <Hero />
        <Facts />
        <About />
        <Process />
        <Tickets />
      </div>
      <Footer14 />
    </div>
  );
}
