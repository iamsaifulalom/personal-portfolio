import React from 'react'

export default function AboutMe() {
  return (
    <div className='mt-5'>
        <h1 className='text-sm font-fira-code font-bold'>.../About me...</h1>
        <p className='mt-5'>
            Hello! I'm Saiful. I'm a <span> full-stack <br />
            developer.</span> More then <span>2 years</span> <br /> experience
        </p>

        <img src="/images/th-1.jpg" className='aspect-[1/1.2] object-cover rounded-4xl mt-5' alt="" />
    </div>
  )
}
