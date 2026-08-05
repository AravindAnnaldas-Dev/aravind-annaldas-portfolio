"use client";

import { useState } from "react";

import { type SkillCluster, skills } from "@/lib/content/skills";
import { cn } from "@/lib/utils";

const CLUSTERS: { key: SkillCluster | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "frontend-core", label: "Frontend Core" },
  { key: "data-state", label: "Data & State" },
  { key: "styling", label: "Styling" },
  { key: "auth-performance", label: "Auth & Performance" },
  { key: "backend-learning", label: "Backend (Learning)" },
];

/**
 * Filterable/grouped skill grid (§9.7/§12) — chosen over a force-directed
 * constellation because the real skill list here is small enough that a
 * clean grid communicates faster than a graph would (§12 motion spec note).
 * Degrades to this same grid under reduced motion or on touch, per §13.
 */
export function ClusterFilter() {
  const [active, setActive] = useState<SkillCluster | "all">("all");

  const visible = skills.filter(
    (skill) => active === "all" || skill.cluster === active,
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter by category"
        className="flex flex-wrap gap-2"
      >
        {CLUSTERS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            aria-pressed={active === key}
            onClick={() => setActive(key)}
            className={cn(
              "border-border rounded-full border px-4 py-1.5 font-mono text-xs transition-colors",
              "focus-visible:outline-ring focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
              active === key
                ? "bg-primary text-primary-foreground border-transparent"
                : "text-text-secondary hover:text-text-primary",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <ul className="mt-8 flex flex-wrap gap-3">
        {visible.map((skill) => (
          <li
            key={skill.name}
            className={cn(
              "rounded-md border px-4 py-2 font-mono text-sm",
              skill.cluster === "backend-learning"
                ? "border-accent-warm/40 text-accent-warm bg-transparent"
                : "border-border bg-surface text-text-primary",
            )}
            title={skill.status}
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
