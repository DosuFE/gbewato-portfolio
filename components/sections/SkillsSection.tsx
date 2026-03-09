"use client";

import React from "react";
import { SkillCard } from "@/components/ui/SkillCard";

type SkillsSectionProps = {
  title: string;
  subtitle?: string;
  skills: { name: string; level: number }[];
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  title,
  subtitle,
  skills,
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
        <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
          <span className="chip rounded-full px-3 py-1">
            Focused on frontend craft
          </span>
          <span className="chip rounded-full px-3 py-1">
            Currently expanding backend skills
          </span>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
};

