"use client";

import { type RefObject, useEffect } from "react";

import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

/**
 * Lazy-loads GSAP + ScrollTrigger only when a scroll-tied progress line
 * mounts (Experience, Milestones — §7/§12), instead of shipping GSAP in the
 * global bundle. Animates `--progress` (0-1) as a CSS variable on `target`;
 * the caller renders the actual line with `scaleY: var(--progress)`.
 */
export function useScrollProgressLine(target: RefObject<HTMLElement | null>) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = target.current;
    if (!el || reducedMotion) return;

    let scrollTrigger: { kill: () => void } | undefined;
    let cancelled = false;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { default: ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);

        scrollTrigger = ScrollTrigger.create({
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          onUpdate: (self) => {
            el.style.setProperty("--progress", String(self.progress));
          },
        });
      },
    );

    return () => {
      cancelled = true;
      scrollTrigger?.kill();
    };
  }, [target, reducedMotion]);
}
