import { Reveal } from "@/components/motion/reveal";
import { skills } from "@/lib/content/skills";

/** Backend Learning Journey — §9.6. Honest status per topic, no fabricated %. */
export function BackendJourneySection() {
  const backendSkills = skills.filter(
    (skill) => skill.cluster === "backend-learning",
  );

  return (
    <section
      id="backend-journey"
      aria-labelledby="backend-journey-heading"
      className="border-border mx-auto w-full max-w-6xl scroll-mt-16 border-t px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <p className="text-text-secondary mb-4 font-mono text-sm tracking-wide uppercase">
        03 — Backend Learning Journey
      </p>
      <h2
        id="backend-journey-heading"
        className="font-display text-text-primary max-w-[50ch] text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        Working backward through the stack, since April 2025.
      </h2>
      <p className="text-text-secondary mt-4 max-w-[60ch] leading-[1.65]">
        I want full ownership of the features I ship, not just the frontend
        contract. Here&apos;s honestly where each piece stands right now.
      </p>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {backendSkills.map((skill, i) => (
          <Reveal key={skill.name} index={i} as="li">
            <div className="border-border bg-surface h-full rounded-md border p-6">
              <h3 className="text-text-primary font-mono text-base font-medium">
                {skill.name}
              </h3>
              <p className="text-text-secondary mt-2 text-sm leading-relaxed">
                {skill.status}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
