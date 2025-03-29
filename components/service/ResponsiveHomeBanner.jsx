"use client"

import React, { useEffect, useState } from 'react'
import Hero from "@/components/homes/home-7/Hero";
import HomeMobileBanner from '../homes/home-7/HomeMobileBanner';

export default function ResponsiveHomeBanner(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 990);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 990);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <>
    {isMobile ? <HomeMobileBanner /> : <Hero />}
    </>
  )
}

