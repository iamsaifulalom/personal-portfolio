import React from 'react'
import { aboutMe } from '../../../constants/aboutme'
import Card from './Card'

export default function About() {
    return (
        <div className=''>
            <h1 className=' font-AnastasiaScript'>About me</h1>
            {aboutMe.map((item, i) => {
                console.log(item)
                return <Card key={i} {...item} />
            })}
        </div>
    )
}
