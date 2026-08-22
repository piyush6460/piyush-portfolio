"use client";

import React, { useState } from "react";
import { projectData } from "@/data/portfolioData";
import { ProjectItem } from "@/types";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import ScrollReveal from "../ui/ScrollReveal";
import ProjectModal from "../ui/ProjectModal";
import Badge from "../ui/Badge";
import { Layers, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "MERN Stack", "React.js", "UEFN / Verse"];

  const filteredProjects =
    activeCategory === "All"
      ? projectData
      : projectData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-12 md:py-20">
      <ScrollReveal direction="up">
        <SectionHeading
          title="Featured Projects"
          subtitle="Key web applications, frontend solutions, and UEFN interactive experiences built during my career."
        />
      </ScrollReveal>

      {/* Category Filter Pills */}
      <ScrollReveal direction="up" delay={0.1}>
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-geist font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet ${
                activeCategory === cat
                  ? "bg-electric-violet text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  : "bg-surface-container/60 text-text-body border border-white/10 hover:bg-white/10 hover:text-text-heading"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ScrollReveal key={project.id} direction="up" delay={0.08 * index}>
            <GlassCard className="h-full flex flex-col justify-between group cursor-pointer" hoverEffect={true}>
              <div onClick={() => setSelectedProject(project)}>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="accent">{project.category}</Badge>
                  <span className="text-text-body/40 group-hover:text-electric-violet transition-colors">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>

                <h3 className="font-sora text-xl font-bold text-text-heading mb-2 group-hover:text-electric-violet transition-colors">
                  {project.title}
                </h3>

                <p className="font-geist text-xs text-electric-violet/90 font-medium mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{project.tech}</span>
                </p>

                <p className="font-inter text-sm text-text-body leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="font-geist text-xs font-medium text-electric-violet hover:underline focus-visible:outline-none"
                >
                  View Details &rarr;
                </button>
                <span className="text-[11px] font-geist text-text-body/50">
                  Click to inspect
                </span>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
