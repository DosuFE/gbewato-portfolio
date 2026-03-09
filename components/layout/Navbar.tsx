"use client";

import React from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

type NavbarProps = {
  onOpenSidebar?: () => void;
};

export const Navbar: React.FC<NavbarProps> = ({ onOpenSidebar }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/70 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenSidebar}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 hover:bg-slate-800 lg:hidden"
            aria-label="Open navigation"
          >
            <span className="h-4 w-4">
              <span className="block h-0.5 w-full rounded-full bg-slate-200" />
              <span className="mt-1 block h-0.5 w-full rounded-full bg-slate-200" />
              <span className="mt-1 block h-0.5 w-full rounded-full bg-slate-200" />
            </span>
          </button>
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Dashboard
            </span>
            <span className="text-sm font-semibold text-slate-100">
              Gbewato Portfolio
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-2 text-xs font-medium text-slate-400 sm:flex">
            <button
              type="button"
              onClick={() => handleScrollTo("hero")}
              className="rounded-full px-3 py-1.5 hover:bg-slate-900/80 hover:text-slate-100"
            >
              Overview
            </button>
            <button
              type="button"
              onClick={() => handleScrollTo("skills")}
              className="rounded-full px-3 py-1.5 hover:bg-slate-900/80 hover:text-slate-100"
            >
              Skills
            </button>
            <button
              type="button"
              onClick={() => handleScrollTo("projects")}
              className="rounded-full px-3 py-1.5 hover:bg-slate-900/80 hover:text-slate-100"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => handleScrollTo("contact")}
              className="rounded-full px-3 py-1.5 hover:bg-slate-900/80 hover:text-slate-100"
            >
              Contact
            </button>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

