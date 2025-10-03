import AboutMe from '@/components/AboutMe'
import ArticleSection from '@/components/ArticleSection'
import BlogSection from '@/components/BlogSection'
import Contacts from '@/components/Contacts'
import Hero from '@/components/hero'
import Projects from '@/components/Projects'
import Work from '@/components/Work'
import React from 'react'

export default function Index() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Hero />
      <BlogSection />
      <AboutMe/>
      <Work/>
      <Projects/>
      <ArticleSection/>
      <Contacts/>
    </div>
  )
}

//p-4 lg:px-6 xl:px-10
