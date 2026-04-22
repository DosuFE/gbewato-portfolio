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
  { name: "NestJS", level: 60 },
  { name: "PostgreSQL", level: 80 },
  { name: "MongoDB", level: 60 },
  { name: "Git & GitHub", level: 90 }
] as const;

const projects = [
  {
    title: "REST Countries Explorer",
    description:
      "A responsive web application that displays information about countries around the world using the REST Countries API. It includes real-time search, region filtering, and dynamic rendering of population, region, capital, and flag details.",
    techStack: ["HTML", "CSS", "JavaScript", "REST Countries API"],
    image: "/rest-countries.png",
    githubUrl: "https://github.com/DosuFE/rest-countries-api",
    liveUrl: "https://rest-countries-api-pied-nine.vercel.app/",
  },
  {
    title: "PlexTV Streaming UI",
    description:
      "A responsive streaming platform UI inspired by Netflix, built to practice Tailwind CSS utility classes, layout techniques, and modern landing page design.",
    techStack: ["HTML", "Tailwind CSS"],
    image: "/plex-tv.png",
    githubUrl: "https://github.com/DosuFE/plex",
    liveUrl: "https://plex-drab.vercel.app/",
  },
  {
    title: "Food Restaurant Web App",
    description:
      "A modern and responsive restaurant web application built with React and Tailwind CSS. It showcases a component-based architecture, reusable UI components, and dynamic data rendering from a JSON-driven menu.",
    techStack: ["React", "Tailwind CSS"],
    image: "/food-restuarant.png",
    githubUrl: "https://github.com/DosuFE/food-restuarant",
    liveUrl: "https://food-restuarant.vercel.app/",
  },
  {
    title: "SkinCare Ecommerce",
    description:
      "A modern ecommerce frontend for skincare products built with Next.js and Tailwind CSS. It features responsive product listings, clean product cards, and a layout optimized for a smooth shopping experience across devices.",
    techStack: ["Next.js", "Tailwind CSS"],
    image: "/skincare-ecommerrce.png",
    githubUrl: "https://github.com/DosuFE/skincare-ecommerce",
    liveUrl: "https://skincare-ecommerce-mvp.vercel.app/",
  },
  {
    title: "Bookmark Manager App",
    description:"A modern bookmark manager application built with Next.js that helps users organize, manage, and quickly access their favorite websites in one place. The app provides a clean and intuitive interface for saving bookmarks with detailed information, making it easy to categorize, search, and revisit important links. Users can add new bookmarks by providing a title, description, website URL, and tags for better organization. All saved bookmarks can be viewed in a centralized dashboard where users can access detailed information including the website favicon, title, URL, description, tags, view count, last visited date, and date added.",
    techStack: ["Next.js", "Tailwind CSS"],
    image: "/bookmark.png",
    githubUrl: "https://github.com/DosuFE/bookmark-manager",
    liveUrl: "https://bookmark-manager-app-nine.vercel.app/",
  },
  {
    title: "Crypto Dashboard Api",
    description: "A responsive cryptocurrency dashboard built with Next.js that fetches real-time data from the CoinGecko API. It displays current prices, market trends, and detailed information for various cryptocurrencies in a clean and user-friendly interface.",
    techStack: ["Next.js", "Tailwindcss", "CoinGecko Api"],
    image: "/crypto-dashboard.png",
    githubUrl: "https://github.com/DosuFE/crypto-dashboard",
    liveUrl: "https://crypto-dashboard-one-navy.vercel.app/"
  },
  {
    title: "Learning & Assessment Management Portal (LAMP)",
    description: "A full-stack Learning & Assessment Management Portal (LAMP) designed to manage courses, lectures, and CBT-based examinations in a modern and scalable way. The portal features a React (NextJs) frontend for an intuitive user experience and a NestJS backend for robust API management. It includes functionalities for course creation, lecture management, and CBT exam administration, and webcam integration making it an ideal solution for educational institutions looking to streamline their learning and assessment processes.",
    techStack: ["Next.js", "React", "Tailwind CSS", "NestJS", "PostgreSQL"],
    image: "/lamp.png",
    githubUrl: "https://github.com/DosuFE/lamp",
    liveUrl: "https://lamp-chi-six.vercel.app/"
  }
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
              name="Dosu Sulaiman Gbewato"
              role="Fullstack Developer"
              description="Fullstack developer with a passion for crafting clean, efficient, and user-friendly web applications. I specialize in frontend development using React and Next.js, and I'm currently expanding my skills in backend development with NestJS."
              techStack={["Next.js", "React", "Tailwind CSS", "JavaScript", "HTML", "CSS", "NestJS", "PostgreSQL", "REST APIs", "MongoDB", "Git & GitHub"]}
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
              email="sulaimondosu988@gmail.com"
              github="https://github.com/DosuFE/"
            />
          </section>

          <Footer text="© 2026 Your Name. Built with Next.js, React & Tailwind CSS." />
        </main>
      </div>
    </div>
  );
}
