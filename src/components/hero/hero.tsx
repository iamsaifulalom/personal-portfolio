import { socialsLinks } from "@/constants/socials";
import Button from "../ui/Button";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="px-10">
            <div className='flex mt-16 items-center justify-between'>
                <h1 className='text-9xl font-black font-fira-code'>Full-stack</h1>
                <div className="flex gap-3">
                    <Button label="Project" />
                    <Button label="→" className="px-5.5 text-center flex items-center" />
                </div>
            </div>
            <div className='flex mt-10 gap-6 justify-between'>
                <p className="text-light-gray text-xl">
                    My goal is to <span className="font-fira-code text-foreground">write maintainable, clean</span> <br />
                    and <span className="font-fira-code text-foreground">understandable code to</span> process <br />
                    development was enjoyable
                </p>
                <h1 className='text-9xl font-black font-fira-code'>Developer</h1>
            </div>

            {/* socials links */}
            <div className="flex mt-7 justify-between gap-6 max-w-3xl mx-auto">
                {socialsLinks.map(({ label, Icon , href}) => (
                    <Link
                    target="_blank"
                        href={href}
                        className="border flex items-center gap-3 border-gray px-4 py-2 rounded-full"
                        key={label}
                    >
                        <Icon size={20} className="text-foreground" />
                        <span className="text-light-gray">{label}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}
