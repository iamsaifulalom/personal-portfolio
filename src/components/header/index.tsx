import Hambargar from "./hambargar";


export default function Header() {
  return (
    <div className='p-6 flex z-50 justify-between items-center h-16 fixed w-full top-0 left-0 overflow-hidden bg-background/5 backdrop-blur-sm'>
      <h1 className='text-2xl font-Manrope'>Saiful Alom</h1>
      <Hambargar />
    </div>
  )
}
