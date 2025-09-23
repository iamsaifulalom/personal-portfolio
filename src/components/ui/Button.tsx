import styles from './button.module.css';

type ButtonProps = {
    label: string,
    onClick?: () => void,
    className?: string
}

export default function Button({ label, onClick , className}: ButtonProps) {
    return (
        <button onClick={onClick} className={className}>
            <span className={styles.text}>{label}</span>
        </button>
    )
}
