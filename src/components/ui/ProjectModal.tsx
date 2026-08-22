"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code2, CheckCircle2 } from "lucide-react";
import { ProjectItem } from "@/types";
import Button from "./Button";
import Badge from "./Badge";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative w-full max-w-2xl bg-surface border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <Badge variant="accent" className="mb-2">
                  {project.category}
                </Badge>
                <h3 className="font-sora text-2xl sm:text-3xl font-bold text-text-heading">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 text-text-body hover:text-text-heading hover:bg-white/10 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-geist text-text-body/60 uppercase tracking-wider mb-2">
                  Technologies Used
                </h4>
                <p className="font-geist text-electric-violet font-medium">
                  {project.tech}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-geist text-text-body/60 uppercase tracking-wider mb-2">
                  Description
                </h4>
                <p className="font-inter text-text-body leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
              </div>

              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <h4 className="text-xs font-geist text-text-body/60 uppercase tracking-wider mb-3">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-text-body"
                      >
                        <CheckCircle2 className="w-4 h-4 text-electric-violet shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTAs */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
                {project.githubUrl ? (
                  <Button
                    variant="secondary"
                    size="sm"
                    href={project.githubUrl}
                    icon={<Code2 className="w-4 h-4" />}
                  >
                    GitHub Code
                  </Button>
                ) : (
                  <span className="text-xs font-geist text-text-body/50">
                    Source Code: Enterprise Project
                  </span>
                )}
                {project.liveUrl ? (
                  <Button
                    variant="primary"
                    size="sm"
                    href={project.liveUrl}
                    icon={<ExternalLink className="w-4 h-4" />}
                  >
                    Live Demo
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onClose}
                  >
                    Close Details
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
