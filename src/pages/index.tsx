import About from '@/components/about/About'
import Contacts from '@/components/contacts/Contacts'
import Hero from '@/components/hero/Hero'
import Process from '@/components/projects/Process'
import Projects from '@/components/projects/Projects'
import React from 'react'

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Process />
      <Contacts />
    </>
  )
}
