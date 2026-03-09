"use client";

import React, { useEffect, useRef, useState } from "react";

type SkillBarProps = {
  level: number;
};

export const SkillBar: React.FC<SkillBarProps> = ({ level }) => {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedWidth(level);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [level]);

  return (
    <div
      ref={containerRef}
      className="skill-bar-track relative h-2.5 w-full overflow-hidden rounded-full"
    >
      <div
        className="skill-bar-fill h-full rounded-full transition-[width] duration-800 ease-out"
        style={{ width: `${animatedWidth}%` }}
      />
    </div>
  );
};

