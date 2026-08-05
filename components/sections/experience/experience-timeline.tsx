"use client";

import { useRef } from "react";

import { Reveal } from "@/components/motion/reveal";
import { type ExperienceEntry } from "@/lib/content/experience";
import { useScrollProgressLine } from "@/lib/hooks/use-scroll-progress-line";

function formatRange(entry: ExperienceEntry) {
  const start = new Date(entry.startDate).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  const end =
    entry.endDate === "present"
      ? "Present"
      : new Date(entry.endDate).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        });
  return `${start} – ${end}`;
}

/** Client half of Experience — owns the scroll-tied progress line (§7/§12). */
export function ExperienceTimeline({ entry }: { entry: ExperienceEntry }) {
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollProgressLine(containerRef);

  return (
    <div
      ref={containerRef}
      className="relative grid gap-8 sm:grid-cols-[auto_1fr] sm:gap-10"
      style={{ "--progress": 0 } as React.CSSProperties}
    >
      <div
        aria-hidden
        className="bg-border relative hidden w-px self-stretch sm:block"
      >
        <div
          className="bg-accent absolute top-0 left-0 w-full origin-top"
          style={{
            height: "100%",
            transform: "scaleY(var(--progress, 0))",
          }}
        />
      </div>

      <div>
        <h3 className="font-display text-text-primary text-2xl font-semibold">
          {entry.role}
        </h3>
        <p className="text-text-secondary mt-1 font-mono text-sm">
          {entry.company} — {entry.location}
        </p>
        <p className="text-text-secondary mt-1 font-mono text-sm">
          {formatRange(entry)}
        </p>

        <ul className="mt-6 flex flex-col gap-4">
          {entry.storyBeats.map((beat, i) => (
            <Reveal key={beat} index={i} as="li">
              <p className="text-text-primary max-w-[64ch] leading-[1.65]">
                {beat}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  );
}
