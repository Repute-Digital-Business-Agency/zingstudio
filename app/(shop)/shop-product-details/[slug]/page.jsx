import Link from "next/link";


import ShopDetails from "@/components/shop/ShopDetails";
import ShopFeatures from "@/components/shop/ShopFeatures";
import React from "react";
import { products } from "@/data/products";


export const metadata = {
  title:
    "Shop Details || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page({ params }) {
  const slug = params.slug.split("%20").join(" ");
  const productsItem =
    products.filter((elm) => elm.title == slug)[0] || products[0];
  return (
    <>
      <div className="page-wraper  ">
        
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr4.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Shop Details</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li>Shop Details</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>
          <ShopDetails productsItem={productsItem} />

          <ShopFeatures />
        </div>
        
      </div>
    </>
  );
}
