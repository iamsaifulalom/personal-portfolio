import BlogSection from '@/components/BlogSection'
import Hero from '@/components/hero'
import React from 'react'

export default function Index() {
  return (
    <div className='p-4 lg:px-6 max-w-7xl mx-auto'>
      <Hero />
      <BlogSection />
    </div>
  )
}
