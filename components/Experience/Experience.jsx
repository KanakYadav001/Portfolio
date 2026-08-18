"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Intern",
    company: "Graphura India Private Limited",
    logo: "/Graphura.png",
    period: "Jun 15 - Aug 2026",
    shortDescription: "Backend Developer building Admin Ops APIs, Plans catalog, Support Tickets, Notifications, and Audit Logs.",
    details: [
      "Built CRUD API endpoints for the pricing catalog (Plans) consumed by tier authorization middleware.",
      "Developed support ticket management APIs allowing admins to list, respond to, and assign tickets.",
      "Implemented notification routes and broadcast creation logic for system dispatches.",
      "Created read-only audit log list and filtering endpoints to track system activities and admin operations."
    ],
    skills: ["Node.js", "Express", "TypeScript", "MongoDB", "REST APIs"]
  }
];

const ExperienceCard = ({ exp }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full bg-zinc-100 dark:bg-[#161616] border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-5 transition-all flex flex-col gap-3">
      {/* Header */}
      <div className="flex justify-between items-baseline gap-2">
        <h3 className="font-semibold text-zinc-900 dark:text-white text-base">
          {exp.role}
        </h3>
        <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono shrink-0">
          {exp.period}
        </span>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-2">
        {exp.logo && (
          <img
            src={exp.logo}
            alt={exp.company}
            className="w-5 h-5 object-contain rounded-xs shrink-0"
          />
        )}
        <h4 className="font-medium text-zinc-800 dark:text-zinc-200 text-sm">
          {exp.company}
        </h4>
      </div>

      {/* Short Summary */}
      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {exp.shortDescription}
      </p>

      {/* Expanded Content */}
      {expanded && (
        <div className="flex flex-col gap-3 pt-1">
          <div className="w-full h-[1px] bg-zinc-200 dark:bg-zinc-800/80 my-1" />

          {/* Details List */}
          <div className="flex flex-col gap-2 text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {exp.details.map((point, index) => (
              <p key={index}>{point}</p>
            ))}
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {exp.skills.map((skill) => (
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

      {/* Toggle Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer w-fit pt-1 focus:outline-none"
      >
        <span>Know More</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="font-bold">Experience</h1>
      <div className="w-full flex flex-col gap-4">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
