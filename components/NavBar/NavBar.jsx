"use client";

import ThemeToggle from "@/components/ThemeToggle";
import LiveTime from "@/components/LiveTime";
import VisitorCounter from "@/components/VisitorCounter";
import { Download } from "lucide-react";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between mt-5 items-center gap-2">
      <VisitorCounter />
      <div className="flex gap-3 sm:gap-4 justify-center items-center">
        <LiveTime />
        <a
          href="/Kanak_Yadav_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          download="Kanak_Yadav_Resume.pdf"
          className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-[#161616] border border-zinc-200 dark:border-zinc-800/80 rounded-md text-xs font-mono text-zinc-800 dark:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-pointer"
        >
          <Download className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
          <span>CV</span>
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavBar;