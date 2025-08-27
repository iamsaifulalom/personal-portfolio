"use client"

import useAnimateText from "@/hooks/animateText"
import React, { useRef } from "react"
import { Button } from "../ui/button"
import { ArrowUpRight, Phone } from "lucide-react"

export default function Hero() {
  const textRef = useRef(null)

  // run the custom hook
  useAnimateText(textRef)

  return (
    <div className="text-foreground max-w-7xl z-10 mx-auto p-4 w-full h-screen">
      <h1
        ref={textRef}
        className="text-center leading-10 md:leading-[75px] mt-5 text-3xl font-extrabold md:text-6xl"
      >
        I build seamless digital experiences <br /> from <span className="bg-foreground text-background px-2 rounded">founders’</span> original ideas.
      </h1>
      <div className="flex mt-5">
        <div className="w-[40%]">icons</div>
        <div>
          <p>I design and build modern web apps <br /> that are fast, user-friendly, and tailored to your needs.</p>
          <Button className="rounded-full group mt-5 hover:bg-foreground hover:text-background cursor-pointer transition-all relative bg-transparent border border-foreground text-foreground">
            <Phone className="border size-6 p-1 transition-all group-hover:bg-background group-hover:text-foreground rounded-full bg-foreground text-background border-foreground absolute left-0  "/> <span className="ml-5">Schedule a call</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
