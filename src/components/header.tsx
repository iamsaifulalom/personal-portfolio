import { navLinks } from '@/constants/navigationLinks';
import Link from 'next/link';
import ToggleTheme from './ui/ToggleTheme';

export default function Header() {

    return (
        <header className="flex max-w-7xl mx-auto relative text-xl w-full p-5 justify-between items-center font-fira-code">
            <h2 >Saiful Alom</h2>
            <div className="hidden md:flex gap-4 text-lg">
                {navLinks.map(({ name, href }) => (
                    <Link key={name} className="" href={href}>{name}</Link>
                ))}
            </div>
            <ToggleTheme />
            {/* <div className='absolute border border-foreground size-40 rounded-full -right-24 '/> */}
        </header>
    )
}
