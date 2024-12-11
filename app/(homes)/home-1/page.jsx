import Footer2 from "@/components/footers/Footer2";
import Header17 from "@/components/headers/Header17";
import Hero from "@/components/homes/home-18/Hero";
import Service from "@/components/homes/home-2/Service";
import HomeService from "@/components/service/HomeServices";
import React from "react";

export const metadata = {
  title: "Home || Zing Studio",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <div className="page-content bg-white">
          <Hero />
          <div className="content-block">
            <HomeService />
          </div>
        </div>
        <Footer2 contactSection="true"/>
      </div>
    </>
  );
}
