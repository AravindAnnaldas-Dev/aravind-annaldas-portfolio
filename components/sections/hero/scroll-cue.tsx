"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

/** Fades out once the user starts scrolling (§9.1). */
export function ScrollCue() {
  const [visible, setVisible] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className={cn(
        "text-text-secondary absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 font-mono text-xs tracking-wide uppercase transition-opacity duration-300",
        visible ? "opacity-100" : "opacity-0",
      )}
    >
      <span>Scroll</span>
      <ChevronDown
        className={cn("size-4", !reducedMotion && "animate-bounce")}
      />
    </div>
  );
}
