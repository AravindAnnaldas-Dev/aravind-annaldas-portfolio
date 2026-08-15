import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/sections/projects/project-card";
import { projects } from "@/lib/content/projects";

/** Featured Projects — §9.4. Real work + one honestly-labeled placeholder. */
export function ProjectsSection() {
  return (
    <section
      id="featured-projects"
      aria-labelledby="projects-heading"
      className="border-border mx-auto w-full max-w-6xl scroll-mt-16 border-t px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <p className="text-text-secondary mb-4 font-mono text-sm tracking-wide uppercase">
        04 — Featured Projects
      </p>
      <h2
        id="projects-heading"
        className="font-display text-text-primary max-w-[50ch] text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        What I&apos;ve actually shipped.
      </h2>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} index={i} as="li" className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
