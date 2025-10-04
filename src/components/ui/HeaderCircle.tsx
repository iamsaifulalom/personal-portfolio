
type HeaderCircleProps = {
    size?: number,
    color?: string,

}

export default function HeaderCircle({ size = 1, ...props }: HeaderCircleProps) {
    return (
        <svg width={size} {...props} height={size * 1.7} viewBox="0 0 45 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M44 47.5919C40.309 49.1429 36.2546 50 32 50C14.8792 50 1 36.1208 1 19C1 12.2882 3.13302 6.07454 6.75817 1"
                stroke="white"
                strokeWidth="1"
            />
        </svg>)
}
