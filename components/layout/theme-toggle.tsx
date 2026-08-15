"use client";

import { Monitor, Moon, Sun } from "lucide-react";

import {
  type ThemeMode,
  useTheme,
} from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

const OPTIONS: { mode: ThemeMode; label: string; icon: typeof Sun }[] = [
  { mode: "light", label: "Light theme", icon: Sun },
  { mode: "dark", label: "Dark theme", icon: Moon },
  { mode: "system", label: "System theme", icon: Monitor },
];

/**
 * Minimal 3-way theme toggle — scaffold verification piece.
 * Final visual treatment (icon-morph micro-interaction, per PRD §26) lands
 * with the Nav section, not here.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="border-border bg-surface inline-flex items-center gap-1 rounded-md border p-1"
    >
      {OPTIONS.map(({ mode, label, icon: Icon }) => (
        <button
          key={mode}
          type="button"
          role="radio"
          aria-checked={theme === mode}
          aria-label={label}
          onClick={() => setTheme(mode)}
          className={cn(
            "text-text-secondary inline-flex size-7 items-center justify-center rounded-sm transition-colors",
            "hover:text-text-primary focus-visible:outline-ring focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
            theme === mode && "bg-surface-raised text-primary",
          )}
        >
          <Icon className="size-4" />
        </button>
      ))}
    </div>
  );
}
