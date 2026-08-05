"use client";

import { motion } from "framer-motion";

import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type FloatingChipProps = {
  label: string;
  className?: string;
  /** Stagger the drift cycle so chips don't move in lockstep */
  delay?: number;
};

/**
 * Drifting code-fragment chip for the hero background (§9.1) — references
 * real work (useQuery(), <ProtectedRoute />, POST /bookings) rather than
 * generic decoration. Transform-only animation, paused under reduced motion.
 */
export function FloatingChip({
  label,
  className,
  delay = 0,
}: FloatingChipProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.span
      aria-hidden
      className={cn(
        "border-border bg-surface/80 text-text-secondary pointer-events-none absolute rounded-md border px-3 py-1.5 font-mono text-xs whitespace-nowrap backdrop-blur-sm",
        className,
      )}
      animate={
        reducedMotion ? undefined : { y: [0, -10, 0], opacity: [0.6, 1, 0.6] }
      }
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {label}
    </motion.span>
  );
}
