export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tech: string;
  category: "MERN Stack" | "React.js" | "UEFN / Verse";
  description: string;
  highlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
}
