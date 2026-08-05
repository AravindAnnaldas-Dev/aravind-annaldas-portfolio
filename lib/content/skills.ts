export type SkillCluster =
  | "frontend-core"
  | "data-state"
  | "styling"
  | "auth-performance"
  | "backend-learning";

export type Skill = {
  name: string;
  cluster: SkillCluster;
  /** Only used for the backend-learning cluster — plain-language status, never a fabricated % (§9.6) */
  status?: string;
};

export const skills: Skill[] = [
  { name: "React.js", cluster: "frontend-core" },
  { name: "Next.js", cluster: "frontend-core" },
  { name: "TypeScript", cluster: "frontend-core" },
  { name: "JavaScript (ES6+)", cluster: "frontend-core" },

  { name: "React Query", cluster: "data-state" },
  { name: "Context API", cluster: "data-state" },
  { name: "REST APIs / Axios", cluster: "data-state" },

  { name: "Tailwind CSS", cluster: "styling" },
  { name: "Framer Motion", cluster: "styling" },
  { name: "Material UI (prior work)", cluster: "styling" },

  { name: "Protected routes & token handling", cluster: "auth-performance" },
  { name: "Lazy loading & code splitting", cluster: "auth-performance" },
  { name: "Memoization", cluster: "auth-performance" },
  { name: "Accessibility (WCAG)", cluster: "auth-performance" },

  {
    name: "Node.js & Express",
    cluster: "backend-learning",
    status: "Comfortable building REST APIs",
  },
  {
    name: "Authentication (JWT)",
    cluster: "backend-learning",
    status:
      "Implemented in a personal project; understands refresh-token tradeoffs",
  },
  {
    name: "SQL & PostgreSQL",
    cluster: "backend-learning",
    status: "Comfortable with schema design and queries",
  },
  {
    name: "Prisma ORM",
    cluster: "backend-learning",
    status: "Used for migrations and typed queries",
  },
  {
    name: "API Design",
    cluster: "backend-learning",
    status: "Actively studying REST conventions, pagination, error contracts",
  },
];
