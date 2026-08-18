import React from 'react'

const Intro = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className='mb-6'>
        <h1 className='font-bold'>Kanak Yadav</h1>
        <p>Full-stack Developer</p>
      </div>

      <div className='flex flex-col gap-5'>
        <p>
          I’m a Full-Stack Developer focused on building clean, scalable, and user-friendly applications.
        </p>
        <p className="leading-relaxed">
          I’ve worked as a Backend Development Intern at{' '}
          <a
            href="https://www.linkedin.com/showcase/internship-in-graphura-india-private-limited"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 mx-1 my-0.5 rounded-md bg-zinc-100 dark:bg-[#1A1A18] border border-zinc-300 dark:border-zinc-700/60 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-gray-800 transition-all text-sm font-medium align-middle"
          >
            <img src="/Graphura.png" alt="Graphura" className="w-4 h-4 object-contain rounded-xs" />
            <span>Graphura</span>
          </a>
          , building APIs and server-side applications.
        </p>
        <p>
          I work primarily with <span className='font-bold'>Next.js</span>, <span className='font-bold'>React</span>, <span className='font-bold'>Node.js</span>, <span className='font-bold'>Express</span>, <span className='font-bold'>TypeScript</span>, <span className='font-bold'>MongoDB</span>, and REST APIs.
        </p>
        <p>
          I enjoy building real-world products, backend systems, and AI-powered applications.
        </p>
      </div>
    </div>
  )
}

export default Intro
