import { ExperienceItem, ProjectItem, EducationItem } from "@/types";

export const personalDetails = {
  name: "Piyush Pateliya",
  title: "Full-Stack MERN Developer",
  role: "MERN Stack Developer",
  email: "prpateliya6460@gmail.com",
  phone: "+91 6356630797",
  location: "Surat, Gujarat, India",
  summary:
    "Full-stack developer with 3 years of professional experience building web applications using React.js, Node.js, Express.js, and MongoDB, along with hands-on experience in UEFN and Verse development. Experienced in building features, integrating APIs, creating reusable UI components, and using AI-assisted development tools such as Antigravity and Claude Code to improve development speed, debugging, and code quality.",
  yearsExperience: "2+ Years",
  uefnExperience: "1 Year",
  availability: "Available for new opportunities",
};

export const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database & APIs",
    skills: [
      "MongoDB (NoSQL)",
      "Redux",
      "React Query",
      "REST APIs",
      "Webhooks",
      "JWT",
    ],
  },
  {
    title: "Languages & Engines",
    skills: ["JavaScript", "Verse", "UEFN"],
  },
  {
    title: "Tools & AI Workflows",
    skills: ["Git", "GitHub", "Antigravity", "Claude Code"],
  },
  {
    title: "Core Competencies",
    skills: [
      "Problem Solving",
      "Self-learning",
      "Technical creativity",
      "Adaptability",
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "appworld-infotech",
    role: "UEFN Developer / Verse Programmer",
    company: "Appworld Infotech",
    location: "Surat - Gujarat",
    period: "Sep 2025 – Present",
    responsibilities: [
      "Develop Fortnite experience using Unreal Editor for Fortnite (UEFN) and Verse.",
      "Worked on Prison Break and Hangout HUB, implementing gameplay logic, interactive features and game mechanics.",
      "Updated and configured Widget Blueprints and integrated them with Verse code for dynamic in-game UI.",
      "Debugged, tested, and optimized gameplay features within the UEFN environment.",
      "Used AI-assisted development tools such as Antigravity and Claude Code for code assistance, debugging, refactoring, and faster development workflows.",
    ],
  },
  {
    id: "bitfront-infotech",
    role: "React.js Developer",
    company: "Bitfront Infotech",
    location: "Surat - Gujarat",
    period: "May 2025 – Aug 2025",
    responsibilities: [
      "Built scalable frontend solutions for Zervio Eco, Zervio Orbit, and Zenter Prize.",
      "Implemented responsive UI from Figma designs using React and Tailwind CSS and created reusable common components.",
      "Used React Query for server-state management and Redux for API data flow and state management.",
    ],
  },
  {
    id: "tatvam-cloud-solution",
    role: "MERN Stack Developer",
    company: "Tatvam Cloud Solution",
    location: "Surat - Gujarat",
    period: "Dec 2023 – Apr 2025",
    responsibilities: [
      "Developed features for Wisernotify Social Proof and Wisernotify Product Review using the MERN stack.",
      "Integrated REST APIs, webhooks, Google My Business (GMB), and Google Places for synchronization and review management.",
      "Implemented JWT authentication, researched complex API integrations, and improved reliability through testing and optimization.",
    ],
  },
];

export const projectData: ProjectItem[] = [
  {
    id: "prison-break",
    title: "Prison Break",
    tech: "UEFN & Verse",
    category: "UEFN / Verse",
    description:
      "Fortnite experience developed using Unreal Editor for Fortnite (UEFN) and Verse, implementing complex gameplay logic, interactive mechanics, and widget blueprints.",
    highlights: [
      "Custom gameplay mechanics built in Verse",
      "Dynamic in-game UI widget blueprints integration",
      "Performance optimization in UEFN environment",
    ],
  },
  {
    id: "hangout-hub",
    title: "Hangout HUB",
    tech: "UEFN & Verse",
    category: "UEFN / Verse",
    description:
      "Interactive Fortnite social hub experience focusing on player interaction, custom mini-games, and dynamic UI elements built with UEFN and Verse.",
    highlights: [
      "Social interaction mechanics",
      "Event-driven Verse script architecture",
      "AI-assisted rapid prototyping using Antigravity",
    ],
  },
  {
    id: "zervio-eco",
    title: "Zervio Eco",
    tech: "React.js, Tailwind CSS, React Query",
    category: "React.js",
    description:
      "Scalable frontend ecosystem solution featuring responsive layout design from Figma specifications, server-state caching via React Query, and modular component architecture.",
    highlights: [
      "Figma design precision",
      "Server-state management with React Query",
      "Reusable component design system",
    ],
  },
  {
    id: "zervio-orbit",
    title: "Zervio Orbit",
    tech: "React.js, Redux, Tailwind CSS",
    category: "React.js",
    description:
      "Frontend web application built with React and Tailwind CSS, featuring streamlined state management via Redux for seamless data flow.",
    highlights: [
      "Complex state synchronization using Redux",
      "Responsive layout for multi-screen devices",
      "High performance rendering",
    ],
  },
  {
    id: "zenter-prize",
    title: "Zenter Prize",
    tech: "React.js, Redux, Tailwind CSS",
    category: "React.js",
    description:
      "Interactive web solution incorporating reusable common components, responsive designs, and robust API data management.",
    highlights: [
      "Common component library",
      "Intuitive user interaction flow",
      "Optimized load times and rendering",
    ],
  },
  {
    id: "wisernotify-social-proof",
    title: "Wisernotify Social Proof",
    tech: "MERN Stack, REST APIs, Webhooks",
    category: "MERN Stack",
    description:
      "Social proof notification platform feature built with MongoDB, Express, React, and Node.js, featuring real-time webhook sync and third-party integrations.",
    highlights: [
      "Real-time webhook events",
      "Google My Business & Places synchronization",
      "JWT secured API endpoints",
    ],
  },
  {
    id: "wisernotify-product-review",
    title: "Wisernotify Product Review",
    tech: "MERN Stack, Google Places API, JWT",
    category: "MERN Stack",
    description:
      "Review management and aggregation tool built with the MERN stack for synchronizing customer reviews across Google Places and custom web channels.",
    highlights: [
      "Google Places & GMB API integration",
      "JWT authentication system",
      "Robust review sync pipeline",
    ],
  },
];

export const educationData: EducationItem = {
  degree: "Bachelor of Computer Applications (B.C.A)",
  institution:
    "Maharaja Krishnakumarsinhji Bhavnagar University Swami Sahajanand College",
  period: "2020 – 2023",
  cgpa: "8.6 CGPA",
};
