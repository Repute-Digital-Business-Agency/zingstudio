import BlogSingle from "@/components/blogs/BlogSingle";
import Link from "next/link";
import Comment from "@/components/blogs/Comment";


import React from "react";
import { allBlogs } from "@/data/blogs";

export const metadata = {
  title: "Blog Single || Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
  description: "Zing Studio specializes in web design, digital marketing, and brand identity, delivering creative, cost-effective, and impactful solutions.",
};
export default function page({ params }) {
  const slug = params.slug.split("%20").join(" ");
  const blogItem =
    allBlogs.filter((elm) => elm.title == slug)[0] || allBlogs[0];
  return (
    <>
      <div className="page-wraper  ">
        
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr1.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Blog Single</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li>Blog Single</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>
          <div className="content-area">
            <div className="container max-w900">
              <BlogSingle blogItem={blogItem} />
              <Comment />
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
