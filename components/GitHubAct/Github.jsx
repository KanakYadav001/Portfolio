"use client";

import {GitHubCalendar} from "react-github-calendar";

const Github = () => {
  return (
    <div className='w-full'>
      <h1 className='mb-5'>GitHub Activity</h1>
     <div className='w-full flex justify-center items-center bg-[#1A1A18]  scrollbar-none '>
       <GitHubCalendar  username="KanakYadav001" blockSize={8}
  blockMargin={3}
  fontSize={12} />
     </div>

    </div>
  )
}

export default Github