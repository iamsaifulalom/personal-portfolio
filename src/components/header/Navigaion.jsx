import { navigationLinks } from '@/constants/navigations'
import React from 'react'

export default function Navigation() {
  return (
    <div className='flex gap-3 py-5 px-1 bg-foreground/10 backdrop-blur-sm shadow-sm rounded-full items-center'>
        {navigationLinks.map(({ Icon , name})=> (
            <div key={name} className='flex text-sm gap-1 cursor-pointer bg-foreground/10 backdrop-blur-lg rounded-full py-1 px-2 items-center'>
               <Icon className='w-4'/> <span className='text-xs'>{name}</span>
            </div>
        ))}
    </div>
  )
}
