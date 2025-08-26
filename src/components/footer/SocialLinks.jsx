import { Github, Twitter, Youtube } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function SocialLinks() {
    return (
        <div className='flex gap-2'>
            <Tooltip>
                <TooltipTrigger asChild>
                    <a href="https://github.com/iamsaifulalom" target='_blank'>
                        <Github size={20} />
                    </a>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Github</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <a href="https://x.com/iamsaifulalom" target='_blank'>
                        <Twitter size={20} />
                    </a>
                </TooltipTrigger>
                <TooltipContent>
                    <p>X/Twitter</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <a href="https://www.youtube.com/@iamsaifulalom" target='_blank'>
                        <Youtube size={22} />
                    </a>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Youtube</p>
                </TooltipContent>
            </Tooltip>
        </div>
    )
}
