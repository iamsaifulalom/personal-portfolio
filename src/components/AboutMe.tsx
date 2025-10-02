import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="mt-5 p-4 lg:px-6 xl:px-10">
      <h1 className='text-sm font-fira-code font-bold'>.../About me...</h1>
      <p className='mt-5 md:text-center'>
        Hello! I&apos;m Saiful. I&apos;m a <span> full-stack <br />
          developer.</span> More then <span>2 years</span> <br /> experience
      </p>
      <div className='md:flex gap-10'>


        <Image
          width={100}
          height={100}
          src="/images/th-1.jpg"
          className='aspect-[1/1.2] max-w-[400px] max-h-[300px] md:order-2 w-full grayscale object-cover rounded-4xl mt-5'
          alt=""
        />

        <div>
          {/* frontend skills */}
          <div className="mt-5 bg-foreground text-background p-6 rounded-4xl">
            <h1 className="text-lg">Front-end</h1>
            <span className="font-fira-code text-sm">
              javascript / typescrit / react / nextjs /
              zustand / jwt / figma / vercel /
              rect-native / rest-api / socket.io /
              jest / playwright
            </span>
          </div>
          {/* Styles */}
          <div className="flex items-center justify-between">
            <div className="mt-5 border border-gray text-foreground p-6 rounded-4xl">
              <h1 className="text-lg">Styles</h1>
              <span className="font-fira-code text-sm">
                css / tailwind / shadcn ui
              </span>
            </div>
            <div>
              icons
            </div>
          </div>

          {/* backend skills */}
          <div className="mt-5  border border-gray text-foreground p-6 rounded-4xl">
            <h1 className="text-lg">Front-end</h1>
            <span className="font-fira-code text-sm">
              javascript / typescrit / nodejs / nextjs /
              expressjs / jwt / mongodb / SQL /
              rest-api / socket.io /
              jest / supertest
            </span>
          </div>

          {/* debops */}
          <div className="flex items-center gap-3 justify-between">
            <p>
              Some  of my <span>favorite technologies, topics, or tools</span> that i work with
            </p>
            <div className="mt-5 w-full border border-gray text-foreground p-6 rounded-4xl">
              <h1 className="text-lg">DevOps</h1>
              <span className="font-fira-code text-sm">
                vps / nginx / (CI/CD) / docker / bash
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
