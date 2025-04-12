import React from "react";
import Link from "next/link";
export default function NewBanner() {
  return (
    <div
      className=" text-center bg-newblue py-2"
     style={{background:"#d23530"}}
    >
      <div className="container">
        <div className="text-center">
          <h1 className=" mb-0" style={{fontSize:"25px", textTransform:"uppercase",color:"#fff"}}>About us</h1>
       
        </div>
      </div>
    </div>
  );
}
