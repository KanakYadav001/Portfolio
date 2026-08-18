import React from "react";

const categories = [
  {
    title: "LANGUAGES",
    skills: [
      {
        name: "TypeScript",
        icon: (
          <span className="w-4 h-4 bg-[#3178C6] text-white text-[9px] font-bold rounded flex items-center justify-center font-mono">
            TS
          </span>
        ),
      },
      {
        name: "JavaScript",
        icon: (
          <span className="w-4 h-4 bg-[#F7DF1E] text-black text-[9px] font-bold rounded flex items-center justify-center font-mono">
            JS
          </span>
        ),
      },
      {
        name: "Java",
        icon: (
          <svg className="w-4 h-4 text-[#E51F24]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.17 18.06s-1.12.39.84.55c2.37.19 3.66.17 6.27-.24 0 0 .73.49 1.83.9-3.23.86-8.94.3-8.94-.3 0 0 .19-.48 0-.91zm-1.04-2.58s-1.16.48 1.05.62c2.72.17 4.9.15 8.79-.34 0 0 .52.41 1.45.69-4.22.75-11.29.58-11.29-.27 0 0 .61-.39 0-.7zm10.59 1.46c-1.39.29-2.92.42-4.47.42-2.12 0-3.92-.25-4.83-.58.74-.29 2.05-.51 3.52-.51 2.02 0 4.19.42 5.78.67zM11.69 8.2s-2.02.83-4.82 2.65c-2.31 1.5-1.57 2.69-.32 2.76 1.46.08 3.51-.51 5.34-1.74 1.81-1.22 1.47-2.61-.2-3.67zM12.92 2.02s1.42 1.58.4 3.42c-.85 1.52-2.5 2.55-3.32 4.16 0 0 1.25-.43 2.53-1.63 1.55-1.46 1.83-3.64.39-5.95zm-3.26 1.93s-1.65 1.87-2.59 3.53c-.76 1.34-1.27 3.32 1.08 4.79 0 0-1.89-.37-2.22-1.99-.41-2.03.95-3.79 3.73-6.33z"/>
          </svg>
        ),
      },
    ],
  },
  {
    title: "FRAMEWORKS",
    skills: [
      {
        name: "Next.js",
        icon: (
          <svg className="w-4 h-4 text-zinc-900 dark:text-white" viewBox="0 0 180 180" fill="currentColor">
            <mask id="mask-next" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
              <rect width="180" height="180" fill="#fff" />
            </mask>
            <path d="M149.508 157.52L69.142 54H54v71.97h12.196V73.684l69.763 90.25a89.454 89.454 0 008.549-6.414zM126 54h-12.196v72H126V54z" />
            <path fillRule="evenodd" clipRule="evenodd" d="M90 180c49.706 0 90-40.294 90-90s-40.294-90-90-90-90 40.294-90 90 40.294 90 90 90zm0-12c43.078 0 78-34.922 78-78s-34.922-78-78-78-78 34.922-78 78 34.922 78 78 78z" />
          </svg>
        ),
      },
      {
        name: "React",
        icon: (
          <svg className="w-4 h-4 text-[#61DAFB]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
            <ellipse cx="50" cy="50" rx="42" ry="16" />
            <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(60 50 50)" />
            <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(120 50 50)" />
            <circle cx="50" cy="50" r="7" fill="currentColor" stroke="none" />
          </svg>
        ),
      },
      {
        name: "Node.js",
        icon: (
          <svg className="w-4 h-4 text-[#5FA04E]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.31l7.67 4.22v8.44L12 21.19l-7.67-4.22V8.53L12 4.31z" />
          </svg>
        ),
      },
      {
        name: "Express.js",
        icon: (
          <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-400 font-mono">
            ex
          </span>
        ),
      },
      {
        name: "TailwindCSS",
        icon: (
          <svg className="w-4 h-4 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "DATA & BACKEND",
    skills: [
      {
        name: "MongoDB",
        icon: (
          <svg className="w-4 h-4 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C12 2 6.5 7.5 6.5 13.5C6.5 16.54 8.96 19 12 19C15.04 19 17.5 16.54 17.5 13.5C17.5 7.5 12 2 12 2ZM12.75 17.93V14H11.25V17.93C9.48 17.65 8 16.03 8 13.5C8 9.8 11.25 5.2 12 4.15C12.75 5.2 16 9.8 16 13.5C16 16.03 14.52 17.65 12.75 17.93Z" />
          </svg>
        ),
      },
      {
        name: "PostgreSQL",
        icon: (
          <svg className="w-4 h-4 text-[#4169E1]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-2h2zm0-4h-2V7h2z" />
          </svg>
        ),
      },
      {
        name: "NeonDB",
        icon: (
          <svg className="w-4 h-4 text-[#00E599]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.3l6 3.75v7.5L12 19.3l-6-3.75v-7.5L12 4.3z" />
          </svg>
        ),
      },
      {
        name: "Redis",
        icon: (
          <svg className="w-4 h-4 text-[#DC382D]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zm0 9L2 16l10 5 10-5-10-5z" />
          </svg>
        ),
      },
      {
        name: "Zod",
        icon: (
          <svg className="w-4 h-4 text-[#3E67B1]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 12l10 10 10-10L12 2zm0 4.5l6.5 6.5-6.5 6.5-6.5-6.5L12 6.5z" />
          </svg>
        ),
      },
      {
        name: "WebSocket",
        icon: (
          <svg className="w-4 h-4 text-[#F59E0B]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14h-2v-4h2zm0-6h-2V6h2z" />
          </svg>
        ),
      },
      {
        name: "Pinecone",
        icon: (
          <svg className="w-4 h-4 text-[#10B981]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L3 9l9 13 9-13-9-7zm0 3.5L17.5 10 12 18.5 6.5 10 12 5.5z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "TOOLS & DEVOPS",
    skills: [
      {
        name: "Git",
        icon: (
          <svg className="w-4 h-4 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.6 10.9L13.1 2.4c-.8-.8-2.1-.8-2.9 0L8.7 3.9l3.7 3.7c.6-.2 1.3-.1 1.8.4.6.6.7 1.5.3 2.2l3.4 3.4c.7-.4 1.6-.3 2.2.3.8.8.8 2.1 0 2.9s-2.1.8-2.9 0c-.6-.6-.7-1.5-.4-2.2L13.4 11v4.7c.3.2.5.6.5 1 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.4.2-.8.5-1V10.4c-.3-.2-.5-.6-.5-1 0-.6.4-1.2 1-1.4L8.1 4.2 2.4 9.9c-.8.8-.8 2.1 0 2.9l8.5 8.5c.8.8 2.1.8 2.9 0l7.8-7.8c.8-.8.8-2.1 0-2.6z" />
          </svg>
        ),
      },
      {
        name: "Postman",
        icon: (
          <svg className="w-4 h-4 text-[#FF6C37]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2A10 10 0 1 0 22 12 10 10 0 0 0 12 2zm3.8 8.5l-4.5 4.5a.7.7 0 0 1-1 0l-2.5-2.5a.7.7 0 0 1 1-1l2 2 4-4a.7.7 0 0 1 1 1z" />
          </svg>
        ),
      },
      {
        name: "VS Code",
        icon: (
          <svg className="w-4 h-4 text-[#007ACC]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63L2.83 5.92a.75.75 0 0 0-1.03.18L.22 8.42a.75.75 0 0 0 .15 1.04l4.9 3.54-4.9 3.54a.75.75 0 0 0-.15 1.04l1.58 2.32a.75.75 0 0 0 1.03.18l4.215-3.21 9.46 8.63c.49.447 1.2.564 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 22.25V3.75a1.5 1.5 0 0 0-.85-1.163z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "AI & STATE",
    skills: [
      {
        name: "Langchain",
        icon: (
          <svg className="w-4 h-4 text-[#10B981]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2a2 2 0 0 1-2 2h-2v-2H8a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2V4a2 2 0 0 1 2-2z" />
          </svg>
        ),
      },
     
    ],
  },
];

const SkillTool = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <h1 className="font-bold">Skills & Tools</h1>

      <div className="flex flex-col gap-6">
        {categories.map((category) => (
          <div key={category.title} className="flex flex-col gap-2.5">
            <h2 className="text-[11px] font-mono tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
              {category.title}
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2.5 px-3 py-2 bg-zinc-100 dark:bg-[#161616] border border-zinc-200 dark:border-zinc-800/80 rounded-lg text-xs font-mono text-zinc-800 dark:text-zinc-200 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 cursor-default"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillTool;