"use client";

import { useRef } from "react";

import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type CursorSpotlightProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** CSS color used as the radial-gradient center (defaults to brand accent) */
  color?: string;
};

/**
 * Cheap cursor-follow spotlight (§7/§23) via a radial-gradient CSS variable —
 * no canvas, no per-frame React state. Hero background and project cards.
 */
export function CursorSpotlight({
  children,
  className,
  id,
  color = "var(--accent)",
}: CursorSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const glowRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  };

  const setGlow = (opacity: number) => {
    glowRef.current?.style.setProperty("opacity", String(opacity));
  };

  return (
    <div
      ref={ref}
      id={id}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setGlow(1)}
      onPointerLeave={() => setGlow(0)}
      className={cn("relative overflow-hidden", className)}
      style={
        {
          "--spotlight-color": color,
        } as React.CSSProperties
      }
    >
      {!reducedMotion && (
        <div
          ref={glowRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(320px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), color-mix(in oklch, var(--spotlight-color) 15%, transparent), transparent 70%)",
          }}
        />
      )}
      {children}
    </div>
  );
}
