import AboutMe from '@/components/AboutMe'
import BlogSection from '@/components/BlogSection'
import Hero from '@/components/hero'
import Work from '@/components/Work'
import React from 'react'

export default function Index() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Hero />
      <BlogSection />
      <AboutMe/>
      <Work/>
    </div>
  )
}

//p-4 lg:px-6 xl:px-10
