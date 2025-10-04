import { ChangeEvent, useState } from "react";

export default function useSendMessage() {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [clientMessage, setClientMessage] = useState({
        name: "",
        email: "",
        message: "",
    })

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setClientMessage(p => ({ ...p, [name]: value }))
    }

    async function handleSubmite() {
        try {
            setIsSubmitting(true)
            console.log(clientMessage)
            const res = await fetch("/api/message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(clientMessage),
            })
            const data = await res.json();
            if (res.status === 200) {
                setClientMessage({
                    name: "",
                    email: "",
                    message: "",
                })
                console.log(data)
            } else {
                setErrorMessage(data?.message)
            }

        } catch (error) {
            console.log(error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return {
        isSubmitting,
        clientMessage,
        handleChange,
        errorMessage,
        handleSubmite
    }
}