import { ExperienceTimeline } from "@/components/sections/experience/experience-timeline";
import { experience } from "@/lib/content/experience";

/** Experience — §9.3. Story-framed, not bullet-listed; scroll-tied progress line. */
export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-border mx-auto w-full max-w-6xl scroll-mt-16 border-t px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <p className="text-text-secondary mb-4 font-mono text-sm tracking-wide uppercase">
        02 — Experience
      </p>
      <h2 id="experience-heading" className="font-display sr-only">
        Experience
      </h2>

      <div className="flex flex-col gap-16">
        {experience.map((entry) => (
          <ExperienceTimeline key={entry.company} entry={entry} />
        ))}
      </div>
    </section>
  );
}
