"use client";

import React from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
};

type ProjectsSectionProps = {
  title: string;
  subtitle?: string;
  projects: Project[];
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  title,
  subtitle,
  projects,
}) => {
  return (
    <div className="card-surface rounded-2xl px-5 py-5 sm:px-7 sm:py-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-100 sm:text-lg">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(34,197,94,0.5)]" />
          <span>Built with Next.js, React, Tailwind CSS</span>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

