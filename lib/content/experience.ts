export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  startDate: string; // ISO
  endDate: string | "present";
  storyBeats: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Frontend Software Engineer",
    company: "Enspirit Technologies",
    location: "Somajiguda, Hyderabad, Telangana, India",
    startDate: "2023-09-13",
    endDate: "present",
    storyBeats: [
      "Joined as the sole frontend developer on a travel booking platform being built by a team of roughly 9-11 — four backend engineers and one full-stack developer.",
      "Built the end-to-end booking flows across all three verticals: search, results, filtering, passenger and guest detail forms, fare rules, and checkout.",
      "Integrated third-party GDS/travel REST APIs, using React Query for fetching, caching, and background refetching, with Axios and Context API for shared state.",
      "Implemented authentication end to end — login, protected routes, token handling, and session management.",
      "Applied lazy loading, code splitting, and memoization to keep large search-result and booking screens responsive under real data volume.",
      "Built responsive, accessible interfaces with Tailwind CSS and Material UI, following WCAG practices across desktop and mobile.",
      "Reviewed code, took part in design discussions, and helped two junior developers get oriented in the codebase.",
    ],
  },
];
