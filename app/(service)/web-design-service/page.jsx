import React from "react";

import Header17 from "@/components/headers/Header17";
import Footer13 from "@/components/footers/Footer13";
import HeroSection from "@/components/service/heroSection";
import ServiceList from "@/components/service/serviceList";
import ServiceCta from "@/components/service/ServiceCta";
import Portfolio from "@/components/service/Portfolio";
import Faq from "@/components/faq/Faq3";

export const metadata = {
  title: "Web Design || Zing Studio",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
    const WebDevelopment = [
        {
         head:"Web Design",
         title:"Static Web Design",
         price: "8750",
         list:[
             "Administrator Dashboard",
             "Editor Dashboard",
             "Shop Manager Dashboard",
             "Categories",
             "Customers Limit",
             "Secure Online Payment",
             "Multiple Payment Options",
             "Filter Products By Price",
             "Sort Products By Price",
             "Product Reviews & Ratings",
             "Products Search",
             "Related Products Recommendation",
             "Customer Dashboard",
             "Email Notifications",
             "SMS Notifications Setup",
             "Custom Email Design",
             "Automated Abandoned Cart Recovery",
             "Shipping & Logistics Integration-(Delhivery, FedEx, BlueDart, +10 More)",
             "Products & Inventory Management",
             "Orders & Shipping Management",
             "Customer Management",
             "Powerful Reports & Analytics",
             "Orders Report",
             "Revenue Report",
             "Products & Category Performance Report ",
             "Stock & Inventory Report"
         ]
        },
        {
            head:"Web Design",
         title:"Dynamic Web Design",
         price: "8750",
         list:[
             "Administrator Dashboard",
             "Editor Dashboard",
             "Shop Manager Dashboard",
             "Categories",
             "Customers Limit",
             "Secure Online Payment",
             "Multiple Payment Options",
             "Filter Products By Price",
             "Sort Products By Price",
             "Product Reviews & Ratings",
             "Products Search",
             "Related Products Recommendation",
             "Customer Dashboard",
             "Email Notifications",
             "SMS Notifications Setup",
             "Custom Email Design",
             "Automated Abandoned Cart Recovery",
             "Shipping & Logistics Integration-(Delhivery, FedEx, BlueDart, +10 More)",
             "Products & Inventory Management",
             "Orders & Shipping Management",
             "Customer Management",
             "Powerful Reports & Analytics",
             "Orders Report",
             "Revenue Report",
             "Products & Category Performance Report ",
             "Stock & Inventory Report"
         ]
        },
        {
            head:"Web Design",
         title:"E-Commerce Web Design",
         price: "25,850",
         list:[
             "Administrator Dashboard",
             "Editor Dashboard",
             "Shop Manager Dashboard",
             "Categories",
             "Customers Limit",
             "Secure Online Payment",
             "Multiple Payment Options",
             "Filter Products By Price",
             "Sort Products By Price",
             "Product Reviews & Ratings",
             "Products Search",
             "Related Products Recommendation",
             "Customer Dashboard",
             "Email Notifications",
             "SMS Notifications Setup",
             "Custom Email Design",
             "Automated Abandoned Cart Recovery",
             "Shipping & Logistics Integration-(Delhivery, FedEx, BlueDart, +10 More)",
             "Products & Inventory Management",
             "Orders & Shipping Management",
             "Customer Management",
             "Powerful Reports & Analytics",
             "Orders Report",
             "Revenue Report",
             "Products & Category Performance Report ",
             "Stock & Inventory Report"
         ]
        },
     ]

    // const heroContent= [
    //   {
    //     head:"Web Design",
        
    //   }
    // ]   

    const formOption  =[
      "Static Site",
      "Dynamic Site",
      "E-Commerce Site"
    ]
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <HeroSection head={"Web Design"} option={formOption}/>
        <ServiceList data={WebDevelopment} head={"Web Design"}/>
        <ServiceCta/>
        <Portfolio/>
        <Faq/>
        
        <Footer13 />
      </div>
    </>
  );
}
