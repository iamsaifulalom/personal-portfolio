export default function HamburgerMenu() {
  return (
    <div className='flex md:hidden flex-col gap-2 items-end group lg:hidden'>
        <div className='w-32 h-0.5 bg-foreground group-hover:w-20 transition-all duration-200 rounded-full'/>
        <div className='w-20 h-0.5 bg-foreground group-hover:w-32 transition-all duration-200 rounded-full'/>
    </div>
  )
}
