"use client";
/* eslint-disable @next/next/no-html-link-for-pages */

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar, type NavSection } from "@/components/layout/Sidebar";
import { Hero } from "@/components/sections/Hero";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

const navSections: NavSection[] = [
  { id: "hero", label: "Overview" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const skills = [
  { name: "HTML", level: 100 },
  { name: "CSS", level: 100 },
  { name: "Tailwind CSS", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },
] as const;

const projects = [
  {
    title: "Developer Portfolio Dashboard",
    description:
      "A responsive dashboard-style portfolio showcasing skills, projects, and contact details with dark/light theme support.",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    image: "/dashboard-portfolio.png",
    githubUrl: "https://github.com/your-username/dashboard-portfolio",
    liveUrl: "https://your-portfolio-demo.com",
  },
  {
    title: "Frontend Component Library",
    description:
      "A collection of reusable UI components built with React and Tailwind CSS, focused on developer productivity.",
    techStack: ["React", "Tailwind CSS", "Storybook"],
    image: "/component-library.png",
    githubUrl: "https://github.com/your-username/frontend-components",
    liveUrl: "https://frontend-components-demo.com",
  },
  {
    title: "Interactive Dev Blog",
    description:
      "A modern blog platform for sharing learning notes about frontend and backend development.",
    techStack: ["Next.js", "MDX", "Tailwind CSS"],
    image: "/dev-blog.png",
    githubUrl: "https://github.com/your-username/dev-blog",
    liveUrl: "https://dev-blog-demo.com",
  },
];

export default function Home() {
  const [activeSectionId, setActiveSectionId] = useState<string>("hero");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="dashboard-shell flex min-h-screen overflow-x-hidden text-[color:var(--foreground)]">
      <Sidebar
        sections={navSections}
        activeSectionId={activeSectionId}
        onNavigate={setActiveSectionId}
        isOpenOnMobile={isSidebarOpen}
        onCloseMobile={() => setIsSidebarOpen(false)}
      />

      <div className="flex min-h-screen flex-1 flex-col">
        <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />

        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          <section id="hero" className="scroll-mt-24">
            <Hero
              name="Your Name"
              role="Frontend Developer"
              description="Frontend-focused developer currently learning backend technologies, crafting modern interfaces with React, Next.js, and Tailwind CSS."
              techStack={["Next.js", "React", "Tailwind CSS", "JavaScript", "HTML", "CSS"]}
            />
          </section>

          <section id="skills" className="scroll-mt-24">
            <SkillsSection
              title="Skills overview"
              subtitle="A quick snapshot of the technologies I work with day-to-day."
              skills={skills.map((skill) => ({
                name: skill.name,
                level: skill.level,
              }))}
            />
          </section>

          <section id="projects" className="scroll-mt-24">
            <ProjectsSection
              title="Featured projects"
              subtitle="Hands-on projects that highlight how I apply frontend skills in real-world scenarios."
              projects={projects}
            />
          </section>

          <section id="about" className="scroll-mt-24">
            <AboutSection
              title="About me"
              bio="I specialize in building clean, accessible frontend experiences with React and Next.js. I love turning complex requirements into simple, intuitive interfaces."
              frontendFocus="My main focus is on modern frontend development—component-driven architectures, design systems, and high-quality user experiences."
              learningBackend="Alongside frontend work, I am currently learning backend development to become more comfortable designing full-stack applications and APIs."
            />
          </section>

          <section id="contact" className="scroll-mt-24">
            <ContactSection
              title="Let’s build something"
              email="your.email@example.com"
              github="https://github.com/your-username"
              linkedin="https://www.linkedin.com/in/your-profile"
            />
          </section>

          <Footer text="© 2026 Your Name. Built with Next.js, React & Tailwind CSS." />
        </main>
      </div>
    </div>
  );
}
