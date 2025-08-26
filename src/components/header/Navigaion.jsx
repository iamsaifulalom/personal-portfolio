import { navigationLinks } from '@/constants/navigations'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className='md:flex hidden gap-3 py-5 z-50 px-1 bg-foreground/5 backdrop-blur-sm shadow-sm rounded-full items-center'>
      {navigationLinks.map(({ Icon, name, path }) => (
        <Link href={path} key={name}
          className={cn('flex z-40 text-foreground/60 hover:text-foreground transition-all relative text-sm gap-1 cursor-pointer rounded-full py-1 px-2 items-center',
            pathname === path && "bg-foreground/5 backdrop-blur-lg")}
        >
          <Icon className='w-4' /> <span className='text-xs'>{name}</span>
        </Link>
      ))}
    </div>
  )
}
