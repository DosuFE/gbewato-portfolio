"use client";

import React from "react";

type ContactSectionProps = {
  title: string;
  email: string;
  github: string;
  linkedin: string;
};

export const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  email,
  github,
  linkedin,
}) => {
  return (
    <div className="card-surface rounded-2xl px-5 py-5 sm:px-7 sm:py-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-100 sm:text-lg">
            {title}
          </h2>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">
            Reach out if you’d like to collaborate, discuss an idea, or just
            talk about frontend and backend development.
          </p>
        </div>
        <div className="flex gap-2 text-[11px] text-slate-400">
          <span className="chip rounded-full px-3 py-1">
            Prefer async communication
          </span>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <a
          href={`mailto:${email}`}
          className="group flex flex-col justify-between rounded-xl border border-slate-800/80 bg-slate-950/80 px-4 py-3 text-xs text-slate-300 transition-colors hover:border-sky-500/80 hover:bg-slate-900/90"
        >
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Email
            </p>
            <p className="mt-1 break-all text-sm font-medium text-slate-100">
              {email}
            </p>
          </div>
          <span className="mt-2 text-[11px] text-sky-300 group-hover:text-sky-200">
            Say hello →
          </span>
        </a>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col justify-between rounded-xl border border-slate-800/80 bg-slate-950/80 px-4 py-3 text-xs text-slate-300 transition-colors hover:border-sky-500/80 hover:bg-slate-900/90"
        >
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
              GitHub
            </p>
            <p className="mt-1 break-all text-sm font-medium text-slate-100">
              {github}
            </p>
          </div>
          <span className="mt-2 text-[11px] text-sky-300 group-hover:text-sky-200">
            View repositories →
          </span>
        </a>

        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col justify-between rounded-xl border border-slate-800/80 bg-slate-950/80 px-4 py-3 text-xs text-slate-300 transition-colors hover:border-sky-500/80 hover:bg-slate-900/90"
        >
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
              LinkedIn
            </p>
            <p className="mt-1 break-all text-sm font-medium text-slate-100">
              {linkedin}
            </p>
          </div>
          <span className="mt-2 text-[11px] text-sky-300 group-hover:text-sky-200">
            Connect professionally →
          </span>
        </a>
      </div>
    </div>
  );
};

