import React from 'react'
import Footer from '@/components/Footer/Footer'
import Github from '@/components/GitHubAct/Github'
import Intro from '@/components/Intro/Intro'
import NavBar from '@/components/NavBar/NavBar'
import Project from '@/components/Project/Project'
import Social from '@/components/social/social'
import Experience from '@/components/Experience/Experience'
import Skills from '@/components/skillTool/skillTool'



const page = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-15 h-fit w-full max-w-[600px] px-4 sm:px-0 overflow-x-hidden self-center scrollbar-none'>
      <NavBar />
      <Intro />
      <Experience />
      <Project />
      <Skills />
      <Github />
      <Social />
      <Footer />


    </div>
  )
}

export default page