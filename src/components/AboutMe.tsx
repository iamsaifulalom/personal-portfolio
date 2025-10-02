import Image from "next/image";

export default function AboutMe() {
  return (
    <div className='mt-5'>
      <h1 className='text-sm font-fira-code font-bold'>.../About me...</h1>
      <p className='mt-5'>
        Hello! I&apos;m Saiful. I&apos;m a <span> full-stack <br />
          developer.</span> More then <span>2 years</span> <br /> experience
      </p>

      <Image
        width={100}
        height={100}
        src="/images/th-1.jpg"
        className='aspect-[1/1.2] object-cover rounded-4xl mt-5'
        alt=""
      />
    </div>
  )
}
