import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hoverEffect = true,
}: GlassCardProps) {
  return (
    <div
      className={`bg-surface-container/50 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 ${
        hoverEffect
          ? "hover:border-electric-violet/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] hover:translate-y-[-2px]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
