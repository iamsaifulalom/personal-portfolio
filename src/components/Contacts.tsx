import React from 'react'
import ContactForm from './ui/ContactForm'

export default function Contacts() {


    return (
        <>
            <div className='mt-10 p-4 lg:px-6 xl:px-10'>
                <h1 className='text-lg font-fira-code font-bold'>.../Contacts...</h1>
                <div className='flex flex-col md:flex-row'>
                   <ContactForm/>
                    <div className='flex-1'>
                        <h1 className='hero-heading'>Saiful</h1>
                        <div className='flex justify-between'>
                            <p className='mt-3'>Full-stack <br /> devoloper</p>
                            <h1 className='hero-heading'>Alom</h1>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center py-4'> © {new Date().getFullYear()} Saiful Alom. All rights reserved </p>
        </>

    )
}
