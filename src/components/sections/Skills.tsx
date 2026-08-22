"use client";

import React from "react";
import { skillCategories } from "@/data/portfolioData";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import Badge from "../ui/Badge";
import ScrollReveal from "../ui/ScrollReveal";

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-20">
      <ScrollReveal direction="up">
        <SectionHeading
          title="Technical Skills"
          subtitle="Core technologies, frameworks, and developer tooling used in my daily development workflow."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <ScrollReveal
            key={category.title}
            direction="up"
            delay={0.1 * index}
            className={index === skillCategories.length - 1 ? "lg:col-span-2" : ""}
          >
            <GlassCard className="h-full">
              <h3 className="font-sora text-lg font-bold text-text-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-electric-violet" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="default" className="hover:border-electric-violet/50 hover:text-white transition-colors cursor-default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
