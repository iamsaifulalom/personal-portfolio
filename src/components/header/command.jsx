
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


export default function Command({isOpen , setIsOpen}) {

  return (
  <>
    <UiCommand className="rounded-lg border shadow-md max-w-3xl -translate-x-1/2 left-1/2 h-96  fixed top-18">
      <CommandInput placeholder="Search..." className="py-8" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigations">
          {navigationLinks.map(({ Icon, name, url }) => (
            <Link onClick={()=> setIsOpen(false)} key={name} href={url} className="text-muted-foreground">
              <CommandItem >
                <Icon />
                {name}
              </CommandItem>
            </Link>
          ))}
        </CommandGroup>
        <CommandSeparator/>
        <CommandGroup heading="Socials">
          {socialLinks.map(({ Icon, name, url }) => (
            <Link onClick={()=> setIsOpen(false)} target="_blank" key={name} href={url} className="text-muted-foreground">
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