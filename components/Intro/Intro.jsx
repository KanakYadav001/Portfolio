import React from 'react'

const Intro = () => {
  return (
    <div className='w-full flex flex-col'>
     <div className='mb-6'  >
      <h1 className='font-bold'>Kanak Yadav</h1>
      <p>Full-stack Developer</p>
     </div>

     <div className='flex flex-col gap-5'>
       <p>I’m a Full-Stack Developer focused on building clean, scalable, and user-friendly applications.
       </p>
       <p>I’ve worked as a Backend Development Intern at <span className='font-bold'>
Graphura India Private Limited</span>, building APIs and server-side applications.</p>
       <p>I work primarily with <span className='font-bold'>Next.js</span> , <span className='font-bold'>React</span> , <span className='font-bold'>Node.js</span> , <span className='font-bold'>Express</span> , <span className='font-bold'>TypeScript</span> , <span className='font-bold'>MongoDB</span> , and REST APIs.</p>
       <p>I enjoy building real-world products, backend systems, and AI-powered applications.</p>
     </div>
   
     

    </div>
  )
}

export default Intro