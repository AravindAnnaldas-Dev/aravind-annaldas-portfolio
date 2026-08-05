export type ProjectStatus = "shipped" | "personal" | "placeholder";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  status: ProjectStatus;
  /** Real deep-dive case study route, if this project has one (§9.5) */
  caseStudyHref?: string;
};

export const projects: Project[] = [
  {
    slug: "travel-platform",
    title: "Travel Booking Platform",
    summary:
      "Sole frontend developer on a multi-vertical booking platform covering flights, hotels, and trains — search, filtering, checkout, and auth across all three.",
    stack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "React Query",
      "Axios",
      "Tailwind CSS",
      "Material UI",
    ],
    status: "shipped",
    caseStudyHref: "/work/travel-platform",
  },
  {
    slug: "resume-builder",
    title: "Resume Builder Application",
    summary:
      "Live preview and PDF export, with multiple reusable templates sharing a common component structure.",
    stack: ["React.js", "TypeScript", "Tailwind CSS"],
    status: "personal",
  },
  {
    slug: "ecommerce-admin-dashboard",
    title: "E-commerce Admin Dashboard",
    summary:
      "Admin dashboard for products, orders, and users with CRUD, pagination, search, sorting, and form validation, using reusable table components and cached API data.",
    stack: ["Next.js", "TypeScript", "Material UI"],
    status: "personal",
  },
  {
    slug: "backend-project-placeholder",
    title: "Backend project — in progress",
    summary:
      "Building with Node.js, Express, and PostgreSQL as part of the backend learning track. Swapped for a real project once shipped.",
    stack: ["Node.js", "Express", "PostgreSQL", "Prisma"],
    status: "placeholder",
  },
];
