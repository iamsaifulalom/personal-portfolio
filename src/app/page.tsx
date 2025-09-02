import About from '@/components/about/About'
import Hero from '@/components/hero/hero'
import React from 'react'

export default function Home() {
  return (
    <div className='max-w-xl mx-auto'>
      <Hero />
      <About />
    </div>
  )
}
