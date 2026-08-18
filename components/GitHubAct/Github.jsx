"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Github = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className='w-full'>
      <h1 className='mb-5'>GitHub Activity</h1>
      <div className='w-full flex justify-center items-center bg-zinc-100 dark:bg-[#1A1A18] rounded-lg p-2 scrollbar-none'>
        <GitHubCalendar
          username="KanakYadav001"
          blockSize={8}
          blockMargin={3}
          fontSize={12}
          colorScheme={mounted && resolvedTheme === "light" ? "light" : "dark"}
        />
      </div>
    </div>
  );
};

export default Github;