"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type NavSection = {
  id: string;
  label: string;
  icon?: React.ReactNode;
};

type SidebarProps = {
  sections: NavSection[];
  activeSectionId?: string;
  onNavigate?: (id: string) => void;
  isOpenOnMobile: boolean;
  onCloseMobile?: () => void;
};

export const Sidebar: React.FC<SidebarProps> = ({
  sections,
  activeSectionId,
  onNavigate,
  isOpenOnMobile,
  onCloseMobile,
}) => {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onNavigate?.(id);
    onCloseMobile?.();
  };

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-slate-800/70 bg-black/40 px-4 py-6 backdrop-blur-xl lg:flex lg:flex-col lg:gap-6">
        <div className="flex items-center gap-3 px-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 text-sm font-semibold text-white shadow-lg shadow-sky-500/40">
            DG
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium tracking-tight text-slate-100">
              Gbewato Portfolio
            </span>
            <span className="text-xs text-slate-400">
              Frontend • Learning Backend
            </span>
          </div>
        </div>

        <nav className="mt-4 flex flex-1 flex-col gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => handleClick(section.id)}
              className={cn(
                "nav-link flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-sm font-medium text-slate-300 hover:border-slate-700/80 hover:bg-slate-900/60",
                activeSectionId === section.id && "nav-link-active",
              )}
            >
              {section.icon && (
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900/80 text-slate-300">
                  {section.icon}
                </span>
              )}
              <span>{section.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto rounded-xl border border-slate-800/80 bg-slate-950/70 px-3 py-3 text-xs text-slate-400">
          <p className="font-medium text-slate-300">Currently building</p>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
            Modern frontend experiences with React, Next.js & Tailwind CSS,
            while exploring backend development.
          </p>
        </div>
      </aside>

      {/* Mobile sidebar overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden",
          isOpenOnMobile ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!isOpenOnMobile}
        onClick={onCloseMobile}
      />
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-800/70 bg-black/85 px-4 py-6 backdrop-blur-2xl transition-transform duration-200 lg:hidden",
          isOpenOnMobile ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between gap-3 px-1">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 text-sm font-semibold text-white shadow-lg shadow-sky-500/40">
              DG
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium tracking-tight text-slate-100">
                Gbewato Portfolio
              </span>
              <span className="text-xs text-slate-400">
                Frontend • Learning Backend
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onCloseMobile}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 text-slate-300 hover:bg-slate-800"
            aria-label="Close navigation"
          >
            ✕
          </button>
        </div>

        <nav className="mt-6 flex flex-1 flex-col gap-1 overflow-y-auto soft-scrollbar">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => handleClick(section.id)}
              className={cn(
                "nav-link flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm font-medium text-slate-300 hover:border-slate-700/80 hover:bg-slate-900/70",
                activeSectionId === section.id && "nav-link-active",
              )}
            >
              {section.icon && (
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900/80 text-slate-300">
                  {section.icon}
                </span>
              )}
              <span>{section.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

