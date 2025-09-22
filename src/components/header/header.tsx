import { navLinks } from '@/constants/navigationLinks';
import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.header}>
            <h2 className={styles.site_title}>Saiful Alom</h2>
            <div className={styles.nav}>
                {navLinks.map(({name , href}) => (
                   <Link className={styles.nav_item} href={href}>{name}</Link>
                ))}
            </div>
            <div className={styles.site_title}>Dark <br /> Light</div>
        </header>
    )
}
