"use client";

import { contact } from "@/lib/content/contact";

/** Minimal site footer (§9.12) — mark, socials, build info. */
export function Footer() {
  return (
    <footer className="border-border border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <p className="font-display text-text-primary text-sm font-semibold">
          Aravind Annaldas
        </p>

        <nav aria-label="Footer" className="flex flex-wrap gap-6">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary focus-visible:outline-ring text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary focus-visible:outline-ring text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            GitHub
          </a>
        </nav>

        <p className="text-text-secondary font-mono text-xs">
          Built with Next.js · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
