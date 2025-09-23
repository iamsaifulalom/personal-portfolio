import { navLinks } from '@/constants/navigationLinks';
import Link from 'next/link';
import ToggleTheme from './ToggleTheme';

export default function Header() {

    return (
        <header className="flex text-xl  p-5 justify-between items-center font-fira-code">
            <h2 >Saiful Alom</h2>
            <div className="flex gap-8 text-lg">
                {navLinks.map(({ name, href }) => (
                    <Link key={name} className="" href={href}>{name}</Link>
                ))}
            </div>
            <ToggleTheme />
        </header>
    )
}
