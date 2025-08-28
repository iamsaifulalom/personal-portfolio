import SocialLinks from './SocialLinks';
import ThemeChanger from './themeChanger';

export default function Footer() {

    return (
        <footer className='p-4 max-w-7xl mx-auto'>


            <div className='flex text-sm  text-muted-foreground flex-col w-full gap-3 md:flex-row justify-between items-center'>
                <p>
                    © {new Date().getFullYear()} Saiful Alom. All rights reserved
                </p>
                <div className='flex flex-col gap-3 md:flex-row items-center'>
                    <SocialLinks />
                    <ThemeChanger />
                </div>
            </div>
        </footer>
    )
}
