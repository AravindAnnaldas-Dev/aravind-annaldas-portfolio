"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { setScrollLocked } from "@/components/providers/smooth-scroll-provider";
import { Button } from "@/components/ui/button";
import { useHashLinkClick } from "@/lib/hooks/use-hash-link-click";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#backend-journey", label: "Backend" },
  { href: "/#featured-projects", label: "Projects" },
  { href: "/#expertise", label: "Expertise" },
];

/** Sticky global nav (§3) — mark, section links, theme toggle, contact CTA. */
export function Nav() {
  const [open, setOpen] = useState(false);
  const onHashClick = useHashLinkClick();

  // Lock scroll while the mobile overlay is open. `html`, not `body`, is
  // the real scrolling element (see globals.css) — locking body alone left
  // Lenis free to keep driving scroll on html underneath the overlay,
  // dragging the sticky header out of view.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const original = root.style.overflow;
    root.style.overflow = "hidden";
    setScrollLocked(true);
    return () => {
      root.style.overflow = original;
      setScrollLocked(false);
    };
  }, [open]);

  return (
    <>
      <header className="border-border bg-bg/80 sticky top-0 z-(--z-sticky) border-b backdrop-blur-md">
        <div className="relative mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16">
          <Link
            href="/"
            aria-label="Aravind Annaldas — home"
            className="focus-visible:outline-ring flex shrink-0 items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <Image
              src="/avatar.png"
              alt=""
              width={36}
              height={36}
              className="border-border size-9 rounded-full border object-cover"
              priority
            />
            <span className="font-display text-text-primary text-lg font-semibold tracking-tight">
              Aravind
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 lg:flex"
          >
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
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <ThemeToggle />
            <Button
              render={
                <Link href="/#contact" onClick={onHashClick("/#contact")} />
              }
              nativeButton={false}
            >
              Contact
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-text-primary focus-visible:outline-ring relative z-10 inline-flex size-11 items-center justify-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <ScrollProgress />
        </div>
      </header>

      {/*
        Rendered as a SIBLING of <header>, not a descendant — header has
        backdrop-blur, and a backdrop-filter ancestor becomes the containing
        block for position:fixed descendants, which broke this overlay's
        viewport-relative positioning when it lived inside <header>.
      */}
      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={`bg-bg fixed inset-x-0 top-16 bottom-0 z-(--z-overlay) flex flex-col px-6 py-8 transition-opacity duration-200 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Primary" className="flex flex-col gap-1">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                onHashClick(link.href)(e);
                setOpen(false);
              }}
              className="border-border text-text-primary border-b py-4 text-lg font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={(e) => {
              onHashClick("/#contact")(e);
              setOpen(false);
            }}
            className="text-accent py-4 text-lg font-medium"
          >
            Contact
          </Link>
        </nav>

        <div className="mt-auto">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
