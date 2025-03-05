"use client"

import React, { useEffect, useState } from 'react'
import MblZingAcademyCourseHero from './MblZingAcademyCourseHero';
import ZingAcademyCourseHero from './zingAcademyCourseHero';

export default function ResponsiveAcademyBanner(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <>
    {isMobile ? <MblZingAcademyCourseHero /> : <ZingAcademyCourseHero />}
    </>
  )
}

