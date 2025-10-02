import { workExperience } from '@/constants/works'
import React from 'react'

export default function Work() {
    return (
        <div className='mt-10'>
            <h1 className='hero-heading p-4 lg:px-6 xl:px-10 text-right'>Work</h1>

            <div className='last:border-b border-white'>
                {workExperience.map(({ company, yearStart, yearEnd, duration, roleAndTech }) => (
                    <div key={company} className='flex p-4 lg:px-6 xl:px-10 hover:bg-foreground transition-all hover:text-background border-t justify-between py-4 text-sm lg:text-lg border-gray'>
                        <div className='w-[130px] text-light-gray'>
                            <h3>{yearStart} - {yearEnd}</h3>
                            <h4>{duration}</h4>
                        </div>
                        <div className='md:flex items-center justify-between flex-1'>
                            <h3 className='text-lg lg:text-xl'>{company}</h3>
                            <h4 className='font-fira-code mt-1'>{roleAndTech}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
