"use client"

import React, { useEffect, useState } from 'react'
import Hero from "@/components/homes/home-7/Hero";
import MobileBanner from '../homes/home-7/MobileBanner';

export default function ResponsiveHomeBanner(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <>
    {isMobile ? <MobileBanner /> : <Hero />}
    </>
  )
}

