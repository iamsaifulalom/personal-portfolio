import TextArea from './TextArea'
import Input from './Input'
import Button from './Button'
import { Send } from 'lucide-react'
import useSendMessage from '@/hooks/useSendMessaage'

export default function ContactForm() {

    const {
        handleChange,
        handleSubmite,
        clientMessage: { name, message, email }
    } = useSendMessage()

    return (
        <div
            className="md:order-2 flex flex-1 flex-col gap-5"
        >
            <Input
                onChange={handleChange}
                label="Name"
                name="name"
                type='text'
                value={name}
                placeholder='Don Joy'
                
            />
            <Input
                onChange={handleChange}
                label="Email"
                name="email"
                value={email}
                type='email'
                placeholder='hello@donjoy.com'
            />
            <TextArea
                value={message}
                onChange={handleChange}
                label="Message"
                name="message"
            />
            <Button onClick={handleSubmite} className='flex justify-center items-center gap-3'>
                <Send strokeWidth={1.5} size={18} className='text-background' />
                Send message
            </Button>
        </div>
    )
}
