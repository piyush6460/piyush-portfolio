import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  href,
  download,
  target,
  rel,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sora font-semibold rounded-lg transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-electric-violet to-primary-container text-white hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(99,102,241,0.35)] border border-electric-violet/30",
    secondary:
      "bg-[#1a1a1a]/90 backdrop-blur-sm text-text-heading border border-white/10 hover:bg-white/10 hover:border-electric-violet/50 hover:scale-[1.02]",
    outline:
      "bg-transparent border border-electric-violet/50 text-electric-violet hover:bg-electric-violet/10 hover:scale-[1.02]",
    ghost:
      "bg-transparent text-text-body hover:text-text-heading hover:bg-white/5",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-6 py-2.5 text-sm gap-2",
    lg: "px-8 py-3.5 text-base gap-2.5",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={combinedClasses}
      >
        {icon && iconPosition === "left" && icon}
        <span>{children}</span>
        {icon && iconPosition === "right" && icon}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === "left" && icon}
      <span>{children}</span>
      {icon && iconPosition === "right" && icon}
    </button>
  );
}
