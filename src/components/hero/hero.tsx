import { Facebook, Youtube, Github, Twitter , Send , Mail} from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

export default function Hero() {
  return (
    <div className='w-full font-poppins mt-4 px-3.5'>
      {/* profile pic , name and title */}
      <div className='flex gap-1 md:gap-6  py-4'>
        {/* frofile picture */}
        <div className='w-[115px] overflow-hidden'>
          <div className='rounded-full size-[110px] p-1 border-4 border-primary'>
            {/* <Image src="/images/pp.png" alt='Prfile picture' className='rounded-full' width={400} height={400} /> */}
          </div>
        </div>
        {/* name and title */}
        <div>
          <h1 className='text-[28px] font-bold text-left'>Hi, I&apos;m Saiful</h1>
          <p className='text-muted-foreground mt-0.5 text-[16px] leading-5'>Frontend & <br /> Backend Engineer</p>
          {/* social icons */}

          <div className='flex gap-3 text-muted-foreground mt-2'>
            <Twitter className='size-5' />
            <Github className='size-5' />
            <Facebook className='size-5' />
            <Youtube className='size-5' />
          </div>
        </div>
      </div>
      {/* Highlights sections */}
      <div className='mt-4 flex justify-start md:justify-between gap-4 py-4'>
        <div className='text-center'>
          <h1 className='text-xl font-bold'>2+</h1>
          <p className='text-muted-foreground text-sm'>Years of Experience</p>
        </div>
        <div className='text-center'>
          <h1 className='text-xl font-bold'>10+</h1>
          <p className='text-muted-foreground text-sm'>Satisfied Clients</p>
        </div>
        <div className='text-center'>
          <h1 className='text-xl font-bold'>30+</h1>
          <p className='text-muted-foreground text-sm'>Completed Projects</p>
        </div>
      </div>

      {/* cta buttons */}
      <div className='flex gap-2 mt-3'>
        <Button className='rounded text-foreground w-[70%]'>
          Send Email <Send/>
        </Button>

        <div className='flex gap-2 flex-1 pr-3'>
          <Button className='rounded w-1/2 bg-background text-foreground'>
            <Mail/>
          </Button>
          <Button className='rounded w-1/2 bg-background text-foreground'>
            <Twitter/>
          </Button>
        </div>
      </div>
    </div>
  )
}
