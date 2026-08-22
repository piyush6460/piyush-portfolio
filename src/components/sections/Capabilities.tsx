"use client";

import React from "react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import ScrollReveal from "../ui/ScrollReveal";
import {
  Code,
  Layout,
  Server,
  Webhook,
  Sparkles,
  Gamepad2,
  Cpu,
  Boxes,
} from "lucide-react";

export default function Capabilities() {
  const capabilities = [
    {
      icon: <Code className="w-5 h-5 text-electric-violet" />,
      title: "Full-Stack Web Development",
      description:
        "Building end-to-end web applications with MERN stack (MongoDB, Express, React, Node.js) and Next.js.",
    },
    {
      icon: <Layout className="w-5 h-5 text-electric-violet" />,
      title: "React & Next.js Frontend",
      description:
        "Crafting responsive, high-performance user interfaces from Figma designs using React, Tailwind CSS, and Redux.",
    },
    {
      icon: <Server className="w-5 h-5 text-electric-violet" />,
      title: "Node.js & Express Backend",
      description:
        "Developing REST APIs, authentication routines (JWT), and backend services for scalable data handling.",
    },
    {
      icon: <Webhook className="w-5 h-5 text-electric-violet" />,
      title: "API & Webhook Integrations",
      description:
        "Synchronizing third-party services including Google My Business (GMB), Google Places API, and webhooks.",
    },
    {
      icon: <Gamepad2 className="w-5 h-5 text-electric-violet" />,
      title: "UEFN & Verse Development",
      description:
        "Creating Fortnite experiences in Unreal Editor for Fortnite (UEFN), Widget Blueprints, and Verse scripting.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-electric-violet" />,
      title: "AI-Assisted Workflows",
      description:
        "Accelerating engineering velocity, refactoring, and debugging using modern AI tools like Antigravity & Claude Code.",
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <ScrollReveal direction="up">
        <SectionHeading
          title="Core Capabilities"
          subtitle="Specialized services and engineering capabilities based on my professional work experience."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((cap, index) => (
          <ScrollReveal key={cap.title} direction="up" delay={0.08 * index}>
            <GlassCard className="h-full">
              <div className="w-10 h-10 rounded-xl bg-electric-violet/10 border border-electric-violet/30 flex items-center justify-center mb-4">
                {cap.icon}
              </div>
              <h3 className="font-sora text-lg font-bold text-text-heading mb-2">
                {cap.title}
              </h3>
              <p className="font-inter text-sm text-text-body leading-relaxed">
                {cap.description}
              </p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
