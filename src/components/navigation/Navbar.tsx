"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu on screen resize to desktop or ESC key press
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getAbsoluteTop = (element: HTMLElement): number => {
    let offsetTop = 0;
    let current: HTMLElement | null = element;
    while (current) {
      offsetTop += current.offsetTop;
      current = current.offsetParent as HTMLElement | null;
    }
    return offsetTop;
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // Restore body scrollability immediately before closing menu
    document.body.style.overflow = "";
    setMobileMenuOpen(false);

    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      const targetY = Math.max(0, getAbsoluteTop(elem) - 80);

      // Delay slightly so body overflow is unlocked by browser engine
      setTimeout(() => {
        window.scrollTo({
          top: targetY,
          behavior: "smooth",
        });

        if (window.history.pushState) {
          window.history.pushState(null, "", href);
        }
      }, 20);
    }
  };

  return (
    <>
      {/* Mobile backdrop overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-container-max rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl shadow-2xl shadow-primary/5 z-50 transition-all duration-300 ${
          scrolled ? "py-2.5 px-5 bg-surface/85" : "py-3.5 px-6"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            aria-label="Piyush Pateliya Home"
            className="font-sora text-lg sm:text-xl font-bold text-text-heading hover:scale-105 transition-all duration-300 active:scale-95 px-2.5 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet"
          >
            PP<span className="text-electric-violet">.</span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium transition-colors pb-0.5 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet rounded px-1 ${
                    isActive
                      ? "text-text-heading font-semibold"
                      : "text-text-body hover:text-text-heading"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-electric-violet rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Resume CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Piyush_Resume.pdf"
              download="Piyush_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgba(255,255,255,0.05)] text-text-heading border border-white/10 px-4 py-2 rounded-lg font-geist text-xs font-medium hover:bg-white/10 hover:border-electric-violet/50 hover:scale-105 transition-all duration-300 active:scale-95 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet"
            >
              <FileText className="w-3.5 h-3.5 text-electric-violet" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-text-heading p-2 rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-text-heading" />
            ) : (
              <Menu className="w-6 h-6 text-text-heading" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              className="md:hidden overflow-y-auto max-h-[calc(80vh-80px)] pt-4 pb-2 border-t border-white/10 mt-3"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-electric-violet/15 text-text-heading border border-electric-violet/30"
                          : "text-text-body hover:text-text-heading hover:bg-white/5"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-electric-violet" />
                      )}
                    </a>
                  );
                })}
                <div className="pt-2 border-t border-white/10 mt-2">
                  <a
                    href="/Piyush_Resume.pdf"
                    download="Piyush_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full bg-electric-violet/20 border border-electric-violet/40 text-text-heading px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-electric-violet/30 transition-colors"
                  >
                    <FileText className="w-4 h-4 text-electric-violet" />
                    <span>View Full Resume</span>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
