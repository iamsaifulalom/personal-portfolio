import React from 'react'
import Button from './Button'

export default function Paginator() {
    return (
        <div className='order-2 flex gap-3 justify-end items-center mt-5 md:flex-col md:justify-start md:mt-0 md:items-start md:w-[50%] md:order-1'>
            <Button className='' variant='small'>
                d
            </Button>
            <Button variant='small'>
                d
            </Button>
            <Button variant='small'>
                d
            </Button>
        </div>
    )
}
