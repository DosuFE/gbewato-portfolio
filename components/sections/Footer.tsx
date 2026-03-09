import React from "react";

type FooterProps = {
  text: string;
};

export const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer className="mt-4 border-t border-slate-800/70 pt-4 text-xs text-slate-500">
      <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
        <p>{text}</p>
        <p className="text-[11px] text-slate-500">
          Built with Next.js, React, Tailwind CSS and a dashboard-style layout.
        </p>
      </div>
    </footer>
  );
};

