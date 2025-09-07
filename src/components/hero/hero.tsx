import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <div className='grid grid-cols-1  w-full lg:grid-cols-2'>
            <img
                alt='hero-image'
                src="/images/hero-image.png"
                className='w-full object-cover'
            />
            <div className='p-6 flex flex-col overflow-hidden justify-between'>
                <h1 className='text-3xl font-AntonSC'>© Saiful <br /> Alom ©</h1>
                <div>
                    <p className='font-Spectral text-mini text-muted-foreground mb-[32px]'>( Based in Bangladesh )</p>
                    <h3 className='text-sm font-Intern font-bold leading-14'>Crafting impactful brands and websites that drive growth and success.</h3>
                </div>
            </div>
        </div>
    )
}
