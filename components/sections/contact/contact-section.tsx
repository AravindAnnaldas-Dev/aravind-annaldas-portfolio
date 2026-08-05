import { ExternalLink, Mail } from "lucide-react";

import { ContactForm } from "@/components/sections/contact/contact-form";
import { contact } from "@/lib/content/contact";

// lucide-react no longer ships brand/logo icons (trademark reasons) — a
// generic external-link glyph stands in for LinkedIn/GitHub instead.
const CHANNELS = [
  { label: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { label: "LinkedIn", href: contact.linkedin, icon: ExternalLink },
  { label: "GitHub", href: contact.github, icon: ExternalLink },
];

/** Contact — §9.11. Form + direct channels, contained gradient background. */
export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-border mx-auto w-full max-w-6xl scroll-mt-16 border-t px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div>
        <p className="text-text-secondary mb-4 font-mono text-sm tracking-wide uppercase">
          06 — Contact
        </p>
        <h2
          id="contact-heading"
          className="font-display text-text-primary max-w-[40ch] text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Let&apos;s talk.
        </h2>

        <div className="relative mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="border-border bg-surface shadow-ambient rounded-md border p-6 sm:p-8">
            <ContactForm />
          </div>

          <div className="border-border bg-surface shadow-ambient flex flex-col gap-6 rounded-md border p-6 sm:p-8">
            <span className="border-accent/30 text-accent w-fit rounded-full border px-3 py-1 font-mono text-xs">
              {contact.availability}
            </span>

            <ul className="flex flex-col gap-4">
              {CHANNELS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-text-secondary hover:text-text-primary focus-visible:outline-ring inline-flex items-center gap-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    <Icon className="size-4" aria-hidden />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
