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
    const Academy = [
        {
         head:"Academy",
         title:"Digital Marketing - Academy",
         price: "25,999",
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
         ],
         link:""
        },
        {
            head:"Web Design",
         title:"SEO - Academy",
         price: "8500",
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
         ],
         link:""
        },
        {
            head:"Web Design",
         title:"SMM - Academy",
         price: "7299",
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
         ],

         link:""
        },
 
     ]
  return (
    <>
      <div className="page-wraper  ">
        <Header17 />
        <HeroSection/>
        <ServiceList data={Academy} head={"Academy"}/>
        <ServiceCta/>
        <Portfolio/>
        <Faq/>
        
        <Footer13 />
      </div>
    </>
  );
}
