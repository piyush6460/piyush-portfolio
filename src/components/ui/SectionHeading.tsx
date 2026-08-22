import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 md:mb-12 ${className}`}>
      <h2 className="font-sora text-2xl sm:text-3xl md:text-4xl font-bold text-text-heading tracking-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="font-inter text-text-body text-base max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
