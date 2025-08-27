import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { socialLinks } from '@/constants/socialsLinks'

export default function SocialLinks() {
    return (
        <div className='flex gap-2'>
            {socialLinks.map(({ name, url, Icon }) => (
                <Tooltip key={name}>
                    <TooltipTrigger asChild>
                        <a href={url} target='_blank'>
                            <Icon size={20} />
                        </a>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{name}</p>
                    </TooltipContent>
                </Tooltip>
            ))}
        </div>
    )
}
