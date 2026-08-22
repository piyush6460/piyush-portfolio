"use client";

import React from "react";
import { experienceData } from "@/data/portfolioData";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import ScrollReveal from "../ui/ScrollReveal";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-20">
      <ScrollReveal direction="up">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional history across MERN stack web development, React frontend, and UEFN/Verse game development."
        />
      </ScrollReveal>

      <div className="space-y-8">
        {experienceData.map((exp, index) => (
          <ScrollReveal key={exp.id} direction="up" delay={0.1 * index}>
            <GlassCard className="relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-electric-violet font-sora text-sm font-semibold mb-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                  <h3 className="font-sora text-xl sm:text-2xl font-bold text-text-heading">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-geist text-text-body/70 mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 font-geist text-xs text-text-body bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg self-start">
                  <Calendar className="w-3.5 h-3.5 text-electric-violet" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-2.5 font-inter text-sm sm:text-base text-text-body">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-violet shrink-0 mt-2" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
