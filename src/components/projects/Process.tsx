import React from 'react'
import { myProcess } from '../../../constants/myprocess'

export default function Process() {
    return (
        <div className='px-4'>
            <h1 className='font-AnastasiaScript'>My Process</h1>
            <div className='grid grid-cols-1 mt-5 gap-3 lg:grid-cols-6'>
                {myProcess.map(({ id, title, description }) => (
                    <div className='p-2 text-muted-foreground  border border-muted-foreground' key={id}>
                        <h2 className='text-4xl'>/{id}</h2>
                        <h2 className='text-xl mt-1'>{title}</h2>
                        <p className='mt-5 text-sm'>{description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
