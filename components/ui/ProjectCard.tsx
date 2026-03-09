"use client";

import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  image,
  githubUrl,
  liveUrl,
}) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/70 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transition-transform duration-150 hover:-translate-y-1 hover:border-sky-500/60">
      <div className="relative h-40 overflow-hidden bg-slate-900/90">
        {/* Placeholder image area */}
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/25 via-indigo-500/30 to-fuchsia-500/20 opacity-70" />
        <div className="relative flex h-full items-end justify-between px-4 pb-3">
          <div className="space-y-1 text-xs text-slate-200">
            <p className="font-medium text-slate-50">{title}</p>
            <p className="text-[11px] text-slate-200/80">
              Preview illustration ({image || "project image"})
            </p>
          </div>
          <span className="rounded-full bg-black/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-200">
            Case study
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
        <p className="text-sm text-slate-300">{description}</p>

        <div className="flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="chip rounded-full px-2.5 py-1 text-[11px] font-medium text-slate-100"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-2 text-xs font-medium">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/90 px-3 py-1.5 text-slate-100 ring-1 ring-slate-700/80 transition-colors hover:bg-slate-800 hover:text-sky-200 hover:ring-sky-500/80"
          >
            <span>GitHub</span>
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/90 px-3 py-1.5 text-slate-900 shadow-lg shadow-sky-500/40 transition-colors hover:bg-sky-400"
          >
            <span>Live demo</span>
          </a>
        </div>
      </div>
    </article>
  );
};

