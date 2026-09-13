"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";

export default function About() {
  const stats = [
    {
      value: "3",
      label: "YEARS EXPERIENCE",
    },
    {
      value: "10+",
      label: "PROJECTS / FEATURES",
    },
    {
      value: "MERN",
      label: "PRIMARY STACK",
    },
  ];

  const focusTags = [
    "Full-stack development",
    "React applications",
    "Node.js APIs",
    "Scalable web applications",
    "AI-assisted development",
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Background Glow behind the section */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-electric-violet/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-container-max mx-auto">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Profile Card Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[360px] sm:max-w-[400px] aspect-square rounded-3xl bg-[#18171d]/90 border border-white/10 p-4 sm:p-6 flex flex-col items-center justify-center relative overflow-hidden group hover:border-electric-violet/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                {/* Inner Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-electric-violet/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Profile Image Container */}
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-electric-violet/30 transition-colors">
                  <Image
                    src="/Profile.png"
                    alt="Piyush Pateliya"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Bio & Stats & Focus Tags */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
                About Me
              </h2>

              <p className="font-inter text-text-body text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                I am a passionate Full-Stack Developer dedicated to building
                high-performance web applications. With a strong foundation in the
                MERN stack, I focus on creating seamless user experiences and robust
                backend architectures.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 py-6 border-y border-white/10 mb-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-sora text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="font-sora text-[10px] sm:text-xs font-bold text-text-body/70 tracking-wider uppercase mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Currently Focused On */}
              <div>
                <h3 className="font-sora text-lg sm:text-xl font-bold text-white mb-4">
                  Currently focused on
                </h3>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {focusTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#1e1d25] text-text-body border border-white/10 hover:border-electric-violet/50 hover:text-white hover:bg-surface-container-high/80 transition-all duration-200 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

