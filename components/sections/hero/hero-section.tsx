"use client";

import Link from "next/link";

import { CursorSpotlight } from "@/components/motion/cursor-spotlight";
import { Magnetic } from "@/components/motion/magnetic";
import { TextReveal } from "@/components/motion/text-reveal";
import { HeroBackground } from "@/components/sections/hero/hero-background";
import { ScrollCue } from "@/components/sections/hero/scroll-cue";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/content/contact";
import { useHashLinkClick } from "@/lib/hooks/use-hash-link-click";

/**
 * Hero — first screen of the site (PORTFOLIO_PRD.md §9.1). Self-contained:
 * background, headline, CTAs, and scroll cue all live under this feature
 * folder so it can evolve independently of other sections.
 */
export function HeroSection() {
  const onHashClick = useHashLinkClick();

  return (
    <CursorSpotlight
      className="relative flex min-h-dvh flex-col justify-center px-6 sm:min-h-dvh sm:px-10 lg:px-16"
      color="var(--accent)"
    >
      <HeroBackground />

      <div className="mx-auto w-full max-w-3xl">
        <p className="text-text-secondary mb-6 font-mono text-sm tracking-wide uppercase">
          Frontend Engineer — Building Toward Full Stack
        </p>

        <TextReveal
          as="h1"
          lines={["Aravind Annaldas"]}
          className="font-display text-text-primary text-5xl leading-[1.08] font-semibold tracking-tight sm:text-6xl lg:text-7xl"
        />

        <p className="text-text-secondary mt-6 max-w-[42rem] text-lg leading-[1.65] sm:text-xl">
          I build the interfaces people actually use — booking flows,
          dashboards, the stuff that has to work under real traffic and real
          edge cases. Right now I&apos;m pushing past the frontend, learning the
          backend systems that sit underneath it.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic>
            <Button
              render={
                <Link
                  href="#featured-projects"
                  onClick={onHashClick("#featured-projects")}
                />
              }
              nativeButton={false}
              size="lg"
            >
              View Projects
            </Button>
          </Magnetic>

          <Button
            render={
              <a
                href={contact.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            nativeButton={false}
            variant="outline"
            size="lg"
          >
            Download Resume
          </Button>
        </div>
      </div>

      <ScrollCue />
    </CursorSpotlight>
  );
}
