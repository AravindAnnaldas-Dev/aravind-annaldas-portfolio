import { Reveal } from "@/components/motion/reveal";

const METRICS = [
  "Sep 2023 – Present @ Enspirit Technologies",
  "Sole frontend dev · 3 booking verticals (flights, hotels, trains)",
  "Learning backend since Apr 2025: Node · Express · Prisma · Postgres",
];

/** About — §9.2. Narrative + real metric strip, no inflated claims. */
export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto grid w-full max-w-6xl scroll-mt-16 gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:px-16 lg:py-32"
    >
      <Reveal>
        <p className="text-text-secondary mb-4 font-mono text-sm tracking-wide uppercase">
          01 — About
        </p>
        <h2
          id="about-heading"
          className="font-display text-text-primary sr-only"
        >
          About
        </h2>
        <p className="text-text-primary max-w-[68ch] text-lg leading-[1.65] sm:text-xl">
          I started as the person who made sure the booking calendar didn&apos;t
          break when someone selected a return date before a departure date.
          Nearly three years in, I&apos;m the sole frontend developer on a
          travel booking platform covering flights, hotels, and trains — I own
          the search, filtering, checkout, and auth flows end to end, working
          alongside a team of backend and full-stack engineers. Most of my time
          is frontend: React, Next.js, TypeScript, React Query for data fetching
          and caching, and enough performance work — lazy loading, code
          splitting, memoization — to know where the slow parts usually hide.
          Since April 2025 I&apos;ve been working backward through the stack —
          Node, Express, Postgres, Prisma — because I want to understand the
          systems my UI is talking to, not just the contract it exposes.
        </p>
      </Reveal>

      <Reveal index={1}>
        <ul className="border-border flex flex-col gap-4 border-l pl-6">
          {METRICS.map((metric) => (
            <li
              key={metric}
              className="text-text-secondary font-mono text-sm leading-relaxed"
            >
              {metric}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
