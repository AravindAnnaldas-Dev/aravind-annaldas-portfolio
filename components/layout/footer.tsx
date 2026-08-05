"use client";

import Link from "next/link";

import { contact } from "@/lib/content/contact";
import { useHashLinkClick } from "@/lib/hooks/use-hash-link-click";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#featured-projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

/** Minimal site footer (§9.12) — mark, nav, socials, build info. */
export function Footer() {
  const onHashClick = useHashLinkClick();

  return (
    <footer className="border-border border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <p className="font-display text-text-primary text-sm font-semibold">
          Aravind Annaldas
        </p>

        <nav aria-label="Footer" className="flex flex-wrap gap-6">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onHashClick(link.href)}
              className="text-text-secondary hover:text-text-primary focus-visible:outline-ring text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {link.label}
            </Link>
          ))}
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
