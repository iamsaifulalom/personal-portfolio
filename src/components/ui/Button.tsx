import { ReactNode } from "react"

export default function Button({ label, onClick, variant = "large", children }: ButtonProps) {

    const variants = {
        large: "py-2 px-16",
        small: " px-3 py-2"
    }
    return (
        <button onClick={onClick}
            className={`bg-foreground text-sm  rounded-full font-open-sans italic cursor-pointer ${variants[variant]}`}
        >
            {children}
            {label &&
                <span className="text-background text-md">{label}</span>
            }
        </button>
    )
}


type ButtonProps = {
    label?: string,
    onClick?: () => void,
    className?: string,
    variant?: "large" | "small",
    children?: ReactNode
}