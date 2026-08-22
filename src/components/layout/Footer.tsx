"use client";

import React from "react";
import { personalDetails } from "@/data/portfolioData";
import { ArrowUp, Mail, Phone } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 pt-12 pb-20 text-center relative">
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Name / Logo */}
        <h3 className="font-sora text-2xl font-bold text-text-heading">
          {personalDetails.name}
          <span className="text-electric-violet">.</span>
        </h3>

        {/* Quick nav links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-geist text-text-body">
          <a href="#home" className="hover:text-text-heading transition-colors">Home</a>
          <a href="#about" className="hover:text-text-heading transition-colors">About</a>
          <a href="#skills" className="hover:text-text-heading transition-colors">Skills</a>
          <a href="#experience" className="hover:text-text-heading transition-colors">Experience</a>
          <a href="#projects" className="hover:text-text-heading transition-colors">Projects</a>
          <a href="#contact" className="hover:text-text-heading transition-colors">Contact</a>
        </nav>

        {/* Contact info pill links */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-geist text-text-body/80">
          <a
            href={`mailto:${personalDetails.email}`}
            className="flex items-center gap-2 hover:text-electric-violet transition-colors bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-lg"
          >
            <Mail className="w-3.5 h-3.5 text-electric-violet" />
            <span>{personalDetails.email}</span>
          </a>
          <a
            href={`tel:${personalDetails.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 hover:text-electric-violet transition-colors bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-lg"
          >
            <Phone className="w-3.5 h-3.5 text-electric-violet" />
            <span>{personalDetails.phone}</span>
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="mt-4 p-3 rounded-full bg-surface-container border border-white/10 text-text-heading hover:border-electric-violet hover:bg-electric-violet/20 hover:scale-110 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet"
        >
          <ArrowUp className="w-5 h-5 text-electric-violet" />
        </button>

        {/* Copyright */}
        <p className="text-xs font-geist text-text-body/40 mt-4">
          &copy; {new Date().getFullYear()} {personalDetails.name}. Built with Next.js, TypeScript, Tailwind CSS, & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
