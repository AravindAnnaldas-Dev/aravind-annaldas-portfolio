"use client";

import { useEffect, useState } from "react";

/** Thin scroll-progress bar under the nav (§7/§3) — orientation for long-scroll recruiters. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? scrollTop / max : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden className="bg-border absolute inset-x-0 bottom-0 h-px">
      <div
        className="bg-accent h-full origin-left"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
