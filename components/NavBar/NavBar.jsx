"use client"

import ThemeToggle from "@/components/ThemeToggle";
import LiveTime from "@/components/LiveTime";

const NavBar = () => {
  return (
    <div className='w-full flex justify-between mt-5 items-center'>
      <p>
        100k visitors
      </p>
      <div className='flex gap-4  justify-center items-center'>
          <LiveTime />
        <ThemeToggle />
           
      </div>
    </div>
  )
}

export default NavBar