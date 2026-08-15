import { FloatingChip } from "@/components/sections/hero/floating-chip";

/**
 * Static dot-grid + drifting code fragments (§9.1/§23). Pure CSS background
 * image for the grid — no canvas, no per-frame JS — the cursor-reactive
 * warp is handled by the CursorSpotlight wrapper in hero-section.tsx.
 */
export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={
          {
            backgroundImage:
              "radial-gradient(color-mix(in oklch, var(--text-secondary) 40%, transparent) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            // Safari/WebKit needs the -webkit- prefixed property — the
            // unprefixed `maskImage` alone silently no-ops there.
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 35%, black 40%, transparent 90%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 35%, black 40%, transparent 90%)",
          } as React.CSSProperties
        }
      />

      <FloatingChip
        label="useQuery()"
        className="top-[18%] left-[10%] hidden sm:block"
        delay={0}
      />
      <FloatingChip
        label="<ProtectedRoute />"
        className="top-[70%] left-[60%] hidden md:block"
        delay={1.2}
      />
      <FloatingChip
        label="POST /bookings"
        className="top-[28%] right-[20%] hidden sm:block"
        delay={2.1}
      />
      <FloatingChip
        label="async function()"
        className="top-[48%] right-[6%] hidden lg:block"
        delay={0.6}
      />
      <FloatingChip
        label="GET /projects"
        className="top-[60%] left-[4%] hidden sm:block"
        delay={1.7}
      />
    </div>
  );
}
