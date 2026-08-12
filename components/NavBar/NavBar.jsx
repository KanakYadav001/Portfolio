"use client"

import ThemeToggle from "@/components/ThemeToggle";
import LiveTime from "@/components/LiveTime";

const NavBar = () => {
  return (
    <div className='w-full content-center flex justify-between mt-5 '>
      <p>
        100k visitors
      </p>
      <div className='flex gap-4 content-center'>
          <LiveTime />
        <ThemeToggle />
           
      </div>
    </div>
  )
}

export default NavBar