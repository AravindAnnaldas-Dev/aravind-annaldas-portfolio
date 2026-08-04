export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Metric {
  value?: string;
  icon?: "terminal";
  title: string;
  description: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  techChips: string[];
  stat: {
    value: string;
    label: string;
  };
}

export interface ProjectFeature {
  icon: "data_array" | "dynamic_form";
  label: string;
}

export interface FeaturedCaseStudy {
  eyebrow: string;
  title: string;
  description: string;
  features: ProjectFeature[];
  imageUrl: string;
  imageAlt: string;
}

export interface ProjectCard {
  title: string;
  description: string;
  href: string;
  techChips: string[];
}

export interface SkillCategory {
  title: string;
  items: string;
}

export interface CoreSkill {
  name: string;
  level: string;
}

export interface PhilosophyPillar {
  number: string;
  title: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  detail: string;
}
