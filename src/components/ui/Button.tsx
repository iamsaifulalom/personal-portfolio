import { ReactNode } from "react"

export default function Button({ label, onClick, variant = "large", children, className, ...props }: ButtonProps) {

    const variants = {
        large: "py-2 px-14",
        small: "px-2.5 py-2",
        heroSmall: "px-2 py-2 md:px-5 md:py-2 lg:px-7 xl:py-3 xl:px-8",
        heroLarge: "py-2 px-16 md:px-20 md:py-4 lg:px-24  xl:py-6",
    }
    return (
        <button
            {...props}
            onClick={onClick}
            className={`bg-foreground text-background text-sm rounded-full font-open-sans italic cursor-pointer ${className} ${variants[variant]}`}
        >
            {children}
        </button>
    )
}


type ButtonProps = {
    label?: string,
    onClick?: () => void,
    className?: string,
    variant?: "large" | "small" | "heroSmall" | "heroLarge",
    children?: ReactNode
}