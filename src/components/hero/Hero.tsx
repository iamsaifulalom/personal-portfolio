import React from 'react'
import { Button } from '../ui/button'

export default function Hero() {
    return (
        <div className='flex flex-col font-Manrope justify-between w-full px-6 py-16 relative'>
            <div className='mt-16'>
                <h1 className='font-AnastasiaScript'>Saiful Alom</h1>
                <h1 className='font-Manrope ml-[260px] hidden md:block'>Sujon</h1>
                <span >({new Date().getFullYear()})</span>
            </div>
            <div className='text-end  mt-16'>
                <h1 className='font-Manrope'>Software</h1>
                <h1 className='font-AnastasiaScript mr-6'>Engineer</h1>
            </div>
            <div>
                <p className='leading-5 font-Manrope'>
                    Designs that make <br />
                    people feel befor <br />
                    they think
                </p>
                <Button className='mt-4'>
                    Book a Call
                </Button>
            </div>
        </div>
    )
}
