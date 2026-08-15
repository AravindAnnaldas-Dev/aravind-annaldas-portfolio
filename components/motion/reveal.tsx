"use client";

import { motion, type Variants } from "framer-motion";

import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger index — multiplies the per-item delay (§12 card stagger: 80ms) */
  index?: number;
  as?: "div" | "li" | "article" | "section";
};

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const reducedVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/**
 * Single reusable scroll-reveal wrapper (§12 card stagger spec) — sections
 * compose this instead of hand-rolling Framer variants per component.
 */
export function Reveal({
  children,
  className,
  index = 0,
  as = "div",
}: RevealProps) {
  const reducedMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={reducedMotion ? reducedVariants : variants}
      transition={{
        duration: reducedMotion ? 0.01 : 0.5,
        delay: reducedMotion ? 0 : index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
