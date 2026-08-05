import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { type Project } from "@/lib/content/projects";
import { cn } from "@/lib/utils";

const STATUS_LABEL: Record<Project["status"], string> = {
  shipped: "Shipped",
  personal: "Personal project",
  placeholder: "In progress",
};

export function ProjectCard({ project }: { project: Project }) {
  const isPlaceholder = project.status === "placeholder";

  const content = (
    <div
      className={cn(
        "border-border bg-surface flex h-full flex-col gap-4 rounded-md border p-6 transition-colors",
        isPlaceholder && "border-dashed opacity-80",
        !isPlaceholder && project.caseStudyHref && "hover:border-accent/50",
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-display text-text-primary text-xl font-semibold">
          {project.title}
        </h3>
        <Badge variant={isPlaceholder ? "outline" : "secondary"}>
          {STATUS_LABEL[project.status]}
        </Badge>
      </div>

      <p className="text-text-secondary flex-1 text-sm leading-relaxed">
        {project.summary}
      </p>

      <ul className="flex flex-wrap gap-x-3 gap-y-1">
        {project.stack.map((tech) => (
          <li key={tech} className="text-text-secondary font-mono text-xs">
            {tech}
          </li>
        ))}
      </ul>

      {project.caseStudyHref && (
        <span className="text-accent mt-2 text-sm font-medium">
          Read the case study →
        </span>
      )}
    </div>
  );

  if (project.caseStudyHref) {
    return (
      <Link
        href={project.caseStudyHref}
        aria-label={`Read the case study for ${project.title}`}
        className="focus-visible:outline-ring block h-full rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {content}
      </Link>
    );
  }

  return content;
}
