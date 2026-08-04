import type {
  NavLink,
  SocialLink,
  Metric,
  ExperienceEntry,
  FeaturedCaseStudy,
  ProjectCard,
  SkillCategory,
  CoreSkill,
  PhilosophyPillar,
  EducationEntry,
} from "./types";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/AravindAnnaldas-Dev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aravindannaldas/" },
  { label: "Email", href: "mailto:annaldasaravind897@gmail.com" },
];

export const resumeUrl = "/resume.pdf";

export const metrics: Metric[] = [
  {
    value: "3+",
    title: "Years Experience",
    description:
      "Consistently delivering high-performance web applications with modern tech stacks.",
  },
  {
    value: "3",
    title: "Verticals",
    description:
      "Specialized engineering expertise in Flights, Hotels, and Trains booking flows.",
  },
  {
    icon: "terminal",
    title: "End-to-End Ownership",
    description:
      "From architectural planning to production deployment and performance monitoring.",
  },
];

export const experience: ExperienceEntry = {
  company: "Enspirit Technologies",
  role: "Frontend Software Engineer",
  period: "Sep 2023 — Present",
  bullets: [
    "Solely responsible for architecting and developing the frontend of a comprehensive travel booking platform serving multiple verticals.",
    "Implemented React Query for robust server-state management, reducing unnecessary API calls and improving data consistency.",
    "Engineered complex integrations with GDS APIs, handling real-time data streaming for live flight and hotel inventories.",
    "Optimized application performance through lazy loading and strategic code splitting, achieving top-tier Core Web Vitals.",
  ],
  techChips: ["React", "Next.js", "TypeScript", "Tailwind", "React Query"],
  stat: {
    value: "100%",
    label: "Ownership of Frontend Repository",
  },
};

export const featuredCaseStudy: FeaturedCaseStudy = {
  eyebrow: "Production Case Study",
  title: "Next-Gen Travel Booking Architecture",
  description:
    "Developed a high-concurrency booking engine handling multi-step flows and intricate validation logic. Focused on creating a resilient UI that gracefully handles API timeouts and complex state transitions during the flight selection process.",
  features: [
    { icon: "data_array", label: "Complex GDS API integration" },
    { icon: "dynamic_form", label: "Sophisticated multi-step state management" },
  ],
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCWvBrdprmOMbkgnmOJD9Ar1UfjNoqDvAF3oI-6VPT7PQJskBhgtLwCRzzcFu0kjopADLqXiNYRynDm5SsFWCY7pPmbfuyJdR7rr6OfsLOaxKLFIPQIa_uyYJ0QfTW-__wBuI1GMUETdHb_jmZFVL4GBzPBZzCjVWeYi8a2pDPx1CiLQ1NJDQ6r1ZLYcl2LQ3gQ9MbMTk_yjnVNK9Z0gTF0IZT6t0JddCQMzsKy8qiDm-R-RItSQmn_",
  imageAlt:
    "A clean, sophisticated user interface for a flight search results page. The layout uses a dark-mode theme with high-contrast text and primary blue accents. It features detailed flight cards, filter sidebars, and price comparisons, reflecting a professional engineering aesthetic with grid alignment and technical minimalism.",
};

export const projectCards: ProjectCard[] = [
  {
    title: "Resume Builder",
    description:
      "A highly modular resume generator with live PDF previewing. Built using a reusable component architecture that separates data schemas from visual presentation layers.",
    href: "#",
    techChips: ["React", "TS", "Tailwind"],
  },
  {
    title: "E-commerce Admin",
    description:
      "A data-heavy management dashboard featuring CRUD operations, complex data filtering, and real-time inventory tracking visualizations.",
    href: "#",
    techChips: ["Next.js", "TS", "MUI"],
  },
];

export const coreSkills: CoreSkill[] = [
  { name: "React", level: "Advanced" },
  { name: "Next.js", level: "Advanced" },
  { name: "TypeScript", level: "Proficient" },
];

export const skillCategories: SkillCategory[] = [
  { title: "State & Data", items: "React Query, Redux Toolkit, Context API" },
  { title: "UI / Styling", items: "Tailwind CSS, Material UI, CSS Modules" },
  {
    title: "Performance",
    items: "Code Splitting, Image Optimization, Memoization",
  },
  { title: "Engineering", items: "Git, CI/CD, Vite, Webpack, Vitest" },
];

export const philosophyPillars: PhilosophyPillar[] = [
  { number: "01", title: "Performance" },
  { number: "02", title: "Maintainability" },
  { number: "03", title: "User Experience" },
  { number: "04", title: "Ownership" },
];

export const education: EducationEntry = {
  degree: "Bachelor of Engineering in EEE",
  institution: "Vidya Jyothi Institute of Technology (VJIT)",
  period: "2019 — 2023",
  detail: "CGPA: 8.0",
};

export const heroImageUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA4sbE-cJR7W1LB3yzo41bhuwpEJXz_IF0fDV1X3pYt7w6Z045xsYLw_gs85s-r5IlQSgGqRTmXhiKeYPnSPGcVOPyRCeQ5N3K96LdZRIxLlgKrE6HBkQplOupalZiK85g1DkdOC9CEVetkTZt5dTGpYUC76G0u-WUCtcFkaLh8EUzhLblJcIqh-eFFn-3w03RJq5qi4k64Mk4McaxTFMK6uNyHKqXD0uDp9FqpIefOWlIgx2oYuyYh";
