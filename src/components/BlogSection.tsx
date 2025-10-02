import { blogs } from '@/constants/blog'
import BlogCard from './ui/BlogCard'

export default function BlogSection() {
  return (
    <div className='mt-5 gap-3 overflow-x-scroll flex flex-row'>
      {blogs.map((props) => (
        <BlogCard {...props} key={props.title} />
      ))}
    </div>
  )
}
