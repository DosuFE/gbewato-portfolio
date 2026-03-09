"use client";

import React from "react";

type AboutSectionProps = {
  title: string;
  bio: string;
  frontendFocus: string;
  learningBackend: string;
};

export const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  bio,
  frontendFocus,
  learningBackend,
}) => {
  return (
    <div className="card-surface grid gap-6 rounded-2xl px-5 py-5 sm:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] sm:px-7 sm:py-6">
      <div>
        <h2 className="text-base font-semibold text-slate-100 sm:text-lg">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{bio}</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          {frontendFocus}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-sky-200">
          {learningBackend}
        </p>
      </div>

      <div className="space-y-3 rounded-2xl bg-slate-950/70 p-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
          Snapshot
        </p>
        <div className="space-y-3 text-sm text-slate-200">
          <div className="flex items-center justify-between rounded-xl bg-slate-900/80 px-3 py-2.5">
            <span className="text-xs text-slate-300">Specialization</span>
            <span className="text-xs font-semibold text-sky-300">
              Frontend development
            </span>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-slate-900/80 px-3 py-2.5">
            <span className="text-xs text-slate-300">Currently learning</span>
            <span className="text-xs font-semibold text-emerald-300">
              Backend & APIs
            </span>
          </div>
          <div className="rounded-xl bg-slate-900/80 px-3 py-2.5 text-xs text-slate-300">
            <p>
              I enjoy working closely with designers and other developers to
              ship thoughtful, production-ready features that feel great to
              use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

