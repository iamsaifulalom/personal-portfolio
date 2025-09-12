import React from 'react'
import { Button } from '../ui/button'

export default function Hero() {
    return (
        <div className='flex flex-col justify-between w-full px-6 py-16 relative'>
            <div className='text-6xl mt-16'>
                <h1 className='font-AnastasiaScript'>Saiful Alom</h1>
                <h1 className='font-Manrope ml-32'>Sujon</h1>
            </div>
            <div className='text-6xl text-end  mt-16'>
                <h1 className='font-Manrope'>Software</h1>
                <h1 className='font-AnastasiaScript ml-16'>Engineer</h1>
            </div>
            <div>
                <p className='leading-5 text-muted-foreground font-Manrope'>
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
