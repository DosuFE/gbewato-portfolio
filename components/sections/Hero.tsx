"use client";

import React from "react";

type HeroProps = {
  name: string;
  role: string;
  description: string;
  techStack: string[];
};

export const Hero: React.FC<HeroProps> = ({
  name,
  role,
  description,
  techStack,
}) => {
  return (
    <main className="card-surface relative overflow-hidden rounded-2xl px-5 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-8">
      <section className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen">
        <div className="absolute -left-20 -top-24 h-44 w-44 rounded-full bg-sky-500/40 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-52 w-52 rounded-full bg-indigo-500/35 blur-3xl" />
      </section>

      <section className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(34,197,94,0.35)]" />
            Available for opportunities
          </span>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-4xl">
            {name}
          </h1>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
            {role} &bull; Currently learning backend
          </p>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-[15px]">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="chip inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-slate-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 w-full max-w-xs shrink-0 sm:mt-0 sm:w-60 lg:w-64">
          <div className="glass-surface relative overflow-hidden rounded-2xl px-4 py-4">
            <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
              <span className="font-medium text-slate-200">Profile snapshot</span>
              <span className="rounded-full bg-slate-900/70 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-sky-300">
                Frontend first
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between rounded-xl bg-slate-900/90 px-3 py-2.5">
                <div className="flex flex-col">
                  <span className="text-[11px] text-slate-400">Primary stack</span>
                  <span className="text-xs font-semibold text-slate-100">
                    Next.js • React • Tailwind
                  </span>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold text-emerald-300">
                  UI focused
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl bg-slate-900/80 px-3 py-2">
                  <p className="text-[11px] text-slate-400">Strength</p>
                  <p className="text-xs font-semibold text-slate-100">
                    Frontend engineering
                  </p>
                </div>
                <div className="rounded-xl bg-slate-900/80 px-3 py-2">
                  <p className="text-[11px] text-slate-400">Currently learning</p>
                  <p className="text-xs font-semibold text-sky-300">
                    Backend & APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

