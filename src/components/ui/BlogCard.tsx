import Button from './Button';

export default function BlogCard({ thumbnail, title, description }: BlogCardProps) {
  return (
    <div className='relative rounded-4xl w-[300px] shrink-0 overflow-hidden aspect-[1/1.2]'>
      <img src={thumbnail} alt={title} className='w-full h-full object-cover' />
      <div className='absolute bottom-0 p-4 left-0 bg-black/80'>
        <h1 className='line-clamp-2 font-fira-code text-xl'>{title}</h1>
        <p className='line-clamp-3 mt-3 font-open-sans text-sm'>{description}</p>
        <div className='flex gap-3 mt-5'>
          <Button label='Read more' />
          <Button variant='small'>
            <svg
              width="16"
              height="8"
              viewBox="0 0 16 8"
              fill="none"
            >
              <path
                d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4L0 4.5L15 4.5V4V3.5L0 3.5L0 4Z"
                fill="black"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}


type BlogCardProps = {
  thumbnail: string,
  title: string,
  description: string
}
