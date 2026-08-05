"use client";

import { useEffect } from "react";

import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

type LenisInstance = import("lenis").default;

// Single global instance — Lenis owns the whole document's scroll, so a
// module-level reference (rather than React context) is enough for the
// hash-link click handler in use-hash-link-click.ts to reach it.
let activeLenis: LenisInstance | null = null;

/**
 * Scrolls to an in-page target through Lenis when it's running, instead of
 * a native instant jump. Native hash navigation (e.g. next/link's default
 * href="/#section" jump) fights Lenis's own rAF-driven scroll loop — Lenis
 * doesn't know the jump happened and can yank the page back mid-transition.
 * Routing every in-page nav click through this avoids that entirely.
 *
 * No manual offset here — every section already has `scroll-mt-16` (the nav
 * height) in its className for the native/reduced-motion scroll path, and
 * Lenis reads that same `scroll-margin-top` itself. Passing an offset on
 * top of it double-counts the gap and overshoots past the header.
 */
/**
 * Pauses/resumes Lenis's own rAF-driven scroll — used while the mobile nav
 * overlay is open. Body-scroll-locking via CSS alone isn't enough here:
 * Lenis attaches its own wheel/touch listeners to the document, so it keeps
 * driving the real scroll position underneath the overlay even when
 * `overflow: hidden` is set, dragging the sticky header out of view.
 */
export function setScrollLocked(locked: boolean) {
  if (locked) activeLenis?.stop();
  else activeLenis?.start();
}

export function scrollToHash(hash: string) {
  const target = document.querySelector(hash);
  if (!target) return;

  if (activeLenis) {
    activeLenis.scrollTo(target as HTMLElement);
  } else {
    (target as HTMLElement).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

/**
 * Global Lenis smooth scroll (§17/§24). The `lenis` package is dynamically
 * imported inside the effect so it never lands in the initial JS bundle —
 * only the (tiny) provider shell does. Falls back to native scroll under
 * prefers-reduced-motion, per §7/§14.
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      activeLenis = null;
      return;
    }

    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      activeLenis = new Lenis({ autoRaf: true });
    });

    return () => {
      cancelled = true;
      activeLenis?.destroy();
      activeLenis = null;
    };
  }, [reducedMotion]);

  return <>{children}</>;
}
