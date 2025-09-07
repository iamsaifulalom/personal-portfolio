import Image from 'next/image'
import React from 'react'
import AcmeIcon from '../../../public/icons/acme'

export default function Hero() {
    return (
        <div className='grid grid-cols-1  w-full md:grid-cols-2'>
            <img
                alt='hero-image'
                src="/images/hero-image.png"
                className='w-full object-cover'
            />
            <div className='p-6'>
                {/* heading and short description sections */}
                <div className='flex  flex-col overflow-hidden justify-between'>
                    <h1 className='lg:text-3xl text-lg text-center font-AntonSC'>© Saiful <br /> Alom ©</h1>
                    <div className='lg:mt-14'>
                        <p className='sections-label'>( Based in Bangladesh )</p>
                        <h3 className='lg:text-sm text-tiny font-Intern font-bold leading-9 lg:leading-14'>Crafting impactful brands and websites that drive growth and success.</h3>
                    </div>
                </div>
                {/* about us sections */}
                <div className='lg:mt-24 mt-12'>
                    <h4 className='sections-label'>( About Us )</h4>
                    <h3 className='font-AntonSC text-lg leading-20'>Creative Brands, Powerful Websites</h3>
                    <p className='mt-2'>
                        We are passionate about creating meaningful brands and dynamic websites that stand out in today’s competitive market. Our team combines strategic thinking with creative design to craft custom solutions that align with your business goals. From developing a unique brand identity to designing intuitive, responsive websites, we focus on delivering experiences that engage and convert.
                    </p>
                    <p className='mt-8'>
                        With every project, we ensure that your brand’s story is told in a way that resonates with your audience, builds trust, and drives growth. Let us help you transform your brand and take your digital presence to the next level.
                    </p>
                </div>
                <div className='lg:mt-24 mt-12'>
                    <h2 className='sections-label'>( My Clients )</h2>
                    <div className='grid grid-cols-3 gap-3'>
                        <AcmeIcon className='w-20 lg:w-28'/>
                        <AcmeIcon className='w-20 lg:w-28'/>
                        <AcmeIcon className='w-20 lg:w-28'/>
                        <AcmeIcon className='w-20 lg:w-28' />
                        <AcmeIcon className='w-20 lg:w-28' />
                        <AcmeIcon className='w-20 lg:w-28' />
                    </div>
                </div>
            </div>
        </div>
    )
}
