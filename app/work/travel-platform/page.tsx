import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ArchitectureDiagram } from "@/components/case-study/architecture-diagram";
import { CaseStudySection } from "@/components/case-study/case-study-section";
import { TextReveal } from "@/components/motion/text-reveal";

export const metadata: Metadata = {
  title: "Travel Booking Platform — Case Study",
  description:
    "How a single Next.js frontend covers three booking verticals — flights, hotels, and trains — for a multi-vertical travel platform.",
};

const STACK = [
  "React.js",
  "Next.js",
  "TypeScript",
  "React Query",
  "Axios",
  "Context API",
  "Tailwind CSS",
  "Material UI",
];

export default function TravelPlatformCaseStudy() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 lg:px-0 lg:py-24">
      <Link
        href="/#featured-projects"
        className="text-text-secondary hover:text-text-primary focus-visible:outline-ring mb-10 inline-flex items-center gap-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to projects
      </Link>

      <p className="text-text-secondary mb-3 font-mono text-sm tracking-wide uppercase">
        Case Study
      </p>
      <TextReveal
        as="h1"
        lines={["Travel Booking Platform"]}
        className="font-display text-text-primary text-4xl font-semibold tracking-tight sm:text-5xl"
      />
      <p className="text-text-secondary mt-6 max-w-[60ch] text-lg leading-[1.65]">
        Sole frontend developer on a multi-vertical booking platform covering
        flights, hotels, and trains — search, filtering, checkout, and auth
        across all three.
      </p>

      <CaseStudySection index="Problem" title="What the business needed">
        <p>
          A single frontend covering three distinct booking verticals — flights,
          hotels, and trains — each with different search, result, and fare-rule
          shapes, without three disconnected codebases.
        </p>
      </CaseStudySection>

      <CaseStudySection index="Challenge" title="The hard part">
        <p>
          Keeping search, filtering, and checkout state consistent across three
          verticals that each talk to different third-party GDS/travel REST
          APIs, while sharing one auth/session layer and one design system.
        </p>
      </CaseStudySection>

      <CaseStudySection index="Architecture" title="How it fits together">
        <ArchitectureDiagram />
      </CaseStudySection>

      <CaseStudySection index="Tech Stack" title="What it's built with">
        <ul className="flex flex-wrap gap-2">
          {STACK.map((tech) => (
            <li
              key={tech}
              className="border-border bg-surface text-text-primary rounded-sm border px-3 py-1 font-mono text-xs"
            >
              {tech}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection index="Performance" title="Metrics">
        <p className="border-border bg-surface rounded-md border border-dashed p-4 text-sm">
          Performance metrics — measuring with Lighthouse and Next.js Bundle
          Analyzer before publish. No numbers are claimed here until
          they&apos;re real.
        </p>
      </CaseStudySection>

      <CaseStudySection index="Screenshots" title="What it looks like">
        <p className="border-border bg-surface rounded-md border border-dashed p-4 text-sm">
          Screenshots pending — real, device-framed captures from the actual
          product will replace this placeholder.
        </p>
      </CaseStudySection>

      <CaseStudySection index="Lessons Learned" title="What I'd do differently">
        <p className="border-border bg-surface rounded-md border border-dashed p-4 text-sm">
          Pending a specific decision to write honestly about — e.g. how shared
          state was handled across the three verticals.
        </p>
      </CaseStudySection>
    </main>
  );
}
