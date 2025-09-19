import React from 'react'
import { socials } from '../../../constants/socials';
import { Quote, Superscript } from 'lucide-react'

export default function Contacts() {
    return (
        <div className='p-5'>
            <h1 className='font-AnastasiaScript'>Constacts</h1>
            <div className='grid grid-cols-1 gap-3 lg:grid-cols-4'>
                {socials.map(({ Icon, label }) => (
                    <div className='flex text-sm items-center lg:justify-center gap-3 lg:border-2 border-muted-foreground lg:p-2'>
                        <Icon size={16} /> <span className='text-muted-foreground'>{label}</span>
                    </div>
                ))}
            </div>
            <h2 className='text-xl mt-3 text-muted-foreground font-Manrope lg:text-right'>hello@saifulalom.com</h2>
            <h1 className='font-AnastasiaScript mt-5 text-right'> <sup>“</sup> Expensive is not always overpriced.</h1>
            <h2 className='text-2xl font-AnastasiaScript'> -- Saiful Alom</h2>
        </div>
    )
}
