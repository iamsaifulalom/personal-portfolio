import Hambargar from "./hambargar";


export default function Header() {
  return (
    <div className='p-6 flex justify-between items-center h-16 sticky top-0 left-0 overflow-hidden bg-background/5 backdrop-blur-sm'>
      <h1 className='text-3xl font-Manrope'>Saiful Alom</h1>
      <Hambargar />
    </div>
  )
}
