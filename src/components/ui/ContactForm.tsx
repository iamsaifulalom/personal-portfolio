import TextArea from './TextArea'
import Input from './Input'
import Button from './Button'
import { Send } from 'lucide-react'

export default function ContactForm() {
    return (
        <div
            className="p-4 md:order-2 flex flex-1 flex-col gap-5"
        >
            <Input
                label="Name"
                name="name"
                type='text'
                placeholder='Don Joy'
            />
            <Input
                label="Email"
                name="email"
                type='email'
                placeholder='hello@donjoy.com'
            />
            <TextArea
                label="Message"
                name="email"
                type='email'
            />
            <Button className='flex justify-center items-center gap-3'>
                <Send strokeWidth={1.5} className='text-background'/> 
                <p className='text-background'>Send message</p>
            </Button>
        </div>
    )
}
