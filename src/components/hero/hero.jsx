"use client"

import useAnimateText from "@/hooks/animateText"
import React, { useRef } from "react"
import { Button } from "../ui/button"
import { FileUser, Phone } from "lucide-react"
import { socialLinks } from "@/constants/socialsLinks"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { SparklesCore } from "../ui/sparkles";

export default function Hero() {
  const textRef = useRef(null)

  // run the custom hook
  useAnimateText(textRef)
  // right-[-510px] bottom-[-759px] left-[-532px]

  return (
    <div className="md:pt-10  overflow-hidden relative mx-auto px-4 w-full">

      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>


      <div className="absolute  bottom-[100px] left-1/2 h-[111px] w-[787px] -translate-x-1/2 transform overflow-hidden  rounded-lg bg-[radial-gradient(circle_at_80%_80%,var(--chart-1)_0%,var(--chart-2)_100%)] blur-[57px]"></div>
      <div className="bg-foreground-1  bg-background absolute left-1/2 -translate-x-1/2 top-[450px] lg:top-96 aspect-[2.346820809248555/1] h-[956px] rounded-[100%] shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d]"></div>

      <div className="max-w-[1440px] mx-auto">
        {/* headers */}
        <h1 >I build seamless digital experiences</h1>
        <h1>from <span >founders’</span> original ideas.</h1>
        <div className="flex pt-16 h-[300px] text-muted-foreground">
          {/* side socials links */}
          <div className="w-[40%] relative  overflow-hidden">
            <div className="-rotate-90 absolute flex flex-col gap-2 -left-8 top-10">
              <p className="text-center text-lg font-Inter">@iamsaifulalom</p>
              <div className="flex gap-2 justify-end">
                {socialLinks.map(({ Icon, name, url }) => (
                  <Link key={name} target="_blank" href={url}>
                    <Tooltip key={name}>
                      <TooltipTrigger asChild>
                        <Icon size={22} />
                      </TooltipTrigger>
                      <TooltipContent side="left" >
                        <p>{name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* side description and buttons */}
          <div className="flex flex-col text-foreground flex-1">
            <p className="text-lg font-Inter leading-6">I design and build modern web apps <br /> that are fast, user-friendly, and tailored to your needs.</p>
            <div className="flex gap-1 md:gap-3">
              <Button className="rounded-full w-36 group mt-5 hover:bg-foreground hover:text-background cursor-pointer transition-all relative bg-transparent border border-foreground text-foreground">
                <Phone className="border size-6 p-1 transition-all group-hover:bg-background group-hover:text-foreground rounded-full bg-foreground text-background border-foreground absolute left-0  " /> <span className="ml-5">Schedule a call</span>
              </Button>
              <Button className="rounded-full w-16 md:w-36 group mt-5 hover:bg-foreground hover:text-background cursor-pointer transition-all relative bg-transparent border border-foreground text-foreground">
                <FileUser className="border size-6 p-1 transition-all group-hover:bg-background group-hover:text-foreground rounded-full bg-foreground text-background border-foreground absolute left-0  " /> <span className="ml-5">CV</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
