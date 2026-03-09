"use client";

import React from "react";
import { SkillBar } from "@/components/ui/SkillBar";

type SkillCardProps = {
  name: string;
  level: number;
};

export const SkillCard: React.FC<SkillCardProps> = ({ name, level }) => {
  return (
    <div className="rounded-xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 shadow-[0_14px_35px_rgba(15,23,42,0.9)]">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-100">{name}</p>
        <p className="text-xs font-semibold text-sky-300">{level}%</p>
      </div>
      <div className="mt-2">
        <SkillBar level={level} />
      </div>
    </div>
  );
};

