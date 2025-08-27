// hooks/useAnimateText.js
"use client"

import { useEffect } from "react"
import gsap from "gsap"

export default function useAnimateText(ref) {
  useEffect(() => {
    if (ref?.current) {
      gsap.from(ref.current, {
        yPercent: 120,
        opacity: 0,
        duration: 1, // optional, smoother animation
        ease: "power3.out",
      })
    }
  }, [ref])
}
