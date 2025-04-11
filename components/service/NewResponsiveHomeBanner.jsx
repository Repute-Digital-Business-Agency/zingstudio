"use client"

import React, { useEffect, useState } from 'react'
import Hero from "@/components/homes/home-7/Hero";
import HomeMobileBanner from '../homes/home-7/HomeMobileBanner';
import NewHero from '../homes/home-7/NewHero';
import NewHomeMobileBanner from '../homes/home-7/NewHomeMobileBanner';

export default function NewResponsiveHomeBanner(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 990);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 990);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <>
    {/* {isMobile ? <HomeMobileBanner /> : <Hero />} */}

    {/* newhome banner */}

    {isMobile ? <NewHomeMobileBanner/> : <NewHero/>}

    </>
  )
}
