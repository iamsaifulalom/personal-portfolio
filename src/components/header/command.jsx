import {
  Command as UiCommand,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

import { navigationLinks } from "@/constants/navigations"
import Link from "next/link"
import { socialLinks } from "@/constants/socialsLinks"
import { useEffect, useState } from "react"
import gsap from 'gsap'

export default function Command({ isOpen, setIsOpen }) {

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        ".animate-gsap",
        { scale: 1.5, opacity: 0, y: -30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power4.inOut" // springy effect
        }
      )
    }
  }, [isOpen])


  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed top-0 left-0 w-full h-screen z-5 bg-background/90 backdrop-blur-xs transition-opacity 
       ${isOpen ? "block opacity-100" : "hidden opacity-0"}`}
      ></div>
      <UiCommand
        className={`rounded-lg animate-gsap w-[310px] md:w-[650px] border shadow-md z-50 -translate-x-1/2 left-1/2 h-96 fixed top-3 
        ${isOpen ? "block" : "hidden"}`}>
        <CommandInput setIsOpen={setIsOpen} placeholder="Search..." className="py-8" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigations">
            {navigationLinks.map(({ Icon, name, url }) => (
              <Link onClick={() => setIsOpen(false)} key={name} href={url} className="text-muted-foreground">
                <CommandItem >
                  <Icon />
                  {name}
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Socials">
            {socialLinks.map(({ Icon, name, url }) => (
              <Link onClick={() => setIsOpen(false)} target="_blank" key={name} href={url} className="text-muted-foreground">
                <CommandItem >
                  <Icon />
                  {name}
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
        </CommandList>
      </UiCommand>
    </>
  )
}