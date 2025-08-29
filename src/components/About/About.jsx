"use client"
import React, { useState } from 'react'
import Globe from "react-globe.gl";
import { useEffect, useRef } from "react";
import CurrentProject from './CurrentProject';
import SkillsMarquee from './SkillsMarquee';


export default function About() {
  const globeRef = useRef();
  const [points, setPoints] = useState([]);

  useEffect(() => {
    // Set the points
    setPoints([
      { lat: 28.6139, lng: 77.209, size: 0.5, color: "cyan" }, // Delhi
      { lat: 23.8103, lng: 90.4125, size: 0.5, color: "orange" } // Dhaka
    ]);
  }, []);
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 max-w-[1440px] m-auto p-4 auto-rows-[300px]">
      {/* 1st div - takes 2 columns horizontally */}
      <div
        className="bg-background rounded-xl  border-4 md:col-span-2 shadow-[inset_5px_5px_10px_var(--tw-forgourd)]"
        style={{ '--bg-forgourd': 'theme(colors.forgourd)' }}
      ></div>

    <SkillsMarquee/>

      {/* 3rd div - also 2 rows vertically */}
      <div className="bg-background rounded-xl border-4  md:row-span-2"></div>

      {/* 4th div - normal 1 grid cell */}
      <div className="bg-background rounded-xl border-4 "></div>

      {/* 5th div - spans 2 columns horizontally */}
        <CurrentProject/>
    </div>

  )
}
