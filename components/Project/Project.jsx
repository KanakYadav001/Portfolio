"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Zoro AI",
    description:
      "Real-Time RAG AI Chat Platform built with React 19, Tailwind CSS v4, Node.js, Express, Socket.IO, Groq LLM, Pinecone Vector DB, and MongoDB.",
    details: [
      "Full-stack real-time AI chat application with Socket.IO communication.",
      "Contextual vector memory retrieval using Pinecone Vector DB and Google GenAI embeddings.",
      "Tavily web search integration for fetching fresh real-time web context.",
      "JWT authentication and automated email notification flow via Nodemailer (Gmail OAuth2).",
      "Minimalist Linear/Raycast-inspired user interface powered by React 19, Vite, and Framer Motion."
    ],
    skills: ["React", "Node.js", "Express", "Socket.IO", "Groq LLM", "Pinecone", "MongoDB", "TailwindCSS"],
    github: "https://github.com/KanakYadav001/ZORO-BOT-AI",
    demo: "https://zoro-bot-ai.vercel.app/"
  },
  {
    id: 2,
    title: "LinkShortner",
    description:
      "Full-stack URL shortening service with custom slugs, password protection, one-time links, and click analytics.",
    details: [
      "Shorten long URLs into shareable links with custom slug creation.",
      "Protect links with password access and one-time-use auto-expiration capabilities.",
      "Track total clicks, unique visitors, and analytics for each link.",
      "Private user dashboard to manage links and profile settings.",
      "REST API built with Node.js, Express, and MongoDB, with React + Vite SPA frontend."
    ],
    skills: ["React", "Vite", "Node.js", "Express", "MongoDB", "REST APIs", "TailwindCSS"],
    github: "https://github.com/KanakYadav001/Link-Shorter",
    demo: "https://link-shorter-chi.vercel.app/"
  }
];

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full bg-zinc-100 dark:bg-[#161616] border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-5 transition-all flex flex-col gap-3">
      {/* Title */}
      <h3 className="font-semibold text-zinc-900 dark:text-white text-base">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {project.description}
      </p>

      {/* Expanded Content */}
      {expanded && (
        <div className="flex flex-col gap-3 pt-1">
          <div className="w-full h-[1px] bg-zinc-200 dark:bg-zinc-800/80 my-1" />

          {/* Details List */}
          <div className="flex flex-col gap-2 text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {project.details.map((point, index) => (
              <p key={index}>{point}</p>
            ))}
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 text-[11px] font-mono bg-zinc-200/80 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 rounded-md text-zinc-700 dark:text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Row */}
      <div className="flex justify-between items-center pt-2 mt-auto">
        {/* Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer focus:outline-none"
        >
          <span>Know More</span>
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Links */}
        <div className="flex items-center gap-4 text-xs">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <span>Repo</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium transition-colors"
            >
              <span>Visit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="font-bold">Projects I've Built</h1>
      <div className="w-full flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
