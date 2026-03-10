"use client";

import React from "react";
import { useTheme } from "@/components/theme/ThemeProvider";

type ThemeToggleProps = {
  ariaLabel?: string;
};

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ ariaLabel }) => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-14 items-center rounded-full border border-slate-700/80 bg-slate-900/90 px-1 text-slate-300 shadow-[0_0_0_1px_rgba(15,23,42,0.8)] transition-colors duration-200 hover:border-slate-500/90 hover:bg-slate-900"
      aria-label={ariaLabel ?? "Toggle theme"}
    >
      <span
        className={`theme-toggle-thumb flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs text-slate-800 transition-transform duration-200 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? "☾" : "☼"}
      </span>
      <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 text-[10px] font-semibold uppercase tracking-[0.18em]">
        <span
          className={`transition-opacity ${
            !isDark ? "opacity-100 text-slate-100" : "opacity-40"
          }`}
        ></span>
        <span
          className={`transition-opacity ${
            isDark ? "opacity-100 text-slate-100" : "opacity-40"
          }`}
        ></span>
      </span>
    </button>
  );
};

