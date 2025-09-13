import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'

interface Props {
  label?: string,
  description?: string
}


export default function Card({ label, description }: Props) {
  return (
    <div className='text-muted-foreground font-Manrope last:border-b-2 max-w-4xl ml-auto p-3'>
      <div className={cn("border-t-2" , label === "Beyond Design" ? "border-b-2": "")}>
        <ArrowUpRight strokeWidth={0.3} className='ml-auto size-20' />
        <div className='flex items-end'>
          <h2 className='w-[50%] md:w-[20%]  uppercase text-lg'>{label}</h2>
          <p className='flex-1'>{description}</p>
        </div>
      </div>
    </div>
  )
}
