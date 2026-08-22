"use client";

import React from "react";
import { personalDetails, educationData } from "@/data/portfolioData";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import ScrollReveal from "../ui/ScrollReveal";

export default function About() {
  const highlights = [
    {
      title: personalDetails.yearsExperience,
      subtitle: "Professional Development",
      description: "Building scalable full-stack web applications & UEFN/Verse experiences.",
    },
    {
      title: "MERN Stack",
      subtitle: "Primary Technical Stack",
      description: "React.js, Node.js, Express.js, MongoDB & Next.js ecosystem.",
    },
    {
      title: educationData.cgpa,
      subtitle: "B.C.A Academic Score",
      description: "Maharaja Krishnakumarsinhji Bhavnagar University Swami Sahajanand College.",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-20">
      <ScrollReveal direction="up">
        <SectionHeading
          title="About Me"
          subtitle="Full-stack developer focused on creating reliable, scalable web applications and interactive UEFN experiences."
        />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15}>
        <GlassCard hoverEffect={false} className="mb-8">
          <p className="font-inter text-text-body text-base sm:text-lg leading-relaxed mb-8">
            {personalDetails.summary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 border border-white/5 rounded-xl bg-surface-container-low/60 hover:border-electric-violet/40 transition-colors"
              >
                <h3 className="font-sora text-xl sm:text-2xl font-bold text-electric-violet mb-1.5">
                  {item.title}
                </h3>
                <p className="font-sora text-sm font-semibold text-text-heading mb-2">
                  {item.subtitle}
                </p>
                <p className="font-inter text-xs text-text-body/80 leading-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </GlassCard>
      </ScrollReveal>
    </section>
  );
}
