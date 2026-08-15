import { ClusterFilter } from "@/components/sections/expertise/cluster-filter";

/** Expertise & Stack — §9.7 (merged tech-stack + expertise, per PRD v2). */
export function ExpertiseSection() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="border-border mx-auto w-full max-w-6xl scroll-mt-16 border-t px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <p className="text-text-secondary mb-4 font-mono text-sm tracking-wide uppercase">
        05 — Expertise &amp; Stack
      </p>
      <h2
        id="expertise-heading"
        className="font-display text-text-primary max-w-[50ch] text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        What I work with, and how deep.
      </h2>
      <p className="text-text-secondary mt-4 max-w-[60ch] leading-[1.65]">
        Backend (Learning) is kept visually distinct — it&apos;s real progress,
        not professional depth yet.
      </p>

      <div className="mt-12">
        <ClusterFilter />
      </div>
    </section>
  );
}
