import { tools } from '@/constants/tools'
import Marquee from 'react-fast-marquee'
import { Badge } from '../ui/badge'


export default function SkillsMarquee() {

    const rows = [tools.slice(0, 5), tools.slice(5, 10), tools.slice(10, 15), tools.slice(15)];

    return (
        <div className="bg-background group hover:shadow-[inset_0_6px_160px_var(--muted)] shadow-[inset_0_4px_80px_var(--muted)] overflow-hidden p-4 relative  rounded-xl border-2 border-muted row-span-2">
            <h2 className="text-4xl mb-16 text-center font-Montserrat font-bold bg-clip-text text-transparent 
           bg-[linear-gradient(120deg,var(--primary),var(--chart-1),var(--chart-2))]">
                I Turn Ideas Into Code & Solution
            </h2>
            {rows.map((row, i) => (
                <Marquee key={i} speed={20 + i * 7} direction={i % 2 === 1 ? "right" : "left"} className="mt-10">
                    {row.map(({ icon: Icon, name }) => (
                        <Badge key={name} className="flex gap-2 file:ml-0 ml-2 font-Inter text-sm" variant="outline">
                            <span className="flex items-center gap-2">{Icon} {name}</span>
                        </Badge>
                    ))}
                </Marquee>
            ))}
            <div className="absolute flex -bottom-40 items-center left-1/2 -translate-x-1/2 justify-center">
                <div className="absolute rounded-full border border-muted-foreground/20 size-[800px]" />
                <div className="absolute rounded-full border border-muted-foreground/20 size-[760px]" />
                <div className="absolute rounded-full border border-muted-foreground/20 size-[720px]" />
                <div className="absolute rounded-full border border-muted-foreground/20 size-[690px]" />
                <div className="absolute rounded-full border border-muted-foreground/20 size-[650px]" />
                <div className="absolute rounded-full border border-muted-foreground/20 size-[610px]" />
                <div className="absolute rounded-full border border-muted-foreground/20 size-[570px]" />
                <div className="absolute rounded-full border border-muted-foreground/20 size-[530px]" />
                <div className="absolute rounded-full border border-muted-foreground/20 size-[450px]" />
                <div className="absolute rounded-full border border-muted-foreground/20 size-[490px]" />
                <div className="absolute rounded-full border border-muted-foreground/20 size-[450px]" />
                <div className="absolute rounded-full border border-muted-foreground/20 size-[410px]" />
            </div>
            <div className='bg-background border overflow-hidden w-[250px] h-80 absolute group -bottom-36 transition-all group-hover:-bottom-40 rounded-xl left-1/2 -translate-x-1/2'>
                {/* mackbook header */}
                <div className='bg-muted-foreground/20 flex gap-1 items-center justify-start px-3 w-full h-4'>
                    <div className='bg-red-500 rounded-full size-2' />
                    <div className='bg-white rounded-full size-2' />
                    <div className='bg-green-500 rounded-full size-2' />
                </div>
                {/* display  notch*/}
                <div className='w-[35%] group-hover:w-[40%] flex items-center justify-end px-1 h-5 bg-muted-foreground/50 transition-all duration-500 group-hover:bg-muted-foreground/30 mt-3 rounded-full mx-auto'>
                    <div className='bg-muted rounded-full size-3' />
                </div>
                <h2 className='w-full text-center text-lg font-Inter leading-6 font-bold mt-5 text-muted-foreground'>
                    Code that carries emotions <br /> beyond the screen.
                </h2>
            </div>

        </div>
    )
}
