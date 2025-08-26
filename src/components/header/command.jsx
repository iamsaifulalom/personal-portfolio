
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
import { useEffect } from "react"
import gsap from 'gsap'

export default function Command({ isOpen, setIsOpen }) {

useEffect(() => {
  if (isOpen) {
    gsap.fromTo(
      ".animate-gsap",
      { scale: 0.8, opacity: 0, y: -30 },
      { 
        scale: 1, 
        opacity: 1, 
        y: 0, 
        duration: 0.3, 
        ease: "back.out(1.7)" // springy effect
      }
    )
  } else {
    gsap.to(".animate-gsap", {
      scale: 0.8,
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: "power2.in"
    })
  }
}, [isOpen])


  return (
    <>
      <div onClick={() => setIsOpen(false)}
        className="fixed top-0 left-0 w-full h-screen z-5 bg-background/5 backdrop-blur-xs">
      </div>
      <UiCommand className="rounded-lg animate-gsap border shadow-md max-w-3xl z-10 -translate-x-1/2 left-1/2 h-96  fixed top-18">
        <CommandInput placeholder="Search..." className="py-8" />
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