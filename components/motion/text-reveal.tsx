"use client";

import { motion } from "framer-motion";

import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

type TextRevealProps = {
  lines: string[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3" | "p";
};

/** Per-line clip-path mask reveal (§12) — hero headline, section titles. */
export function TextReveal({
  lines,
  className,
  lineClassName,
  as: Tag = "h1",
}: TextRevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            initial={
              reducedMotion ? { opacity: 0 } : { clipPath: "inset(100% 0 0 0)" }
            }
            animate={
              reducedMotion ? { opacity: 1 } : { clipPath: "inset(0% 0 0 0)" }
            }
            transition={{
              duration: reducedMotion ? 0.01 : 0.6,
              delay: reducedMotion ? 0 : i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
