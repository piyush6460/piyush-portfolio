"use client";

import React from "react";
import { educationData } from "@/data/portfolioData";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import ScrollReveal from "../ui/ScrollReveal";
import { GraduationCap, Award, Calendar } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-12 md:py-20">
      <ScrollReveal direction="up">
        <SectionHeading
          title="Education"
          subtitle="Academic foundation in computer applications and software engineering principles."
        />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <GlassCard>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-electric-violet/10 border border-electric-violet/30 flex items-center justify-center shrink-0 mt-1">
                <GraduationCap className="w-5 h-5 text-electric-violet" />
              </div>
              <div>
                <h3 className="font-sora text-xl font-bold text-text-heading">
                  {educationData.degree}
                </h3>
                <p className="font-inter text-sm text-electric-violet font-medium mt-1">
                  {educationData.institution}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 font-geist text-xs text-text-body bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg self-start md:self-auto">
              <Calendar className="w-3.5 h-3.5 text-electric-violet" />
              <span>{educationData.period}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center gap-2">
            <Award className="w-4 h-4 text-electric-violet" />
            <span className="font-geist text-sm font-bold text-text-heading">
              Academic Performance: {educationData.cgpa}
            </span>
          </div>
        </GlassCard>
      </ScrollReveal>
    </section>
  );
}
