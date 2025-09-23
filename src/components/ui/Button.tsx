

type ButtonProps = {
    label: string,
    onClick?: () => void,
    className?: string,
}

export default function Button({ label, onClick, className = "py-5 px-28" }: ButtonProps) {
    return (
        <button onClick={onClick}
            className={`bg-foreground   text-sm  rounded-full font-open-sans italic cursor-pointer ${className}`}
        >
            <span className="text-background">{label}</span>
        </button>
    )
}
