"use client";

import React from "react";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { personalDetails } from "@/data/portfolioData";
import Button from "../ui/Button";
import ThreeVisual from "../ui/ThreeVisual";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 pt-24 sm:pt-32 pb-16 md:pb-24 min-h-[90vh] relative"
    >
      {/* Left Column: Headline & Bio */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 flex flex-col items-start text-left w-full lg:w-1/2 z-10"
      >
        {/* Availability Status Pill */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2.5 bg-[#1a1a1a]/90 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-6 shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-violet opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-electric-violet" />
          </span>
          <span className="font-geist text-xs sm:text-sm text-text-body font-medium">
            {personalDetails.availability}
          </span>
        </motion.div>

        {/* Main Name */}
        <motion.h1
          variants={itemVariants}
          className="font-sora text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-heading mb-3 tracking-tight leading-[1.1]"
        >
          {personalDetails.name}
        </motion.h1>

        {/* Gradient Role Title */}
        <motion.h2
          variants={itemVariants}
          className="font-sora text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 tracking-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violet via-primary-container to-primary">
            {personalDetails.role}
          </span>
        </motion.h2>

        {/* Summary Description */}
        <motion.p
          variants={itemVariants}
          className="font-inter text-text-body text-base sm:text-lg max-w-xl mb-8 leading-relaxed"
        >
          {personalDetails.summary}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6"
        >
          <Button
            variant="primary"
            size="lg"
            href="#projects"
            icon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
            className="group"
          >
            View Projects
          </Button>

          <Button
            variant="secondary"
            size="lg"
            href="/Piyush_Resume.md"
            icon={<FileText className="w-4 h-4 text-electric-violet" />}
          >
            Download Resume
          </Button>
        </motion.div>

        {/* Quick Connect Link */}
        <motion.a
          variants={itemVariants}
          href="#contact"
          className="text-sm font-geist text-text-body/80 hover:text-text-heading transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-electric-violet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet rounded"
        >
          Let&apos;s Connect &rarr;
        </motion.a>
      </motion.div>

      {/* Right Column: 3D Wireframe Canvas */}
      <div className="w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-[550px] relative flex items-center justify-center">
        <ThreeVisual />
      </div>
    </section>
  );
}
