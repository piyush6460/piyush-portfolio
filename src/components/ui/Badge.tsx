import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "mono";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default:
      "bg-[#1a1a1a]/80 backdrop-blur-sm text-text-heading border border-white/10 font-geist text-xs px-3 py-1 rounded-md",
    accent:
      "bg-electric-violet/10 text-electric-violet border border-electric-violet/30 font-sora text-xs px-3 py-1 rounded-full font-medium",
    mono: "bg-surface-container-high/60 text-on-surface-variant border border-white/5 font-geist text-xs px-2.5 py-1 rounded",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
