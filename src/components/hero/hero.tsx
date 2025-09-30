import React from 'react'
import Button from '../ui/Button'
import { socialsLinks } from '@/constants/socials'
import Link from 'next/link'

export default function Hero() {
  return (
    <div>
      <h1 className='text-5xl font-fira-code'>Full-stck</h1>
      <h1 className='text-5xl font-fira-code text-end mt-2'>Developer</h1>

      {/* description */}
      <p className='text-lg mt-6 leading-6 font-open-sans text-light-gray'>
        My goal is to <span className='font-fira-code text-foreground'>write maintainable, clean</span> and <span className='font-fira-code text-foreground'>understandable code</span> to process
        development was enjoyable
      </p>

      {/* cta buttons */}
      <div className='mt-5 flex overflow-hidden gap-5'>
        <Button label='Project' />
        <Button variant='small'>
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4L0 4.5L15 4.5V4V3.5L0 3.5L0 4Z" fill="black" />
          </svg>
        </Button>
      </div>


      {/* socials links */}

      <div className='flex flex-wrap gap-3 mt-8'>
        {socialsLinks.map(({ href, Icon, label }) => (
          <Link href={href} className='flex gap-2 border border-gray rounded-full px-3 py-2'>
            <Icon className='text-foreground' size={18} />
            <span className='text-sm text-light-gray'>{label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
